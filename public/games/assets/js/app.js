/* =========================================================
   app.js — Khung ứng dụng: router, menu hamburger, theme,
   đăng nhập, khởi động.
   ========================================================= */
(function () {
  const { $, $$, esc, h } = U;
  const App = { routes: [], cleanup: null };
  window.App = App;
  const desktop = () => matchMedia("(min-width: 900px)").matches;

  Games.comingSoon([
    { id: "nhanh-chop", name: "Nhanh như chớp", icon: "⚡", colors: ["#f59e0b", "#ef4444"], desc: "Chuỗi câu hỏi tốc độ — trả lời càng nhanh điểm càng cao." },
    { id: "ghep-the", name: "Lật thẻ trí nhớ", icon: "🃏", colors: ["#06b6d4", "#8b5cf6"], desc: "Lật cặp thẻ câu hỏi – đáp án trùng nhau để ghi điểm." }
  ]);

  /* ---------------- Router ---------------- */
  App.route = (pattern, fn, o) => {
    const keys = []; const re = new RegExp("^" + pattern.replace(/:(\w+)/g, (_, k) => { keys.push(k); return "([^/]+)"; }) + "/?$");
    App.routes.push(Object.assign({ re, keys, fn, pattern }, o || {}));
  };
  App.go = (p) => { if (location.hash === "#" + p) App.render(); else location.hash = "#" + p; };
  App.path = () => (location.hash.replace(/^#/, "") || "/").split("?")[0];
  App.query = () => { const q = {}; const qs = location.hash.split("?")[1] || ""; qs.split("&").forEach((kv) => { if (!kv) return; const [k, v] = kv.split("="); q[decodeURIComponent(k)] = decodeURIComponent(v || "1"); }); return q; };
  App.render = async () => {
    const path = App.path();
    if (App.cleanup) { try { App.cleanup(); } catch (e) { console.error(e); } App.cleanup = null; }
    U.resetReveal();
    let r = null, params = {};
    for (const x of App.routes) { const m = path.match(x.re); if (m) { r = x; x.keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1]))); break; } }
    const view = $("#view");
    $("#main").scrollTop = 0;
    if (!r) { view.innerHTML = `<div class="page"><div class="empty"><span class="em-ic">🧭</span><h2>Không tìm thấy trang</h2><a class="btn btn-primary" href="#/">Về trang chủ</a></div></div>`; return; }
    if (r.admin && !FB.isAdmin) {
      const isLoc = FB.isLocal && FB.isLocal();
      view.innerHTML = `<div class="page"><div class="empty"><span class="em-ic">🔐</span><h2>Khu vực dành cho quản trị viên</h2><p>Vui lòng đăng nhập bằng tài khoản quản trị.</p><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn btn-primary" id="lg">Đăng nhập</button>${isLoc ? '<button class="btn btn-fun" id="lgLocal">👑 Đăng nhập Quản trị viên (Cục bộ)</button>' : ''}</div></div></div>`;
      $("#lg", view).onclick = () => App.openAuth();
      if (isLoc && $("#lgLocal", view)) {
        $("#lgLocal", view).onclick = () => {
          FB.signInLocal();
          U.toast("Đã đăng nhập Quản trị viên (chế độ cục bộ) 🎉", "ok");
          App.buildDrawer();
          App.render();
        };
      }
      setCrumb("Quản trị"); markNav(path); return;
    }
    if (r.superAdmin && !FB.isSuperAdmin) {
      view.innerHTML = `<div class="page"><div class="empty"><span class="em-ic">🛡️</span><h2>Khu vực Quản trị viên tối cao</h2><p>Chức năng này chỉ dành riêng cho Thầy Hùng TBS (${esc((APP_CONFIG.adminEmails || ['tailieutoantbs@gmail.com'])[0])}).</p><a class="btn btn-primary" href="#/admin">Về Tổng quan quản trị</a></div></div>`;
      setCrumb("Giới hạn quyền"); markNav(path); return;
    }
    setCrumb(typeof r.title === "function" ? r.title(params) : r.title || "");
    App.applyBrand();
    markNav(path);
    if (!desktop()) document.body.classList.remove("m-open");
    try { App.cleanup = (await r.fn(view, params)) || null; } catch (e) { console.error(e); view.innerHTML = `<div class="page"><div class="notice">⛔ Lỗi: ${esc(e.message)}</div></div>`; }
  };
  function setCrumb(t) { $("#crumb").textContent = t || ""; document.title = (t ? t + " · " : "") + DB.settings.siteName; }
  function markNav(path) { $$(".nav-item[data-href]").forEach((a) => a.classList.toggle("active", a.dataset.href === path || (a.dataset.href !== "/" && path.startsWith(a.dataset.href + "/") && !a.dataset.exact))); }

  /* ---------------- Khi vào / ra màn chơi ---------------- */
  let wasOpen = null;
  App.enterGame = (on) => {
    const b = document.body;
    if (on) U.Music.start(); else { U.Music.stop(); const sp = document.querySelector(".snd-pop"); if (sp) sp.remove(); }
    if (on && !b.classList.contains("in-game")) { b.classList.add("in-game"); if (desktop()) { wasOpen = b.classList.contains("drawer-open"); b.classList.remove("drawer-open"); } }
    else if (!on && b.classList.contains("in-game")) { b.classList.remove("in-game"); if (desktop() && wasOpen) b.classList.add("drawer-open"); wasOpen = null; }
  };

  /* ---------------- Menu hamburger ---------------- */
  App.buildDrawer = () => {
    let i = 0; const n = () => i++;
    const item = (href, ic, tx, o) => `<a class="nav-item" href="#${href}" data-href="${href}" ${o && o.exact ? 'data-exact="1"' : ""} title="${esc(tx)}" style="--i:${n()}"><span class="ni-ic" ${o && o.g ? `style="--g:${o.g}"` : ""}>${ic}</span><span class="ni-tx">${esc(tx)}</span>${o && o.badge ? `<span class="ni-badge">${o.badge}</span>` : ""}</a>`;
    const sec = (t) => `<div class="nav-sec" style="--i:${n()}">${t}</div>`;
    let html = sec("Khám phá") + item("/", "🏠", "Trang chủ", { exact: true, g: "linear-gradient(135deg,#ede9fe,#c4b5fd)" }) + item("/host", "📡", "Mở phòng thi", { g: "linear-gradient(135deg,#bae6fd,#38bdf8)", badge: "Host" }) + item("/join", "🔢", "Vào phòng bằng PIN", { g: "linear-gradient(135deg,#dcfce7,#86efac)" }) + item("/bang-vang", "🏆", "Bảng vàng", { g: "linear-gradient(135deg,#fef9c3,#fde047)" });
    html += sec("Trò chơi");
    Games.enabled().forEach((g) => (html += item("/game/" + g.id, g.icon, g.name, { g: `linear-gradient(135deg,${U.shade(g.colors[0], 0.7)},${U.shade(g.colors[1], 0.55)})`, badge: g.modes.includes("online") ? "Online" : "" })));
    Games.soon.forEach((s) => (html += `<div class="nav-item disabled" title="${esc(s.name)} — sắp ra mắt" style="--i:${n()}"><span class="ni-ic">${s.icon}</span><span class="ni-tx">${esc(s.name)}</span><span class="ni-badge soon">Sắp có</span></div>`));
    if (window.Activities && Activities.list.length) {
      html += sec("Hoạt động");
      Activities.list.forEach((a) => (html += item("/hoat-dong/" + a.id, a.icon, a.name, { g: `linear-gradient(135deg,${U.shade(a.colors[0], 0.7)},${U.shade(a.colors[1], 0.55)})`, badge: "Vui" })));
    }
    if (FB.isAdmin) {
      html += sec(FB.isSuperAdmin ? "Quản trị hệ thống" : "Khu vực biên soạn");
      const admList = [
        ["/admin", "📊", "Tổng quan"],
        ["/admin/questions", "📚", "Ngân hàng câu hỏi"],
        ["/admin/sets", "🧩", "Bộ đề & phân bổ game"],
        ["/admin/classes", "🏫", "Lớp & nhóm học"],
        ["/admin/presets", "💾", "Cấu hình soạn sẵn"],
        ["/admin/scores", "🏅", "Điểm số người chơi"],
        ["/admin/rooms", "📡", "Phòng trực tuyến"]
      ];
      if (FB.isSuperAdmin) {
        admList.push(["/admin/users", "👥", "Người dùng & phân quyền"]);
        admList.push(["/admin/settings", "⚙️", "Cài đặt web"]);
      }
      admList.forEach(([hr, ic, tx]) => (html += item(hr, ic, tx, { exact: hr === "/admin", g: "linear-gradient(135deg,#e0e7ff,#a5b4fc)" })));
    }
    $("#navList").innerHTML = html;
    const u = FB.user;
    const roleTxt = FB.isSuperAdmin
      ? (FB.isLocalMode ? "👑 Quản trị tối cao (Cục bộ)" : "👑 Quản trị tối cao")
      : (FB.isCreator ? "✏️ Người biên soạn (Chỉ tạo)" : esc(u ? u.email || "" : ""));
    const contactHtml = `
      <div class="drawer-contact" title="Liên hệ Quản trị Ms Trúc: 0908.959.627">
        <div class="dc-info">
          <span class="dc-name">📞 ${(window.APP_CONFIG && APP_CONFIG.adminName) || "Ms Trúc"}</span>
          <a class="dc-phone" href="tel:${(window.APP_CONFIG && APP_CONFIG.adminPhoneTel) || '0908959627'}">${(window.APP_CONFIG && APP_CONFIG.adminPhone) || "0908.959.627"}</a>
        </div>
        <a class="dc-zalo" href="${(window.APP_CONFIG && APP_CONFIG.adminZalo) || 'https://zalo.me/0908959627'}" target="_blank" rel="noopener" title="Nhắn tin Zalo cho Ms Trúc">Zalo</a>
      </div>`;
    $("#drawerFoot").innerHTML = (u
      ? `<div class="user-card">${avatar(u, 34)}<div class="uc-tx"><b>${esc(FB.name())}</b><small>${roleTxt}</small></div><button class="btn btn-sm btn-icon btn-ghost uc-out" id="dOut" title="Đăng xuất">⎋</button></div>`
      : `<button class="nav-item" id="dLogin" title="Đăng nhập" style="--i:${n()}"><span class="ni-ic" style="--g:linear-gradient(135deg,#0d6efd,#dc2626)">🔐</span><span class="ni-tx">Đăng nhập</span></button>`) + contactHtml;
    const lo = $("#dOut"); if (lo) lo.onclick = async () => { await FB.signOut(); U.toast("Đã đăng xuất", "info"); };
    const li = $("#dLogin"); if (li) li.onclick = () => App.openAuth();
    $("#tbUser").innerHTML = u ? avatar(u, 30) : `<span class="tb-btn">🔐 <span class="hide-sm">Đăng nhập</span></span>`;
    markNav(App.path());
    if (App.refreshSearch) App.refreshSearch();
  };
  function avatar(u, s) {
    return u.photoURL ? `<img class="ava" src="${esc(u.photoURL)}" referrerpolicy="no-referrer" style="width:${s}px;height:${s}px" alt="">` : `<span class="ava" style="width:${s}px;height:${s}px">${esc((FB.name() || "?").charAt(0).toUpperCase())}</span>`;
  }
  App.applyBrand = () => {
    const tx = $(".brand-tx");
    if (tx) tx.textContent = "GAME AND LEARN";
    const sub = $(".brand-sub");
    if (sub) sub.textContent = "TRƯỜNG THCS TÂN BÌNH";
  };

  /* ---------------- Tìm kiếm nhanh trong menu ---------------- */
  function setupSearch() {
    const inp = $("#navSearch"), ic = $("#navSearchIc"), clr = $("#navSearchClear");
    if (!inp) return;
    const openDrawer = () => { if (desktop()) { if (!document.body.classList.contains("drawer-open")) { document.body.classList.add("drawer-open"); U.store.set("drawerOpen", true); } } else document.body.classList.add("m-open"); };
    ic.onclick = () => { openDrawer(); setTimeout(() => inp.focus(), 120); };
    const apply = () => {
      const q = U.norm(inp.value.trim());
      document.body.classList.toggle("searching", !!q);
      const items = $$("#navList .nav-item");
      let any = false;
      items.forEach((el) => {
        const tx = U.norm(el.textContent);
        const hit = !q || tx.includes(q);
        el.classList.toggle("s-hide", !!q && !hit);
        if (hit && q) any = true;
      });
      // ẩn tiêu đề nhóm không còn mục nào
      $$("#navList .nav-sec").forEach((s) => {
        let has = false, e = s.nextElementSibling;
        while (e && !e.classList.contains("nav-sec")) { if (e.classList.contains("nav-item") && !e.classList.contains("s-hide")) { has = true; break; } e = e.nextElementSibling; }
        s.classList.toggle("s-hide", !!q && !has);
      });
      let none = $("#navNone");
      if (q && !any) { if (!none) { none = U.h(`<div class="nav-none" id="navNone">🔍 Không tìm thấy “<b></b>”</div>`); $("#navList").appendChild(none); } $("b", none).textContent = inp.value.trim(); none.classList.remove("s-hide"); }
      else if (none) none.classList.add("s-hide");
      clr.classList.toggle("show", !!inp.value);
    };
    inp.addEventListener("input", apply);
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { inp.value = ""; apply(); inp.blur(); }
      if (e.key === "Enter") { const first = $$("#navList .nav-item:not(.s-hide)[data-href]")[0]; if (first) { App.go(first.dataset.href.replace(/^#/, "")); inp.value = ""; apply(); if (!desktop()) document.body.classList.remove("m-open"); } }
    });
    clr.onclick = () => { inp.value = ""; apply(); inp.focus(); };
  }
  App.refreshSearch = () => { const inp = $("#navSearch"); if (inp && inp.value) inp.dispatchEvent(new Event("input")); };

  /* ---------------- Đăng nhập / Đăng ký ---------------- */
  App.openAuth = () => {
    const isLoc = FB.isLocal && FB.isLocal();
    if (!FB.available && !isLoc) return U.toast("Không kết nối được Firebase — kiểm tra Internet.", "err");
    if (FB.user) {
      const u = FB.user;
      return U.modal({
        title: "Tài khoản",
        size: "sm",
        body: `<div style="text-align:center">${avatar(u, 72).replace('class="ava"', 'class="ava" style="width:72px;height:72px;margin:0 auto 10px;font-size:28px"')}<h3>${esc(FB.name())}</h3><p class="muted">${esc(u.email || "")}<br>${FB.isAdmin ? "👑 Quản trị viên" + (FB.isLocalMode ? " (Cục bộ)" : "") : "Người dùng"}${!u.emailVerified && !(u.providerData || []).some((p) => p.providerId === "google.com") ? "<br>⚠️ Email chưa xác minh" : ""}</p></div>`,
        actions: [
          { label: "Đóng", cls: "btn-ghost" },
          { label: "⎋ Đăng xuất", cls: "btn-danger", onClick: async () => { await FB.signOut(); U.toast("Đã đăng xuất"); App.buildDrawer(); App.render(); } }
        ]
      });
    }
    let mode = "in";
    const body = h(`<div>
      <div class="auth-hero"><div class="ah-ic">🎮</div><p>Đăng nhập để tạo phòng trực tuyến, lưu điểm và quản trị.</p></div>
      ${isLoc ? `<div class="local-auth-box" style="margin-bottom:14px;padding:12px;background:rgba(108,76,245,0.08);border:1.5px dashed var(--pri,#6c4cf5);border-radius:12px;text-align:center">
        <div style="font-weight:700;color:var(--pri,#6c4cf5);margin-bottom:4px;font-size:13.5px">🛠️ Đang chạy cục bộ (Kiểm tra web)</div>
        <p style="margin:0 0 10px;font-size:12px;color:var(--tx-sub,#64748b);line-height:1.4">Đăng nhập nhanh với quyền Quản trị viên để kiểm tra tính năng trước khi cập nhật web.</p>
        <button class="btn btn-primary" id="localAdminIn" style="width:100%;justify-content:center;font-weight:700">👑 Đăng nhập Quản trị viên (Cục bộ)</button>
        <div style="margin-top:8px"><a href="#" id="localUserIn" style="font-size:12px;color:var(--tx-sub,#64748b);text-decoration:underline">Hoặc thử với vai trò Người dùng / Học sinh</a></div>
      </div>` : ""}
      <div class="seg auth-tabs"><button data-m="in" class="on">Đăng nhập</button><button data-m="up">Tạo tài khoản</button></div>
      <button class="gbtn" id="gIn"><svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>Tiếp tục với Google</button>
      <div class="or">hoặc dùng email</div>
      <div class="stack">
        <div class="field up-only hide"><label>Tên hiển thị</label><input class="input" id="aName" placeholder="VD: Cô Dung"></div>
        <div class="field"><label>Email</label><input class="input" id="aEmail" type="email" autocomplete="email" placeholder="ban@email.com"></div>
        <div class="field"><label>Mật khẩu</label><input class="input" id="aPw" type="password" autocomplete="current-password" placeholder="••••••"></div>
        <button class="btn btn-lg btn-primary" id="aGo">Đăng nhập</button>
        <a href="#" id="aForgot" class="muted" style="text-align:center;font-size:13px">Quên mật khẩu?</a>
      </div></div>`);
    const m = U.modal({ title: "🔐 Đăng nhập", size: "sm", body, autofocus: false });
    if (isLoc) {
      const bAdmin = $("#localAdminIn", body);
      if (bAdmin) bAdmin.onclick = () => {
        FB.signInLocal();
        m.close();
        U.toast("Đã đăng nhập Quản trị viên (chế độ cục bộ) 🎉", "ok");
        App.buildDrawer();
        App.render();
      };
      const bUser = $("#localUserIn", body);
      if (bUser) bUser.onclick = (e) => {
        e.preventDefault();
        FB.signInLocal({
          uid: "local_user_test",
          email: "hocsinh@test.local",
          displayName: "Học sinh thử nghiệm",
          photoURL: "",
          emailVerified: true,
          isLocal: true,
          providerData: [{ providerId: "password", email: "hocsinh@test.local" }]
        });
        m.close();
        U.toast("Đã đăng nhập Học sinh thử nghiệm 🎒", "ok");
        App.buildDrawer();
        App.render();
      };
    }
    const setMode = (md) => { mode = md; $$(".auth-tabs button", body).forEach((b) => b.classList.toggle("on", b.dataset.m === md)); $$(".up-only", body).forEach((e) => e.classList.toggle("hide", md !== "up")); $("#aGo", body).textContent = md === "up" ? "Tạo tài khoản" : "Đăng nhập"; $("#aForgot", body).classList.toggle("hide", md === "up"); };
    $$(".auth-tabs button", body).forEach((b) => (b.onclick = () => setMode(b.dataset.m)));
    $("#gIn", body).onclick = async () => {
      try {
        await FB.signInGoogle();
        m.close();
        U.toast("Đăng nhập thành công 🎉", "ok");
      } catch (e) {
        if (isLoc) {
          U.toast("Đang chạy cục bộ: Hãy bấm nút 'Đăng nhập Quản trị viên (Cục bộ)' ở trên!", "warn", 6000);
        } else {
          U.toast(FB.errMsg(e), "err", 5000);
        }
      }
    };
    const go = async () => {
      const em = $("#aEmail", body).value.trim(), pw = $("#aPw", body).value, b = $("#aGo", body);
      if (!em || !pw) return U.toast("Nhập email và mật khẩu", "warn");
      b.disabled = true;
      try {
        if (mode === "up") { await FB.register(em, pw, $("#aName", body).value.trim()); U.toast("Đã tạo tài khoản! Kiểm tra email để xác minh.", "ok", 5000); }
        else { await FB.signInEmail(em, pw); U.toast("Đăng nhập thành công 🎉", "ok"); }
        m.close();
      } catch (e) {
        if (isLoc && (APP_CONFIG.adminEmails || []).map((x) => x.toLowerCase()).includes(em.toLowerCase())) {
          FB.signInLocal();
          m.close();
          U.toast("Đã đăng nhập Quản trị viên (cục bộ) 🎉", "ok");
          App.buildDrawer();
          App.render();
          return;
        }
        U.toast(FB.errMsg(e), "err", 5000);
        b.disabled = false;
      }
    };
    $("#aGo", body).onclick = go; $("#aPw", body).addEventListener("keydown", (e) => e.key === "Enter" && go());
    $("#aForgot", body).onclick = async (e) => { e.preventDefault(); const em = $("#aEmail", body).value; if (!em) return U.toast("Nhập email trước", "warn"); try { await FB.resetPassword(em); U.toast("Đã gửi email đặt lại mật khẩu", "ok"); } catch (er) { U.toast(FB.errMsg(er), "err"); } };
  };

  /* ---------------- Theme ---------------- */
  App.setTheme = (t) => { document.documentElement.dataset.theme = t; U.store.set("theme", t); try { localStorage.setItem("gfe_theme_raw", t); } catch (e) { } $('meta[name="theme-color"]').content = t === "dark" ? "#0b0d1d" : "#6c4cf5"; };

  /* ---------------- Routes ---------------- */
  App.route("/", (v) => HomePage(v), { title: "Trang chủ" });
  App.route("/host", (v) => HostPage(v), { title: "Mở phòng thi trực tuyến" });
  App.route("/game/:id", (v, p) => GameKit.page(v, p.id), { title: (p) => (Games.get(p.id) || {}).name || "Trò chơi" });
  App.route("/hoat-dong/:id", (v, p) => {
    const a = window.Activities && Activities.get(p.id);
    if (!a) { v.innerHTML = `<div class="page"><div class="empty"><span class="em-ic">🕵️</span><h2>Không tìm thấy hoạt động</h2><a class="btn btn-primary" href="#/">Về trang chủ</a></div></div>`; return; }
    return a.mount(v);
  }, { title: (p) => ((window.Activities && Activities.get(p.id)) || {}).name || "Hoạt động" });
  App.route("/join", (v) => PlayerPage(v), { title: "Vào phòng" });
  App.route("/join/:pin", (v, p) => PlayerPage(v, p.pin), { title: (p) => "Phòng " + p.pin });
  App.route("/bang-vang", (v) => LeaderboardPage(v), { title: "Bảng vàng" });
  App.route("/admin", (v) => Admin.dashboard(v), { title: "Quản trị", admin: true });
  App.route("/admin/questions", (v) => Admin.questions(v), { title: "Ngân hàng câu hỏi", admin: true });
  App.route("/admin/sets", (v) => Admin.sets(v), { title: "Bộ đề & phân bổ", admin: true });
  App.route("/admin/classes", (v) => Admin.classes(v), { title: "Lớp & nhóm học", admin: true });
  App.route("/admin/presets", (v) => Admin.presets(v), { title: "Cấu hình soạn sẵn", admin: true });
  App.route("/admin/scores", (v) => Admin.scores(v), { title: "Điểm số", admin: true });
  App.route("/admin/rooms", (v) => Admin.rooms(v), { title: "Phòng trực tuyến", admin: true });
  App.route("/admin/users", (v) => Admin.users(v), { title: "Người dùng & phân quyền", admin: true, superAdmin: true });
  App.route("/admin/settings", (v) => Admin.settings(v), { title: "Cài đặt", admin: true, superAdmin: true });

  /* ---------------- Khởi động ---------------- */
  async function boot() {
    // trạng thái menu
    const pref = U.store.get("drawerOpen", null);
    if (desktop() && (pref === null ? innerWidth >= 1280 : pref)) document.body.classList.add("drawer-open");
    $("#hb").onclick = () => {
      U.Sound.click();
      if (desktop()) { const o = document.body.classList.toggle("drawer-open"); U.store.set("drawerOpen", o); if (document.body.classList.contains("in-game")) wasOpen = o; }
      else document.body.classList.toggle("m-open");
    };
    $("#backdrop").onclick = () => document.body.classList.remove("m-open");
    $("#navList").addEventListener("click", (e) => { if (e.target.closest("a") && !desktop()) document.body.classList.remove("m-open"); });
    setupSearch();
    $("#themeSw").onclick = () => { App.setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"); U.Sound.pop(); };
    $("#tbJoin").onclick = () => App.go("/join");
    $("#tbFs").onclick = () => U.fullscreen();
    $("#tbUser").onclick = () => App.openAuth();
    addEventListener("online", () => ($("#netBadge").classList.add("hide")));
    addEventListener("offline", () => ($("#netBadge").classList.remove("hide")));
    if (navigator.onLine === false) $("#netBadge").classList.remove("hide");
    App.setTheme(document.documentElement.dataset.theme || "light");

    App.buildDrawer();
    await FB.init();
    Room.init();
    await DB.load();
    App.applyBrand(); App.buildDrawer();
    let firstAuth = true;
    FB.onAuth(() => {
      App.buildDrawer();
      if (firstAuth) { firstAuth = false; return; }
      if (App.path().startsWith("/admin") || App.path() === "/") App.render();
      if (FB.isAdmin) U.toast("👑 Xin chào quản trị viên!", "ok");
    });
    firstAuth = false;
    DB.onChange(() => App.buildDrawer());
    addEventListener("hashchange", App.render);
    $("#splash").classList.add("out"); setTimeout(() => $("#splash").remove(), 600);
    App.render();
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
})();
