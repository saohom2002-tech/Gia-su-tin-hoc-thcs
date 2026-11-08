/* =========================================================
   player.js — Màn hình HỌC SINH trên điện thoại
   #/join  hoặc  #/join/123456
   ========================================================= */
(function () {
  const { $, $$, esc, h } = U;
  const MC_COLORS = ["#e21b3c", "#1368ce", "#d89e00", "#26890c"];

  window.PlayerPage = (view, pinParam) => {
    const S = { offs: [], timers: U.timers(), ctrl: null };
    const cleanup = () => { S.offs.forEach((f) => { try { f(); } catch (e) { } }); S.offs = []; S.timers.clear(); S.ctrl && S.ctrl.destroy(); App.enterGame(false); };
    App.enterGame(true);
    if (!FB.available || !FB.rtdb) {
      view.innerHTML = `<div class="pl"><div class="pl-card"><div class="pl-big">📡</div><h2>Cần kết nối Internet</h2><p>Chế độ trực tuyến cần Internet để vào phòng chơi.</p><a class="btn btn-primary" href="#/">Về trang chủ</a></div></div>`;
      return cleanup;
    }
    pinParam ? askName(pinParam) : askPin();

    function askPin(err) {
      view.innerHTML = `<div class="pl pl-join"><div class="pl-bg"></div>
        <div class="pl-card stg">
          <div class="pl-logo">🎮</div>
          <h1>Vào phòng chơi</h1>
          <p class="muted">Nhập mã PIN giáo viên cung cấp</p>
          <div class="pin-boxes">${Array.from({ length: 6 }, (_, i) => `<input inputmode="numeric" maxlength="1" data-i="${i}" aria-label="Số ${i + 1}">`).join("")}</div>
          ${err ? `<div class="pl-err">${esc(err)}</div>` : ""}
          <button class="btn btn-xl btn-fun btn-3d" id="go" style="width:100%">Tiếp tục ➜</button>
        </div></div>`;
      const ins = $$(".pin-boxes input", view);
      ins.forEach((i, k) => {
        i.addEventListener("input", () => { i.value = i.value.replace(/\D/g, "").slice(-1); if (i.value && ins[k + 1]) ins[k + 1].focus(); if (ins.every((x) => x.value)) $("#go", view).click(); });
        i.addEventListener("keydown", (e) => { if (e.key === "Backspace" && !i.value && ins[k - 1]) ins[k - 1].focus(); if (e.key === "Enter") $("#go", view).click(); });
        i.addEventListener("paste", (e) => { const t = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, 6); if (t.length) { e.preventDefault(); t.split("").forEach((d, j) => ins[j] && (ins[j].value = d)); ins[Math.min(5, t.length - 1)].focus(); } });
      });
      setTimeout(() => ins[0].focus(), 100);
      $("#go", view).onclick = () => { const pin = ins.map((i) => i.value).join(""); if (pin.length === 6) App.go("/join/" + pin); else U.toast("Mã PIN gồm 6 chữ số", "warn"); };
    }

    async function askName(pin) {
      view.innerHTML = `<div class="loader"><div class="dots3"><i></i><i></i><i></i></div>Đang tìm phòng ${esc(pin)}…</div>`;
      let meta;
      try { meta = await Room.getMeta(pin); } catch (e) { return askPin("Không kết nối được máy chủ: " + FB.errMsg(e)); }
      if (!meta) return askPin("Không tìm thấy phòng " + pin + ". Kiểm tra lại mã PIN nhé!");
      if (meta.status === "ended") return askPin("Phòng " + pin + " đã kết thúc.");
      const saved = (() => { try { return JSON.parse(sessionStorage.getItem("gfe_play_" + pin) || "null"); } catch (e) { return null; } })();
      if (saved && saved.pid) return doJoin(pin, saved.name, saved.avatar, saved.pid, saved.classCode);
      if (meta.locked) return askPin("🔒 Phòng " + pin + " đã bị khóa bởi Giáo viên (đủ sĩ số). Hãy liên hệ Thầy nếu bạn vào muộn.");

      const allowGuests = meta.settings && meta.settings.allowGuests !== false;
      const targetClass = (meta.settings && meta.settings.targetClass) ? String(meta.settings.targetClass).trim() : "";

      let avatar = U.pick(U.AVATARS);
      const lastName = U.store.get("playerName", "");
      const savedClass = targetClass || U.store.get("playerClass", "");
      const classes = (window.DB && DB.listClasses) ? DB.listClasses() : [];

      view.innerHTML = `<div class="pl pl-join"><div class="pl-bg"></div>
        <div class="pl-card stg">
          <div class="pl-game">${(Games.get(meta.gameId) || {}).icon || "🎮"} ${esc(meta.title || "")}</div>
          ${!allowGuests ? `
            <div class="notice" style="margin:0 0 14px;background:rgba(13,110,253,0.08);border:1px solid #0d6efd;text-align:left;border-radius:10px;padding:8px 12px">
              <b style="color:#0d6efd;display:flex;align-items:center;gap:4px">🔒 Phòng thi chính quy</b>
              <p style="margin:2px 0 0;font-size:12px">
                ${targetClass ? `Dành riêng cho học sinh <b>Lớp ${esc(targetClass)}</b>. Khách không được tham gia.` : `Dành riêng cho học sinh chính quy. Vui lòng chọn đúng Lớp của bạn.`}
              </p>
            </div>
          ` : ""}
          <h1>Bạn là ai?</h1>
          <input class="input pl-name" maxlength="20" placeholder="Nhập tên của bạn" value="${esc(lastName)}">
          ${targetClass ? `
            <div style="margin-top:10px;text-align:left">
              <label class="lbl" style="font-size:12px;font-weight:700">Lớp học (cố định):</label>
              <select class="select pl-class" style="width:100%;margin-top:4px" disabled>
                <option value="${esc(targetClass)}" selected>Lớp ${esc(targetClass)}</option>
              </select>
            </div>
          ` : classes.length ? `
            <div style="margin-top:10px;text-align:left">
              <label class="lbl" style="font-size:12px;font-weight:700">${!allowGuests ? '<span style="color:#ef4444">*</span> Bắt buộc chọn Lớp của bạn:' : 'Lớp / Nhóm học (tuỳ chọn):'}</label>
              <select class="select pl-class" style="width:100%;margin-top:4px;${!allowGuests ? 'border:1.5px solid #0d6efd' : ''}">
                <option value="">${!allowGuests ? '-- Bấm vào đây để chọn Lớp của bạn --' : '-- Chọn lớp (hoặc để trống nếu là khách) --'}</option>
                ${classes.map((c) => `<option value="${esc(c.code || c.name)}" ${savedClass === (c.code || c.name) ? "selected" : ""}>${esc(c.name)}${c.code ? ` (${esc(c.code)})` : ""}</option>`).join("")}
              </select>
            </div>
          ` : ""}
          <div class="lbl" style="margin-top:8px">Chọn linh vật</div>
          <div class="ava-grid">${U.AVATARS.map((a) => `<button class="${a === avatar ? "on" : ""}" data-a="${a}">${a}</button>`).join("")}</div>
          <button class="btn btn-xl btn-fun btn-3d" id="go" style="width:100%">🚀 Vào phòng</button>
          <a href="#/join" class="muted" style="font-size:13px">Đổi mã PIN (${esc(pin)})</a>
        </div></div>`;

      $$(".ava-grid button", view).forEach((b) => (b.onclick = () => { avatar = b.dataset.a; U.Sound.pop(); $$(".ava-grid button", view).forEach((x) => x.classList.toggle("on", x === b)); }));
      const nm = $(".pl-name", view); setTimeout(() => nm.focus(), 120);
      nm.addEventListener("keydown", (e) => e.key === "Enter" && $("#go", view).click());
      $("#go", view).onclick = () => {
        const rawName = nm.value.trim();
        if (!rawName) {
          nm.classList.add("shake");
          setTimeout(() => nm.classList.remove("shake"), 400);
          return U.toast("Hãy nhập tên của bạn", "warn");
        }
        const clsSel = $(".pl-class", view);
        const clsCode = (targetClass || (clsSel ? clsSel.value : "")).trim();
        if (!allowGuests && !clsCode) {
          if (clsSel) {
            clsSel.classList.add("shake");
            setTimeout(() => clsSel.classList.remove("shake"), 400);
            clsSel.focus();
          }
          return U.toast("Phòng thi này không cho phép khách. Vui lòng chọn lớp học của bạn!", "err", 4000);
        }
        if (clsCode) U.store.set("playerClass", clsCode);
        U.store.set("playerName", rawName);
        let finalName = rawName;
        if (clsCode && !rawName.toLowerCase().includes(clsCode.toLowerCase())) {
          finalName = `[${clsCode}] ${rawName}`;
        }
        doJoin(pin, finalName, avatar, null, clsCode);
      };
    }

    async function doJoin(pin, name, avatar, pidOld, classCode) {
      view.innerHTML = `<div class="loader"><div class="dots3"><i></i><i></i><i></i></div>Đang vào phòng…</div>`;
      try {
        const r = await Room.join(pin, { name, avatar, classCode }, pidOld);
        S.pin = pin; S.pid = r.pid; S.meta = r.meta; S.name = r.name || name; S.avatar = avatar; S.classCode = classCode;
        sessionStorage.setItem("gfe_play_" + pin, JSON.stringify({ pid: r.pid, name: S.name, avatar, classCode }));
        S.qs = await Room.getQuestions(pin);
        listen();
      } catch (e) { sessionStorage.removeItem("gfe_play_" + pin); askPin(e.message || FB.errMsg(e)); }
    }

    /* ---------------- Lắng nghe phòng ---------------- */
    function listen() {
      S.me = {};
      S.offs.push(Room.watch(S.pin, "players/" + S.pid, (p) => {
        if (!p) { sessionStorage.removeItem("gfe_play_" + S.pin); cleanupAll(); view.innerHTML = `<div class="pl"><div class="pl-card"><div class="pl-big">👋</div><h2>Bạn đã rời phòng</h2><p class="muted">Giáo viên đã mời bạn ra hoặc phòng đã đóng.</p><a class="btn btn-primary" href="#/join">Vào phòng khác</a></div></div>`; return; }
        S.me = p; updHeader();
      }));
      S.offs.push(Room.watch(S.pin, "meta/status", (st) => {
        if (st == null) return;
        S.status = st;
        if (st === "lobby") lobby();
        else if (st === "playing" && !S.started) start();
        else if (st === "ended") ended();
      }));
    }
    function cleanupAll() { S.offs.forEach((f) => f()); S.offs = []; S.timers.clear(); }
    function shell(inner) {
      view.innerHTML = `<div class="pl pl-play" style="--tc:${S.meta.kind === "tug" ? U.TEAM_COLORS[S.me.team || 0] : "#0d6efd"}">
        <div class="pl-head"><span class="pl-ava">${S.avatar}</span><b>${esc(S.name)}</b><span class="pl-sp"></span><span class="pl-score">⭐ ${U.fmtNum(S.me.score || 0)}</span></div>
        <div class="pl-body">${inner}</div></div>`;
    }
    function updHeader() { const sc = $(".pl-score", view); if (sc) sc.textContent = "⭐ " + U.fmtNum(S.me.score || 0); const tm = $(".pl-team", view); if (tm) { tm.textContent = "Bạn thuộc " + U.TEAM_NAMES[S.me.team || 0]; tm.style.background = U.TEAM_COLORS[S.me.team || 0]; } }

    function lobby() {
      shell(`<div class="pl-wait"><div class="pl-big bob">${S.avatar}</div><h2>Đã vào phòng!</h2>
        ${S.meta.kind === "tug" ? `<div class="pl-team"></div>` : ""}
        <p>Nhìn lên màn hình chiếu nhé — chờ giáo viên bắt đầu…</p><div class="dots3"><i></i><i></i><i></i></div></div>`);
      updHeader();
    }

    function start() {
      S.started = true;
      if (S.meta.kind === "quiz") return quizMode();
      if (S.meta.kind === "mil") return milMode();
      raceMode();
    }

    /* ---------- Chế độ Ai là triệu phú (host điều khiển, host tính tiền thưởng) ---------- */
    function milMode() {
      const set = S.meta.settings || {};
      shell(`<div class="pl-q"></div>`);
      let curQi = -1, myRes = null;
      const eliminated = () => S.me && S.me.out;
      S.offs.push(Room.watch(S.pin, "state", (s) => {
        if (!s) return;
        const body = $(".pl-q", view); if (!body) return;
        if (s.phase === "question" && s.qi !== curQi) {
          curQi = s.qi; myRes = null;
          const it = S.qs[s.qi]; if (!it) return;
          if (eliminated()) { body.innerHTML = `<div class="pl-wait"><div class="pl-big">🚪</div><h2>Bạn đã dừng cuộc chơi</h2><p>Giữ <b>${U.fmtNum(S.me.score || 0)}</b> điểm — cổ vũ các bạn còn lại nhé!</p></div>`; return; }
          const wait = Math.max(0, s.startAt - Room.now());
          body.innerHTML = `<div class="pl-wait"><div class="pl-mil-rung">💰 Câu ${s.rung}/${s.total} · <b>${U.fmtNum(s.value || 0)}</b> điểm</div><div class="pl-big bob">🤔</div><h2>Sẵn sàng…</h2><p>Nhìn lên màn chiếu…</p></div>`;
          S.timers.after(wait, () => {
            if (curQi !== s.qi || eliminated()) return;
            body.innerHTML = `<div class="pl-tbar"><i></i></div><div class="pl-qq"></div>`;
            const bar = $(".pl-tbar i", body); if (s.dur) { bar.style.transition = `width ${s.dur}s linear`; requestAnimationFrame(() => (bar.style.width = "0%")); }
            S.ctrl && S.ctrl.destroy();
            S.ctrl = Quiz.mount($(".pl-qq", body), it, { reveal: false, feedback: false, meta: true, onAnswer: (res) => {
              const ms = Room.now() - s.startAt;
              myRes = { ok: res.ok };
              Room.answer(S.pin, s.qi, S.pid, { given: res.given == null ? "" : res.given, ok: res.ok, points: res.points, ms });
              body.insertAdjacentHTML("beforeend", `<div class="pl-sent">✅ Đã khoá đáp án — chờ công bố…</div>`);
            } });
          });
        } else if (s.phase === "reveal" && s.qi === curQi) {
          if (eliminated() && !myRes) return;
          if (S.ctrl) try { S.ctrl.reveal(); } catch (e) { }
          const r = myRes;
          body.insertAdjacentHTML("afterbegin", `<div class="pl-verdict ${r ? (r.ok ? "ok" : "bad") : "none"}">${r ? (r.ok ? `🎉 Chính xác! Leo lên mốc <b>${U.fmtNum(s.value || 0)}</b>` : "😢 Chưa đúng — dừng cuộc chơi") : "⏰ Hết giờ — chưa trả lời"}</div>`);
          const sent = $(".pl-sent", body); if (sent) sent.remove();
          r && r.ok ? U.Sound.correct() : U.Sound.wrong();
          if (set.explain && S.qs[s.qi].explain) { body.insertAdjacentHTML("beforeend", `<details class="fb-ex" open><summary>💡 Lời giải</summary><div>${Quiz.rich(S.qs[s.qi].explain)}</div></details>`); Quiz.typeset(body); }
        } else if (s.phase === "board") {
          FB.rtdb.ref(`rooms/${S.pin}/players`).get().then((snap) => {
            const ps = Object.entries(snap.val() || {}).sort((a, b) => (b[1].score || 0) - (a[1].score || 0));
            const rk = ps.findIndex(([pid]) => pid === S.pid) + 1;
            const out = S.me && S.me.out;
            body.innerHTML = `<div class="pl-wait"><div class="pl-rank">#${rk}</div><h2>${out ? "Đã dừng cuộc chơi" : rk === 1 ? "Đang dẫn đầu! 👑" : "Cố lên nhé! 💪"}</h2><p>💰 ${U.fmtNum(S.me.score || 0)} điểm${out ? "" : ` · còn trong cuộc chơi`}</p></div>`;
          });
        }
      }));
    }

    /* ---------- Chế độ tự chơi (đua / kéo co) ---------- */
    function raceMode() {
      const set = S.meta.settings || {}, goal = set.goal || 10, freeze = set.freeze || 0;
      const queue = Quiz.queue(S.qs, { shuffleQ: true, shuffleA: false });
      let st = { progress: S.me.progress || 0, score: S.me.score || 0, correct: S.me.correct || 0, wrong: S.me.wrong || 0, streak: S.me.streak || 0 };
      let n = st.correct + st.wrong;
      const isTug = S.meta.kind === "tug";
      shell(`<div class="pl-prog ${isTug ? "hide" : ""}"><div class="pp-bar"><i></i><span class="pp-fig">${S.avatar}</span></div><b class="pp-t"></b></div>
        ${isTug ? `<div class="pl-team"></div>` : ""}
        <div class="pl-q"></div><div class="pl-freeze hide"><div>❄️</div><b>Đóng băng</b><span></span></div>`);
      updHeader();
      const drawProg = () => { const k = Math.min(1, st.progress / goal); $(".pp-bar i", view).style.width = k * 100 + "%"; $(".pp-fig", view).style.left = `calc(${k * 100}% - ${k * 28}px)`; $(".pp-t", view).textContent = `${Math.round(st.progress * 10) / 10}/${goal}`; };
      drawProg();
      const next = () => {
        if (S.status === "ended") return;
        if (!isTug && st.progress >= goal) { $(".pl-q", view).innerHTML = `<div class="pl-wait"><div class="pl-big">🏁</div><h2>Bạn đã về đích!</h2><p>Chờ các bạn khác và kết quả chung cuộc…</p></div>`; return; }
        S.ctrl && S.ctrl.destroy(); n++;
        S.ctrl = Quiz.mount($(".pl-q", view), queue.next(), { num: n, explain: set.explain, onAnswer: onAns });
        $(".pl-q", view).scrollTop = 0;
      };
      function onAns(res) {
        if (res.ok) { st.correct++; st.streak++; } else { st.wrong++; st.streak = 0; }
        st.progress = Math.round((st.progress + res.points) * 100) / 100;
        st.score += Math.round(100 * res.points) + (res.ok && st.streak >= 3 ? 20 : 0);
        Room.updatePlayer(S.pin, S.pid, Object.assign({}, st, st.progress >= goal && !isTug ? { finishedAt: firebase.database.ServerValue.TIMESTAMP } : {}));
        drawProg();
        if (res.ok) S.timers.after(set.explain ? 1800 : 900, next);
        else if (freeze > 0) {
          const fz = $(".pl-freeze", view); fz.classList.remove("hide"); let left = freeze; $("span", fz).textContent = left; U.Sound.freeze();
          const id = S.timers.every(1000, () => { left--; $("span", fz).textContent = left; if (left <= 0) { S.timers.stop(id); fz.classList.add("hide"); next(); } });
        } else S.timers.after(1800, next);
      }
      // chờ hiệu lệnh xuất phát
      S.offs.push(Room.watch(S.pin, "state", (s) => {
        if (S.raceGo || !s || !s.startAt) return;
        S.raceGo = true;
        const wait = Math.max(0, s.startAt - Room.now());
        $(".pl-q", view).innerHTML = `<div class="pl-wait"><div class="pl-big cd">3</div><h2>Chuẩn bị!</h2></div>`;
        let c = Math.ceil(wait / 1000);
        const id = S.timers.every(1000, () => { c--; const el = $(".cd", view); if (el) el.textContent = c > 0 ? c : "GO!"; if (c <= 0) { S.timers.stop(id); next(); } });
        if (c <= 0) { S.timers.stop(id); next(); }
      }));
    }

    /* ---------- Chế độ đấu trường (host điều khiển) ---------- */
    function quizMode() {
      const set = S.meta.settings || {};
      shell(`<div class="pl-q"></div>`);
      let curQi = -1, myRes = null, sentAt = 0;
      S.offs.push(Room.watch(S.pin, "state", (s) => {
        if (!s) return;
        const body = $(".pl-q", view); if (!body) return;
        if (s.phase === "question" && s.qi !== curQi) {
          curQi = s.qi; myRes = null;
          const it = S.qs[s.qi]; if (!it) return;
          const wait = Math.max(0, s.startAt - Room.now());
          body.innerHTML = `<div class="pl-wait">${s.roundName ? `<div class="pl-round">${esc(s.roundName)}</div>` : ""}<div class="pl-big bob">🤔</div><h2>Câu hỏi${s.value ? ` · ${s.value} điểm` : ""}</h2><p>Nhìn lên màn chiếu…</p></div>`;
          S.timers.after(wait, () => {
            if (curQi !== s.qi) return;
            body.innerHTML = `<div class="pl-tbar"><i></i></div><div class="pl-qq"></div>`;
            const bar = $(".pl-tbar i", body); bar.style.transition = `width ${s.dur}s linear`; requestAnimationFrame(() => (bar.style.width = "0%"));
            S.ctrl && S.ctrl.destroy();
            S.ctrl = Quiz.mount($(".pl-qq", body), it, { reveal: false, feedback: false, meta: true, onAnswer: (res) => {
              const ms = Room.now() - s.startAt, speed = Math.max(0, 1 - ms / (s.dur * 1000));
              const streak = res.ok ? (S.me.streak || 0) + 1 : 0;
              const pts = res.points > 0 ? Math.round(res.points * (500 + 500 * speed)) + (res.ok && streak >= 2 ? Math.min(250, (streak - 1) * 50) : 0) : 0;
              myRes = { ok: res.ok, pts, partial: res.points };
              Room.answer(S.pin, s.qi, S.pid, { given: res.given == null ? "" : res.given, ok: res.ok, points: pts, ms });
              Room.updatePlayer(S.pin, S.pid, { score: (S.me.score || 0) + pts, correct: (S.me.correct || 0) + (res.ok ? 1 : 0), wrong: (S.me.wrong || 0) + (res.ok ? 0 : 1), streak });
              body.insertAdjacentHTML("beforeend", `<div class="pl-sent">✅ Đã khoá đáp án — chờ công bố…</div>`);
            } });
          });
        } else if (s.phase === "reveal" && s.qi === curQi) {
          if (S.ctrl) try { S.ctrl.reveal(); } catch (e) { }
          const r = myRes;
          body.insertAdjacentHTML("afterbegin", `<div class="pl-verdict ${r ? (r.ok ? "ok" : r.pts ? "part" : "bad") : "none"}">${r ? (r.ok ? `🎉 Chính xác! <b>+${r.pts}</b>` : r.pts ? `👍 Đúng một phần <b>+${r.pts}</b>` : "😢 Chưa đúng") : "⏰ Hết giờ — bạn chưa trả lời"}</div>`);
          const sent = $(".pl-sent", body); if (sent) sent.remove();
          r && r.ok ? U.Sound.correct() : U.Sound.wrong();
          if (set.explain && S.qs[s.qi].explain) { body.insertAdjacentHTML("beforeend", `<details class="fb-ex" open><summary>💡 Lời giải</summary><div>${Quiz.rich(S.qs[s.qi].explain)}</div></details>`); Quiz.typeset(body); }
        } else if (s.phase === "board") {
          FB.rtdb.ref(`rooms/${S.pin}/players`).get().then((snap) => {
            const ps = Object.entries(snap.val() || {}).sort((a, b) => (b[1].score || 0) - (a[1].score || 0));
            const rk = ps.findIndex(([pid]) => pid === S.pid) + 1;
            body.innerHTML = `<div class="pl-wait"><div class="pl-rank">#${rk}</div><h2>${rk === 1 ? "Bạn đang dẫn đầu! 👑" : rk <= 3 ? "Top 3 rồi! 🔥" : "Cố lên nhé! 💪"}</h2><p>⭐ ${U.fmtNum(S.me.score || 0)} điểm ${(S.me.streak || 0) >= 2 ? `· 🔥 chuỗi ${S.me.streak}` : ""}</p></div>`;
          });
        }
      }));
    }

    async function ended() {
      cleanupAll();
      sessionStorage.removeItem("gfe_play_" + S.pin);
      const snap = await FB.rtdb.ref(`rooms/${S.pin}/results`).get().catch(() => null);
      const R = (snap && snap.val()) || [];
      const me = R.find((r) => r.pid === S.pid);
      const rk = me ? me.rank : null;
      view.innerHTML = `<div class="pl pl-end"><div class="pl-card stg">
        <div class="pl-big">${rk === 1 ? "🥇" : rk === 2 ? "🥈" : rk === 3 ? "🥉" : "🎉"}</div>
        <h1>${rk ? "Hạng " + rk : "Kết thúc!"}</h1>
        <p class="muted">${me ? `${U.fmtNum(me.score)} điểm` : S.meta.kind === "tug" ? "Xem kết quả đội trên màn chiếu" : "Cảm ơn bạn đã tham gia"}</p>
        <div class="lb-list" style="text-align:left">${R.slice(0, 5).map((r) => `<div class="lb-row ${r.pid === S.pid ? "me" : ""}"><span class="lb-rank">${r.rank}</span><span class="lb-name">${esc(r.name)}</span><span class="lb-score">${U.fmtNum(r.score)}</span></div>`).join("")}</div>
        <a class="btn btn-lg btn-primary" href="#/join">Vào phòng khác</a></div></div>`;
      if (rk && rk <= 3) { U.Sound.win(); U.confetti(); }
    }
    return cleanup;
  };
})();
