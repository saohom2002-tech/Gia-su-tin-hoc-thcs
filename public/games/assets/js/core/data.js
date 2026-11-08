/* =========================================================
   data.js — Tầng dữ liệu
   Firestore (collections: questions, sets, gameConfigs,
   settings, results, users) + dự phòng offline:
   cache localStorage → data/questions-offline.js → mẫu demo.
   ========================================================= */
(function () {
  const DEFAULT_SETTINGS = {
    siteName: (window.APP_CONFIG && window.APP_CONFIG.appName) || "GAME AND LEARN",
    slogan: (window.APP_CONFIG && window.APP_CONFIG.slogan) || "Học mà chơi — Chơi mà học!",
    announcement: "", defaultFreeze: 3, defaultGoal: 10, showExplain: true, saveResults: true, allowHostAnyone: true, allowGuestsDefault: true,
    adminName: (window.APP_CONFIG && window.APP_CONFIG.adminName) || "Ms Trúc",
    adminPhone: (window.APP_CONFIG && window.APP_CONFIG.adminPhone) || "0908.959.627",
    adminPhoneTel: (window.APP_CONFIG && window.APP_CONFIG.adminPhoneTel) || "0908959627",
    adminZalo: (window.APP_CONFIG && window.APP_CONFIG.adminZalo) || "https://zalo.me/0908959627",
    adminEmail: (window.APP_CONFIG && window.APP_CONFIG.adminEmail) || "tranthithanhtruc1980@gmail.com",
    schoolName: (window.APP_CONFIG && window.APP_CONFIG.schoolName) || "Trường THCS Tân Bình",
    schoolAddress: (window.APP_CONFIG && window.APP_CONFIG.schoolAddress) || "192/12 Nguyễn Thái Bình, P.12, Q. Tân Bình, TP.HCM",
    schoolWebsite: (window.APP_CONFIG && window.APP_CONFIG.schoolWebsite) || "https://thanhbinh.edu.vn",
    googleSheetId: (window.APP_CONFIG && window.APP_CONFIG.googleSheetId) || "1e1NUbsrBZ9Lf4pGHE4BriYwB1i0_kzBXwkhU4831z4k",
    googleDriveFolderId: (window.APP_CONFIG && window.APP_CONFIG.googleDriveFolderId) || "1MnvzQAzv62Xiw9ziU2jH5T37ObFmADg4",
    creatorEmails: [],
    classes: [
      {
        id: "cls_12a1",
        code: "12A1",
        name: "Lớp 12A1",
        grade: "12",
        desc: "Toán 12 — Thầy Hùng TBS",
        members: [
          "Nguyễn Văn An", "Trần Thị Bình", "Lê Hoàng Long", "Phạm Minh Thư",
          "Đỗ Quốc Bảo", "Vũ Ngọc Ánh", "Hoàng Gia Huy", "Bùi Mai Phương",
          "Đặng Tuấn Kiệt", "Ngô Bảo Châu", "Dương Thu Trang", "Phan Hải Đăng"
        ]
      },
      {
        id: "cls_12a2",
        code: "12A2",
        name: "Lớp 12A2",
        grade: "12",
        desc: "Toán 12 — Thầy Hùng TBS",
        members: [
          "Lý Gia Hân", "Trương Trọng Nghĩa", "Võ Quỳnh Nga", "Tạ Đình Phong",
          "Lê Thảo My", "Nguyễn Đức Phúc", "Trần Tuấn Anh", "Nguyễn Kim Ngân"
        ]
      }
    ],
    quickLinks: [
      { id: "ql_contact", title: "Liên Hệ Thầy Hùng TBS", desc: "Quản trị hệ thống · Hotline/Zalo: 0907.117.193", url: "https://zalo.me/0907117193", icon: "📞", color: "#16a34a", badge: "0907.117.193", external: true },
      { id: "ql_school", title: "Trường THCS Tân Bình", desc: "Hệ thống học tập & khảo sát trực tuyến", url: "#/", icon: "🏫", color: "#0a58ca", badge: "THCS Tân Bình", external: false },
      { id: "ql_sheet", title: "Google Sheet Đề Gốc", desc: "Ngân hàng 153+ câu hỏi Toán 12 của Thầy Hùng TBS", url: "https://docs.google.com/spreadsheets/d/1e1NUbsrBZ9Lf4pGHE4BriYwB1i0_kzBXwkhU4831z4k/edit?gid=0#gid=0", icon: "📊", color: "#10b981", badge: "Sheet gốc", external: true },
      { id: "ql_drive", title: "Google Drive Tài Liệu", desc: "Thư mục hình ảnh và tư liệu minh họa", url: "https://drive.google.com/drive/folders/1MnvzQAzv62Xiw9ziU2jH5T37ObFmADg4?lfhs=2", icon: "📁", color: "#0284c7", badge: "Drive gốc", external: true },
      { id: "ql_host", title: "Mở Phòng Thi Đấu", desc: "Tổ chức thi trực tuyến bằng mã PIN", url: "#/host", icon: "📡", color: "#0d6efd", badge: "Host phòng", external: false },
      { id: "ql_join", title: "Vào Phòng Bằng PIN", desc: "Học sinh nhập PIN vào làm bài thi", url: "#/join", icon: "🔢", color: "#f59e0b", badge: "Thí sinh", external: false },
      { id: "ql_lb", title: "Bảng Vàng Vinh Danh", desc: "Bảng xếp hạng thành tích & điểm số các lớp", url: "#/bang-vang", icon: "🏆", color: "#dc2626", badge: "Top 1", external: false },
      { id: "ql_cls", title: "Lớp & Nhóm Học", desc: "Quản lý lớp 12A1, 12A2 và bảng điểm theo lớp", url: "#/admin/classes", icon: "👥", color: "#059669", badge: "Nội bộ", external: false }
    ]
  };
  const DB = {
    source: "none", questions: [], sets: [], gameConfigs: {}, presets: [], settings: Object.assign({}, DEFAULT_SETTINGS),
    loaded: false, _subs: [], usingDemo: false
  };
  const getFB = () => window.FB || {};
  const isSuperAdmin = () => Boolean(window.FB && window.FB.isSuperAdmin);
  const col = (n) => getFB().fs.collection(n);
  const docId = (id) => String(id || U.uid()).replace(/[\/\s#\[\]\.]+/g, "_").slice(0, 120);
  const natural = (a, b) => String(a.Id || "").localeCompare(String(b.Id || ""), "vi", { numeric: true });

  DB.onChange = (fn) => DB._subs.push(fn);
  DB.emit = () => DB._subs.forEach((f) => { try { f(); } catch (e) { console.error(e); } });
  DB.cloud = () => FB.available && navigator.onLine !== false && DB.source === "cloud";

  function withTimeout(p, ms) { return Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))]); }

  /* ---------- Nạp dữ liệu ---------- */
  DB.load = async (force) => {
    if (DB.loaded && !force) return;
    let ok = false;
    const lf = U.store.get("localFile", null);
    if (lf && lf.questions && lf.questions.length) {
      DB.questions = lf.questions.slice().sort(natural); DB.sets = lf.sets || []; DB.gameConfigs = lf.gameConfigs || {}; DB.presets = lf.presets || [];
      DB.settings = Object.assign({}, DEFAULT_SETTINGS, lf.settings || {}); DB.source = "local-file";
      DB.usingDemo = false; DB.loaded = true; DB.emit(); return;
    }
    if (FB.available && navigator.onLine !== false && !U.store.get("forceOffline", false)) {
      try {
        const [qs, ss, gc, st, ps] = await withTimeout(Promise.all([
          col("questions").get(), col("sets").get(), col("gameConfigs").get(), col("settings").doc("site").get(),
          col("presets").get().catch(() => null)   // chưa cập nhật rules thì bỏ qua, không ảnh hưởng phần khác
        ]), APP_CONFIG.cloudTimeout || 9000);
        DB.presets = ps ? ps.docs.map((d) => Object.assign({ id: d.id }, d.data())) : [];
        DB.questions = qs.docs.map((d) => Object.assign({ _doc: d.id }, d.data())).sort(natural);
        DB.sets = ss.docs.map((d) => Object.assign({ id: d.id }, d.data()));
        DB.gameConfigs = {}; gc.docs.forEach((d) => (DB.gameConfigs[d.id] = d.data()));
        DB.settings = Object.assign({}, DEFAULT_SETTINGS, st.exists ? st.data() : {});
        DB.settings.siteName = "GAME AND LEARN";
        DB.settings.schoolName = "Trường THCS Tân Bình";
        DB.settings.schoolShort = "TRƯỜNG THCS TÂN BÌNH";
        DB.settings.adminName = "Ms Trúc";
        DB.settings.adminPhone = "0908.959.627";
        DB.settings.adminPhoneTel = "0908959627";
        DB.settings.adminZalo = "https://zalo.me/0908959627";
        DB.settings.adminEmail = "tranthithanhtruc1980@gmail.com";
        if (window.FB && FB.user) FB.updateRoles(FB.user);
        DB.source = "cloud"; ok = true;
        U.store.set("cache", { questions: DB.questions, sets: DB.sets, gameConfigs: DB.gameConfigs, settings: DB.settings, presets: DB.presets, at: Date.now() });
      } catch (e) { console.warn("Firestore không khả dụng:", e.message); }
    }
    if (!ok) {
      const cache = U.store.get("cache", null);
      const off = window.OFFLINE_DATA;
      const local = null;
      const pickData = (off && off.questions && off.questions.length ? off : null) || (cache && cache.questions && cache.questions.length ? cache : null);
      if (pickData) {
        DB.questions = (pickData.questions || []).slice().sort(natural); DB.sets = pickData.sets || []; DB.gameConfigs = pickData.gameConfigs || {}; DB.presets = pickData.presets || [];
        DB.settings = Object.assign({}, DEFAULT_SETTINGS, pickData.settings || {});
        DB.settings.siteName = "GAME AND LEARN";
        DB.settings.schoolName = "Trường THCS Tân Bình";
        DB.settings.schoolShort = "TRƯỜNG THCS TÂN BÌNH";
        DB.settings.adminName = "Ms Trúc";
        DB.settings.adminPhone = "0908.959.627";
        DB.settings.adminPhoneTel = "0908959627";
        DB.settings.adminZalo = "https://zalo.me/0908959627";
        DB.settings.adminEmail = "tranthithanhtruc1980@gmail.com";
        DB.source = local ? "local-file" : pickData === off ? "offline-file" : "cache";
      } else { DB.source = "demo"; DB.questions = []; }
    }
    DB.settings.siteName = "GAME AND LEARN";
    DB.settings.schoolName = "Trường THCS Tân Bình";
    DB.settings.schoolShort = "TRƯỜNG THCS TÂN BÌNH";
    DB.settings.adminName = "Ms Trúc";
    DB.settings.adminPhone = "0908.959.627";
    DB.settings.adminPhoneTel = "0908959627";
    DB.settings.adminZalo = "https://zalo.me/0908959627";
    DB.settings.adminEmail = "tranthithanhtruc1980@gmail.com";
    DB.usingDemo = !DB.questions.length;
    DB.loaded = true; DB.emit();
  };

  /* Câu hỏi dùng để chơi (nếu ngân hàng trống => câu mẫu) */
  DB.bank = () => DB.questions.length ? DB.questions : (window.DEMO_QUESTIONS || []);
  DB.findQ = (id) => DB.bank().find((q) => q.Id === id || q._doc === id);
  DB.findSet = (id) => DB.sets.find((s) => s.id === id);

  DB.sourceLabel = () => {
    if (window.FB && FB.isLocalMode) {
      return "🛠️ Cục bộ (Admin)" + (DB.source === "cloud" ? " · Đã đọc Firestore" : "");
    }
    return ({
      cloud: "☁️ Firestore", cache: "📦 Bộ nhớ đệm (ngoại tuyến)", "offline-file": "💾 File offline", "local-file": "📂 File từ máy", demo: "🧪 Dữ liệu mẫu", none: "…"
    })[DB.source] + (DB.usingDemo && DB.source !== "demo" ? " · đang dùng câu mẫu" : "");
  };

  /* Các giá trị phân loại để lọc */
  DB.facets = (list) => {
    list = list || DB.bank();
    const f = { Subject: new Set(), Grade: new Set(), Chapter: new Set(), Topic: new Set(), Level: new Set(), Type: new Set() };
    list.forEach((q) => { Object.keys(f).forEach((k) => { if (q[k]) f[k].add(String(q[k])); }); });
    const out = {}; Object.keys(f).forEach((k) => (out[k] = Array.from(f[k]).sort((a, b) => a.localeCompare(b, "vi", { numeric: true }))));
    return out;
  };
  DB.filterQ = (list, flt) => {
    if (!flt) return list;
    const s = flt.search ? U.norm(flt.search) : "";
    return list.filter((q) => {
      for (const k of ["Subject", "Grade", "Chapter", "Topic", "Level"]) if (flt[k] && String(q[k] || "") !== flt[k]) return false;
      if (flt.Type && Quiz.baseType(q.Type) !== flt.Type) return false;
      if (s && !U.norm([q.Id, q.Question, q.Subject, q.Chapter, q.Topic].join(" ")).includes(s)) return false;
      return true;
    });
  };
  DB.resolveSet = (set) => {
    if (!set) return [];
    if (set.questionIds && set.questionIds.length) return set.questionIds.map(DB.findQ).filter(Boolean);
    if (set.filter) return DB.filterQ(DB.bank(), set.filter);
    return [];
  };
  /* Lấy câu hỏi cho một game theo nguồn đã chọn: {kind:'set'|'filter'|'all', setId, filter} */
  DB.questionsFor = (src) => {
    src = src || { kind: "all" };
    if (src.kind === "set") return DB.resolveSet(DB.findSet(src.setId));
    if (src.kind === "filter") return DB.filterQ(DB.bank(), src.filter);
    return DB.bank();
  };

  function needCloud() {
    if (!FB.available && !FB.isLocalMode) throw new Error("Không kết nối được Firebase.");
    if (!FB.isAdmin) throw new Error("Chỉ quản trị viên mới được thay đổi dữ liệu.");
  }
  function clean(q) { const c = U.plain(q); delete c._doc; delete c._sel; return c; }
  function saveCache() { U.store.set("cache", { questions: DB.questions, sets: DB.sets, gameConfigs: DB.gameConfigs, settings: DB.settings, presets: DB.presets, at: Date.now() }); }

  /* ---------- Câu hỏi ---------- */
  DB.saveQuestion = async (q, oldDoc) => {
    needCloud();
    q = clean(q); if (!q.Id) q.Id = "Q" + U.uid(4).toUpperCase();
    const id = docId(q.Id);
    if (!isSuperAdmin() && oldDoc) {
      const existing = DB.questions.find((x) => x._doc === oldDoc);
      const currEmail = (getFB().user && getFB().user.email) ? getFB().user.email.toLowerCase() : "";
      if (existing && existing.authorEmail && existing.authorEmail.toLowerCase() !== currEmail) {
        throw new Error("Bạn không có quyền chỉnh sửa câu hỏi gốc của tác giả khác.");
      }
    }
    if (!q.authorEmail && getFB().user && getFB().user.email) q.authorEmail = getFB().user.email;
    q.updatedAt = Date.now();
    if (FB.available && !FB.isLocalMode) {
      await col("questions").doc(id).set(q);
      if (oldDoc && oldDoc !== id) await col("questions").doc(oldDoc).delete();
    } else if (FB.available && FB.isLocalMode) {
      try {
        await col("questions").doc(id).set(q);
        if (oldDoc && oldDoc !== id) await col("questions").doc(oldDoc).delete();
      } catch (e) {
        console.warn("Lưu câu hỏi trên máy (cục bộ):", e.message);
      }
    }
    DB.questions = DB.questions.filter((x) => x._doc !== id && x._doc !== oldDoc);
    DB.questions.push(Object.assign({ _doc: id }, q)); DB.questions.sort(natural);
    DB.usingDemo = false; saveCache(); DB.emit();
  };
  async function batchRun(ops) { // ops: [fn(batch)]
    for (let i = 0; i < ops.length; i += 400) {
      const b = FB.fs.batch(); ops.slice(i, i + 400).forEach((f) => f(b)); await b.commit();
    }
  }
  DB.deleteQuestions = async (docs) => {
    needCloud();
    if (!isSuperAdmin()) {
      throw new Error("Chỉ Quản trị viên tối cao (Thầy Hùng TBS) mới có quyền xóa câu hỏi.");
    }
    if (FB.available && !FB.isLocalMode) {
      await batchRun(docs.map((d) => (b) => b.delete(col("questions").doc(d))));
    } else if (FB.available && FB.isLocalMode) {
      try {
        await batchRun(docs.map((d) => (b) => b.delete(col("questions").doc(d))));
      } catch (e) {
        console.warn("Xoá câu hỏi trên máy (cục bộ):", e.message);
      }
    }
    DB.questions = DB.questions.filter((q) => !docs.includes(q._doc)); saveCache(); DB.emit();
  };
  DB.bulkUpdate = async (docs, patch) => {
    needCloud();
    const p = {}; Object.keys(patch).forEach((k) => { if (patch[k] !== undefined && patch[k] !== null && patch[k] !== "__keep") p[k] = patch[k]; });
    if (!Object.keys(p).length) return;
    p.updatedAt = Date.now();
    if (FB.available && !FB.isLocalMode) {
      await batchRun(docs.map((d) => (b) => b.set(col("questions").doc(d), p, { merge: true })));
    } else if (FB.available && FB.isLocalMode) {
      try {
        await batchRun(docs.map((d) => (b) => b.set(col("questions").doc(d), p, { merge: true })));
      } catch (e) {
        console.warn("Cập nhật câu hỏi trên máy (cục bộ):", e.message);
      }
    }
    DB.questions.forEach((q) => { if (docs.includes(q._doc)) Object.assign(q, p); }); saveCache(); DB.emit();
  };
  /* Nhập hàng loạt: trả về {added, updated, skipped} */
  DB.importQuestions = async (list, o) => {
    needCloud(); o = o || {};
    const existing = new Set(DB.questions.map((q) => q._doc));
    let added = 0, updated = 0, skipped = 0; const ops = [];
    list.forEach((raw) => {
      const q = clean(raw); if (!q.Id) q.Id = "Q" + U.uid(5).toUpperCase();
      const id = docId(q.Id);
      if (existing.has(id)) { if (!o.overwrite) { skipped++; return; } updated++; } else added++;
      q.updatedAt = Date.now();
      ops.push((b) => b.set(col("questions").doc(id), q));
      DB.questions = DB.questions.filter((x) => x._doc !== id); DB.questions.push(Object.assign({ _doc: id }, q));
      existing.add(id);
    });
    if (FB.available && !FB.isLocalMode) {
      await batchRun(ops);
    } else if (FB.available && FB.isLocalMode) {
      try {
        await batchRun(ops);
      } catch (e) {
        console.warn("Nhập câu hỏi trên máy (cục bộ):", e.message);
      }
    }
    DB.questions.sort(natural); DB.usingDemo = !DB.questions.length; saveCache(); DB.emit();
    return { added, updated, skipped };
  };

  /* ---------- Bộ đề ---------- */
  DB.saveSet = async (set) => {
    needCloud();
    const s = U.plain(set); const id = s.id || "set_" + U.uid(); delete s.id;
    s.updatedAt = Date.now(); if (!s.createdAt) s.createdAt = Date.now();
    if (FB.available && !FB.isLocalMode) {
      await col("sets").doc(id).set(s);
    } else if (FB.available && FB.isLocalMode) {
      try { await col("sets").doc(id).set(s); } catch (e) { console.warn("Lưu bộ đề cục bộ:", e.message); }
    }
    DB.sets = DB.sets.filter((x) => x.id !== id); DB.sets.push(Object.assign({ id }, s)); saveCache(); DB.emit();
    return id;
  };
  DB.deleteSet = async (id) => {
    needCloud();
    if (!isSuperAdmin()) {
      throw new Error("Chỉ Quản trị viên tối cao mới có quyền xóa bộ đề.");
    }
    if (FB.available && !FB.isLocalMode) {
      await col("sets").doc(id).delete();
    } else if (FB.available && FB.isLocalMode) {
      try { await col("sets").doc(id).delete(); } catch (e) { console.warn("Xoá bộ đề cục bộ:", e.message); }
    }
    DB.sets = DB.sets.filter((x) => x.id !== id);
    for (const g of Object.keys(DB.gameConfigs)) if (DB.gameConfigs[g].setId === id) await DB.saveGameConfig(g, { setId: "" });
    saveCache(); DB.emit();
  };

  /* ---------- Lớp học & Danh sách thành viên (Roster) ---------- */
  DB.cleanMembers = (members) => {
    if (!members) return [];
    const arr = Array.isArray(members)
      ? members
      : String(members).split(/\r?\n|;|,/).map((s) => s.trim());
    return arr.map((s) => String(s || "").trim()).filter(Boolean);
  };
  DB.listClasses = () => (DB.settings.classes || []).map((c) => Object.assign({ members: [] }, c));
  DB.getClass = (idOrCode) => {
    if (!idOrCode) return null;
    const str = String(idOrCode).trim();
    return DB.listClasses().find((c) => c.id === str || c.code === str || c.name === str) || null;
  };
  DB.saveClass = async (cls) => {
    const list = (DB.settings.classes || []).slice();
    const id = cls.id || ("cls_" + (cls.code ? U.norm(cls.code).replace(/[^a-z0-9]/g, "") : U.uid()));
    const members = DB.cleanMembers(cls.members);
    const item = Object.assign({}, cls, { id, members, updatedAt: Date.now() });
    if (!item.createdAt) item.createdAt = Date.now();
    const idx = list.findIndex((x) => x.id === id);
    if (idx >= 0) list[idx] = item; else list.push(item);
    await DB.saveSettings({ classes: list });
    return item;
  };
  DB.deleteClass = async (id) => {
    if (!isSuperAdmin()) {
      throw new Error("Chỉ Quản trị viên tối cao mới có quyền xóa lớp học.");
    }
    const list = (DB.settings.classes || []).filter((x) => x.id !== id);
    await DB.saveSettings({ classes: list });
  };
  DB.getClassMembers = (idOrCode) => {
    const c = DB.getClass(idOrCode);
    return c && Array.isArray(c.members) ? c.members.slice() : [];
  };
  DB.saveClassMembers = async (idOrCode, members) => {
    const list = (DB.settings.classes || []).slice();
    const str = String(idOrCode || "").trim();
    const idx = list.findIndex((c) => c.id === str || c.code === str || c.name === str);
    if (idx < 0) throw new Error("Không tìm thấy lớp học.");
    const cleaned = DB.cleanMembers(members);
    list[idx] = Object.assign({}, list[idx], { members: cleaned, updatedAt: Date.now() });
    await DB.saveSettings({ classes: list });
    return list[idx];
  };
  DB.createRoster = async (name, members, opts) => {
    name = String(name || "").trim();
    if (!name) throw new Error("Vui lòng nhập tên danh sách / lớp học.");
    const code = (opts && opts.code) || name.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 8) || ("L" + U.uid(4).toUpperCase());
    const grade = (opts && opts.grade) || "12";
    const desc = (opts && opts.desc) || "Tạo từ màn hình chọn người chơi";
    const cleaned = DB.cleanMembers(members);
    return DB.saveClass({ name, code, grade, desc, members: cleaned });
  };

  /* ---------- Người biên soạn (Creators) ---------- */
  DB.creatorEmails = () => (DB.settings.creatorEmails || []).map((x) => String(x).toLowerCase().trim()).filter(Boolean);
  DB.addCreatorEmail = async (email) => {
    if (!isSuperAdmin()) {
      throw new Error("Chỉ Quản trị viên tối cao mới có quyền cấp quyền Người biên soạn.");
    }
    const em = String(email || "").toLowerCase().trim();
    if (!em) return;
    const list = DB.creatorEmails();
    if (!list.includes(em)) {
      list.push(em);
      await DB.saveSettings({ creatorEmails: list });
      if (getFB().user) getFB().updateRoles(getFB().user);
    }
  };
  DB.removeCreatorEmail = async (email) => {
    if (!isSuperAdmin()) {
      throw new Error("Chỉ Quản trị viên tối cao mới có quyền thu hồi quyền Người biên soạn.");
    }
    const em = String(email || "").toLowerCase().trim();
    const list = DB.creatorEmails().filter((x) => x !== em);
    await DB.saveSettings({ creatorEmails: list });
    if (getFB().user) getFB().updateRoles(getFB().user);
  };

  /* ---------- Liên kết nhanh (Quick Links) ---------- */
  DB.listQuickLinks = () => (DB.settings && Array.isArray(DB.settings.quickLinks) && DB.settings.quickLinks.length) ? DB.settings.quickLinks : (DEFAULT_SETTINGS.quickLinks || []);
  DB.saveQuickLink = async (link) => {
    const list = DB.listQuickLinks().slice();
    const id = link.id || ("ql_" + U.uid(6));
    const item = Object.assign({}, link, { id, updatedAt: Date.now() });
    if (!item.createdAt) item.createdAt = Date.now();
    const idx = list.findIndex((x) => x.id === id);
    if (idx >= 0) list[idx] = item; else list.push(item);
    await DB.saveSettings({ quickLinks: list });
    return item;
  };
  DB.deleteQuickLink = async (id) => {
    const list = DB.listQuickLinks().filter((x) => x.id !== id);
    await DB.saveSettings({ quickLinks: list });
  };
  DB.resetQuickLinks = async () => {
    await DB.saveSettings({ quickLinks: DEFAULT_SETTINGS.quickLinks.slice() });
  };

  /* ---------- Cấu hình game ---------- */
  DB.gameCfg = (gid) => Object.assign({ enabled: true, setId: "" }, DB.gameConfigs[gid] || {});
  DB.saveGameConfig = async (gid, patch) => {
    needCloud();
    const c = Object.assign(DB.gameCfg(gid), patch);
    if (FB.available && !FB.isLocalMode) {
      await col("gameConfigs").doc(gid).set(c);
    } else if (FB.available && FB.isLocalMode) {
      try { await col("gameConfigs").doc(gid).set(c); } catch (e) { console.warn("Lưu cấu hình game cục bộ:", e.message); }
    }
    DB.gameConfigs[gid] = c; saveCache(); DB.emit();
  };

  /* ---------- Cài đặt ---------- */
  DB.saveSettings = async (patch) => {
    needCloud();
    DB.settings = Object.assign({}, DB.settings, patch);
    if (FB.available && !FB.isLocalMode) {
      await col("settings").doc("site").set(DB.settings);
    } else if (FB.available && FB.isLocalMode) {
      try { await col("settings").doc("site").set(DB.settings); } catch (e) { console.warn("Lưu cài đặt cục bộ:", e.message); }
    }
    saveCache(); DB.emit();
  };


  /* ---------- Cấu hình soạn sẵn (presets) ----------
     Lưu ở Firestore (collection "presets", do admin quản lý)
     và/hoặc trên máy này (localStorage) để dùng offline. */
  DB.localPresets = () => U.store.get("presetsLocal", []);
  DB.allPresets = (gameId) => {
    const cloud = (DB.presets || []).map((p) => Object.assign({ where: "cloud" }, p));
    const local = DB.localPresets().map((p) => Object.assign({ where: "local" }, p));
    return cloud.concat(local).filter((p) => !gameId || p.gameId === gameId)
      .sort((a, b) => (a.gameId || "").localeCompare(b.gameId || "") || String(a.name).localeCompare(String(b.name), "vi", { numeric: true }));
  };
  DB.findPreset = (id) => DB.allPresets().find((p) => p.id === id);
  DB.savePreset = async (p, where) => {
    const rec = U.plain(p); delete rec.where;
    rec.updatedAt = Date.now(); if (!rec.createdAt) rec.createdAt = Date.now(); rec.by = FB.name();
    if (where === "cloud") {
      needCloud();
      if (!rec.id || String(rec.id).startsWith("loc_")) rec.id = "pre_" + U.uid();
      const id = rec.id; const data = Object.assign({}, rec); delete data.id;
      if (FB.available && !FB.isLocalMode) {
        await col("presets").doc(id).set(data);
      } else if (FB.available && FB.isLocalMode) {
        try { await col("presets").doc(id).set(data); } catch (e) { console.warn("Lưu preset cục bộ:", e.message); }
      }
      DB.presets = (DB.presets || []).filter((x) => x.id !== id).concat([rec]);
      saveCache();
    } else {
      if (!rec.id || String(rec.id).startsWith("pre_")) rec.id = "loc_" + U.uid();
      const list = DB.localPresets().filter((x) => x.id !== rec.id); list.push(rec); U.store.set("presetsLocal", list);
    }
    DB.emit(); return rec;
  };
  DB.deletePreset = async (p) => {
    if (p.where === "cloud" || String(p.id).startsWith("pre_")) {
      needCloud();
      if (FB.available && !FB.isLocalMode) {
        await col("presets").doc(p.id).delete();
      } else if (FB.available && FB.isLocalMode) {
        try { await col("presets").doc(p.id).delete(); } catch (e) { console.warn("Xoá preset cục bộ:", e.message); }
      }
      DB.presets = (DB.presets || []).filter((x) => x.id !== p.id); saveCache();
    } else U.store.set("presetsLocal", DB.localPresets().filter((x) => x.id !== p.id));
    DB.emit();
  };

  /* ---------- Kết quả / điểm số ---------- */
  DB.addResult = async (r) => {
    if (DB.settings.saveResults === false) return;
    const rec = U.plain(r); rec.host = FB.name(); rec.hostUid = FB.user ? FB.user.uid : "";
    rec.at = Date.now();
    const local = U.store.get("results", []); local.unshift(Object.assign({ id: "L" + U.uid(), _local: true }, rec)); U.store.set("results", local.slice(0, 300));
    if (FB.available && navigator.onLine !== false) {
      try { rec.createdAt = firebase.firestore.FieldValue.serverTimestamp(); await col("results").add(rec); } catch (e) { console.warn("Không lưu được kết quả lên Firestore:", e.message); }
    }
  };
  DB.listResults = async (limit) => {
    if (FB.available && navigator.onLine !== false) {
      try {
        const s = await withTimeout(col("results").orderBy("at", "desc").limit(limit || 300).get(), 8000);
        return s.docs.map((d) => Object.assign({ id: d.id }, d.data()));
      } catch (e) { console.warn(e.message); }
    }
    return U.store.get("results", []);
  };
  DB.deleteResults = async (ids) => {
    const loc = U.store.get("results", []).filter((r) => !ids.includes(r.id)); U.store.set("results", loc);
    const cloudIds = ids.filter((i) => !String(i).startsWith("L"));
    if (cloudIds.length) {
      needCloud();
      if (FB.available && !FB.isLocalMode) {
        await batchRun(cloudIds.map((id) => (b) => b.delete(col("results").doc(id))));
      } else if (FB.available && FB.isLocalMode) {
        try { await batchRun(cloudIds.map((id) => (b) => b.delete(col("results").doc(id)))); } catch (e) { console.warn("Xoá kết quả cục bộ:", e.message); }
      }
    }
  };
  DB.listUsers = async () => {
    needCloud();
    if (FB.available && !FB.isLocalMode) {
      const s = await col("users").orderBy("lastLogin", "desc").limit(500).get();
      return s.docs.map((d) => Object.assign({ id: d.id }, d.data()));
    } else if (FB.available && FB.isLocalMode) {
      try {
        const s = await col("users").orderBy("lastLogin", "desc").limit(500).get();
        return s.docs.map((d) => Object.assign({ id: d.id }, d.data()));
      } catch (e) {
        return [{
          displayName: "HÙNG TBS (Quản trị)",
          email: "tailieutoantbs@gmail.com",
          provider: "local",
          lastLogin: Date.now()
        }];
      }
    }
    return [{
      displayName: "HÙNG TBS (Quản trị)",
      email: "tailieutoantbs@gmail.com",
      provider: "local",
      lastLogin: Date.now()
    }];
  };

  /* ---------- Offline ---------- */
  DB.exportOfflineJS = () => {
    const data = { exportedAt: new Date().toISOString(), questions: DB.questions.map(clean), sets: DB.sets, gameConfigs: DB.gameConfigs, settings: DB.settings, presets: DB.presets };
    return "/* File dữ liệu offline — Sân Chơi Tri Thức\n   Đặt file này vào thư mục  data/  (cùng cấp index.html) với tên  questions-offline.js\n   Khi không có Internet, web sẽ tự dùng dữ liệu này. Xuất lúc: " + data.exportedAt + " */\nwindow.OFFLINE_DATA = " + JSON.stringify(data, null, 1) + ";\n";
  };
  DB.useLocalFile = (data) => {
    const d = Array.isArray(data) ? { questions: data } : data;
    U.store.set("localFile", { questions: d.questions || [], sets: d.sets || [], gameConfigs: d.gameConfigs || {}, settings: d.settings || {}, presets: d.presets || [] });
    return DB.load(true);
  };
  DB.clearLocalFile = () => { U.store.del("localFile"); return DB.load(true); };

  DB.DEFAULT_SETTINGS = DEFAULT_SETTINGS;
  window.DB = DB;
})();
