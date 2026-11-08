/* =========================================================
   firebase.js — Khởi tạo Firebase (compat SDK), đăng nhập
   Google + Email/Mật khẩu, đăng nhập Cục bộ, xác định quyền Admin.
   ========================================================= */
(function () {
  const C = window.APP_CONFIG;
  const FB = {
    available: false,
    app: null,
    auth: null,
    fs: null,
    rtdb: null,
    user: null,
    isAdmin: false,
    isLocalMode: false,
    _subs: [],
    ready: null
  };

  /* Kiểm tra xem web có đang chạy cục bộ (file, localhost, IP nội bộ) không */
  FB.isLocal = () => {
    try {
      if (C && C.allowLocalAuth === false) return false;
      const proto = window.location.protocol;
      const h = window.location.hostname;
      return proto === "file:" ||
             h === "localhost" ||
             h === "127.0.0.1" ||
             h === "0.0.0.0" ||
             h === "" ||
             h.endsWith(".local") ||
             h.startsWith("192.168.") ||
             h.startsWith("10.") ||
             /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(h);
    } catch (e) {
      return false;
    }
  };

  FB.init = () => {
    if (FB.ready) return FB.ready;
    FB.ready = new Promise((resolve) => {
      let localSaved = null;
      try {
        const s = localStorage.getItem("gfe_local_user");
        if (s) localSaved = JSON.parse(s);
      } catch (e) { }

      try {
        if (!window.firebase || !firebase.initializeApp) throw new Error("no sdk");
        FB.app = firebase.apps.length ? firebase.app() : firebase.initializeApp(C.firebase);
        FB.auth = firebase.auth();
        FB.fs = firebase.firestore();
        try { FB.fs.enablePersistence({ synchronizeTabs: true }).catch(() => { }); } catch (e) { }
        try { FB.rtdb = firebase.database(); } catch (e) { FB.rtdb = null; }
        FB.available = true;
        let first = true;
        FB.auth.onAuthStateChanged((u) => {
          if (u) {
            FB.user = u;
            FB.updateRoles(u);
            FB.isLocalMode = false;
            FB.touchUser(u);
          } else if (localSaved && FB.isLocal()) {
            FB.user = localSaved;
            FB.updateRoles(localSaved);
            FB.isLocalMode = true;
          } else {
            FB.user = null;
            FB.updateRoles(null);
            FB.isLocalMode = false;
          }
          FB._subs.forEach((f) => { try { f(FB.user); } catch (e) { console.error(e); } });
          if (first) { first = false; resolve(true); }
        });
        // phòng khi auth không phản hồi (offline)
        setTimeout(() => {
          if (first) {
            first = false;
            if (!FB.user && localSaved && FB.isLocal()) {
              FB.user = localSaved;
              FB.updateRoles(localSaved);
              FB.isLocalMode = true;
              FB._subs.forEach((f) => { try { f(FB.user); } catch (e) { console.error(e); } });
            }
            resolve(true);
          }
        }, 3000);
        FB.auth.getRedirectResult().catch((e) => e && e.code && U.toast(FB.errMsg(e), "err"));
      } catch (e) {
        FB.available = false;
        if (localSaved && FB.isLocal()) {
          FB.user = localSaved;
          FB.updateRoles(localSaved);
          FB.isLocalMode = true;
          FB._subs.forEach((f) => { try { f(FB.user); } catch (er) { console.error(er); } });
        }
        resolve(false);
      }
    });
    return FB.ready;
  };

  FB.checkSuperAdmin = (u) => {
    if (!u || !u.email) return false;
    const em = u.email.toLowerCase();
    const isListed = (C.adminEmails || ["tailieutoantbs@gmail.com"]).map((x) => x.toLowerCase()).includes(em);
    const viaGoogle = (u.providerData || []).some((p) => p.providerId === "google.com");
    return isListed && (u.emailVerified || viaGoogle || u.isLocal);
  };

  FB.checkCreator = (u) => {
    if (!u || !u.email) return false;
    if (FB.checkSuperAdmin(u)) return true;
    const em = u.email.toLowerCase();
    const db = window.DB;
    const creatorList = (db && db.settings && Array.isArray(db.settings.creatorEmails))
      ? db.settings.creatorEmails.map((x) => String(x).toLowerCase().trim())
      : [];
    return creatorList.includes(em);
  };

  FB.checkAdmin = (u) => {
    return FB.checkSuperAdmin(u) || FB.checkCreator(u);
  };

  FB.updateRoles = (u) => {
    FB.isSuperAdmin = FB.checkSuperAdmin(u);
    FB.isCreator = FB.checkCreator(u);
    FB.isAdmin = FB.isSuperAdmin || FB.isCreator;
  };

  FB.onAuth = (fn) => { FB._subs.push(fn); };

  FB.touchUser = (u) => {
    try {
      if (!FB.fs || FB.isLocalMode) return;
      FB.fs.collection("users").doc(u.uid).set({
        email: u.email || "", displayName: u.displayName || "", photoURL: u.photoURL || "",
        provider: (u.providerData && u.providerData[0] && u.providerData[0].providerId) || "",
        role: FB.isSuperAdmin ? "admin" : (FB.isCreator ? "creator" : "user"),
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true }).catch(() => { });
    } catch (e) { }
  };

  /* Đăng nhập giả lập cục bộ dành riêng cho kiểm tra web */
  FB.signInLocal = (customUser) => {
    const adminEmail = (C.adminEmails && C.adminEmails[0]) || "tailieutoantbs@gmail.com";
    const u = customUser || {
      uid: "local_admin_tbs",
      email: adminEmail,
      displayName: "HÙNG TBS (Quản trị)",
      photoURL: "",
      emailVerified: true,
      isLocal: true,
      providerData: [{ providerId: "google.com", email: adminEmail }]
    };
    FB.user = u;
    FB.isLocalMode = true;
    FB.updateRoles(u);
    try {
      localStorage.setItem("gfe_local_user", JSON.stringify(u));
    } catch (e) { }
    FB._subs.forEach((f) => { try { f(u); } catch (e) { console.error(e); } });
    return u;
  };

  FB.signInGoogle = async () => {
    if (!FB.available) throw new Error("offline");
    const p = new firebase.auth.GoogleAuthProvider(); p.setCustomParameters({ prompt: "select_account" });
    try { return await FB.auth.signInWithPopup(p); }
    catch (e) {
      if (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment") return FB.auth.signInWithRedirect(p);
      throw e;
    }
  };
  FB.signInEmail = (email, pw) => FB.auth.signInWithEmailAndPassword(email.trim(), pw);
  FB.register = async (email, pw, name) => {
    const cred = await FB.auth.createUserWithEmailAndPassword(email.trim(), pw);
    if (name) await cred.user.updateProfile({ displayName: name });
    try { await cred.user.sendEmailVerification(); } catch (e) { }
    return cred;
  };
  FB.resetPassword = (email) => FB.auth.sendPasswordResetEmail(email.trim());
  FB.signOut = async () => {
    try { localStorage.removeItem("gfe_local_user"); } catch (e) { }
    FB.isLocalMode = false;
    if (FB.auth) {
      try { await FB.auth.signOut(); } catch (e) { }
    }
    FB.user = null;
    FB.isAdmin = false;
    FB._subs.forEach((f) => { try { f(null); } catch (e) { console.error(e); } });
  };
  FB.ts = () => FB.available ? firebase.firestore.FieldValue.serverTimestamp() : Date.now();
  FB.name = () => FB.user ? (FB.user.displayName || (FB.user.email || "").split("@")[0]) : "Khách";

  FB.errMsg = (e) => {
    const m = {
      "auth/invalid-email": "Email không hợp lệ.",
      "auth/user-not-found": "Không tìm thấy tài khoản.",
      "auth/wrong-password": "Sai mật khẩu.",
      "auth/invalid-credential": "Email hoặc mật khẩu không đúng.",
      "auth/invalid-login-credentials": "Email hoặc mật khẩu không đúng.",
      "auth/email-already-in-use": "Email đã được sử dụng.",
      "auth/weak-password": "Mật khẩu cần ít nhất 6 ký tự.",
      "auth/popup-closed-by-user": "Bạn đã đóng cửa sổ đăng nhập.",
      "auth/network-request-failed": "Lỗi mạng — kiểm tra kết nối Internet.",
      "auth/unauthorized-domain": "Tên miền chưa được cấp phép trong Firebase Auth (khi chạy cục bộ, vui lòng dùng nút 'Đăng nhập Quản trị viên (Cục bộ)').",
      "auth/operation-not-allowed": "Phương thức đăng nhập chưa được bật trong Firebase Console.",
      "auth/too-many-requests": "Thử quá nhiều lần, vui lòng đợi một lát.",
      "permission-denied": "Không có quyền thực hiện (kiểm tra Security Rules).",
      "PERMISSION_DENIED": "Không có quyền thực hiện (kiểm tra Security Rules)."
    };
    return m[e && e.code] || (e && e.message) || String(e);
  };

  window.FB = FB;
})();
