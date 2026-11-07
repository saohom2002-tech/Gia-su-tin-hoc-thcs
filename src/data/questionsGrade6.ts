import { Question } from '../types/quiz';

export const QUESTIONS_GRADE_6: Record<string, Question[]> = {
  "tin6-bai-1": [
    {
      "id": "g6-b1-mcq-1",
      "type": "multiple_choice",
      "question": "Dữ liệu là gì theo chương trình Tin học 6 Kết Nối Tri Thức?",
      "options": [
        "Chỉ là các chữ số từ 0 đến 9",
        "Là thông tin dưới dạng được chứa trong vật mang tin như văn bản, chữ số, hình ảnh, âm thanh",
        "Là suy nghĩ nảy sinh trong não người",
        "Là tất cả những gì mắt người nhìn thấy trong tự nhiên"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 5): Dữ liệu là thông tin dưới dạng được chứa trong vật mang tin.",
      "hint": "Dữ liệu được chứa trong vật mang tin hoặc thiết bị lưu trữ."
    },
    {
      "id": "g6-b1-mcq-2",
      "type": "multiple_choice",
      "question": "Vật mang tin là gì?",
      "options": [
        "Bút mực dùng để viết bài",
        "Chiếc cặp sách dùng để đựng đồ dùng học tập",
        "Vật chứa hoặc truyền tải dữ liệu, thông tin (như sách, báo, thẻ nhớ, ổ cứng, USB...)",
        "Chiếc xe tải chở hàng hóa"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 6): Vật mang tin là vật chứa dữ liệu (giấy viết, thẻ nhớ, USB...).",
      "hint": "Vật chứa và lưu trữ dữ liệu."
    },
    {
      "id": "g6-b1-mcq-3",
      "type": "multiple_choice",
      "question": "Khi nhìn thấy biển báo hình tròn viền đỏ có gạch chéo màu đỏ trên nền trắng, thông tin em nhận được là gì?",
      "options": [
        "Biển báo này chỉ để trang trí cho đường phố",
        "Được phép chạy xe với tốc độ tối đa",
        "Được phép dừng đỗ xe tự do",
        "Cấm thực hiện hành vi được vẽ trong biển báo (ví dụ cấm đi ngược chiều, cấm rẽ)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6: Hình ảnh biển báo là dữ liệu; hiểu được lệnh cấm là thông tin.",
      "hint": "Biển báo mang thông tin cảnh báo hoặc cấm đoán."
    },
    {
      "id": "g6-b1-mcq-4",
      "type": "multiple_choice",
      "question": "Em nghe tiếng còi xe cấp cứu inh ỏi trên đường, thông tin em thu nhận được là gì?",
      "options": [
        "Có xe cứu thương đang chở bệnh nhân cần nhường đường gấp",
        "Tiếng nhạc biểu diễn ngoài trời",
        "Tiếng loa phát thanh của phường",
        "Đã đến giờ tan tầm"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Âm thanh còi xe là dữ liệu; ý thức nhường đường cho xe cấp cứu là thông tin.",
      "hint": "Ý nghĩa của tiếng còi xe ưu tiên."
    },
    {
      "id": "g6-b1-mcq-5",
      "type": "multiple_choice",
      "question": "Phát biểu nào sau đây phân biệt ĐÚNG NHẤT giữa Thông tin và Dữ liệu?",
      "options": [
        "Thông tin luôn có dạng số, dữ liệu luôn có dạng chữ",
        "Thông tin và dữ liệu là hai từ hoàn toàn đồng nghĩa",
        "Dữ liệu là các con số, chữ viết, hình ảnh thô; thông tin là ý nghĩa đem lại sự hiểu biết cho con người",
        "Dữ liệu chỉ tồn tại trong não người, thông tin chỉ có trong máy tính"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 6): Thông tin đem lại sự hiểu biết, dữ liệu là hình thức thể hiện của thông tin.",
      "hint": "Dữ liệu là vật chứa thô, thông tin là ý nghĩa đem lại hiểu biết."
    },
    {
      "id": "g6-b1-mcq-6",
      "type": "multiple_choice",
      "question": "Tình huống: Bản tin dự báo thời tiết thông báo: 'Hà Nội ngày mai nhiệt độ từ 12 đến 15 độ C, có mưa phùn'. Thông tin mà em nhận được để quyết định hành động là gì?",
      "options": [
        "Ngày mai trời rất rét và ướt, cần mặc áo ấm dày và mang theo áo mưa khi đi học",
        "Chỉ là các con số 12 và 15",
        "Không có thông tin nào hữu ích",
        "Hà Nội là thủ đô của Việt Nam"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Con số và câu chữ là dữ liệu; quyết định mặc áo ấm đi học là thông tin có ích.",
      "hint": "Hành vi ứng xử dựa trên thông tin thời tiết."
    },
    {
      "id": "g6-b1-mcq-7",
      "type": "multiple_choice",
      "question": "Vật mang tin nào sau đây là thiết bị lưu trữ kĩ thuật số hiện đại?",
      "options": [
        "Cuốn sổ tay ghi nhật kí",
        "Tấm bảng đen viết phấn",
        "Tờ giấy báo in",
        "Thẻ nhớ MicroSD và ổ cứng SSD"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Thẻ nhớ và ổ cứng SSD lưu trữ dữ liệu dưới dạng các bit điện tử kĩ thuật số.",
      "hint": "Thiết bị điện tử lưu trữ dữ liệu số."
    },
    {
      "id": "g6-b1-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu sau về thông tin và dữ liệu (SGK Tin học 6):",
      "options": [
        "a) Cùng một dữ liệu có thể mang lại những thông tin khác nhau cho các đối tượng tiếp nhận khác nhau.",
        "b) Thẻ nhớ, ổ cứng, USB và đĩa quang đều là các vật mang tin.",
        "c) Thông tin chỉ có thể được tạo ra từ máy vi tính, con người không thể tự tạo ra thông tin.",
        "d) Dữ liệu chỉ có thể ở dạng văn bản chữ viết, không thể ở dạng âm thanh hay hình ảnh."
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        false
      ],
      "difficulty": "trung_binh",
      "explanation": "a) Đúng; b) Đúng; c) Sai vì con người là chủ thể sáng tạo thông tin; d) Sai vì dữ liệu có dạng văn bản, hình ảnh, âm thanh, số...",
      "hint": "Dữ liệu đa dạng hình thức: số, chữ, ảnh, âm thanh."
    },
    {
      "id": "g6-b1-blank-1",
      "type": "fill_blank",
      "question": "Thông tin đem lại [1] cho con người về thế giới xung quanh. Dữ liệu là thông tin dưới dạng được chứa trong [2].",
      "blankAnswers": [
        "hiểu biết",
        "vật mang tin"
      ],
      "wordBank": [
        "hiểu biết",
        "vật mang tin",
        "máy in",
        "chuột máy tính",
        "màn hình",
        "dây cáp"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 Trang 5: Thông tin đem lại sự hiểu biết; dữ liệu được chứa trong vật mang tin.",
      "hint": "Sự hiểu biết; Vật mang tin."
    },
    {
      "id": "g6-b1-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi ví dụ ở Cột A với loại dữ liệu tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Bức ảnh chụp phong cảnh Vịnh Hạ Long"
        },
        {
          "id": "2",
          "text": "2) Bản nhạc bài hát 'Tiến quân ca' phát trên loa"
        },
        {
          "id": "3",
          "text": "3) Điểm thi môn Tin học: 9.5"
        },
        {
          "id": "4",
          "text": "4) Đoạn văn miêu tả mùa thu Hà Nội"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Dữ liệu dạng số"
        },
        {
          "id": "b",
          "text": "Dữ liệu dạng hình ảnh"
        },
        {
          "id": "c",
          "text": "Dữ liệu dạng âm thanh"
        },
        {
          "id": "d",
          "text": "Dữ liệu dạng văn bản"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "a",
        "4": "d"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "1-b: Ảnh là hình ảnh; 2-c: Bài hát là âm thanh; 3-a: 9.5 là số; 4-d: Đoạn văn là văn bản.",
      "hint": "4 dạng dữ liệu cơ bản: số, chữ, ảnh, âm thanh."
    }
  ],
  "tin6-bai-2": [
    {
      "id": "g6-b2-mcq-1",
      "type": "multiple_choice",
      "question": "Quy trình xử lí thông tin trong máy tính diễn ra theo thứ tự nào sau đây?",
      "options": [
        "Truyền thông tin -> Xử lí thông tin -> Thu nhận thông tin -> Lưu trữ thông tin",
        "Thu nhận thông tin -> Lưu trữ thông tin -> Xử lí thông tin -> Truyền (xuất) thông tin",
        "Xử lí thông tin -> Thu nhận thông tin -> Lưu trữ thông tin -> Truyền thông tin",
        "Lưu trữ thông tin -> Truyền thông tin -> Xử lí thông tin -> Thu nhận thông tin"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 8): Quá trình xử lí thông tin gồm 4 bước theo trình tự: Thu nhận -> Lưu trữ -> Xử lí -> Truyền.",
      "hint": "Đầu tiên phải thu nhận, sau đó lưu trữ, xử lí rồi xuất ra."
    },
    {
      "id": "g6-b2-mcq-2",
      "type": "multiple_choice",
      "question": "Bộ phận nào của máy tính đóng vai trò là 'bộ não' trực tiếp thực hiện tính toán và xử lí thông tin?",
      "options": [
        "Bộ nhớ RAM",
        "Màn hình máy tính",
        "Ổ cứng SSD",
        "Bộ vi xử lí (CPU)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 9): CPU (Central Processing Unit) là bộ phận xử lí thông tin trung tâm của máy tính.",
      "hint": "CPU - Central Processing Unit."
    },
    {
      "id": "g6-b2-mcq-3",
      "type": "multiple_choice",
      "question": "Thiết bị nào sau đây của máy tính thuộc nhóm thiết bị 'Thu nhận thông tin' (thiết bị vào)?",
      "options": [
        "Ổ đĩa cứng, thẻ nhớ, USB",
        "Bàn phím, chuột, microphone, máy quét",
        "Màn hình, máy in, loa",
        "Bộ nguồn, quạt tản nhiệt"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Bàn phím, chuột, micro... giúp đưa dữ liệu từ bên ngoài vào máy tính.",
      "hint": "Dùng để nhập dữ liệu vào máy tính."
    },
    {
      "id": "g6-b2-mcq-4",
      "type": "multiple_choice",
      "question": "Thiết bị nào sau đây của máy tính thuộc nhóm thiết bị 'Truyền / Xuất thông tin' (thiết bị ra)?",
      "options": [
        "Màn hình, máy in, máy chiếu, loa",
        "Bàn phím, chuột, webcam",
        "Bộ vi xử lí CPU",
        "Ổ đĩa quang, ổ cứng di động"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Màn hình, máy in, loa... hiển thị hoặc phát âm thanh truyền tải thông tin ra ngoài cho con người cảm nhận.",
      "hint": "Dùng để đưa dữ liệu từ máy tính ra ngoài."
    },
    {
      "id": "g6-b2-mcq-5",
      "type": "multiple_choice",
      "question": "Khi em nghe thấy tiếng chuông đồng hồ báo thức reo và vội vàng ngồi dậy tắt chuông, cơ quan nào trong cơ thể em đã thực hiện việc 'xử lí thông tin'?",
      "options": [
        "Đôi bàn tay",
        "Đôi tai",
        "Bộ não",
        "Đôi mắt"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Đôi tai chỉ thu nhận âm thanh, bộ não xử lí hiểu rằng 'đã đến giờ dậy' và ra lệnh cho tay tắt chuông.",
      "hint": "Nơi suy nghĩ và đưa ra mệnh lệnh hành động."
    },
    {
      "id": "g6-b2-mcq-6",
      "type": "multiple_choice",
      "question": "Ưu điểm vượt trội nào của máy tính giúp con người trong việc xử lí thông tin?",
      "options": [
        "Tính toán tốc độ cực nhanh, chính xác cao, lưu trữ khổng lồ và làm việc liên tục 24/7",
        "Biết tự buồn vui và đồng cảm với hoàn cảnh của người dùng",
        "Tự giác làm bài tập mà không cần bật nguồn",
        "Không bao giờ bị hỏng hóc vật lí"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Máy tính có ưu điểm tốc độ xử lí tính bằng hàng tỉ phép tính/giây, độ chính xác cao và khả năng lưu trữ khổng lồ.",
      "hint": "Nhanh, chính xác, dung lượng lớn, bền bỉ."
    },
    {
      "id": "g6-b2-mcq-7",
      "type": "multiple_choice",
      "question": "Điểm nào sau đây con người VƯỢT TRỘI hơn máy tính trong xử lí thông tin?",
      "options": [
        "Con người tính nhẩm 10 chữ số nhanh hơn máy tính",
        "Con người nhớ được dữ liệu hàng triệu cuốn sách từng chữ một",
        "Con người không bao giờ cảm thấy mệt mỏi hay buồn ngủ",
        "Con người có tư duy sáng tạo, cảm xúc, trực giác và khả năng nhận biết đúng sai về mặt đạo đức"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 6 KNTT (Trang 10): Con người có tư duy trừu tượng, sự sáng tạo nghệ thuật và cảm xúc đạo đức mà máy tính không có.",
      "hint": "Tư duy sáng tạo, cảm xúc và đạo đức."
    },
    {
      "id": "g6-b2-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu sau về các hoạt động xử lí thông tin (SGK Tin học 6):",
      "options": [
        "a) Đôi mắt và đôi tai của con người là các bộ phận thu nhận thông tin.",
        "b) Bộ nhớ RAM và ổ cứng SSD trong máy tính có nhiệm vụ lưu trữ thông tin.",
        "c) Máy in là thiết bị thu nhận thông tin dạng hình ảnh vào máy tính.",
        "d) Máy tính có thể tự đưa ra quyết định mà không cần dựa trên chương trình do con người cài đặt."
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        false
      ],
      "difficulty": "trung_binh",
      "explanation": "a) Đúng; b) Đúng (RAM lưu tạm, SSD lưu lâu dài); c) Sai vì máy in là thiết bị xuất; d) Sai vì máy tính luôn hoạt động theo chương trình lập trình sẵn.",
      "hint": "Máy in là thiết bị ra; máy tính chỉ làm theo chương trình."
    },
    {
      "id": "g6-b2-blank-1",
      "type": "fill_blank",
      "question": "Trong máy tính, thiết bị vào thực hiện việc [1] thông tin, CPU thực hiện việc [2] thông tin và thiết bị ra thực hiện việc [3] thông tin.",
      "blankAnswers": [
        "thu nhận",
        "xử lí",
        "xuất"
      ],
      "wordBank": [
        "thu nhận",
        "xử lí",
        "xuất",
        "xóa sạch",
        "làm mát",
        "vẽ tranh"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Vào = thu nhận; CPU = xử lí; Ra = xuất thông tin.",
      "hint": "Thu nhận -> Xử lí -> Xuất."
    },
    {
      "id": "g6-b2-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi thiết bị máy tính ở Cột A với chức năng tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Bàn phím, chuột máy tính"
        },
        {
          "id": "2",
          "text": "2) Ổ cứng SSD, thẻ nhớ"
        },
        {
          "id": "3",
          "text": "3) Bộ vi xử lí CPU"
        },
        {
          "id": "4",
          "text": "4) Màn hình, loa, máy in"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Lưu trữ dữ liệu"
        },
        {
          "id": "b",
          "text": "Thu nhận thông tin vào"
        },
        {
          "id": "c",
          "text": "Xuất / Truyền thông tin ra"
        },
        {
          "id": "d",
          "text": "Xử lí thông tin trung tâm"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a",
        "3": "d",
        "4": "c"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "1-b: Chuột/phím là thu nhận; 2-a: Ổ cứng là lưu trữ; 3-d: CPU là xử lí; 4-c: Màn hình/loa là xuất.",
      "hint": "Nhập (b), Lưu (a), Xử lí (d), Xuất (c)."
    }
  ],
  "tin6-bai-3": [
    {
      "id": "g6-b3-mcq-1",
      "type": "multiple_choice",
      "question": "Đơn vị nhỏ nhất dùng để đo lượng thông tin trong máy tính là gì?",
      "options": [
        "Megabyte (MB)",
        "Bit (b)",
        "Kilobyte (KB)",
        "Byte (B)"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 12): Bit là đơn vị nhỏ nhất để đo lượng thông tin, chỉ nhận giá trị 0 hoặc 1.",
      "hint": "Đơn vị cơ bản nhất, viết tắt của Binary digit."
    },
    {
      "id": "g6-b3-mcq-2",
      "type": "multiple_choice",
      "question": "Trong máy tính, 1 Byte (B) được tạo thành từ bao nhiêu bit?",
      "options": [
        "10 bit",
        "2 bit",
        "8 bit",
        "1024 bit"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 13): 1 Byte = 8 bit.",
      "hint": "Dãy 8 bit liên tiếp ghép thành 1 Byte."
    },
    {
      "id": "g6-b3-mcq-3",
      "type": "multiple_choice",
      "question": "1 Kilobyte (KB) quy đổi ra Byte bằng bao nhiêu?",
      "options": [
        "100 Byte",
        "1024 Byte",
        "1000 Byte",
        "8 Byte"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Trong tin học: 1 KB = 1024 Byte (tương ứng 2^10).",
      "hint": "2 lũy thừa 10 bằng 1024."
    },
    {
      "id": "g6-b3-mcq-4",
      "type": "multiple_choice",
      "question": "Dãy các đơn vị đo dung lượng thông tin nào sau đây được sắp xếp theo thứ tự TĂNG DẦN đúng nhất?",
      "options": [
        "Byte -> Bit -> KB -> GB -> MB -> TB",
        "TB -> GB -> MB -> KB -> Byte -> Bit",
        "Bit -> Byte -> KB -> MB -> GB -> TB",
        "Bit -> KB -> MB -> Byte -> GB -> TB"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Thứ tự tăng dần: Bit (b) < Byte (B) < Kilobyte (KB) < Megabyte (MB) < Gigabyte (GB) < Terabyte (TB).",
      "hint": "Bit nhỏ nhất, tiếp đến Byte, KB, MB, GB, TB."
    },
    {
      "id": "g6-b3-mcq-5",
      "type": "multiple_choice",
      "question": "Một bài hát MP3 có dung lượng khoảng 4 MB. Một chiếc thẻ nhớ 8 GB có thể lưu trữ được khoảng bao nhiêu bài hát như vậy?",
      "options": [
        "Khoảng 20 bài hát",
        "Khoảng 2 bài hát",
        "Khoảng 200 bài hát",
        "Khoảng 2000 bài hát"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "8 GB = 8 x 1024 MB = 8192 MB. Số bài hát lưu được xấp xỉ: 8192 / 4 ≈ 2048 bài (khoảng 2000 bài).",
      "hint": "Đổi 8 GB ra MB rồi chia cho 4 MB."
    },
    {
      "id": "g6-b3-mcq-6",
      "type": "multiple_choice",
      "question": "Tại sao trong máy tính mọi loại thông tin (chữ viết, âm thanh, hình ảnh) đều phải chuyển đổi thành các dãy bit 0 và 1?",
      "options": [
        "Vì linh kiện điện tử trong máy tính chỉ có hai trạng thái vật lí cơ bản là có điện (bật) và không có điện (tắt)",
        "Vì máy tính không thể hiểu được ngôn ngữ tiếng Anh",
        "Vì nhà sản xuất quy định như vậy cho đẹp mắt",
        "Vì màn hình máy tính chỉ có màu đen và trắng"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "Mạch bán dẫn điện tử chỉ hoạt động trên 2 trạng thái điện áp: mức cao (bit 1) và mức thấp (bit 0).",
      "hint": "Hai trạng thái đóng và ngắt của dòng điện."
    },
    {
      "id": "g6-b3-mcq-7",
      "type": "multiple_choice",
      "question": "Một ổ cứng máy tính có dung lượng 1 TB. 1 TB tương đương với bao nhiêu Gigabyte (GB)?",
      "options": [
        "10 GB",
        "1000 GB",
        "1024 GB",
        "100 GB"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6: 1 Terabyte (TB) = 1024 Gigabyte (GB).",
      "hint": "1 TB = 1024 GB."
    },
    {
      "id": "g6-b3-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu sau về thông tin trong máy tính (SGK Tin học 6):",
      "options": [
        "a) Mọi dữ liệu lưu trong máy tính đều là các dãy bit gồm hai chữ số 0 và 1.",
        "b) 1 MB có dung lượng lớn hơn 1 GB.",
        "c) Bit là đơn vị nhỏ nhất dùng để đo dung lượng thông tin.",
        "d) 1 Byte luôn tương đương với 16 bit."
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        false
      ],
      "difficulty": "trung_binh",
      "explanation": "a) Đúng; b) Sai vì 1 GB = 1024 MB; c) Đúng; d) Sai vì 1 Byte = 8 bit.",
      "hint": "1 Byte = 8 bit; GB lớn hơn MB."
    },
    {
      "id": "g6-b3-blank-1",
      "type": "fill_blank",
      "question": "Bit chỉ nhận một trong hai kí hiệu là [1] và [2]. Một Byte gồm [3] bit ghép lại.",
      "blankAnswers": [
        "0",
        "1",
        "8"
      ],
      "wordBank": [
        "0",
        "1",
        "8",
        "16",
        "1024",
        "100"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Kí hiệu bit là 0 và 1; 1 Byte gồm 8 bit.",
      "hint": "Số 0, 1 và số 8."
    },
    {
      "id": "g6-b3-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi đơn vị đo ở Cột A với độ lớn tương đương ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) 1 Byte (B)"
        },
        {
          "id": "2",
          "text": "2) 1 Kilobyte (KB)"
        },
        {
          "id": "3",
          "text": "3) 1 Megabyte (MB)"
        },
        {
          "id": "4",
          "text": "4) 1 Gigabyte (GB)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "1024 KB"
        },
        {
          "id": "b",
          "text": "8 bit"
        },
        {
          "id": "c",
          "text": "1024 MB"
        },
        {
          "id": "d",
          "text": "1024 B"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "d",
        "3": "a",
        "4": "c"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "1-b: 1 B = 8 bit; 2-d: 1 KB = 1024 B; 3-a: 1 MB = 1024 KB; 4-c: 1 GB = 1024 MB.",
      "hint": "Nhớ công thức quy đổi sang 1024."
    }
  ],
  "tin6-bai-4": [
    {
      "id": "g6-b4-mcq-1",
      "type": "multiple_choice",
      "question": "Mạng máy tính là gì theo chương trình Tin học 6 Kết Nối Tri Thức?",
      "options": [
        "Là một nhóm các máy tính và thiết bị được kết nối với nhau để truyền thông tin và chia sẻ tài nguyên",
        "Là hệ thống các dây điện cắm vào ổ cắm trên tường",
        "Là những chiếc máy tính được đặt chung trong một căn phòng nhưng không kết nối dây hay sóng",
        "Chỉ là các máy tính xách tay dùng pin"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 17): Mạng máy tính là tập hợp các máy tính và thiết bị được kết nối để truyền thông tin cho nhau.",
      "hint": "Kết nối để truyền thông tin và dùng chung tài nguyên."
    },
    {
      "id": "g6-b4-mcq-2",
      "type": "multiple_choice",
      "question": "Các thành phần cơ bản của một mạng máy tính gồm những gì?",
      "options": [
        "Chỉ gồm máy in và màn hình",
        "Chỉ gồm dây cáp điện và bóng đèn",
        "Chỉ gồm chuột và bàn phím máy tính",
        "Các thiết bị đầu cuối, các thiết bị kết nối mạng và phần mềm mạng"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 18): Mạng máy tính gồm 3 thành phần chính: Thiết bị đầu cuối, thiết bị kết nối và phần mềm mạng.",
      "hint": "Thiết bị đầu cuối, thiết bị kết nối và phần mềm."
    },
    {
      "id": "g6-b4-mcq-3",
      "type": "multiple_choice",
      "question": "Thiết bị nào sau đây là 'thiết bị đầu cuối' trong mạng máy tính?",
      "options": [
        "Cáp xoắn mạng (Cáp mạng LAN)",
        "Máy tính để bàn, laptop, điện thoại thông minh, máy in mạng",
        "Bộ chuyển mạch (Switch)",
        "Bộ định tuyến (Router)"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Thiết bị đầu cuối là thiết bị người dùng sử dụng để gửi hoặc nhận dữ liệu (máy tính, điện thoại, máy in...).",
      "hint": "Thiết bị trực tiếp phục vụ người sử dụng gửi nhận dữ liệu."
    },
    {
      "id": "g6-b4-mcq-4",
      "type": "multiple_choice",
      "question": "Thiết bị kết nối mạng nào sau đây có chức năng kết nối nhiều máy tính lại với nhau trong mạng cục bộ bằng dây cáp?",
      "options": [
        "Chuột không dây",
        "Ổ cứng di động",
        "Màn hình máy tính",
        "Bộ chuyển mạch (Switch)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Bộ chuyển mạch Switch có nhiều cổng RJ45 dùng để cắm các đầu dây cáp mạng từ các máy tính trong phòng lại với nhau.",
      "hint": "Bộ chuyển mạch Switch kết nối cáp mạng."
    },
    {
      "id": "g6-b4-mcq-5",
      "type": "multiple_choice",
      "question": "Lợi ích lớn nhất của việc kết nối các máy tính thành mạng là gì?",
      "options": [
        "Làm cho máy tính chạy nhanh gấp 10 lần",
        "Chia sẻ dữ liệu nhanh chóng và dùng chung các thiết bị phần cứng đắt tiền (như máy in, máy quét, ổ lưu trữ)",
        "Không cần cắm điện máy tính vẫn hoạt động",
        "Máy tính không bao giờ bị nhiễm virus"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 (Trang 19): Mạng giúp người dùng chia sẻ dữ liệu, phần mềm và chia sẻ thiết bị (dùng chung máy in).",
      "hint": "Chia sẻ dữ liệu và dùng chung thiết bị ngoại vi."
    },
    {
      "id": "g6-b4-mcq-6",
      "type": "multiple_choice",
      "question": "Mạng không dây (Wireless Network) truyền thông tin giữa các thiết bị bằng phương tiện gì?",
      "options": [
        "Sóng vô tuyến (sóng Wi-Fi, Bluetooth, sóng vi ba)",
        "Dây cáp đồng trục",
        "Dây điện thoại cố định",
        "Dây cáp quang thủy tinh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Mạng không dây sử dụng sóng điện từ (sóng vô tuyến, Wi-Fi) để truyền tín hiệu mà không cần dây dẫn vật lí.",
      "hint": "Sóng vô tuyến Wi-Fi hoặc Bluetooth."
    },
    {
      "id": "g6-b4-mcq-7",
      "type": "multiple_choice",
      "question": "Phòng thực hành Tin học của trường em có 30 máy tính kết nối với 1 chiếc máy in duy nhất. Lợi ích ở đây là gì?",
      "options": [
        "Không cần mực in máy vẫn in được",
        "Chỉ để cho phòng máy trông hiện đại hơn",
        "Dùng chung thiết bị phần cứng đắt tiền, tiết kiệm chi phí mua sắm 29 chiếc máy in còn lại",
        "Làm cho máy in in nhanh gấp 30 lần"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "Chia sẻ thiết bị phần cứng qua mạng giúp tiết kiệm chi phí đầu tư mua sắm và bảo trì thiết bị.",
      "hint": "Tiết kiệm chi phí nhờ dùng chung thiết bị."
    },
    {
      "id": "g6-b4-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu sau về mạng máy tính (SGK Tin học 6):",
      "options": [
        "a) Mạng máy tính chỉ có thể kết nối được nếu sử dụng dây cáp mạng vật lí, không thể kết nối không dây.",
        "b) Điện thoại thông minh kết nối Wi-Fi cũng được coi là một thiết bị đầu cuối trong mạng.",
        "c) Bộ chuyển mạch (Switch) là một thiết bị kết nối mạng.",
        "d) Việc chia sẻ tệp tài liệu qua mạng giúp người dùng trao đổi dữ liệu nhanh chóng mà không cần sao chép qua USB."
      ],
      "trueFalseAnswers": [
        false,
        true,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "a) Sai vì mạng không dây (Wi-Fi) kết nối qua sóng; b) Đúng; c) Đúng; d) Đúng.",
      "hint": "Mạng không dây không cần dây cáp."
    },
    {
      "id": "g6-b4-blank-1",
      "type": "fill_blank",
      "question": "Mạng máy tính gồm ba thành phần: [1] đầu cuối, thiết bị [2] và phần mềm mạng. Mạng không dây kết nối bằng [3] vô tuyến.",
      "blankAnswers": [
        "thiết bị",
        "kết nối",
        "sóng"
      ],
      "wordBank": [
        "thiết bị",
        "kết nối",
        "sóng",
        "dây thừng",
        "ổ cứng",
        "pin"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Ba thành phần mạng: thiết bị đầu cuối, thiết bị kết nối, phần mềm; mạng không dây dùng sóng vô tuyến.",
      "hint": "Thiết bị; Kết nối; Sóng vô tuyến."
    },
    {
      "id": "g6-b4-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi thành phần ở Cột A với vai trò tương ứng ở Cột B trong mạng máy tính:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Máy tính, điện thoại thông minh"
        },
        {
          "id": "2",
          "text": "2) Cáp mạng LAN, sóng Wi-Fi"
        },
        {
          "id": "3",
          "text": "3) Bộ chuyển mạch Switch, Modem"
        },
        {
          "id": "4",
          "text": "4) Trình duyệt web, ứng dụng chat Zalo"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Môi trường truyền dẫn thông tin"
        },
        {
          "id": "b",
          "text": "Thiết bị đầu cuối"
        },
        {
          "id": "c",
          "text": "Phần mềm ứng dụng mạng"
        },
        {
          "id": "d",
          "text": "Thiết bị kết nối mạng"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a",
        "3": "d",
        "4": "c"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "1-b: Thiết bị đầu cuối; 2-a: Môi trường truyền dẫn; 3-d: Thiết bị kết nối; 4-c: Phần mềm mạng.",
      "hint": "Phân loại 3 thành phần chính của mạng máy tính."
    }
  ],
  "tin6-bai-5": [
    {
      "id": "g6-b5-mcq-1",
      "type": "multiple_choice",
      "question": "Internet là gì theo định nghĩa trong SGK Tin học 6 Kết Nối Tri Thức?",
      "options": [
        "Là mạng liên kết các mạng máy tính trên quy mô toàn cầu",
        "Là một mạng máy tính nội bộ trong phạm vi một trường học",
        "Là một chương trình cài đặt trên máy tính để gõ văn bản",
        "Là thiết bị cắm vào nguồn điện"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 21): Internet là mạng liên kết hàng triệu mạng máy tính trên khắp thế giới.",
      "hint": "Mạng của các mạng máy tính trên toàn cầu."
    },
    {
      "id": "g6-b5-mcq-2",
      "type": "multiple_choice",
      "question": "Ai là người sở hữu và quản lí toàn bộ mạng Internet trên thế giới?",
      "options": [
        "Công ty Microsoft",
        "Tập đoàn Google",
        "Chính phủ Hoa Kỳ",
        "Không có cá nhân hay tổ chức duy nhất nào làm chủ sở hữu Internet"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 21): Không có ai là chủ sở hữu duy nhất của Internet. Các mạng thành viên tự quản lí mạng của mình và cùng tuân thủ giao thức chung.",
      "hint": "Internet không thuộc sở hữu độc quyền của bất kì ai."
    },
    {
      "id": "g6-b5-mcq-3",
      "type": "multiple_choice",
      "question": "Lợi ích nào sau đây KHÔNG PHẢI là lợi ích chính đáng do Internet mang lại cho học sinh?",
      "options": [
        "Xem các bài giảng trực tuyến và học ngoại ngữ",
        "Chơi game thâu đêm suốt sáng bỏ bê việc học hành trên lớp",
        "Tìm kiếm tài liệu học tập và tra cứu kiến thức bổ ích",
        "Giao lưu, trò chuyện và học nhóm trực tuyến với bạn bè, thầy cô"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Nghiện game, thức thâu đêm chơi điện tử là mặt tiêu cực gây hại cho sức khỏe và học tập.",
      "hint": "Hành vi gây hại cho sức khỏe và việc học."
    },
    {
      "id": "g6-b5-mcq-4",
      "type": "multiple_choice",
      "question": "Để kết nối máy tính của gia đình em với mạng Internet, ta cần đăng kí dịch vụ thông qua đơn vị nào?",
      "options": [
        "Công ty cấp thoát nước",
        "Cửa hàng bán đồ điện tử gia dụng",
        "Nhà cung cấp dịch vụ Internet (ISP - Internet Service Provider)",
        "Nhà xuất bản sách giáo khoa"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "ISP (như VNPT, Viettel, FPT Telecom...) là nhà cung cấp đường truyền và dịch vụ Internet cho người dùng.",
      "hint": "ISP - Internet Service Provider."
    },
    {
      "id": "g6-b5-mcq-5",
      "type": "multiple_choice",
      "question": "Khái niệm 'Internet vạn vật' (IoT - Internet of Things) đề cập đến điều gì?",
      "options": [
        "Chỉ là việc mua sắm quần áo online",
        "Mạng lưới kết nối các đồ vật, thiết bị thông minh (ti vi, tủ lạnh, camera, ô tô...) với Internet để tự động trao đổi dữ liệu",
        "Chỉ là mạng kết nối giữa các máy tính để bàn cũ",
        "Mạng lưới dây cáp điện ngầm dưới biển"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "IoT là mạng lưới trong đó các đồ vật thông minh có gắn cảm biến và kết nối mạng để tự động gửi nhận dữ liệu.",
      "hint": "Đồ vật thông minh kết nối mạng Internet."
    },
    {
      "id": "g6-b5-mcq-6",
      "type": "multiple_choice",
      "question": "Một bạn học sinh dành quá nhiều thời gian (trên 6 tiếng mỗi ngày) lướt mạng xã hội mà không vận động thể thao sẽ đối mặt với nguy cơ gì?",
      "options": [
        "Có nhiều bạn bè thân thiết ngoài đời thực hơn",
        "Tăng cường thể lực và chiều cao nhanh chóng",
        "Mắc các tật khúc xạ về mắt (cận thị), béo phì, mất ngủ, trầm cảm và sa sút kết quả học tập",
        "Trở thành nhà khoa học vĩ đại"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Lạm dụng Internet gây hại thị lực, giảm vận động dẫn tới béo phì, mất ngủ và hạn chế kĩ năng giao tiếp thực tế.",
      "hint": "Ảnh hưởng xấu đến thể chất và tinh thần."
    },
    {
      "id": "g6-b5-mcq-7",
      "type": "multiple_choice",
      "question": "Đặc điểm nào sau đây là ĐÚNG về mạng Internet?",
      "options": [
        "Có phạm vi phủ sóng toàn cầu, phục vụ hàng tỉ người dùng và luôn mở rộng không ngừng",
        "Chỉ hoạt động được vào ban ngày, ban đêm hệ thống tắt hoàn toàn",
        "Chỉ có các nhà khoa học mới được phép truy cập",
        "Tất cả thông tin trên Internet đều chính xác 100% không cần kiểm chứng"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "Internet hoạt động 24/7 trên phạm vi toàn cầu; tuy nhiên thông tin trên Internet rất đa dạng, cần biết chọn lọc kiểm chứng.",
      "hint": "Phạm vi toàn cầu, hoạt động liên tục 24/7."
    },
    {
      "id": "g6-b5-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các nhận định sau về mạng Internet (SGK Tin học 6):",
      "options": [
        "a) Mạng Internet được xem là kho tri thức khổng lồ của nhân loại.",
        "b) Mọi thông tin tìm thấy trên mạng Internet đều hoàn toàn đúng sự thật và đáng tin cậy.",
        "c) Người dùng có thể học tập trực tuyến, gửi email và đọc báo trên Internet.",
        "d) Chỉ có máy vi tính mới kết nối được Internet, tivi thông minh và điện thoại thì không."
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        false
      ],
      "difficulty": "trung_binh",
      "explanation": "a) Đúng; b) Sai vì có nhiều thông tin giả mạo, sai lệch; c) Đúng; d) Sai vì smartphone, smart TV đều kết nối Internet dễ dàng.",
      "hint": "Cần cảnh giác với tin giả mạo trên mạng."
    },
    {
      "id": "g6-b5-blank-1",
      "type": "fill_blank",
      "question": "Internet là mạng liên kết các mạng máy tính trên phạm vi [1]. Để truy cập Internet, người dùng cần thông qua nhà cung cấp [2] Internet.",
      "blankAnswers": [
        "toàn cầu",
        "dịch vụ"
      ],
      "wordBank": [
        "toàn cầu",
        "dịch vụ",
        "quốc gia",
        "thiết bị",
        "điện thoại",
        "ti vi"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Internet có phạm vi toàn cầu; cần thông qua ISP (nhà cung cấp dịch vụ).",
      "hint": "Toàn cầu; Nhà cung cấp dịch vụ."
    },
    {
      "id": "g6-b5-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi ứng dụng ở Cột A với dịch vụ tương ứng trên Internet ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Gmail, Outlook"
        },
        {
          "id": "2",
          "text": "2) Google Search, Bing"
        },
        {
          "id": "3",
          "text": "3) YouTube, Zing MP3"
        },
        {
          "id": "4",
          "text": "4) Zoom, Google Meet"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Xem video và nghe nhạc giải trí"
        },
        {
          "id": "b",
          "text": "Gửi và nhận thư điện tử"
        },
        {
          "id": "c",
          "text": "Dạy và học trực tuyến qua video"
        },
        {
          "id": "d",
          "text": "Tìm kiếm và tra cứu thông tin"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "d",
        "3": "a",
        "4": "c"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "1-b: Email; 2-d: Tìm kiếm; 3-a: Giải trí đa phương tiện; 4-c: Học họp trực tuyến.",
      "hint": "Nối các phần mềm quen thuộc với mục đích sử dụng."
    }
  ],
  "tin6-bai-6": [
    {
      "id": "g6-b6-mcq-1",
      "type": "multiple_choice",
      "question": "WWW là viết tắt của cụm từ tiếng Anh nào sau đây?",
      "options": [
        "World Wide Web",
        "World Wide Word",
        "Wide Web World",
        "World Web Wide"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 24): WWW là viết tắt của World Wide Web (mạng thông tin toàn cầu).",
      "hint": "World (Thế giới) Wide (Rộng khắp) Web (Mạng lưới)."
    },
    {
      "id": "g6-b6-mcq-2",
      "type": "multiple_choice",
      "question": "Siêu văn bản (Hypertext) là gì?",
      "options": [
        "Là một văn bản rất dài có độ dài trên 1000 trang",
        "Là văn bản chỉ có chữ số mà không có chữ cái",
        "Là loại văn bản tích hợp nhiều dạng dữ liệu (chữ, hình ảnh, âm thanh, video) và chứa các liên kết đến văn bản khác",
        "Là văn bản được viết bằng chữ siêu nhân"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 24): Siêu văn bản là văn bản tích hợp đa phương tiện và chứa các liên kết trỏ tới vị trí hoặc tài liệu khác.",
      "hint": "Văn bản tích hợp đa phương tiện và có chứa liên kết (link)."
    },
    {
      "id": "g6-b6-mcq-3",
      "type": "multiple_choice",
      "question": "Phần mềm nào sau đây là 'Trình duyệt web' (Web Browser)?",
      "options": [
        "Google Chrome, Microsoft Edge, Cốc Cốc, Mozilla Firefox",
        "Microsoft Word",
        "Windows Media Player",
        "Microsoft Excel"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Google Chrome, Cốc Cốc, Edge, Firefox, Safari là các trình duyệt web dùng để mở và xem các trang web trên Internet.",
      "hint": "Phần mềm dùng để lướt web."
    },
    {
      "id": "g6-b6-mcq-4",
      "type": "multiple_choice",
      "question": "Website là gì?",
      "options": [
        "Là tên một trò chơi điện tử",
        "Là một chiếc máy tính được kết nối Internet",
        "Là một bức ảnh chụp trên mạng",
        "Là một tập hợp các trang web liên quan được tổ chức dưới một địa chỉ truy cập chung"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 25): Website là tập hợp các trang web liên quan đến nhau và có chung một địa chỉ truy cập (ví dụ: www.nxbgd.vn).",
      "hint": "Tập hợp các trang web có chung địa chỉ."
    },
    {
      "id": "g6-b6-mcq-5",
      "type": "multiple_choice",
      "question": "Trong một trang web, khi con trỏ chuột di chuyển vào một đoạn văn bản hoặc hình ảnh và chuyển từ hình mũi tên sang 'hình bàn tay trỏ ngón tay', đối tượng đó là gì?",
      "options": [
        "Một con virus máy tính",
        "Siêu liên kết (Hyperlink)",
        "Bức ảnh sắp bị xóa",
        "Đoạn văn bản bị lỗi"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Khi trỏ chuột biến thành hình bàn tay, đối tượng đó chứa siêu liên kết; bấm vào sẽ chuyển đến trang web khác.",
      "hint": "Liên kết dẫn sang trang web khác."
    },
    {
      "id": "g6-b6-mcq-6",
      "type": "multiple_choice",
      "question": "Trang đầu tiên được mở ra khi truy cập vào một địa chỉ website được gọi là gì?",
      "options": [
        "Trang phụ",
        "Trang kết thúc",
        "Trang tìm kiếm",
        "Trang chủ (Homepage)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6: Trang chủ (Homepage) là trang đầu tiên hiển thị khi truy cập vào một website.",
      "hint": "Homepage - Trang chủ của website."
    },
    {
      "id": "g6-b6-mcq-7",
      "type": "multiple_choice",
      "question": "Địa chỉ website nào sau đây có định dạng ĐÚNG chuẩn cú pháp URL?",
      "options": [
        "moet@gov@vn",
        "https://moet.gov.vn",
        "moet.gov.vn:email",
        "C:\\Thumuc\\moet.docx"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "https://moet.gov.vn là địa chỉ website chuẩn (URL) của Bộ Giáo dục và Đào tạo Việt Nam.",
      "hint": "Bắt đầu bằng giao thức https:// hoặc http://."
    },
    {
      "id": "g6-b6-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu sau về mạng WWW và website (SGK Tin học 6):",
      "options": [
        "a) Mạng WWW và mạng Internet là hai khái niệm hoàn toàn trùng nhau về mặt vật lí.",
        "b) Mỗi trang web đều có một địa chỉ truy cập duy nhất gọi là URL.",
        "c) Trình duyệt web là phần mềm dùng để xem các tài liệu siêu văn bản trên WWW.",
        "d) Siêu liên kết chỉ có thể gắn vào chữ, không thể gắn vào hình ảnh."
      ],
      "trueFalseAnswers": [
        false,
        true,
        true,
        false
      ],
      "difficulty": "trung_binh",
      "explanation": "a) Sai vì WWW là dịch vụ thông tin chạy trên hạ tầng mạng Internet; b) Đúng; c) Đúng; d) Sai vì liên kết có thể gắn vào cả hình ảnh, nút bấm...",
      "hint": "WWW là dịch vụ của Internet; liên kết gắn được vào cả ảnh."
    },
    {
      "id": "g6-b6-blank-1",
      "type": "fill_blank",
      "question": "WWW là viết tắt của [1]. Mỗi website có một trang đầu tiên xuất hiện khi truy cập gọi là [2].",
      "blankAnswers": [
        "World Wide Web",
        "trang chủ"
      ],
      "wordBank": [
        "World Wide Web",
        "trang chủ",
        "trang cuối",
        "màn hình",
        "ổ cứng",
        "chuột"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "WWW là World Wide Web; trang đầu tiên là trang chủ (Homepage).",
      "hint": "World Wide Web; Trang chủ."
    },
    {
      "id": "g6-b6-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi thuật ngữ ở Cột A với ý nghĩa tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Web Browser (Trình duyệt)"
        },
        {
          "id": "2",
          "text": "2) Hyperlink (Siêu liên kết)"
        },
        {
          "id": "3",
          "text": "3) Homepage (Trang chủ)"
        },
        {
          "id": "4",
          "text": "4) URL (Địa chỉ web)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Đường dẫn liên kết trỏ sang trang web khác"
        },
        {
          "id": "b",
          "text": "Phần mềm để xem các trang web (Chrome, Edge...)"
        },
        {
          "id": "c",
          "text": "Đoạn kí tự định danh duy nhất vị trí trang web"
        },
        {
          "id": "d",
          "text": "Trang đầu tiên mở ra khi vào một website"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a",
        "3": "d",
        "4": "c"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "1-b: Trình duyệt; 2-a: Siêu liên kết; 3-d: Trang chủ; 4-c: Địa chỉ web URL.",
      "hint": "Khái niệm cốt lõi của bài học WWW."
    }
  ],
  "tin6-bai-7": [
    {
      "id": "g6-b7-mcq-1",
      "type": "multiple_choice",
      "question": "Máy tìm kiếm (Search Engine) là gì?",
      "options": [
        "Là một công cụ trực tuyến hỗ trợ người dùng tìm kiếm thông tin trên Internet theo các từ khóa",
        "Là chiếc kính lúp dùng để soi màn hình máy tính",
        "Là một thám tử tư điều tra tội phạm trên mạng",
        "Là một chiếc máy quét (scanner) dùng để tìm kiếm tài liệu giấy bị thất lạc"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 28): Máy tìm kiếm là hệ thống phần mềm trên Internet giúp người dùng tra cứu thông tin theo từ khóa.",
      "hint": "Hệ thống tra cứu thông tin trực tuyến (như Google, Bing)."
    },
    {
      "id": "g6-b7-mcq-2",
      "type": "multiple_choice",
      "question": "Trang web nào sau đây là máy tìm kiếm phổ biến nhất hiện nay?",
      "options": [
        "www.zalo.me",
        "www.facebook.com",
        "www.google.com",
        "www.tiktok.com"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Google (www.google.com) là máy tìm kiếm phổ biến hàng đầu thế giới.",
      "hint": "Trang web bắt đầu bằng chữ cái G."
    },
    {
      "id": "g6-b7-mcq-3",
      "type": "multiple_choice",
      "question": "'Từ khóa tìm kiếm' (Keyword) là gì?",
      "options": [
        "Là một từ hoặc cụm từ ngắn gọn, cô đọng thể hiện chủ đề nội dung mà em muốn tìm kiếm",
        "Là tên của người phát minh ra mạng Internet",
        "Là mật khẩu để mở khóa máy tính của em",
        "Là chiếc chìa khóa bằng sắt để mở cửa phòng máy"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 29): Từ khóa là từ hoặc cụm từ thể hiện nội dung thông tin cần tìm.",
      "hint": "Từ hoặc cụm từ ngắn gọn chỉ đúng nội dung cần tra cứu."
    },
    {
      "id": "g6-b7-mcq-4",
      "type": "multiple_choice",
      "question": "Khi tìm kiếm trên Google, việc đặt cụm từ tìm kiếm trong dấu ngoặc kép \"...\" (ví dụ: \"Văn miếu Quốc Tử Giám\") có tác dụng gì?",
      "options": [
        "Làm cho chữ tìm kiếm đẹp hơn",
        "Làm cho kết quả tìm kiếm ít đi và không có kết quả nào",
        "Bắt buộc máy tính phải tải tệp virus về máy",
        "Yêu cầu máy tìm kiếm tìm chính xác cụm từ đó theo đúng thứ tự các từ"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 (Trang 30): Đặt trong dấu ngoặc kép giúp máy tìm kiếm trả về các trang có chứa chính xác cụm từ nguyên văn.",
      "hint": "Tìm chính xác nguyên văn cụm từ."
    },
    {
      "id": "g6-b7-mcq-5",
      "type": "multiple_choice",
      "question": "Để tìm kiếm tài liệu về 'Cách phòng chống đuối nước cho học sinh THCS', từ khóa nào sau đây là NGẮN GỌN VÀ HIỆU QUẢ NHẤT?",
      "options": [
        "Tôi muốn hỏi làm thế nào để khi đi bơi không bị chìm xuống nước",
        "\"phòng chống đuối nước\" học sinh",
        "Học sinh cấp hai và các hoạt động bơi lội trong mùa hè oi bức",
        "Nước sông hồ và biển có sâu không"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Từ khóa hiệu quả cần ngắn gọn, chứa các danh từ chính, tránh dùng từ ngữ dài dòng kể lể.",
      "hint": "Chọn từ khóa cô đọng, trọng tâm."
    },
    {
      "id": "g6-b7-mcq-6",
      "type": "multiple_choice",
      "question": "Sau khi máy tìm kiếm trả về danh sách kết quả, em nên làm gì để xác định thông tin có đáng tin cậy hay không?",
      "options": [
        "Chọn bài viết có nhiều bình luận chửi bới nhất",
        "Tin vào bất kì bài đăng nào trên diễn đàn ẩn danh",
        "Kiểm tra tác giả, nguồn gốc bài viết trên các trang web uy tín (như cổng thông tin chính phủ .gov, giáo dục .edu, báo chí chính thống)",
        "Tin ngay vào kết quả đầu tiên xuất hiện mà không cần đọc kĩ"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 6 (Trang 31): Đánh giá độ tin cậy dựa trên tác giả, cơ quan chủ quản (.gov.vn, .edu.vn), ngày cập nhật và mục đích thông tin.",
      "hint": "Kiểm tra nguồn gốc website (.gov, .edu) và tác giả uy tín."
    },
    {
      "id": "g6-b7-mcq-7",
      "type": "multiple_choice",
      "question": "Nếu muốn tìm kiếm hình ảnh minh họa về 'Cầu Rồng Đà Nẵng', sau khi gõ từ khóa trên Google em nên chọn mục nào?",
      "options": [
        "Mục 'Tin tức' (News)",
        "Mục 'Hình ảnh' (Images)",
        "Mục 'Sách' (Books)",
        "Mục 'Video'"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Google hỗ trợ bộ lọc chuyên biệt: Chọn tab Hình ảnh (Images) để chỉ hiển thị kết quả dạng ảnh.",
      "hint": "Chọn tab Hình ảnh."
    },
    {
      "id": "g6-b7-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu sau về kĩ năng tìm kiếm thông tin trên Internet (SGK Tin học 6):",
      "options": [
        "a) Đặt từ khóa trong dấu ngoặc kép giúp tìm kiếm chính xác cụm từ cần tìm.",
        "b) Mọi trang web do máy tìm kiếm trả về đều chứa thông tin chính xác tuyệt đối.",
        "c) Từ khóa càng dài dòng như một câu hỏi giao tiếp hàng ngày thì kết quả tìm kiếm càng chính xác.",
        "d) Có thể tìm kiếm thông tin bằng giọng nói trên các máy tìm kiếm hiện đại."
      ],
      "trueFalseAnswers": [
        true,
        false,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "a) Đúng; b) Sai vì có thể có tin giả; c) Sai vì từ khóa nên ngắn gọn súc tích; d) Đúng (Voice Search).",
      "hint": "Dấu ngoặc kép tìm chính xác; từ khóa nên cô đọng."
    },
    {
      "id": "g6-b7-blank-1",
      "type": "fill_blank",
      "question": "Máy tìm kiếm giúp người dùng tra cứu thông tin dựa vào các [1]. Để tìm chính xác cụm từ, ta đặt cụm từ đó trong [2].",
      "blankAnswers": [
        "từ khóa",
        "dấu ngoặc kép"
      ],
      "wordBank": [
        "từ khóa",
        "dấu ngoặc kép",
        "mật khẩu",
        "dấu phẩy",
        "bàn phím",
        "chuột"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Máy tìm kiếm dùng từ khóa; tìm chính xác dùng dấu ngoặc kép \"...\".",
      "hint": "Từ khóa; Dấu ngoặc kép."
    },
    {
      "id": "g6-b7-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi đuôi tên miền ở Cột A với loại tổ chức quản lí ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Tên miền có đuôi .gov (ví dụ: chinhphu.vn)"
        },
        {
          "id": "2",
          "text": "2) Tên miền có đuôi .edu (ví dụ: moe.edu.vn)"
        },
        {
          "id": "3",
          "text": "3) Tên miền có đuôi .com (ví dụ: google.com)"
        },
        {
          "id": "4",
          "text": "4) Tên miền có đuôi .vn"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Tổ chức giáo dục, trường học"
        },
        {
          "id": "b",
          "text": "Cơ quan chính phủ, nhà nước"
        },
        {
          "id": "c",
          "text": "Tên miền quốc gia của Việt Nam"
        },
        {
          "id": "d",
          "text": "Tổ chức, công ty thương mại"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a",
        "3": "d",
        "4": "c"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "1-b: .gov = government (chính phủ); 2-a: .edu = education (giáo dục); 3-d: .com = commercial (thương mại); 4-c: .vn = Việt Nam.",
      "hint": "gov (chính phủ), edu (giáo dục), com (thương mại), vn (Việt Nam)."
    }
  ],
  "tin6-bai-8": [
    {
      "id": "g6-b8-mcq-1",
      "type": "multiple_choice",
      "question": "Thư điện tử (Email - Electronic Mail) có ưu điểm vượt trội nào so với thư gửi qua đường bưu điện truyền thống?",
      "options": [
        "Chỉ gửi được vào ban ngày trong giờ hành chính",
        "Người nhận phải đến tận bưu điện xã để nhận",
        "Tốc độ truyền gửi tức thì (chỉ mất vài giây), chi phí rất thấp và có thể đính kèm nhiều dạng tệp (ảnh, tài liệu, video)",
        "Bắt buộc phải dán tem thư bằng giấy"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 34): Email gửi nhận gần như tức thì, tiết kiệm chi phí, không giới hạn khoảng cách và đính kèm được nhiều tệp.",
      "hint": "Gửi nhanh, tiết kiệm và đính kèm được tệp tin."
    },
    {
      "id": "g6-b8-mcq-2",
      "type": "multiple_choice",
      "question": "Cấu trúc chung của một địa chỉ thư điện tử (email) chuẩn có dạng như thế nào?",
      "options": [
        "<Tên người dùng>.<Tên miền>@email",
        "<Tên người dùng>#<Tên miền>",
        "www.<Tên người dùng>.vn",
        "<Tên người dùng>@<Tên nhà cung cấp dịch vụ>"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 35): Địa chỉ email có dạng: <tên định danh>@<tên miền máy chủ thư> (Ví dụ: nguyenvanan@gmail.com).",
      "hint": "Ngăn cách bởi kí hiệu @ (A còng)."
    },
    {
      "id": "g6-b8-mcq-3",
      "type": "multiple_choice",
      "question": "Kí hiệu bắt buộc phải có trong mọi địa chỉ thư điện tử là kí hiệu nào?",
      "options": [
        "Kí hiệu @",
        "Kí hiệu #",
        "Kí hiệu &",
        "Kí hiệu $"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Kí hiệu @ (A còng) là biểu tượng đặc trưng bắt buộc trong mọi địa chỉ email để tách tên người dùng và tên miền máy chủ.",
      "hint": "Kí hiệu A còng (@)."
    },
    {
      "id": "g6-b8-mcq-4",
      "type": "multiple_choice",
      "question": "Trong các địa chỉ sau, địa chỉ nào là một địa chỉ thư điện tử (Email) HỢP LỆ?",
      "options": [
        "hocsinh#gmail.com",
        "hocsinh lop6a@gmail com",
        "hocsinh.lop6a@gmail.com",
        "https://hocsinh.lop6a.com"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "hocsinh.lop6a@gmail.com đúng định dạng (có tên tài khoản viết liền, kí hiệu @ và tên miền gmail.com).",
      "hint": "Có kí hiệu @ và không chứa dấu cách."
    },
    {
      "id": "g6-b8-mcq-5",
      "type": "multiple_choice",
      "question": "Khi gửi email cho thầy cô hoặc bạn bè, mục 'Subject' (Chủ đề / Tiêu đề thư) có ý nghĩa gì?",
      "options": [
        "Tóm tắt ngắn gọn nội dung chính của bức thư giúp người nhận biết thư nói về việc gì",
        "Nơi gõ mật khẩu hộp thư của em",
        "Nơi nhập địa chỉ nhà riêng của người nhận",
        "Để trống không cần điền gì cả"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 (Trang 36): Tiêu đề thư (Subject) nêu tóm tắt mục đích bức thư, thể hiện sự lịch sự và giúp người nhận phân loại thư.",
      "hint": "Tóm tắt ngắn gọn nội dung bức thư."
    },
    {
      "id": "g6-b8-mcq-6",
      "type": "multiple_choice",
      "question": "Biểu tượng chiếc kẹp giấy (Paperclip) trong khung soạn thảo email dùng để làm gì?",
      "options": [
        "Kẹp bức thư lại cho khỏi bay",
        "Xóa vĩnh viễn bức thư",
        "Đổi màu chữ trong thư",
        "Đính kèm tệp tin (tệp tài liệu văn bản, bảng tính, hình ảnh...) gửi kèm bức thư"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Biểu tượng cái kẹp giấy dùng để đính kèm tệp tin (Attach files) từ máy tính gửi kèm theo email.",
      "hint": "Kẹp tệp đính kèm gửi đi."
    },
    {
      "id": "g6-b8-mcq-7",
      "type": "multiple_choice",
      "question": "Nếu nhận được một email từ người lạ có tiêu đề trúng thưởng 1 tỷ đồng và yêu cầu nhấp vào liên kết lạ hoặc cung cấp mật khẩu ngân hàng, em nên làm gì?",
      "options": [
        "Gửi liên kết đó cho tất cả bạn bè trong lớp",
        "Tuyệt đối không nhấp vào liên kết, không cung cấp thông tin và báo cho phụ huynh / thầy cô hoặc xóa thư vào thùng rác",
        "Gọi điện cho người lạ cảm ơn rối rít",
        "Lập tức nhấp vào liên kết và điền thông tin để nhận thưởng"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "Đây là thư rác lừa đảo (phishing). Tuyệt đối không bấm vào link lạ hay gửi thông tin cá nhân vì nguy cơ mất tài khoản và lừa đảo tiền bạc.",
      "hint": "Cảnh giác với thư lừa đảo trúng thưởng."
    },
    {
      "id": "g6-b8-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu sau về thư điện tử (Email) (SGK Tin học 6):",
      "options": [
        "a) Hai người có thể có cùng một địa chỉ email giống hệt nhau trên cùng một máy chủ nhà cung cấp.",
        "b) Một email có thể gửi đồng thời cho nhiều người nhận cùng lúc.",
        "c) Thư điện tử chỉ có thể đọc được trên máy vi tính để bàn, điện thoại không đọc được.",
        "d) Thư mục 'Spam' (Thư rác) là nơi chứa các email quảng cáo không mong muốn hoặc nghi ngờ lừa đảo."
      ],
      "trueFalseAnswers": [
        false,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "a) Sai vì mỗi địa chỉ email là duy nhất trên toàn cầu; b) Đúng; c) Sai vì app email trên smartphone đọc thư rất thuận tiện; d) Đúng.",
      "hint": "Mỗi địa chỉ email là duy nhất."
    },
    {
      "id": "g6-b8-blank-1",
      "type": "fill_blank",
      "question": "Địa chỉ thư điện tử gồm hai phần ngăn cách bởi kí hiệu [1]. Biểu tượng kẹp giấy dùng để [2] tệp tin vào email.",
      "blankAnswers": [
        "@",
        "đính kèm"
      ],
      "wordBank": [
        "@",
        "đính kèm",
        "#",
        "xóa bỏ",
        "in ấn",
        "làm mát"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Kí hiệu @ phân cách tên người dùng và nhà cung cấp; đính kèm tệp bằng biểu tượng kẹp giấy.",
      "hint": "Kí hiệu @; Đính kèm tệp."
    },
    {
      "id": "g6-b8-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi mục trong thư điện tử ở Cột A với chức năng tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Mục 'To' (Tới / Người nhận)"
        },
        {
          "id": "2",
          "text": "2) Mục 'Subject' (Tiêu đề)"
        },
        {
          "id": "3",
          "text": "3) Nút 'Reply' (Trả lời)"
        },
        {
          "id": "4",
          "text": "4) Nút 'Forward' (Chuyển tiếp)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Nhập địa chỉ email của người nhận thư"
        },
        {
          "id": "b",
          "text": "Chuyển bức thư đã nhận cho một người khác xem"
        },
        {
          "id": "c",
          "text": "Gõ tóm tắt nội dung chính của bức thư"
        },
        {
          "id": "d",
          "text": "Soạn thư trả lời người vừa gửi thư cho mình"
        }
      ],
      "correctMatches": {
        "1": "a",
        "2": "c",
        "3": "d",
        "4": "b"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "1-a: To là người nhận; 2-c: Subject là tiêu đề; 3-d: Reply là trả lời; 4-b: Forward là chuyển tiếp.",
      "hint": "To, Subject, Reply, Forward trong giao diện email."
    }
  ],
  "tin6-bai-9": [
    {
      "id": "g6-b9-mcq-1",
      "type": "multiple_choice",
      "question": "Virus máy tính là gì theo chương trình Tin học 6 Kết Nối Tri Thức?",
      "options": [
        "Là hạt bụi bám trên bàn phím máy tính",
        "Là vi sinh vật sinh học gây bệnh cảm cúm cho người dùng",
        "Là một loại thuốc tây chữa bệnh",
        "Là các đoạn mã / chương trình độc hại do con người cố ý tạo ra để phá hoại, đánh cắp dữ liệu hoặc làm hỏng máy tính"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 39): Virus máy tính là phần mềm độc hại có khả năng tự nhân bản và lây lan nhằm phá hoại hệ thống.",
      "hint": "Chương trình độc hại do kẻ xấu tạo ra."
    },
    {
      "id": "g6-b9-mcq-2",
      "type": "multiple_choice",
      "question": "Hành vi nào sau đây giúp em bảo vệ máy tính KHÔNG BỊ NHIỄM VIRUS?",
      "options": [
        "Cài đặt phần mềm diệt virus uy tín, bật tường lửa và không mở các tệp lạ đính kèm email không rõ nguồn gốc",
        "Nhấp vào tất cả các liên kết quảng cáo trúng thưởng trên các trang web đen",
        "Cắm mọi chiếc USB nhặt được ngoài đường vào máy tính mà không quét virus",
        "Tắt hoàn toàn phần mềm diệt virus và Windows Defender"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Cài phần mềm diệt virus có bản quyền và cẩn trọng khi mở liên kết, tải tệp từ nguồn lạ là cách bảo vệ an toàn.",
      "hint": "Cài phần mềm diệt virus và cẩn trọng khi mở tệp lạ."
    },
    {
      "id": "g6-b9-mcq-3",
      "type": "multiple_choice",
      "question": "Mật khẩu nào sau đây là 'MẬT KHẨU MẠNH' và an toàn nhất cho tài khoản cá nhân?",
      "options": [
        "TrUc@TinHoc#2026!",
        "123456",
        "abcdef",
        "nguyenvanan"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 (Trang 41): Mật khẩu mạnh có độ dài ít nhất 8 kí tự, kết hợp chữ hoa, chữ thường, chữ số và kí hiệu đặc biệt (@, #, !).",
      "hint": "Kết hợp chữ hoa, chữ thường, số và kí tự đặc biệt."
    },
    {
      "id": "g6-b9-mcq-4",
      "type": "multiple_choice",
      "question": "Thông tin nào sau đây thuộc về 'THÔNG TIN CÁ NHÂN RIÊNG TƯ' mà em tuyệt đối KHÔNG ĐƯỢC tùy tiện công khai lên mạng xã hội?",
      "options": [
        "Tên một cuốn sách em yêu thích",
        "Màu sắc trang phục mà em thích",
        "Mật khẩu tài khoản, số Căn cước công dân của bố mẹ, mã OTP ngân hàng, địa chỉ nhà riêng chính xác",
        "Tên trường học em đang học"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Mật khẩu, số CCCD, mã OTP, số điện thoại, địa chỉ nhà là thông tin nhạy cảm dễ bị kẻ xấu lợi dụng lừa đảo, trộm cắp.",
      "hint": "Mật khẩu, mã OTP và thông tin tài khoản."
    },
    {
      "id": "g6-b9-mcq-5",
      "type": "multiple_choice",
      "question": "Hiện tượng 'Bắt nạt trên mạng' (Cyberbullying) biểu hiện qua hành vi nào sau đây?",
      "options": [
        "Sử dụng tin nhắn, bình luận trên mạng xã hội để lăng mạ, đe dọa, xúc phạm danh dự hoặc chia sẻ hình ảnh chế giễu bạn bè",
        "Chia sẻ lời giải một bài tập Tin học bổ ích",
        "Gửi lời chúc mừng sinh nhật bạn trên nhóm Zalo lớp",
        "Nhắn tin hỏi thăm sức khỏe của bạn khi bạn bị ốm"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Bắt nạt qua mạng là hành vi đe dọa, làm nhục, bôi nhọ người khác thông qua các phương tiện kĩ thuật số.",
      "hint": "Lăng mạ, bôi nhọ và chế giễu bạn bè trên mạng."
    },
    {
      "id": "g6-b9-mcq-6",
      "type": "multiple_choice",
      "question": "Khi sử dụng máy tính công cộng tại quán Internet hoặc thư viện trường học, sau khi dùng xong em BẮT BUỘC phải làm gì?",
      "options": [
        "Lưu mật khẩu vào trình duyệt cho người sau dùng hộ",
        "Rút dây nguồn máy tính",
        "Chỉ cần tắt màn hình máy tính rồi ra về",
        "Đăng xuất (Log out) toàn bộ tài khoản cá nhân (email, mạng xã hội) và xóa lịch sử duyệt web nếu cần"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Đăng xuất tài khoản ngăn chặn người dùng tiếp theo trên máy tính công cộng truy cập trái phép vào dữ liệu cá nhân của em.",
      "hint": "Đăng xuất tài khoản để bảo vệ thông tin."
    },
    {
      "id": "g6-b9-mcq-7",
      "type": "multiple_choice",
      "question": "Quy tắc 'Quy tắc 5W' trong an toàn thông tin khuyên học sinh cần suy nghĩ kĩ điều gì trước khi chia sẻ một bài viết lên mạng?",
      "options": [
        "Bài viết có thể kiếm được tiền không?",
        "Bài viết do Ai viết? Nội dung là Gì? Viết Ở đâu? Khi nào? và Nhằm mục đích Tại sao?",
        "Bài viết có nhiều lượt like không?",
        "Bài viết có hình ảnh người nổi tiếng không?"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "Quy tắc 5W (Who, What, Where, When, Why) giúp kiểm chứng tính chân thực và mục đích của thông tin trước khi lan truyền.",
      "hint": "Who, What, Where, When, Why."
    },
    {
      "id": "g6-b9-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu sau về an toàn thông tin (SGK Tin học 6):",
      "options": [
        "a) Đặt ngày tháng năm sinh làm mật khẩu là rất an toàn vì mình không bao giờ quên.",
        "b) Tuyệt đối không cung cấp mã xác thực OTP hay mật khẩu cho bất kì ai, kể cả người tự xưng là công an qua điện thoại.",
        "c) Việc cài đặt phần mềm diệt virus có thể ngăn chặn hoàn toàn 100% mọi nguy cơ độc hại trong tương lai mà không cần cập nhật.",
        "d) Khi bị đe dọa hoặc quấy rối trên mạng, em nên báo ngay cho cha mẹ hoặc thầy cô giáo để được hỗ trợ kịp thời."
      ],
      "trueFalseAnswers": [
        false,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "a) Sai vì ngày sinh rất dễ đoán; b) Đúng (mã OTP tuyệt mật); c) Sai vì phần mềm diệt virus cần được cập nhật dữ liệu mẫu virus mới thường xuyên; d) Đúng.",
      "hint": "Mật khẩu ngày sinh rất yếu; báo người lớn khi bị quấy rối."
    },
    {
      "id": "g6-b9-blank-1",
      "type": "fill_blank",
      "question": "Mật khẩu mạnh nên có ít nhất [1] kí tự, bao gồm cả chữ hoa, chữ thường, [2] và kí hiệu đặc biệt.",
      "blankAnswers": [
        "8",
        "chữ số"
      ],
      "wordBank": [
        "8",
        "chữ số",
        "2",
        "hình ảnh",
        "dấu chấm",
        "màu sắc"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Mật khẩu mạnh có tối thiểu 8 kí tự, kết hợp chữ hoa, chữ thường, chữ số và kí hiệu đặc biệt.",
      "hint": "Số 8 và chữ số."
    },
    {
      "id": "g6-b9-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi nguy cơ ở Cột A với biện pháp phòng chống tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Máy tính bị nhiễm virus, mã độc"
        },
        {
          "id": "2",
          "text": "2) Bị đánh cắp tài khoản cá nhân"
        },
        {
          "id": "3",
          "text": "3) Bị lừa đảo qua mạng"
        },
        {
          "id": "4",
          "text": "4) Bị bắt nạt, đe dọa trực tuyến"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Cài phần mềm diệt virus, quét thẻ nhớ trước khi mở"
        },
        {
          "id": "b",
          "text": "Cảnh giác trước thông báo trúng thưởng, không gửi tiền cho người lạ"
        },
        {
          "id": "c",
          "text": "Đặt mật khẩu mạnh, bật xác thực 2 bước"
        },
        {
          "id": "d",
          "text": "Chặn kẻ quấy rối, tâm sự ngay với cha mẹ hoặc thầy cô"
        }
      ],
      "correctMatches": {
        "1": "a",
        "2": "c",
        "3": "b",
        "4": "d"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "1-a: Chống virus; 2-c: Bảo vệ tài khoản; 3-b: Chống lừa đảo; 4-d: Xử lí bắt nạt mạng.",
      "hint": "Biện pháp phòng ngừa an toàn mạng tương ứng."
    }
  ],
  "tin6-bai-10": [
    {
      "id": "g6-b10-mcq-1",
      "type": "multiple_choice",
      "question": "Sơ đồ tư duy (Mindmap) là gì theo chương trình Tin học 6 Kết Nối Tri Thức?",
      "options": [
        "Là một bức tranh phong cảnh trừu tượng",
        "Là một bản đồ địa lí chỉ đường đi",
        "Là phương pháp ghi chép và biểu diễn thông tin bằng hình ảnh, từ khóa và màu sắc một cách trực quan, sinh động",
        "Là sơ đồ nối các dây điện trong nhà"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 44): Sơ đồ tư duy là phương pháp trình bày thông tin trực quan bằng cách kết hợp từ khóa, hình ảnh và đường nối.",
      "hint": "Phương pháp ghi chép bằng từ khóa, hình ảnh và màu sắc."
    },
    {
      "id": "g6-b10-mcq-2",
      "type": "multiple_choice",
      "question": "Cấu trúc cơ bản của một sơ đồ tư duy gồm những thành phần nào?",
      "options": [
        "Chỉ gồm các con số cộng trừ nhân chia",
        "Chủ đề trung tâm ở giữa, các nhánh chính tỏa ra xung quanh, trên nhánh có từ khóa và hình ảnh minh họa",
        "Một bảng biểu gồm các ô vuông đen trắng",
        "Chỉ là các dòng chữ viết thẳng tắp từ trên xuống dưới"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 (Trang 45): Sơ đồ tư duy gồm chủ đề trung tâm, các nhánh chính, nhánh phụ, từ khóa và hình ảnh liên kết.",
      "hint": "Chủ đề trung tâm, các nhánh và từ khóa."
    },
    {
      "id": "g6-b10-mcq-3",
      "type": "multiple_choice",
      "question": "Lợi ích lớn nhất của việc sử dụng sơ đồ tư duy trong học tập là gì?",
      "options": [
        "Thay thế hoàn toàn việc nghe giảng của thầy cô",
        "Làm cho bài học trở nên dài dòng và khó hiểu hơn",
        "Giúp não bộ dễ dàng ghi nhớ, tổng hợp kiến thức toàn diện và kích thích tư duy sáng tạo",
        "Giúp tiết kiệm mực bút và giấy vẽ"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Sơ đồ tư duy tận dụng cả hai bán cầu não (ngôn ngữ và hình ảnh), giúp ghi nhớ sâu và phát huy khả năng sáng tạo.",
      "hint": "Giúp ghi nhớ tốt hơn và phát triển tư duy sáng tạo."
    },
    {
      "id": "g6-b10-mcq-4",
      "type": "multiple_choice",
      "question": "Chuyên gia giáo dục người Anh nào được coi là người phát minh và phổ biến phương pháp Sơ đồ tư duy trên toàn cầu?",
      "options": [
        "Bill Gates",
        "Charles Babbage",
        "Blaise Pascal",
        "Tony Buzan"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Tony Buzan (1942 - 2019) là tác giả phát minh ra phương pháp Sơ đồ tư duy (Mind Map) nổi tiếng thế giới.",
      "hint": "Tony Buzan - bậc thầy về trí nhớ và não bộ."
    },
    {
      "id": "g6-b10-mcq-5",
      "type": "multiple_choice",
      "question": "Khi vẽ sơ đồ tư duy, việc sử dụng các 'Từ khóa' (Keywords) thay vì viết cả câu văn dài có tác dụng gì?",
      "options": [
        "Giúp sơ đồ ngắn gọn, làm nổi bật ý cốt lõi và não bộ tiếp thu nhanh hơn",
        "Để tiết kiệm diện tích giấy",
        "Làm cho người khác không đọc được",
        "Vì phần mềm không cho phép gõ nhiều chữ"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Từ khóa cô đọng thông tin, kích thích não bộ liên tưởng và ghi nhớ mạch lạc hơn câu văn dài dòng.",
      "hint": "Từ khóa ngắn gọn làm nổi bật ý cốt lõi."
    },
    {
      "id": "g6-b10-mcq-6",
      "type": "multiple_choice",
      "question": "Phần mềm nào sau đây là phần mềm chuyên dụng hỗ trợ vẽ sơ đồ tư duy trên máy tính?",
      "options": [
        "Unikey",
        "Calculator",
        "XMind, MindMeister, Coggle",
        "Microsoft Excel"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "XMind, MindMeister, Coggle, iMindMap là các phần mềm vẽ sơ đồ tư duy chuyên nghiệp rất phổ biến.",
      "hint": "XMind, MindMeister."
    },
    {
      "id": "g6-b10-mcq-7",
      "type": "multiple_choice",
      "question": "Thứ tự các bước ĐÚNG để vẽ một sơ đồ tư duy hoàn chỉnh là gì?",
      "options": [
        "Bước 1: Vẽ chủ đề trung tâm -> Bước 2: Vẽ các nhánh chính -> Bước 3: Phát triển các nhánh phụ -> Bước 4: Thêm từ khóa, hình ảnh và màu sắc",
        "Bước 1: Tô kín màu bức tranh -> Bước 2: Viết một đoạn văn dài",
        "Bước 1: Vẽ nhánh phụ trước -> Bước 2: Vẽ nhánh chính -> Bước 3: Vẽ chủ đề trung tâm",
        "Bước 1: Vẽ khung viền -> Bước 2: Xóa hết các nhánh"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 6 (Trang 46): Vẽ từ trung tâm tỏa ra các nhánh chính, rồi đến nhánh phụ và hoàn thiện bằng màu sắc/hình ảnh.",
      "hint": "Từ trung tâm tỏa ra các nhánh chính và nhánh phụ."
    },
    {
      "id": "g6-b10-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu sau về Sơ đồ tư duy (SGK Tin học 6):",
      "options": [
        "a) Trên sơ đồ tư duy, chỉ nên sử dụng một màu mực đen duy nhất để không gây rối mắt.",
        "b) Chủ đề trung tâm của sơ đồ tư duy luôn được đặt ở chính giữa trang giấy hoặc màn hình.",
        "c) Có thể sử dụng sơ đồ tư duy để lập kế hoạch ôn thi, tóm tắt bài học hay chuẩn bị buổi dã ngoại.",
        "d) Sơ đồ tư duy chỉ vẽ được bằng tay trên giấy, máy tính không thể tạo được."
      ],
      "trueFalseAnswers": [
        false,
        true,
        true,
        false
      ],
      "difficulty": "trung_binh",
      "explanation": "a) Sai vì cần phối màu đa dạng để kích thích não bộ; b) Đúng; c) Đúng; d) Sai vì có nhiều phần mềm tạo sơ đồ tư duy rất đẹp trên máy tính.",
      "hint": "Nên dùng nhiều màu sắc; máy tính vẽ sơ đồ tư duy rất tốt."
    },
    {
      "id": "g6-b10-blank-1",
      "type": "fill_blank",
      "question": "Sơ đồ tư duy bắt đầu từ [1] ở chính giữa, từ đó phát triển ra các [2] và nhánh phụ có gắn từ khóa.",
      "blankAnswers": [
        "chủ đề trung tâm",
        "nhánh chính"
      ],
      "wordBank": [
        "chủ đề trung tâm",
        "nhánh chính",
        "bảng cửu chương",
        "màn hình",
        "con chuột",
        "bàn phím"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Cấu trúc sơ đồ tư duy: Chủ đề trung tâm ở giữa tỏa ra các nhánh chính.",
      "hint": "Chủ đề trung tâm; Nhánh chính."
    },
    {
      "id": "g6-b10-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi yếu tố của sơ đồ tư duy ở Cột A với vai trò tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Hình vẽ ở chính giữa trang"
        },
        {
          "id": "2",
          "text": "2) Các nhánh dày nối từ trung tâm"
        },
        {
          "id": "3",
          "text": "3) Các nhánh nhỏ phân nhánh từ nhánh dày"
        },
        {
          "id": "4",
          "text": "4) Màu sắc và biểu tượng icon"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Nhánh phụ (chi tiết hóa ý tưởng)"
        },
        {
          "id": "b",
          "text": "Chủ đề trung tâm (ý chính cốt lõi)"
        },
        {
          "id": "c",
          "text": "Kích thích thị giác và não bộ ghi nhớ"
        },
        {
          "id": "d",
          "text": "Nhánh chính (các khía cạnh lớn của chủ đề)"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "d",
        "3": "a",
        "4": "c"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "1-b: Trung tâm; 2-d: Nhánh chính; 3-a: Nhánh phụ; 4-c: Màu sắc/icon kích thích thị giác.",
      "hint": "Cấu trúc phân cấp của sơ đồ tư duy."
    }
  ],
  "tin6-bai-11": [
    {
      "id": "tin6-b11-q1",
      "type": "multiple_choice",
      "question": "Mục đích chính của việc định dạng văn bản trong phần mềm soạn thảo là gì?",
      "options": [
        "Tự động dịch văn bản sang nhiều ngôn ngữ khác nhau",
        "Mã hóa văn bản để người khác không đọc được",
        "Làm tăng dung lượng tệp tin trên máy tính",
        "Văn bản đẹp mắt, rõ ràng, dễ đọc và nhấn mạnh nội dung quan trọng"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 48): Định dạng văn bản giúp văn bản rõ ràng, đẹp mắt, dễ đọc và làm nổi bật các phần nội dung quan trọng.",
      "hint": "Giúp người xem dễ theo dõi và nắm bắt thông tin nhanh chóng."
    },
    {
      "id": "tin6-b11-q2",
      "type": "multiple_choice",
      "question": "Định dạng kí tự KHÔNG bao gồm thuộc tính nào sau đây?",
      "options": [
        "Kiểu chữ (đậm, nghiêng, gạch chân) và màu chữ",
        "Khoảng cách giữa các đoạn văn (Paragraph spacing)",
        "Màu sắc của chữ (Font color)",
        "Phông chữ (Font) và cỡ chữ (Size)"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 49): Khoảng cách giữa các đoạn văn thuộc định dạng đoạn văn bản, không phải định dạng kí tự.",
      "hint": "Khoảng cách giữa các dòng và các đoạn là định dạng đoạn."
    },
    {
      "id": "tin6-b11-q3",
      "type": "multiple_choice",
      "question": "Để căn đều cả hai lề (Justify) cho một đoạn văn bản, em sử dụng tổ hợp phím tắt nào?",
      "options": [
        "Ctrl + R",
        "Ctrl + E",
        "Ctrl + L",
        "Ctrl + J"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 50): Phím tắt căn đều hai lề là Ctrl + J (Justify). Ctrl + L là căn trái, Ctrl + R căn phải, Ctrl + E căn giữa.",
      "hint": "Justify bắt đầu bằng chữ J."
    },
    {
      "id": "tin6-b11-q4",
      "type": "multiple_choice",
      "question": "Để định dạng khoảng cách thụt lề đầu dòng cho dòng đầu tiên của đoạn văn, ta chỉnh thuộc tính nào trong hộp thoại Paragraph?",
      "options": [
        "Before / After spacing",
        "First line trong mục Special",
        "Line Spacing",
        "Hanging trong mục Special"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "SGK Tin học 6 KNTT (Trang 51): Trong hộp thoại Paragraph, tại mục Special ta chọn First line để tự động thụt lề dòng đầu tiên.",
      "hint": "Dòng đầu tiên là First line."
    },
    {
      "id": "tin6-b11-q5",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về định dạng trang và định dạng đoạn văn:",
      "options": [
        "a) Căn lề trái (Align Left) là căn lề mặc định của văn bản tiếng Việt",
        "b) Định dạng văn bản làm thay đổi ý nghĩa nội dung của các từ trong văn bản",
        "c) Hướng trang giấy chỉ có thể là hướng đứng (Portrait) hoặc hướng ngang (Landscape)",
        "d) Khoảng cách dòng (Line spacing) là khoảng cách giữa lề trang giấy với mép giấy"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        false
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT: Định dạng chỉ thay đổi hình thức trình bày chứ không thay đổi nội dung từ ngữ. Line spacing là khoảng cách giữa các dòng trong đoạn.",
      "hint": "Định dạng chỉ thay đổi giao diện, không đổi nội dung."
    },
    {
      "id": "tin6-b11-q6",
      "type": "fill_blank",
      "question": "Để thay đổi hướng trang giấy, trong dải lệnh Layout em chọn nút lệnh [1], còn để chỉnh kích thước lề giấy em chọn nút lệnh [2].",
      "blankAnswers": [
        "Orientation",
        "Margins"
      ],
      "wordBank": [
        "Orientation",
        "Margins",
        "Size",
        "Columns",
        "Font",
        "Paragraph"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 52): Trong tab Layout, Orientation dùng để đổi hướng trang giấy (đứng/ngang), Margins dùng để đặt lề giấy.",
      "hint": "Orientation là hướng trang, Margins là căn lề."
    },
    {
      "id": "tin6-b11-q7",
      "type": "matching",
      "question": "Nối nút lệnh định dạng kí tự ở cột bên trái với tác dụng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Nút B (Bold)"
        },
        {
          "id": "2",
          "text": "Nút I (Italic)"
        },
        {
          "id": "3",
          "text": "Nút U (Underline)"
        },
        {
          "id": "4",
          "text": "Nút Font Color (chữ A có vạch màu)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Chọn màu sắc cho chữ"
        },
        {
          "id": "b",
          "text": "Tạo kiểu chữ in nghiêng"
        },
        {
          "id": "c",
          "text": "Tạo kiểu chữ in đậm"
        },
        {
          "id": "d",
          "text": "Tạo đường gạch chân dưới chữ"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "b",
        "3": "d",
        "4": "a"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 49): B: Bold (đậm), I: Italic (nghiêng), U: Underline (gạch chân), Font Color: màu chữ.",
      "hint": "Quan sát chữ cái biểu tượng trên dải lệnh Home."
    },
    {
      "id": "tin6-b11-q8",
      "type": "multiple_choice",
      "question": "Khi soạn thảo văn bản, em nên thực hiện định dạng văn bản vào thời điểm nào là hợp lí nhất?",
      "options": [
        "Gõ xong toàn bộ nội dung thô rồi mới tiến hành định dạng tổng thể",
        "Chỉ định dạng trang in sau khi đã in ra giấy",
        "Trước khi gõ văn bản phải chỉnh màu chữ từng câu một",
        "Vừa gõ từng từ vừa định dạng phông chữ ngay"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 53): Quy trình soạn thảo khoa học là gõ đầy đủ nội dung thô trước, sau đó chỉnh sửa và định dạng toàn bộ văn bản để tiết kiệm thời gian.",
      "hint": "Hoàn thành nội dung thô trước khi trau chuốt hình thức."
    },
    {
      "id": "tin6-b11-q9",
      "type": "multiple_choice",
      "question": "Bốn lề cơ bản của một trang văn bản bao gồm những lề nào?",
      "options": [
        "Lề dòng đầu, lề dòng cuối, lề trái, lề phải",
        "Lề ngang, lề dọc, lề chéo, lề nghiêng",
        "Lề trên (Top), lề dưới (Bottom), lề trái (Left), lề phải (Right)",
        "Lề trước, lề sau, lề giữa, lề viền"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 52): Các lề của trang văn bản gồm: lề trên (Top), lề dưới (Bottom), lề trái (Left) và lề phải (Right).",
      "hint": "Bốn phía của một tờ giấy hình chữ nhật."
    },
    {
      "id": "tin6-b11-q10",
      "type": "multiple_choice",
      "question": "Trong phần mềm soạn thảo văn bản, thao tác nào giúp sao chép nhanh định dạng từ một đoạn văn bản có sẵn sang đoạn văn bản khác?",
      "options": [
        "Sử dụng công cụ Format Painter (hình cây chổi)",
        "Nhấn tổ hợp phím Ctrl + C rồi Ctrl + V",
        "Sử dụng nút lệnh Clear All Formatting",
        "Nhấn phím F4 liên tục"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 6 KNTT: Nút lệnh Format Painter (biểu tượng chổi quét sơn) cho phép sao chép nhanh toàn bộ thuộc tính định dạng của văn bản.",
      "hint": "Biểu tượng chiếc chổi quét sơn trên thanh công cụ Home."
    }
  ],
  "tin6-bai-12": [
    {
      "id": "tin6-b12-q1",
      "type": "multiple_choice",
      "question": "Bảng (Table) trong văn bản được tạo nên từ sự giao nhau của các yếu tố nào?",
      "options": [
        "Các ô (Cells) và các hình vẽ (Shapes)",
        "Các tiêu đề và các trang văn bản",
        "Các đoạn văn và các hình ảnh",
        "Các hàng (Rows) và các cột (Columns)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 54): Bảng được cấu tạo bởi các hàng và các cột. Vùng giao nhau giữa một hàng và một cột được gọi là ô (cell).",
      "hint": "Hàng ngang kết hợp cột dọc tạo thành ô."
    },
    {
      "id": "tin6-b12-q2",
      "type": "multiple_choice",
      "question": "Để chèn một bảng biểu vào văn bản trong Word, ta vào dải lệnh nào?",
      "options": [
        "Dải lệnh Layout, chọn Margins",
        "Dải lệnh Insert, chọn Table",
        "Dải lệnh View, chọn Gridlines",
        "Dải lệnh Home, chọn Paragraph"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 54): Để chèn bảng, nháy chọn dải lệnh Insert -> chọn nhóm nút lệnh Table.",
      "hint": "Insert có nghĩa là chèn thêm đối tượng vào văn bản."
    },
    {
      "id": "tin6-b12-q3",
      "type": "multiple_choice",
      "question": "Khi muốn gộp nhiều ô liền kề nhau trong bảng thành một ô duy nhất, ta dùng lệnh nào trong dải lệnh ngữ cảnh Table Layout?",
      "options": [
        "Insert Above",
        "Split Cells",
        "Merge Cells",
        "Delete Cells"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 56): Lệnh Merge Cells dùng để gộp nhiều ô thành một ô. Lệnh Split Cells dùng để tách một ô thành nhiều ô.",
      "hint": "Merge có nghĩa là hòa vào, gộp lại."
    },
    {
      "id": "tin6-b12-q4",
      "type": "multiple_choice",
      "question": "Để xóa hẳn một cột khỏi bảng biểu, thao tác chuẩn là gì?",
      "options": [
        "Chọn cột và nhấn phím Backspace một lần",
        "Chọn cột cần xóa, vào Table Layout -> Delete -> Delete Columns",
        "Kéo co hẹp độ rộng cột về 0",
        "Chọn cột và nhấn phím Delete trên bàn phím"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 56): Nhấn Delete chỉ xóa nội dung trong ô chứ không xóa cấu trúc cột. Muốn xóa cột phải chọn Delete -> Delete Columns.",
      "hint": "Phím Delete thông thường chỉ xóa chữ bên trong."
    },
    {
      "id": "tin6-b12-q5",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về việc sử dụng bảng biểu trong văn bản:",
      "options": [
        "a) Trình bày dữ liệu dạng bảng giúp thông tin cô đọng, dễ so sánh và đối chiếu",
        "b) Mỗi ô trong bảng chỉ có thể chứa văn bản ngắn, không thể chèn được hình ảnh",
        "c) Có thể thay đổi linh hoạt độ rộng của cột và chiều cao của hàng",
        "d) Ta có thể căn lề (trái, phải, giữa) cho dữ liệu trong từng ô của bảng"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT: Trong ô của bảng, ta hoàn toàn có thể chèn văn bản, số liệu và cả hình ảnh minh họa.",
      "hint": "Ô bảng có thể chứa cả hình ảnh minh họa."
    },
    {
      "id": "tin6-b12-q6",
      "type": "fill_blank",
      "question": "Để chèn thêm một hàng mới phía trên hàng đang chọn, ta dùng lệnh [1], còn để chèn một cột sang bên phải cột đang chọn, ta dùng lệnh [2].",
      "blankAnswers": [
        "Insert Above",
        "Insert Right"
      ],
      "wordBank": [
        "Insert Above",
        "Insert Right",
        "Insert Below",
        "Insert Left",
        "Merge Cells",
        "Delete Cells"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 56): Insert Above (chèn hàng phía trên), Insert Right (chèn cột bên phải).",
      "hint": "Above = phía trên, Right = bên phải."
    },
    {
      "id": "tin6-b12-q7",
      "type": "matching",
      "question": "Nối thao tác quản lí bảng biểu ở cột bên trái với tác dụng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Split Cells"
        },
        {
          "id": "2",
          "text": "Merge Cells"
        },
        {
          "id": "3",
          "text": "Delete Rows"
        },
        {
          "id": "4",
          "text": "Distribute Columns Evenly"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Xóa các hàng đang được chọn"
        },
        {
          "id": "b",
          "text": "Tách một ô thành nhiều ô nhỏ hơn"
        },
        {
          "id": "c",
          "text": "Chia đều độ rộng cho các cột đang chọn"
        },
        {
          "id": "d",
          "text": "Gộp nhiều ô thành một ô lớn"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "d",
        "3": "a",
        "4": "c"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 56): Split: chia tách, Merge: gộp ô, Delete Rows: xóa hàng, Distribute: phân bổ đều kích thước.",
      "hint": "Split là chia tách, Merge là gộp lại."
    },
    {
      "id": "tin6-b12-q8",
      "type": "multiple_choice",
      "question": "Muốn di chuyển con trỏ soạn thảo sang ô tiếp theo bên phải trong cùng một hàng của bảng, em nhấn phím nào?",
      "options": [
        "Phím Enter",
        "Phím Shift",
        "Phím Tab",
        "Phím Space"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 55): Trong bảng, phím Tab dùng để di chuyển con trỏ sang ô kế tiếp bên phải. Khi ở ô cuối cùng của bảng, phím Tab sẽ tự động tạo thêm một hàng mới.",
      "hint": "Phím Tab nằm phía trên phím Caps Lock."
    },
    {
      "id": "tin6-b12-q9",
      "type": "multiple_choice",
      "question": "Dữ liệu nào sau đây PHÙ HỢP NHẤT để trình bày ở dạng bảng biểu?",
      "options": [
        "Một đoạn văn miêu tả phong cảnh mùa thu",
        "Một bức thư cảm ơn gửi thầy cô",
        "Một bài thơ lục bát dài bốn khổ",
        "Thời khóa biểu các ngày trong tuần của lớp"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 54): Các thông tin có tính so sánh, đối chiếu, gồm nhiều danh mục lặp lại như Thời khóa biểu, Bảng điểm... phù hợp nhất để trình bày bằng bảng.",
      "hint": "Thời khóa biểu có các ngày (thứ) và các tiết học."
    },
    {
      "id": "tin6-b12-q10",
      "type": "multiple_choice",
      "question": "Để trang trí đường viền (Border) và màu nền (Shading) cho bảng, ta chọn thẻ ngữ cảnh nào khi nhấp vào bảng?",
      "options": [
        "Table Design",
        "References",
        "Review",
        "Table Layout"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 6 KNTT (Trang 57): Thẻ ngữ cảnh Table Design chứa các công cụ thiết kế phong cách bảng, đường viền (Borders) và màu tô nền (Shading).",
      "hint": "Design liên quan đến thiết kế, trang trí màu sắc viền bảng."
    }
  ],
  "tin6-bai-13": [
    {
      "id": "tin6-b13-q1",
      "type": "multiple_choice",
      "question": "Mục tiêu chính của dự án thực hành \"Hoàn thiện sổ lưu niệm\" trong môn Tin học 6 là gì?",
      "options": [
        "Học cách lập trình trò chơi điện tử phức tạp",
        "Cài đặt lại hệ điều hành cho máy tính trường học",
        "Vận dụng tổng hợp kĩ năng soạn thảo, chèn bảng, chèn hình ảnh và định dạng văn bản",
        "Học cách gửi email hàng loạt cho các doanh nghiệp"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 58): Dự án sổ lưu niệm giúp học sinh kết hợp tổng hợp kiến thức đã học: định dạng văn bản, chèn ảnh, bảng biểu để tạo sản phẩm thực tế.",
      "hint": "Áp dụng tổng hợp các kĩ năng soạn thảo văn bản đã học."
    },
    {
      "id": "tin6-b13-q2",
      "type": "multiple_choice",
      "question": "Để chèn một hình ảnh chụp hoạt động của lớp vào trang văn bản, ta chọn lệnh nào?",
      "options": [
        "Insert -> Pictures",
        "Layout -> Orientation",
        "Home -> Font Color",
        "View -> Zoom"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 59): Để chèn ảnh từ máy tính, ta vào dải lệnh Insert -> chọn Pictures (This Device).",
      "hint": "Pictures có nghĩa là hình ảnh."
    },
    {
      "id": "tin6-b13-q3",
      "type": "multiple_choice",
      "question": "Khi chèn ảnh vào văn bản, để hình ảnh có thể di chuyển tự do và văn bản bao quanh theo dạng vuông, em chọn chế độ Wrap Text nào?",
      "options": [
        "Behind Text",
        "Top and Bottom",
        "In Line with Text",
        "Square"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 60): Chế độ Square cho phép văn bản bao quanh bức ảnh theo một khung hình chữ nhật vuông vắn, dễ di chuyển trên trang.",
      "hint": "Square là hình vuông."
    },
    {
      "id": "tin6-b13-q4",
      "type": "multiple_choice",
      "question": "Để thu nhỏ hoặc phóng to một bức ảnh mà KHÔNG làm méo tỉ lệ khung hình, em nên kéo chuột tại vị trí nào?",
      "options": [
        "Bất kì điểm nào bên trong lòng bức ảnh",
        "Một trong bốn nút tròn ở bốn góc của bức ảnh",
        "Nút vuông ở cạnh giữa phía trên của bức ảnh",
        "Nút vuông ở cạnh giữa bên phải của bức ảnh"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 60): Kéo tại các góc giữ nguyên tỉ lệ chiều dài và chiều rộng, tránh làm bức ảnh bị méo mó, biến dạng.",
      "hint": "Kéo chuột tại 4 góc của ảnh."
    },
    {
      "id": "tin6-b13-q5",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về thiết kế và hoàn thiện cuốn sổ lưu niệm:",
      "options": [
        "a) Cần chọn lọc hình ảnh rõ nét, phù hợp với nội dung trang viết",
        "b) Nên sử dụng càng nhiều phông chữ và màu sắc sặc sỡ trong một trang càng tốt",
        "c) Có thể sử dụng bảng để tạo sơ đồ danh sách các thành viên trong tổ",
        "d) Trước khi in ấn hoặc nộp bài, nên xem lại tổng thể ở chế độ Print Preview"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT: Không nên dùng quá nhiều phông chữ (tối đa 2-3 phông) và màu sắc lòe loẹt vì sẽ làm trang sách rối mắt, khó đọc.",
      "hint": "Tính thẩm mĩ đòi hỏi sự hài hòa, không lạm dụng quá nhiều kiểu chữ."
    },
    {
      "id": "tin6-b13-q6",
      "type": "fill_blank",
      "question": "Để đánh số trang tự động cho cuốn sổ lưu niệm, trong dải lệnh Insert ta chọn công cụ [1], còn để tạo tiêu đề đầu trang cố định ta chọn [2].",
      "blankAnswers": [
        "Page Number",
        "Header"
      ],
      "wordBank": [
        "Page Number",
        "Header",
        "Footer",
        "WordArt",
        "Drop Cap",
        "Table"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT: Page Number dùng đánh số trang, Header tạo phần đầu trang hiển thị trên mọi trang văn bản.",
      "hint": "Page Number: số trang, Header: đầu trang."
    },
    {
      "id": "tin6-b13-q7",
      "type": "matching",
      "question": "Nối chế độ bố trí ảnh (Wrap Text) ở cột bên trái với cách hiển thị tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "In Line with Text"
        },
        {
          "id": "2",
          "text": "Behind Text"
        },
        {
          "id": "3",
          "text": "In Front of Text"
        },
        {
          "id": "4",
          "text": "Square"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Bức ảnh chìm xuống dưới, văn bản nổi lên trên ảnh"
        },
        {
          "id": "b",
          "text": "Ảnh nằm đè lên trên, che khuất một phần văn bản"
        },
        {
          "id": "c",
          "text": "Ảnh được coi như một kí tự lớn nằm cùng dòng văn bản"
        },
        {
          "id": "d",
          "text": "Văn bản bao bọc vuông vức xung quanh bức ảnh"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "a",
        "3": "b",
        "4": "d"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 60): In Line: cùng dòng; Behind: ảnh làm nền chìm; In Front: ảnh đè lên chữ; Square: chữ bao quanh.",
      "hint": "Behind = phía sau/dưới, In Front = phía trước/trên."
    },
    {
      "id": "tin6-b13-q8",
      "type": "multiple_choice",
      "question": "Khi tạo chữ nghệ thuật làm tiêu đề cho bìa sổ lưu niệm, ta sử dụng công cụ nào trong dải lệnh Insert?",
      "options": [
        "SmartArt",
        "Shapes",
        "ClipArt",
        "WordArt (chữ A nghiêng cách điệu)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 61): Công cụ WordArt giúp tạo các dòng chữ uốn lượn, có hiệu ứng đổ bóng, nổi bật làm tiêu đề trang.",
      "hint": "WordArt là nghệ thuật chữ trong bộ Office."
    },
    {
      "id": "tin6-b13-q9",
      "type": "multiple_choice",
      "question": "Thao tác nào sau đây giúp xoay một bức ảnh theo một góc tùy ý?",
      "options": [
        "Nhấn đúp chuột vào giữa bức ảnh",
        "Nhấp chuột vào nút mũi tên tròn xoay phía trên bức ảnh và kéo rê chuột",
        "Kéo chuột sang góc dưới bên phải",
        "Nhấn tổ hợp phím Ctrl + R"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT: Khi chọn ảnh, một nút tròn hình mũi tên xoay xuất hiện ở đỉnh, kéo nút này để xoay ảnh theo góc mong muốn.",
      "hint": "Nút có biểu tượng mũi tên uốn vòng tròn."
    },
    {
      "id": "tin6-b13-q10",
      "type": "multiple_choice",
      "question": "Để xuất tệp sổ lưu niệm sang định dạng tài liệu không bị biến dạng phông chữ khi xem trên máy tính khác, ta nên lưu dưới dạng đuôi tệp nào?",
      "options": [
        ".pdf",
        ".bat",
        ".bmp",
        ".txt"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 6 KNTT: Định dạng PDF (Portable Document Format) giữ nguyên toàn bộ định dạng, phông chữ và hình ảnh trên mọi thiết bị.",
      "hint": "Định dạng tài liệu phổ biến để đọc trên mọi hệ điều hành."
    }
  ],
  "tin6-bai-14": [
    {
      "id": "tin6-b14-q1",
      "type": "multiple_choice",
      "question": "Theo định nghĩa trong SGK Tin học 6, thuật toán (Algorithm) là gì?",
      "options": [
        "Bản danh sách ghi lại mật khẩu đăng nhập của các tài khoản mạng xã hội",
        "Một trò chơi giải trí được cài đặt sẵn trên hệ điều hành Windows",
        "Dãy các thao tác rõ ràng được sắp xếp theo một trình tự xác định để giải quyết một bài toán hay công việc",
        "Một đoạn văn bản dài miêu tả các thành phần cấu tạo phần cứng của máy tính"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 64): Thuật toán là một dãy các chỉ dẫn rõ ràng, có trình tự cụ thể, nếu thực hiện đúng tuần tự đó thì từ đầu vào sẽ thu được kết quả mong muốn.",
      "hint": "Các bước thực hiện theo thứ tự nhất định để giải quyết công việc."
    },
    {
      "id": "tin6-b14-q2",
      "type": "multiple_choice",
      "question": "Hai cách thông dụng nhất để mô tả thuật toán cho con người hiểu là gì?",
      "options": [
        "Liệt kê từng bước (bằng ngôn ngữ tự nhiên) và dùng sơ đồ khối (Flowchart)",
        "Dùng máy ảnh chụp lại và thu âm giọng nói",
        "Viết bài văn tự sự và vẽ tranh biếm họa",
        "Dùng bảng tính Excel và gửi email"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 65): Hai cách biểu diễn thuật toán cơ bản là: 1) Liệt kê các bước bằng lời; 2) Sử dụng sơ đồ khối.",
      "hint": "Liệt kê bằng lời và vẽ sơ đồ khối."
    },
    {
      "id": "tin6-b14-q3",
      "type": "multiple_choice",
      "question": "Trong sơ đồ khối thuật toán, hình thoi (Rhombus) được sử dụng để thể hiện điều gì?",
      "options": [
        "Thao tác nhập dữ liệu hoặc xuất kết quả",
        "Các bước xử lí, tính toán",
        "Bắt đầu hoặc kết thúc thuật toán",
        "Thao tác kiểm tra điều kiện (rẽ nhánh)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 66): Trong sơ đồ khối, hình thoi biểu diễn thao tác kiểm tra điều kiện; tùy theo điều kiện Đúng hay Sai mà rẽ theo hai hướng khác nhau.",
      "hint": "Hình thoi dùng để hỏi điều kiện đúng hay sai."
    },
    {
      "id": "tin6-b14-q4",
      "type": "multiple_choice",
      "question": "Trong sơ đồ khối thuật toán, hình chữ nhật dùng để biểu thị thao tác nào?",
      "options": [
        "Chỉ dẫn hướng đi của luồng thực hiện",
        "Thực hiện một phép tính hoặc thao tác xử lí",
        "Kiểm tra một điều kiện logic",
        "Điểm bắt đầu hoặc kết thúc của thuật toán"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 66): Hình chữ nhật biểu thị thao tác xử lí (tính toán, gán giá trị, hành động cụ thể).",
      "hint": "Hành động cụ thể được đặt trong hình chữ nhật."
    },
    {
      "id": "tin6-b14-q5",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về thuật toán và sơ đồ khối:",
      "options": [
        "a) Đầu vào (Input) là các dữ liệu ban đầu được cung cấp cho thuật toán",
        "b) Một thuật toán có thể chạy vô tận và không bao giờ kết thúc vẫn được coi là thuật toán đúng",
        "c) Hình oval (elip) dùng để thể hiện điểm Bắt đầu và Kết thúc của sơ đồ khối",
        "d) Các mũi tên trong sơ đồ khối biểu thị thứ tự thực hiện các thao tác"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT: Tính dừng là đặc trưng bắt buộc của thuật toán: sau một số bước hữu hạn, thuật toán phải kết thúc và cho kết quả.",
      "hint": "Thuật toán bắt buộc phải dừng lại sau một số bước hữu hạn."
    },
    {
      "id": "tin6-b14-q6",
      "type": "fill_blank",
      "question": "Trong sơ đồ khối thuật toán, khối [1] dùng để kiểm tra điều kiện rẽ nhánh, còn khối [2] dùng để nhập dữ liệu đầu vào hoặc xuất kết quả đầu ra.",
      "blankAnswers": [
        "hình thoi",
        "hình bình hành"
      ],
      "wordBank": [
        "hình thoi",
        "hình bình hành",
        "hình chữ nhật",
        "hình elip",
        "hình tròn",
        "mũi tên"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 6 KNTT (Trang 66): Hình thoi thể hiện điều kiện; hình bình hành thể hiện nhập dữ liệu vào (Input) hoặc xuất kết quả (Output).",
      "hint": "Điều kiện dùng hình thoi, vào/ra dùng hình bình hành."
    },
    {
      "id": "tin6-b14-q7",
      "type": "matching",
      "question": "Nối hình dạng hình học trong sơ đồ khối ở cột bên trái với ý nghĩa tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Hình elip (hoặc chữ nhật bo góc)"
        },
        {
          "id": "2",
          "text": "Hình chữ nhật"
        },
        {
          "id": "3",
          "text": "Hình thoi"
        },
        {
          "id": "4",
          "text": "Đường mũi tên"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Thao tác xử lí, tính toán dữ liệu"
        },
        {
          "id": "b",
          "text": "Điểm bắt đầu (Start) hoặc kết thúc (End)"
        },
        {
          "id": "c",
          "text": "Hướng tuần tự thực hiện các bước"
        },
        {
          "id": "d",
          "text": "Kiểm tra điều kiện rẽ nhánh (Đúng / Sai)"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a",
        "3": "d",
        "4": "c"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 66): Quy ước chuẩn các khối cơ bản trong biểu diễn sơ đồ khối thuật toán.",
      "hint": "Elip: Start/End, Chữ nhật: Xử lí, Thoi: Điều kiện, Mũi tên: Hướng đi."
    },
    {
      "id": "tin6-b14-q8",
      "type": "multiple_choice",
      "question": "Cho bài toán: \"Tính chu vi hình chữ nhật khi biết chiều dài a và chiều rộng b\". Đầu vào (Input) và Đầu ra (Output) của thuật toán lần lượt là gì?",
      "options": [
        "Input: Chu vi; Output: Hai cạnh a và b",
        "Input: Công thức tính; Output: Số cạnh của hình",
        "Input: Hai số a và b; Output: Giá trị chu vi (a + b) x 2",
        "Input: Chiều dài a; Output: Chiều rộng b"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 65): Input là thông tin được cho trước (chiều dài a, chiều rộng b). Output là kết quả cần tìm (chu vi hình chữ nhật).",
      "hint": "Input là cái đã biết, Output là kết quả cần tìm."
    },
    {
      "id": "tin6-b14-q9",
      "type": "multiple_choice",
      "question": "Một thuật toán chuẩn mực bắt buộc phải thỏa mãn tính chất nào sau đây?",
      "options": [
        "Tính phức tạp cao và khó hiểu nhất có thể",
        "Tính xác định, tính dừng và tính đúng đắn",
        "Chỉ có máy vi tính mới có thể thực hiện được",
        "Phải sử dụng ít nhất mười câu lệnh lặp liên tục"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT: Thuật toán cần có tính xác định (mỗi bước rõ ràng không gây nhầm lẫn), tính dừng (phải kết thúc sau số bước hữu hạn) và tính đúng đắn.",
      "hint": "Rõ ràng, chắc chắn kết thúc và ra kết quả đúng."
    },
    {
      "id": "tin6-b14-q10",
      "type": "multiple_choice",
      "question": "Trong cuộc sống hàng ngày, hoạt động nào sau đây có thể coi là một thuật toán?",
      "options": [
        "Hướng gió thổi bất chợt ngoài sân trường",
        "Tiếng chim hót ngẫu nhiên trên cành cây buổi sớm",
        "Các bước theo công thức để nấu món cơm sườn theo sách hướng dẫn",
        "Cảm xúc vui buồn ngẫu nhiên của một người trong ngày"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 64): Công thức nấu ăn gồm các bước trình tự rõ ràng (nguyên liệu -> sơ chế -> nấu -> nêm gia vị -> thành phẩm) là ví dụ gần gũi về thuật toán.",
      "hint": "Hoạt động có quy trình từng bước rõ ràng."
    }
  ],
  "tin6-bai-15": [
    {
      "id": "tin6-b15-q1",
      "type": "multiple_choice",
      "question": "Thuật toán tìm kiếm tuần tự (Sequential Search) hoạt động theo nguyên lí nào?",
      "options": [
        "Đảo lộn ngẫu nhiên danh sách rồi bốc thăm may mắn",
        "Chia đôi danh sách liên tục cho đến khi tìm thấy",
        "Chỉ kiểm tra phần tử ở chính giữa danh sách",
        "Lần lượt so sánh giá trị cần tìm với từng phần tử của danh sách, từ phần tử đầu tiên đến phần tử cuối cùng"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 70): Tìm kiếm tuần tự kiểm tra lần lượt từng phần tử từ đầu đến cuối danh sách cho đến khi tìm thấy hoặc hết danh sách.",
      "hint": "Duyệt lần lượt từng phần tử theo thứ tự."
    },
    {
      "id": "tin6-b15-q2",
      "type": "multiple_choice",
      "question": "Thuật toán tìm kiếm tuần tự kết thúc khi nào?",
      "options": [
        "Khi tìm thấy phần tử cần tìm HOẶC khi đã duyệt hết toàn bộ danh sách mà không thấy",
        "Không bao giờ dừng lại cho đến khi tắt máy",
        "Chỉ dừng lại khi đã duyệt đủ 100 lần",
        "Dừng lại ngay ở phần tử thứ hai của danh sách"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 71): Thuật toán dừng khi tìm thấy mục tiêu (thành công) hoặc khi đã xét hết danh sách mà không có (thất bại).",
      "hint": "Tìm thấy thì dừng, hoặc hết danh sách thì dừng."
    },
    {
      "id": "tin6-b15-q3",
      "type": "multiple_choice",
      "question": "Điều kiện TIÊN QUYẾT để có thể áp dụng được thuật toán tìm kiếm nhị phân (Binary Search) là gì?",
      "options": [
        "Số lượng phần tử trong danh sách bắt buộc phải là số chẵn",
        "Tất cả các phần tử phải có giá trị bằng nhau",
        "Danh sách dữ liệu đã phải được sắp xếp theo một thứ tự nhất định (tăng dần hoặc giảm dần)",
        "Danh sách phải chứa toàn các số nguyên âm"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 73): Tìm kiếm nhị phân chỉ áp dụng được trên danh sách đã được sắp xếp có thứ tự.",
      "hint": "Dữ liệu bắt buộc phải được sắp xếp trước."
    },
    {
      "id": "tin6-b15-q4",
      "type": "multiple_choice",
      "question": "Trong thuật toán tìm kiếm nhị phân trên dãy số tăng dần, nếu giá trị cần tìm LỚN HƠN giá trị của phần tử ở giữa, ta sẽ tiếp tục tìm kiếm ở đâu?",
      "options": [
        "Nửa sau của danh sách (phía bên phải phần tử giữa)",
        "Nửa trước của danh sách (phía bên trái phần tử giữa)",
        "Dừng thuật toán và kết luận không có",
        "Quay lại kiểm tra lại từ đầu danh sách"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 74): Vì dãy tăng dần, nếu giá trị cần tìm lớn hơn phần tử giữa thì nó chắc chắn chỉ có thể nằm ở nửa bên phải (nửa sau).",
      "hint": "Dãy tăng dần nên số lớn hơn sẽ nằm bên phải."
    },
    {
      "id": "tin6-b15-q5",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về thuật toán tìm kiếm tuần tự và tìm kiếm nhị phân:",
      "options": [
        "a) Tìm kiếm tuần tự có thể áp dụng cho danh sách chưa được sắp xếp",
        "b) Với danh sách đã sắp xếp có số lượng phần tử rất lớn, tìm kiếm nhị phân thường nhanh hơn nhiều so với tìm kiếm tuần tự",
        "c) Tìm kiếm nhị phân chỉ cần so sánh với phần tử đầu tiên và cuối cùng của dãy",
        "d) Trong trường hợp xấu nhất, tìm kiếm tuần tự phải thực hiện số lần so sánh bằng đúng số phần tử của danh sách"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT: Tìm kiếm nhị phân so sánh với phần tử ở giữa (mid) để loại bỏ một nửa số phần tử sau mỗi lần kiểm tra.",
      "hint": "Nhị phân chia đôi ở giữa mỗi lần xét."
    },
    {
      "id": "tin6-b15-q6",
      "type": "fill_blank",
      "question": "Thuật toán tìm kiếm nhị phân thu hẹp phạm vi tìm kiếm bằng cách so sánh giá trị cần tìm với phần tử [1] của danh sách, sau đó loại bỏ [2] danh sách không chứa phần tử đó.",
      "blankAnswers": [
        "ở giữa",
        "một nửa"
      ],
      "wordBank": [
        "ở giữa",
        "một nửa",
        "đầu tiên",
        "cuối cùng",
        "toàn bộ",
        "một phần ba"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 73): Tìm kiếm nhị phân lấy phần tử ở giữa, so sánh rồi bỏ đi một nửa danh sách.",
      "hint": "Nhị phân là chia đôi (hai nửa)."
    },
    {
      "id": "tin6-b15-q7",
      "type": "matching",
      "question": "Nối đặc điểm ở cột bên trái với thuật toán tìm kiếm phù hợp ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Áp dụng được cho mọi danh sách, kể cả danh sách xếp lộn xộn"
        },
        {
          "id": "2",
          "text": "Bắt buộc danh sách phải có thứ tự tăng dần hoặc giảm dần"
        },
        {
          "id": "3",
          "text": "Mỗi bước so sánh giúp loại bỏ một nửa số phần tử còn lại"
        },
        {
          "id": "4",
          "text": "So sánh lần lượt từng phần tử từ vị trí đầu tiên đến cuối"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Thuật toán tìm kiếm tuần tự"
        },
        {
          "id": "b",
          "text": "Thuật toán tìm kiếm nhị phân"
        }
      ],
      "correctMatches": {
        "1": "a",
        "2": "b",
        "3": "b",
        "4": "a"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 70, 73): Phân biệt rõ ràng giữa tìm kiếm tuần tự (tuần tự, không cần sắp xếp) và tìm kiếm nhị phân (chia đôi, cần có thứ tự).",
      "hint": "Tuần tự đi từ đầu đến cuối; Nhị phân chia đôi danh sách có thứ tự."
    },
    {
      "id": "tin6-b15-q8",
      "type": "multiple_choice",
      "question": "Cho dãy số: 3, 7, 12, 19, 25, 31, 40. Dùng thuật toán tìm kiếm nhị phân để tìm số 19. Phần tử ở giữa ở bước đầu tiên là số nào?",
      "options": [
        "Số 3",
        "Số 12",
        "Số 25",
        "Số 19 (vị trí chính giữa thứ 4)"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 6 KNTT (Trang 74): Dãy có 7 số: 3 (1), 7 (2), 12 (3), 19 (4), 25 (5), 31 (6), 40 (7). Vị trí ở giữa là (1 + 7) / 2 = 4, mang giá trị 19. Thuật toán tìm thấy ngay ở bước 1!",
      "hint": "Vị trí ở giữa của dãy 7 phần tử là vị trí số 4."
    },
    {
      "id": "tin6-b15-q9",
      "type": "multiple_choice",
      "question": "Cho dãy họ tên học sinh trong sổ điểm chưa được sắp xếp. Để tìm một bạn có tên \"Bình\", ta PHẢI sử dụng thuật toán tìm kiếm nào?",
      "options": [
        "Tìm kiếm đồ thị",
        "Tìm kiếm tuần tự",
        "Tìm kiếm nhị phân",
        "Tìm kiếm cây nhị phân"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 72): Vì danh sách chưa được sắp xếp theo bảng chữ cái nên KHÔNG thể dùng tìm kiếm nhị phân, bắt buộc phải dùng tìm kiếm tuần tự.",
      "hint": "Chưa sắp xếp thì chỉ có thể tìm tuần tự từng người."
    },
    {
      "id": "tin6-b15-q10",
      "type": "multiple_choice",
      "question": "Giả sử một cuốn từ điển dày 1000 trang được sắp theo bảng chữ cái. Cách em mở trang giữa rồi lật về trước hoặc sau tương ứng với thuật toán nào trong tin học?",
      "options": [
        "Thuật toán tìm kiếm tuần tự",
        "Thuật toán sắp xếp nổi bọt",
        "Thuật toán sắp xếp chọn",
        "Thuật toán tìm kiếm nhị phân"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 73): Mở từ điển ở trang giữa rồi thu hẹp về nửa trước hoặc nửa sau chính là áp dụng tự nhiên của thuật toán tìm kiếm nhị phân.",
      "hint": "Hành động mở giữa trang từ điển đã có thứ tự abc."
    }
  ],
  "tin6-bai-16": [
    {
      "id": "tin6-b16-q1",
      "type": "multiple_choice",
      "question": "Mục đích chính của các thuật toán sắp xếp (Sorting Algorithm) là gì?",
      "options": [
        "Xóa bỏ các phần tử trùng nhau trong danh sách",
        "Hoán đổi vị trí các phần tử để đưa danh sách về thứ tự tăng dần hoặc giảm dần xác định",
        "Mã hóa các kí tự để bảo mật thông tin",
        "Nhân đôi giá trị của tất cả các phần tử trong danh sách"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 76): Sắp xếp là việc tổ chức lại các phần tử trong danh sách theo một trật tự xác định (thường là tăng dần hoặc giảm dần).",
      "hint": "Tổ chức lại danh sách theo thứ tự tăng hoặc giảm."
    },
    {
      "id": "tin6-b16-q2",
      "type": "multiple_choice",
      "question": "Thuật toán sắp xếp nổi bọt (Bubble Sort) hoạt động dựa trên thao tác cơ bản nào?",
      "options": [
        "So sánh hai phần tử liền kề nhau và đổi chỗ nếu chúng đứng sai thứ tự",
        "Tìm phần tử nhỏ nhất rồi đưa về vị trí đầu tiên",
        "Chọn ngẫu nhiên một phần tử làm mốc so sánh",
        "Chia đôi dãy rồi sắp xếp độc lập từng nửa"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 77): Sắp xếp nổi bọt duyệt dãy từ cuối lên (hoặc đầu xuống), liên tục so sánh hai phần tử liền kề và đổi chỗ nếu chúng chưa đúng thứ tự.",
      "hint": "So sánh 2 phần tử cạnh nhau liên tiếp."
    },
    {
      "id": "tin6-b16-q3",
      "type": "multiple_choice",
      "question": "Vì sao thuật toán sắp xếp nổi bọt lại có tên gọi là \"nổi bọt\"?",
      "options": [
        "Vì do nhà khoa học tên Bubble phát minh ra",
        "Vì thuật toán chỉ áp dụng cho dữ liệu chất lỏng trong phòng thí nghiệm",
        "Vì qua mỗi lượt duyệt, phần tử nhẹ nhất (nhỏ nhất) sẽ từ từ dịch chuyển lên đầu giống như bọt khí nổi lên mặt nước",
        "Vì máy tính sẽ phát ra tiếng bọt nước sủi bọt khi chạy chương trình"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 77): Tên gọi nổi bọt xuất phát từ hình ảnh phần tử nhỏ nhất dịch chuyển dần lên vị trí thích hợp giống bọt khí nổi lên mặt nước.",
      "hint": "Phần tử nhẹ hơn sẽ nổi dần lên trên mặt nước."
    },
    {
      "id": "tin6-b16-q4",
      "type": "multiple_choice",
      "question": "Thuật toán sắp xếp chọn (Selection Sort) thực hiện theo nguyên lí nào để sắp xếp tăng dần?",
      "options": [
        "Tại mỗi bước, tìm phần tử nhỏ nhất trong phần còn lại chưa sắp xếp và đổi chỗ nó về vị trí đầu tiên của phần đó",
        "Xóa các phần tử lớn nhất khỏi danh sách",
        "Bốc ngẫu nhiên một phần tử đặt vào vị trí bất kì",
        "So sánh từng cặp liền kề và đổi chỗ liên tục"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 79): Sắp xếp chọn tìm phần tử nhỏ nhất trong đoạn chưa sắp xếp, sau đó hoán đổi nó với phần tử đầu tiên của đoạn đó.",
      "hint": "Tìm (chọn) phần tử nhỏ nhất rồi đặt vào vị trí đúng."
    },
    {
      "id": "tin6-b16-q5",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về thuật toán sắp xếp nổi bọt và sắp xếp chọn:",
      "options": [
        "a) Sau vòng lặp đầu tiên của sắp xếp chọn (tăng dần), phần tử nhỏ nhất của dãy đã ở đúng vị trí đầu tiên",
        "b) Sắp xếp dữ liệu giúp việc tra cứu và tìm kiếm thông tin sau đó trở nên nhanh chóng và thuận tiện hơn",
        "c) Sắp xếp nổi bọt không bao giờ cần phải hoán đổi vị trí giữa hai phần tử",
        "d) Một dãy số gồm n phần tử cần tối đa (n - 1) lượt duyệt để đảm bảo sắp xếp hoàn tất"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT: Nổi bọt bắt buộc phải hoán đổi khi 2 phần tử cạnh nhau sai thứ tự. Với n phần tử cần tối đa n-1 lượt.",
      "hint": "Cần n-1 lượt để sắp xếp hoàn toàn danh sách n phần tử."
    },
    {
      "id": "tin6-b16-q6",
      "type": "fill_blank",
      "question": "Trong thuật toán sắp xếp chọn, ở bước 1 ta tìm phần tử [1] trong toàn bộ danh sách và hoán đổi vị trí với phần tử ở vị trí [2].",
      "blankAnswers": [
        "nhỏ nhất",
        "đầu tiên"
      ],
      "wordBank": [
        "nhỏ nhất",
        "đầu tiên",
        "lớn nhất",
        "cuối cùng",
        "ở giữa",
        "bất kì"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 6 KNTT (Trang 79): Bước đầu tiên của sắp xếp chọn tăng dần: tìm giá trị nhỏ nhất trong dãy và đổi chỗ với phần tử đầu tiên.",
      "hint": "Sắp tăng dần thì số nhỏ nhất đưa về đầu."
    },
    {
      "id": "tin6-b16-q7",
      "type": "matching",
      "question": "Nối thuật toán sắp xếp ở cột bên trái với cách làm việc đặc trưng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Sắp xếp nổi bọt (Bubble Sort)"
        },
        {
          "id": "2",
          "text": "Sắp xếp chọn (Selection Sort)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Luôn tìm giá trị nhỏ nhất trong phần chưa sắp xếp rồi đưa về vị trí thích hợp"
        },
        {
          "id": "b",
          "text": "Liên tục so sánh và đổi chỗ hai phần tử đứng cạnh nhau nếu chúng nghịch thế"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 77, 79): Nổi bọt so sánh cặp cạnh nhau; Chọn tìm min/max đưa về vị trí.",
      "hint": "Nổi bọt: cặp cạnh nhau; Chọn: tìm phần tử nhỏ nhất/lớn nhất."
    },
    {
      "id": "tin6-b16-q8",
      "type": "multiple_choice",
      "question": "Cho dãy số ban đầu: 8, 3, 5, 2. Nếu dùng thuật toán sắp xếp chọn tăng dần, sau lượt thứ nhất dãy số sẽ trở thành dãy nào?",
      "options": [
        "2, 8, 5, 3",
        "3, 8, 5, 2",
        "8, 5, 3, 2",
        "2, 3, 5, 8 (phần tử nhỏ nhất là 2 đổi chỗ cho số 8 đầu dãy)"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 6 KNTT (Trang 79): Dãy 8, 3, 5, 2 có số nhỏ nhất là 2. Đổi chỗ 2 với phần tử đầu tiên (8) -> dãy trở thành 2, 3, 5, 8.",
      "hint": "Số 2 nhỏ nhất đổi chỗ với vị trí số 8."
    },
    {
      "id": "tin6-b16-q9",
      "type": "multiple_choice",
      "question": "Khi xếp hàng học sinh chào cờ theo chiều cao từ thấp đến cao, thầy giáo yêu cầu bạn thấp nhất lên đứng đầu hàng, sau đó tìm bạn thấp nhất trong số các bạn còn lại đứng tiếp theo. Thầy giáo đang áp dụng thuật toán nào?",
      "options": [
        "Thuật toán tìm kiếm nhị phân",
        "Thuật toán sắp xếp chọn",
        "Thuật toán tìm kiếm tuần tự",
        "Thuật toán sắp xếp nổi bọt"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 79): Tìm người thấp nhất (nhỏ nhất) đặt lên vị trí tiếp theo chính là nguyên lí của thuật toán sắp xếp chọn (Selection Sort).",
      "hint": "Tìm người thấp nhất đứng đầu, rồi tìm người thấp kế tiếp."
    },
    {
      "id": "tin6-b16-q10",
      "type": "multiple_choice",
      "question": "Lợi ích lớn nhất của việc sắp xếp danh bạ điện thoại theo thứ tự bảng chữ cái ABC là gì?",
      "options": [
        "Giúp tiết kiệm pin cho điện thoại thông minh",
        "Làm tăng số lượng liên lạc có thể lưu trong điện thoại",
        "Giúp việc tìm kiếm tên và số điện thoại của người cần gọi nhanh chóng hơn rất nhiều",
        "Ngăn chặn được các cuộc gọi làm phiền từ số lạ"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 6 KNTT (Trang 76): Dữ liệu được sắp xếp giúp con người hoặc máy tính tìm kiếm thông tin nhanh hơn (có thể dùng tìm kiếm nhị phân).",
      "hint": "Sắp xếp để tìm kiếm dễ dàng và nhanh chóng."
    }
  ]
};
