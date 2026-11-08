/* =========================================================
   admin.js — Khu vực QUẢN TRỊ (chỉ admin)
   Tổng quan · Ngân hàng câu hỏi · Bộ đề & phân bổ · Điểm số
   Phòng trực tuyến · Người dùng · Cài đặt
   ========================================================= */
(function () {
  const { $, $$, esc, h } = U;
  const A = {};
  window.Admin = A;
  const LEVELS = Quiz.LEVELS;
  const TYPES = [["MC", "MC · Trắc nghiệm"], ["TF", "TF · Đúng/Sai"], ["SA", "SA · Trả lời ngắn"], ["LA", "LA · Tự luận"], ["Group", "Group · Nhóm câu"]];

  function header(ic, title, sub, grad) {
    return `<div class="page-h"><div class="ph-ic" style="--g:${grad || "linear-gradient(135deg,#0d6efd,#dc2626)"}">${ic}</div><div class="grow"><h1>${title}</h1><p>${sub || ""}</p></div><span class="chip ${DB.source === "cloud" ? "green" : "amber"}">${DB.sourceLabel()}</span></div>`;
  }
  const busy = (btn, on, txt) => { if (!btn) return; if (on) { btn._t = btn.innerHTML; btn.disabled = true; btn.innerHTML = `<span class="spin"></span> ${txt || "Đang xử lý…"}`; } else { btn.disabled = false; btn.innerHTML = btn._t; } };
  const fail = (e) => U.toast(FB.errMsg(e), "err", 5000);

  /* ======================= TỔNG QUAN ======================= */
  A.dashboard = (view) => {
    const qs = DB.questions, by = { MC: 0, TF: 0, SA: 0, LA: 0, Group: 0 };
    qs.forEach((q) => by[Quiz.baseType(q.Type)] = (by[Quiz.baseType(q.Type)] || 0) + 1);
    const f = DB.facets(qs);
    const s = DB.settings;
    const sheetId = s.googleSheetId || (window.APP_CONFIG && APP_CONFIG.googleSheetId) || "1e1NUbsrBZ9Lf4pGHE4BriYwB1i0_kzBXwkhU4831z4k";
    const folderId = s.googleDriveFolderId || (window.APP_CONFIG && APP_CONFIG.googleDriveFolderId) || "1MnvzQAzv62Xiw9ziU2jH5T37ObFmADg4";
    const editUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?gid=0#gid=0`;
    const folderUrl = `https://drive.google.com/drive/folders/${folderId}?lfhs=2`;

    view.innerHTML = `<div class="page">${header("📊", "Tổng quan quản trị", "Xin chào " + esc(FB.name()) + " 👋 — hệ thống quản trị hoàn chỉnh: Soạn thảo · Lưu trữ · Trích xuất.")}
      <div class="stat-tiles stg">
        <div class="stat-tile" style="--i:0"><i>📚</i><b>${qs.length}</b><span>Câu hỏi trong ngân hàng</span></div>
        <div class="stat-tile" style="--i:1"><i>✅</i><b>${Quiz.countPlayable(qs)}</b><span>Câu chơi được (MC/TF/SA)</span></div>
        <div class="stat-tile" style="--i:2"><i>🧩</i><b>${DB.sets.length}</b><span>Bộ đề</span></div>
        <div class="stat-tile" style="--i:3"><i>📖</i><b>${f.Subject.length}</b><span>Môn học</span></div>
        <div class="stat-tile" style="--i:4"><i>🎮</i><b>${Games.enabled().length}/${Games.list.length}</b><span>Trò chơi đang bật</span></div>
        <div class="stat-tile" style="--i:5"><i>🏅</i><b id="dRes">…</b><span>Trận đấu đã lưu</span></div>
      </div>

      <!-- NGUỒN DỮ LIỆU GỐC CỦA THẦY -->
      <div class="card" style="display:flex;align-items:center;gap:14px;padding:14px 18px;margin-bottom:16px;background:var(--bg-elevated);border-left:4px solid #10b981;flex-wrap:wrap" data-reveal>
        <span style="font-size:26px">☁️</span>
        <div style="flex:1;min-width:240px">
          <b style="font-size:15.5px;color:var(--text)">Dữ liệu gốc Google Sheet & Google Drive:</b>
          <div class="muted" style="font-size:13px;margin-top:2px">Trang tính ngân hàng câu hỏi & Thư mục tài liệu của Thầy Hùng TBS</div>
        </div>
        <a class="btn btn-sm btn-ghost" href="${editUrl}" target="_blank" rel="noopener">📊 Mở Google Sheet gốc ↗</a>
        <a class="btn btn-sm btn-ghost" href="${folderUrl}" target="_blank" rel="noopener">📁 Mở Thư mục Drive ↗</a>
        <button class="btn btn-sm btn-fun" id="dSync">🔄 Đồng bộ từ Google Sheet</button>
      </div>

      ${!qs.length ? `<div class="notice">🌱 Ngân hàng câu hỏi trên Firestore đang trống — web đang dùng câu hỏi mẫu. <button class="btn btn-sm btn-primary" id="seed">Nạp ${DEMO_QUESTIONS.length} câu mẫu vào Firestore</button><a class="btn btn-sm btn-ghost" href="#/admin/questions">Nhập từ file</a></div>` : ""}
      <div class="grid2">
        <div class="card" data-reveal><div class="card-h"><h3>📦 Phân loại câu hỏi</h3></div>
          <div class="type-bars">${Object.entries(by).map(([k, v]) => `<div class="tb"><span>${k}</span><div><i style="width:${qs.length ? (v / qs.length) * 100 : 0}%"></i></div><b>${v}</b></div>`).join("")}</div></div>
        <div class="card" data-reveal><div class="card-h"><h3>⚡ Thao tác nhanh</h3></div><div class="quick">
          <a class="btn btn-primary" href="#/admin/questions">✍️ Soạn & Quản lý câu hỏi (15 cột)</a>
          <button class="btn btn-fun" id="dSync2">🔄 Đồng bộ từ Google Sheet</button>
          <a class="btn btn-ghost" href="#/admin/sets">🧩 Tạo bộ đề & phân bổ game</a>
          <a class="btn btn-ghost" href="#/admin/presets">💾 Cấu hình soạn sẵn cho các game</a>
          <button class="btn btn-ghost" id="offl">💾 Tải bản offline (questions-offline.js)</button>
          <a class="btn btn-ghost" href="#/admin/scores">🏅 Xem điểm số</a>
          <a class="btn btn-ghost" href="#/admin/settings">⚙️ Cài đặt web</a></div></div>
      </div></div>`;
    U.reveal(view);
    DB.listResults(500).then((r) => { const e = $("#dRes", view); if (e) e.textContent = r.length; });
    const sd = $("#seed", view); if (sd) sd.onclick = async () => { busy(sd, true); try { const r = await DB.importQuestions(DEMO_QUESTIONS, { overwrite: true }); U.toast(`Đã nạp ${r.added + r.updated} câu`, "ok"); App.render(); } catch (e) { busy(sd, false); fail(e); } };
    $("#offl", view).onclick = () => { U.download("questions-offline.js", DB.exportOfflineJS(), "text/javascript"); U.toast("Đặt file vào thư mục data/ cạnh index.html", "info", 4000); };
    const syncFn = () => A.syncGoogleSheet().then((ok) => ok && App.render());
    const ds1 = $("#dSync", view); if (ds1) ds1.onclick = syncFn;
    const ds2 = $("#dSync2", view); if (ds2) ds2.onclick = syncFn;
  };

  /* ======================= NGÂN HÀNG CÂU HỎI ======================= */
  A.questions = (view) => {
    const isSuper = FB.isSuperAdmin;
    const st = { flt: U.store.get("admFlt", {}), page: 0, per: 30, sel: new Set() };
    const s = DB.settings;
    const sheetId = s.googleSheetId || (window.APP_CONFIG && APP_CONFIG.googleSheetId) || "1e1NUbsrBZ9Lf4pGHE4BriYwB1i0_kzBXwkhU4831z4k";
    const folderId = s.googleDriveFolderId || (window.APP_CONFIG && APP_CONFIG.googleDriveFolderId) || "1MnvzQAzv62Xiw9ziU2jH5T37ObFmADg4";
    const editUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?gid=0#gid=0`;
    const folderUrl = `https://drive.google.com/drive/folders/${folderId}?lfhs=2`;

    view.innerHTML = `<div class="page">${header("📚", "Ngân hàng câu hỏi", "Hệ thống quản trị hoàn chỉnh: Soạn thảo · Lưu trữ · Trích xuất theo chuẩn 15 cột của Thầy Hùng TBS.", "linear-gradient(135deg,#818cf8,#22d3ee)")}
      
      <!-- THANH LIÊN KẾT NGUỒN DỮ LIỆU GỐC -->
      <div class="card" style="display:flex;align-items:center;gap:12px;padding:12px 16px;margin-bottom:14px;background:var(--bg-elevated);border-left:4px solid #10b981;flex-wrap:wrap" data-reveal>
        <span style="font-size:22px">☁️</span>
        <div style="flex:1;min-width:240px">
          <b>Dữ liệu gốc Google Sheet & Google Drive:</b>
          <div class="muted" style="font-size:13px">Trang tính câu hỏi Toán 12 & Thư mục tài liệu của Thầy Hùng TBS</div>
        </div>
        <a class="btn btn-sm btn-ghost" href="${editUrl}" target="_blank" rel="noopener">📊 Mở Google Sheet gốc ↗</a>
        <a class="btn btn-sm btn-ghost" href="${folderUrl}" target="_blank" rel="noopener">📁 Mở Thư mục Drive ↗</a>
        <button class="btn btn-sm btn-fun" id="qSync">🔄 Đồng bộ Google Sheet</button>
      </div>

      <!-- BỘ 3 QUẢN TRỊ: SOẠN · TRÍCH XUẤT · LƯU TRỮ -->
      <div class="adm-tools" style="flex-wrap:wrap;gap:8px">
        <div class="btn-group" style="display:inline-flex;gap:4px">
          <button class="btn btn-primary" id="qAdd" title="Soạn câu hỏi mới trực tiếp">✍️ Soạn câu hỏi</button>
          <button class="btn btn-fun" id="qImp" title="Nhập file Excel, CSV hoặc JSON từ máy">📥 Nhập file</button>
        </div>
        <div class="btn-group" style="display:inline-flex;gap:4px">
          <button class="btn btn-ghost" id="qExpX" title="Trích xuất toàn bộ ra file Excel chuẩn 15 cột">📊 Xuất Excel (15 cột)</button>
          <button class="btn btn-ghost" id="qExpJ" title="Trích xuất ra file JSON">⬇️ JSON</button>
          <button class="btn btn-ghost" id="qTpl" title="Tải file Excel mẫu chuẩn 15 cột của Thầy">📄 File mẫu chuẩn</button>
        </div>
        <div class="btn-group" style="display:inline-flex;gap:4px">
          <button class="btn btn-ghost" id="qOff" title="Lưu toàn bộ ra file data/questions-offline.js để dùng ngoại tuyến">💾 Bản offline (data/)</button>
          ${!DB.questions.length ? `<button class="btn btn-sm btn-primary" id="qSeed">☁️ Nạp ${DEMO_QUESTIONS.length} câu vào Firestore</button>` : ""}
        </div>
        <span class="grow"></span>
        <input class="input" id="qSearch" placeholder="🔎 Tìm theo nội dung, Id…" style="max-width:240px">
      </div>
      <div class="adm-filters" id="qFlt"></div>
      <div class="adm-tools bulk hide" id="qBulk"><b id="qSelN"></b>
        <button class="btn btn-sm btn-fun" data-b="prev">👁️ Xem trước câu đã chọn</button>
        <button class="btn btn-sm btn-primary" data-b="meta">✏️ Sửa Môn/Lớp/Chương…</button>
        <button class="btn btn-sm btn-ghost" data-b="set">🧩 Thêm vào bộ đề</button>
        <button class="btn btn-sm btn-ghost" data-b="exp">⬇️ Xuất mục đã chọn (JSON)</button>
        ${isSuper ? '<button class="btn btn-sm btn-danger" data-b="del">🗑 Xoá</button>' : ''}
        <button class="btn btn-sm btn-ghost" data-b="clr">Bỏ chọn</button></div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th><input type="checkbox" id="qAll"></th><th>STT</th><th>ID question</th><th>Loại</th><th style="min-width:280px">Câu hỏi</th><th>Đáp án</th><th>Môn · Lớp</th><th>Chương · Chủ đề</th><th>Mức độ</th><th></th></tr></thead><tbody id="qBody"></tbody></table></div>
      <div class="pager" id="qPager"></div></div>`;

    function drawFilters() {
      const f = DB.facets(DB.questions);
      $("#qFlt", view).innerHTML = [["Type", "Loại", ["MC", "TF", "SA", "LA", "Group"]], ["Subject", "Môn", f.Subject], ["Grade", "Lớp", f.Grade], ["Chapter", "Chương", f.Chapter], ["Topic", "Chủ đề", f.Topic], ["Level", "Mức độ", f.Level]].map(([k, l, arr]) =>
        `<select class="select input-sm" data-f="${k}"><option value="">${l}: tất cả</option>${arr.map((x) => `<option ${st.flt[k] === x ? "selected" : ""}>${esc(x)}</option>`).join("")}</select>`).join("");
      $$("#qFlt select", view).forEach((s) => (s.onchange = () => { st.flt[s.dataset.f] = s.value; U.store.set("admFlt", st.flt); st.page = 0; draw(); }));
    }
    const list = () => DB.filterQ(DB.questions, Object.assign({}, st.flt, { search: $("#qSearch", view).value }));
    function ansText(q) {
      const t = Quiz.baseType(q.Type);
      if (t === "Group") return `${(q.children || []).length} câu con`;
      if (t === "LA") return "—";
      return `<b>${esc(q.CorrectAnswer || "")}</b>`;
    }
    function draw() {
      const L = list(), pages = Math.max(1, Math.ceil(L.length / st.per)); st.page = Math.min(st.page, pages - 1);
      const rows = L.slice(st.page * st.per, (st.page + 1) * st.per);
      $("#qBody", view).innerHTML = rows.length ? rows.map((q, idx) => `<tr data-d="${esc(q._doc)}">
        <td><input type="checkbox" class="qck" ${st.sel.has(q._doc) ? "checked" : ""}></td>
        <td><span class="muted">${st.page * st.per + idx + 1}</span></td>
        <td><code>${esc(q.Id)}</code></td><td><span class="q-badge qb-${Quiz.baseType(q.Type)}">${esc(q.Type)}</span></td>
        <td><div class="qrow-stem">${Quiz.rich(String(q.Question || "").slice(0, 400))}</div></td>
        <td>${ansText(q)}</td><td>${esc(q.Subject || "—")}<br><small class="muted">Lớp ${esc(q.Grade || "—")}</small></td>
        <td>${esc(q.Chapter || "—")}<br><small class="muted">${esc(q.Topic || "")}</small></td><td>${q.Level ? `<span class="chip">${esc(q.Level)}</span>` : "—"}</td>
        <td style="white-space:nowrap"><button class="btn btn-sm btn-icon btn-ghost" data-a="view" title="Xem">👁</button><button class="btn btn-sm btn-icon btn-ghost" data-a="edit" title="Sửa">✏️</button><button class="btn btn-sm btn-icon btn-ghost" data-a="dup" title="Nhân bản">⧉</button>${isSuper ? '<button class="btn btn-sm btn-icon btn-ghost" data-a="del" title="Xoá">🗑</button>' : ''}</td></tr>`).join("")
        : `<tr><td colspan="10"><div class="empty"><span class="em-ic">📭</span>${DB.questions.length ? "Không có câu hỏi khớp bộ lọc" : "Ngân hàng trống — hãy nhập file hoặc thêm câu hỏi."}</div></td></tr>`;
      Quiz.typeset($("#qBody", view));
      let pg = `<span class="muted">${L.length} câu · trang</span>`;
      for (let i = 0; i < pages; i++) if (pages <= 12 || Math.abs(i - st.page) < 3 || i === 0 || i === pages - 1) pg += `<button class="btn btn-sm ${i === st.page ? "btn-primary" : "btn-ghost"}" data-p="${i}">${i + 1}</button>`;
      $("#qPager", view).innerHTML = pg;
      $$("[data-p]", view).forEach((b) => (b.onclick = () => { st.page = +b.dataset.p; draw(); $("#main").scrollTo({ top: 0, behavior: "smooth" }); }));
      $$(".qck", view).forEach((c) => (c.onchange = () => { const d = c.closest("tr").dataset.d; c.checked ? st.sel.add(d) : st.sel.delete(d); bulk(); }));
      $("#qAll", view).checked = rows.length && rows.every((q) => st.sel.has(q._doc));
      bulk();
    }
    function bulk() { $("#qBulk", view).classList.toggle("hide", !st.sel.size); $("#qSelN", view).textContent = `Đã chọn ${st.sel.size} câu`; }
    $("#qAll", view).onchange = (e) => { const L = list().slice(st.page * st.per, (st.page + 1) * st.per); L.forEach((q) => e.target.checked ? st.sel.add(q._doc) : st.sel.delete(q._doc)); draw(); };
    $("#qSearch", view).oninput = U.debounce(() => { st.page = 0; draw(); }, 250);
    U.on($("#qBody", view), "click", "[data-a]", async (e, b) => {
      const d = b.closest("tr").dataset.d, q = DB.questions.find((x) => x._doc === d); if (!q) return;
      const a = b.dataset.a;
      if (a === "view") A.previewModal([q], `👁️ Xem trước câu ${esc(q.Id || "")}`);
      if (a === "edit") A.editQuestion(q).then((ok) => ok && (drawFilters(), draw()));
      if (a === "dup") { const c = U.plain(q); delete c._doc; c.Id = q.Id + "_copy"; A.editQuestion(c, true).then((ok) => ok && draw()); }
      if (a === "del") {
        if (!isSuper) return U.toast("Chỉ Quản trị viên tối cao mới có quyền xóa câu hỏi", "warn");
        if (await U.confirm(`Xoá câu <b>${esc(q.Id)}</b>?`, { danger: true, ok: "Xoá" })) { try { await DB.deleteQuestions([d]); st.sel.delete(d); draw(); U.toast("Đã xoá", "ok"); } catch (er) { fail(er); } }
      }
    });
    $("#qAdd", view).onclick = () => A.editQuestion({ Type: "MC", Options: {} }, true).then((ok) => ok && (drawFilters(), draw()));
    $("#qImp", view).onclick = () => A.importDialog().then((ok) => ok && (drawFilters(), draw()));
    $("#qSync", view).onclick = () => A.syncGoogleSheet().then((ok) => ok && (drawFilters(), draw()));
    $("#qExpJ", view).onclick = () => U.download("ngan-hang-cau-hoi.json", IO.toJSON(list()), "application/json");
    $("#qExpX", view).onclick = () => IO.toExcel(list()).catch(fail);
    $("#qTpl", view).onclick = () => IO.template().catch(fail);
    $("#qOff", view).onclick = () => { U.download("questions-offline.js", DB.exportOfflineJS(), "text/javascript"); U.toast("Đặt file vào thư mục data/ cạnh index.html để dùng khi không có mạng", "info", 4500); };
    const qSeed = $("#qSeed", view); if (qSeed) qSeed.onclick = async () => { busy(qSeed, true); try { const r = await DB.importQuestions(DEMO_QUESTIONS, { overwrite: true }); U.toast(`Đã nạp ${r.added + r.updated} câu vào Firestore`, "ok"); drawFilters(); draw(); } catch (e) { busy(qSeed, false); fail(e); } };
    $$("#qBulk [data-b]", view).forEach((b) => (b.onclick = async () => {
      const ids = Array.from(st.sel), a = b.dataset.b;
      if (a === "prev") {
        const selQuestions = DB.questions.filter((q) => st.sel.has(q._doc));
        return A.previewModal(selQuestions, `👁️ Xem trước ${selQuestions.length} câu hỏi đã chọn`);
      }
      if (a === "clr") { st.sel.clear(); return draw(); }
      if (a === "exp") return U.download("cau-hoi-da-chon.json", IO.toJSON(DB.questions.filter((q) => st.sel.has(q._doc))), "application/json");
      if (a === "del") {
        if (!isSuper) return U.toast("Chỉ Quản trị viên tối cao mới có quyền xóa câu hỏi", "warn");
        if (!(await U.confirm(`Xoá <b>${ids.length}</b> câu hỏi đã chọn?`, { danger: true, ok: "Xoá tất cả" }))) return; busy(b, true); try { await DB.deleteQuestions(ids); st.sel.clear(); U.toast("Đã xoá " + ids.length + " câu", "ok"); } catch (e) { fail(e); } busy(b, false); drawFilters(); return draw();
      }
      if (a === "meta") {
        const f = DB.facets(DB.questions);
        const m = U.modal({ title: `✏️ Sửa thông tin cho ${ids.length} câu`, size: "md", body: `<p class="muted" style="margin-top:0">Để trống ô nào thì giữ nguyên giá trị cũ của ô đó.</p><div class="grid2">
          ${[["Subject", "Môn"], ["Grade", "Lớp"], ["Chapter", "Chương"], ["Topic", "Chủ đề"]].map(([k, l]) => `<div class="field"><label>${l}</label><input class="input" data-k="${k}" list="dl${k}"><datalist id="dl${k}">${f[k].map((x) => `<option value="${esc(x)}">`).join("")}</datalist></div>`).join("")}
          <div class="field"><label>Mức độ</label><select class="select" data-k="Level"><option value="">(giữ nguyên)</option>${LEVELS.map((l) => `<option>${l}</option>`).join("")}</select></div></div>`,
          actions: [{ label: "Hủy", cls: "btn-ghost" }, { label: "Lưu thay đổi", cls: "btn-primary", onClick: async (btn, w) => { const p = {}; $$("[data-k]", w).forEach((i) => { if (i.value.trim()) p[i.dataset.k] = i.value.trim(); }); busy(btn, true); try { await DB.bulkUpdate(ids, p); U.toast("Đã cập nhật", "ok"); return true; } catch (e) { busy(btn, false); fail(e); return false; } } }] });
        if (await m.result) { drawFilters(); draw(); }
      }
      if (a === "set") {
        if (!DB.sets.length) return U.toast("Chưa có bộ đề — hãy tạo ở mục Bộ đề & phân bổ", "warn");
        const m = U.modal({ title: "🧩 Thêm vào bộ đề", size: "sm", body: `<select class="select" id="toSet">${DB.sets.map((s) => `<option value="${s.id}">${esc(s.name)}</option>`).join("")}</select>`,
          actions: [{ label: "Hủy", cls: "btn-ghost" }, { label: "Thêm", cls: "btn-primary", onClick: async (btn, w) => {
            const s = DB.findSet($("#toSet", w).value); const qids = new Set(s.questionIds || []);
            DB.questions.filter((q) => st.sel.has(q._doc)).forEach((q) => qids.add(q.Id));
            busy(btn, true); try { await DB.saveSet(Object.assign({}, s, { questionIds: Array.from(qids), filter: null })); U.toast("Đã thêm vào bộ đề " + s.name, "ok"); return true; } catch (e) { busy(btn, false); fail(e); return false; } } }] });
        await m.result;
      }
    }));
    drawFilters(); draw();
  };

  /* ----- Form câu hỏi (dùng đệ quy cho câu con của nhóm) ----- */
  function qForm(q, child) {
    q = U.plain(q || {}); q.Options = q.Options || {};
    const f = DB.facets(DB.questions);
    const el = h(`<div class="qform">
      <div class="grid2">
        <div class="field"><label>Id</label><input class="input" data-k="Id" value="${esc(q.Id || "")}" placeholder="Tự tạo nếu để trống"></div>
        <div class="field"><label>Loại câu hỏi</label><select class="select" data-k="Type">${(child ? TYPES.filter((t) => t[0] !== "Group") : TYPES).map(([k, l]) => `<option value="${k}" ${Quiz.baseType(q.Type || "MC") === k ? "selected" : ""}>${l}</option>`).join("")}</select></div>
        ${child ? "" : `<div class="field"><label>Mức độ</label><select class="select" data-k="Level"><option value=""></option>${LEVELS.map((l) => `<option ${q.Level === l ? "selected" : ""}>${l}</option>`).join("")}</select></div>
        <div class="field"><label>Lớp</label><input class="input" data-k="Grade" list="fG" value="${esc(q.Grade || "")}"></div>
        <div class="field"><label>Môn</label><input class="input" data-k="Subject" list="fS" value="${esc(q.Subject || "")}"></div>
        <div class="field"><label>Chương</label><input class="input" data-k="Chapter" list="fC" value="${esc(q.Chapter || "")}"></div>
        <div class="field"><label>Chủ đề</label><input class="input" data-k="Topic" list="fT" value="${esc(q.Topic || "")}"></div>
        <datalist id="fG">${f.Grade.map((x) => `<option value="${esc(x)}">`).join("")}</datalist><datalist id="fS">${f.Subject.map((x) => `<option value="${esc(x)}">`).join("")}</datalist>
        <datalist id="fC">${f.Chapter.map((x) => `<option value="${esc(x)}">`).join("")}</datalist><datalist id="fT">${f.Topic.map((x) => `<option value="${esc(x)}">`).join("")}</datalist>`}
      </div>
      <div class="field" style="margin-top:12px">
        <div class="row" style="margin-bottom:6px;gap:6px;flex-wrap:wrap">
          <label style="margin-bottom:0">Nội dung câu hỏi <small style="text-transform:none;font-weight:600">— $công\_thức$, dán link ảnh hoặc Ctrl+V dán ảnh</small></label>
          <span class="grow"></span>
          <button type="button" class="btn btn-xs btn-ghost" data-act="paste-img" title="Dán ảnh từ bộ nhớ tạm Clipboard (hoặc bấm Ctrl+V)">📷 Dán ảnh (Ctrl+V)</button>
          <button type="button" class="btn btn-xs btn-ghost" data-act="file-img" title="Chọn file ảnh (.png, .jpg, .svg) từ máy tính">📁 Chọn ảnh</button>
          <button type="button" class="btn btn-xs btn-ghost" data-act="tikz-tool" title="Chèn mã TikZ / Bảng biến thiên / Đồ thị">📐 TikZ & Đồ thị</button>
          <input type="file" accept="image/*" style="display:none" data-file-input>
        </div>
        <textarea class="textarea" data-k="Question" rows="3">${esc(q.Question || "")}</textarea>
      </div>
      <div class="card" style="box-shadow:none;background:var(--bg-elevated);border:1.5px solid var(--border);border-radius:14px;margin-top:14px;padding:12px 14px">
        <div class="row" style="margin-bottom:8px;gap:8px;flex-wrap:wrap">
          <b style="color:var(--text);display:flex;align-items:center;gap:6px">👁️ Xem trước câu hỏi (Toàn bộ nội dung & phương án chuẩn Game)</b>
          <span class="grow"></span>
          <button type="button" class="btn btn-xs btn-fun" data-act="sim-play" title="Mô phỏng học sinh trả lời trong game">🎮 Chơi thử câu này</button>
        </div>
        <div class="full-live-prev" data-full-prev style="background:var(--surface);border-radius:10px;padding:12px;border:1px solid var(--line);min-height:60px"></div>
      </div>
      <div class="qf-type" style="margin-top:12px"></div>
      <div class="field" style="margin-top:12px">
        <div class="row" style="margin-bottom:6px">
          <label style="margin-bottom:0">Lời giải / giải thích</label>
          <span class="grow"></span>
          <button type="button" class="btn btn-xs btn-ghost" data-act="paste-exp-img" title="Dán ảnh lời giải (Ctrl+V)">📷 Dán ảnh vào lời giải</button>
        </div>
        <textarea class="textarea" data-k="Explain" rows="2">${esc(q.Explain || "")}</textarea>
      </div>
    </div>`);
    const typeBox = $(".qf-type", el), typeSel = $("[data-k=Type]", el);
    let children = (q.children || []).map((c) => qForm(c, true));

    function readForm() {
      const o = {}; $$(":scope > .grid2 [data-k], :scope > .field [data-k]", el).forEach((i) => { if (i.value.trim() !== "") o[i.dataset.k] = i.value; });
      const t = typeSel.value; o.Type = child && t !== "Group" ? "Group" + t : t;
      if (t === "MC") { o.Options = {}; $$("[data-o]", typeBox).forEach((i) => { if (i.value.trim()) o.Options[i.dataset.o] = i.value; }); const ok = $(".ok-pick.on", typeBox); o.CorrectAnswer = ok ? ok.dataset.ok : ""; }
      if (t === "TF") { o.Options = {}; $$("[data-o]", typeBox).forEach((i) => { if (i.value.trim()) o.Options[i.dataset.o] = i.value; }); o.CorrectAnswer = $$(".tf-pick", typeBox).map((p) => { const b = $("button.on", p); return b ? (b.classList.contains("t") ? "Đ" : "S") : ""; }).join(""); }
      if (t === "SA") o.CorrectAnswer = ($("[data-sa]", typeBox) || {}).value ? $("[data-sa]", typeBox).value.trim() : "";
      if (t === "Group") o.children = children.map((c) => c.read());
      return o;
    }

    const updateFullPrev = U.debounce(() => {
      const p = $("[data-full-prev]", el);
      if (!p) return;
      const curQ = readForm();
      p.innerHTML = Quiz.preview(curQ);
      Quiz.typeset(p);
    }, 200);

    const prev = () => updateFullPrev();
    $("[data-k=Question]", el).oninput = prev;
    $("[data-k=Explain]", el).oninput = prev;
    $("[data-k=Id]", el).oninput = prev;

    const btnSimPlay = $("[data-act=sim-play]", el);
    if (btnSimPlay) {
      btnSimPlay.onclick = () => {
        const curQ = readForm();
        const testBox = h(`<div style="padding:10px"></div>`);
        U.modal({
          title: `🎮 Chơi thử: ${curQ.Id || "Câu hỏi"} (${curQ.Type})`,
          size: "md",
          body: testBox
        });
        Quiz.mount(testBox, Quiz.prepare([curQ])[0], {
          num: 1, total: 1, feedback: true, explain: true,
          onAnswer: (res) => {
            U.toast(res.ok ? "🎉 Trả lời đúng! Tuyệt vời!" : "❌ Chưa chính xác!", res.ok ? "ok" : "warn");
          }
        });
        Quiz.typeset(testBox);
      };
    }

    // Thiết lập tính năng dán ảnh Clipboard (Ctrl+V) & chọn file ảnh trực tiếp
    const qTextarea = $("[data-k=Question]", el);
    const expTextarea = $("[data-k=Explain]", el);
    const fileInput = $("[data-file-input]", el);

    const insertImageToTextarea = (targetInput, file) => {
      if (!file || !file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let w = img.width, h = img.height;
          const maxDim = 950;
          if (w > maxDim || h > maxDim) {
            if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
            else { w = Math.round(w * maxDim / h); h = maxDim; }
          }
          canvas.width = w; canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          const dataUrl = canvas.toDataURL("image/png", 0.9);
          const tag = `\n![Hình minh hoạ](${dataUrl})\n`;
          const start = targetInput.selectionStart || targetInput.value.length;
          const end = targetInput.selectionEnd || targetInput.value.length;
          const val = targetInput.value;
          targetInput.value = val.substring(0, start) + tag + val.substring(end);
          targetInput.selectionStart = targetInput.selectionEnd = start + tag.length;
          prev();
          U.toast("📸 Đã chèn ảnh đồ thị/hình vẽ thành công!", "ok");
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    };

    const attachPaste = (targetInput) => {
      targetInput.addEventListener("paste", (e) => {
        const items = (e.clipboardData || window.clipboardData)?.items;
        if (!items) return;
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            e.preventDefault();
            insertImageToTextarea(targetInput, items[i].getAsFile());
            break;
          }
        }
      });
    };

    attachPaste(qTextarea);
    attachPaste(expTextarea);

    const btnPaste = $("[data-act=paste-img]", el);
    if (btnPaste) {
      btnPaste.onclick = async () => {
        try {
          if (navigator.clipboard && navigator.clipboard.read) {
            const items = await navigator.clipboard.read();
            for (const item of items) {
              const imgType = item.types.find((t) => t.startsWith("image/"));
              if (imgType) {
                const blob = await item.getType(imgType);
                insertImageToTextarea(qTextarea, blob);
                return;
              }
            }
          }
        } catch (err) {}
        U.toast("💡 Hãy đặt con trỏ vào ô soạn thảo và ấn Ctrl + V để dán ảnh tức thì!", "info", 4000);
      };
    }

    const btnPasteExp = $("[data-act=paste-exp-img]", el);
    if (btnPasteExp) {
      btnPasteExp.onclick = () => U.toast("💡 Hãy đặt con trỏ vào ô Lời giải và ấn Ctrl + V để dán ảnh!", "info", 4000);
    }

    const btnFile = $("[data-act=file-img]", el);
    if (btnFile && fileInput) {
      btnFile.onclick = () => fileInput.click();
      fileInput.onchange = () => {
        if (fileInput.files && fileInput.files[0]) {
          insertImageToTextarea(qTextarea, fileInput.files[0]);
          fileInput.value = "";
        }
      };
    }

    const btnTikz = $("[data-act=tikz-tool]", el);
    if (btnTikz) {
      btnTikz.onclick = () => A.openTikzModal((snippet) => {
        const start = qTextarea.selectionStart || qTextarea.value.length;
        const end = qTextarea.selectionEnd || qTextarea.value.length;
        const val = qTextarea.value;
        const insertText = `\n${snippet}\n`;
        qTextarea.value = val.substring(0, start) + insertText + val.substring(end);
        qTextarea.selectionStart = qTextarea.selectionEnd = start + insertText.length;
        prev();
      });
    }
    function renderType() {
      const t = typeSel.value;
      if (t === "MC") {
        const ans = String(q.CorrectAnswer || "").toUpperCase().charAt(0);
        typeBox.innerHTML = `<span class="lbl">Phương án — bấm chữ cái để chọn đáp án đúng</span>` + ["A", "B", "C", "D"].map((k) => `<div class="opt-row"><button type="button" class="ok-pick ${ans === k ? "on" : ""}" data-ok="${k}">${k}</button><input class="input" data-o="${k}" value="${esc(q.Options[k] || "")}"><span></span></div>`).join("");
        $$(".ok-pick", typeBox).forEach((b) => (b.onclick = () => { $$(".ok-pick", typeBox).forEach((x) => x.classList.toggle("on", x === b)); }));
      } else if (t === "TF") {
        const raw = String(q.CorrectAnswer || "").toUpperCase();
        typeBox.innerHTML = `<span class="lbl">4 ý — chọn Đ (đúng) / S (sai) cho từng ý</span>` + ["a", "b", "c", "d"].map((k, i) => { const v = raw[i]; const isT = "ĐDT1".includes(v || "-"); return `<div class="opt-row"><b style="text-align:center">${k})</b><input class="input" data-o="${k}" value="${esc(q.Options[k] || q.Options[k.toUpperCase()] || "")}"><span class="tf-pick" data-tf="${i}"><button type="button" class="t ${v && isT ? "on" : ""}">Đ</button><button type="button" class="f ${v && !isT ? "on" : ""}">S</button></span></div>`; }).join("");
        $$(".tf-pick", typeBox).forEach((p) => $$("button", p).forEach((b) => (b.onclick = () => $$("button", p).forEach((x) => x.classList.toggle("on", x === b)))));
      } else if (t === "SA") {
        typeBox.innerHTML = `<div class="field"><label>Đáp án đúng <small style="text-transform:none">— nhiều đáp án được chấp nhận ngăn bằng dấu | (VD: 0,5|1/2)</small></label><input class="input" data-sa value="${esc(q.CorrectAnswer || "")}"></div>`;
      } else if (t === "LA") typeBox.innerHTML = `<p class="muted">Câu tự luận chỉ lưu trong ngân hàng, không dùng trong game.</p>`;
      else if (t === "Group") {
        typeBox.innerHTML = `<span class="lbl">Câu hỏi con</span><div class="kids"></div><button type="button" class="btn btn-ghost btn-sm" data-addkid>➕ Thêm câu con</button>`;
        const kids = $(".kids", typeBox);
        const drawKids = () => { kids.innerHTML = ""; children.forEach((c, i) => { const box = h(`<div class="child-box"><div class="row" style="margin-bottom:8px"><b>Câu con ${i + 1}</b><span class="grow"></span><button type="button" class="btn btn-sm btn-ghost" data-rm>🗑 Xoá</button></div></div>`); box.appendChild(c.el); $("[data-rm]", box).onclick = () => { children.splice(i, 1); drawKids(); }; kids.appendChild(box); }); };
        drawKids();
        $("[data-addkid]", typeBox).onclick = () => { children.push(qForm({ Type: "GroupMC", Id: ($("[data-k=Id]", el).value || "Q") + "_" + (children.length + 1) }, true)); drawKids(); };
      }
    }
    typeSel.onchange = () => { q.CorrectAnswer = ""; renderType(); prev(); };
    typeBox.addEventListener("input", prev);
    typeBox.addEventListener("click", () => setTimeout(prev, 50));
    renderType();
    prev();
    return { el, read: readForm };
  }

  /* ----- Modal xem trước chuyên dụng cho 1 hoặc NHIỀU câu hỏi ----- */
  A.previewModal = (items, title) => {
    const list = Array.isArray(items) ? items : [items];
    if (!list.length) return U.toast("Không có câu hỏi nào để xem trước", "warn");

    let curIdx = 0;
    let mode = list.length === 1 ? "single" : "multi";
    let multiCount = Math.min(list.length, 5);

    const buildSingle = (idx) => {
      const q = list[idx];
      return `<div class="card" style="box-shadow:none;background:var(--surface);margin-bottom:8px">
        <div class="row" style="margin-bottom:8px;gap:6px;flex-wrap:wrap">
          <span class="q-badge qb-${Quiz.baseType(q.Type)}">Câu ${idx + 1}. ${esc(q.Type)}</span>
          <b>${esc(q.Id || "#" + (idx + 1))}</b>
          ${q.Level ? `<span class="chip">${esc(q.Level)}</span>` : ""}
          ${q.Subject ? `<span class="chip">${esc(q.Subject)}</span>` : ""}
          ${q.Grade ? `<span class="chip">Lớp ${esc(q.Grade)}</span>` : ""}
          ${q.Chapter ? `<span class="chip">${esc(q.Chapter)}</span>` : ""}
          <span class="grow"></span>
          <button class="btn btn-xs btn-fun" data-sim="${idx}">🎮 Chơi thử câu này</button>
        </div>
        ${Quiz.preview(q)}
      </div>`;
    };

    const buildMulti = (count) => {
      const target = count === "all" ? list : list.slice(0, count);
      return target.map((q, i) => `
        <div class="child-box" style="margin-bottom:14px;background:var(--surface)">
          <div class="row" style="margin-bottom:6px;gap:6px;flex-wrap:wrap">
            <span class="q-badge qb-${Quiz.baseType(q.Type)}">Câu ${i + 1}. ${esc(q.Type)}</span>
            <b>${esc(q.Id || "")}</b>
            ${q.Level ? `<span class="chip">${esc(q.Level)}</span>` : ""}
            ${q.Chapter ? `<span class="chip">${esc(q.Chapter)}</span>` : ""}
            <span class="grow"></span>
            <button class="btn btn-xs btn-ghost" data-sim="${i}">🎮 Chơi thử</button>
          </div>
          ${Quiz.preview(q)}
        </div>
      `).join("");
    };

    const body = h(`<div>
      ${list.length > 1 ? `
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--border)">
          <div class="btn-group" style="display:inline-flex;gap:4px">
            <button type="button" class="btn btn-sm ${mode === "multi" ? "btn-primary" : "btn-ghost"}" id="pvModeMulti">📑 Xem nhiều câu</button>
            <button type="button" class="btn btn-sm ${mode === "single" ? "btn-primary" : "btn-ghost"}" id="pvModeSingle">🔍 Xem từng câu</button>
          </div>
          <span class="grow"></span>
          <div id="pvMultiBar" class="${mode === "multi" ? "" : "hide"}" style="display:flex;gap:4px;align-items:center;flex-wrap:wrap">
            <span class="muted" style="font-size:13px">Hiển thị:</span>
            <button type="button" class="btn btn-xs ${multiCount === 5 ? "btn-primary" : "btn-ghost"}" data-mc="5">5 câu</button>
            <button type="button" class="btn btn-xs ${multiCount === 10 ? "btn-primary" : "btn-ghost"}" data-mc="10">10 câu</button>
            <button type="button" class="btn btn-xs ${multiCount === "all" ? "btn-primary" : "btn-ghost"}" data-mc="all">Tất cả (${list.length})</button>
          </div>
          <div id="pvSingleBar" class="${mode === "single" ? "" : "hide"}" style="display:flex;gap:4px;align-items:center">
            <button type="button" class="btn btn-xs btn-ghost" id="pvPrevQ">⬅ Trước</button>
            <select class="select input-sm" id="pvSelectQ" style="max-width:260px">
              ${list.map((q, i) => `<option value="${i}">Câu ${i + 1}/${list.length}: ${esc(q.Id || "")} - ${esc(String(q.Question || "").slice(0, 30))}</option>`).join("")}
            </select>
            <button type="button" class="btn btn-xs btn-ghost" id="pvNextQ">Sau ➡</button>
          </div>
        </div>
      ` : ""}
      <div id="pvContent" style="max-height:68vh;overflow-y:auto;padding-right:4px"></div>
    </div>`);

    const pvContent = $("#pvContent", body);
    const pvMultiBar = $("#pvMultiBar", body);
    const pvSingleBar = $("#pvSingleBar", body);
    const btnMulti = $("#pvModeMulti", body);
    const btnSingle = $("#pvModeSingle", body);
    const selQ = $("#pvSelectQ", body);

    const updateView = () => {
      if (!pvContent) return;
      if (mode === "single") {
        pvContent.innerHTML = buildSingle(curIdx);
        if (selQ) selQ.value = curIdx;
      } else {
        pvContent.innerHTML = buildMulti(multiCount);
      }
      Quiz.typeset(pvContent);

      $$("[data-sim]", pvContent).forEach((b) => {
        b.onclick = () => {
          const idx = +b.dataset.sim;
          const q = list[idx];
          const testBox = h(`<div style="padding:10px"></div>`);
          U.modal({
            title: `🎮 Chơi thử: ${q.Id || "Câu " + (idx + 1)} (${q.Type})`,
            size: "md",
            body: testBox
          });
          Quiz.mount(testBox, Quiz.prepare([q])[0], {
            num: idx + 1, total: list.length, feedback: true, explain: true,
            onAnswer: (res) => {
              U.toast(res.ok ? "🎉 Trả lời đúng! Tuyệt vời!" : "❌ Chưa chính xác!", res.ok ? "ok" : "warn");
            }
          });
          Quiz.typeset(testBox);
        };
      });
    };

    if (btnMulti && btnSingle) {
      btnMulti.onclick = () => {
        mode = "multi";
        btnMulti.className = "btn btn-sm btn-primary";
        btnSingle.className = "btn btn-sm btn-ghost";
        if (pvMultiBar) pvMultiBar.classList.remove("hide");
        if (pvSingleBar) pvSingleBar.classList.add("hide");
        updateView();
      };
      btnSingle.onclick = () => {
        mode = "single";
        btnSingle.className = "btn btn-sm btn-primary";
        btnMulti.className = "btn btn-sm btn-ghost";
        if (pvSingleBar) pvSingleBar.classList.remove("hide");
        if (pvMultiBar) pvMultiBar.classList.add("hide");
        updateView();
      };
    }

    $$("[data-mc]", body).forEach((b) => {
      b.onclick = () => {
        $$("[data-mc]", body).forEach((x) => x.className = "btn btn-xs btn-ghost");
        b.className = "btn btn-xs btn-primary";
        const val = b.dataset.mc;
        multiCount = val === "all" ? "all" : +val;
        updateView();
      };
    });

    if (selQ) selQ.onchange = () => { curIdx = +selQ.value; updateView(); };
    const prevQ = $("#pvPrevQ", body);
    if (prevQ) prevQ.onclick = () => { if (curIdx > 0) { curIdx--; updateView(); } };
    const nextQ = $("#pvNextQ", body);
    if (nextQ) nextQ.onclick = () => { if (curIdx < list.length - 1) { curIdx++; updateView(); } };

    updateView();

    U.modal({
      title: title || `👁️ Xem trước (${list.length} câu hỏi)`,
      size: "lg",
      body,
      actions: [{ label: "Đóng", cls: "btn-ghost" }]
    });
  };

  A.openTikzModal = (onInsert) => {
    const TEMPLATES = [
      {
        name: "📊 Bảng biến thiên hàm bậc 3 (Hàm số $y = x^3 - 3x$)",
        code: `[tikz]
\\begin{tikzpicture}
\\tkzTabInit[lgt=1.5,espcl=2]{$x$/0.8,$y'$/0.8,$y$/1.5}{$-\\infty$,$-1$,$1$,$+\\infty$}
\\tkzTabLine{,+,0,-,0,+,}
\\tkzTabVar{-/ $-\\infty$, +/ $2$, -/ $-2$, +/ $+\\infty$}
\\end{tikzpicture}
[/tikz]`
      },
      {
        name: "📊 Bảng biến thiên hàm phân thức ($y = \\frac{2x+1}{x-1}$)",
        code: `[tikz]
\\begin{tikzpicture}
\\tkzTabInit[lgt=1.5,espcl=2.2]{$x$/0.8,$y'$/0.8,$y$/1.5}{$-\\infty$,$1$,$+\\infty$}
\\tkzTabLine{,-,d,-,}
\\tkzTabVar{+/ $2$, -D+/ $-\\infty$ / $+\\infty$, -/ $2$}
\\end{tikzpicture}
[/tikz]`
      },
      {
        name: "📈 Đồ thị hàm số bậc 3 trên hệ trục Oxy",
        code: `[tikz]
\\begin{tikzpicture}[scale=0.8,>=stealth]
\\draw[->] (-2.5,0) -- (2.5,0) node[right] {$x$};
\\draw[->] (0,-2.5) -- (0,2.5) node[above] {$y$};
\\node at (0,0) [below left] {$O$};
\\draw[thick,blue,domain=-1.8:1.8,samples=100] plot (\\x,{\\x*\\x*\\x - 3*\\x});
\\draw[dashed] (-1,0) node[below]{$-1$} -- (-1,2) -- (0,2) node[right]{$2$};
\\draw[dashed] (1,0) node[above]{$1$} -- (1,-2) -- (0,-2) node[left]{$-2$};
\\fill (-1,2) circle (1.5pt) (1,-2) circle (1.5pt);
\\end{tikzpicture}
[/tikz]`
      },
      {
        name: "🔺 Hình chóp tam giác S.ABC (Hình học không gian)",
        code: `[tikz]
\\begin{tikzpicture}[scale=0.9,>=stealth]
\\coordinate (A) at (0,0);
\\coordinate (B) at (1.2,-1.2);
\\coordinate (C) at (4,0);
\\coordinate (S) at (1.5,3.2);
\\draw[thick] (S)--(A)--(B)--(C)--(S)--(B);
\\draw[dashed,thick] (A)--(C);
\\node[above] at (S) {$S$};
\\node[left] at (A) {$A$};
\\node[below] at (B) {$B$};
\\node[right] at (C) {$C$};
\\end{tikzpicture}
[/tikz]`
      },
      {
        name: "🧭 Hệ trục tọa độ không gian Oxyz",
        code: `[tikz]
\\begin{tikzpicture}[scale=0.9,>=stealth]
\\draw[->,thick] (0,0) -- (3,0) node[right] {$y$};
\\draw[->,thick] (0,0) -- (0,3) node[above] {$z$};
\\draw[->,thick] (0,0) -- (-1.8,-1.8) node[below left] {$x$};
\\node at (0,0) [below right] {$O$};
\\end{tikzpicture}
[/tikz]`
      }
    ];

    const body = h(`<div>
      <p class="muted" style="margin-top:0">Chọn mẫu có sẵn hoặc dán mã TikZ của Thầy từ LaTeX/Mathcha vào khung dưới:</p>
      <div class="field" style="margin-bottom:10px">
        <label>Mẫu dựng sẵn Toán 12</label>
        <select class="select" id="tzTpl">
          ${TEMPLATES.map((t, i) => `<option value="${i}">${esc(t.name)}</option>`).join("")}
          <option value="custom">✏️ Tự soạn / dán mã TikZ tùy chỉnh</option>
        </select>
      </div>
      <div class="field">
        <label>Mã TikZ / LaTeX</label>
        <textarea class="textarea" id="tzCode" rows="8" style="font-family:monospace;font-size:13px">${esc(TEMPLATES[0].code)}</textarea>
      </div>
      <div class="card" style="box-shadow:none;background:var(--bg-elevated);margin-top:10px;padding:10px 12px">
        <small class="muted">💡 <b>Mẹo cho Giáo viên:</b> Thầy có thể soạn hoặc chỉnh sửa mã trên rồi bấm "Chèn vào câu hỏi". Hệ thống lưu mã TikZ này cùng câu hỏi để tạo đồ thị vector chuẩn xác.</small>
      </div>
    </div>`);

    const sel = $("#tzTpl", body), txt = $("#tzCode", body);
    sel.onchange = () => {
      const idx = sel.value;
      if (idx !== "custom" && TEMPLATES[idx]) txt.value = TEMPLATES[idx].code;
    };

    U.modal({
      title: "📐 Trợ lý TikZ & Đồ thị Toán học",
      size: "md",
      body,
      actions: [
        { label: "Đóng", cls: "btn-ghost" },
        {
          label: "➕ Chèn vào câu hỏi",
          cls: "btn-primary",
          onClick: () => {
            const code = txt.value.trim();
            if (!code) { U.toast("Chưa có mã TikZ", "warn"); return false; }
            if (onInsert) onInsert(code);
            U.toast("Đã chèn mã TikZ vào câu hỏi", "ok");
            return true;
          }
        }
      ]
    });
  };

  A.editQuestion = (q, isNew) => {
    const form = qForm(q);
    const m = U.modal({ title: isNew ? "➕ Thêm câu hỏi" : "✏️ Sửa câu hỏi " + esc(q.Id || ""), size: "lg", body: form.el, autofocus: false,
      actions: [{ label: "Hủy", cls: "btn-ghost" }, { label: "💾 Lưu câu hỏi", cls: "btn-primary", onClick: async (btn) => {
        const o = form.read();
        const errs = IO.validate(o).concat(...(o.children || []).map((c, i) => IO.validate(c).map((e) => `câu con ${i + 1}: ${e}`)));
        if (errs.length) { U.toast("Chưa hợp lệ: " + errs.join("; "), "warn", 4500); return false; }
        if (isNew && o.Id && DB.questions.some((x) => x.Id === o.Id) && !(await U.confirm(`Id <b>${esc(o.Id)}</b> đã tồn tại. Ghi đè?`))) return false;
        busy(btn, true);
        try { await DB.saveQuestion(IO.clean(o), isNew ? null : q._doc); U.toast("Đã lưu câu hỏi", "ok"); return true; } catch (e) { busy(btn, false); fail(e); return false; }
      } }] });
    return m.result.then((v) => !!v);
  };

  /* ----- Nhập file & Bóc tách đề thi từ Word/Text ----- */
  A.importDialog = () => {
    let parsed = null;
    const body = h(`<div>
      <div class="tabs" style="display:flex;gap:8px;margin-bottom:14px;border-bottom:1px solid var(--border);padding-bottom:10px">
        <button type="button" class="btn btn-sm btn-primary" id="tabBtnFile">📁 Nhập file (Excel / CSV / JSON)</button>
        <button type="button" class="btn btn-sm btn-ghost" id="tabBtnWord">📋 Dán đề từ Word / Text (Bóc tách tự động)</button>
      </div>
      <div id="panelFile">
        <div class="drop" id="drop"><div class="d-ic">📥</div><b>Kéo thả file vào đây hoặc bấm để chọn</b><p class="muted" style="margin:6px 0 0">Hỗ trợ <b>.xlsx / .xls / .csv</b> (15 cột) và <b>.json</b></p></div>
      </div>
      <div id="panelWord" class="hide">
        <div class="card" style="box-shadow:none;background:var(--bg-elevated);border-left:4px solid var(--accent);padding:10px 12px;margin-bottom:12px">
          <b style="color:var(--text)">⚡ Bộ bóc tách thông minh cho đề thi môn Toán:</b>
          <div style="font-size:13px;margin-top:4px" class="muted">
            Thầy chỉ cần mở file Word, copy toàn bộ nội dung đề thi (gồm <i>Câu 1, Câu 2... Phương án A. B. C. D. hoặc a) b) c) d)... Lời giải...</i>) dán vào đây và bấm <b>Bóc tách</b>. Hệ thống tự động phân loại MC, TF, SA và đổ thành các câu hỏi hoàn chỉnh.
          </div>
        </div>
        <textarea class="textarea" id="wordInput" rows="8" placeholder="Dán nội dung đề thi từ Word vào đây...&#10;&#10;Ví dụ:&#10;Câu 1: [Nhận biết] Tìm nguyên hàm của f(x) = x^3.&#10;A. \\int f(x)dx = 3x^2 + C&#10;B. \\int f(x)dx = 1/4 x^4 + C&#10;C. \\int f(x)dx = x^4 + C&#10;D. \\int f(x)dx = 1/3 x^4 + C&#10;Lời giải: Chọn B.&#10;&#10;Câu 2: [Thông hiểu] Cho hàm số f(x)...&#10;a) Khẳng định 1...&#10;b) Khẳng định 2...&#10;Đáp án: ĐSĐS"></textarea>
        <div class="row" style="margin-top:10px">
          <button type="button" class="btn btn-primary" id="btnDoParseWord">⚡ Bóc tách đề thi tự động</button>
        </div>
      </div>
      <div id="impRes" style="margin-top:14px"></div>
    </div>`);

    const m = U.modal({ title: "📥 Nhập câu hỏi vào ngân hàng", size: "lg", body, actions: [{ label: "Hủy", cls: "btn-ghost" }, { label: "Nhập vào ngân hàng", cls: "btn-primary", onClick: async (btn, w) => {
      if (!parsed || !parsed.length) { U.toast("Chưa có câu hỏi nào để nhập", "warn"); return false; }
      const meta = {}; $$("[data-dm]", w).forEach((i) => { if (i.value.trim()) meta[i.dataset.dm] = i.value.trim(); });
      const list = parsed.map((q) => { const c = U.plain(q); Object.keys(meta).forEach((k) => { if (!c[k]) c[k] = meta[k]; }); return c; });
      busy(btn, true, "Đang nhập…");
      try { const r = await DB.importQuestions(list, { overwrite: $("#impOw", w).checked }); U.toast(`Xong! Thêm mới ${r.added}, cập nhật ${r.updated}, bỏ qua ${r.skipped}`, "ok", 5000); return true; }
      catch (e) { busy(btn, false); fail(e); return false; }
    } }] });

    const tabBtnFile = $("#tabBtnFile", body);
    const tabBtnWord = $("#tabBtnWord", body);
    const panelFile = $("#panelFile", body);
    const panelWord = $("#panelWord", body);

    tabBtnFile.onclick = () => {
      tabBtnFile.className = "btn btn-sm btn-primary";
      tabBtnWord.className = "btn btn-sm btn-ghost";
      panelFile.classList.remove("hide");
      panelWord.classList.add("hide");
    };

    tabBtnWord.onclick = () => {
      tabBtnWord.className = "btn btn-sm btn-primary";
      tabBtnFile.className = "btn btn-sm btn-ghost";
      panelWord.classList.remove("hide");
      panelFile.classList.add("hide");
    };

    const renderParsed = (sourceLabel) => {
      const s = IO.stats(parsed);
      let prvMode = "5";
      let curStepIdx = 0;

      const prvCardHtml = (q, i) => `
        <div class="child-box" style="margin-bottom:12px;background:var(--surface)">
          <div class="row" style="margin-bottom:6px;gap:6px;flex-wrap:wrap">
            <span class="q-badge qb-${Quiz.baseType(q.Type)}">Câu ${i + 1}. ${esc(q.Type)}</span>
            <b>${esc(q.Id || "")}</b>
            ${q.Level ? `<span class="chip">${esc(q.Level)}</span>` : ""}
            ${q.Chapter ? `<span class="chip">${esc(q.Chapter)}</span>` : ""}
            <span class="grow"></span>
            <button type="button" class="btn btn-xs btn-ghost" data-sim="${i}">🎮 Chơi thử</button>
          </div>
          ${Quiz.preview(q)}
        </div>
      `;

      const updateImpPrev = () => {
        const box = $("#impPrevContainer", body);
        const nav = $("#impPrevNav", body);
        if (!box) return;

        if (prvMode === "step") {
          if (nav) nav.classList.remove("hide");
          box.innerHTML = prvCardHtml(parsed[curStepIdx], curStepIdx);
          const sel = $("#selPrvQ", body);
          if (sel) sel.value = curStepIdx;
        } else {
          if (nav) nav.classList.add("hide");
          const target = prvMode === "all" ? parsed : parsed.slice(0, 5);
          box.innerHTML = target.map((q, i) => prvCardHtml(q, i)).join("");
        }
        Quiz.typeset(box);

        $$("[data-sim]", box).forEach((b) => {
          b.onclick = () => {
            const idx = +b.dataset.sim;
            const q = parsed[idx];
            const testBox = h(`<div style="padding:10px"></div>`);
            U.modal({
              title: `🎮 Chơi thử: ${q.Id || "Câu " + (idx + 1)} (${q.Type})`,
              size: "md",
              body: testBox
            });
            Quiz.mount(testBox, Quiz.prepare([q])[0], {
              num: idx + 1, total: parsed.length, feedback: true, explain: true,
              onAnswer: (res) => {
                U.toast(res.ok ? "🎉 Trả lời đúng! Tuyệt vời!" : "❌ Chưa chính xác!", res.ok ? "ok" : "warn");
              }
            });
            Quiz.typeset(testBox);
          };
        });
      };

      $("#impRes", body).innerHTML = `<div class="card" style="box-shadow:none">
        <div class="row" style="flex-wrap:wrap;gap:6px">
          <b>📄 ${esc(sourceLabel)}</b>
          <span class="chip violet">${s.total} câu</span>
          ${["MC", "TF", "SA", "LA", "Group"].filter((k) => s[k]).map((k) => `<span class="chip">${k}: ${s[k]}</span>`).join("")}
          ${s.children ? `<span class="chip">${s.children} câu con</span>` : ""}
          <span class="grow"></span>
          <button type="button" class="btn btn-sm btn-fun" id="btnFullPrevImport">👁️ Xem trước toàn bộ (${s.total} câu)</button>
        </div>
        ${s.errors.length ? `<div class="notice" style="margin-top:10px">⚠️ ${s.errors.length} câu có thể chưa hợp lệ (vẫn được lưu, nhưng không xuất hiện trong game): ${s.errors.slice(0, 6).map((e) => `<code>${esc(e.id || "#" + (e.i + 1))}</code> ${esc(e.msg)}`).join(" · ")}${s.errors.length > 6 ? "…" : ""}</div>` : `<p style="color:var(--green);font-weight:700;margin:6px 0">✓ Tất cả câu hỏi hợp lệ</p>`}
        <label class="switch" style="margin:8px 0"><input type="checkbox" id="impOw" checked> Ghi đè câu hỏi trùng Id</label>
        <div class="lbl" style="margin-top:8px">Gán thông tin cho các câu đang để trống (tuỳ chọn)</div>
        <div class="grid2" style="margin-top:6px">${[["Subject", "Môn"], ["Grade", "Lớp"], ["Chapter", "Chương"], ["Topic", "Chủ đề"], ["Level", "Mức độ"]].map(([k, l]) => `<input class="input input-sm" data-dm="${k}" placeholder="${l}">`).join("")}</div>
        
        <div style="margin-top:14px;border-top:1px solid var(--line);padding-top:10px">
          <div class="row" style="margin-bottom:8px;gap:6px;flex-wrap:wrap">
            <b style="color:var(--text)">👁️ Xem trước câu hỏi:</b>
            <span class="grow"></span>
            <div class="btn-group" style="display:inline-flex;gap:4px">
              <button type="button" class="btn btn-xs btn-primary" id="btnPrv5">5 câu đầu</button>
              <button type="button" class="btn btn-xs btn-ghost" id="btnPrvAll">Tất cả (${s.total})</button>
              <button type="button" class="btn btn-xs btn-ghost" id="btnPrvStep">🔍 Từng câu</button>
            </div>
          </div>
          <div id="impPrevNav" class="hide" style="margin-bottom:8px;display:flex;gap:6px;align-items:center">
            <button type="button" class="btn btn-xs btn-ghost" id="btnPrvPrev">⬅ Câu trước</button>
            <select class="select input-sm" id="selPrvQ" style="flex:1">
              ${parsed.map((q, i) => `<option value="${i}">Câu ${i + 1}/${parsed.length}: ${esc(q.Id || "")} - ${esc(String(q.Question || "").slice(0, 35))}</option>`).join("")}
            </select>
            <button type="button" class="btn btn-xs btn-ghost" id="btnPrvNext">Câu sau ➡</button>
          </div>
          <div id="impPrevContainer" style="max-height:46vh;overflow-y:auto;padding-right:4px"></div>
        </div>
      </div>`;

      $("#btnFullPrevImport", body).onclick = () => A.previewModal(parsed, `👁️ Xem trước toàn bộ ${parsed.length} câu (${sourceLabel})`);

      const b5 = $("#btnPrv5", body), bAll = $("#btnPrvAll", body), bStep = $("#btnPrvStep", body);
      b5.onclick = () => { prvMode = "5"; b5.className = "btn btn-xs btn-primary"; bAll.className = bStep.className = "btn btn-xs btn-ghost"; updateImpPrev(); };
      bAll.onclick = () => { prvMode = "all"; bAll.className = "btn btn-xs btn-primary"; b5.className = bStep.className = "btn btn-xs btn-ghost"; updateImpPrev(); };
      bStep.onclick = () => { prvMode = "step"; bStep.className = "btn btn-xs btn-primary"; b5.className = bAll.className = "btn btn-xs btn-ghost"; updateImpPrev(); };

      const selQ = $("#selPrvQ", body);
      if (selQ) selQ.onchange = () => { curStepIdx = +selQ.value; updateImpPrev(); };
      const btnPrev = $("#btnPrvPrev", body);
      if (btnPrev) btnPrev.onclick = () => { if (curStepIdx > 0) { curStepIdx--; updateImpPrev(); } };
      const btnNext = $("#btnPrvNext", body);
      if (btnNext) btnNext.onclick = () => { if (curStepIdx < parsed.length - 1) { curStepIdx++; updateImpPrev(); } };

      updateImpPrev();
    };

    const drop = $("#drop", body);
    const handleFile = async (file) => {
      if (!file) return;
      $("#impRes", body).innerHTML = `<div class="loader" style="min-height:80px"><div class="dots3"><i></i><i></i><i></i></div></div>`;
      try {
        parsed = await IO.parseFile(file);
        renderParsed(file.name);
      } catch (e) { parsed = null; $("#impRes", body).innerHTML = `<div class="notice">⛔ Không đọc được file: ${esc(e.message)}</div>`; }
    };

    drop.onclick = async () => handleFile(await U.pickFile(".json,.js,.txt,.xlsx,.xls,.csv"));
    drop.ondragover = (e) => { e.preventDefault(); drop.classList.add("over"); };
    drop.ondragleave = () => drop.classList.remove("over");
    drop.ondrop = (e) => { e.preventDefault(); drop.classList.remove("over"); handleFile(e.dataTransfer.files[0]); };

    const btnDoParseWord = $("#btnDoParseWord", body);
    if (btnDoParseWord) {
      btnDoParseWord.onclick = () => {
        const text = $("#wordInput", body).value.trim();
        if (!text) { U.toast("Vui lòng dán nội dung đề thi từ Word vào khung trước!", "warn"); return; }
        $("#impRes", body).innerHTML = `<div class="loader" style="min-height:80px"><div class="dots3"><i></i><i></i><i></i></div></div>`;
        try {
          parsed = IO.parseRawText(text);
          if (!parsed.length) {
            $("#impRes", body).innerHTML = `<div class="notice">⚠️ Không tìm thấy câu hỏi nào. Đảm bảo mỗi câu bắt đầu bằng <b>Câu 1</b>, <b>Câu 2</b>...</div>`;
            return;
          }
          renderParsed("Đề thi Word vừa bóc tách");
          U.toast(`⚡ Đã bóc tách thành công ${parsed.length} câu hỏi!`, "ok");
        } catch (err) {
          parsed = null;
          $("#impRes", body).innerHTML = `<div class="notice">⛔ Lỗi bóc tách: ${esc(err.message)}</div>`;
        }
      };
    }

    return m.result.then((v) => !!v);
  };

  /* ----- Đồng bộ từ Google Sheet & Thư mục Google Drive của Thầy ----- */
  A.syncGoogleSheet = () => {
    const s = DB.settings;
    const sheetId = s.googleSheetId || (window.APP_CONFIG && APP_CONFIG.googleSheetId) || "1e1NUbsrBZ9Lf4pGHE4BriYwB1i0_kzBXwkhU4831z4k";
    const folderId = s.googleDriveFolderId || (window.APP_CONFIG && APP_CONFIG.googleDriveFolderId) || "1MnvzQAzv62Xiw9ziU2jH5T37ObFmADg4";
    const cleanSheetId = (id) => String(id || "").replace(/^.*\/d\//, "").replace(/\/edit.*$/, "").replace(/[\?#].*$/, "").trim();
    const curSheetId = cleanSheetId(sheetId);
    const curFolderId = String(folderId || "").replace(/^.*\/folders\//, "").replace(/[\?#].*$/, "").trim();

    const editUrl = `https://docs.google.com/spreadsheets/d/${curSheetId}/edit?gid=0#gid=0`;
    const exportUrl = `https://docs.google.com/spreadsheets/d/${curSheetId}/export?format=csv&gid=0`;
    const folderUrl = `https://drive.google.com/drive/folders/${curFolderId}?lfhs=2`;

    const body = h(`<div>
      <div class="row" style="margin-bottom:12px;gap:8px;flex-wrap:wrap">
        <a class="btn btn-sm btn-ghost" href="${editUrl}" target="_blank" rel="noopener">📊 Mở Google Sheet gốc trên tab mới ↗</a>
        <a class="btn btn-sm btn-ghost" href="${folderUrl}" target="_blank" rel="noopener">📁 Mở Thư mục Google Drive ↗</a>
      </div>
      <div class="card" style="background:var(--bg-elevated);border-left:4px solid #10b981;padding:12px 14px;margin-bottom:14px">
        <b style="color:var(--text)">Dữ liệu gốc đang kết nối:</b>
        <div style="font-size:13px;margin-top:4px" class="muted">
          • Google Sheet: <code>${esc(curSheetId)}</code><br>
          • Thư mục Drive: <code>${esc(curFolderId)}</code>
        </div>
      </div>
      <div class="field"><label>Đổi ID hoặc Liên kết Google Sheet (nếu dùng trang khác):</label>
        <div class="row"><input class="input" id="gsInp" value="${esc(curSheetId)}" placeholder="Dán link hoặc ID Google Sheet">
          <button class="btn btn-ghost" id="gsSaveId" title="Lưu ID này vào cài đặt">💾 Lưu ID</button></div>
      </div>
      <div style="background:var(--bg-elevated);border-radius:10px;padding:14px;margin-bottom:14px">
        <b style="display:block;margin-bottom:8px">⚡ Quy trình đồng bộ nhanh 2 bước:</b>
        <div style="font-size:13.5px;line-height:1.6">
          <b>Bước 1:</b> Bấm <a class="btn btn-sm btn-fun" id="gsDownLink" href="${exportUrl}" target="_blank" style="margin:0 4px;display:inline-flex;align-items:center">⬇️ Tải file từ Google Sheet</a> (File CSV tự động tải về máy trong 1 giây).<br>
          <b>Bước 2:</b> Kéo thả file vừa tải vào ô bên dưới:
        </div>
      </div>
      <div class="drop" id="gsDrop" style="padding:22px"><div class="d-ic">📥</div><b>Kéo thả file vừa tải vào đây hoặc bấm để chọn</b><p class="muted" style="margin:4px 0 0">Hệ thống sẽ đối soát chuẩn 15 cột của Thầy và nạp ngay</p></div>
      <div id="gsRes" style="margin-top:12px"></div>
    </div>`);

    let parsed = null;
    const m = U.modal({
      title: "🔄 Đồng bộ từ Google Sheet & Drive của Thầy", size: "lg", body,
      actions: [
        { label: "Đóng", cls: "btn-ghost" },
        {
          label: "☁️ Nạp vào Ngân hàng câu hỏi", cls: "btn-primary",
          onClick: async (btn, w) => {
            if (!parsed || !parsed.length) { U.toast("Chưa chọn file để nạp", "warn"); return false; }
            busy(btn, true, "Đang nạp…");
            try {
              const r = await DB.importQuestions(parsed, { overwrite: true });
              U.toast(`Đã đồng bộ xong! Thêm mới ${r.added}, cập nhật ${r.updated}`, "ok", 5000);
              return true;
            } catch (e) { busy(btn, false); fail(e); return false; }
          }
        }
      ]
    });

    const drop = $("#gsDrop", body);
    const handleFile = async (file) => {
      if (!file) return;
      $("#gsRes", body).innerHTML = `<div class="loader" style="min-height:80px"><div class="dots3"><i></i><i></i><i></i></div>Đang phân tích cấu trúc 15 cột…</div>`;
      try {
        parsed = await IO.parseFile(file);
        const s = IO.stats(parsed);
        $("#gsRes", body).innerHTML = `<div class="card" style="box-shadow:none;background:var(--bg)">
          <div class="row" style="flex-wrap:wrap;gap:6px">
            <b>📄 ${esc(file.name)}</b>
            <span class="chip violet">${s.total} câu</span>
            ${["MC", "TF", "SA", "LA"].filter((k) => s[k]).map((k) => `<span class="chip">${k}: ${s[k]}</span>`).join("")}
            <span class="grow"></span>
            <button type="button" class="btn btn-sm btn-fun" id="btnGsFullPrev">👁️ Xem trước toàn bộ (${s.total} câu)</button>
          </div>
          ${s.errors.length ? `<div class="notice" style="margin-top:8px">⚠️ ${s.errors.length} câu cần lưu ý: ${s.errors.slice(0, 5).map((e) => `<code>${esc(e.id || "")}</code> ${esc(e.msg)}`).join(" · ")}</div>` : `<p style="color:var(--green);font-weight:700;margin:8px 0">✓ Tất cả ${s.total} câu hỏi hợp lệ theo chuẩn 15 cột của Thầy!</p>`}
          <div class="lbl" style="margin-top:8px">Xem trước 3 câu đầu tiên:</div>${parsed.slice(0, 3).map((q) => `<div class="child-box">${Quiz.preview(q)}</div>`).join("")}</div>`;
        Quiz.typeset($("#gsRes", body));
        $("#btnGsFullPrev", body).onclick = () => A.previewModal(parsed, `👁️ Xem trước toàn bộ ${parsed.length} câu (Google Sheet)`);
      } catch (e) { parsed = null; $("#gsRes", body).innerHTML = `<div class="notice">⛔ Lỗi: ${esc(e.message)}</div>`; }
    };

    drop.onclick = async () => handleFile(await U.pickFile(".csv,.xlsx,.xls,.json"));
    drop.ondragover = (e) => { e.preventDefault(); drop.classList.add("over"); };
    drop.ondragleave = () => drop.classList.remove("over");
    drop.ondrop = (e) => { e.preventDefault(); drop.classList.remove("over"); handleFile(e.dataTransfer.files[0]); };

    $("#gsSaveId", body).onclick = async () => {
      const val = cleanSheetId($("#gsInp", body).value);
      if (!val) return U.toast("Chưa nhập ID", "warn");
      try {
        await DB.saveSettings({ googleSheetId: val });
        U.toast("Đã lưu ID Google Sheet mới", "ok");
        $("#gsDownLink", body).href = `https://docs.google.com/spreadsheets/d/${val}/export?format=csv&gid=0`;
      } catch (e) { fail(e); }
    };

    return m.result.then((v) => !!v);
  };

  /* ======================= BỘ ĐỀ & PHÂN BỔ ======================= */
  A.sets = (view) => {
    const draw = () => {
      view.innerHTML = `<div class="page">${header("🧩", "Bộ đề & phân bổ cho game", "Gom câu hỏi thành bộ đề, rồi chọn bộ đề mặc định cho từng trò chơi.", "linear-gradient(135deg,#f472b6,#fb923c)")}
        <div class="card" data-reveal style="margin-bottom:16px"><div class="card-h"><h3>🎮 Phân bổ câu hỏi cho từng game</h3><span class="muted">Bật/tắt game và chọn bộ đề mặc định (người chơi vẫn có thể đổi khi cấu hình).</span></div>
          <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Trò chơi</th><th>Hiển thị</th><th>Bộ đề mặc định</th><th>Số câu dùng được</th></tr></thead><tbody>
          ${Games.list.map((g) => { const c = DB.gameCfg(g.id); const n = Quiz.flatten(c.setId ? DB.resolveSet(DB.findSet(c.setId)) : DB.bank(), g.types).length;
            return `<tr data-g="${g.id}"><td><b>${g.icon} ${esc(g.name)}</b><br><small class="muted">${g.types.join(" · ")}</small></td>
            <td><label class="switch"><input type="checkbox" data-en ${c.enabled !== false ? "checked" : ""}></label></td>
            <td><select class="select input-sm" data-set><option value="">📚 Toàn bộ ngân hàng</option>${DB.sets.map((s) => `<option value="${s.id}" ${c.setId === s.id ? "selected" : ""}>🧩 ${esc(s.name)}</option>`).join("")}</select></td>
            <td><span class="chip ${n ? "green" : "red"}">${n} câu</span></td></tr>`; }).join("")}
          </tbody></table></div></div>
        <div class="card-h"><h3>📦 Danh sách bộ đề (${DB.sets.length})</h3><span class="grow"></span><button class="btn btn-primary" id="sAdd">➕ Tạo bộ đề</button></div>
        <div class="sets-grid">${DB.sets.length ? DB.sets.map((s) => { const n = DB.resolveSet(s).length; const games = Games.list.filter((g) => DB.gameCfg(g.id).setId === s.id);
          return `<div class="set-card" data-reveal data-s="${s.id}" style="--sc:${s.color || "#0d6efd"}"><div class="sc-top"><b>${esc(s.name)}</b><span class="chip violet">${n} câu</span></div>
            <p class="muted">${esc(s.desc || (s.filter ? "Bộ đề động theo bộ lọc" : "Chọn câu thủ công"))}</p>
            <div class="gc-tags">${games.map((g) => `<span class="chip">${g.icon} ${esc(g.name)}</span>`).join("") || '<span class="muted" style="font-size:12px">Chưa gán cho game nào</span>'}</div>
            <div class="row" style="margin-top:10px"><button class="btn btn-sm btn-fun" data-a="prev" title="Xem trước câu hỏi trong bộ đề">👁️ Xem trước</button><button class="btn btn-sm btn-primary" data-a="edit">✏️ Sửa</button><button class="btn btn-sm btn-ghost" data-a="exp">⬇️ Xuất</button>${FB.isSuperAdmin ? '<button class="btn btn-sm btn-ghost" data-a="del">🗑</button>' : ''}</div></div>`; }).join("") : `<div class="empty"><span class="em-ic">🧩</span>Chưa có bộ đề nào</div>`}</div></div>`;
      U.reveal(view);
      $$("tr[data-g]", view).forEach((tr) => {
        const gid = tr.dataset.g;
        $("[data-en]", tr).onchange = (e) => DB.saveGameConfig(gid, { enabled: e.target.checked }).then(() => { U.toast("Đã lưu", "ok"); App.buildDrawer(); }).catch(fail);
        $("[data-set]", tr).onchange = (e) => DB.saveGameConfig(gid, { setId: e.target.value }).then(() => { U.toast("Đã phân bổ bộ đề", "ok"); draw(); }).catch(fail);
      });
      $("#sAdd", view).onclick = () => A.editSet({}).then((ok) => ok && draw());
      $$(".set-card", view).forEach((c) => U.on(c, "click", "[data-a]", async (e, b) => {
        const s = DB.findSet(c.dataset.s);
        if (b.dataset.a === "prev") A.previewModal(DB.resolveSet(s), "👁️ Bộ đề: " + (s.name || ""));
        if (b.dataset.a === "edit") A.editSet(s).then((ok) => ok && draw());
        if (b.dataset.a === "exp") U.download((s.name || "bo-de") + ".json", IO.toJSON(DB.resolveSet(s)), "application/json");
        if (b.dataset.a === "del") {
          if (!FB.isSuperAdmin) return U.toast("Chỉ Quản trị viên tối cao mới có quyền xóa bộ đề", "warn");
          if (await U.confirm(`Xoá bộ đề <b>${esc(s.name)}</b>? (câu hỏi vẫn còn trong ngân hàng)`, { danger: true, ok: "Xoá" })) { try { await DB.deleteSet(s.id); draw(); } catch (er) { fail(er); } }
        }
      }));
    };
    draw();
  };

  A.editSet = (set) => {
    set = U.plain(set || {}); const isNew = !set.id;
    const sel = new Set(set.questionIds || []);
    const f = DB.facets(DB.questions);
    const COLORS = ["#0d6efd", "#dc2626", "#16a34a", "#f59e0b", "#0284c7", "#ec4899", "#14b8a6"];
    const body = h(`<div>
      <div class="grid2"><div class="field"><label>Tên bộ đề</label><input class="input" id="sName" value="${esc(set.name || "")}" placeholder="VD: Ôn tập Toán 10 - Chương 1"></div>
        <div class="field"><label>Mô tả</label><input class="input" id="sDesc" value="${esc(set.desc || "")}"></div></div>
      <div class="row" style="margin:10px 0"><span class="lbl">Màu</span>${COLORS.map((c) => `<button type="button" class="cdot ${(set.color || COLORS[0]) === c ? "on" : ""}" data-c="${c}" style="background:${c}"></button>`).join("")}</div>
      <div class="field"><label>Gán cho trò chơi</label><div class="row">${Games.list.map((g) => `<label class="tchip"><input type="checkbox" value="${g.id}" ${set.id && DB.gameCfg(g.id).setId === set.id ? "checked" : ""}><span>${g.icon} ${esc(g.name)}</span></label>`).join("")}</div></div>
      <div class="seg" id="sMode" style="margin:14px 0 10px"><button data-m="pick" class="${set.filter ? "" : "on"}">✋ Chọn câu thủ công</button><button data-m="filter" class="${set.filter ? "on" : ""}">🔎 Bộ đề động theo bộ lọc</button></div>
      <div class="adm-filters" id="sFlt">${[["Subject", "Môn"], ["Grade", "Lớp"], ["Chapter", "Chương"], ["Topic", "Chủ đề"], ["Level", "Mức độ"], ["Type", "Loại"]].map(([k, l]) => `<select class="select input-sm" data-f="${k}"><option value="">${l}: tất cả</option>${(k === "Type" ? ["MC", "TF", "SA", "Group"] : f[k]).map((x) => `<option ${(set.filter || {})[k] === x ? "selected" : ""}>${esc(x)}</option>`).join("")}</select>`).join("")}<input class="input input-sm" id="sSearch" placeholder="🔎 Tìm…"></div>
      <div class="row" id="sPickBar" style="margin-bottom:8px"><b id="sCount"></b><span class="grow"></span><button type="button" class="btn btn-sm btn-ghost" id="sAll">Chọn tất cả đang lọc</button><button type="button" class="btn btn-sm btn-ghost" id="sNone">Bỏ chọn đang lọc</button></div>
      <div class="check-list" id="sList"></div></div>`);
    let mode = set.filter ? "filter" : "pick";
    const flt = () => { const o = {}; $$("#sFlt select", body).forEach((s) => { if (s.value) o[s.dataset.f] = s.value; }); return o; };
    const L = () => DB.filterQ(DB.questions, Object.assign(flt(), { search: $("#sSearch", body).value }));
    function drawList() {
      const list = L();
      $("#sCount", body).textContent = mode === "pick" ? `Đã chọn ${sel.size} câu · đang hiện ${list.length}` : `Bộ đề sẽ gồm ${DB.filterQ(DB.questions, flt()).length} câu khớp bộ lọc (tự cập nhật khi thêm câu mới)`;
      $("#sAll", body).classList.toggle("hide", mode !== "pick"); $("#sNone", body).classList.toggle("hide", mode !== "pick");
      $("#sList", body).innerHTML = list.slice(0, 400).map((q) => `<label><input type="checkbox" value="${esc(q.Id)}" ${mode === "filter" ? "checked disabled" : sel.has(q.Id) ? "checked" : ""}><span><code>${esc(q.Id)}</code> <span class="q-badge qb-${Quiz.baseType(q.Type)}">${esc(q.Type)}</span> ${esc(String(q.Question || "").slice(0, 140))}</span></label>`).join("") + (list.length > 400 ? `<p class="muted" style="padding:8px">… và ${list.length - 400} câu nữa (lọc hẹp hơn để xem)</p>` : "");
      $$("#sList input", body).forEach((c) => (c.onchange = () => { c.checked ? sel.add(c.value) : sel.delete(c.value); drawList(); }));
    }
    $$("#sFlt select", body).forEach((s) => (s.onchange = drawList)); $("#sSearch", body).oninput = U.debounce(drawList, 250);
    $("#sAll", body).onclick = () => { L().forEach((q) => sel.add(q.Id)); drawList(); };
    $("#sNone", body).onclick = () => { L().forEach((q) => sel.delete(q.Id)); drawList(); };
    $$("#sMode button", body).forEach((b) => (b.onclick = () => { mode = b.dataset.m; $$("#sMode button", body).forEach((x) => x.classList.toggle("on", x === b)); drawList(); }));
    $$(".cdot", body).forEach((b) => (b.onclick = () => { $$(".cdot", body).forEach((x) => x.classList.toggle("on", x === b)); }));
    drawList();
    const m = U.modal({ title: isNew ? "➕ Tạo bộ đề" : "✏️ Sửa bộ đề", size: "xl", body, actions: [{ label: "Hủy", cls: "btn-ghost" }, { label: "💾 Lưu bộ đề", cls: "btn-primary", onClick: async (btn) => {
      const name = $("#sName", body).value.trim(); if (!name) { U.toast("Hãy đặt tên bộ đề", "warn"); return false; }
      const data = { id: set.id, name, desc: $("#sDesc", body).value.trim(), color: ($(".cdot.on", body) || {}).dataset ? $(".cdot.on", body).dataset.c : "#0d6efd", createdAt: set.createdAt,
        questionIds: mode === "pick" ? Array.from(sel) : [], filter: mode === "filter" ? flt() : null };
      busy(btn, true);
      try {
        const id = await DB.saveSet(data);
        const games = $$(".tchip input", body).filter((c) => c.checked).map((c) => c.value);
        for (const g of Games.list) { const cur = DB.gameCfg(g.id).setId; if (games.includes(g.id) && cur !== id) await DB.saveGameConfig(g.id, { setId: id }); if (!games.includes(g.id) && cur === id) await DB.saveGameConfig(g.id, { setId: "" }); }
        U.toast("Đã lưu bộ đề", "ok"); return true;
      } catch (e) { busy(btn, false); fail(e); return false; }
    } }] });
    return m.result.then((v) => !!v);
  };


  /* ======================= CẤU HÌNH SOẠN SẴN ======================= */
  A.presets = (view) => {
    const draw = () => {
      const all = DB.allPresets(), games = Games.list.filter((g) => all.some((p) => p.gameId === g.id));
      view.innerHTML = `<div class="page">${header("💾", "Cấu hình soạn sẵn", "Soạn trước cấu hình cho từng trò chơi (đội, câu hỏi, ảnh, thời gian…), đặt tên và lưu lại — vào game chỉ cần chọn là chơi.", "linear-gradient(135deg,#10b981,#0d6efd)")}
        <div class="adm-tools">
          <button class="btn btn-primary" id="pNew">➕ Tạo cấu hình mới</button>
          <button class="btn btn-ghost" id="pExp">⬇️ Tải tất cả về máy (JSON)</button>
          <button class="btn btn-ghost" id="pImp">📥 Nhập từ file</button>
          ${DB.localPresets().length ? `<button class="btn btn-fun" id="pPush">☁️ Đưa ${DB.localPresets().length} cấu hình trên máy lên hệ thống</button>` : ""}
          <span class="grow"></span><span class="chip">☁️ ${(DB.presets || []).length} trên hệ thống · 💻 ${DB.localPresets().length} trên máy này</span>
        </div>
        ${all.length ? games.map((g) => `<div class="pre-group" data-reveal><div class="pg-h" style="--c1:${g.colors[0]};--c2:${g.colors[1]}"><span>${g.icon}</span><h3>${esc(g.name)}</h3><span class="chip">${all.filter((p) => p.gameId === g.id).length}</span></div>
          <div class="pre-grid">${all.filter((p) => p.gameId === g.id).map((p) => `<div class="pre-card" data-id="${esc(p.id)}">
            <div class="pc-top"><b>${esc(p.name)}</b><span class="chip ${p.where === "cloud" ? "violet" : "amber"}">${p.where === "cloud" ? "☁️ Hệ thống" : "💻 Máy này"}</span></div>
            ${p.note ? `<p class="pc-note">${esc(p.note)}</p>` : ""}
            <ul class="cfg-sum">${GameKit.describeCfg(g, p.cfg || {}).slice(0, 7).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
            <small class="muted">Cập nhật ${U.fmtDate(p.updatedAt)}${p.by ? " · " + esc(p.by) : ""}</small>
            <div class="row" style="margin-top:8px"><a class="btn btn-sm btn-fun" href="#/game/${g.id}?preset=${encodeURIComponent(p.id)}">▶ Mở & chơi</a>
              <button class="btn btn-sm btn-ghost" data-a="ren">✏️ Đổi tên</button><button class="btn btn-sm btn-ghost" data-a="dup">⧉ Nhân bản</button>
              <button class="btn btn-sm btn-ghost" data-a="dl">⬇️</button><button class="btn btn-sm btn-ghost" data-a="del">🗑</button></div></div>`).join("")}</div></div>`).join("")
        : `<div class="empty"><span class="em-ic">💾</span><h3>Chưa có cấu hình nào</h3><p>Bấm <b>Tạo cấu hình mới</b>, chọn trò chơi, chỉnh các mục rồi bấm <b>💾 Lưu cấu hình</b>.<br>Hoặc ở bất kỳ màn cấu hình trò chơi nào, bấm nút <b>💾 Lưu cấu hình</b>.</p></div>`}
      </div>`;
      U.reveal(view);
      $("#pNew", view).onclick = async () => {
        const m = U.modal({ title: "➕ Tạo cấu hình cho trò chơi nào?", size: "md", body: `<div class="pick-game">${Games.list.map((g) => `<button data-g="${g.id}" style="--c1:${g.colors[0]};--c2:${g.colors[1]}"><span>${g.icon}</span>${esc(g.name)}</button>`).join("")}</div>` });
        $$("[data-g]", m.body).forEach((b) => (b.onclick = () => { m.close(); App.go("/game/" + b.dataset.g + "?new=1"); }));
      };
      $("#pExp", view).onclick = () => U.download("cau-hinh-soan-san.json", JSON.stringify({ type: "gfe-presets", exportedAt: new Date().toISOString(), presets: all.map((p) => { const c = U.plain(p); delete c.where; return c; }) }, null, 1), "application/json");
      $("#pImp", view).onclick = async () => {
        const f = await U.pickFile(".json"); if (!f) return;
        try {
          const d = JSON.parse(await U.readFile(f)); const list = Array.isArray(d) ? d : d.presets || [];
          if (!list.length) throw new Error("File không có cấu hình");
          const where = FB.isAdmin && await U.confirm(`Nhập ${list.length} cấu hình. Lưu <b>lên hệ thống ☁️</b>? (Chọn “Hủy” để chỉ lưu trên máy này)`, { ok: "☁️ Lên hệ thống" }) ? "cloud" : "local";
          for (const p of list) if (p.gameId && p.cfg) await DB.savePreset(Object.assign({}, p, { id: "" }), where);
          U.toast(`Đã nhập ${list.length} cấu hình`, "ok"); draw();
        } catch (e) { fail(e); }
      };
      const push = $("#pPush", view);
      if (push) push.onclick = async () => {
        if (!FB.isAdmin) return U.toast("Cần đăng nhập quản trị", "warn");
        busy(push, true);
        try { for (const p of DB.localPresets()) { await DB.savePreset(Object.assign({}, p, { id: "" }), "cloud"); await DB.deletePreset(Object.assign({ where: "local" }, p)); } U.toast("Đã đưa lên hệ thống", "ok"); draw(); }
        catch (e) { busy(push, false); fail(e); }
      };
      $$(".pre-card", view).forEach((c) => U.on(c, "click", "[data-a]", async (e, b) => {
        const p = DB.findPreset(c.dataset.id); if (!p) return;
        const a = b.dataset.a;
        try {
          if (a === "ren") { const n = await U.prompt("Tên mới", p.name, { title: "✏️ Đổi tên cấu hình" }); if (n && n.trim()) { await DB.savePreset(Object.assign({}, p, { name: n.trim() }), p.where); draw(); } }
          if (a === "dup") { await DB.savePreset(Object.assign({}, p, { id: "", name: p.name + " (bản sao)", createdAt: 0 }), p.where); draw(); }
          if (a === "dl") { const c2 = U.plain(p); delete c2.where; U.download(p.name.replace(/[\\/:*?"<>|]+/g, "_") + ".json", JSON.stringify({ type: "gfe-presets", presets: [c2] }, null, 1), "application/json"); }
          if (a === "del" && await U.confirm(`Xoá cấu hình <b>${esc(p.name)}</b>?`, { danger: true, ok: "Xoá" })) { await DB.deletePreset(p); draw(); }
        } catch (er) { fail(er); }
      }));
    };
    draw();
  };

  /* ======================= LỚP & NHÓM HỌC ======================= */
  A.classes = (view) => {
    let qSearch = "", qGrade = "";
    const isSuper = FB.isSuperAdmin;

    /* Modal quản lý danh sách học sinh / thành viên của một lớp */
    const modalClassMembers = (cls) => {
      cls = Object.assign({ members: [] }, cls);
      let members = (cls.members || []).slice();
      let mFilter = "";

      const m = U.modal({
        title: `👥 Danh sách học sinh — ${esc(cls.name)}`,
        size: "md",
        body: `<div id="mRoot" class="stack" style="gap:14px"></div>`,
        actions: [
          { label: "Đóng", cls: "btn-ghost", value: false },
          {
            label: "💾 Lưu danh sách học sinh",
            cls: "btn-primary",
            onClick: async () => {
              try {
                await DB.saveClassMembers(cls.id, members);
                cls.members = members.slice();
                U.toast(`Đã lưu ${members.length} học sinh cho lớp ${cls.name}`, "ok");
                draw();
                return true;
              } catch (e) {
                fail(e);
                return false;
              }
            }
          }
        ]
      });

      const root = U.$("#mRoot", m.el);

      const render = () => {
        const filtered = members.filter((n) => !mFilter || U.norm(n).includes(U.norm(mFilter)));
        root.innerHTML = `
          <div class="row" style="justify-content:space-between;align-items:center;background:var(--surface-2);padding:10px 14px;border-radius:12px;border:1px solid var(--line);flex-wrap:wrap;gap:8px">
            <div>
              <b style="font-size:15px;color:var(--primary)">${esc(cls.name)}</b>
              <span class="chip blue" style="margin-left:6px">${esc(cls.code || "---")}</span>
              <small class="muted" style="display:block;margin-top:2px">Thiết lập trước để nạp nhanh vào các trò chơi: Đua vịt, Vòng quay, Kéo co...</small>
            </div>
            <span class="chip green" style="font-size:13px;font-weight:700">👥 ${members.length} học sinh</span>
          </div>

          <!-- Thanh thêm nhanh 1 học sinh -->
          <div class="row" style="gap:8px">
            <input class="input" id="mAddInput" placeholder="Nhập họ và tên học sinh rồi nhấn Enter..." style="flex:1">
            <button class="btn btn-primary" id="mAddBtn">➕ Thêm</button>
            <button class="btn btn-fun" id="mPasteToggle">📋 Dán từ Excel</button>
          </div>

          <!-- Khung dán từ Excel (ẩn/hiện) -->
          <div id="mPasteBox" class="card" style="display:none;background:var(--surface-2);border:1.5px dashed var(--line-2);padding:12px">
            <div class="row" style="justify-content:space-between;align-items:center;margin-bottom:6px">
              <b style="font-size:13px">📋 Dán danh sách học sinh từ Excel / Word (mỗi học sinh 1 dòng)</b>
              <button class="btn btn-xs btn-ghost" id="mPasteClose">✕ Đóng</button>
            </div>
            <textarea class="textarea" id="mPasteArea" rows="5" placeholder="Nguyễn Văn An&#10;Trần Thị Bình&#10;Lê Hoàng Long&#10;... (mỗi học sinh một dòng)"></textarea>
            <div class="row" style="justify-content:space-between;align-items:center;margin-top:8px;flex-wrap:wrap;gap:6px">
              <label class="switch" style="font-size:12px"><input type="checkbox" id="mPasteReplace"> Thay thế danh sách hiện tại</label>
              <button class="btn btn-sm btn-primary" id="mPasteApply">✅ Nạp vào danh sách</button>
            </div>
          </div>

          <!-- Bộ lọc tìm kiếm & Thao tác nhanh -->
          <div class="row" style="justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">
            <input class="input input-sm" id="mSearchInput" placeholder="🔎 Tìm tên trong danh sách..." value="${esc(mFilter)}" style="max-width:230px;height:32px;font-size:12.5px">
            <div class="row" style="gap:6px">
              <button class="btn btn-xs btn-ghost" id="mShuffleBtn" title="Xáo trộn thứ tự">🎲 Trộn ngẫu nhiên</button>
              <button class="btn btn-xs btn-ghost" id="mCopyBtn" title="Sao chép toàn bộ danh sách">📋 Sao chép</button>
              <button class="btn btn-xs btn-ghost" id="mClearAllBtn" style="color:#ef4444" title="Xóa toàn bộ">🗑️ Xóa hết</button>
            </div>
          </div>

          <!-- Danh sách học sinh -->
          <div id="mListWrap" style="max-height:360px;overflow-y:auto;border:1px solid var(--line);border-radius:12px;background:var(--surface)">
            ${!filtered.length ? `
              <div class="empty" style="padding:28px 12px">
                <span class="em-ic">👤</span>
                <b>${mFilter ? 'Không tìm thấy học sinh phù hợp' : 'Chưa có học sinh nào trong danh sách'}</b>
                <p class="muted" style="margin-top:2px;font-size:12.5px">${mFilter ? 'Thử tìm từ khóa khác' : 'Nhập họ tên ở ô trên hoặc bấm "📋 Dán từ Excel" để nạp cả lớp.'}</p>
              </div>
            ` : `
              <table class="tbl" style="margin:0">
                <thead>
                  <tr>
                    <th style="width:48px;text-align:center">STT</th>
                    <th>Họ và tên học sinh</th>
                    <th style="width:110px;text-align:right">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  ${filtered.map((name, i) => {
                    const realIndex = members.indexOf(name);
                    return `
                      <tr>
                        <td style="text-align:center"><b class="chip" style="font-size:11.5px;padding:2px 6px">${realIndex + 1}</b></td>
                        <td><b style="font-size:14px">${esc(name)}</b></td>
                        <td style="text-align:right;white-space:nowrap">
                          <button class="btn btn-xs btn-ghost btn-icon" data-medit="${realIndex}" title="Sửa tên">✏️</button>
                          <button class="btn btn-xs btn-ghost btn-icon" data-mdel="${realIndex}" style="color:#ef4444" title="Xóa khỏi lớp">🗑️</button>
                        </td>
                      </tr>
                    `;
                  }).join("")}
                </tbody>
              </table>
            `}
          </div>
        `;

        // Thêm học sinh
        const addFn = () => {
          const inp = U.$("#mAddInput", root);
          const val = inp.value.trim();
          if (!val) return;
          members.push(val);
          inp.value = "";
          render();
          setTimeout(() => { const next = U.$("#mAddInput", root); if (next) next.focus(); }, 50);
        };
        const addBtn = U.$("#mAddBtn", root);
        if (addBtn) addBtn.onclick = addFn;
        const addInp = U.$("#mAddInput", root);
        if (addInp) addInp.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); addFn(); } };

        // Dán từ Excel
        const pasteTgl = U.$("#mPasteToggle", root);
        const pasteBox = U.$("#mPasteBox", root);
        if (pasteTgl && pasteBox) {
          pasteTgl.onclick = () => { pasteBox.style.display = pasteBox.style.display === "none" ? "block" : "none"; };
        }
        const pasteClose = U.$("#mPasteClose", root);
        if (pasteClose && pasteBox) pasteClose.onclick = () => { pasteBox.style.display = "none"; };
        const pasteApply = U.$("#mPasteApply", root);
        if (pasteApply) {
          pasteApply.onclick = () => {
            const raw = U.$("#mPasteArea", root).value;
            const newNames = DB.cleanMembers(raw);
            if (!newNames.length) return U.toast("Chưa nhập danh sách học sinh", "warn");
            const isReplace = U.$("#mPasteReplace", root).checked;
            if (isReplace) members = newNames;
            else members = members.concat(newNames);
            U.toast(`Đã thêm ${newNames.length} học sinh vào danh sách`, "ok");
            render();
          };
        }

        // Tìm kiếm
        const sInp = U.$("#mSearchInput", root);
        if (sInp) {
          sInp.oninput = (e) => {
            mFilter = e.target.value;
            render();
            const reFocus = U.$("#mSearchInput", root);
            if (reFocus) { reFocus.focus(); reFocus.setSelectionRange(reFocus.value.length, reFocus.value.length); }
          };
        }

        // Trộn ngẫu nhiên
        const shufBtn = U.$("#mShuffleBtn", root);
        if (shufBtn) {
          shufBtn.onclick = () => {
            if (members.length < 2) return;
            members = U.shuffle(members);
            U.Sound.pop();
            U.toast("Đã xáo trộn ngẫu nhiên thứ tự học sinh!", "info");
            render();
          };
        }

        // Sao chép
        const cpBtn = U.$("#mCopyBtn", root);
        if (cpBtn) {
          cpBtn.onclick = () => {
            if (!members.length) return;
            navigator.clipboard && navigator.clipboard.writeText(members.join("\n"));
            U.toast(`Đã sao chép ${members.length} học sinh`, "ok");
          };
        }

        // Xóa hết
        const clrBtn = U.$("#mClearAllBtn", root);
        if (clrBtn) {
          clrBtn.onclick = async () => {
            if (!members.length) return;
            if (await U.confirm(`Xóa toàn bộ ${members.length} học sinh khỏi lớp này?`, { danger: true, ok: "Xóa hết" })) {
              members = [];
              render();
            }
          };
        }

        // Sửa từng học sinh
        U.$$("[data-medit]", root).forEach((b) => {
          b.onclick = async () => {
            const idx = +b.dataset.medit;
            const oldName = members[idx];
            const newName = await U.prompt("Chỉnh sửa họ tên học sinh:", oldName);
            if (newName && newName.trim() && newName.trim() !== oldName) {
              members[idx] = newName.trim();
              render();
            }
          };
        });

        // Xóa từng học sinh
        U.$$("[data-mdel]", root).forEach((b) => {
          b.onclick = () => {
            const idx = +b.dataset.mdel;
            const delName = members[idx];
            members.splice(idx, 1);
            U.toast(`Đã xóa "${delName}"`, "info");
            render();
          };
        });
      };

      render();
    };

    window.openClassMembersModal = modalClassMembers;

    const modalClass = (cls) => {
      const isNew = !cls;
      cls = cls || { name: "", code: "", grade: "12", desc: "", members: [] };
      const m = U.modal({
        title: isNew ? "🏫 Tạo lớp / nhóm học mới" : "✏️ Chỉnh sửa lớp học",
        size: "md",
        body: `<div class="stack" style="gap:12px">
          <div class="field"><label>Tên lớp / Nhóm <span style="color:#ef4444">*</span></label>
            <input class="input" id="clsName" placeholder="Ví dụ: Lớp 12A1, Đội tuyển HSG..." value="${esc(cls.name)}"></div>
          <div class="grid2">
            <div class="field"><label>Mã lớp rút gọn</label>
              <input class="input" id="clsCode" placeholder="Ví dụ: 12A1" value="${esc(cls.code || "")}"></div>
            <div class="field"><label>Khối lớp</label>
              <select class="select" id="clsGrade">
                <option value="12" ${cls.grade === "12" ? "selected" : ""}>Khối 12</option>
                <option value="11" ${cls.grade === "11" ? "selected" : ""}>Khối 11</option>
                <option value="10" ${cls.grade === "10" ? "selected" : ""}>Khối 10</option>
                <option value="Khác" ${cls.grade === "Khác" ? "selected" : ""}>Khối khác / Ôn thi</option>
              </select></div>
          </div>
          <div class="field"><label>Mô tả / Ghi chú</label>
            <textarea class="textarea" id="clsDesc" rows="2" placeholder="Ghi chú về lớp, năm học, mục tiêu...">${esc(cls.desc || "")}</textarea></div>
          <div class="field">
            <div class="row" style="justify-content:space-between;align-items:center;margin-bottom:4px">
              <label style="margin:0">Danh sách học sinh (mỗi dòng một tên)</label>
              <small class="muted">Hiện có: <b>${(cls.members || []).length} học sinh</b></small>
            </div>
            <textarea class="textarea" id="clsMembers" rows="5" placeholder="Nguyễn Văn An&#10;Trần Thị Bình&#10;Lê Hoàng Long&#10;... (có thể dán thẳng cột tên từ file Excel)">${esc((cls.members || []).join("\n"))}</textarea>
            <small class="muted">Thầy có thể dán danh sách học sinh ngay bây giờ hoặc chỉnh sửa chi tiết bất kỳ lúc nào.</small>
          </div>
        </div>`,
        actions: [
          { label: "Hủy", cls: "btn-ghost", value: false },
          {
            label: isNew ? "➕ Tạo lớp" : "💾 Lưu thay đổi",
            cls: "btn-primary",
            onClick: async () => {
              const name = U.$("#clsName", m.el).value.trim();
              if (!name) { U.toast("Vui lòng nhập tên lớp", "warn"); return false; }
              let code = U.$("#clsCode", m.el).value.trim();
              if (!code) code = name.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 8);
              const grade = U.$("#clsGrade", m.el).value;
              const desc = U.$("#clsDesc", m.el).value.trim();
              const members = DB.cleanMembers(U.$("#clsMembers", m.el).value);
              try {
                await DB.saveClass(Object.assign({}, cls, { name, code, grade, desc, members }));
                U.toast(isNew ? `Đã tạo lớp ${name} (${members.length} học sinh)` : `Đã lưu lớp ${name} (${members.length} học sinh)`, "ok");
                draw();
                return true;
              } catch (e) { fail(e); return false; }
            }
          }
        ]
      });
    };

    const draw = () => {
      const classes = DB.listClasses ? DB.listClasses() : [];
      const totalStudents = classes.reduce((sum, c) => sum + ((c.members && c.members.length) || 0), 0);
      const filtered = classes.filter((c) => {
        if (qGrade && c.grade !== qGrade) return false;
        if (qSearch) {
          const s = U.norm(qSearch);
          if (!U.norm(c.name).includes(s) && !U.norm(c.code || "").includes(s) && !U.norm(c.desc || "").includes(s)) return false;
        }
        return true;
      });

      view.innerHTML = `<div class="page">${header("🏫", "Quản lý Lớp & Nhóm học", "Quản lý danh sách lớp học, học sinh từng lớp, phân nhóm thi đấu & nạp nhanh vào trò chơi.", "linear-gradient(135deg,#38bdf8,#6366f1)")}
        <div class="stat-tiles stg">
          <div class="stat-tile" style="--i:0"><i>🏫</i><b>${classes.length}</b><span>Lớp / nhóm học</span></div>
          <div class="stat-tile" style="--i:1"><i>👥</i><b>${totalStudents}</b><span>Tổng số học sinh</span></div>
          <div class="stat-tile" style="--i:2"><i>🎓</i><b>${classes.filter(c => c.grade === "12").length}</b><span>Lớp Khối 12</span></div>
          <div class="stat-tile" style="--i:3"><i>📖</i><b>${classes.filter(c => c.grade === "11" || c.grade === "10").length}</b><span>Lớp Khối 10 & 11</span></div>
        </div>
        <div class="adm-tools">
          <input class="input" id="cSearch" placeholder="🔎 Tìm tên lớp, mã lớp…" value="${esc(qSearch)}" style="max-width:260px">
          <select class="select" id="cGrade" style="max-width:170px">
            <option value="">Tất cả khối lớp</option>
            <option value="12" ${qGrade === "12" ? "selected" : ""}>Khối 12</option>
            <option value="11" ${qGrade === "11" ? "selected" : ""}>Khối 11</option>
            <option value="10" ${qGrade === "10" ? "selected" : ""}>Khối 10</option>
            <option value="Khác" ${qGrade === "Khác" ? "selected" : ""}>Khối khác</option>
          </select>
          <span class="grow"></span>
          <button class="btn btn-fun" id="cAdd">➕ Thêm lớp / nhóm mới</button>
        </div>
        <div id="cBox">
          ${!filtered.length ? `
            <div class="empty" style="padding:40px 16px">
              <span class="em-ic">🏫</span>
              <b>Chưa có lớp học nào</b>
              <p class="muted" style="margin-top:4px">Bấm nút "Thêm lớp / nhóm mới" ở trên để tạo lớp đầu tiên.</p>
            </div>
          ` : `
            <div class="tbl-wrap"><table class="tbl">
              <thead>
                <tr>
                  <th style="width:40px">#</th>
                  <th>Mã lớp</th>
                  <th>Tên lớp / Nhóm</th>
                  <th>Khối</th>
                  <th>Danh sách học sinh</th>
                  <th>Mô tả / Ghi chú</th>
                  <th>Ngày cập nhật</th>
                  <th style="text-align:right">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.map((c, i) => {
                  const mCount = (c.members || []).length;
                  return `<tr>
                  <td><b>${i + 1}</b></td>
                  <td><span class="chip blue" style="font-family:var(--font-fun);font-size:13px;font-weight:800">${esc(c.code || "---")}</span></td>
                  <td><b>${esc(c.name)}</b></td>
                  <td><span class="chip">${c.grade ? "Khối " + esc(c.grade) : "Chung"}</span></td>
                  <td>
                    <button class="btn btn-sm btn-ghost" data-act="members" data-id="${esc(c.id)}" title="Bấm để xem và sửa danh sách học sinh">
                      <span class="chip ${mCount ? 'green' : ''}" style="cursor:pointer;font-weight:700">👥 ${mCount} học sinh ↗</span>
                    </button>
                  </td>
                  <td><small class="muted">${esc(c.desc || "—")}</small></td>
                  <td>${U.fmtDate(c.updatedAt || c.createdAt)}</td>
                  <td style="text-align:right;white-space:nowrap">
                    <button class="btn btn-sm btn-fun" data-act="members" data-id="${esc(c.id)}" title="Quản lý danh sách học sinh">👥 DS Học sinh</button>
                    <button class="btn btn-sm btn-ghost" data-act="scores" data-id="${esc(c.id)}" title="Xem bảng điểm của lớp">📊 Điểm</button>
                    <button class="btn btn-sm btn-ghost" data-act="edit" data-id="${esc(c.id)}" title="Chỉnh sửa thông tin">✏️ Sửa</button>
                    ${isSuper ? `<button class="btn btn-sm btn-ghost" data-act="del" data-id="${esc(c.id)}" style="color:#ef4444" title="Xóa lớp">🗑️ Xóa</button>` : ""}
                  </td>
                </tr>`;
                }).join("")}
              </tbody>
            </table></div>
          `}
        </div>
      </div>`;

      $("#cSearch", view).oninput = U.debounce((e) => { qSearch = e.target.value; draw(); }, 200);
      $("#cGrade", view).onchange = (e) => { qGrade = e.target.value; draw(); };
      $("#cAdd", view).onclick = () => modalClass(null);

      $$("[data-act=members]", view).forEach((b) => (b.onclick = () => {
        const cls = classes.find((x) => x.id === b.dataset.id);
        if (cls) modalClassMembers(cls);
      }));

      $$("[data-act=scores]", view).forEach((b) => (b.onclick = () => {
        const cls = classes.find((x) => x.id === b.dataset.id);
        if (cls) {
          App.go("/admin/scores");
          setTimeout(() => {
            const sel = document.getElementById("rClass");
            if (sel) { sel.value = cls.code || cls.name; sel.dispatchEvent(new Event("change")); }
          }, 150);
        }
      }));

      $$("[data-act=edit]", view).forEach((b) => (b.onclick = () => {
        const cls = classes.find((x) => x.id === b.dataset.id);
        if (cls) modalClass(cls);
      }));

      $$("[data-act=del]", view).forEach((b) => (b.onclick = async () => {
        const cls = classes.find((x) => x.id === b.dataset.id);
        if (!cls) return;
        if (await U.confirm(`Xóa lớp <b>${esc(cls.name)}</b>?`, { danger: true, ok: "Xóa lớp" })) {
          try {
            await DB.deleteClass(cls.id);
            U.toast(`Đã xóa lớp ${cls.name}`, "ok");
            draw();
          } catch (e) { fail(e); }
        }
      }));
    };

    draw();
  };

  /* ======================= ĐIỂM SỐ ======================= */
  A.scores = (view) => {
    view.innerHTML = `<div class="page">${header("🏅", "Quản lý điểm số", "Lịch sử các trận đấu, xếp hạng người chơi, xuất Excel.", "linear-gradient(135deg,#fde047,#f59e0b)")}
      <div class="adm-tools"><select class="select" id="rGame" style="max-width:260px"><option value="">🎮 Tất cả trò chơi</option>${Games.list.map((g) => `<option value="${g.id}">${g.icon} ${esc(g.name)}</option>`).join("")}</select>
        <select class="select" id="rClass" style="max-width:180px"><option value="">🏫 Tất cả lớp</option>${(DB.listClasses ? DB.listClasses() : []).map((c) => `<option value="${esc(c.code || c.name)}">${esc(c.name)}</option>`).join("")}</select>
        <input class="input" id="rSearch" placeholder="🔎 Tên người chơi / đội…" style="max-width:240px"><span class="grow"></span>
        <button class="btn btn-ghost" id="rExp">⬇️ Xuất Excel</button>${FB.isSuperAdmin ? '<button class="btn btn-danger" id="rDel" disabled>🗑 Xoá mục đã chọn</button>' : ''}</div>
      <div class="seg adm-tabs" id="rTab"><button class="on" data-t="matches">🕑 Các trận đấu</button><button data-t="players">👤 Xếp hạng người chơi</button></div>
      <div id="rBox"><div class="loader" style="min-height:200px"><div class="dots3"><i></i><i></i><i></i></div></div></div></div>`;
    let rs = [], tab = "matches"; const sel = new Set();
    const filtered = () => {
      const g = $("#rGame", view).value;
      const cls = ($("#rClass", view) ? $("#rClass", view).value : "").trim();
      const s = U.norm($("#rSearch", view).value);
      return rs.filter((r) => {
        if (g && r.gameId !== g) return false;
        if (cls) {
          const clsNorm = U.norm(cls);
          const hasClass = (r.players || []).some((p) => {
            const pn = U.norm(p.name || "");
            return pn.includes(clsNorm) || (p.classCode && U.norm(p.classCode) === clsNorm);
          });
          if (!hasClass) return false;
        }
        if (s && !(r.players || []).some((p) => U.norm(p.name).includes(s))) return false;
        return true;
      });
    };
    function draw() {
      const L = filtered();
      if (tab === "players") {
        const agg = aggregateResults(L);
        $("#rBox", view).innerHTML = `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th>Người chơi / đội</th><th>Số trận</th><th>Thắng</th><th>Câu đúng</th><th>Tổng điểm</th></tr></thead><tbody>${agg.map((p, i) => `<tr><td><b>${i + 1}</b></td><td><b>${esc(p.name)}</b></td><td>${p.matches}</td><td>${p.wins}</td><td>${p.correct}</td><td><b>${U.fmtNum(Math.round(p.score))}</b></td></tr>`).join("") || `<tr><td colspan="6"><div class="empty">Chưa có dữ liệu</div></td></tr>`}</tbody></table></div>`;
        return;
      }
      $("#rBox", view).innerHTML = `<div class="tbl-wrap"><table class="tbl"><thead><tr><th><input type="checkbox" id="rAll"></th><th>Thời gian</th><th>Trò chơi</th><th>Chế độ</th><th>Người tổ chức</th><th>Kết quả</th><th></th></tr></thead><tbody>
        ${L.map((r) => `<tr data-id="${r.id}"><td><input type="checkbox" class="rck" ${sel.has(r.id) ? "checked" : ""}></td><td>${U.fmtDate(r.at || r.createdAt)}</td><td>${(Games.get(r.gameId) || {}).icon || ""} ${esc(r.gameName || r.gameId)}</td>
          <td>${r.mode === "online" ? '<span class="chip green">Trực tuyến</span>' : '<span class="chip">Một màn hình</span>'}</td><td>${esc(r.host || "")}</td>
          <td>${(r.players || []).slice(0, 4).map((p) => `${p.rank === 1 ? "🥇" : p.rank === 2 ? "🥈" : p.rank === 3 ? "🥉" : p.rank + "."} ${esc(p.name)} <b>${U.fmtNum(p.score)}</b>`).join(" · ")}${(r.players || []).length > 4 ? " …" : ""}</td>
          <td><button class="btn btn-sm btn-ghost" data-a="view">Chi tiết</button></td></tr>`).join("") || `<tr><td colspan="7"><div class="empty"><span class="em-ic">🏁</span>Chưa có trận đấu nào</div></td></tr>`}</tbody></table></div>`;
      $$(".rck", view).forEach((c) => (c.onchange = () => { const id = c.closest("tr").dataset.id; c.checked ? sel.add(id) : sel.delete(id); $("#rDel", view).disabled = !sel.size; }));
      const all = $("#rAll", view); if (all) all.onchange = () => { L.forEach((r) => all.checked ? sel.add(r.id) : sel.delete(r.id)); draw(); $("#rDel", view).disabled = !sel.size; };
      $$("[data-a=view]", view).forEach((b) => (b.onclick = () => {
        const r = rs.find((x) => x.id === b.closest("tr").dataset.id);
        U.modal({ title: `${(Games.get(r.gameId) || {}).icon || ""} ${esc(r.gameName)} — ${U.fmtDate(r.at || r.createdAt)}`, size: "lg", body: `<p class="muted">Nguồn câu hỏi: ${esc(r.source || "")} · ${r.questions || "?"} câu · Đơn vị: ${esc(r.unit || "điểm")}</p><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Hạng</th><th>Tên</th><th>Điểm</th><th>Đúng</th><th>Sai</th></tr></thead><tbody>${(r.players || []).map((p) => `<tr><td>${p.rank}</td><td>${esc(p.name)}</td><td><b>${U.fmtNum(p.score)}</b></td><td>${p.correct}</td><td>${p.wrong}</td></tr>`).join("")}</tbody></table></div>` });
      }));
    }
    $$("#rTab button", view).forEach((b) => (b.onclick = () => { tab = b.dataset.t; $$("#rTab button", view).forEach((x) => x.classList.toggle("on", x === b)); draw(); }));
    $("#rGame", view).onchange = draw;
    if ($("#rClass", view)) $("#rClass", view).onchange = draw;
    $("#rSearch", view).oninput = U.debounce(draw, 250);
    if ($("#rDel", view)) {
      $("#rDel", view).onclick = async () => { if (!(await U.confirm(`Xoá ${sel.size} trận đấu đã chọn?`, { danger: true, ok: "Xoá" }))) return; try { await DB.deleteResults(Array.from(sel)); rs = rs.filter((r) => !sel.has(r.id)); sel.clear(); $("#rDel", view).disabled = true; draw(); U.toast("Đã xoá", "ok"); } catch (e) { fail(e); } };
    }
    $("#rExp", view).onclick = async () => {
      try {
        const XLSX = await U.needXLSX(); const rows = [];
        filtered().forEach((r) => (r.players || []).forEach((p) => rows.push({ "Thời gian": U.fmtDate(r.at || r.createdAt), "Trò chơi": r.gameName, "Chế độ": r.mode === "online" ? "Trực tuyến" : "Một màn hình", "Hạng": p.rank, "Tên": p.name, "Điểm": p.score, "Đúng": p.correct, "Sai": p.wrong, "Người tổ chức": r.host || "" })));
        const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), "DiemSo");
        const agg = aggregateResults(filtered()).map((p, i) => ({ "Hạng": i + 1, "Tên": p.name, "Số trận": p.matches, "Thắng": p.wins, "Câu đúng": p.correct, "Tổng điểm": Math.round(p.score) }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(agg), "XepHang");
        XLSX.writeFile(wb, "diem-so.xlsx");
      } catch (e) { fail(e); }
    };
    DB.listResults(1000).then((r) => { rs = r; draw(); });
  };

  /* ======================= PHÒNG TRỰC TUYẾN ======================= */
  A.rooms = (view) => {
    view.innerHTML = `<div class="page">${header("📡", "Phòng trực tuyến", "Các phòng đang mở trên Realtime Database.", "linear-gradient(135deg,#0284c7,#0d6efd)")}
      <div class="adm-tools"><button class="btn btn-ghost" id="rmRef">🔄 Làm mới</button><button class="btn btn-danger" id="rmOld">🧹 Dọn phòng đã kết thúc / quá 6 giờ</button></div><div id="rmBox"></div></div>`;
    const load = async () => {
      $("#rmBox", view).innerHTML = `<div class="loader" style="min-height:160px"><div class="dots3"><i></i><i></i><i></i></div></div>`;
      try {
        const all = await Room.listAll(); const arr = Object.entries(all).map(([pin, r]) => ({ pin, meta: r.meta || {}, n: Object.keys(r.players || {}).length })).sort((a, b) => (b.meta.createdAt || 0) - (a.meta.createdAt || 0));
        view._rooms = arr;
        $("#rmBox", view).innerHTML = `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>PIN</th><th>Trò chơi</th><th>Chủ phòng</th><th>Chế độ</th><th>Trạng thái</th><th>Người chơi</th><th>Tạo lúc</th><th></th></tr></thead><tbody>${arr.map((r) => {
          const allow = r.meta.settings && r.meta.settings.allowGuests !== false;
          const target = r.meta.settings && r.meta.settings.targetClass;
          const isLocked = Boolean(r.meta.locked);
          const badge = !allow ? `<span class="chip violet">🔒 Nội bộ${target ? `: ${esc(target)}` : ""}</span>` : `<span class="chip">🌐 Mở</span>`;
          const lockChip = isLocked ? ` <span class="chip red" style="font-size:10px">Đã khóa</span>` : "";
          return `<tr><td><b style="font-family:var(--font-fun);font-size:18px">${r.pin}</b></td><td>${(Games.get(r.meta.gameId) || {}).icon || ""} ${esc(r.meta.title || "")}</td><td>${esc(r.meta.hostName || "")}</td>
          <td>${badge}${lockChip}</td>
          <td><span class="chip ${r.meta.status === "playing" ? "green" : r.meta.status === "ended" ? "" : "amber"}">${{ lobby: "Phòng chờ", playing: "Đang chơi", ended: "Kết thúc" }[r.meta.status] || r.meta.status}</span></td><td>${r.n}</td><td>${U.fmtDate(r.meta.createdAt)}</td>
          <td><button class="btn btn-sm btn-ghost" data-pin="${r.pin}">🗑 Xoá</button></td></tr>`;
        }).join("") || `<tr><td colspan="8"><div class="empty"><span class="em-ic">📭</span>Không có phòng nào</div></td></tr>`}</tbody></table></div>`;
        $$("[data-pin]", view).forEach((b) => (b.onclick = async () => { await Room.remove(b.dataset.pin).catch(fail); load(); }));
      } catch (e) { $("#rmBox", view).innerHTML = `<div class="notice">⛔ ${esc(FB.errMsg(e))}</div>`; }
    };
    $("#rmRef", view).onclick = load;
    $("#rmOld", view).onclick = async () => { const old = (view._rooms || []).filter((r) => r.meta.status === "ended" || Date.now() - (r.meta.createdAt || 0) > 6 * 3600e3); for (const r of old) await Room.remove(r.pin).catch(() => { }); U.toast(`Đã dọn ${old.length} phòng`, "ok"); load(); };
    if (!FB.rtdb) $("#rmBox", view).innerHTML = `<div class="notice">Realtime Database chưa sẵn sàng.</div>`; else load();
  };

  /* ======================= NGƯỜI DÙNG ======================= */
  A.users = (view) => {
    view.innerHTML = `<div class="page">${header("👥", "Quản lý Người dùng & Phân quyền", "Tài khoản học sinh, giáo viên, người biên soạn & quản trị viên hệ thống.", "linear-gradient(135deg,#34d399,#3b82f6)")}
      <div class="stat-tiles stg" id="uStats">
        <div class="stat-tile" style="--i:0"><i>👥</i><b id="stTotal">…</b><span>Tổng tài khoản</span></div>
        <div class="stat-tile" style="--i:1"><i>🛡️</i><b id="stAdmin">…</b><span>Quản trị tối cao</span></div>
        <div class="stat-tile" style="--i:2"><i>✏️</i><b id="stCreator">…</b><span>Người biên soạn</span></div>
        <div class="stat-tile" style="--i:3"><i>⚡</i><b id="stActive">…</b><span>Hoạt động 7 ngày</span></div>
      </div>
      <div class="adm-tools">
        <input class="input" id="uSearch" placeholder="🔎 Tìm tên, email, UID…" style="max-width:260px">
        <select class="select" id="uRoleFlt" style="max-width:180px">
          <option value="">Tất cả vai trò</option>
          <option value="super">👑 Quản trị tối cao</option>
          <option value="creator">✏️ Người biên soạn (Chỉ tạo)</option>
          <option value="user">Người dùng thường</option>
        </select>
        <select class="select" id="uProvFlt" style="max-width:180px">
          <option value="">Tất cả phương thức</option>
          <option value="google.com">Google</option>
          <option value="password">Email / Password</option>
          <option value="local">Cục bộ (Demo/Offline)</option>
        </select>
        <span class="grow"></span>
        ${FB.isSuperAdmin ? '<button class="btn btn-fun" id="uManageCreators">🛡️ DS Người biên soạn</button>' : ''}
        <button class="btn btn-ghost" id="uRef">🔄 Làm mới</button>
        <button class="btn btn-ghost" id="uExpX">📊 Xuất Excel</button>
      </div>
      <div id="uTblBox">
        <div class="loader" style="min-height:160px"><div class="dots3"><i></i><i></i><i></i></div></div>
      </div>
    </div>`;

    let allUsers = [];
    let cachedResults = null;

    const isSuper = (u) => {
      const admins = (window.APP_CONFIG && APP_CONFIG.adminEmails ? APP_CONFIG.adminEmails : ["tailieutoantbs@gmail.com"]).map((x) => String(x).toLowerCase());
      return admins.includes((u.email || "").toLowerCase());
    };

    const isCreator = (u) => {
      if (isSuper(u)) return true;
      const list = DB.creatorEmails ? DB.creatorEmails() : [];
      return list.includes((u.email || "").toLowerCase());
    };

    const modalManageCreators = () => {
      const list = DB.creatorEmails ? DB.creatorEmails() : [];
      const m = U.modal({
        title: "🛡️ Danh sách Người biên soạn (Chỉ tạo — Không xóa/sửa)",
        size: "md",
        body: `<div class="stack" style="gap:14px">
          <p class="muted" style="margin:0;font-size:13px">Người biên soạn được phép soạn câu hỏi mới, nạp đề, tạo bộ đề & mở phòng thi cho học sinh. <b>Tuyệt đối không thể xóa câu hỏi hoặc sửa dữ liệu gốc của Thầy.</b></p>
          <div class="field" style="margin:0">
            <label style="font-size:12.5px;font-weight:700">Thêm email người biên soạn mới:</label>
            <div class="row">
              <input class="input" id="newCrEmail" placeholder="trogiang@gmail.com, dongnghiep@gmail.com..." type="email">
              <button class="btn btn-primary" id="addCrBtn">➕ Cấp quyền</button>
            </div>
          </div>
          <div class="card" style="padding:10px 14px;background:var(--surface-2)">
            <b style="font-size:13px;display:block;margin-bottom:8px">Email đang có quyền Biên soạn (${list.length}):</b>
            ${!list.length ? `<div class="muted" style="font-size:13px">Chưa có email nào trong danh sách.</div>` : `
              <div class="stack" style="gap:6px" id="crList">
                ${list.map((em) => `
                  <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:var(--surface);border-radius:8px;border:1px solid var(--line)">
                    <code>${esc(em)}</code>
                    <button class="btn btn-sm btn-ghost" data-del-cr="${esc(em)}" style="color:#ef4444">❌ Thu hồi</button>
                  </div>
                `).join("")}
              </div>
            `}
          </div>
        </div>`,
        actions: [{ label: "Đóng", cls: "btn-ghost", value: true }]
      });

      const addBtn = U.$("#addCrBtn", m.el);
      if (addBtn) addBtn.onclick = async () => {
        const inp = U.$("#newCrEmail", m.el);
        const em = inp.value.trim().toLowerCase();
        if (!em || !em.includes("@")) { U.toast("Vui lòng nhập địa chỉ email hợp lệ", "warn"); return; }
        try {
          await DB.addCreatorEmail(em);
          U.toast(`Đã cấp quyền Biên soạn cho ${em}`, "ok");
          m.close();
          modalManageCreators();
          load();
        } catch (e) { fail(e); }
      };
      $$("[data-del-cr]", m.el).forEach((b) => (b.onclick = async () => {
        const em = b.dataset.delCr;
        if (await U.confirm(`Thu hồi quyền Biên soạn của <b>${esc(em)}</b>?`, { danger: true, ok: "Thu hồi" })) {
          try {
            await DB.removeCreatorEmail(em);
            U.toast(`Đã thu hồi quyền của ${em}`, "ok");
            m.close();
            modalManageCreators();
            load();
          } catch (e) { fail(e); }
        }
      }));
    };

    const getResults = async () => {
      if (!cachedResults) {
        try { cachedResults = await DB.listResults(500); }
        catch (e) { cachedResults = []; }
      }
      return cachedResults;
    };

    const getFiltered = () => {
      const q = U.norm($("#uSearch", view).value || "");
      const role = $("#uRoleFlt", view).value;
      const prov = $("#uProvFlt", view).value;
      return allUsers.filter((u) => {
        if (role === "super" && !isSuper(u)) return false;
        if (role === "creator" && (!isCreator(u) || isSuper(u))) return false;
        if (role === "user" && (isSuper(u) || isCreator(u))) return false;
        if (prov) {
          if (prov === "google.com" && u.provider !== "google.com") return false;
          if (prov === "password" && u.provider !== "password" && u.provider !== "email") return false;
          if (prov === "local" && u.provider !== "local") return false;
        }
        if (q) {
          const name = U.norm(u.displayName || "");
          const email = U.norm(u.email || "");
          const uid = U.norm(u.id || u.uid || "");
          if (!name.includes(q) && !email.includes(q) && !uid.includes(q)) return false;
        }
        return true;
      });
    };

    const showUserScores = async (u) => {
      const rs = await getResults();
      const uNormName = U.norm(u.displayName || "");
      const uNormEmail = U.norm(u.email || "");

      const matches = [];
      rs.forEach((r) => {
        const p = (r.players || []).find((x) => {
          const pn = U.norm(x.name || "");
          return pn && (pn === uNormName || pn === uNormEmail || (uNormName && pn.includes(uNormName)) || (uNormEmail && pn.includes(uNormEmail)));
        });
        if (p) {
          matches.push({
            at: r.at || r.createdAt,
            gameName: r.gameName || r.gameId,
            gameIcon: (Games.get(r.gameId) || {}).icon || "🎮",
            mode: r.mode === "online" ? "Trực tuyến" : "Một màn hình",
            rank: p.rank,
            score: +p.score || 0,
            correct: +p.correct || 0,
            wrong: +p.wrong || 0,
            totalPlayers: (r.players || []).length
          });
        }
      });

      const totalMatches = matches.length;
      const wins = matches.filter((m) => m.rank === 1).length;
      const totalCorrect = matches.reduce((s, m) => s + m.correct, 0);
      const totalScore = matches.reduce((s, m) => s + m.score, 0);

      U.modal({
        title: `🏆 Lịch sử thi đấu — ${esc(u.displayName || u.email || "Người chơi")}`,
        size: "lg",
        body: `<div class="stack" style="gap:14px">
          <div class="stat-tiles" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr));margin-bottom:0">
            <div class="stat-tile" style="padding:10px 14px"><i>🎮</i><b>${totalMatches}</b><span>Trận đã chơi</span></div>
            <div class="stat-tile" style="padding:10px 14px"><i>🥇</i><b>${wins}</b><span>Lần về Nhất</span></div>
            <div class="stat-tile" style="padding:10px 14px"><i>✅</i><b>${totalCorrect}</b><span>Câu đúng</span></div>
            <div class="stat-tile" style="padding:10px 14px"><i>⭐</i><b>${U.fmtNum(Math.round(totalScore))}</b><span>Tổng điểm</span></div>
          </div>
          ${!matches.length ? `
            <div class="empty" style="padding:32px 16px">
              <span class="em-ic">🎮</span>
              <b>Chưa có trận đấu nào được lưu lại</b>
              <p class="muted" style="margin-top:4px;font-size:13px">Người chơi chưa tham gia trận đấu nào hoặc chưa dùng tên/email này trong phòng chơi.</p>
            </div>
          ` : `
            <div class="tbl-wrap" style="max-height:360px">
              <table class="tbl">
                <thead>
                  <tr>
                    <th>Thời gian</th>
                    <th>Trò chơi</th>
                    <th>Chế độ</th>
                    <th>Thứ hạng</th>
                    <th>Điểm số</th>
                    <th>Đúng / Sai</th>
                  </tr>
                </thead>
                <tbody>
                  ${matches.map((m) => {
                    const rankBadge = m.rank === 1 ? '<span class="chip amber">🥇 Quán quân</span>' : m.rank === 2 ? '<span class="chip">🥈 Á quân 1</span>' : m.rank === 3 ? '<span class="chip">🥉 Á quân 2</span>' : `<span class="chip">Hạng ${m.rank}/${m.totalPlayers}</span>`;
                    return `<tr>
                      <td>${U.fmtDate(m.at)}</td>
                      <td><b>${m.gameIcon} ${esc(m.gameName)}</b></td>
                      <td><span class="chip ${m.mode === "Trực tuyến" ? "green" : ""}">${m.mode}</span></td>
                      <td>${rankBadge}</td>
                      <td><b style="color:var(--primary);font-size:15px">${U.fmtNum(m.score)}</b></td>
                      <td><span style="color:#16a34a;font-weight:700">✓ ${m.correct}</span> / <span style="color:#dc2626">✗ ${m.wrong}</span></td>
                    </tr>`;
                  }).join("")}
                </tbody>
              </table>
            </div>
          `}
        </div>`,
        actions: [{ label: "Đóng", cls: "btn-primary", value: true }]
      });
    };

    const showUserDetail = async (u) => {
      const adm = isAdmin(u);
      const uid = u.id || u.uid || "N/A";
      const rs = await getResults();
      const uNormName = U.norm(u.displayName || "");
      const uNormEmail = U.norm(u.email || "");

      const userMatches = rs.filter((r) => (r.players || []).some((p) => {
        const pn = U.norm(p.name || "");
        return pn && (pn === uNormName || pn === uNormEmail || (uNormName && pn.includes(uNormName)) || (uNormEmail && pn.includes(uNormEmail)));
      }));

      let wins = 0, totalScore = 0;
      userMatches.forEach((r) => {
        const p = (r.players || []).find((x) => {
          const pn = U.norm(x.name || "");
          return pn && (pn === uNormName || pn === uNormEmail || (uNormName && pn.includes(uNormName)) || (uNormEmail && pn.includes(uNormEmail)));
        });
        if (p) {
          totalScore += +p.score || 0;
          if (p.rank === 1) wins++;
        }
      });

      const ava = u.photoURL
        ? `<img src="${esc(u.photoURL)}" referrerpolicy="no-referrer" style="width:68px;height:68px;border-radius:50%;object-fit:cover;border:2px solid var(--line-2)">`
        : `<div style="width:68px;height:68px;border-radius:50%;background:var(--primary-soft);color:var(--primary);display:grid;place-items:center;font-size:28px;font-weight:800;border:2px solid var(--line-2)">${esc((u.displayName || u.email || "?").charAt(0).toUpperCase())}</div>`;

      const m = U.modal({
        title: "👤 Chi tiết tài khoản",
        size: "md",
        body: `<div class="stack" style="gap:16px">
          <div style="display:flex;align-items:center;gap:14px;padding-bottom:12px;border-bottom:1px solid var(--line)">
            ${ava}
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                <h3 style="margin:0;font-size:18px">${esc(u.displayName || "Chưa đặt tên")}</h3>
                ${adm ? '<span class="chip violet">Quản trị</span>' : '<span class="chip">Người dùng</span>'}
              </div>
              <div class="muted" style="margin-top:4px;font-size:13.5px">${esc(u.email || "Không có email")}</div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px">
            <div class="card" style="padding:10px 12px">
              <div class="muted" style="font-size:11.5px">Phương thức đăng nhập</div>
              <b style="font-size:13.5px;margin-top:2px;display:block">${u.provider === "google.com" ? "🌐 Google Account" : u.provider === "local" ? "💻 Cục bộ (Offline)" : "✉️ Email / Mật khẩu"}</b>
            </div>
            <div class="card" style="padding:10px 12px">
              <div class="muted" style="font-size:11.5px">Đăng nhập gần nhất</div>
              <b style="font-size:13.5px;margin-top:2px;display:block">${U.fmtDate(u.lastLogin) || "Chưa ghi nhận"}</b>
            </div>
          </div>
          <div class="field" style="margin:0">
            <label style="font-size:12px;font-weight:700">Mã Firebase UID</label>
            <div class="row">
              <input class="input" readonly value="${esc(uid)}" style="font-family:monospace;font-size:12.5px" id="uUidVal">
              <button class="btn btn-ghost btn-sm" id="uCopyUid">📋 Chép</button>
            </div>
          </div>
          <div class="card" style="padding:12px 14px;background:var(--surface-2)">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <b style="font-size:13px">🎮 Hoạt động thi đấu:</b>
              <span class="chip green">${userMatches.length} trận</span>
            </div>
            <div class="row" style="font-size:13px;gap:14px">
              <span>🥇 Vô địch: <b>${wins}</b></span>
              <span>⭐ Tổng điểm: <b>${U.fmtNum(Math.round(totalScore))}</b></span>
            </div>
          </div>
        </div>`,
        actions: [
          { label: "Đóng", cls: "btn-ghost", value: false },
          { label: "🏆 Xem lịch sử điểm số", cls: "btn-primary", onClick: () => { m.close(); showUserScores(u); return false; } }
        ]
      });

      const copyBtn = U.$("#uCopyUid", m.el);
      if (copyBtn) {
        copyBtn.onclick = () => {
          const val = U.$("#uUidVal", m.el).value;
          navigator.clipboard.writeText(val).then(() => U.toast("Đã chép UID vào clipboard", "ok")).catch(() => U.toast("Không thể chép UID", "err"));
        };
      }
    };

    const renderTable = () => {
      const list = getFiltered();
      const countBadge = `<div class="muted" style="margin-bottom:8px;font-size:13px">Hiển thị <b>${list.length}</b> / ${allUsers.length} tài khoản</div>`;
      if (!list.length) {
        $("#uTblBox", view).innerHTML = countBadge + `<div class="empty"><span class="em-ic">🔍</span>Không tìm thấy người dùng phù hợp</div>`;
        return;
      }
      $("#uTblBox", view).innerHTML = countBadge + `<div class="tbl-wrap"><table class="tbl">
        <thead>
          <tr>
            <th style="width:40px">#</th>
            <th style="width:46px"></th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Phương thức</th>
            <th>Vai trò</th>
            <th>Đăng nhập gần nhất</th>
            <th style="text-align:right">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          ${list.map((u, i) => {
            const superUser = isSuper(u);
            const creatorUser = isCreator(u);
            const roleBadge = superUser
              ? '<span class="chip violet">👑 Quản trị tối cao</span>'
              : (creatorUser ? '<span class="chip blue">✏️ Người biên soạn</span>' : '<span class="chip">Người dùng</span>');
            const provChip = u.provider === "google.com" ? '<span class="chip blue" style="font-size:11.5px">Google</span>' : u.provider === "local" ? '<span class="chip amber" style="font-size:11.5px">Cục bộ</span>' : '<span class="chip" style="font-size:11.5px">Email</span>';
            const ava = u.photoURL
              ? `<img class="ava" src="${esc(u.photoURL)}" referrerpolicy="no-referrer" style="width:32px;height:32px;border-radius:50%;object-fit:cover">`
              : `<span class="ava" style="display:inline-grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--primary-soft);color:var(--primary);font-weight:700;font-size:13px">${esc((u.displayName || u.email || "?").charAt(0).toUpperCase())}</span>`;
            return `<tr>
              <td><b>${i + 1}</b></td>
              <td>${ava}</td>
              <td><b>${esc(u.displayName || "Chưa đặt tên")}</b>${u.id ? `<br><small class="muted" style="font-size:11px;font-family:monospace">${esc(u.id.slice(0, 12))}…</small>` : ""}</td>
              <td><code>${esc(u.email || "")}</code></td>
              <td>${provChip}</td>
              <td>${roleBadge}</td>
              <td>${U.fmtDate(u.lastLogin)}</td>
              <td style="text-align:right;white-space:nowrap">
                ${FB.isSuperAdmin && !superUser ? `
                  <button class="btn btn-sm btn-ghost" data-act="toggle-creator" data-idx="${i}" style="color:${creatorUser ? '#ef4444' : '#0d6efd'}" title="${creatorUser ? 'Thu hồi quyền Người biên soạn' : 'Cấp quyền Người biên soạn (chỉ tạo, không xóa/sửa)'}">
                    ${creatorUser ? '➖ Bỏ quyền' : '➕ Cấp quyền'}
                  </button>
                ` : ''}
                <button class="btn btn-sm btn-ghost" data-act="detail" data-idx="${i}" title="Xem chi tiết tài khoản">👁️ Chi tiết</button>
                <button class="btn btn-sm btn-ghost" data-act="scores" data-idx="${i}" title="Xem kết quả & lịch sử thi đấu">🏆 Điểm số</button>
              </td>
            </tr>`;
          }).join("")}
        </tbody>
      </table></div>`;

      $$("[data-act=detail]", view).forEach((b) => (b.onclick = () => showUserDetail(list[+b.dataset.idx])));
      $$("[data-act=scores]", view).forEach((b) => (b.onclick = () => showUserScores(list[+b.dataset.idx])));
      $$("[data-act=toggle-creator]", view).forEach((b) => (b.onclick = async () => {
        const u = list[+b.dataset.idx];
        if (!u || !u.email) return;
        const em = u.email.toLowerCase();
        const has = isCreator(u);
        if (has) {
          if (await U.confirm(`Thu hồi quyền Người biên soạn của <b>${esc(u.displayName || em)}</b>?`, { danger: true, ok: "Thu hồi quyền" })) {
            try {
              await DB.removeCreatorEmail(em);
              U.toast(`Đã thu hồi quyền Biên soạn của ${em}`, "ok");
              load();
            } catch (e) { fail(e); }
          }
        } else {
          if (await U.confirm(`Cấp quyền Người biên soạn cho <b>${esc(u.displayName || em)}</b>?<br><small class="muted">Tài khoản này chỉ có quyền tạo mới câu hỏi/bộ đề/phòng thi, tuyệt đối không được xóa hay sửa dữ liệu gốc của Thầy.</small>`, { ok: "Cấp quyền" })) {
            try {
              await DB.addCreatorEmail(em);
              U.toast(`Đã cấp quyền Người biên soạn cho ${em}`, "ok");
              load();
            } catch (e) { fail(e); }
          }
        }
      }));
    };

    const load = async () => {
      $("#uTblBox", view).innerHTML = `<div class="loader" style="min-height:160px"><div class="dots3"><i></i><i></i><i></i></div></div>`;
      try {
        allUsers = await DB.listUsers();
        const total = allUsers.length;
        const admins = allUsers.filter(isSuper).length;
        const creators = allUsers.filter((u) => isCreator(u) && !isSuper(u)).length;
        const actives = allUsers.filter((u) => {
          const ms = U.tsMs(u.lastLogin);
          return ms && (Date.now() - ms) <= 7 * 86400 * 1000;
        }).length;

        const stTot = $("#stTotal", view); if (stTot) stTot.textContent = total;
        const stAdm = $("#stAdmin", view); if (stAdm) stAdm.textContent = admins;
        const stCr = $("#stCreator", view); if (stCr) stCr.textContent = creators;
        const stAct = $("#stActive", view); if (stAct) stAct.textContent = actives;

        renderTable();
      } catch (e) {
        $("#uTblBox", view).innerHTML = `<div class="notice">⛔ ${esc(FB.errMsg(e))}</div>`;
      }
    };

    const mc = $("#uManageCreators", view);
    if (mc) mc.onclick = modalManageCreators;

    $("#uSearch", view).oninput = U.debounce(renderTable, 200);
    $("#uRoleFlt", view).onchange = renderTable;
    $("#uProvFlt", view).onchange = renderTable;
    $("#uRef", view).onclick = () => { cachedResults = null; load(); U.toast("Đã tải lại danh sách người dùng", "ok"); };

    $("#uExpX", view).onclick = async () => {
      try {
        const list = getFiltered();
        if (!list.length) { U.toast("Không có dữ liệu người dùng để xuất", "err"); return; }
        const XLSX = await U.needXLSX();
        const rows = list.map((u, i) => ({
          "STT": i + 1,
          "Họ và tên": u.displayName || "Chưa đặt tên",
          "Email": u.email || "",
          "Phương thức đăng nhập": u.provider === "google.com" ? "Google" : u.provider === "local" ? "Cục bộ (Demo)" : "Email/Mật khẩu",
          "Vai trò": isSuper(u) ? "Quản trị tối cao" : (isCreator(u) ? "Người biên soạn (Chỉ tạo)" : "Người dùng"),
          "Đăng nhập gần nhất": U.fmtDate(u.lastLogin),
          "Mã Firebase UID": u.id || u.uid || ""
        }));
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(rows);
        ws["!cols"] = [
          { wch: 6 },
          { wch: 26 },
          { wch: 32 },
          { wch: 22 },
          { wch: 16 },
          { wch: 20 },
          { wch: 32 }
        ];
        XLSX.utils.book_append_sheet(wb, ws, "NguoiDung");
        const d = new Date().toISOString().slice(0, 10);
        XLSX.writeFile(wb, `danh-sach-nguoi-dung-${d}.xlsx`);
        U.toast(`Đã xuất ${rows.length} người dùng ra Excel`, "ok");
      } catch (e) { fail(e); }
    };

    load();
  };

  /* ======================= CÀI ĐẶT ======================= */
  A.settings = (view) => {
    const s = DB.settings;
    view.innerHTML = `<div class="page">${header("⚙️", "Cài đặt web", "Tên web, thông báo, kết nối Google Sheet/Drive, lưu điểm, sao lưu và chế độ offline.", "linear-gradient(135deg,#0a58ca,#0d6efd)")}
      <div class="grid2">
        <div class="card" data-reveal><div class="card-h"><h3>🎨 Giao diện & nội dung</h3></div><div class="stack">
          <div class="field"><label>Tên web</label><input class="input" data-k="siteName" value="${esc(s.siteName)}"></div>
          <div class="field"><label>Khẩu hiệu (hiện ở trang chủ)</label><input class="input" data-k="slogan" value="${esc(s.slogan)}"></div>
          <div class="field"><label>Thông báo nổi bật (để trống nếu không dùng)</label><textarea class="textarea" data-k="announcement" rows="2">${esc(s.announcement || "")}</textarea></div>
          <label class="switch"><input type="checkbox" data-b="saveResults" ${s.saveResults !== false ? "checked" : ""}> Lưu kết quả các trận đấu (bảng vàng)</label>
          <label class="switch"><input type="checkbox" data-b="allowGuestsDefault" ${s.allowGuestsDefault !== false ? "checked" : ""}> Mặc định cho phép khách vãng lai khi tạo phòng thi trực tuyến</label>
          <button class="btn btn-ghost" id="stManageQL" style="margin-top:4px">🔗 Quản lý liên kết nhanh trang chủ</button>
          <button class="btn btn-primary" id="stSave">💾 Lưu cài đặt</button></div></div>
        <div class="card" data-reveal><div class="card-h"><h3>☁️ Dữ liệu gốc Google Sheet & Drive</h3></div><div class="stack">
          <div class="field"><label>ID / Liên kết Google Sheet câu hỏi gốc</label>
            <div class="row"><input class="input" data-k="googleSheetId" value="${esc(s.googleSheetId || "")}">
              <a class="btn btn-ghost btn-sm" href="https://docs.google.com/spreadsheets/d/${esc(s.googleSheetId || "")}/edit" target="_blank" rel="noopener">📊 Mở Sheet</a></div></div>
          <div class="field"><label>ID / Liên kết Thư mục Google Drive gốc</label>
            <div class="row"><input class="input" data-k="googleDriveFolderId" value="${esc(s.googleDriveFolderId || "")}">
              <a class="btn btn-ghost btn-sm" href="https://drive.google.com/drive/folders/${esc(s.googleDriveFolderId || "")}?lfhs=2" target="_blank" rel="noopener">📁 Mở Drive</a></div></div>
          <p class="muted" style="margin:0;font-size:13px">Hệ thống sẽ đồng bộ và liên kết trực tiếp tới Google Sheet và Google Drive này của Thầy Hùng TBS.</p>
        </div></div>
        <div class="card" data-reveal><div class="card-h"><h3>💾 Dữ liệu & offline</h3></div><div class="stack">
          <p class="muted" style="margin:0">Tải <b>questions-offline.js</b> rồi đặt vào thư mục <code>data/</code> (cùng cấp <code>index.html</code>). Khi không có Internet, web tự dùng file này.</p>
          <button class="btn btn-fun" id="stOff">💾 Tải questions-offline.js</button>
          <button class="btn btn-ghost" id="stBak">🗄️ Sao lưu toàn bộ (JSON)</button>
          <button class="btn btn-ghost" id="stRes">♻️ Khôi phục từ bản sao lưu</button>
          <label class="switch"><input type="checkbox" id="stForce" ${U.store.get("forceOffline", false) ? "checked" : ""}> Chỉ dùng dữ liệu offline trên máy này (bỏ qua Firestore)</label>
          <button class="btn btn-ghost" id="stCache">🧹 Xoá bộ nhớ đệm trên máy này</button></div></div>
        <div class="card" data-reveal><div class="card-h"><h3>🛡️ Người biên soạn (Creators)</h3><span class="muted">Chỉ Tạo — Không Xóa/Sửa</span></div><div class="stack">
          <p class="muted" style="margin:0;font-size:13px">Người biên soạn có thể soạn câu hỏi, nạp đề, tạo bộ đề & phòng thi. <b>Tuyệt đối không thể xóa câu hỏi hoặc sửa dữ liệu gốc của Thầy.</b></p>
          <div class="field"><label>Danh sách email người biên soạn (mỗi email một dòng hoặc cách nhau dấu phẩy)</label>
            <textarea class="textarea" id="stCreators" rows="3" placeholder="trogiang@gmail.com&#10;giaovien2@gmail.com">${esc((DB.creatorEmails ? DB.creatorEmails() : []).join("\n"))}</textarea></div>
          <button class="btn btn-primary" id="stSaveCreators">💾 Lưu danh sách người biên soạn</button>
        </div></div>
        <div class="card" data-reveal><div class="card-h"><h3>🔐 Firebase</h3></div>
          <p style="margin-top:0">Dự án: <code>${esc(APP_CONFIG.firebase.projectId)}</code></p>
          <p class="muted">Quản trị viên: ${(APP_CONFIG.adminEmails || []).map((e) => `<code>${esc(e)}</code>`).join(", ")}<br>Đổi danh sách admin trong <code>assets/js/config.js</code> và file rules trong thư mục <code>firebase/</code>.</p>
          <p class="muted">Trạng thái: Auth ${FB.available ? "✅" : "❌"} · Firestore ${DB.source === "cloud" ? "✅" : "⚠️ ngoại tuyến"} · Realtime DB ${FB.rtdb ? "✅" : "❌"}</p></div>
      </div></div>`;
    U.reveal(view);
    $("#stSave", view).onclick = async (e) => {
      const p = {}; $$("[data-k]", view).forEach((i) => (p[i.dataset.k] = i.value.trim())); $$("[data-b]", view).forEach((i) => (p[i.dataset.b] = i.checked));
      busy(e.currentTarget, true); try { await DB.saveSettings(p); U.toast("Đã lưu cài đặt", "ok"); App.buildDrawer(); App.applyBrand(); } catch (er) { fail(er); } busy(e.currentTarget, false);
    };
    const mqlBtn = $("#stManageQL", view);
    if (mqlBtn) {
      mqlBtn.onclick = () => {
        if (window.openManageQuickLinksModal) window.openManageQuickLinksModal();
      };
    }
    const scBtn = $("#stSaveCreators", view);
    if (scBtn) {
      scBtn.onclick = async (e) => {
        const val = $("#stCreators", view).value;
        const list = val.split(/[\n,;]+/).map((x) => x.trim().toLowerCase()).filter(Boolean);
        busy(e.currentTarget, true);
        try {
          await DB.saveSettings({ creatorEmails: list });
          if (window.FB && FB.user) FB.updateRoles(FB.user);
          U.toast(`Đã lưu ${list.length} email người biên soạn`, "ok");
        } catch (er) { fail(er); }
        busy(e.currentTarget, false);
      };
    }
    $("#stOff", view).onclick = () => U.download("questions-offline.js", DB.exportOfflineJS(), "text/javascript");
    $("#stBak", view).onclick = () => U.download("sao-luu-" + new Date().toISOString().slice(0, 10) + ".json", JSON.stringify({ questions: DB.questions.map((q) => { const c = U.plain(q); delete c._doc; return c; }), sets: DB.sets, gameConfigs: DB.gameConfigs, settings: DB.settings, presets: DB.presets }, null, 1), "application/json");
    $("#stRes", view).onclick = async () => {
      const f = await U.pickFile(".json"); if (!f) return;
      try {
        const d = JSON.parse(await U.readFile(f));
        if (!(await U.confirm(`Khôi phục ${(d.questions || []).length} câu hỏi, ${(d.sets || []).length} bộ đề? Dữ liệu trùng sẽ bị ghi đè.`))) return;
        await DB.importQuestions(d.questions || [], { overwrite: true });
        for (const s of d.sets || []) await DB.saveSet(s);
        for (const [g, c] of Object.entries(d.gameConfigs || {})) await DB.saveGameConfig(g, c);
        if (d.settings) await DB.saveSettings(d.settings);
        for (const p of d.presets || []) await DB.savePreset(p, "cloud");
        U.toast("Khôi phục thành công", "ok"); App.render();
      } catch (e) { fail(e); }
    };
    $("#stForce", view).onchange = async (e) => { U.store.set("forceOffline", e.target.checked); await DB.load(true); App.render(); U.toast(e.target.checked ? "Đang dùng dữ liệu offline" : "Đã kết nối lại Firestore", "info"); };
    $("#stCache", view).onclick = () => { U.store.del("cache"); U.store.del("localFile"); U.toast("Đã xoá bộ nhớ đệm", "ok"); };
  };
})();
