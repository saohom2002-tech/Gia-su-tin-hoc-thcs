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
    schoolAddress: (window.APP_CONFIG && window.APP_CONFIG.schoolAddress) || "873 Cách Mạng Tháng 8, Phường Tân Sơn Nhất, TP.HCM",
    schoolWebsite: (window.APP_CONFIG && window.APP_CONFIG.schoolWebsite) || "https://thcstanbinh.hcm.edu.vn",
    googleSheetId: (window.APP_CONFIG && window.APP_CONFIG.googleSheetId) || "1sw7iAQZw2cD7USR3O5tY6P6MvOqbWBvhuBORvr0dxNo",
    googleDriveFolderId: (window.APP_CONFIG && window.APP_CONFIG.googleDriveFolderId) || "1MnvzQAzv62Xiw9ziU2jH5T37ObFmADg4",
    creatorEmails: [],
    classes: [
      {
        id: "cls_7_1",
        code: "7/1",
        name: "Lớp 7/1",
        grade: "7",
        desc: "Tin học 7 — THCS Tân Bình (Ms Trúc)",
        members: [
          "Nguyễn Văn An", "Trần Thị Bình", "Lê Hoàng Long", "Phạm Minh Thư",
          "Đỗ Quốc Bảo", "Vũ Ngọc Ánh", "Hoàng Gia Huy", "Bùi Mai Phương",
          "Đặng Tuấn Kiệt", "Ngô Bảo Châu", "Dương Thu Trang", "Phan Hải Đăng"
        ]
      },
      {
        id: "cls_7_2",
        code: "7/2",
        name: "Lớp 7/2",
        grade: "7",
        desc: "Tin học 7 — THCS Tân Bình (Ms Trúc)",
        members: [
          "Lý Gia Hân", "Trương Trọng Nghĩa", "Võ Quỳnh Nga", "Tạ Đình Phong",
          "Lê Thảo My", "Nguyễn Đức Phúc", "Trần Tuấn Anh", "Nguyễn Kim Ngân"
        ]
      },
      {
        id: "cls_6_1",
        code: "6/1",
        name: "Lớp 6/1",
        grade: "6",
        desc: "Tin học 6 — THCS Tân Bình (Ms Trúc)",
        members: []
      },
      {
        id: "cls_8_1",
        code: "8/1",
        name: "Lớp 8/1",
        grade: "8",
        desc: "Tin học 8 — THCS Tân Bình (Ms Trúc)",
        members: []
      },
      {
        id: "cls_9_1",
        code: "9/1",
        name: "Lớp 9/1",
        grade: "9",
        desc: "Tin học 9 — THCS Tân Bình (Ms Trúc)",
        members: []
      }
    ],
    quickLinks: [
      { id: "ql_contact", title: "Liên Hệ Ms Trúc", desc: "Quản trị hệ thống · Hotline/Zalo: 0908.959.627", url: "https://zalo.me/0908959627", icon: "📞", color: "#16a34a", badge: "0908.959.627", external: true },
      { id: "ql_aibooks", title: "AI BOOKS (THPT)", desc: "Sách điện tử & Nền tảng học tập thông minh THPT", url: "https://ai-books-thpt.leira.com.vn/", icon: "📚", color: "#4f46e5", badge: "AI Books", external: true },
      { id: "ql_school", title: "Trường THCS Tân Bình", desc: "Hệ thống học tập & khảo sát trực tuyến", url: "#/", icon: "🏫", color: "#0a58ca", badge: "THCS Tân Bình", external: false },
      { id: "ql_sheet", title: "Google Sheet Đề Gốc", desc: "Ngân hàng câu hỏi Tin học của Ms Trúc", url: "https://docs.google.com/spreadsheets/d/1sw7iAQZw2cD7USR3O5tY6P6MvOqbWBvhuBORvr0dxNo/edit?gid=0#gid=0", icon: "📊", color: "#10b981", badge: "Sheet gốc", external: true },
      { id: "ql_drive", title: "Google Drive Tài Liệu", desc: "Thư mục hình ảnh và tư liệu minh họa", url: "https://drive.google.com/drive/folders/1MnvzQAzv62Xiw9ziU2jH5T37ObFmADg4?lfhs=2", icon: "📁", color: "#0284c7", badge: "Drive gốc", external: true },
      { id: "ql_host", title: "Mở Phòng Thi Đấu", desc: "Tổ chức thi trực tuyến bằng mã PIN", url: "#/host", icon: "📡", color: "#0d6efd", badge: "Host phòng", external: false },
      { id: "ql_join", title: "Vào Phòng Bằng PIN", desc: "Học sinh nhập PIN vào làm bài thi", url: "#/join", icon: "🔢", color: "#f59e0b", badge: "Thí sinh", external: false },
      { id: "ql_lb", title: "Bảng Vàng Vinh Danh", desc: "Bảng xếp hạng thành tích & điểm số các lớp", url: "#/bang-vang", icon: "🏆", color: "#dc2626", badge: "Top 1", external: false },
      { id: "ql_cls", title: "Lớp & Nhóm Học", desc: "Quản lý danh sách lớp học và bảng điểm theo lớp", url: "#/admin/classes", icon: "👥", color: "#059669", badge: "Nội bộ", external: false }
    ]
  };
  const DB = {
    source: "none", questions: [], sets: [], gameConfigs: {}, presets: [], settings: Object.assign({}, DEFAULT_SETTINGS),
    loaded: false, _subs: [], usingDemo: false
  };
  const getFB = () => window.FB || {};
  const isSuperAdmin = () => {
    if (!window.FB) return true;
    return Boolean(
      window.FB.isSuperAdmin ||
      window.FB.isLocalMode ||
      (window.FB.user && (window.FB.user.isLocal || window.FB.user.isAdmin)) ||
      (window.FB.user && window.FB.user.email && (window.APP_CONFIG.adminEmails || []).map(x => x.toLowerCase()).includes(window.FB.user.email.toLowerCase()))
    );
  };
  const col = (n) => getFB().fs.collection(n);
  const docId = (id) => String(id || U.uid()).replace(/[\/\s#\[\]\.]+/g, "_").slice(0, 120);
  const natural = (a, b) => String(a.Id || "").localeCompare(String(b.Id || ""), "vi", { numeric: true });

  const isMathQuestion = (q) => {
    if (!q) return false;
    const s = String(q.Subject || "").trim().toLowerCase();
    if (s === "toán" || s === "toán học" || s === "math" || s === "toan") return true;
    const ch = String(q.Chapter || "").toUpperCase();
    if (ch.includes("NGUYÊN HÀM") || ch.includes("TÍCH PHÂN") || ch.includes("HÀM SỐ") || ch.includes("HÌNH HỌC KHÔNG GIAN")) return true;
    const tp = String(q.Topic || "").toUpperCase();
    if (tp.includes("TÍCH PHÂN") || tp.includes("NGUYÊN HÀM")) return true;
    const id = String(q.Id || "");
    if (id.startsWith("1775578537628_")) return true;
    return false;
  };

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
      DB.questions = lf.questions.filter(q => !isMathQuestion(q)).slice().sort(natural);
      DB.sets = lf.sets || []; DB.gameConfigs = lf.gameConfigs || {}; DB.presets = lf.presets || [];
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
        
        // 1. Lọc bỏ sạch mọi câu hỏi môn Toán cũ từ Firestore
        const cloudQs = qs.docs.map((d) => Object.assign({ _doc: d.id }, d.data())).filter(q => !isMathQuestion(q));

        // 2. Luôn nạp và hợp nhất 1.089 câu hỏi Tin học từ window.OFFLINE_DATA
        const offQs = (window.OFFLINE_DATA && window.OFFLINE_DATA.questions) ? window.OFFLINE_DATA.questions.filter(q => !isMathQuestion(q)) : [];
        const qMap = new Map();
        offQs.forEach((q) => {
          const id = q._doc || docId(q.Id);
          qMap.set(id, Object.assign({ _doc: id }, q));
        });
        cloudQs.forEach((q) => {
          const id = q._doc || docId(q.Id);
          qMap.set(id, Object.assign({ _doc: id }, q));
        });
        DB.questions = Array.from(qMap.values()).sort(natural);

        DB.sets = ss.docs.map((d) => Object.assign({ id: d.id }, d.data()));
        DB.gameConfigs = {}; gc.docs.forEach((d) => (DB.gameConfigs[d.id] = d.data()));
        DB.settings = Object.assign({}, DEFAULT_SETTINGS, st.exists ? st.data() : {});

        // 3. Xử lý danh sách lớp: nếu danh sách từ Firestore là lớp Toán 12 cũ, tự động đổi sang danh sách lớp THCS Tân Bình
        const hasOldClasses = (clsList) => {
          if (!clsList || !clsList.length) return true;
          return clsList.some(c => c.grade === "12" || c.grade === "11" || c.grade === "10" || (c.desc || "").includes("Thầy Hùng TBS"));
        };
        if (hasOldClasses(DB.settings.classes)) {
          DB.settings.classes = DEFAULT_SETTINGS.classes.slice();
        }

        DB.settings.siteName = "GAME AND LEARN";
        DB.settings.schoolName = "Trường THCS Tân Bình";
        DB.settings.schoolShort = "TRƯỜNG THCS TÂN BÌNH";
        DB.settings.adminName = "Ms Trúc";
        DB.settings.adminPhone = "0908.959.627";
        DB.settings.adminPhoneTel = "0908959627";
        DB.settings.adminZalo = "https://zalo.me/0908959627";
        DB.settings.adminEmail = "tranthithanhtruc1980@gmail.com";
        DB.settings.schoolAddress = "873 Cách Mạng Tháng 8, Phường Tân Sơn Nhất, TP.HCM";
        DB.settings.schoolWebsite = "https://thcstanbinh.hcm.edu.vn";
        if (window.FB && FB.user) FB.updateRoles(FB.user);
        DB.source = "cloud"; ok = true;
        U.store.set("cache", { questions: DB.questions, sets: DB.sets, gameConfigs: DB.gameConfigs, settings: DB.settings, presets: DB.presets, at: Date.now() });
      } catch (e) { console.warn("Firestore không khả dụng:", e.message); }
    }

    // Nếu chưa đọc được câu hỏi từ Firestore mà có Realtime Database, đọc từ game_bank trên RTDB (gstinhoc)
    if (!ok && FB.available && FB.rtdb) {
      try {
        const snap = await withTimeout(FB.rtdb.ref("game_bank").once("value"), 4000);
        if (snap && snap.exists()) {
          const gb = snap.val();
          if (gb.questions && gb.questions.length) {
            DB.questions = gb.questions.filter((q) => !isMathQuestion(q)).sort(natural);
            if (gb.sets) DB.sets = gb.sets;
            if (gb.classes) DB.settings.classes = gb.classes;
            DB.source = "cloud";
            ok = true;
            U.store.set("cache", { questions: DB.questions, sets: DB.sets, gameConfigs: DB.gameConfigs, settings: DB.settings, presets: DB.presets, at: Date.now() });
          }
        }
      } catch (re) {
        console.warn("RTDB game_bank load:", re.message);
      }
    }
    if (!ok) {
      const cache = U.store.get("cache", null);
      const off = window.OFFLINE_DATA;
      const local = null;
      const pickData = (off && off.questions && off.questions.length ? off : null) || (cache && cache.questions && cache.questions.length ? cache : null);
      if (pickData) {
        DB.questions = (pickData.questions || []).filter(q => !isMathQuestion(q)).slice().sort(natural);
        DB.sets = pickData.sets || []; DB.gameConfigs = pickData.gameConfigs || {}; DB.presets = pickData.presets || [];
        DB.settings = Object.assign({}, DEFAULT_SETTINGS, pickData.settings || {});
        if (!DB.settings.classes || !DB.settings.classes.length || DB.settings.classes.some(c => c.grade === "12" || (c.desc || "").includes("Thầy Hùng TBS"))) {
          DB.settings.classes = DEFAULT_SETTINGS.classes.slice();
        }
        DB.settings.siteName = "GAME AND LEARN";
        DB.settings.schoolName = "Trường THCS Tân Bình";
        DB.settings.schoolShort = "TRƯỜNG THCS TÂN BÌNH";
        DB.settings.adminName = "Ms Trúc";
        DB.settings.adminPhone = "0908.959.627";
        DB.settings.adminPhoneTel = "0908959627";
        DB.settings.adminZalo = "https://zalo.me/0908959627";
        DB.settings.adminEmail = "tranthithanhtruc1980@gmail.com";
        DB.settings.schoolAddress = "873 Cách Mạng Tháng 8, Phường Tân Sơn Nhất, TP.HCM";
        DB.settings.schoolWebsite = "https://thcstanbinh.hcm.edu.vn";
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
    DB.settings.schoolAddress = "873 Cách Mạng Tháng 8, Phường Tân Sơn Nhất, TP.HCM";
    DB.settings.schoolWebsite = "https://thcstanbinh.hcm.edu.vn";

    // Hợp nhất câu hỏi & bộ đề từ Kho đề thi chuẩn và Luyện tập theo chủ đề
    await DB.mergeSyncedQuestions();

    // Thiết lập lắng nghe Realtime Database để tự động cập nhật ngay khi giáo viên lưu đề mới
    if (FB.available && FB.rtdb && !DB._rtdbListening) {
      DB._rtdbListening = true;
      try {
        FB.rtdb.ref("game_bank/custom_sets").on("value", () => {
          DB.mergeSyncedQuestions().then(() => DB.emit());
        });
      } catch (e) {}
    }

    DB.usingDemo = !DB.questions.length;
    DB.loaded = true; DB.emit();
  };

  /* ---------- Hợp nhất đề thi & câu hỏi từ Cổng Gia Sư (Portal) ---------- */
  DB.mergeSyncedQuestions = async () => {
    try {
      const qMap = new Map();
      (DB.questions || []).forEach((q) => {
        const id = q._doc || docId(q.Id);
        qMap.set(id, q);
      });

      const setMap = new Map();
      (DB.sets || []).forEach((s) => {
        if (s && s.id) setMap.set(s.id, s);
      });

      // 1. Đọc từ LocalStorage (ontap_game_synced_questions & ontap_game_synced_sets)
      try {
        const rawSq = localStorage.getItem("ontap_game_synced_questions");
        if (rawSq) {
          const parsed = JSON.parse(rawSq);
          if (parsed && typeof parsed === "object") {
            Object.values(parsed).forEach((q) => {
              if (q && q.Id && !isMathQuestion(q)) {
                const id = docId(q.Id);
                qMap.set(id, Object.assign({ _doc: id }, q));
              }
            });
          }
        }
        const rawSs = localStorage.getItem("ontap_game_synced_sets");
        if (rawSs) {
          const parsedSets = JSON.parse(rawSs);
          if (parsedSets && typeof parsedSets === "object") {
            Object.values(parsedSets).forEach((s) => {
              if (s && s.id) setMap.set(s.id, s);
            });
          }
        }
      } catch (le) {
        console.warn("Lỗi đọc synced questions từ LocalStorage:", le);
      }

      // 2. Đọc trực tiếp từ ontap_admin_custom_exams nếu có đề chưa được convert
      try {
        const rawExams = localStorage.getItem("ontap_admin_custom_exams");
        if (rawExams) {
          const exams = JSON.parse(rawExams);
          if (Array.isArray(exams)) {
            const LET = ["A", "B", "C", "D", "E", "F"];
            exams.forEach((ex) => {
              if (!ex || ex.isTrashed || !Array.isArray(ex.questions)) return;
              const qIds = [];
              ex.questions.forEach((q) => {
                if (!q || !q.text) return;
                const qid = "q_" + (q.id || U.uid());
                qIds.push(qid);
                const opts = {};
                (q.options || []).forEach((opt, idx) => {
                  if (idx < LET.length) {
                    opts[LET[idx]] = String(opt || "").replace(/^[A-Fa-f][\.\)\:\s]\s*/, "").trim();
                  }
                });
                let ans = "A";
                if (typeof q.correctAnswer === "number") ans = LET[q.correctAnswer] || "A";
                else if (typeof q.correctAnswer === "string") {
                  const t = q.correctAnswer.trim().toUpperCase();
                  ans = /^[0-5]$/.test(t) ? (LET[parseInt(t, 10)] || "A") : t.charAt(0);
                }
                const gq = {
                  _doc: qid,
                  Id: qid,
                  Type: q.type === "true-false" ? "TF" : (q.type === "short-answer" ? "SA" : "MC"),
                  Level: q.difficulty === "de" ? "Nhận biết" : (q.difficulty === "kho" ? "Vận dụng" : "Thông hiểu"),
                  Grade: String(ex.gradeNumber || q.grade || "7"),
                  Subject: "Tin học",
                  Chapter: ex.title || "Kho Đề Chuẩn",
                  Topic: q.lessonTitle || ex.title || "Ôn tập",
                  Question: q.text,
                  Options: opts,
                  CorrectAnswer: ans,
                  Explain: q.explanation || ""
                };
                qMap.set(qid, gq);
              });

              setMap.set("set_exam_" + ex.id, {
                id: "set_exam_" + ex.id,
                name: "Đề: " + ex.title + " (Khối " + (ex.gradeNumber || 7) + " · " + qIds.length + " câu)",
                grade: String(ex.gradeNumber || 7),
                subject: "Tin học",
                desc: "Đề thi chuẩn từ Cổng Gia Sư",
                questionIds: qIds
              });
            });
          }
        }
      } catch (ee) {
        console.warn("Lỗi phân tích ontap_admin_custom_exams:", ee);
      }

      // 3. Nếu có RTDB, đọc thêm game_bank/custom_questions và game_bank/custom_sets
      if (FB.available && FB.rtdb) {
        try {
          const snapQ = await withTimeout(FB.rtdb.ref("game_bank/custom_questions").once("value"), 3500);
          if (snapQ && snapQ.exists()) {
            const data = snapQ.val() || {};
            Object.values(data).forEach((q) => {
              if (q && q.Id && !isMathQuestion(q)) {
                const id = docId(q.Id);
                qMap.set(id, Object.assign({ _doc: id }, q));
              }
            });
          }
          const snapS = await withTimeout(FB.rtdb.ref("game_bank/custom_sets").once("value"), 3500);
          if (snapS && snapS.exists()) {
            const setsData = snapS.val() || {};
            Object.values(setsData).forEach((s) => {
              if (s && s.id) setMap.set(s.id, s);
            });
          }
        } catch (re) {
          console.warn("Lỗi đọc custom_questions từ RTDB:", re.message);
        }
      }

      DB.questions = Array.from(qMap.values()).sort(natural);
      DB.sets = Array.from(setMap.values());
    } catch (err) {
      console.warn("Lỗi DB.mergeSyncedQuestions:", err);
    }
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
      throw new Error("Chỉ Quản trị viên tối cao (Ms Trúc) mới có quyền xóa câu hỏi.");
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

  /* Xóa sạch vĩnh viễn toàn bộ câu hỏi môn Toán và nạp đủ 1.089 câu hỏi Tin học chuẩn */
  DB.purgeMathQuestions = async () => {
    needCloud();
    // 1. Lọc tất cả câu hỏi môn Toán đang có trong bộ nhớ
    const mathInMem = DB.questions.filter(isMathQuestion);
    const toDeleteDocs = mathInMem.map((q) => q._doc || docId(q.Id));

    // 2. Tìm câu hỏi môn Toán trên Firestore nếu có kết nối
    if (FB.available && !FB.isLocalMode) {
      try {
        const snap = await col("questions").where("Subject", "==", "Toán").get();
        snap.docs.forEach((d) => {
          if (!toDeleteDocs.includes(d.id)) toDeleteDocs.push(d.id);
        });
      } catch (e) {
        console.warn("Tìm câu hỏi Toán trên Firestore:", e.message);
      }
    }

    // 3. Thực hiện xóa trên Firestore
    if (toDeleteDocs.length && FB.available && !FB.isLocalMode) {
      try {
        await batchRun(toDeleteDocs.map((d) => (b) => b.delete(col("questions").doc(d))));
      } catch (e) {
        console.warn("Xóa câu hỏi Toán trên Firestore:", e.message);
      }
    }

    // 4. Lọc sạch DB.questions
    DB.questions = DB.questions.filter((q) => !isMathQuestion(q));

    // 5. Nạp lại đủ 1.089 câu hỏi Tin học từ OFFLINE_DATA
    if (window.OFFLINE_DATA && window.OFFLINE_DATA.questions) {
      const offQs = window.OFFLINE_DATA.questions.filter((q) => !isMathQuestion(q));
      const qMap = new Map();
      DB.questions.forEach((q) => qMap.set(q._doc || docId(q.Id), q));
      offQs.forEach((q) => {
        const id = q._doc || docId(q.Id);
        if (!qMap.has(id)) qMap.set(id, Object.assign({ _doc: id }, q));
      });
      DB.questions = Array.from(qMap.values()).sort(natural);
    }

    saveCache();
    DB.emit();
    return { deletedCount: toDeleteDocs.length, remainingCount: DB.questions.length };
  };

  /* Đẩy toàn bộ câu hỏi Tin học hiện có lên Cloud Firestore */
  DB.syncInformaticsToCloud = async () => {
    needCloud();
    const tinHocQs = DB.questions.filter((q) => !isMathQuestion(q));
    if (!tinHocQs.length) throw new Error("Không có câu hỏi Tin học nào để tải lên.");
    if (FB.available && !FB.isLocalMode) {
      const ops = tinHocQs.map((q) => {
        const id = q._doc || docId(q.Id);
        const data = clean(q);
        data.updatedAt = Date.now();
        return (b) => b.set(col("questions").doc(id), data);
      });
      await batchRun(ops);
    }
    saveCache();
    return { count: tinHocQs.length };
  };

  /* Khôi phục danh sách lớp chuẩn THCS Tân Bình */
  DB.resetClassesToDefault = async () => {
    needCloud();
    const defaultClasses = DEFAULT_SETTINGS.classes.slice();
    await DB.saveSettings({ classes: defaultClasses });
    return defaultClasses;
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
  DB.gameCfg = (gid) => Object.assign({ enabled: true, setId: "set_tin_all" }, DB.gameConfigs[gid] || {});
  DB.saveGameConfig = async (gid, patch) => {
    needCloud();
    const c = Object.assign(DB.gameCfg(gid), patch);
    if (FB.available && !FB.isLocalMode) {
      if (FB.fs) {
        try { await col("gameConfigs").doc(gid).set(c); } catch (e) {}
      }
      if (FB.rtdb) {
        try { await FB.rtdb.ref("game_bank/gameConfigs/" + gid).set(c); } catch (e) {}
      }
    } else if (FB.available && FB.isLocalMode) {
      try {
        if (FB.fs) await col("gameConfigs").doc(gid).set(c);
        if (FB.rtdb) await FB.rtdb.ref("game_bank/gameConfigs/" + gid).set(c);
      } catch (e) { console.warn("Lưu cấu hình game cục bộ:", e.message); }
    }
    DB.gameConfigs[gid] = c; saveCache(); DB.emit();
  };

  /* ---------- Cài đặt ---------- */
  DB.saveSettings = async (patch) => {
    needCloud();
    DB.settings = Object.assign({}, DB.settings, patch);
    if (FB.available && !FB.isLocalMode) {
      if (FB.fs) {
        try { await col("settings").doc("site").set(DB.settings); } catch (e) {}
      }
      if (FB.rtdb) {
        try {
          if (patch.classes) await FB.rtdb.ref("game_bank/classes").set(patch.classes);
          await FB.rtdb.ref("game_bank/settings").set(DB.settings);
        } catch (e) {}
      }
    } else if (FB.available && FB.isLocalMode) {
      try {
        if (FB.fs) await col("settings").doc("site").set(DB.settings);
        if (FB.rtdb) {
          if (patch.classes) await FB.rtdb.ref("game_bank/classes").set(patch.classes);
          await FB.rtdb.ref("game_bank/settings").set(DB.settings);
        }
      } catch (e) { console.warn("Lưu cài đặt cục bộ:", e.message); }
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
          displayName: "Ms Trúc (Quản trị)",
          email: "tranthithanhtruc1980@gmail.com",
          provider: "local",
          lastLogin: Date.now()
        }];
      }
    }
    return [{
      displayName: "Ms Trúc (Quản trị)",
      email: "tranthithanhtruc1980@gmail.com",
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
