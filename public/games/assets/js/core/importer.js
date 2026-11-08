/* =========================================================
   importer.js — Nhập / xuất câu hỏi: JSON & Excel (SheetJS)
   Cột chuẩn theo mẫu của Thầy Hùng TBS:
   STT | ID question | Type | Level | Grade | Subject | Chapter | Topic |
   Question | Option 1 | Option 2 | Option 3 | Option 4 | Correct answer | Explain | ParentId
   ========================================================= */
(function () {
  const EXPORT_COLS = ["STT", "ID question", "Type", "Level", "Grade", "Subject", "Chapter", "Topic", "Question", "Option 1", "Option 2", "Option 3", "Option 4", "Correct answer", "Explain", "ParentId"];
  const COLS = ["Id", "Type", "Level", "Grade", "Subject", "Chapter", "Topic", "Question", "A", "B", "C", "D", "CorrectAnswer", "Explain", "ParentId"];
  const ALIAS = {
    // ID
    id: "Id", "mã": "Id", "ma": "Id", "mã câu": "Id", "mã câu hỏi": "Id",
    "id question": "Id", "id_question": "Id", "idquestion": "Id", "question id": "Id", "qid": "Id",
    // Type
    type: "Type", "loại": "Type", "loai": "Type", "dạng": "Type", "loại câu": "Type",
    // Level
    level: "Level", "mức độ": "Level", "muc do": "Level", "mức": "Level", "độ khó": "Level",
    // Grade
    grade: "Grade", "lớp": "Grade", "lop": "Grade", "khối": "Grade", "khoi": "Grade",
    // Subject
    subject: "Subject", "môn": "Subject", "mon": "Subject", "môn học": "Subject",
    // Chapter
    chapter: "Chapter", "chương": "Chapter", "chuong": "Chapter", "chuyên đề": "Chapter",
    // Topic
    topic: "Topic", "chủ đề": "Topic", "chu de": "Topic", "bài": "Topic", "dạng bài": "Topic",
    // Question
    question: "Question", "câu hỏi": "Question", "cau hoi": "Question", "nội dung": "Question", "đề bài": "Question",
    // Options
    a: "A", b: "B", c: "C", d: "D",
    "option 1": "A", "option 2": "B", "option 3": "C", "option 4": "D",
    "option1": "A", "option2": "B", "option3": "C", "option4": "D",
    "option a": "A", "option b": "B", "option c": "C", "option d": "D",
    "opt 1": "A", "opt 2": "B", "opt 3": "C", "opt 4": "D",
    "opt1": "A", "opt2": "B", "opt3": "C", "opt4": "D",
    "phương án a": "A", "phương án b": "B", "phương án c": "C", "phương án d": "D",
    "phương án 1": "A", "phương án 2": "B", "phương án 3": "C", "phương án 4": "D",
    "lựa chọn 1": "A", "lựa chọn 2": "B", "lựa chọn 3": "C", "lựa chọn 4": "D",
    "ý a": "A", "ý b": "B", "ý c": "C", "ý d": "D",
    // Correct Answer
    correctanswer: "CorrectAnswer", "correct answer": "CorrectAnswer", "correct_answer": "CorrectAnswer",
    answer: "CorrectAnswer", "đáp án": "CorrectAnswer", "dap an": "CorrectAnswer", "đáp án đúng": "CorrectAnswer",
    "câu trả lời đúng": "CorrectAnswer",
    // Explain
    explain: "Explain", "lời giải": "Explain", "giải thích": "Explain", "loi giai": "Explain", "hướng dẫn": "Explain",
    "hướng dẫn giải": "Explain",
    // ParentId
    parentid: "ParentId", parent: "ParentId", "nhóm": "ParentId", "thuộc nhóm": "ParentId", "id cha": "ParentId",
    // STT (bỏ qua khi gán thuộc tính câu hỏi)
    stt: "STT", "số thứ tự": "STT"
  };
  const TYPE_ALIAS = { "TN": "MC", "TRẮC NGHIỆM": "MC", "ĐS": "TF", "ĐÚNG SAI": "TF", "DS": "TF", "TLN": "SA", "TRẢ LỜI NGẮN": "SA", "TỰ LUẬN": "LA", "TL": "LA", "NHÓM": "Group", "GROUP": "Group" };
  const META = ["Level", "Grade", "Subject", "Chapter", "Topic"];

  function normType(t, isChild) {
    let u = String(t || "").trim().toUpperCase();
    u = TYPE_ALIAS[u] || u;
    if (u === "Group" || u === "GROUP") return "Group";
    if (u.startsWith("GROUP")) return "Group" + u.slice(5);
    if (isChild && ["MC", "TF", "SA", "LA"].includes(u)) return "Group" + u;
    return ["MC", "TF", "SA", "LA"].includes(u) ? u : (u || "MC");
  }
  function cleanQ(q, isChild) {
    const o = {};
    o.Id = String(q.Id || q.id || "").trim();
    o.Type = normType(q.Type || q.type, isChild);
    META.forEach((k) => (o[k] = q[k] != null ? String(q[k]).trim() : ""));
    o.Question = q.Question != null ? String(q.Question) : "";
    const base = Quiz.baseType(o.Type);
    if (base === "MC" || base === "TF") {
      const src = q.Options || {};
      const keys = base === "MC" ? ["A", "B", "C", "D", "E", "F"] : ["a", "b", "c", "d"];
      o.Options = {};
      keys.forEach((k) => {
        const v = src[k] != null ? src[k] : src[k.toUpperCase()] != null ? src[k.toUpperCase()] : src[k.toLowerCase()];
        if (v != null && String(v).trim() !== "") o.Options[k] = String(v);
      });
    }
    if (q.CorrectAnswer != null && base !== "LA" && base !== "Group") o.CorrectAnswer = String(q.CorrectAnswer).trim();
    if (q.Explain) o.Explain = String(q.Explain);
    if (base === "Group") o.children = (q.children || []).map((c) => cleanQ(c, true));
    return o;
  }
  function validate(q) {
    const t = Quiz.baseType(q.Type), errs = [];
    if (!q.Question && t !== "Group") errs.push("thiếu nội dung câu hỏi");
    if (t === "MC") { if (Object.keys(q.Options || {}).length < 2) errs.push("cần ≥ 2 phương án"); if (!/^[A-F]$/i.test(q.CorrectAnswer || "")) errs.push("đáp án MC phải là A–D"); }
    if (t === "TF") { if (!q.Options || !Object.keys(q.Options).length) errs.push("thiếu các ý a–d"); if (!/^[ĐDSTF01đs]{1,4}$/i.test(String(q.CorrectAnswer || "").replace(/[\s,;\-]/g, ""))) errs.push("đáp án TF dạng ĐSĐS"); }
    if (t === "SA" && !q.CorrectAnswer) errs.push("thiếu đáp án");
    if (t === "Group" && !(q.children || []).length) errs.push("nhóm chưa có câu con");
    return errs;
  }

  const IO = { COLS };

  /* JSON: mảng câu hỏi hoặc {questions:[...]} hoặc OFFLINE_DATA */
  IO.parseJSON = (text) => {
    text = String(text).replace(/^\uFEFF/, "").trim();
    const m = text.match(/window\.OFFLINE_DATA\s*=\s*([\s\S]*?);?\s*$/);
    let data = JSON.parse(m ? m[1] : text);
    if (!Array.isArray(data)) data = data.questions || data.data || [];
    return data.map((q) => cleanQ(q));
  };

  /* Excel/CSV -> câu hỏi */
  IO.parseSheet = async (buf) => {
    const XLSX = await U.needXLSX();
    const wb = XLSX.read(buf, { type: "array" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(ws, { defval: "", raw: false });
    const out = [], groups = {}; let lastGroup = null;
    rows.forEach((r) => {
      const q = { Options: {} };
      Object.keys(r).forEach((h) => {
        const normH = String(h).trim().toLowerCase();
        const key = ALIAS[normH] || ALIAS[normH.replace(/[\s_\-]+/g, "")] || (COLS.includes(String(h).trim()) ? String(h).trim() : null);
        if (!key || key === "STT") return;
        const v = r[h];
        if (["A", "B", "C", "D"].includes(key)) { if (String(v).trim() !== "") q.Options[key] = String(v); }
        else q[key] = v;
      });
      if (!q.Question && !q.Id && !Object.keys(q.Options).length) return;
      let t = normType(q.Type);
      const parentId = String(q.ParentId || "").trim();
      const isChild = !!parentId || (t.startsWith("Group") && t !== "Group");
      if (Quiz.baseType(t) === "TF") { const o = {}; Object.keys(q.Options).forEach((k) => (o[k.toLowerCase()] = q.Options[k])); q.Options = o; }
      delete q.ParentId;
      if (t === "Group") { q.children = []; const c = cleanQ(q); c.children = []; out.push(c); groups[c.Id] = c; lastGroup = c; return; }
      if (isChild) {
        const g = groups[parentId] || lastGroup;
        if (g) { q.Type = normType(q.Type, true); META.forEach((k) => { if (!q[k]) q[k] = g[k]; }); g.children.push(cleanQ(q, true)); return; }
      }
      out.push(cleanQ(q));
    });
    return out;
  };

  IO.parseFile = async (file) => {
    const name = file.name.toLowerCase();
    if (name.endsWith(".json") || name.endsWith(".js") || name.endsWith(".txt")) return IO.parseJSON(await U.readFile(file));
    return IO.parseSheet(await U.readFile(file, "buffer"));
  };

  IO.validate = validate;
  IO.clean = cleanQ;

  /* Bộ bóc tách đề thi tự động từ văn bản thô (Word / Text) dành cho môn Toán */
  IO.parseRawText = (text) => {
    if (!text || typeof text !== "string") return [];
    const src = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
    if (!src) return [];

    // Chia các câu hỏi dựa theo tiền tố Câu 1, Câu 2, Bài 1, Question 1...
    const qRegex = /(?:^|\n)\s*(?:Câu|Bài|Question)\s*(\d+)[\s.:\-–—]+/gi;
    const matches = [];
    let m;
    while ((m = qRegex.exec(src)) !== null) {
      matches.push({ index: m.index, num: m[1], matchLen: m[0].length });
    }

    const rawBlocks = [];
    if (!matches.length) {
      // Nếu không có chữ Câu 1, xem như 1 câu đơn
      rawBlocks.push({ num: "1", text: src });
    } else {
      for (let i = 0; i < matches.length; i++) {
        const start = matches[i].index + matches[i].matchLen;
        const end = (i + 1 < matches.length) ? matches[i + 1].index : src.length;
        rawBlocks.push({
          num: matches[i].num,
          text: src.slice(start, end).trim()
        });
      }
    }

    const parsedList = [];
    const LEVEL_MAP = {
      "nb": "Nhận biết", "nhan biet": "Nhận biết", "nhận biết": "Nhận biết",
      "th": "Thông hiểu", "thong hieu": "Thông hiểu", "thông hiểu": "Thông hiểu",
      "vd": "Vận dụng", "van dung": "Vận dụng", "vận dụng": "Vận dụng",
      "vdc": "Vận dụng cao", "van dung cao": "Vận dụng cao", "vận dụng cao": "Vận dụng cao"
    };

    rawBlocks.forEach((blk, idx) => {
      let content = blk.text;
      const q = {
        Id: "Q_" + (blk.num || (idx + 1)),
        Type: "MC",
        Level: "Nhận biết",
        Grade: "12",
        Subject: "Toán",
        Chapter: "",
        Topic: "",
        Question: "",
        Options: {},
        CorrectAnswer: "",
        Explain: ""
      };

      // 1. Tách Mức độ: [Nhận biết], [TH], (Vận dụng)...
      const lvlMatch = content.match(/^\[([a-zA-ZÀ-ỹ\s]+)\]|^\(([a-zA-ZÀ-ỹ\s]+)\)/);
      if (lvlMatch) {
        const rawLvl = (lvlMatch[1] || lvlMatch[2] || "").trim().toLowerCase();
        if (LEVEL_MAP[rawLvl]) q.Level = LEVEL_MAP[rawLvl];
        content = content.slice(lvlMatch[0].length).trim();
      }

      // 2. Tách Lời giải / Hướng dẫn giải
      const expMatch = content.match(/(?:\n|^)\s*(?:Lời\s*giải|Hướng\s*dẫn\s*giải|Giải\s*thích|HDG)[\s.:\-–—]+([\s\S]*)$/i);
      if (expMatch) {
        q.Explain = expMatch[1].trim();
        content = content.slice(0, expMatch.index).trim();
      }

      // 3. Nhận diện Dạng câu hỏi (TF: Đúng/Sai 4 ý dùng a) b) c) d), MC: 4 lựa chọn dùng A. B. C. D.)
      const isTF = /(?:^|\n)\s*a\s*[\).]\s*[\s\S]*?(?:^|\n)\s*b\s*[\).]/m.test(content);
      const isMC = /(?:^|\s{2,}|\n)\s*A\s*[\).]\s*[\s\S]*?(?:^|\s{2,}|\n)\s*B\s*[\).]/m.test(content);

      if (isTF) {
        q.Type = "TF";
        // Tách các ý a, b, c, d (chữ thường)
        const tfRegex = /(?:^|\n)\s*([a-d])\s*[\).]\s*([\s\S]*?)(?=(?:^|\n)\s*[a-d]\s*[\).]|(?:\n\s*Đáp\s*án)|$)/g;
        let tm;
        let stem = content;
        const firstMatch = content.search(/(?:^|\n)\s*a\s*[\).]/);
        if (firstMatch !== -1) {
          stem = content.slice(0, firstMatch).trim();
        }
        q.Question = stem;

        const tfOpts = {};
        while ((tm = tfRegex.exec(content)) !== null) {
          tfOpts[tm[1].toLowerCase()] = tm[2].trim().replace(/\n+/g, " ");
        }
        q.Options = tfOpts;

        // Tìm đáp án Đúng/Sai (dạng ĐSĐS, a-Đ, b-S...)
        const ansMatch = (q.Explain + "\n" + content).match(/(?:Chọn|Đáp\s*án)[\s.:\-–—]*([ĐDSdđsTFTF\s\-,;a-d\)\.]+)/i);
        if (ansMatch) {
          const rawA = ansMatch[1].replace(/[^ĐDSđsTFTF10]/gi, "").toUpperCase().replace(/T/g, "Đ").replace(/F/g, "S").replace(/1/g, "Đ").replace(/0/g, "S");
          if (rawA.length >= 4) q.CorrectAnswer = rawA.slice(0, 4);
        }
      } else if (isMC) {
        q.Type = "MC";
        // Tách phương án A, B, C, D (chữ hoa)
        const mcSplitRegex = /(?:^|\s{2,}|\n)\s*([A-D])\s*[\).]\s*([\s\S]*?)(?=(?:^|\s{2,}|\n)\s*[A-D]\s*[\).]|(?:\n\s*Đáp\s*án)|$)/g;
        const firstA = content.search(/(?:^|\n|\s{2,})\s*A\s*[\).]/);
        if (firstA !== -1) {
          q.Question = content.slice(0, firstA).trim();
          const rest = content.slice(firstA);
          let mm;
          while ((mm = mcSplitRegex.exec(rest)) !== null) {
            const k = mm[1].toUpperCase();
            q.Options[k] = mm[2].trim().replace(/\n+/g, " ");
          }
        } else {
          q.Question = content;
        }

        // Tìm đáp án A, B, C, D
        const ansM = (q.Explain + "\n" + content).match(/(?:Chọn|Đáp\s*án|Câu\s*\d+[\s.:]*)\s*([A-D])(?:\.|\b|$)/i);
        if (ansM) {
          q.CorrectAnswer = ansM[1].toUpperCase();
        }
      } else {
        // Không có A B C D hoặc a b c d -> Trắc nghiệm trả lời ngắn (SA) hoặc Tự luận
        const saAnsMatch = (q.Explain + "\n" + content).match(/(?:Đáp\s*án|Kết\s*quả|KQ)[\s.:\-–—]*([^\n]+)/i);
        if (saAnsMatch) {
          q.Type = "SA";
          q.CorrectAnswer = saAnsMatch[1].trim();
        } else {
          q.Type = "SA";
        }
        q.Question = content;
      }

      // Xoá dòng "Đáp án: ..." khỏi Question nếu còn sót
      q.Question = q.Question.replace(/(?:\n|^)\s*(?:Đáp\s*án|Chọn)[\s.:\-–—]*[^\n]+/gi, "").trim();

      parsedList.push(cleanQ(q));
    });

    return parsedList;
  };

  IO.stats = (list) => {
    const s = { total: list.length, MC: 0, TF: 0, SA: 0, LA: 0, Group: 0, children: 0, errors: [] };
    list.forEach((q, i) => {
      const t = Quiz.baseType(q.Type); s[t] = (s[t] || 0) + 1;
      if (t === "Group") s.children += (q.children || []).length;
      const e = validate(q); if (e.length) s.errors.push({ i, id: q.Id, msg: e.join(", ") });
      (q.children || []).forEach((c) => { const ec = validate(c); if (ec.length) s.errors.push({ i, id: c.Id || q.Id + " (con)", msg: ec.join(", ") }); });
    });
    return s;
  };

  /* Xuất */
  IO.toJSON = (list) => JSON.stringify(list.map((q) => { const c = U.plain(q); delete c._doc; delete c.updatedAt; return c; }), null, 2);
  function toRows(list) {
    const rows = [];
    let counter = 1;
    const row = (q, parent) => {
      const t = Quiz.baseType(q.Type), r = {};
      EXPORT_COLS.forEach((k) => (r[k] = ""));
      r["STT"] = counter++;
      r["ID question"] = q.Id || "";
      r["Type"] = q.Type || "";
      META.forEach((k) => (r[k] = q[k] || ""));
      r["Question"] = q.Question || "";
      const o = q.Options || {};
      if (t === "TF") {
        r["Option 1"] = o["a"] != null ? o["a"] : o["A"] || "";
        r["Option 2"] = o["b"] != null ? o["b"] : o["B"] || "";
        r["Option 3"] = o["c"] != null ? o["c"] : o["C"] || "";
        r["Option 4"] = o["d"] != null ? o["d"] : o["D"] || "";
      } else {
        r["Option 1"] = o["A"] || "";
        r["Option 2"] = o["B"] || "";
        r["Option 3"] = o["C"] || "";
        r["Option 4"] = o["D"] || "";
      }
      r["Correct answer"] = q.CorrectAnswer || "";
      r["Explain"] = q.Explain || "";
      r["ParentId"] = parent ? parent.Id : "";
      rows.push(r);
      (q.children || []).forEach((c) => row(c, q));
    };
    list.forEach((q) => row(q));
    return rows;
  }
  IO.toExcel = async (list, name) => {
    const XLSX = await U.needXLSX();
    const ws = XLSX.utils.json_to_sheet(toRows(list), { header: EXPORT_COLS });
    ws["!cols"] = EXPORT_COLS.map((c) => ({ wch: c === "Question" || c === "Explain" ? 60 : c.length < 5 ? 8 : 16 }));
    const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, "CauHoi");
    const guide = XLSX.utils.aoa_to_sheet([
      ["HƯỚNG DẪN NHẬP CÂU HỎI THEO THỨ TỰ CỦA THẦY HÙNG TBS"], [""],
      ["Thứ tự cột", "STT | ID question | Type | Level | Grade | Subject | Chapter | Topic | Question | Option 1 | Option 2 | Option 3 | Option 4 | Correct answer | Explain | ParentId"],
      ["Type", "MC = trắc nghiệm 1 đáp án · TF = đúng/sai 4 ý · SA = trả lời ngắn · LA = tự luận · Group = nhóm câu (câu con có ParentId = Id của nhóm, Type GroupMC/GroupTF/GroupSA)"],
      ["MC", "Option 1..4 là 4 phương án A, B, C, D; Correct answer là A/B/C/D"],
      ["TF", "Option 1..4 là 4 ý a), b), c), d); Correct answer dạng ĐSĐS (hoặc DSDS)"],
      ["SA", "Correct answer là số hoặc từ; nhiều đáp án chấp nhận ngăn bằng dấu |  (ví dụ: 0,5|1/2)"],
      ["Level", "Nhận biết · Thông hiểu · Vận dụng · Vận dụng cao"],
      ["Công thức", "Viết LaTeX giữa dấu $...$, ví dụ $\\int f(x)dx$"],
      ["Hình ảnh", "Dán đường link ảnh (.png/.jpg) vào nội dung câu hỏi, xuống dòng riêng"],
      ["Trống", "Các cột Môn/Lớp/Chương/Chủ đề có thể để trống, bổ sung sau trong trang Quản trị"]
    ]);
    guide["!cols"] = [{ wch: 16 }, { wch: 110 }];
    XLSX.utils.book_append_sheet(wb, guide, "HuongDan");
    XLSX.writeFile(wb, name || "ngan-hang-cau-hoi.xlsx");
  };
  IO.template = () => IO.toExcel([
    { Id: "HT121", Type: "MC", Level: "Nhận biết", Grade: "12", Subject: "Toán", Chapter: "NGUYÊN HÀM VÀ TÍCH PHÂN", Topic: "Nguyên hàm", Question: "Tìm nguyên hàm của hàm số $f(x) = x^3$.", Options: { A: "$\\int f(x)dx = 3x^2 + C$", B: "$\\int f(x)dx = \\frac{1}{4}x^4 + C$", C: "$\\int f(x)dx = x^4 + C$", D: "$\\int f(x)dx = \\frac{1}{3}x^4 + C$" }, CorrectAnswer: "B", Explain: "Sử dụng công thức nguyên hàm cơ bản: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$. Với $n=3$, ta có $\\int x^3 dx = \\frac{x^4}{4} + C$." },
    { Id: "HT1211", Type: "TF", Level: "Thông hiểu", Grade: "12", Subject: "Toán", Chapter: "NGUYÊN HÀM VÀ TÍCH PHÂN", Topic: "Nguyên hàm", Question: "Cho hàm số $f(x) = 4x^3 - 2x$. Xét tính đúng sai của các khẳng định sau về nguyên hàm của $f(x)$:", Options: { a: "Hàm số $F(x) = x^4 - x^2 + 5$ là một nguyên hàm của $f(x)$.", b: "Nếu $G(x)$ là một nguyên hàm của $f(x)$ thì $G'(x) = 12x^2 - 2$.", c: "Tập hợp tất cả các nguyên hàm của $f(x)$ là $x^4 - x^2 + C$.", d: "Nguyên hàm $F(x)$ đi qua điểm $M(0; 1)$ là $F(x) = x^4 - x^2 + 1$." }, CorrectAnswer: "DSDS", Explain: "a) Đúng. b) Sai. c) Đúng. d) Đúng." },
    { Id: "HT1213", Type: "SA", Level: "Vận dụng", Grade: "12", Subject: "Toán", Chapter: "NGUYÊN HÀM VÀ TÍCH PHÂN", Topic: "Nguyên hàm", Question: "Cho hàm số $f(x) = 3x^2 + 2x$. Gọi $F(x)$ là một nguyên hàm của $f(x)$ thỏa mãn $F(1) = 3$. Tính giá trị của $F(2)$.", CorrectAnswer: "13", Explain: "Ta có $F(x) = x^3 + x^2 + C$. Vì $F(1) = 3 \\Rightarrow C = 1$. Vậy $F(2) = 13$." }
  ], "mau-nhap-cau-hoi.xlsx");

  window.IO = IO;
})();
