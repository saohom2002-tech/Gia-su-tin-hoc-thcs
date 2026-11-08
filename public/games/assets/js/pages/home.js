/* =========================================================
   home.js — Trang chủ & Bảng vàng
   ========================================================= */
(function () {
  const { $, $$, esc } = U;

  function gameCard(g) {
    return `<a class="game-card" href="#/game/${g.id}" data-reveal style="--c1:${g.colors[0]};--c2:${g.colors[1]}">
      <div class="gc-thumb">${Art.thumb(g.id)}</div>
      <div class="gc-body">
        <div class="gc-title"><span>${g.icon}</span>${esc(g.name)}</div>
        <div class="gc-desc">${esc(g.tagline || "")}</div>
        <div class="gc-tags">${g.tags.map((t, i) => `<span class="chip ${t === "Trực tuyến" || t === "Thời gian thực" ? "green" : i ? "" : "violet"}">${t}</span>`).join("")}</div>
      </div>
      <span class="gc-play">▶</span>
    </a>`;
  }
  function actCard(a) {
    return `<a class="game-card" href="#/hoat-dong/${a.id}" data-reveal style="--c1:${a.colors[0]};--c2:${a.colors[1]}">
      <div class="gc-thumb"><svg viewBox="0 0 320 180"><defs><linearGradient id="ag${a.id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a.colors[0]}"/><stop offset="1" stop-color="${a.colors[1]}"/></linearGradient></defs><rect width="320" height="180" fill="url(#ag${a.id})"/>
        <text x="160" y="122" font-size="80" text-anchor="middle">${a.icon}</text></svg></div>
      <div class="gc-body">
        <div class="gc-title"><span>${a.icon}</span>${esc(a.name)}</div>
        <div class="gc-desc">${esc(a.tagline || "")}</div>
        <div class="gc-tags"><span class="chip green">Hoạt động</span>${a.noQuiz ? `<span class="chip">Không cần câu hỏi</span>` : ""}</div>
      </div>
      <span class="gc-play">▶</span>
    </a>`;
  }
  function soonCard(s) {
    return `<div class="game-card soon" data-reveal style="--c1:${s.colors[0]};--c2:${s.colors[1]}">
      <div class="gc-thumb"><svg viewBox="0 0 320 180"><rect width="320" height="180" fill="url(#sg${s.id})"/><defs><linearGradient id="sg${s.id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${s.colors[0]}"/><stop offset="1" stop-color="${s.colors[1]}"/></linearGradient></defs>
        <text x="160" y="118" font-size="74" text-anchor="middle">${s.icon}</text></svg><span class="gc-soon">Sắp ra mắt</span></div>
      <div class="gc-body"><div class="gc-title"><span>${s.icon}</span>${esc(s.name)}</div><div class="gc-desc">${esc(s.desc)}</div></div></div>`;
  }

  window.HomePage = (view) => {
    const games = Games.enabled();
    const acts = (window.Activities && Activities.list) || [];
    const st = DB.settings;
    const words = (st.slogan || "Học mà chơi — Chơi mà học!").split(" ");
    view.innerHTML = `<div class="page home">
      ${st.announcement ? `<div class="notice" data-reveal>📣 ${esc(st.announcement)}</div>` : ""}
      ${DB.source === "local-file" ? `<div class="notice" data-reveal>📂 Đang dùng câu hỏi từ file trên máy. <button class="btn btn-sm btn-ghost" id="dropLocal">Quay lại dữ liệu trực tuyến</button></div>` : ""}
      <section class="hero">
        <div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div><div class="dots"></div>
        <div class="hero-text">
          <div class="hero-school-banner" data-reveal>
            <span class="hsb-logo" style="width:52px;height:52px;border-radius:14px;background:#fff;padding:0;box-shadow:0 6px 16px rgba(0,0,0,0.22);display:grid;place-items:center;overflow:hidden;flex:0 0 auto;border:2px solid rgba(255,255,255,0.75)">
              <img src="logo.png" alt="THCS Tân Bình" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.src='/logo-thcs-tan-binh.jpg'">
            </span>
            <div style="display:flex;flex-direction:column;line-height:1.2;text-align:left;min-width:0">
              <b class="hsb-name" style="font-family:var(--font-fun);font-size:clamp(15px, 1.7vw, 22px);font-weight:800;letter-spacing:0.02em;color:#fff;text-shadow:0 2px 8px rgba(10,88,202,0.85);text-transform:uppercase;white-space:nowrap">
                TRƯỜNG THCS TÂN BÌNH
              </b>
              <small class="hsb-motto" style="font-size:clamp(10.5px, 1.02vw, 13px);font-weight:700;color:#fef08a;margin-top:3px;letter-spacing:0.01em;text-shadow:0 1px 4px rgba(0,0,0,0.4);white-space:nowrap">
                Trung thực — Tôn trọng — Kỷ luật — Trách nhiệm — Tiến bộ mỗi ngày
              </small>
            </div>
          </div>
          <h1>${words.map((w, i) => `<span class="word ${/chơi|Chơi|học|Học|tri thức|Tri thức/.test(w) ? "hl" : ""}" style="--i:${i}">${esc(w)}</span>`).join(" ")}</h1>
          <p class="lead">${esc(st.siteName)} biến bài ôn tập thành những trận thi đấu sôi động: kéo co, đua xe, đua vịt, thuyền rồng, xúc xắc… Câu hỏi trắc nghiệm, đúng/sai, trả lời ngắn — giáo viên soạn một lần, chơi được mọi game.</p>
          <div class="hero-cta">
            <a class="btn btn-xl btn-white btn-3d" href="#games" id="toGames">🎮 Chọn trò chơi</a>
            <a class="btn btn-xl btn-glass" href="#/join">🔢 Vào phòng bằng PIN</a>
          </div>
          <div class="hero-contact-pill" data-reveal>
            <span class="hcp-badge">👑 Quản trị: <b>${esc(st.adminName || "Ms Trúc")}</b></span>
            <span class="hcp-divider">·</span>
            <a href="tel:${st.adminPhoneTel || '0908959627'}" class="hcp-item" title="Gọi điện cho Ms Trúc">
              <span>📞</span><span>${esc(st.adminPhone || "0908.959.627")}</span>
            </a>
            <span class="hcp-divider">·</span>
            <a href="${st.adminZalo || 'https://zalo.me/0908959627'}" target="_blank" rel="noopener" class="hcp-item zalo" title="Chat Zalo với Ms Trúc">
              <span>💬</span><span>Zalo</span>
            </a>
            <span class="hcp-divider hide-sm">·</span>
            <a href="mailto:${st.adminEmail || 'tranthithanhtruc1980@gmail.com'}" class="hcp-item email hide-sm" title="Gửi email cho Ms Trúc">
              <span>✉️</span><span>Email</span>
            </a>
          </div>
          <div class="hero-stats">
            <div><b data-count="${games.length + acts.length}">0</b><span>Trò chơi & hoạt động</span></div>
            <div><b data-count="${Quiz.countPlayable(DB.bank())}">0</b><span>Câu hỏi sẵn sàng</span></div>
            <div><b>3</b><span>Dạng câu hỏi</span></div>
          </div>
        </div>
        <div class="hero-visual">
          ${Art.hero()}
          <div class="float-chip fc1"><i style="background:#dcfce7">✅</i>Chính xác! +1</div>
          <div class="float-chip fc2"><i style="background:#fef3c7">🔥</i>Chuỗi đúng ×5</div>
          <div class="float-chip fc3"><i style="background:#dbeafe">🏆</i>Đội Xanh TBS dẫn đầu</div>
        </div>
      </section>

      <section class="sec quick-links-sec" id="quickLinks" style="padding-top:16px">
        <div class="sec-h">
          <div class="grow">
            <span class="eyebrow">Tiện ích nhanh</span>
            <h2>🔗 Liên kết nhanh & Tài nguyên</h2>
            <p>Truy cập tức thì Google Sheet gốc, Google Drive, phòng thi trực tuyến và các tiện ích học tập của Thầy Hùng TBS.</p>
          </div>
          ${FB.isAdmin ? `
            <div class="row" style="gap:8px">
              <button class="btn btn-sm btn-fun" id="qlAddBtn">➕ Thêm link</button>
              <button class="btn btn-sm btn-ghost" id="qlManageBtn">⚙️ Quản lý link</button>
            </div>
          ` : ""}
        </div>
        <div class="quick-grid" id="qlGrid"></div>
      </section>

      <section class="sec" id="games">
        <div class="sec-h"><div class="grow"><span class="eyebrow">Kho trò chơi</span><h2>Hôm nay lớp mình chơi gì? 🎯</h2><p>Mỗi trò đều dùng chung ngân hàng câu hỏi do giáo viên cài đặt.</p></div>
          <div class="seg" id="gFilter"><button class="on" data-f="all">Tất cả</button><button data-f="act">Hoạt động</button><button data-f="team">Thi đấu đội</button><button data-f="online">Trực tuyến</button><button data-f="turn">Theo lượt</button></div></div>
        <div class="games-grid" id="gGrid">${games.map(gameCard).join("")}${acts.map(actCard).join("")}${Games.soon.map(soonCard).join("")}</div>
      </section>

      ${DB.allPresets().length ? `<section class="sec">
        <div class="sec-h"><div class="grow"><span class="eyebrow">Chơi nhanh</span><h2>⚡ Cấu hình soạn sẵn</h2><p>Giáo viên đã chuẩn bị sẵn — bấm là vào trận!</p></div>${FB.isAdmin ? `<a class="btn btn-ghost" href="#/admin/presets">Quản lý</a>` : ""}</div>
        <div class="quick-grid">${DB.allPresets().filter((p) => Games.get(p.gameId)).slice(0, 12).map((p) => { const g = Games.get(p.gameId); return `<a class="quick-card" data-reveal href="#/game/${g.id}?preset=${encodeURIComponent(p.id)}" style="--c1:${g.colors[0]};--c2:${g.colors[1]}">
          <span class="qc-ic">${g.icon}</span><span class="qc-tx"><b>${esc(p.name)}</b><small>${esc(g.name)}${p.note ? " · " + esc(p.note) : ""}</small></span><span class="qc-go">▶</span></a>`; }).join("")}</div>
      </section>` : ""}

      <section class="sec">
        <div class="sec-h"><div><span class="eyebrow">Cách chơi</span><h2>3 bước là vào trận!</h2></div></div>
        <div class="steps3">
          <div class="step" data-reveal><span class="num">1</span><div class="s-ic" style="--g:linear-gradient(135deg,#c4b5fd,#818cf8)">📚</div><h3>Chọn bộ câu hỏi</h3><p>Giáo viên nhập câu hỏi từ Excel/JSON, gom thành bộ đề và phân bổ cho từng trò chơi.</p></div>
          <div class="step" data-reveal><span class="num">2</span><div class="s-ic" style="--g:linear-gradient(135deg,#fbcfe8,#f472b6)">🎮</div><h3>Chọn trò chơi & chế độ</h3><p>Chiếu một màn hình cho cả lớp thi đấu theo đội, hoặc tạo phòng trực tuyến với mã PIN.</p></div>
          <div class="step" data-reveal><span class="num">3</span><div class="s-ic" style="--g:linear-gradient(135deg,#fde68a,#fb923c)">🏆</div><h3>Thi đấu & vinh danh</h3><p>Trả lời đúng để tiến lên, xem lời giải ngay, điểm số được lưu vào bảng vàng.</p></div>
        </div>
      </section>

      <section class="sec home-bottom">
        <div class="card" data-reveal><div class="card-h"><h3>🏆 Bảng vàng gần đây</h3><span class="grow"></span><a class="btn btn-sm btn-ghost" href="#/bang-vang">Xem tất cả</a></div><div id="hLb"><div class="muted">Đang tải…</div></div></div>
        <div class="card" data-reveal><div class="card-h"><h3>💾 Dữ liệu & chơi offline</h3></div>
          <p style="margin-top:0">Nguồn câu hỏi: <b>${DB.sourceLabel()}</b></p>
          <p class="muted" style="font-size:14px">Không có Internet? Giáo viên tải file <code>questions-offline.js</code> trong trang Quản trị và đặt vào thư mục <code>data/</code> cạnh <code>index.html</code>. Hoặc mở nhanh một file câu hỏi JSON/Excel từ máy:</p>
          <button class="btn btn-primary" id="openLocal">📂 Mở file câu hỏi từ máy</button></div>
      </section>
      <footer class="site-footer" data-reveal>
        <div class="sf-inner">
          <div class="sf-col sf-brand">
            <div class="sf-logo-row">
              <span class="sf-logo">
                <img src="logo.png" alt="THCS Tân Bình" onerror="this.src='/logo-thcs-tan-binh.jpg'">
              </span>
              <div>
                <b class="sf-school">${esc((window.APP_CONFIG && APP_CONFIG.schoolName) || "Trường THCS Tân Bình")}</b>
                <span class="sf-app">${esc(st.siteName)} · Sân Chơi Tri Thức</span>
              </div>
            </div>
            <p class="sf-motto">“${esc(st.slogan || (window.APP_CONFIG && APP_CONFIG.schoolMotto) || "Trung thực — Tôn trọng — Kỷ luật — Trách nhiệm — Tiến bộ mỗi ngày")}”</p>
            <p class="sf-addr">📍 <b>Địa chỉ:</b> ${esc(st.schoolAddress || (window.APP_CONFIG && APP_CONFIG.schoolAddress) || "192/12 Nguyễn Thái Bình, P.12, Q. Tân Bình, TP.HCM")}</p>
            <p class="sf-web">🌐 <b>Website:</b> <a href="${st.schoolWebsite || (window.APP_CONFIG && APP_CONFIG.schoolWebsite) || 'https://thanhbinh.edu.vn'}" target="_blank" rel="noopener">thanhbinh.edu.vn</a></p>
          </div>

          <div class="sf-col sf-contact">
            <h4 class="sf-title">📞 Liên Hệ Quản Trị & Hỗ Trợ Kỹ Thuật</h4>
            <div class="sf-contact-card">
              <div class="sf-admin-head">
                <span class="sf-admin-ava">👩‍🏫</span>
                <div>
                  <b class="sf-admin-name">${esc(st.adminName || "Ms Trúc")}</b>
                  <small>Giáo viên Tin học · Quản trị viên hệ thống</small>
                </div>
              </div>
              <ul class="sf-contact-list">
                <li>
                  <span class="sfc-ic">📱</span>
                  <span>Hotline / Zalo:</span>
                  <a href="tel:${st.adminPhoneTel || '0908959627'}" class="sfc-val sfc-phone" title="Gọi điện thoại trực tiếp">
                    <b>${esc(st.adminPhone || '0908.959.627')}</b>
                  </a>
                  <a href="${st.adminZalo || 'https://zalo.me/0908959627'}" target="_blank" rel="noopener" class="sfc-zalo-btn" title="Mở Zalo nhắn tin trực tiếp">
                    Chat Zalo ↗
                  </a>
                </li>
                <li>
                  <span class="sfc-ic">✉️</span>
                  <span>Email:</span>
                  <a href="mailto:${st.adminEmail || 'tranthithanhtruc1980@gmail.com'}" class="sfc-val">
                    ${esc(st.adminEmail || 'tranthithanhtruc1980@gmail.com')}
                  </a>
                </li>
                <li>
                  <span class="sfc-ic">🤝</span>
                  <span class="muted" style="font-size:12px;line-height:1.4">Hỗ trợ giáo viên và học sinh tổ chức game show, mở phòng thi, biên soạn bộ đề và cập nhật dữ liệu.</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="sf-col sf-links">
            <h4 class="sf-title">⚡ Liên Kết & Tiện Ích</h4>
            <ul class="sf-nav">
              <li><a href="#/host">📡 Mở phòng thi trực tuyến (Host)</a></li>
              <li><a href="#/join">🔢 Vào phòng bằng mã PIN</a></li>
              <li><a href="#/bang-vang">🏆 Bảng vàng vinh danh</a></li>
            </ul>
          </div>
        </div>

        <div class="sf-bottom">
          <span>© ${new Date().getFullYear()} ${esc(st.siteName)} — Trường THCS Tân Bình.</span>
          <span>Quản trị & Phụ trách kỹ thuật: <b>${esc(st.adminName || "Ms Trúc")}</b> (Hotline/Zalo: <a href="tel:${st.adminPhoneTel || '0908959627'}" style="color:inherit;font-weight:700">${esc(st.adminPhone || '0908.959.627')}</a>)</span>
        </div>
      </footer>
    </div>`;
    U.reveal(view);
    $$("[data-count]", view).forEach((b) => U.countUp(b, +b.dataset.count, 1400));
    $("#toGames", view).onclick = (e) => { e.preventDefault(); $("#games", view).scrollIntoView({ behavior: "smooth" }); };
    $$("#gFilter button", view).forEach((b) => (b.onclick = () => {
      $$("#gFilter button", view).forEach((x) => x.classList.toggle("on", x === b));
      const f = b.dataset.f;
      if (f === "act") { $("#gGrid", view).innerHTML = acts.map(actCard).join("") || `<div class="empty" style="grid-column:1/-1"><span class="em-ic">🎈</span>Chưa có hoạt động nào.</div>`; U.reveal(view); return; }
      const list = games.filter((g) => f === "all" || (f === "online" && g.modes.includes("online")) || (f === "team" && g.fields.some((x) => x.type === "teams") && !g.tags.includes("Theo lượt")) || (f === "turn" && g.tags.includes("Theo lượt")));
      $("#gGrid", view).innerHTML = list.map(gameCard).join("") + (f === "all" ? acts.map(actCard).join("") + Games.soon.map(soonCard).join("") : "");
      U.reveal(view);
    }));
    $("#openLocal", view).onclick = async () => {
      const f = await U.pickFile(".json,.js,.xlsx,.xls,.csv"); if (!f) return;
      try { const list = await IO.parseFile(f); if (!list.length) throw new Error("File không có câu hỏi"); await DB.useLocalFile(list); U.toast(`Đã nạp ${list.length} câu hỏi từ file`, "ok"); App.render(); }
      catch (e) { U.toast("Không đọc được file: " + e.message, "err", 4000); }
    };
    const dl = $("#dropLocal", view); if (dl) dl.onclick = async () => { await DB.clearLocalFile(); App.render(); };

    /* ---------------- Render Liên kết nhanh ---------------- */
    function renderQuickLinks() {
      const box = $("#qlGrid", view);
      if (!box) return;
      const links = DB.listQuickLinks();
      if (!links.length) {
        box.innerHTML = `<div class="empty" style="grid-column:1/-1;padding:24px"><span class="em-ic">🔗</span>Chưa có liên kết nhanh nào.${FB.isAdmin ? ' Bấm nút "Thêm link" ở trên để tạo.' : ''}</div>`;
        return;
      }
      box.innerHTML = links.map((l) => {
        const isExt = l.external !== false && String(l.url || "").startsWith("http");
        const target = isExt ? 'target="_blank" rel="noopener"' : '';
        const color = l.color || "#0d6efd";
        return `<div class="quick-card ql-card" data-reveal style="--c1:${color};--c2:${U.shade(color, 0.7)};cursor:pointer" data-id="${esc(l.id)}">
          <a href="${esc(l.url)}" ${target} style="display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit;flex:1;min-width:0">
            <span class="qc-ic">${l.icon || "🔗"}</span>
            <span class="qc-tx">
              <b style="display:flex;align-items:center;gap:6px">
                ${esc(l.title)}
                ${l.badge ? `<span class="chip" style="font-size:10px;padding:2px 6px;height:auto">${esc(l.badge)}</span>` : ""}
              </b>
              <small>${esc(l.desc || l.url)}</small>
            </span>
            <span class="qc-go" title="Mở">${isExt ? "↗" : "▶"}</span>
          </a>
          ${FB.isAdmin ? `
            <div class="ql-actions" style="margin-left:6px;display:flex;gap:4px">
              <button class="btn btn-xs btn-ghost btn-icon" data-qedit="${esc(l.id)}" title="Chỉnh sửa liên kết">✏️</button>
              <button class="btn btn-xs btn-ghost btn-icon" data-qdel="${esc(l.id)}" title="Xóa liên kết" style="color:#ef4444">🗑️</button>
            </div>
          ` : ""}
        </div>`;
      }).join("");

      if (FB.isAdmin) {
        $$("[data-qedit]", box).forEach((b) => {
          b.onclick = (e) => {
            e.stopPropagation();
            const item = links.find((x) => x.id === b.dataset.qedit);
            if (item) openQuickLinkModal(item, renderQuickLinks);
          };
        });
        $$("[data-qdel]", box).forEach((b) => {
          b.onclick = async (e) => {
            e.stopPropagation();
            const item = links.find((x) => x.id === b.dataset.qdel);
            if (item && await U.confirm(`Xóa liên kết “${esc(item.title)}”?`, { ok: "Xóa", danger: true })) {
              await DB.deleteQuickLink(item.id);
              U.toast("Đã xóa liên kết", "ok");
              renderQuickLinks();
            }
          };
        });
      }
    }

    const addBtn = $("#qlAddBtn", view);
    if (addBtn) addBtn.onclick = () => openQuickLinkModal(null, renderQuickLinks);
    const mngBtn = $("#qlManageBtn", view);
    if (mngBtn) mngBtn.onclick = () => openManageQuickLinksModal(renderQuickLinks);
    renderQuickLinks();

    DB.listResults(40).then((rs) => {
      const box = $("#hLb", view); if (!box) return;
      const agg = aggregate(rs).slice(0, 5);
      box.innerHTML = agg.length ? `<div class="lb-list">${agg.map((p) => `<div class="lb-row"><span class="lb-rank"></span><span class="lb-name">${esc(p.name)} <small class="muted">· ${p.wins} lần thắng</small></span><span class="lb-score">${U.fmtNum(p.score)}</span></div>`).join("")}</div>`.replace(/<span class="lb-rank"><\/span>/g, () => "") : `<div class="empty" style="padding:20px"><span class="em-ic">🏁</span>Chưa có trận đấu nào — hãy chơi trận đầu tiên!</div>`;
      $$(".lb-row", box).forEach((r, i) => r.insertAdjacentHTML("afterbegin", `<span class="lb-rank">${i + 1}</span>`));
    });
  };

  /* ---------------- Quản lý Liên kết nhanh (Quick Links) ---------------- */
  function openQuickLinkModal(item, onDone) {
    const isEdit = Boolean(item && item.id);
    const it = item || {
      id: "",
      title: "",
      url: "",
      desc: "",
      icon: "🔗",
      color: "#0d6efd",
      badge: "",
      external: true
    };
    const body = `
      <div class="stack" style="gap:12px;text-align:left">
        <div class="field">
          <label class="lbl">Tiêu đề liên kết <span style="color:#ef4444">*</span></label>
          <input class="input" id="qlTitle" placeholder="Ví dụ: Google Sheet Đề Gốc, Nhóm Zalo Lớp 12A1..." value="${esc(it.title)}">
        </div>
        <div class="field">
          <label class="lbl">Đường dẫn URL <span style="color:#ef4444">*</span></label>
          <input class="input" id="qlUrl" placeholder="https://... hoặc #/host, #/bang-vang" value="${esc(it.url)}">
        </div>
        <div class="field">
          <label class="lbl">Mô tả ngắn</label>
          <input class="input" id="qlDesc" placeholder="Ví dụ: Ngân hàng 153+ câu hỏi Toán 12 của Thầy Hùng" value="${esc(it.desc || "")}">
        </div>
        <div class="row" style="gap:12px;flex-wrap:wrap">
          <div class="field" style="flex:1;min-width:180px">
            <label class="lbl">Biểu tượng (Icon)</label>
            <div class="row" style="gap:6px">
              <input class="input" id="qlIcon" value="${esc(it.icon || "🔗")}" style="width:54px;text-align:center;font-size:18px">
              <div class="ql-emoji-picker" style="display:flex;gap:4px;flex-wrap:wrap">
                ${["📊", "📁", "📡", "🔢", "🏆", "🏫", "💬", "🎥", "📚", "⭐"].map(e => `<button type="button" class="btn btn-xs btn-ghost ql-emo" style="font-size:16px;padding:2px 6px">${e}</button>`).join("")}
              </div>
            </div>
          </div>
          <div class="field" style="flex:1;min-width:140px">
            <label class="lbl">Nhãn tag (Tuỳ chọn)</label>
            <input class="input" id="qlBadge" placeholder="Sheet gốc, Zalo, Hot..." value="${esc(it.badge || "")}">
          </div>
        </div>
        <div class="row" style="justify-content:space-between;align-items:center;margin-top:6px">
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer">
            <input type="checkbox" id="qlExt" ${it.external !== false ? "checked" : ""}> Mở trong tab mới
          </label>
          <div style="display:flex;align-items:center;gap:6px">
            <label class="lbl" style="margin:0">Màu viền:</label>
            <input type="color" id="qlColor" value="${it.color || "#0d6efd"}" style="width:36px;height:30px;padding:0;border:0;border-radius:6px;cursor:pointer">
          </div>
        </div>
      </div>
    `;

    const m = U.modal({
      title: isEdit ? "✏️ Chỉnh sửa liên kết nhanh" : "➕ Thêm liên kết nhanh mới",
      body,
      actions: [
        { label: "Hủy", cls: "btn-ghost", value: "cancel" },
        { label: isEdit ? "Lưu thay đổi" : "Thêm liên kết", cls: "btn-primary", value: "save" }
      ]
    });

    $$(".ql-emo", m.el).forEach(b => {
      b.onclick = () => { $("#qlIcon", m.el).value = b.textContent.trim(); };
    });

    m.result.then(async (act) => {
      if (act !== "save") return;
      const title = $("#qlTitle", m.el).value.trim();
      const url = $("#qlUrl", m.el).value.trim();
      if (!title || !url) {
        return U.toast("Vui lòng điền đủ Tiêu đề và Đường dẫn URL", "warn");
      }
      const desc = $("#qlDesc", m.el).value.trim();
      const icon = $("#qlIcon", m.el).value.trim() || "🔗";
      const badge = $("#qlBadge", m.el).value.trim();
      const color = $("#qlColor", m.el).value;
      const external = $("#qlExt", m.el).checked;

      await DB.saveQuickLink({
        id: it.id,
        title,
        url,
        desc,
        icon,
        badge,
        color,
        external
      });
      U.toast(isEdit ? "Đã cập nhật liên kết!" : "Đã thêm liên kết mới!", "ok");
      if (onDone) onDone();
    });
  }

  function openManageQuickLinksModal(onDone) {
    const renderContent = () => {
      const links = DB.listQuickLinks();
      return `
        <div class="stack" style="gap:12px;text-align:left">
          <div class="row" style="justify-content:space-between;align-items:center">
            <span class="muted" style="font-size:13px">Có <b>${links.length}</b> liên kết hiển thị trên trang chủ</span>
            <div style="display:flex;gap:6px">
              <button class="btn btn-xs btn-primary" id="mqlAdd">➕ Thêm link mới</button>
              <button class="btn btn-xs btn-ghost" id="mqlReset" title="Khôi phục các liên kết mặc định của Thầy">♻️ Khôi phục gốc</button>
            </div>
          </div>
          <div style="max-height:360px;overflow-y:auto;border:1px solid var(--border);border-radius:10px;padding:4px">
            ${links.map((l) => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-bottom:1px solid var(--border);gap:8px">
                <span style="font-size:20px;flex:0 0 auto">${l.icon || "🔗"}</span>
                <div style="flex:1;min-width:0">
                  <b style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(l.title)}</b>
                  <small class="muted" style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(l.url)}</small>
                </div>
                <div style="display:flex;gap:4px;flex:0 0 auto">
                  <button class="btn btn-xs btn-ghost btn-icon" data-medit="${esc(l.id)}" title="Sửa">✏️</button>
                  <button class="btn btn-xs btn-ghost btn-icon" data-mdel="${esc(l.id)}" title="Xóa" style="color:#ef4444">🗑️</button>
                </div>
              </div>
            `).join("") || `<div class="empty" style="padding:20px">Chưa có liên kết nào</div>`}
          </div>
        </div>
      `;
    };

    const m = U.modal({
      title: "⚙️ Quản lý danh sách liên kết nhanh",
      body: renderContent(),
      actions: [{ label: "Đóng", cls: "btn-ghost", value: "close" }]
    });

    const bindEvents = () => {
      const addBtn = $("#mqlAdd", m.el);
      if (addBtn) {
        addBtn.onclick = () => {
          openQuickLinkModal(null, () => {
            $(".modal-b", m.el).innerHTML = renderContent();
            bindEvents();
            if (onDone) onDone();
          });
        };
      }
      const resetBtn = $("#mqlReset", m.el);
      if (resetBtn) {
        resetBtn.onclick = async () => {
          if (await U.confirm("Khôi phục danh sách liên kết gốc của Thầy Hùng TBS (Google Sheet, Google Drive, Mở phòng, Bảng vàng...)?", { ok: "Khôi phục", danger: true })) {
            await DB.resetQuickLinks();
            U.toast("Đã khôi phục liên kết mặc định", "ok");
            $(".modal-b", m.el).innerHTML = renderContent();
            bindEvents();
            if (onDone) onDone();
          }
        };
      }
      $$("[data-medit]", m.el).forEach(b => {
        b.onclick = () => {
          const item = DB.listQuickLinks().find(x => x.id === b.dataset.medit);
          if (item) {
            openQuickLinkModal(item, () => {
              $(".modal-b", m.el).innerHTML = renderContent();
              bindEvents();
              if (onDone) onDone();
            });
          }
        };
      });
      $$("[data-mdel]", m.el).forEach(b => {
        b.onclick = async () => {
          const item = DB.listQuickLinks().find(x => x.id === b.dataset.mdel);
          if (item && await U.confirm(`Xóa liên kết “${esc(item.title)}”?`, { ok: "Xóa", danger: true })) {
            await DB.deleteQuickLink(item.id);
            U.toast("Đã xóa liên kết", "ok");
            $(".modal-b", m.el).innerHTML = renderContent();
            bindEvents();
            if (onDone) onDone();
          }
        };
      });
    };

    bindEvents();
  }
  window.openQuickLinkModal = openQuickLinkModal;
  window.openManageQuickLinksModal = openManageQuickLinksModal;

  function aggregate(rs, gameId) {
    const m = {};
    rs.filter((r) => !gameId || r.gameId === gameId).forEach((r) => (r.players || []).forEach((p) => {
      const k = U.norm(p.name); if (!k) return;
      const o = m[k] || (m[k] = { name: p.name, score: 0, wins: 0, matches: 0, correct: 0 });
      o.score += +p.score || 0; o.matches++; o.correct += +p.correct || 0; if (p.rank === 1) o.wins++;
    }));
    return Object.values(m).sort((a, b) => b.wins - a.wins || b.score - a.score);
  }

  window.LeaderboardPage = (view) => {
    view.innerHTML = `<div class="page">
      <div class="page-h"><div class="ph-ic" style="--g:linear-gradient(135deg,#ffe066,#f59f00)">🏆</div><div><h1>Bảng vàng</h1><p>Vinh danh những người chơi & đội xuất sắc</p></div></div>
      <div class="row" style="margin-bottom:14px;gap:8px;flex-wrap:wrap">
        <select class="select" id="lbGame" style="max-width:260px"><option value="">🎮 Tất cả trò chơi</option>${Games.list.map((g) => `<option value="${g.id}">${g.icon} ${esc(g.name)}</option>`).join("")}</select>
        <select class="select" id="lbClass" style="max-width:200px"><option value="">🏫 Tất cả lớp</option>${(window.DB && DB.listClasses ? DB.listClasses() : []).map((c) => `<option value="${esc(c.code || c.name)}">${esc(c.name)}</option>`).join("")}</select>
      </div>
      <div class="lb-grid"><div class="card"><div class="card-h"><h3>👑 Xếp hạng tổng</h3></div><div id="lbTop"><div class="loader" style="min-height:120px"><div class="dots3"><i></i><i></i><i></i></div></div></div></div>
      <div class="card"><div class="card-h"><h3>🕑 Trận đấu gần đây</h3></div><div id="lbRecent"></div></div></div></div>`;
    let rs = [];
    const draw = () => {
      const gid = $("#lbGame", view).value;
      const cls = ($("#lbClass", view) ? $("#lbClass", view).value : "").trim();
      const filteredRs = rs.filter((r) => {
        if (gid && r.gameId !== gid) return false;
        if (cls) {
          const clsNorm = U.norm(cls);
          const hasClass = (r.players || []).some((p) => {
            const pn = U.norm(p.name || "");
            return pn.includes(clsNorm) || (p.classCode && U.norm(p.classCode) === clsNorm);
          });
          if (!hasClass) return false;
        }
        return true;
      });
      const agg = aggregate(filteredRs).slice(0, 30);
      $("#lbTop", view).innerHTML = agg.length ? `<div class="lb-list stg">${agg.map((p, i) => `<div class="lb-row" style="--i:${i}"><span class="lb-rank">${i + 1}</span><span class="lb-name">${esc(p.name)}<br><small class="muted">${p.matches} trận · ${p.wins} thắng · ${p.correct} câu đúng</small></span><span class="lb-score">${U.fmtNum(Math.round(p.score))}</span></div>`).join("")}</div>` : `<div class="empty"><span class="em-ic">🏁</span>Chưa có dữ liệu</div>`;
      const rec = filteredRs.slice(0, 30);
      $("#lbRecent", view).innerHTML = rec.length ? `<div class="lb-list">${rec.map((r) => { const g = Games.get(r.gameId); return `<div class="lb-row"><span class="lb-rank">${g ? g.icon : "🎮"}</span><span class="lb-name">${esc(r.gameName || "")} — <b>${esc(r.winner || "Hòa")}</b><br><small class="muted">${U.fmtDate(r.at || r.createdAt)} · ${(r.players || []).length} người/đội · ${r.mode === "online" ? "📱 trực tuyến" : "🖥️ một màn hình"}</small></span></div>`; }).join("")}</div>` : `<div class="empty">Chưa có trận đấu</div>`;
    };
    $("#lbGame", view).onchange = draw;
    if ($("#lbClass", view)) $("#lbClass", view).onchange = draw;
    DB.listResults(500).then((r) => { rs = r; draw(); });
  };

  /* ---------------- Mở phòng thi trực tuyến (/host) ---------------- */
  window.HostPage = (view) => {
    const games = Games.enabled().filter((g) => g.modes.includes("online"));
    const classes = (window.DB && DB.listClasses) ? DB.listClasses() : [];
    const st = DB.settings;
    let allowGuests = st.allowGuestsDefault !== false;
    let targetClass = "";

    function render() {
      view.innerHTML = `<div class="page host-page">
        <div class="page-head" style="text-align:center;margin-bottom:24px">
          <span style="font-size:42px;display:inline-block">📡</span>
          <h1 style="font-family:var(--font-fun);font-size:32px;margin:8px 0 4px">Mở phòng thi trực tuyến</h1>
          <p class="muted" style="max-width:580px;margin:0 auto">Tạo phòng thi đấu thời gian thực cho học sinh. Học sinh tham gia bằng mã PIN trên điện thoại hoặc máy tính.</p>
        </div>

        <div class="card host-opts-card" style="max-width:680px;margin:0 auto 28px;background:var(--card-bg, #fff);padding:20px;border-radius:16px;border:1px solid var(--border);box-shadow:0 8px 24px rgba(0,0,0,0.05)">
          <h3 style="margin-top:0;display:flex;align-items:center;gap:8px">🛡️ Chế độ phòng thi</h3>
          <div class="row" style="gap:16px;margin-top:12px;flex-wrap:wrap">
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:600">
              <input type="radio" name="hp_mode" value="open" ${allowGuests ? "checked" : ""}> 🌐 Cho phép mọi người (Kể cả khách)
            </label>
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:600">
              <input type="radio" name="hp_mode" value="class" ${!allowGuests ? "checked" : ""}> 🔒 Dành riêng cho lớp chính quy
            </label>
          </div>
          <div id="hpClassWrap" style="margin-top:14px;${allowGuests ? "display:none;" : ""}">
            <label class="lbl" style="font-size:12px;font-weight:700">Chỉ định lớp thi đấu:</label>
            <select class="select" id="hpClassSel" style="width:100%">
              <option value="">-- Mọi lớp chính quy đã đăng ký --</option>
              ${classes.map(c => `<option value="${esc(c.code || c.name)}" ${targetClass === (c.code || c.name) ? "selected" : ""}>${esc(c.name)}${c.code ? ` (${esc(c.code)})` : ""}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="sec-h" style="max-width:960px;margin:0 auto 16px">
          <h2>Chọn trò chơi để mở phòng</h2>
          <p class="muted">Bấm vào trò chơi bên dưới để tạo phòng trực tuyến với các thiết lập trên</p>
        </div>

        <div class="game-grid" style="max-width:960px;margin:0 auto">
          ${games.map((g) => `
            <div class="game-card" data-gid="${g.id}" style="--c1:${g.colors[0]};--c2:${g.colors[1]};cursor:pointer">
              <div class="gc-thumb">${Art.thumb(g.id)}</div>
              <div class="gc-body">
                <div class="gc-title"><span>${g.icon}</span>${esc(g.name)}</div>
                <div class="gc-desc">${esc(g.tagline || "")}</div>
                <div class="gc-tags"><span class="chip green">📱 Trực tuyến</span></div>
              </div>
              <span class="gc-play" title="Mở phòng ${esc(g.name)}">📡 Mở phòng</span>
            </div>
          `).join("")}
        </div>
      </div>`;

      $$("input[name=hp_mode]", view).forEach((r) => {
        r.onchange = () => {
          allowGuests = r.value === "open";
          const box = $("#hpClassWrap", view);
          if (box) box.style.display = allowGuests ? "none" : "block";
        };
      });

      const clsSel = $("#hpClassSel", view);
      if (clsSel) {
        clsSel.onchange = () => { targetClass = clsSel.value; };
      }

      $$(".game-card[data-gid]", view).forEach((c) => {
        c.onclick = () => {
          const gid = c.dataset.gid;
          const params = new URLSearchParams();
          params.set("mode", "online");
          params.set("allowGuests", allowGuests ? "1" : "0");
          if (!allowGuests && targetClass) params.set("class", targetClass);
          App.go(`/game/${gid}?${params.toString()}`);
        };
      });
    }

    render();
  };

  window.aggregateResults = aggregate;
})();
