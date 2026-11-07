import { Question } from '../types/quiz';

export const QUESTIONS_GRADE_7: Record<string, Question[]> = {
  "tin7-bai-1": [
    {
      "id": "g7-b1-mcq-1",
      "type": "multiple_choice",
      "question": "Thiết bị nào sau đây là thiết bị VÀO (Input Device) của máy tính?",
      "options": [
        "Màn hình máy tính",
        "Bàn phím, Chuột, Máy quét (Scanner)",
        "Máy in laser",
        "Loa vi tính"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 5): Thiết bị vào dùng để đưa thông tin vào máy tính như bàn phím, chuột, micro, máy quét.",
      "hint": "Dùng để nhập dữ liệu vào máy tính."
    },
    {
      "id": "g7-b1-mcq-2",
      "type": "multiple_choice",
      "question": "Thiết bị nào sau đây là thiết bị RA (Output Device) của máy tính?",
      "options": [
        "Chuột quang học",
        "Microphone",
        "Màn hình, Máy in, Loa, Máy chiếu",
        "Bàn phím máy tính"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 6): Thiết bị ra đưa thông tin từ máy tính ra cho người dùng cảm nhận như màn hình, loa, máy in, máy chiếu.",
      "hint": "Hiển thị hình ảnh hoặc phát âm thanh ra bên ngoài."
    },
    {
      "id": "g7-b1-mcq-3",
      "type": "multiple_choice",
      "question": "Thiết bị nào dưới đây vừa có chức năng đưa thông tin vào, vừa có chức năng đưa thông tin ra?",
      "options": [
        "Máy quét mã vạch",
        "Bàn phím không dây",
        "Máy in màu",
        "Màn hình cảm ứng (Touchscreen)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Màn hình cảm ứng vừa hiển thị hình ảnh (thiết bị ra) vừa tiếp nhận thao tác chạm tay của người dùng (thiết bị vào).",
      "hint": "Vừa hiển thị hình ảnh vừa nhận cảm ứng ngón tay."
    },
    {
      "id": "g7-b1-mcq-4",
      "type": "multiple_choice",
      "question": "Cổng kết nối HDMI trên máy tính và máy chiếu dùng để truyền tín hiệu gì?",
      "options": [
        "Truyền đồng thời cả tín hiệu hình ảnh độ nét cao và âm thanh",
        "Chỉ truyền tín hiệu mạng Internet có dây",
        "Chỉ cấp nguồn điện sạc pin",
        "Chỉ cắm tai nghe âm thanh đơn thuần"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Cổng HDMI (High-Definition Multimedia Interface) truyền tải đồng thời cả video và audio chất lượng cao qua 1 sợi cáp.",
      "hint": "Truyền cả hình ảnh và âm thanh chất lượng cao."
    },
    {
      "id": "g7-b1-mcq-5",
      "type": "multiple_choice",
      "question": "Cổng USB (Universal Serial Bus) trên thân máy tính thường dùng để kết nối với thiết bị nào?",
      "options": [
        "Chỉ cắm được micro chuyên dụng",
        "Cáp ăng-ten truyền hình tương tự",
        "Chuột, bàn phím, USB lưu trữ, máy in",
        "Nguồn điện 220V trực tiếp"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Cổng USB là chuẩn giao tiếp phổ biến nhất để gắn chuột, bàn phím, ổ flash USB, máy in vào máy tính.",
      "hint": "Cổng cắm hình chữ nhật rất phổ biến cho chuột, bàn phím."
    },
    {
      "id": "g7-b1-mcq-6",
      "type": "multiple_choice",
      "question": "Khi muốn ngắt kết nối an toàn một thiết bị USB lưu trữ khỏi máy tính, em nên thực hiện thao tác nào?",
      "options": [
        "Chọn tính năng \"Safely Remove Hardware and Eject Media\" trên khay hệ thống trước khi rút",
        "Khởi động lại máy tính rồi mới cắm lại",
        "Rút mạnh dây USB ra ngay khi máy đang sao chép tệp",
        "Tắt cầu giao điện trong nhà"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 7 KNTT (Trang 8): Sử dụng tính năng ngắt kết nối an toàn (Eject) giúp hệ điều hành hoàn tất việc ghi đĩa, tránh hỏng dữ liệu.",
      "hint": "Dùng lệnh Eject an toàn trước khi rút thiết bị."
    },
    {
      "id": "g7-b1-mcq-7",
      "type": "multiple_choice",
      "question": "Thao tác nào sau đây là SAI và có nguy cơ gây hỏng hóc cổng kết nối máy tính?",
      "options": [
        "Giữ cho các cổng cắm luôn khô ráo, sạch bụi bẩn",
        "Rút đầu cắm thẳng hàng, cầm vào phần vỏ nhựa",
        "Quan sát kĩ hình dạng chân cắm trước khi kết nối",
        "Cố dùng lực ấn mạnh đầu cắm vào cổng khi chưa đúng chiều hoặc cắm nhầm loại cổng"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Không được ấn cưỡng bức đầu cắm khi sai chiều vì sẽ làm gãy chân tiếp xúc bằng đồng bên trong cổng.",
      "hint": "Cắm sai chiều mà cố dùng sức ấn mạnh sẽ làm gãy chân cắm."
    },
    {
      "id": "g7-b1-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu sau về thiết bị vào - ra của máy tính (SGK Tin học 7):",
      "options": [
        "a) Máy in và loa là những thiết bị ra thông dụng của máy tính.",
        "b) Bàn phím ảo trên điện thoại thông minh là thiết bị ra.",
        "c) Máy quét (Scanner) có chức năng chụp ảnh tài liệu giấy và đưa vào máy tính dưới dạng tệp ảnh số.",
        "d) Có thể cắm đầu nối HDMI vào cổng USB thông thường nếu dùng lực ấn mạnh."
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        false
      ],
      "explanation": "a) Đúng; b) Sai vì bàn phím ảo dùng để nhập văn bản (thiết bị vào); c) Đúng theo định nghĩa máy quét; d) Sai vì kích thước và chuẩn chân cắm hoàn toàn khác nhau.",
      "difficulty": "trung_binh",
      "hint": "Máy in là thiết bị ra; bàn phím dù là bàn phím ảo vẫn là thiết bị vào."
    },
    {
      "id": "g7-b1-blank-1",
      "type": "fill_blank",
      "question": "Thiết bị vào dùng để [1] thông tin vào máy tính. Thiết bị ra dùng để [2] thông tin từ máy tính ra bên ngoài dưới dạng con người cảm nhận được.",
      "blankAnswers": [
        "đưa",
        "xuất"
      ],
      "wordBank": [
        "đưa",
        "xuất",
        "xóa bỏ",
        "lưu trữ",
        "tính toán",
        "nén"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 Trang 5-6: Thiết bị vào đưa dữ liệu vào; Thiết bị ra truyền xuất thông tin ra ngoài.",
      "hint": "Vào là đưa vào; Ra là xuất ra."
    },
    {
      "id": "g7-b1-match-1",
      "type": "matching",
      "question": "Hãy ghép nối mỗi thiết bị ở Cột A với loại thiết bị tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Microphone, Webcam"
        },
        {
          "id": "2",
          "text": "2) Loa, Tai nghe"
        },
        {
          "id": "3",
          "text": "3) Màn hình cảm ứng"
        },
        {
          "id": "4",
          "text": "4) Ổ cứng di động, Thẻ nhớ"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Thiết bị lưu trữ ngoài"
        },
        {
          "id": "b",
          "text": "Thiết bị vào (Input)"
        },
        {
          "id": "c",
          "text": "Thiết bị ra (Output)"
        },
        {
          "id": "d",
          "text": "Thiết bị vừa vào vừa ra"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "d",
        "4": "a"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Microphone/Webcam đưa âm thanh/hình ảnh vào (thiết bị vào); Loa phát âm thanh ra (thiết bị ra); Màn hình cảm ứng vừa vào vừa ra; Ổ cứng di động là thiết bị lưu trữ.",
      "hint": "Micro ghi âm là vào; Loa phát là ra."
    }
  ],
  "tin7-bai-2": [
    {
      "id": "g7-b2-mcq-1",
      "type": "multiple_choice",
      "question": "Hệ điều hành (Operating System) giữ vai trò then chốt nào trong máy tính?",
      "options": [
        "Là phần mềm trò chơi giải trí",
        "Quản lí, điều khiển toàn bộ phần cứng và cung cấp môi trường chạy các phần mềm ứng dụng",
        "Chỉ dùng để kết nối mạng Wi-Fi",
        "Chỉ dùng để gõ văn bản in ấn"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 10): Hệ điều hành là phần mềm hệ thống điều khiển mọi tài nguyên phần cứng và làm nền tảng chạy phần mềm ứng dụng.",
      "hint": "Quản lý toàn bộ phần cứng và phần mềm."
    },
    {
      "id": "g7-b2-mcq-2",
      "type": "multiple_choice",
      "question": "Tên nào sau đây là tên của một Hệ điều hành thông dụng trên máy tính cá nhân?",
      "options": [
        "Microsoft Word",
        "Scratch 3.0",
        "Google Chrome",
        "Windows 11, macOS, Linux"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Windows, macOS, Linux là các hệ điều hành máy tính; Word, Scratch, Chrome là các phần mềm ứng dụng.",
      "hint": "Windows của Microsoft, macOS của Apple."
    },
    {
      "id": "g7-b2-mcq-3",
      "type": "multiple_choice",
      "question": "Hệ điều hành nào sau đây được thiết kế chuyên biệt cho các thiết bị di động (điện thoại thông minh, máy tính bảng)?",
      "options": [
        "Linux Ubuntu Desktop",
        "Android và iOS",
        "Windows 11",
        "macOS Sonoma"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Android (của Google) và iOS (của Apple) là hai hệ điều hành thống trị trên điện thoại di động thông minh.",
      "hint": "Hệ điều hành chạy trên điện thoại Samsung và iPhone."
    },
    {
      "id": "g7-b2-mcq-4",
      "type": "multiple_choice",
      "question": "Phần mềm nào sau đây là một Phần mềm ứng dụng (Application Software)?",
      "options": [
        "Phần mềm luyện gõ mười ngón Mario, phần mềm bảng tính Excel, Zoom",
        "Hệ điều hành Android",
        "Hệ điều hành iOS",
        "Hệ điều hành Windows 10"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Mario, Excel, Zoom được tạo ra để đáp ứng một nhu cầu công việc/học tập cụ thể nên là phần mềm ứng dụng.",
      "hint": "Phục vụ trực tiếp nhu cầu học tập, làm việc của con người."
    },
    {
      "id": "g7-b2-mcq-5",
      "type": "multiple_choice",
      "question": "Phát biểu nào sau đây phân biệt ĐÚNG NHẤT giữa Hệ điều hành và Phần mềm ứng dụng?",
      "options": [
        "Phần mềm ứng dụng trực tiếp điều khiển xung nhịp phần cứng",
        "Máy tính không cần hệ điều hành vẫn chạy được phần mềm ứng dụng",
        "Hệ điều hành bắt buộc phải có để máy tính vận hành; phần mềm ứng dụng được cài đặt thêm trên nền hệ điều hành theo nhu cầu sử dụng",
        "Hệ điều hành không thể cài đặt thêm bất kì phần mềm ứng dụng nào"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Hệ điều hành là phần mềm nền tảng cốt lõi, không có hệ điều hành thì máy tính không thể hoạt động được.",
      "hint": "Hệ điều hành là nền tảng quản lý, phần mềm ứng dụng chạy trên hệ điều hành."
    },
    {
      "id": "g7-b2-mcq-6",
      "type": "multiple_choice",
      "question": "Phần mềm nguồn mở (Open Source Software) có đặc điểm nổi bật nào?",
      "options": [
        "Mã nguồn được công khai, người dùng được tự do sử dụng, nghiên cứu, sửa đổi và chia sẻ theo giấy phép mở",
        "Chỉ dùng được trong 30 ngày rồi tự động xóa",
        "Bắt buộc người dùng phải trả phí bản quyền rất cao mới được sử dụng",
        "Không bao giờ cho phép cài đặt lên máy tính cá nhân"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 7 KNTT: Phần mềm nguồn mở cung cấp mã nguồn công khai, khuyến khích cộng đồng phát triển chung (như Linux, GIMP, LibreOffice).",
      "hint": "Mã nguồn mở công khai, tự do nghiên cứu chia sẻ."
    },
    {
      "id": "g7-b2-mcq-7",
      "type": "multiple_choice",
      "question": "Hành động nào sau đây giúp bảo vệ bản quyền phần mềm và an toàn cho máy tính?",
      "options": [
        "Chia sẻ khóa kích hoạt bản quyền lậu lên mạng xã hội",
        "Tải các bản \"bẻ khóa\" (crack) trôi nổi trên mạng để đỡ tốn tiền",
        "Cài đặt các ứng dụng không rõ nguồn gốc chứa mã độc",
        "Sử dụng phần mềm có bản quyền chính hãng hoặc các phần mềm miễn phí/nguồn mở uy tín"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Phần mềm crack thường bị cài cắm virus, trojan đánh cắp dữ liệu ngân hàng và vi phạm pháp luật bản quyền.",
      "hint": "Dùng bản quyền chính hãng hoặc nguồn mở uy tín."
    },
    {
      "id": "g7-b2-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về phần mềm máy tính (SGK Tin học 7 KNTT):",
      "options": [
        "a) Không có hệ điều hành, máy tính không thể khởi động và sử dụng được.",
        "b) Trình duyệt web Google Chrome là một hệ điều hành máy tính.",
        "c) Một máy tính có thể cài đặt nhiều phần mềm ứng dụng khác nhau tùy nhu cầu người dùng.",
        "d) Phần mềm diệt virus cũng là một dạng phần mềm tiện ích hỗ trợ bảo vệ hệ thống."
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "explanation": "a) Đúng; b) Sai vì Google Chrome là phần mềm ứng dụng; c) Đúng; d) Đúng.",
      "difficulty": "trung_binh",
      "hint": "Trình duyệt web là phần mềm ứng dụng, không phải hệ điều hành."
    },
    {
      "id": "g7-b2-blank-1",
      "type": "fill_blank",
      "question": "Hệ điều hành đóng vai trò làm [1] trung gian giữa phần cứng máy tính và [2], giúp người dùng tương tác thuận tiện với máy tính.",
      "blankAnswers": [
        "cầu nối",
        "phần mềm ứng dụng"
      ],
      "wordBank": [
        "cầu nối",
        "phần mềm ứng dụng",
        "bàn phím",
        "dây dẫn",
        "ổ cắm"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Hệ điều hành là cầu nối giao tiếp giữa phần cứng và các phần mềm ứng dụng chạy phía trên.",
      "hint": "Hệ điều hành là cầu nối giữa phần cứng và phần mềm ứng dụng."
    },
    {
      "id": "g7-b2-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi phần mềm ở Cột A với nhóm phân loại chính xác ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Windows 11, Linux, macOS"
        },
        {
          "id": "2",
          "text": "2) Microsoft Word, LibreOffice Writer"
        },
        {
          "id": "3",
          "text": "3) Scratch, Python IDLE"
        },
        {
          "id": "4",
          "text": "4) Windows Defender, Avast"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Phần mềm ứng dụng soạn thảo văn bản"
        },
        {
          "id": "b",
          "text": "Hệ điều hành máy tính"
        },
        {
          "id": "c",
          "text": "Phần mềm tiện ích diệt virus"
        },
        {
          "id": "d",
          "text": "Môi trường lập trình học tập"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a",
        "3": "d",
        "4": "c"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Windows/Linux là Hệ điều hành; Word là phần mềm soạn thảo văn bản; Scratch là môi trường lập trình; Defender là phần mềm diệt virus.",
      "hint": "Ghép từng phần mềm với mục đích sử dụng."
    }
  ],
  "tin7-bai-3": [
    {
      "id": "g7-b3-mcq-1",
      "type": "multiple_choice",
      "question": "Tên tệp (File Name) trong hệ điều hành Windows bao gồm mấy phần chính?",
      "options": [
        "Gồm 4 phần ngăn cách bởi dấu gạch chéo",
        "Gồm 2 phần: Phần tên (Name) và Phần mở rộng (Extension), ngăn cách nhau bởi dấu chấm",
        "Chỉ có 1 phần duy nhất",
        "Chỉ được dùng số, không được dùng chữ cái"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 14): Tên tệp gồm phần tên và phần mở rộng cách nhau bởi dấu chấm (ví dụ: BaiTap.docx).",
      "hint": "Phần tên và phần mở rộng (đuôi tệp)."
    },
    {
      "id": "g7-b3-mcq-2",
      "type": "multiple_choice",
      "question": "Phần mở rộng (đuôi tệp) của tệp tin có vai trò gì quan trọng nhất?",
      "options": [
        "Chỉ cho biết ngày tháng tệp được tạo",
        "Chỉ cho biết kích thước dung lượng tệp",
        "Giúp hệ điều hành nhận biết loại tệp và chọn phần mềm thích hợp để mở tệp đó",
        "Là tên tác giả viết ra tệp"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Phần mở rộng xác định định dạng tệp (như .docx là văn bản Word, .xlsx là bảng tính Excel) để hệ điều hành kích hoạt chương trình tương ứng.",
      "hint": "Giúp nhận biết loại tệp và mở bằng phần mềm phù hợp."
    },
    {
      "id": "g7-b3-mcq-3",
      "type": "multiple_choice",
      "question": "Đuôi tệp nào sau đây biểu thị tệp Bảng tính Excel?",
      "options": [
        ".docx",
        ".xlsx hoặc .xls",
        ".mp3",
        ".pptx"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": ".xlsx là tệp bảng tính Excel; .docx là Word; .pptx là bài trình chiếu PowerPoint; .mp3 là âm thanh.",
      "hint": "Bắt đầu bằng chữ xl (Excel)."
    },
    {
      "id": "g7-b3-mcq-4",
      "type": "multiple_choice",
      "question": "Đường dẫn tệp \"D:\\HocTap\\TinHoc7\\Bai1.docx\" cho biết điều gì?",
      "options": [
        "Tệp Bai1.docx nằm trực tiếp ở ổ đĩa C:",
        "Thư mục TinHoc7 chứa ổ đĩa D:",
        "Tệp Bai1.docx nằm trong thư mục TinHoc7, thư mục này nằm trong thư mục HocTap trên ổ đĩa D:",
        "Tệp Bai1.docx chứa thư mục HocTap"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Đường dẫn chỉ rõ vị trí phân cấp từ ổ đĩa gốc D: qua thư mục cha HocTap đến thư mục con TinHoc7 chứa tệp Bai1.docx.",
      "hint": "Đi từ ổ đĩa D qua thư mục cha rồi đến thư mục con."
    },
    {
      "id": "g7-b3-mcq-5",
      "type": "multiple_choice",
      "question": "Ký tự nào sau đây KHÔNG ĐƯỢC PHÉP xuất hiện trong tên tệp hoặc thư mục của Windows?",
      "options": [
        "Dấu gạch dưới (_)",
        "Dấu gạch ngang (-)",
        "Chữ số từ 0 đến 9",
        "Dấu hai chấm (:) và dấu gạch chéo (/ \\ ? * \" < > |)"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Hệ điều hành Windows cấm các ký tự đặc biệt như \\ / : * ? \" < > | trong tên tệp vì chúng được dùng cho đường dẫn hệ thống.",
      "hint": "Các dấu gạch chéo, dấu hai chấm, dấu sao, dấu hỏi chấm bị cấm."
    },
    {
      "id": "g7-b3-mcq-6",
      "type": "multiple_choice",
      "question": "Cấu trúc lưu trữ thư mục và tệp tin trên máy tính có dạng hình gì?",
      "options": [
        "Cây phân cấp (Tree structure)",
        "Hình tròn đồng tâm",
        "Đường thẳng một chiều",
        "Mạng lưới ngẫu nhiên"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT: Thư mục được tổ chức theo mô hình cây phân cấp, từ thư mục gốc đến các thư mục con và tệp.",
      "hint": "Cây phân cấp với gốc và các cành nhánh."
    },
    {
      "id": "g7-b3-mcq-7",
      "type": "multiple_choice",
      "question": "Để đổi tên một thư mục hoặc tệp tin, phím tắt nhanh nào trên bàn phím thường được sử dụng?",
      "options": [
        "Phím Ctrl + Z",
        "Phím Esc",
        "Phím F2",
        "Phím F5"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Chọn tệp/thư mục và nhấn F2 là phím tắt chuẩn để đổi tên (Rename) trong Windows Explorer.",
      "hint": "Phím chức năng F2."
    },
    {
      "id": "g7-b3-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về quản lí tệp và thư mục trong máy tính:",
      "options": [
        "a) Trong cùng một thư mục, không thể có hai tệp trùng nhau cả phần tên và phần mở rộng.",
        "b) Thư mục chỉ chứa được tệp tin chứ không thể chứa thư mục con bên trong.",
        "c) Thao tác sao chép (Copy) tệp sẽ tạo ra bản sao mới mà vẫn giữ nguyên tệp ở vị trí cũ.",
        "d) Khi xóa một thư mục thì tất cả các tệp và thư mục con nằm trong nó cũng bị xóa theo."
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "explanation": "a) Đúng; b) Sai vì thư mục có thể chứa cả tệp lẫn thư mục con; c) Đúng; d) Đúng.",
      "difficulty": "trung_binh",
      "hint": "Thư mục có thể chứa thư mục con; xóa thư mục cha thì thư mục con bị xóa theo."
    },
    {
      "id": "g7-b3-blank-1",
      "type": "fill_blank",
      "question": "Tên tệp gồm 2 phần: phần tên và phần [1], được ngăn cách nhau bởi [2]. Đuôi .pptx là phần mở rộng của tệp [3].",
      "blankAnswers": [
        "mở rộng",
        "dấu chấm",
        "trình chiếu"
      ],
      "wordBank": [
        "mở rộng",
        "dấu chấm",
        "trình chiếu",
        "bảng tính",
        "văn bản",
        "dấu phẩy"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tên tệp = [phần tên].[phần mở rộng]. Đuôi .pptx là của bài trình chiếu PowerPoint.",
      "hint": "Phần mở rộng; dấu chấm; trình chiếu PowerPoint."
    },
    {
      "id": "g7-b3-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi phần mở rộng ở Cột A với loại dữ liệu tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) .docx"
        },
        {
          "id": "2",
          "text": "2) .xlsx"
        },
        {
          "id": "3",
          "text": "3) .jpg, .png"
        },
        {
          "id": "4",
          "text": "4) .mp3"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Tệp hình ảnh số"
        },
        {
          "id": "b",
          "text": "Tệp văn bản Microsoft Word"
        },
        {
          "id": "c",
          "text": "Tệp âm thanh"
        },
        {
          "id": "d",
          "text": "Tệp bảng tính Microsoft Excel"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "d",
        "3": "a",
        "4": "c"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": ".docx: Word; .xlsx: Excel; .jpg/.png: ảnh; .mp3: âm thanh.",
      "hint": "Nối đúng đuôi tệp với dạng tệp."
    }
  ],
  "tin7-bai-4": [
    {
      "id": "g7-b4-mcq-1",
      "type": "multiple_choice",
      "question": "Mạng xã hội (Social Network) là gì?",
      "options": [
        "Nền tảng trực tuyến cho phép người dùng tạo hồ sơ cá nhân, kết nối, tương tác và chia sẻ thông tin với cộng đồng",
        "Mạng dây cáp điện thoại truyền thống",
        "Phần mềm quét và diệt virus cho máy tính",
        "Một loại máy in phun màu"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 18): Mạng xã hội là kênh trực tuyến giúp kết nối và chia sẻ thông tin giữa các thành viên.",
      "hint": "Môi trường giao lưu, kết nối bạn bè trực tuyến."
    },
    {
      "id": "g7-b4-mcq-2",
      "type": "multiple_choice",
      "question": "Chức năng cơ bản nào sau đây hầu hết các mạng xã hội (Facebook, Zalo, Instagram...) đều cung cấp?",
      "options": [
        "Sửa chữa linh kiện phần cứng máy tính",
        "Cung cấp nguồn điện cho điện thoại",
        "Tự động in tài liệu ra giấy",
        "Tạo tài khoản cá nhân, kết bạn, nhắn tin, đăng tải bài viết và hình ảnh"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Mạng xã hội cung cấp hồ sơ cá nhân, kết nối bạn bè, chia sẻ trạng thái, ảnh, video và tương tác bình luận.",
      "hint": "Tạo tài khoản, kết bạn, đăng bài và nhắn tin."
    },
    {
      "id": "g7-b4-mcq-3",
      "type": "multiple_choice",
      "question": "Mặt trái nguy hiểm nào sau đây em cần hết sức cảnh giác khi tham gia mạng xã hội?",
      "options": [
        "Nguy cơ nghiện mạng xã hội, bị lộ lọt dữ liệu cá nhân, tiếp xúc tin giả mạo và bắt nạt trên mạng",
        "Tất cả thông tin trên mạng xã hội luôn chính xác tuyệt đối",
        "Không bao giờ có nguy cơ lừa đảo tài chính trên mạng",
        "Giúp cải thiện thị lực của mắt khi nhìn màn hình liên tục"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Mạng xã hội tiềm ẩn nguy cơ nghiện ngập, mất tập trung học tập, tin giả mạo và bắt nạt trên không gian mạng.",
      "hint": "Nguy cơ nghiện, tin giả, lộ thông tin riêng tư."
    },
    {
      "id": "g7-b4-mcq-4",
      "type": "multiple_choice",
      "question": "Khi nhận được tin nhắn từ tài khoản một người bạn thân trên mạng xã hội nhờ chuyển tiền gấp, em nên làm gì?",
      "options": [
        "Chụp ảnh thẻ ngân hàng của bố mẹ gửi cho người đó",
        "Lập tức chuyển tiền ngay không cần hỏi lại",
        "Xóa tài khoản mạng xã hội của mình",
        "Gọi điện thoại trực tiếp hoặc gặp mặt để xác minh xem tài khoản bạn có bị kẻ gian hack hay không trước khi chuyển"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Kẻ gian thường chiếm quyền điều khiển tài khoản (hack nick) rồi nhắn tin lừa đảo người thân, bạn bè. Luôn phải gọi điện trực tiếp để xác minh.",
      "hint": "Phải gọi điện thoại trực tiếp xác minh danh tính."
    },
    {
      "id": "g7-b4-mcq-5",
      "type": "multiple_choice",
      "question": "Kênh nào sau đây là kênh trao đổi thông tin chính thức, trang trọng và có tính lưu trữ cao trong học tập, công việc?",
      "options": [
        "Tin nhắn tự xóa trên mạng xã hội",
        "Thư điện tử (Email)",
        "Phòng chat game online",
        "Bình luận trên bài đăng TikTok"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Thư điện tử (Email) là phương thức trao đổi thông tin trang trọng, có địa chỉ rõ ràng và khả năng lưu trữ, đính kèm tệp tin tài liệu chính quy.",
      "hint": "Email (thư điện tử)."
    },
    {
      "id": "g7-b4-mcq-6",
      "type": "multiple_choice",
      "question": "Khi phát hiện một thông tin sai sự thật hoặc bôi nhọ người khác trên mạng xã hội, hành động ĐÚNG ĐẮN NHẤT của em là gì?",
      "options": [
        "Không like, không chia sẻ; bấm báo cáo (Report) bài viết vi phạm và trao đổi với người lớn/thầy cô",
        "Tải video về và gửi vào nhóm lớp học",
        "Viết bình luận chửi bới theo đám đông trên mạng",
        "Chia sẻ ngay bài viết về trang cá nhân cho nhiều người cùng biết"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Không tiếp tay lan truyền thông tin độc hại, sử dụng tính năng báo cáo vi phạm và tìm kiếm sự hỗ trợ từ người lớn.",
      "hint": "Không chia sẻ, báo cáo vi phạm và nhờ người lớn hỗ trợ."
    },
    {
      "id": "g7-b4-mcq-7",
      "type": "multiple_choice",
      "question": "Thông tin cá nhân nào sau đây TUYỆT ĐỐI KHÔNG NÊN công khai công cộng trên hồ sơ mạng xã hội?",
      "options": [
        "Một bức tranh phong cảnh em tự vẽ",
        "Tên trường học em đang theo học",
        "Mật khẩu tài khoản, số Căn cước công dân, địa chỉ nhà riêng, mã OTP ngân hàng",
        "Tên cuốn sách em yêu thích"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Mật khẩu, CCCD, địa chỉ riêng tư và mã OTP là thông tin nhạy cảm, công khai sẽ bị kẻ xấu lợi dụng lừa đảo chiếm đoạt tài sản.",
      "hint": "Mật khẩu, số căn cước, mã OTP ngân hàng."
    },
    {
      "id": "g7-b4-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về việc sử dụng mạng xã hội:",
      "options": [
        "a) Mạng xã hội giúp em kết nối bạn bè và học hỏi kiến thức bổ ích nếu sử dụng đúng cách.",
        "b) Mọi bài viết có nhiều lượt like và chia sẻ trên mạng xã hội đều là thông tin chính xác 100%.",
        "c) Sử dụng mạng xã hội quá nhiều vào ban đêm có thể gây mất ngủ và ảnh hưởng xấu đến sức khỏe.",
        "d) Em có thể tùy ý tải ảnh chụp của bạn bè lên mạng mà không cần xin phép bạn."
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        false
      ],
      "explanation": "a) Đúng; b) Sai vì nhiều tin giật gân, câu like sai sự thật vẫn có nhiều lượt chia sẻ; c) Đúng; d) Sai vì vi phạm quyền riêng tư hình ảnh cá nhân.",
      "difficulty": "trung_binh",
      "hint": "Nhiều like không đồng nghĩa với đúng sự thật."
    },
    {
      "id": "g7-b4-blank-1",
      "type": "fill_blank",
      "question": "Mạng xã hội giúp người dùng [1] và chia sẻ thông tin. Tuy nhiên, nếu lạm dụng có thể dẫn đến nguy cơ [2] mạng xã hội và bị lộ lọt [3] cá nhân.",
      "blankAnswers": [
        "kết nối",
        "nghiện",
        "thông tin"
      ],
      "wordBank": [
        "kết nối",
        "nghiện",
        "thông tin",
        "học giỏi",
        "tăng cân",
        "tiền bạc"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 Trang 20: Mạng xã hội giúp kết nối nhưng dễ gây nghiện và làm lộ lọt thông tin riêng tư.",
      "hint": "Kết nối; nghiện; thông tin cá nhân."
    },
    {
      "id": "g7-b4-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi kênh trao đổi thông tin ở Cột A với đặc điểm phù hợp ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Thư điện tử (Email)"
        },
        {
          "id": "2",
          "text": "2) Mạng xã hội (Facebook, Zalo)"
        },
        {
          "id": "3",
          "text": "3) Ứng dụng họp trực tuyến (Zoom, Meet)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Học tập và hội thảo truyền hình trực tiếp kèm âm thanh, hình ảnh"
        },
        {
          "id": "b",
          "text": "Giao tiếp trang trọng, đính kèm văn bản tài liệu chính quy"
        },
        {
          "id": "c",
          "text": "Chia sẻ hoạt động đời thường, tương tác cộng đồng bạn bè"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "a"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Email dùng giao tiếp trang trọng; Mạng xã hội giao lưu bạn bè; Zoom/Meet dùng cho lớp học và hội thảo trực tuyến.",
      "hint": "Email: trang trọng; Mạng xã hội: bạn bè; Meet: học trực tuyến."
    }
  ],
  "tin7-bai-5": [
    {
      "id": "g7-b5-mcq-1",
      "type": "multiple_choice",
      "question": "Hành vi nào sau đây thể hiện văn hóa ứng xử chuẩn mực và lịch sự trên không gian mạng?",
      "options": [
        "Tôn trọng người khác, dùng từ ngữ văn minh, lịch sự và xác thực thông tin trước khi bình luận/chia sẻ",
        "Spam gửi tin nhắn làm phiền người khác liên tục vào nửa đêm",
        "Chụp trộm hình ảnh riêng tư của người khác rồi đăng lên mạng để bêu rếu",
        "Lập tài khoản ẩn danh để đi nói xấu, xúc phạm giáo viên và bạn bè"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 23): Văn hóa ứng xử trên mạng đòi hỏi tôn trọng người khác, văn minh và tuân thủ pháp luật.",
      "hint": "Lịch sự, tôn trọng người khác và xác thực thông tin."
    },
    {
      "id": "g7-b5-mcq-2",
      "type": "multiple_choice",
      "question": "Việc đăng tải hình ảnh riêng tư của người khác lên mạng xã hội mà không có sự đồng ý của họ là hành vi vi phạm điều gì?",
      "options": [
        "Giúp người đó nổi tiếng hơn nên không có vi phạm gì",
        "Là việc làm hoàn toàn hợp pháp và được khuyến khích",
        "Chỉ là trò đùa vô hại, pháp luật không cấm",
        "Vi phạm quyền riêng tư và quyền bảo vệ hình ảnh cá nhân theo quy định của pháp luật"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Pháp luật bảo hộ quyền hình ảnh và đời sống riêng tư của công dân. Tự ý đăng ảnh khi chưa được cho phép là vi phạm pháp luật.",
      "hint": "Vi phạm quyền riêng tư của cá nhân."
    },
    {
      "id": "g7-b5-mcq-3",
      "type": "multiple_choice",
      "question": "Quy tắc \"Dừng lại - Suy nghĩ - Kiểm tra\" trước khi chia sẻ thông tin trên Internet nhằm mục đích gì?",
      "options": [
        "Để máy tính tự động tăng tốc độ xử lý",
        "Tránh lan truyền tin giả mạo, tin độc hại gây hoang mang và bảo vệ uy tín danh dự của chính mình",
        "Để tự động tăng lượt theo dõi trên mạng xã hội",
        "Để tiết kiệm pin điện thoại"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Suy nghĩ thấu đáo và kiểm chứng nguồn tin trước khi bấm share giúp ngăn chặn tin giả và thể hiện trách nhiệm công dân số.",
      "hint": "Tránh lan truyền tin giả và thông tin độc hại."
    },
    {
      "id": "g7-b5-mcq-4",
      "type": "multiple_choice",
      "question": "Khi em bị một đối tượng lạ trên mạng đe dọa, xúc phạm hoặc tống tiền, cách giải quyết ĐÚNG ĐẮN NHẤT là:",
      "options": [
        "Giấu kín một mình và làm theo mọi yêu cầu vô lý của đối tượng",
        "Nghỉ học ở nhà",
        "Lưu lại bằng chứng (chụp màn hình), chặn đối tượng và báo ngay cho bố mẹ, thầy cô giáo hoặc cơ quan công an để can thiệp",
        "Rủ bạn bè hẹn đối tượng ra ngoài đánh nhau"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 7 KNTT (Trang 25): Giữ bằng chứng tin nhắn và tìm sự trợ giúp từ người lớn là cách an toàn nhất khi gặp bắt nạt qua mạng.",
      "hint": "Lưu bằng chứng và báo ngay cho bố mẹ, thầy cô."
    },
    {
      "id": "g7-b5-mcq-5",
      "type": "multiple_choice",
      "question": "Hiện tượng \"Bắt nạt trên mạng\" (Cyberbullying) có thể gây ra hậu quả nghiêm trọng nào cho nạn nhân?",
      "options": [
        "Không gây ra bất kì ảnh hưởng tiêu cực nào",
        "Gây tổn thương tâm lý sâu sắc, lo âu, trầm cảm, sợ hãi và sa sút việc học tập",
        "Giúp nâng cao kết quả học tập môn Tin học",
        "Giúp nạn nhân trở nên tự tin hơn trước đám đông"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Bắt nạt trên mạng để lại vết thương tâm lý nặng nề cho nạn nhân, có thể dẫn đến trầm cảm và hành vi tiêu cực.",
      "hint": "Gây tổn thương tâm lý, trầm cảm, sợ hãi."
    },
    {
      "id": "g7-b5-mcq-6",
      "type": "multiple_choice",
      "question": "Hành vi tự ý sao chép nguyên văn bài viết của người khác rồi đăng lại dưới tên của mình được gọi là:",
      "options": [
        "Chia sẻ kiến thức bổ ích",
        "Hợp tác học tập nhóm",
        "Đạo văn và vi phạm bản quyền tác giả",
        "Sáng tạo nội dung số"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Tự nhận tác phẩm của người khác là của mình là hành vi đạo văn, vi phạm Luật Sở hữu trí tuệ.",
      "hint": "Đạo văn và vi phạm bản quyền."
    },
    {
      "id": "g7-b5-mcq-7",
      "type": "multiple_choice",
      "question": "Tại sao em không nên chia sẻ các thông tin chưa được kiểm chứng về dịch bệnh, thiên tai lên mạng xã hội?",
      "options": [
        "Vì sẽ làm mạng Internet bị tắc nghẽn",
        "Vì thông tin đó sẽ biến mất sau 24 giờ",
        "Vì máy tính sẽ bị trừ điểm hạnh kiểm",
        "Vì có thể gây hoang mang, sợ hãi trong cộng đồng và người đăng tải có thể bị phạt tiền theo pháp luật"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Lan truyền tin giả, sai sự thật gây hoang mang dư luận là hành vi bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự.",
      "hint": "Gây hoang mang xã hội và bị xử phạt theo luật."
    },
    {
      "id": "g7-b5-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các quy tắc ứng xử trên mạng dưới đây:",
      "options": [
        "a) Tôn trọng quyền riêng tư của người khác cũng là tự bảo vệ chính mình.",
        "b) Vì dùng tài khoản ảo ẩn danh nên em có thể tự do chửi bới ai tùy thích mà không sợ bị phát hiện.",
        "c) Khi trích dẫn nội dung từ trang web khác, cần ghi rõ nguồn và tên tác giả.",
        "d) Hãy suy nghĩ thật kĩ trước khi bình luận hoặc bấm chia sẻ một bài viết."
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "explanation": "a) Đúng; b) Sai vì cơ quan an ninh mạng hoàn toàn có thể truy vết địa chỉ IP dù dùng tài khoản ẩn danh; c) Đúng; d) Đúng.",
      "difficulty": "trung_binh",
      "hint": "Dùng nick ảo vẫn bị cơ quan an ninh mạng truy ra theo địa chỉ IP."
    },
    {
      "id": "g7-b5-blank-1",
      "type": "fill_blank",
      "question": "Trước khi đăng tải thông tin lên mạng, hãy áp dụng quy tắc 3 bước: [1] lại - [2] nghĩ - [3] tra thông tin.",
      "blankAnswers": [
        "Dừng",
        "Suy",
        "Kiểm"
      ],
      "wordBank": [
        "Dừng",
        "Suy",
        "Kiểm",
        "Đăng",
        "Chia sẻ",
        "Bình luận"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 Trang 24: Quy tắc Dừng lại (Stop) - Suy nghĩ (Think) - Kiểm tra (Verify).",
      "hint": "Dừng lại; Suy nghĩ; Kiểm tra."
    },
    {
      "id": "g7-b5-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi tình huống ở Cột A với cách ứng xử đúng đắn ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Thấy tin đồn sai sự thật về một bạn cùng trường"
        },
        {
          "id": "2",
          "text": "2) Nhận được tin nhắn đe dọa tống tiền qua mạng"
        },
        {
          "id": "3",
          "text": "3) Muốn sử dụng ảnh của người khác làm tài liệu báo cáo"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Xin phép tác giả và ghi chú rõ nguồn trích dẫn"
        },
        {
          "id": "b",
          "text": "Không lan truyền, khuyên bạn bè không chia sẻ và báo thầy cô"
        },
        {
          "id": "c",
          "text": "Lưu bằng chứng và báo ngay cho bố mẹ, cơ quan chức năng"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "a"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Tin đồn: không lan truyền; Đe dọa: báo người lớn; Dùng ảnh người khác: xin phép và dẫn nguồn.",
      "hint": "Xử lý phù hợp theo đạo đức và pháp luật."
    }
  ],
  "tin7-bai-6": [
    {
      "id": "g7-b6-mcq-1",
      "type": "multiple_choice",
      "question": "Trong phần mềm bảng tính Excel, giao giữa một cột và một hàng được gọi là gì?",
      "options": [
        "Ô tính (Cell)",
        "Trang tính (Sheet)",
        "Thanh công thức (Formula Bar)",
        "Hộp tên (Name Box)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 28): Ô tính (Cell) là vùng giao nhau của một cột và một hàng trong bảng tính.",
      "hint": "Giao của cột và hàng."
    },
    {
      "id": "g7-b6-mcq-2",
      "type": "multiple_choice",
      "question": "Địa chỉ của một ô tính trong Excel được viết theo quy tắc nào?",
      "options": [
        "Tên hàng trước, tên cột sau (Ví dụ: 1A, 5B, 10C)",
        "Chỉ dùng một chữ số bất kỳ",
        "Tên cột trước, tên hàng sau (Ví dụ: A1, B5, C10)",
        "Dùng dấu hoa thị và số (Ví dụ: *1, *5)"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Địa chỉ ô luôn bắt đầu bằng chữ cái chỉ cột và tiếp theo là số chỉ hàng (như A1, B3, C10).",
      "hint": "Cột (chữ cái) đứng trước, hàng (con số) đứng sau."
    },
    {
      "id": "g7-b6-mcq-3",
      "type": "multiple_choice",
      "question": "Khối ô (Range) từ ô B2 đến ô D6 được kí hiệu bằng cách nào?",
      "options": [
        "B2:D6",
        "B2-D6",
        "B2;D6",
        "B2..D6"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Khối ô trong Excel được biểu diễn bằng địa chỉ ô góc trên bên trái và góc dưới bên phải, ngăn cách bởi dấu hai chấm (:).",
      "hint": "Dùng dấu hai chấm (:)."
    },
    {
      "id": "g7-b6-mcq-4",
      "type": "multiple_choice",
      "question": "Mặc định trong bảng tính Excel, dữ liệu kiểu KÍ TỰ (chữ) và dữ liệu kiểu SỐ được căn lề như thế nào trong ô?",
      "options": [
        "Cả hai đều căn lề trái",
        "Kí tự căn lề PHẢI; dữ liệu số căn lề TRÁI",
        "Cả hai đều căn lề giữa",
        "Kí tự căn lề TRÁI; dữ liệu số căn lề PHẢI"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 7 KNTT (Trang 30): Mặc định Excel căn lề trái cho văn bản và căn lề phải cho các con số.",
      "hint": "Chữ căn bên trái, số căn bên phải."
    },
    {
      "id": "g7-b6-mcq-5",
      "type": "multiple_choice",
      "question": "Khu vực hiển thị nội dung hoặc công thức của ô đang được kích hoạt gọi là gì?",
      "options": [
        "Hộp tên (Name Box)",
        "Thanh công thức (Formula Bar)",
        "Thanh cuộn dọc",
        "Thanh trạng thái"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Thanh công thức (nằm cạnh biểu tượng fx) hiển thị chính xác công thức hoặc dữ liệu của ô đang chọn.",
      "hint": "Thanh nằm ngang có chữ fx bên cạnh."
    },
    {
      "id": "g7-b6-mcq-6",
      "type": "multiple_choice",
      "question": "Hộp tên (Name Box) ở phía bên trái thanh công thức có tác dụng gì?",
      "options": [
        "Hiển thị tổng số trang tính",
        "Hiển thị thời gian hiện tại",
        "Hiển thị tên người dùng máy tính",
        "Hiển thị địa chỉ của ô hoặc tên của khối ô đang được kích hoạt"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Hộp tên hiển thị địa chỉ của ô đang được chọn (ví dụ: A1, C5).",
      "hint": "Cho biết vị trí ô đang được chọn."
    },
    {
      "id": "g7-b6-mcq-7",
      "type": "multiple_choice",
      "question": "Để chọn nhanh toàn bộ trang tính trong Excel, em có thể sử dụng tổ hợp phím nào?",
      "options": [
        "Ctrl + C",
        "Ctrl + A",
        "Ctrl + V",
        "Ctrl + S"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Ctrl + A (Select All) dùng để chọn toàn bộ dữ liệu hoặc toàn bộ bảng tính.",
      "hint": "Tổ hợp phím chọn tất cả: Ctrl + A."
    },
    {
      "id": "g7-b6-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về giao diện bảng tính Excel:",
      "options": [
        "a) Cột trong bảng tính được đặt tên theo bảng chữ cái: A, B, C...",
        "b) Hàng trong bảng tính được đánh số thứ tự: 1, 2, 3...",
        "c) Một bảng tính Excel (Workbook) chỉ được phép chứa duy nhất một trang tính (Sheet).",
        "d) Nhập dữ liệu ngày tháng 20/11/2026 vào ô tính, Excel sẽ tự động căn lề phải giống như số."
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "explanation": "a) Đúng; b) Đúng; c) Sai vì một tệp bảng tính có thể chứa nhiều trang tính Sheet1, Sheet2...; d) Đúng vì ngày tháng được lưu trữ dưới dạng số serial.",
      "difficulty": "trung_binh",
      "hint": "Một file Excel có thể thêm nhiều trang tính (Sheet)."
    },
    {
      "id": "g7-b6-blank-1",
      "type": "fill_blank",
      "question": "Bảng tính Excel gồm nhiều cột được đánh thứ tự bằng [1] và nhiều hàng được đánh thứ tự bằng [2]. Khối ô gồm các ô A1, A2, B1, B2 được viết là [3].",
      "blankAnswers": [
        "chữ cái",
        "chữ số",
        "A1:B2"
      ],
      "wordBank": [
        "chữ cái",
        "chữ số",
        "A1:B2",
        "A1-B2",
        "hình vẽ"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Cột: chữ cái A,B,C; Hàng: chữ số 1,2,3; Khối ô hình chữ nhật từ A1 đến B2 viết là A1:B2.",
      "hint": "Cột dùng chữ cái, hàng dùng chữ số, khối ô dùng dấu hai chấm."
    },
    {
      "id": "g7-b6-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi thành phần ở Cột A với mô tả tương ứng ở Cột B trong Excel:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Ô tính (Cell)"
        },
        {
          "id": "2",
          "text": "2) Hộp tên (Name Box)"
        },
        {
          "id": "3",
          "text": "3) Thanh công thức (Formula Bar)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Hiển thị dữ liệu hoặc công thức của ô đang chọn"
        },
        {
          "id": "b",
          "text": "Vùng giao nhau giữa một cột và một hàng"
        },
        {
          "id": "c",
          "text": "Hiển thị địa chỉ ô đang được kích hoạt (như A1, B4)"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "a"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Ô tính là giao của cột và hàng; Name Box chứa địa chỉ ô; Formula Bar hiển thị nội dung công thức.",
      "hint": "Nối đúng thành phần với vị trí trên màn hình."
    }
  ],
  "tin7-bai-7": [
    {
      "id": "g7-b7-mcq-1",
      "type": "multiple_choice",
      "question": "Dấu đầu tiên bắt buộc phải gõ vào ô khi nhập công thức hoặc hàm tính toán trong Excel là gì?",
      "options": [
        "Dấu bằng (=)",
        "Dấu chấm hỏi (?)",
        "Dấu ngoặc kép (\")",
        "Dấu cộng (+)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 33): Mọi công thức trong bảng tính đều phải bắt đầu bằng dấu bằng (=).",
      "hint": "Bắt đầu bằng dấu =."
    },
    {
      "id": "g7-b7-mcq-2",
      "type": "multiple_choice",
      "question": "Hàm nào trong Excel dùng để tính TỔNG các số trong một khối ô?",
      "options": [
        "COUNT",
        "MAX",
        "SUM",
        "AVERAGE"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Hàm SUM dùng để tính tổng các số trong danh sách hoặc khối ô.",
      "hint": "SUM nghĩa là tính tổng."
    },
    {
      "id": "g7-b7-mcq-3",
      "type": "multiple_choice",
      "question": "Hàm nào trong Excel dùng để tính TRUNG BÌNH CỘNG của một dãy số?",
      "options": [
        "AVERAGE",
        "SUM",
        "COUNT",
        "MIN"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Hàm AVERAGE tính trung bình cộng của các đối số truyền vào.",
      "hint": "AVERAGE nghĩa là trung bình cộng."
    },
    {
      "id": "g7-b7-mcq-4",
      "type": "multiple_choice",
      "question": "Tại ô C1 có công thức: =A1+B1. Khi sao chép công thức từ ô C1 xuống ô C2, công thức tại ô C2 sẽ tự động đổi thành gì?",
      "options": [
        "=B2+C2",
        "=A3+B3",
        "=A1+B1",
        "=A2+B2"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Địa chỉ tương đối A1 và B1 sẽ tự động tăng chỉ số hàng khi sao chép công thức xuống hàng dưới (hàng 1 thành hàng 2).",
      "hint": "Hàng 1 tăng thêm 1 thành hàng 2: =A2+B2."
    },
    {
      "id": "g7-b7-mcq-5",
      "type": "multiple_choice",
      "question": "Kí hiệu phép nhân và phép chia trong công thức Excel lần lượt là:",
      "options": [
        "Dấu . và dấu /",
        "Dấu sao (*) và dấu gạch chéo (/)",
        "Dấu & và dấu %",
        "Dấu x và dấu hai chấm (:)"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Trong Excel, phép nhân dùng dấu sao (*) và phép chia dùng dấu gạch chéo (/).",
      "hint": "Dấu * và dấu /."
    },
    {
      "id": "g7-b7-mcq-6",
      "type": "multiple_choice",
      "question": "Tại ô D1 có công thức: =(A1+B1)*C1. Nếu A1=2, B1=3, C1=4 thì kết quả hiển thị tại D1 là bao nhiêu?",
      "options": [
        "14",
        "24",
        "20",
        "10"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "(2 + 3) * 4 = 5 * 4 = 20. Thứ tự phép toán trong ngoặc thực hiện trước.",
      "hint": "Tính trong ngoặc trước: 2 + 3 = 5, sau đó 5 * 4 = 20."
    },
    {
      "id": "g7-b7-mcq-7",
      "type": "multiple_choice",
      "question": "Ưu điểm vượt trội của việc sử dụng địa chỉ ô (như =A1+B1) thay vì nhập trực tiếp số (như =10+20) là gì?",
      "options": [
        "Có thể lưu tệp mà không cần đặt tên",
        "Khi số liệu trong ô A1 hoặc B1 thay đổi, kết quả tính toán tự động cập nhật ngay lập tức",
        "Giúp máy tính chạy mát hơn",
        "Không bao giờ bị lỗi phần cứng"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "SGK Tin học 7 KNTT (Trang 34): Tính toán tự động bằng địa chỉ ô là tính năng cốt lõi giúp bảng tính linh hoạt khi số liệu thay đổi.",
      "hint": "Kết quả tự động cập nhật lại khi số liệu nguồn thay đổi."
    },
    {
      "id": "g7-b7-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về công thức và hàm trong Excel:",
      "options": [
        "a) Công thức =SUM(A1:A5) sẽ tính tổng giá trị của 5 ô từ A1 đến A5.",
        "b) Tên hàm trong Excel bắt buộc phải viết bằng chữ hoa, viết chữ thường hàm sẽ báo lỗi.",
        "c) Công thức =AVERAGE(2, 4, 6) sẽ cho kết quả là 4.",
        "d) Trong Excel, phép toán lũy thừa 2 mũ 3 được viết là: =2^3"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "explanation": "a) Đúng; b) Sai vì Excel không phân biệt chữ hoa hay thường khi nhập tên hàm (viết sum hay SUM đều được); c) Đúng: (2+4+6)/3 = 4; d) Đúng.",
      "difficulty": "trung_binh",
      "hint": "Tên hàm viết chữ hoa hay thường đều được."
    },
    {
      "id": "g7-b7-blank-1",
      "type": "fill_blank",
      "question": "Mọi công thức trong Excel phải bắt đầu bằng [1]. Hàm [2] dùng để tính tổng, còn hàm [3] dùng để tính trung bình cộng.",
      "blankAnswers": [
        "dấu bằng (=)",
        "SUM",
        "AVERAGE"
      ],
      "wordBank": [
        "dấu bằng (=)",
        "SUM",
        "AVERAGE",
        "COUNT",
        "dấu cộng (+)",
        "MAX"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Bắt đầu bằng dấu =; SUM tính tổng; AVERAGE tính trung bình cộng.",
      "hint": "Dấu =; hàm SUM; hàm AVERAGE."
    },
    {
      "id": "g7-b7-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi công thức ở Cột A với kết quả tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) =SUM(10, 20, 30)"
        },
        {
          "id": "2",
          "text": "2) =AVERAGE(10, 20, 30)"
        },
        {
          "id": "3",
          "text": "3) =10 + 2 * 5"
        },
        {
          "id": "4",
          "text": "4) =(10 + 2) * 5"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "60"
        },
        {
          "id": "b",
          "text": "20"
        },
        {
          "id": "c",
          "text": "20 (nhân chia trước cộng trừ sau)"
        },
        {
          "id": "d",
          "text": "60 (trong ngoặc trước)"
        }
      ],
      "correctMatches": {
        "1": "a",
        "2": "b",
        "3": "c",
        "4": "d"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Tổng là 60; Trung bình là 20; 10+2*5 = 10+10 = 20; (10+2)*5 = 12*5 = 60.",
      "hint": "Thực hiện phép tính theo thứ tự ưu tiên."
    }
  ],
  "tin7-bai-8": [
    {
      "id": "g7-b8-mcq-1",
      "type": "multiple_choice",
      "question": "Hàm MAX trong Excel dùng để làm gì?",
      "options": [
        "Tìm giá trị nhỏ nhất",
        "Đếm các ô có dữ liệu",
        "Tìm giá trị LỚN NHẤT trong danh sách số hoặc khối ô",
        "Tính tổng tất cả các số"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Hàm MAX (viết tắt của Maximum) trả về số có giá trị lớn nhất trong các đối số.",
      "hint": "MAX là maximum (lớn nhất)."
    },
    {
      "id": "g7-b8-mcq-2",
      "type": "multiple_choice",
      "question": "Hàm MIN trong Excel dùng để làm gì?",
      "options": [
        "Tính trung bình cộng",
        "Tìm giá trị lớn nhất",
        "Làm tròn số thập phân",
        "Tìm giá trị NHỎ NHẤT trong danh sách số hoặc khối ô"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Hàm MIN (viết tắt của Minimum) trả về số có giá trị nhỏ nhất.",
      "hint": "MIN là minimum (nhỏ nhất)."
    },
    {
      "id": "g7-b8-mcq-3",
      "type": "multiple_choice",
      "question": "Hàm COUNT trong bảng tính Excel có công dụng gì?",
      "options": [
        "Đếm số lượng các ô chứa dữ liệu kiểu SỐ trong khối ô được chọn",
        "Đếm số lượng chữ cái trong văn bản",
        "Tính tổng tất cả các số",
        "Đếm số lượng trang tính"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 7 KNTT: Hàm COUNT đếm số lượng ô có chứa dữ liệu số trong danh sách truyền vào.",
      "hint": "Hàm COUNT dùng để đếm số ô chứa số."
    },
    {
      "id": "g7-b8-mcq-4",
      "type": "multiple_choice",
      "question": "Tính năng AutoFill (kéo tay cầm điền ở góc dưới bên phải ô tính) có tác dụng gì?",
      "options": [
        "Đóng bảng tính tự động",
        "Xóa sạch toàn bộ dữ liệu trong bảng",
        "Sao chép nhanh công thức hoặc tự động tạo dãy số/thứ/ngày tháng liên tiếp theo quy luật",
        "Tắt máy tính an toàn"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "AutoFill cho phép kéo sao chép công thức xuống các ô dưới hoặc sinh dãy số liên tiếp 1, 2, 3... cực kỳ nhanh chóng.",
      "hint": "Sao chép nhanh công thức và điền dữ liệu theo quy luật."
    },
    {
      "id": "g7-b8-mcq-5",
      "type": "multiple_choice",
      "question": "Nếu ô A1 chứa số 1 và ô A2 chứa số 2. Chọn cả hai ô rồi dùng chuột kéo nút AutoFill xuống ô A5, giá trị tại ô A5 sẽ là:",
      "options": [
        "5",
        "2",
        "1",
        "10"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Excel nhận diện quy luật cấp số cộng công sai +1: A1=1, A2=2, A3=3, A4=4, A5=5.",
      "hint": "Dãy số tăng dần 1, 2, 3, 4, 5."
    },
    {
      "id": "g7-b8-mcq-6",
      "type": "multiple_choice",
      "question": "Công thức =MAX(5, 12, 3, 8) sẽ trả về kết quả là:",
      "options": [
        "28",
        "5",
        "3",
        "12"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Trong 4 số 5, 12, 3, 8 thì số 12 là số lớn nhất.",
      "hint": "Tìm số lớn nhất trong các số đã cho."
    },
    {
      "id": "g7-b8-mcq-7",
      "type": "multiple_choice",
      "question": "Công thức =MIN(15, 2, 9, 24) sẽ trả về kết quả là:",
      "options": [
        "15",
        "2",
        "24",
        "0"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Số nhỏ nhất trong 4 số trên là số 2.",
      "hint": "Tìm số nhỏ nhất trong các số đã cho."
    },
    {
      "id": "g7-b8-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về các hàm hỗ trợ tính toán trong Excel:",
      "options": [
        "a) Hàm MAX chỉ tính được tối đa 2 đối số.",
        "b) Cú pháp =MIN(A1:A10) cho kết quả là số nhỏ nhất trong 10 ô từ A1 đến A10.",
        "c) Nút AutoFill xuất hiện khi đưa con trỏ chuột vào góc dưới bên phải ô tính (con trỏ chuyển thành dấu cộng màu đen).",
        "d) Hàm COUNT sẽ đếm cả các ô trống không có dữ liệu."
      ],
      "trueFalseAnswers": [
        false,
        true,
        true,
        false
      ],
      "explanation": "a) Sai vì hàm MAX nhận được nhiều đối số hoặc cả khối ô; b) Đúng; c) Đúng; d) Sai vì COUNT bỏ qua các ô trống.",
      "difficulty": "trung_binh",
      "hint": "AutoFill có biểu tượng dấu cộng nhỏ màu đen ở góc dưới ô."
    },
    {
      "id": "g7-b8-blank-1",
      "type": "fill_blank",
      "question": "Để tìm giá trị lớn nhất trong bảng điểm, em dùng hàm [1]. Để tìm giá trị nhỏ nhất, em dùng hàm [2]. Nút điền tự động [3] giúp sao chép công thức nhanh chóng.",
      "blankAnswers": [
        "MAX",
        "MIN",
        "AutoFill"
      ],
      "wordBank": [
        "MAX",
        "MIN",
        "AutoFill",
        "SUM",
        "AVERAGE",
        "COUNT"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Lớn nhất: MAX; Nhỏ nhất: MIN; Kéo sao chép: AutoFill.",
      "hint": "MAX; MIN; AutoFill."
    },
    {
      "id": "g7-b8-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi hàm ở Cột A với chức năng tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Hàm MAX"
        },
        {
          "id": "2",
          "text": "2) Hàm MIN"
        },
        {
          "id": "3",
          "text": "3) Hàm COUNT"
        },
        {
          "id": "4",
          "text": "4) Hàm SUM"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Tính tổng các giá trị"
        },
        {
          "id": "b",
          "text": "Tìm giá trị lớn nhất"
        },
        {
          "id": "c",
          "text": "Tìm giá trị nhỏ nhất"
        },
        {
          "id": "d",
          "text": "Đếm số ô có dữ liệu số"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "d",
        "4": "a"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "MAX: lớn nhất; MIN: nhỏ nhất; COUNT: đếm số ô chứa số; SUM: tính tổng.",
      "hint": "Nối từng hàm với chức năng chính xác."
    }
  ],
  "tin7-bai-9": [
    {
      "id": "g7-b9-mcq-1",
      "type": "multiple_choice",
      "question": "Để kẻ đường viền khung cho bảng tính trong Excel, em chọn lệnh nào trong nhóm lệnh Font trên thanh Ribbon?",
      "options": [
        "Underline (U)",
        "Bold (B)",
        "Italic (I)",
        "Borders (Biểu tượng cửa sổ có viền)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Lệnh Borders trên thanh Ribbon cho phép kẻ đường viền quanh ô hoặc toàn bộ bảng tính.",
      "hint": "Borders nghĩa là đường viền."
    },
    {
      "id": "g7-b9-mcq-2",
      "type": "multiple_choice",
      "question": "Để định dạng hiển thị số tiền có dấu phân cách hàng nghìn (ví dụ 100,000 đ), em chọn lệnh định dạng nào?",
      "options": [
        "Decrease Decimal",
        "Comma Style (Biểu tượng dấu phẩy)",
        "Percent Style (%)",
        "Increase Indent"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Nút Comma Style (dấu phẩy) trên nhóm Number dùng để thêm dấu phân cách hàng nghìn.",
      "hint": "Biểu tượng dấu phẩy trên thanh Number."
    },
    {
      "id": "g7-b9-mcq-3",
      "type": "multiple_choice",
      "question": "Nút lệnh Merge & Center trong Excel dùng để làm gì?",
      "options": [
        "Gộp các ô được chọn thành một ô duy nhất và căn lề giữa dữ liệu",
        "Tách một ô thành nhiều ô nhỏ",
        "Xóa sạch các ô được chọn",
        "Đổi màu nền bảng tính sang màu vàng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Merge & Center gộp nhiều ô thành 1 ô lớn và căn giữa văn bản (thường dùng làm tiêu đề bảng biểu).",
      "hint": "Gộp ô và căn giữa tiêu đề."
    },
    {
      "id": "g7-b9-mcq-4",
      "type": "multiple_choice",
      "question": "Công cụ Fill Color (biểu tượng thùng sơn đổ màu) trên thanh Home dùng để:",
      "options": [
        "Kẻ đường viền màu",
        "Đổi màu chữ viết trong ô",
        "Tô màu nền cho ô hoặc khối ô được chọn",
        "Đổi phông chữ"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Fill Color dùng để tô màu nền cho ô tính, giúp làm nổi bật tiêu đề hoặc các dữ liệu quan trọng.",
      "hint": "Biểu tượng thùng sơn dùng để tô màu nền."
    },
    {
      "id": "g7-b9-mcq-5",
      "type": "multiple_choice",
      "question": "Để thay đổi độ rộng của một cột trong bảng tính Excel, thao tác nào là đúng?",
      "options": [
        "Đưa con trỏ chuột vào vạch ngăn cách giữa hai tên cột trên thanh tiêu đề cột, khi con trỏ đổi thành mũi tên 2 chiều thì kéo sang trái/phải",
        "Nhấn phím cách Space liên tục",
        "Nhấn phím Enter",
        "Xóa bớt chữ trong ô"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 7 KNTT (Trang 43): Kéo vạch ngăn cách tên cột hoặc nháy đúp chuột vào vạch ngăn cách để tự động co giãn độ rộng cột.",
      "hint": "Kéo vạch phân cách giữa hai chữ cái tên cột."
    },
    {
      "id": "g7-b9-mcq-6",
      "type": "multiple_choice",
      "question": "Khi trong ô xuất hiện một dãy kí tự \"###\", điều đó có nghĩa là gì?",
      "options": [
        "Công thức bị sai tên hàm",
        "Dữ liệu trong ô đã bị xóa mất",
        "Bảng tính đã bị nhiễm virus",
        "Độ rộng của cột quá hẹp, không đủ chỗ để hiển thị hết số liệu kiểu số/ngày tháng"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Kí hiệu ### xuất hiện khi cột quá hẹp không hiển thị đủ số. Chỉ cần kéo rộng cột ra thì số liệu sẽ hiển thị lại bình thường.",
      "hint": "Cột quá hẹp, chỉ cần kéo rộng cột ra là hết."
    },
    {
      "id": "g7-b9-mcq-7",
      "type": "multiple_choice",
      "question": "Để căn dữ liệu nằm chính giữa ô cả theo chiều dọc lẫn chiều ngang, em kết hợp hai lệnh căn lề nào?",
      "options": [
        "Top Align và Align Left",
        "Middle Align (chiều dọc) và Center (chiều ngang)",
        "Bottom Align và Align Right",
        "Justify và Wrap Text"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Middle Align căn giữa theo chiều đứng, kết hợp Center căn giữa theo chiều ngang sẽ đưa chữ vào chính giữa ô.",
      "hint": "Middle Align kết hợp với Center."
    },
    {
      "id": "g7-b9-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về định dạng trình bày bảng tính:",
      "options": [
        "a) Lệnh Merge & Center chỉ thực hiện được khi chọn ít nhất 2 ô liền kề.",
        "b) Kẻ đường viền Borders giúp bảng tính rõ ràng và đẹp mắt khi in ra giấy.",
        "c) Khi kéo giãn độ rộng của một ô thì toàn bộ cột chứa ô đó cũng tự động giãn theo.",
        "d) Trong Excel, không thể đổi màu chữ khác màu đen mặc định."
      ],
      "trueFalseAnswers": [
        true,
        true,
        true,
        false
      ],
      "explanation": "a) Đúng; b) Đúng; c) Đúng vì độ rộng cột áp dụng cho toàn bộ các ô trong cột đó; d) Sai vì nút Font Color cho phép chọn bất kì màu nào.",
      "difficulty": "trung_binh",
      "hint": "Font Color cho phép đổi màu chữ tùy thích."
    },
    {
      "id": "g7-b9-blank-1",
      "type": "fill_blank",
      "question": "Lệnh [1] dùng để gộp các ô và căn lề giữa. Nút [2] dùng để kẻ đường viền khung cho bảng tính, còn biểu tượng dấu phẩy [3] giúp phân cách hàng nghìn.",
      "blankAnswers": [
        "Merge & Center",
        "Borders",
        "Comma Style"
      ],
      "wordBank": [
        "Merge & Center",
        "Borders",
        "Comma Style",
        "Wrap Text",
        "Bold",
        "Percent"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Gộp ô: Merge & Center; Đường viền: Borders; Phân cách hàng nghìn: Comma Style.",
      "hint": "Merge & Center; Borders; Comma Style."
    },
    {
      "id": "g7-b9-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi lệnh ở Cột A với chức năng tương ứng ở Cột B trong Excel:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Borders"
        },
        {
          "id": "2",
          "text": "2) Merge & Center"
        },
        {
          "id": "3",
          "text": "3) Fill Color"
        },
        {
          "id": "4",
          "text": "4) Font Color"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Tô màu nền cho ô tính"
        },
        {
          "id": "b",
          "text": "Gộp nhiều ô và căn lề giữa"
        },
        {
          "id": "c",
          "text": "Kẻ đường viền cho bảng tính"
        },
        {
          "id": "d",
          "text": "Đổi màu chữ hiển thị trong ô"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "b",
        "3": "a",
        "4": "d"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Borders: kẻ viền; Merge & Center: gộp ô; Fill Color: màu nền; Font Color: màu chữ.",
      "hint": "Nối từng lệnh với chức năng hiển thị."
    }
  ],
  "tin7-bai-10": [
    {
      "id": "g7-b10-mcq-1",
      "type": "multiple_choice",
      "question": "Để định dạng một ô dữ liệu số trong Excel hiển thị dưới dạng phần trăm (%), em chọn nút lệnh nào?",
      "options": [
        "Nút Wrap Text",
        "Nút Bold (B)",
        "Nút lệnh Percent Style (%) trong nhóm Number",
        "Nút Currency ($)"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 48): Nhấn nút % (Percent Style) trong nhóm Number của dải lệnh Home để đổi giá trị thập phân sang dạng phần trăm.",
      "hint": "Biểu tượng dấu phần trăm %."
    },
    {
      "id": "g7-b10-mcq-2",
      "type": "multiple_choice",
      "question": "Ô tính A1 đang chứa số 0.25. Khi em nhấn nút Percent Style (%), giá trị hiển thị trong ô sẽ là:",
      "options": [
        "250%",
        "25%",
        "0.25%",
        "2.5%"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "0.25 = 25/100 = 25%. Excel sẽ nhân giá trị với 100 và thêm ký hiệu % vào sau.",
      "hint": "0.25 nhân 100 thành 25%."
    },
    {
      "id": "g7-b10-mcq-3",
      "type": "multiple_choice",
      "question": "Để TĂNG số chữ số ở phần thập phân sau dấu phẩy trong ô tính, em chọn nút lệnh nào?",
      "options": [
        "Percent Style",
        "Comma Style",
        "Increase Decimal (mũi tên hướng sang trái kèm số 0)",
        "Decrease Decimal (mũi tên hướng sang phải)"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Increase Decimal làm tăng thêm một chữ số phần thập phân; Decrease Decimal làm giảm bớt chữ số phần thập phân.",
      "hint": "Increase Decimal để tăng thêm chữ số sau dấu phẩy."
    },
    {
      "id": "g7-b10-mcq-4",
      "type": "multiple_choice",
      "question": "Khi một đoạn văn bản trong ô quá dài vượt quá độ rộng cột, nút lệnh nào giúp chữ tự động ngắt xuống dòng trong cùng một ô?",
      "options": [
        "Merge & Center",
        "Orientation",
        "Shrink to Fit",
        "Wrap Text"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Lệnh Wrap Text cho phép văn bản tự động xuống dòng trong phạm vi chiều rộng của ô đó.",
      "hint": "Wrap Text giúp ngắt dòng văn bản trong ô."
    },
    {
      "id": "g7-b10-mcq-5",
      "type": "multiple_choice",
      "question": "Ô tính A1 đang chứa số 8.567. Sau khi nhấn nút Decrease Decimal (giảm số chữ số thập phân) 1 lần, giá trị hiển thị trên màn hình sẽ là:",
      "options": [
        "8.57",
        "8.5",
        "8.56",
        "9"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "Excel tự động làm tròn số: chữ số thứ ba là 7 (>= 5) nên khi giảm còn 2 chữ số thập phân, số 6 được làm tròn lên thành 7 (8.57).",
      "hint": "Làm tròn theo quy tắc toán học: chữ số 7 làm tròn lên thành 8.57."
    },
    {
      "id": "g7-b10-mcq-6",
      "type": "multiple_choice",
      "question": "Tính năng Conditional Formatting (Định dạng có điều kiện) trong Excel dùng để làm gì?",
      "options": [
        "Gửi email thông báo điểm",
        "Tự động xóa các ô có điểm kém",
        "Tự động đổi màu nền hoặc màu chữ của ô khi giá trị trong ô thỏa mãn một điều kiện đặt trước (ví dụ: điểm < 5 tô màu đỏ)",
        "Khóa bảng tính không cho ai xem"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 7 KNTT: Conditional Formatting tự động định dạng màu sắc theo quy tắc định trước giúp lọc nhanh dữ liệu nổi bật.",
      "hint": "Tự động tô màu khi thỏa mãn điều kiện đặt trước."
    },
    {
      "id": "g7-b10-mcq-7",
      "type": "multiple_choice",
      "question": "Trước khi in bảng tính ra giấy, thao tác nào giúp em kiểm tra xem bảng tính có bị ngắt đôi sang trang khác hay không?",
      "options": [
        "Chọn chế độ xem trước khi in (Print Preview)",
        "Tắt màn hình máy tính",
        "Đổi màu nền bảng tính sang màu đen",
        "Xóa bớt công thức tính toán"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Print Preview (Xem trước khi in) cho phép xem chính xác trang in thực tế trên giấy trước khi bấm lệnh in.",
      "hint": "Xem trước khi in (Print Preview)."
    },
    {
      "id": "g7-b10-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về định dạng nâng cao trong bảng tính Excel:",
      "options": [
        "a) Định dạng giảm số chữ số thập phân chỉ thay đổi cách hiển thị trên màn hình chứ không làm mất giá trị chính xác của số trong ô.",
        "b) Lệnh Wrap Text làm chiều cao của hàng tự động tăng lên để chứa đủ các dòng chữ.",
        "c) Định dạng % làm cho giá trị thật của số trong ô bị nhân lên 100 lần trong tính toán.",
        "d) Trong bảng tính, ta có thể chọn hướng giấy in ngang (Landscape) hoặc in dọc (Portrait)."
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "explanation": "a) Đúng; b) Đúng; c) Sai vì giá trị thật không đổi (0.5 hiển thị là 50% nhưng khi tính toán vẫn là 0.5); d) Đúng.",
      "difficulty": "trung_binh",
      "hint": "Định dạng chỉ thay đổi cách hiển thị, giá trị tính toán bên trong không bị sai lệch."
    },
    {
      "id": "g7-b10-blank-1",
      "type": "fill_blank",
      "question": "Để đổi số thập phân sang phần trăm, em chọn nút [1]. Lệnh [2] giúp ngắt văn bản dài xuống dòng trong ô. Nút [3] dùng để giảm bớt số chữ số phần thập phân.",
      "blankAnswers": [
        "Percent Style (%)",
        "Wrap Text",
        "Decrease Decimal"
      ],
      "wordBank": [
        "Percent Style (%)",
        "Wrap Text",
        "Decrease Decimal",
        "Increase Decimal",
        "Merge & Center",
        "Borders"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Phần trăm: Percent Style; Xuống dòng trong ô: Wrap Text; Giảm thập phân: Decrease Decimal.",
      "hint": "Percent Style; Wrap Text; Decrease Decimal."
    },
    {
      "id": "g7-b10-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi lệnh ở Cột A với chức năng tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Percent Style (%)"
        },
        {
          "id": "2",
          "text": "2) Increase Decimal"
        },
        {
          "id": "3",
          "text": "3) Decrease Decimal"
        },
        {
          "id": "4",
          "text": "4) Wrap Text"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Tăng thêm một chữ số sau dấu phẩy"
        },
        {
          "id": "b",
          "text": "Giảm bớt một chữ số sau dấu phẩy kèm làm tròn"
        },
        {
          "id": "c",
          "text": "Hiển thị dữ liệu dưới dạng tỉ lệ phần trăm"
        },
        {
          "id": "d",
          "text": "Ngắt chữ xuống dòng trong cùng một ô tính"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "a",
        "3": "b",
        "4": "d"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "1-c; 2-a; 3-b; 4-d.",
      "hint": "Nối đúng lệnh với chức năng."
    }
  ],
  "tin7-bai-11": [
    {
      "id": "g7-b11-mcq-1",
      "type": "multiple_choice",
      "question": "Phần mềm nào sau đây được sử dụng phổ biến nhất để thiết kế bài trình chiếu báo cáo?",
      "options": [
        "Notepad",
        "Microsoft Excel",
        "Calculator",
        "Microsoft PowerPoint"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "PowerPoint là phần mềm chuyên dụng tạo bài thuyết trình đa phương tiện.",
      "hint": "PowerPoint."
    },
    {
      "id": "g7-b11-mcq-2",
      "type": "multiple_choice",
      "question": "Trang đầu tiên của một bài trình chiếu thường có vai trò gì?",
      "options": [
        "Trang kết thúc cảm ơn khán giả",
        "Trang tiêu đề (Title Slide) giới thiệu tên chủ đề bài thuyết trình và tên tác giả/nhóm thực hiện",
        "Trang chứa mục lục dài kín chữ",
        "Để trống không ghi gì"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 52): Trang đầu tiên là Title Slide giới thiệu tiêu đề và tác giả bài trình chiếu.",
      "hint": "Trang tiêu đề giới thiệu tên chủ đề và tác giả."
    },
    {
      "id": "g7-b11-mcq-3",
      "type": "multiple_choice",
      "question": "Để thêm một trang chiếu mới (Slide mới) vào bài trình chiếu, em chọn lệnh nào trong dải lệnh Home?",
      "options": [
        "New File",
        "Duplicate Sheet",
        "Insert Page",
        "New Slide (hoặc tổ hợp phím Ctrl + M)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Nút New Slide (phím tắt Ctrl + M) dùng để tạo thêm trang chiếu mới trong PowerPoint.",
      "hint": "Lệnh New Slide hoặc phím tắt Ctrl + M."
    },
    {
      "id": "g7-b11-mcq-4",
      "type": "multiple_choice",
      "question": "Bố cục trang chiếu (Layout) trong PowerPoint quy định điều gì?",
      "options": [
        "Thời lượng thuyết trình bài học",
        "Cách sắp xếp vị trí của các khung văn bản, hình ảnh, tiêu đề trên trang chiếu",
        "Kích thước màn hình tivi",
        "Tốc độ quạt tản nhiệt của máy chiếu"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Slide Layout định hình sẵn vị trí các khung chứa (placeholder) cho tiêu đề, nội dung, hình ảnh trên trang chiếu.",
      "hint": "Quy định cách bố trí vị trí các khung chứa trên slide."
    },
    {
      "id": "g7-b11-mcq-5",
      "type": "multiple_choice",
      "question": "Quy tắc nào sau đây giúp tạo một bài trình chiếu đẹp, chuyên nghiệp và người xem dễ theo dõi?",
      "options": [
        "Mỗi trang chỉ nên truyền tải 1 ý chính, chữ ngắn gọn súc tích, màu chữ tương phản rõ rệt với màu nền",
        "Chèn càng nhiều đoạn văn bản dài kín trang càng tốt",
        "Sử dụng hơn 10 phông chữ khác nhau trên cùng một trang slide",
        "Dùng chữ màu vàng sáng trên nền trắng tinh"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "Bài trình chiếu cần thoáng đãng, dùng gạch đầu dòng, hình ảnh minh họa chất lượng và độ tương phản cao để khán giả đọc rõ từ xa.",
      "hint": "Ngắn gọn, rõ ràng, màu chữ tương phản tốt với nền."
    },
    {
      "id": "g7-b11-mcq-6",
      "type": "multiple_choice",
      "question": "Để xóa một trang chiếu không cần thiết trong bài thuyết trình, em thực hiện thao tác nào?",
      "options": [
        "Nhấn phím F5",
        "Nhấn phím Ctrl + C",
        "Chọn trang chiếu đó ở ngăn bên trái rồi nhấn phím Delete trên bàn phím",
        "Tắt màn hình máy tính"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Nhấp chọn slide trong ngăn danh sách slide bên trái rồi bấm Delete hoặc Backspace để xóa.",
      "hint": "Chọn slide rồi bấm phím Delete."
    },
    {
      "id": "g7-b11-mcq-7",
      "type": "multiple_choice",
      "question": "Chức năng Duplicate Slide trong PowerPoint dùng để làm gì?",
      "options": [
        "Tạo ra một bản sao giống hệt trang chiếu đang chọn",
        "Đổi hướng trang chiếu sang hình tròn",
        "Xóa trang chiếu hiện tại",
        "Dịch nội dung trang chiếu sang tiếng Anh"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Duplicate Slide nhân bản trang chiếu đang chọn thành 2 trang giống hệt nhau.",
      "hint": "Duplicate là nhân bản, sao chép slide."
    },
    {
      "id": "g7-b11-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về bài trình chiếu PowerPoint:",
      "options": [
        "a) Bài trình chiếu là tập hợp các trang chiếu được lưu chung trong một tệp.",
        "b) Tổ hợp phím Ctrl + M dùng để tạo thêm một trang chiếu mới.",
        "c) Một trang chiếu bắt buộc phải chèn ít nhất 50 dòng chữ mới đạt yêu cầu.",
        "d) Có thể thay đổi bố cục Layout của một trang chiếu bất cứ lúc nào."
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "explanation": "a) Đúng; b) Đúng; c) Sai vì slide nên ngắn gọn, dùng từ khóa súc tích; d) Đúng qua nút Layout trên dải Home.",
      "difficulty": "trung_binh",
      "hint": "Ctrl + M tạo slide mới; slide nên ngắn gọn súc tích."
    },
    {
      "id": "g7-b11-blank-1",
      "type": "fill_blank",
      "question": "Trang đầu tiên của bài trình chiếu là trang [1]. Để thêm trang chiếu mới, ta dùng tổ hợp phím [2]. Nút [3] dùng để chọn bố cục sắp xếp các đối tượng trên slide.",
      "blankAnswers": [
        "tiêu đề",
        "Ctrl + M",
        "Layout"
      ],
      "wordBank": [
        "tiêu đề",
        "Ctrl + M",
        "Layout",
        "Ctrl + N",
        "kết luận",
        "Design"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Trang đầu là trang tiêu đề; phím tắt thêm slide là Ctrl + M; đổi bố cục dùng nút Layout.",
      "hint": "Trang tiêu đề; Ctrl + M; Layout."
    },
    {
      "id": "g7-b11-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi thao tác ở Cột A với chức năng tương ứng ở Cột B trong PowerPoint:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) New Slide (Ctrl + M)"
        },
        {
          "id": "2",
          "text": "2) Layout"
        },
        {
          "id": "3",
          "text": "3) Duplicate Slide"
        },
        {
          "id": "4",
          "text": "4) Delete Slide"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Nhân đôi trang chiếu thành bản sao"
        },
        {
          "id": "b",
          "text": "Xóa trang chiếu khỏi bài"
        },
        {
          "id": "c",
          "text": "Chèn thêm trang chiếu mới"
        },
        {
          "id": "d",
          "text": "Thay đổi bố cục sắp xếp trên trang chiếu"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "d",
        "3": "a",
        "4": "b"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "1-c; 2-d; 3-a; 4-b.",
      "hint": "Nối thao tác với chức năng trên slide."
    }
  ],
  "tin7-bai-12": [
    {
      "id": "g7-b12-mcq-1",
      "type": "multiple_choice",
      "question": "Trong PowerPoint, hiệu ứng chuyển tiếp giữa các trang chiếu (từ slide này sang slide tiếp theo) nằm ở dải lệnh nào?",
      "options": [
        "Review",
        "Design",
        "Animations",
        "Transitions"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Dải lệnh Transitions chứa các hiệu ứng chuyển đổi giữa các slide (chuyển cảnh).",
      "hint": "Transitions là chuyển cảnh giữa các slide."
    },
    {
      "id": "g7-b12-mcq-2",
      "type": "multiple_choice",
      "question": "Dải lệnh Animations trong PowerPoint dùng để tạo hiệu ứng cho đối tượng nào?",
      "options": [
        "Chuyển cả trang slide sang trang slide mới",
        "Các đối tượng bên trong trang chiếu (như đoạn văn bản, hình ảnh, sơ đồ hình vẽ)",
        "Chỉnh sửa âm lượng loa máy tính",
        "Đổi độ phân giải màn hình máy chiếu"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Animations tạo hiệu ứng chuyển động cho các phần tử bên trong slide (chữ bay vào, ảnh xoay, biểu đồ nhấp nháy...).",
      "hint": "Hiệu ứng cho từng chữ và hình ảnh trong slide."
    },
    {
      "id": "g7-b12-mcq-3",
      "type": "multiple_choice",
      "question": "Phím tắt nào trên bàn phím dùng để BẮT ĐẦU TRÌNH CHIẾU toàn màn hình từ trang đầu tiên trong PowerPoint?",
      "options": [
        "Phím Ctrl + S",
        "Phím Esc",
        "Phím F5",
        "Phím Shift + F5"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Nhấn F5 để bắt đầu trình chiếu từ slide đầu tiên; Shift + F5 để chiếu từ slide hiện tại.",
      "hint": "Phím chức năng F5."
    },
    {
      "id": "g7-b12-mcq-4",
      "type": "multiple_choice",
      "question": "Muốn bắt đầu trình chiếu từ chính trang chiếu đang được chọn (không phải từ đầu), em dùng tổ hợp phím nào?",
      "options": [
        "Alt + F5",
        "Shift + F5",
        "F5",
        "Ctrl + F5"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Shift + F5 trình chiếu từ trang hiện tại đang soạn thảo.",
      "hint": "Giữ phím Shift và bấm F5."
    },
    {
      "id": "g7-b12-mcq-5",
      "type": "multiple_choice",
      "question": "Khi đang trong chế độ trình chiếu toàn màn hình, phím nào dùng để thoát khỏi chế độ trình chiếu?",
      "options": [
        "Phím Enter",
        "Phím Space",
        "Phím Esc (Escape)",
        "Phím F1"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Phím Esc ở góc trên cùng bên trái bàn phím dùng để hủy bỏ/thoát khỏi chế độ trình chiếu.",
      "hint": "Phím Esc ở góc trên bên trái bàn phím."
    },
    {
      "id": "g7-b12-mcq-6",
      "type": "multiple_choice",
      "question": "Nhóm hiệu ứng Entrance (màu xanh lá cây) trong dải lệnh Animations có tác dụng gì?",
      "options": [
        "Hiệu ứng xóa đối tượng vĩnh viễn",
        "Hiệu ứng nhấn mạnh đổi màu chữ",
        "Hiệu ứng làm đối tượng biến mất khỏi trang chiếu",
        "Hiệu ứng xuất hiện của đối tượng lên trang chiếu khi bấm chuột"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 7 KNTT (Trang 58): Nhóm Entrance (màu xanh) là hiệu ứng xuất hiện; Emphasis (màu vàng) là nhấn mạnh; Exit (màu đỏ) là biến mất.",
      "hint": "Entrance màu xanh lá là hiệu ứng xuất hiện."
    },
    {
      "id": "g7-b12-mcq-7",
      "type": "multiple_choice",
      "question": "Để chèn một hình ảnh từ máy tính vào trang chiếu, em vào dải lệnh nào?",
      "options": [
        "Insert -> Pictures",
        "Home -> Paste",
        "Transitions -> Pictures",
        "View -> Images"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Dải lệnh Insert (Chèn) chứa lệnh Pictures dùng để chèn hình ảnh.",
      "hint": "Insert nghĩa là chèn, chèn tranh ảnh chọn Pictures."
    },
    {
      "id": "g7-b12-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về định dạng và hiệu ứng trong PowerPoint:",
      "options": [
        "a) Transitions là hiệu ứng chuyển tiếp giữa các trang chiếu.",
        "b) Animations là hiệu ứng áp dụng cho các đối tượng bên trong trang chiếu.",
        "c) Không nên lạm dụng quá nhiều hiệu ứng bay lượn nhấp nháy vì sẽ làm người xem mất tập trung.",
        "d) Nhấn phím F5 sẽ trình chiếu bài từ slide hiện tại."
      ],
      "trueFalseAnswers": [
        true,
        true,
        true,
        false
      ],
      "explanation": "a) Đúng; b) Đúng; c) Đúng; d) Sai vì F5 chiếu từ trang đầu tiên (Shift + F5 mới chiếu từ trang hiện tại).",
      "difficulty": "trung_binh",
      "hint": "F5 chiếu từ đầu, Shift + F5 chiếu từ trang hiện tại."
    },
    {
      "id": "g7-b12-blank-1",
      "type": "fill_blank",
      "question": "Hiệu ứng chuyển trang slide nằm ở dải lệnh [1]. Hiệu ứng cho chữ và hình ảnh nằm ở dải lệnh [2]. Phím [3] dùng để bắt đầu chiếu từ trang đầu tiên.",
      "blankAnswers": [
        "Transitions",
        "Animations",
        "F5"
      ],
      "wordBank": [
        "Transitions",
        "Animations",
        "F5",
        "Shift + F5",
        "Design",
        "Insert"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Chuyển trang: Transitions; Chuyển động đối tượng: Animations; Chiếu từ đầu: F5.",
      "hint": "Transitions; Animations; F5."
    },
    {
      "id": "g7-b12-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi nhóm hiệu ứng ở Cột A với màu sắc/chức năng tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Entrance Effects (Ngôi sao xanh lá)"
        },
        {
          "id": "2",
          "text": "2) Emphasis Effects (Ngôi sao vàng)"
        },
        {
          "id": "3",
          "text": "3) Exit Effects (Ngôi sao đỏ)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Hiệu ứng làm đối tượng biến mất khỏi màn hình"
        },
        {
          "id": "b",
          "text": "Hiệu ứng xuất hiện của đối tượng lên trang chiếu"
        },
        {
          "id": "c",
          "text": "Hiệu ứng nhấn mạnh, đổi màu, rung lắc đối tượng"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "a"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Entrance: xuất hiện; Emphasis: nhấn mạnh; Exit: biến mất.",
      "hint": "Xanh xuất hiện, vàng nhấn mạnh, đỏ biến mất."
    }
  ],
  "tin7-bai-13": [
    {
      "id": "g7-b13-mcq-1",
      "type": "multiple_choice",
      "question": "Để bài trình chiếu đạt hiệu quả truyền tải thông tin tốt nhất khi thuyết trình, nguyên tắc phối màu nào là đúng?",
      "options": [
        "Dùng màu chữ trùng với màu nền để người xem phải nhìn thật kỹ",
        "Mỗi dòng văn bản dùng một màu sắc sặc sỡ khác nhau",
        "Màu chữ phải tương phản rõ rệt với màu nền (ví dụ: chữ tối trên nền sáng hoặc chữ sáng trên nền tối)",
        "Sử dụng nhiều hơn 10 phông chữ khác nhau trên một slide"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 65): Màu chữ và nền cần có độ tương phản cao để khán giả ngồi xa vẫn đọc được rõ ràng.",
      "hint": "Màu chữ và nền tương phản rõ rệt."
    },
    {
      "id": "g7-b13-mcq-2",
      "type": "multiple_choice",
      "question": "Quy tắc \"6x6\" hoặc \"7x7\" trong thiết kế nội dung slide thuyết trình có ý nghĩa là gì?",
      "options": [
        "Mỗi trang chiếu không nên quá 6-7 dòng chữ, và mỗi dòng không nên quá 6-7 từ ngắn gọn",
        "Mỗi bài chỉ được tạo tối đa 6 trang chiếu",
        "Slide phải có đúng 6 hình ảnh và 6 hiệu ứng nhấp nháy",
        "Thời gian nói một slide phải kéo dài đúng 6 phút"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Quy tắc này giúp slide cô đọng, tránh tình trạng sao chép cả đoạn văn dài đặc chữ lên trang chiếu.",
      "hint": "Tối đa 6-7 dòng, mỗi dòng 6-7 từ."
    },
    {
      "id": "g7-b13-mcq-3",
      "type": "multiple_choice",
      "question": "Bước đầu tiên quan trọng nhất khi bắt đầu chuẩn bị một bài trình chiếu thuyết trình là gì?",
      "options": [
        "Chọn ngay hiệu ứng chuyển động cho slide",
        "Chỉnh âm lượng loa máy tính",
        "Lên mạng tìm hình ảnh động chèn vào trước",
        "Xác định rõ chủ đề, đối tượng người nghe và xây dựng dàn ý chi tiết"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "Xác định mục tiêu, khán giả và lập dàn ý nội dung là bước nền tảng quyết định thành công của bài thuyết trình.",
      "hint": "Xác định chủ đề, đối tượng khán giả và lập dàn ý."
    },
    {
      "id": "g7-b13-mcq-4",
      "type": "multiple_choice",
      "question": "Khi thuyết trình trước lớp, người báo cáo NÊN thực hiện hành vi nào sau đây?",
      "options": [
        "Quay lưng lại khán giả và đọc nguyên văn từng chữ trên màn hình chiếu",
        "Tự tin, mắt nhìn bao quát khán giả, kết hợp cử chỉ điệu bộ và giọng nói rõ ràng truyền cảm",
        "Đứng im bất động nhìn xuống đất",
        "Nói thật nhỏ để người khác không nghe thấy"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Thuyết trình hiệu quả đòi hỏi giao tiếp bằng ánh mắt (eye contact), tương tác với khán giả và nói diễn giải chứ không chỉ đọc chép slide.",
      "hint": "Giao tiếp bằng ánh mắt với khán giả, tự tin nói rõ ràng."
    },
    {
      "id": "g7-b13-mcq-5",
      "type": "multiple_choice",
      "question": "Việc chèn hình ảnh hoặc video minh họa vào trang chiếu cần tuân thủ tiêu chí nào?",
      "options": [
        "Chèn ảnh mờ nhòe không liên quan để trang trí cho vui",
        "Mỗi trang chèn 20 bức ảnh nhỏ li ti",
        "Chèn ảnh che lấp hết chữ viết trên slide",
        "Hình ảnh rõ nét, liên quan trực tiếp đến nội dung bài học và có kích thước hài hòa"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Hình ảnh phải chất lượng cao, đúng trọng tâm bài thuyết trình và sắp xếp cân đối.",
      "hint": "Hình ảnh sắc nét, liên quan đến chủ đề bài học."
    },
    {
      "id": "g7-b13-mcq-6",
      "type": "multiple_choice",
      "question": "Phông chữ (Font) được khuyến khích sử dụng trong thiết kế bài trình chiếu nên là:",
      "options": [
        "Phông chữ có nhiều nét hoa lá cành phức tạp",
        "Phông chữ không chân, rõ ràng, dễ đọc từ xa như Arial, Calibri, Tahoma",
        "Phông chữ quá nhỏ bé kích cỡ 10pt",
        "Phông chữ thư pháp uốn lượn rối mắt"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Phông chữ không chân (Sans-serif) như Arial, Calibri giúp người ngồi ở xa đọc chữ dễ dàng và không bị mỏi mắt.",
      "hint": "Phông chữ không chân đơn giản, dễ đọc như Arial, Calibri."
    },
    {
      "id": "g7-b13-mcq-7",
      "type": "multiple_choice",
      "question": "Trang kết thúc của một bài thuyết trình chuyên nghiệp thường thể hiện nội dung gì?",
      "options": [
        "Tóm tắt kết luận ngắn gọn, lời cảm ơn khán giả và thông tin liên hệ / giải đáp câu hỏi",
        "Một trang trống màu đen",
        "Liệt kê danh sách các điểm kém trong lớp",
        "Chép lại toàn bộ sách giáo khoa"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Trang kết bài tóm tắt thông điệp cốt lõi, gửi lời cảm ơn và mời khán giả đặt câu hỏi thảo luận.",
      "hint": "Lời cảm ơn khán giả và tóm tắt kết luận."
    },
    {
      "id": "g7-b13-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về kỹ năng thuyết trình và hoàn thiện slide:",
      "options": [
        "a) Người thuyết trình chỉ nên coi trang chiếu là công cụ hỗ trợ trực quan, không đọc vẹt nguyên văn slide.",
        "b) Sử dụng cỡ chữ từ 24pt trở lên cho phần nội dung để người ngồi cuối lớp vẫn đọc được.",
        "c) Có thể chèn nhạc nền thật to trong suốt bài để người nghe đỡ buồn ngủ.",
        "d) Luyện tập thử trước gương hoặc trước bạn bè giúp bài thuyết trình trôi chảy và tự tin hơn."
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "explanation": "a) Đúng; b) Đúng; c) Sai vì nhạc to sẽ lấn át giọng nói người thuyết trình; d) Đúng.",
      "difficulty": "trung_binh",
      "hint": "Không nên bật nhạc to lấn át giọng thuyết trình."
    },
    {
      "id": "g7-b13-blank-1",
      "type": "fill_blank",
      "question": "Khi thiết kế trang chiếu, màu chữ cần [1] rõ với màu nền. Không nên viết quá nhiều chữ mà nên dùng các [2] chính. Trước khi thuyết trình cần [3] thử để căn chỉnh thời gian.",
      "blankAnswers": [
        "tương phản",
        "từ khóa",
        "luyện tập"
      ],
      "wordBank": [
        "tương phản",
        "từ khóa",
        "luyện tập",
        "trùng màu",
        "đoạn văn",
        "tắt máy"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Màu tương phản; dùng từ khóa; luyện tập trước khi thuyết trình.",
      "hint": "Tương phản; từ khóa; luyện tập."
    },
    {
      "id": "g7-b13-match-1",
      "type": "matching",
      "question": "Hãy ghép mỗi bước chuẩn bị ở Cột A với công việc tương ứng ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Bước 1: Chuẩn bị nội dung"
        },
        {
          "id": "2",
          "text": "2) Bước 2: Thiết kế trang chiếu"
        },
        {
          "id": "3",
          "text": "3) Bước 3: Luyện tập thuyết trình"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Soạn thảo slide, chọn phông chữ, chèn tranh ảnh và hiệu ứng vừa phải"
        },
        {
          "id": "b",
          "text": "Xác định chủ đề, lập dàn ý và tìm kiếm tư liệu minh họa"
        },
        {
          "id": "c",
          "text": "Tập nói diễn cảm, làm chủ thời gian và chuẩn bị trả lời câu hỏi"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a",
        "3": "c"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "1-b; 2-a; 3-c.",
      "hint": "Nối theo đúng quy trình từ chuẩn bị -> thiết kế -> luyện tập."
    }
  ],
  "tin7-bai-14": [
    {
      "id": "g7-b14-mcq-1",
      "type": "multiple_choice",
      "question": "Thuật toán tìm kiếm tuần tự (Sequential / Linear Search) thực hiện việc tìm kiếm như thế nào?",
      "options": [
        "Chọn ngẫu nhiên một phần tử bất kỳ",
        "Đổi chỗ hai phần tử liền kề nhau",
        "So sánh lần lượt giá trị cần tìm với từng phần tử của danh sách, bắt đầu từ phần tử đầu tiên cho đến cuối danh sách",
        "Chia đôi danh sách rồi so sánh với phần tử ở giữa"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 70): Tìm kiếm tuần tự kiểm tra lần lượt từng phần tử từ đầu đến cuối danh sách cho đến khi tìm thấy hoặc hết danh sách.",
      "hint": "Dò xét lần lượt từng phần tử từ đầu đến cuối."
    },
    {
      "id": "g7-b14-mcq-2",
      "type": "multiple_choice",
      "question": "Thuật toán tìm kiếm tuần tự dừng lại khi nào?",
      "options": [
        "Khi tìm thấy phần tử cần tìm HOẶC khi đã duyệt hết toàn bộ danh sách mà không tìm thấy",
        "Bắt buộc phải chạy đúng 100 lần mới dừng",
        "Chỉ dừng lại khi máy tính hết pin",
        "Không bao giờ dừng lại"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Thuật toán dừng lại ngay khi tìm thấy giá trị cần tìm (thành công) hoặc khi đã kiểm tra hết danh sách mà không thấy (thất bại).",
      "hint": "Tìm thấy thì dừng, duyệt hết danh sách cũng dừng."
    },
    {
      "id": "g7-b14-mcq-3",
      "type": "multiple_choice",
      "question": "Trong trường hợp xấu nhất, để tìm một phần tử trong danh sách gồm N phần tử bằng tìm kiếm tuần tự, ta cần thực hiện bao nhiêu lần so sánh?",
      "options": [
        "1 lần",
        "N / 2 lần",
        "N * N lần",
        "N lần so sánh"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Trường hợp xấu nhất là phần tử nằm ở vị trí cuối cùng hoặc không có trong danh sách, thuật toán phải duyệt qua đủ N phần tử.",
      "hint": "Phải duyệt qua toàn bộ N phần tử."
    },
    {
      "id": "g7-b14-mcq-4",
      "type": "multiple_choice",
      "question": "Trong trường hợp tốt nhất, thuật toán tìm kiếm tuần tự cần bao nhiêu lần so sánh để tìm thấy?",
      "options": [
        "N - 1 lần",
        "1 lần so sánh (khi phần tử cần tìm nằm ngay ở vị trí đầu tiên)",
        "N lần",
        "2 lần"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Nếu phần tử cần tìm nằm ngay ở vị trí đầu tiên của danh sách thì chỉ cần đúng 1 lần so sánh là xong.",
      "hint": "Gặp ngay phần tử ở đầu danh sách."
    },
    {
      "id": "g7-b14-mcq-5",
      "type": "multiple_choice",
      "question": "Ưu điểm lớn nhất của thuật toán tìm kiếm tuần tự so với tìm kiếm nhị phân là gì?",
      "options": [
        "Tốc độ luôn nhanh hơn trên dữ liệu hàng triệu phần tử",
        "Chỉ tốn đúng 1 phép tính duy nhất cho mọi trường hợp",
        "Có thể áp dụng trên mọi danh sách bất kỳ, kể cả danh sách CHƯA ĐƯỢC SẮP XẾP",
        "Không cần máy tính"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Tìm kiếm tuần tự không đòi hỏi danh sách phải sắp xếp trước, danh sách lộn xộn bất kì vẫn áp dụng được.",
      "hint": "Áp dụng được cho cả danh sách chưa sắp xếp."
    },
    {
      "id": "g7-b14-mcq-6",
      "type": "multiple_choice",
      "question": "Cho dãy số: [12, 7, 19, 5, 23, 8]. Sử dụng tìm kiếm tuần tự để tìm số 5, thuật toán sẽ tìm thấy ở lần so sánh thứ mấy?",
      "options": [
        "Lần thứ 3",
        "Lần thứ 4",
        "Lần thứ 1",
        "Lần thứ 5"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Lần 1 so sánh với 12; Lần 2 so sánh với 7; Lần 3 so sánh với 19; Lần 4 so sánh với 5 -> tìm thấy!",
      "hint": "Đếm thứ tự: 12 (1), 7 (2), 19 (3), 5 (4)."
    },
    {
      "id": "g7-b14-mcq-7",
      "type": "multiple_choice",
      "question": "Nhược điểm của thuật toán tìm kiếm tuần tự khi làm việc với danh sách có số lượng phần tử cực kì lớn (ví dụ 1 tỉ bản ghi) là gì?",
      "options": [
        "Làm hỏng tệp dữ liệu gốc",
        "Kết quả tìm kiếm luôn bị sai lệch",
        "Thời gian thực hiện rất lâu và tốn nhiều tài nguyên xử lý vì phải duyệt từng phần tử một",
        "Không thể tìm được số chẵn"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "Khi N rất lớn, việc duyệt tuần tự từng phần tử sẽ mất nhiều thời gian, do đó với dữ liệu lớn người ta ưu tiên sắp xếp rồi dùng tìm kiếm nhị phân.",
      "hint": "Chậm chạp khi danh sách có kích thước quá lớn."
    },
    {
      "id": "g7-b14-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về thuật toán tìm kiếm tuần tự:",
      "options": [
        "a) Tìm kiếm tuần tự duyệt các phần tử theo thứ tự từ đầu đến cuối danh sách.",
        "b) Bắt buộc danh sách phải được sắp xếp tăng dần mới áp dụng được tìm kiếm tuần tự.",
        "c) Nếu phần tử cần tìm không có trong danh sách, thuật toán sẽ duyệt qua tất cả các phần tử.",
        "d) Trong sơ đồ khối thuật toán, khối hình thoi dùng để thể hiện thao tác so sánh điều kiện."
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "explanation": "a) Đúng; b) Sai vì danh sách chưa sắp xếp vẫn tìm tuần tự được; c) Đúng; d) Đúng (hình thoi là khối rẽ nhánh điều kiện).",
      "difficulty": "trung_binh",
      "hint": "Tìm tuần tự không cần sắp xếp trước danh sách."
    },
    {
      "id": "g7-b14-blank-1",
      "type": "fill_blank",
      "question": "Thuật toán tìm kiếm tuần tự so sánh giá trị cần tìm [1] với từng phần tử của danh sách. Trong trường hợp xấu nhất với danh sách N phần tử, số bước so sánh tối đa là [2].",
      "blankAnswers": [
        "lần lượt",
        "N"
      ],
      "wordBank": [
        "lần lượt",
        "N",
        "ngẫu nhiên",
        "1",
        "chia đôi",
        "N/2"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Dò lần lượt từ đầu đến cuối; tối đa là N lần so sánh.",
      "hint": "Lần lượt; N lần."
    },
    {
      "id": "g7-b14-match-1",
      "type": "matching",
      "question": "Cho dãy A = [8, 15, 3, 22, 9]. Hãy ghép số cần tìm ở Cột A với số lần so sánh tìm kiếm tuần tự ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Tìm số 8"
        },
        {
          "id": "2",
          "text": "2) Tìm số 3"
        },
        {
          "id": "3",
          "text": "3) Tìm số 9"
        },
        {
          "id": "4",
          "text": "4) Tìm số 100 (không có)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "1 lần so sánh (tìm thấy ngay đầu)"
        },
        {
          "id": "b",
          "text": "3 lần so sánh"
        },
        {
          "id": "c",
          "text": "5 lần so sánh (ở cuối dãy)"
        },
        {
          "id": "d",
          "text": "5 lần so sánh (duyệt hết danh sách)"
        }
      ],
      "correctMatches": {
        "1": "a",
        "2": "b",
        "3": "c",
        "4": "d"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Số 8 ở vị trí 1; Số 3 ở vị trí 3; Số 9 ở vị trí 5; Số 100 duyệt hết 5 phần tử.",
      "hint": "Đếm vị trí của từng số trong dãy."
    }
  ],
  "tin7-bai-15": [
    {
      "id": "g7-b15-mcq-1",
      "type": "multiple_choice",
      "question": "Điều kiện TIÊN QUYẾT BẮT BUỘC để có thể áp dụng thuật toán tìm kiếm nhị phân (Binary Search) là gì?",
      "options": [
        "Tất cả phần tử trong danh sách phải là số nguyên dương",
        "Danh sách phải có số lượng phần tử là số chẵn",
        "Danh sách không được có quá 10 phần tử",
        "Danh sách dữ liệu PHẢI ĐƯỢC SẮP XẾP theo thứ tự (tăng dần hoặc giảm dần)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 74): Tìm kiếm nhị phân chỉ áp dụng được trên danh sách đã được sắp xếp.",
      "hint": "Danh sách bắt buộc phải được sắp xếp trước."
    },
    {
      "id": "g7-b15-mcq-2",
      "type": "multiple_choice",
      "question": "Ở mỗi bước lặp của thuật toán tìm kiếm nhị phân, ta so sánh giá trị cần tìm với phần tử nào?",
      "options": [
        "Phần tử ở CHÍNH GIỮA của phạm vi tìm kiếm hiện tại",
        "Phần tử cuối cùng của danh sách",
        "Phần tử đầu tiên của danh sách",
        "Hai phần tử đứng cạnh nhau"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tìm kiếm nhị phân luôn lấy phần tử ở vị trí giữa (mid) để so sánh, từ đó thu hẹp một nửa phạm vi tìm kiếm.",
      "hint": "So sánh với phần tử ở vị trí chính giữa."
    },
    {
      "id": "g7-b15-mcq-3",
      "type": "multiple_choice",
      "question": "Cho dãy tăng dần [2, 5, 8, 12, 16, 23, 38, 56, 72]. Khi tìm số 56, bước 1 so sánh với số 16 (ở giữa). Vì 56 > 16, thuật toán sẽ làm gì tiếp theo?",
      "options": [
        "Dừng lại kết luận không tìm thấy",
        "Đổi chỗ số 56 với số 16",
        "Thu hẹp phạm vi tìm kiếm sang nửa bên PHẢI (từ số 23 đến 72) và bỏ qua nửa bên trái",
        "Thu hẹp sang nửa bên trái (từ 2 đến 12)"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Vì dãy tăng dần và 56 lớn hơn 16 nên chắc chắn 56 chỉ có thể nằm ở nửa bên phải của số 16.",
      "hint": "56 lớn hơn số ở giữa thì tìm tiếp ở nửa bên phải."
    },
    {
      "id": "g7-b15-mcq-4",
      "type": "multiple_choice",
      "question": "Với danh sách đã sắp xếp gồm 1000 phần tử, số lần so sánh tối đa của thuật toán tìm kiếm nhị phân là khoảng bao nhiêu?",
      "options": [
        "Khoảng 10 lần (vì 2^10 = 1024)",
        "Khoảng 1000 lần",
        "Chỉ 1 lần",
        "Khoảng 500 lần"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "Mỗi bước chia đôi: 1000 -> 500 -> 250 -> 125 -> 63 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1. Tối đa chỉ mất 10 lần so sánh (nhanh hơn tìm tuần tự 100 lần)!",
      "hint": "2 lũy thừa 10 bằng 1024 nên tối đa chỉ 10 bước."
    },
    {
      "id": "g7-b15-mcq-5",
      "type": "multiple_choice",
      "question": "Tại sao thuật toán tìm kiếm nhị phân lại có hiệu quả vượt trội hơn tìm kiếm tuần tự trên tập dữ liệu lớn?",
      "options": [
        "Vì nó không cần so sánh",
        "Vì nó chạy trên hai máy tính cùng lúc",
        "Vì nó chỉ xét các số nguyên tố",
        "Vì sau mỗi lần so sánh, nó LOẠI BỎ ĐƯỢC MỘT NỬA số lượng phần tử còn lại"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Mỗi phép so sánh loại bỏ 50% số phần tử, làm kích thước bài toán giảm theo cấp số nhân.",
      "hint": "Mỗi bước loại bỏ được một nửa danh sách."
    },
    {
      "id": "g7-b15-mcq-6",
      "type": "multiple_choice",
      "question": "Cho dãy tăng dần gồm 7 phần tử: [10, 20, 30, 40, 50, 60, 70]. Để tìm số 40, thuật toán tìm kiếm nhị phân mất mấy bước?",
      "options": [
        "7 bước",
        "1 bước duy nhất (vì số 40 nằm ngay ở vị trí chính giữa)",
        "4 bước",
        "3 bước"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Vị trí giữa là (1 + 7) / 2 = 4 (ô chứa số 40). So sánh lần đầu tiên thấy bằng luôn, thuật toán kết thúc ở bước 1.",
      "hint": "Số 40 là phần tử chính giữa nên thấy ngay ở bước đầu."
    },
    {
      "id": "g7-b15-mcq-7",
      "type": "multiple_choice",
      "question": "Thuật toán tìm kiếm nhị phân kết thúc và thông báo KHÔNG TÌM THẤY khi nào?",
      "options": [
        "Khi chia đôi được 2 lần",
        "Khi máy tính bị đơ",
        "Khi tìm thấy số 0",
        "Khi phạm vi tìm kiếm bị thu hẹp lại thành rỗng (chỉ số đầu lớn hơn chỉ số cuối) mà vẫn không thấy"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Khi khoảng tìm kiếm [đầu, cuối] thu hẹp đến mức đầu > cuối mà không gặp giá trị cần tìm thì kết luận không có.",
      "hint": "Phạm vi tìm kiếm bị thu hẹp đến rỗng (đầu > cuối)."
    },
    {
      "id": "g7-b15-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về thuật toán tìm kiếm nhị phân:",
      "options": [
        "a) Tìm kiếm nhị phân chỉ áp dụng được khi danh sách đã được sắp xếp thứ tự.",
        "b) Mỗi bước thực hiện, thuật toán chia đôi phạm vi tìm kiếm thành hai nửa.",
        "c) Tìm kiếm nhị phân luôn luôn chạy chậm hơn tìm kiếm tuần tự.",
        "d) Nếu danh sách có 16 phần tử đã sắp xếp, số lần so sánh tối đa là 4 lần (vì 2^4 = 16)."
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "explanation": "a) Đúng; b) Đúng; c) Sai vì nhị phân nhanh hơn tuần tự rất nhiều trên dữ liệu lớn; d) Đúng (2^4 = 16).",
      "difficulty": "trung_binh",
      "hint": "Tìm nhị phân nhanh hơn tuần tự rất nhiều khi danh sách đã sắp xếp."
    },
    {
      "id": "g7-b15-blank-1",
      "type": "fill_blank",
      "question": "Thuật toán tìm kiếm nhị phân áp dụng trên danh sách [1]. Ở mỗi bước, ta so sánh giá trị cần tìm với phần tử ở [2] danh sách để loại bỏ [3] phần tử.",
      "blankAnswers": [
        "đã sắp xếp",
        "chính giữa",
        "một nửa"
      ],
      "wordBank": [
        "đã sắp xếp",
        "chính giữa",
        "một nửa",
        "chưa sắp xếp",
        "đầu tiên",
        "toàn bộ"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Áp dụng trên danh sách đã sắp xếp; so sánh với phần tử chính giữa; loại bỏ 1/2 phần tử.",
      "hint": "Đã sắp xếp; chính giữa; một nửa."
    },
    {
      "id": "g7-b15-match-1",
      "type": "matching",
      "question": "Hãy so sánh đặc điểm giữa hai thuật toán tìm kiếm ở Cột A với mô tả ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Tìm kiếm tuần tự"
        },
        {
          "id": "2",
          "text": "2) Tìm kiếm nhị phân"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Bắt buộc danh sách phải sắp xếp; tốc độ cực nhanh bằng cách chia đôi"
        },
        {
          "id": "b",
          "text": "Áp dụng trên mọi danh sách; duyệt lần lượt từng phần tử từ đầu đến cuối"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tuần tự: mọi danh sách, duyệt lần lượt; Nhị phân: phải sắp xếp, chia đôi cực nhanh.",
      "hint": "Phân biệt dựa vào yêu cầu sắp xếp của dữ liệu."
    }
  ],
  "tin7-bai-16": [
    {
      "id": "g7-b16-mcq-1",
      "type": "multiple_choice",
      "question": "Thuật toán sắp xếp nổi bọt (Bubble Sort) thực hiện việc so sánh các phần tử như thế nào?",
      "options": [
        "So sánh với số trung bình cộng",
        "So sánh hai phần tử ĐỨNG LIỀN KỀ NHAU trong danh sách",
        "So sánh ngẫu nhiên hai phần tử bất kỳ",
        "So sánh phần tử đầu tiên với phần tử cuối cùng"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 79): Sắp xếp nổi bọt luôn xét từng cặp phần tử liền kề nhau và đổi chỗ nếu chúng sai thứ tự.",
      "hint": "Hai phần tử đứng sát cạnh nhau."
    },
    {
      "id": "g7-b16-mcq-2",
      "type": "multiple_choice",
      "question": "Khi sắp xếp dãy số TĂNG DẦN bằng thuật toán nổi bọt, điều kiện để hoán đổi vị trí hai phần tử liền kề A[i] và A[i+1] là gì?",
      "options": [
        "A[i] > A[i+1]",
        "A[i] < A[i+1]",
        "A[i] == A[i+1]",
        "A[i] == 0"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Sắp xếp tăng dần đòi hỏi phần tử đứng trước phải nhỏ hơn hoặc bằng phần tử đứng sau. Do đó nếu A[i] > A[i+1] (đứng trước lớn hơn đứng sau) thì phải đổi chỗ.",
      "hint": "Số đứng trước lớn hơn số đứng sau thì đổi chỗ."
    },
    {
      "id": "g7-b16-mcq-3",
      "type": "multiple_choice",
      "question": "Ý nghĩa của tên gọi \"Sắp xếp nổi bọt\" là gì?",
      "options": [
        "Do nhà khoa học tên là Bubble sáng chế",
        "Vì thuật toán tạo ra bọt xà phòng trên màn hình",
        "Sau mỗi lượt duyệt, phần tử lớn nhất sẽ \"nổi\" dần về đúng vị trí cuối dãy giống như bọt khí nổi lên mặt nước",
        "Vì thuật toán chỉ chạy được trong nước"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "Sau mỗi vòng lặp duyệt từ trái qua phải, số lớn nhất được đẩy dần về cuối dãy như bọt khí nổi lên.",
      "hint": "Phần tử lớn nhất nổi dần về vị trí cuối dãy qua từng lượt."
    },
    {
      "id": "g7-b16-mcq-4",
      "type": "multiple_choice",
      "question": "Cho dãy 4 số: [4, 1, 3, 2]. Sau khi hoàn thành lượt thứ nhất của sắp xếp nổi bọt tăng dần, dãy số trở thành dãy nào?",
      "options": [
        "[1, 3, 2, 4]",
        "[4, 3, 2, 1]",
        "[1, 2, 3, 4]",
        "[2, 1, 3, 4]"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "Xét cặp (4,1) đổi thành (1,4) -> [1,4,3,2]; Xét cặp (4,3) đổi thành (3,4) -> [1,3,4,2]; Xét cặp (4,2) đổi thành (2,4) -> [1,3,2,4]. Số 4 lớn nhất đã nổi về cuối.",
      "hint": "Từng bước đổi chỗ đưa số 4 lớn nhất về cuối dãy: [1, 3, 2, 4]."
    },
    {
      "id": "g7-b16-mcq-5",
      "type": "multiple_choice",
      "question": "Để sắp xếp một danh sách gồm N phần tử bằng thuật toán nổi bọt, ta cần thực hiện tối đa bao nhiêu lượt duyệt?",
      "options": [
        "1 lượt duyệt",
        "N + 1 lượt",
        "N * N lượt",
        "N - 1 lượt duyệt"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Mỗi lượt xếp đúng vị trí 1 phần tử, nên sau tối đa N - 1 lượt thì cả N phần tử đều về đúng vị trí.",
      "hint": "Tối đa N - 1 lượt duyệt."
    },
    {
      "id": "g7-b16-mcq-6",
      "type": "multiple_choice",
      "question": "Thuật toán sắp xếp nổi bọt có thể kết thúc sớm mà không cần chạy đủ N - 1 lượt khi nào?",
      "options": [
        "Khi gặp phần tử âm",
        "Khi trong một lượt duyệt không có bất kì thao tác đổi chỗ nào diễn ra (chứng tỏ dãy đã hoàn toàn được sắp xếp)",
        "Khi máy tính nhận lệnh in",
        "Khi gặp số 0 đầu tiên"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "Nếu qua 1 lượt duyệt mà không có cặp nào đổi chỗ thì dãy đã đúng thứ tự, thuật toán dừng sớm giúp tiết kiệm thời gian.",
      "hint": "Không có cặp nào bị đổi chỗ trong suốt một lượt duyệt."
    },
    {
      "id": "g7-b16-mcq-7",
      "type": "multiple_choice",
      "question": "Nếu muốn sắp xếp dãy số theo thứ tự GIẢM DẦN bằng thuật toán nổi bọt, ta đổi chỗ cặp A[i] và A[i+1] khi nào?",
      "options": [
        "Khi A[i] > 100",
        "Khi A[i] == A[i+1]",
        "Khi A[i] < A[i+1]",
        "Khi A[i] > A[i+1]"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Sắp xếp giảm dần đòi hỏi số trước phải lớn hơn số sau. Nếu số trước nhỏ hơn số sau (A[i] < A[i+1]) thì phải hoán đổi.",
      "hint": "Giảm dần thì số trước nhỏ hơn số sau phải đổi chỗ."
    },
    {
      "id": "g7-b16-tf-1",
      "type": "true_false",
      "question": "Xét tính Đúng/Sai của các phát biểu về thuật toán sắp xếp nổi bọt:",
      "options": [
        "a) Thuật toán nổi bọt luôn so sánh hai phần tử đứng liền kề nhau.",
        "b) Sau mỗi lượt duyệt tăng dần, phần tử nhỏ nhất sẽ nổi về cuối dãy.",
        "c) Với dãy số gồm 5 phần tử, ta cần tối đa 4 lượt duyệt để sắp xếp hoàn chỉnh.",
        "d) Sắp xếp dữ liệu trước giúp ta có thể áp dụng được thuật toán tìm kiếm nhị phân hiệu quả cao."
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "explanation": "a) Đúng; b) Sai vì phần tử LỚN NHẤT sẽ nổi về cuối dãy (nếu xếp tăng dần); c) Đúng (5 - 1 = 4 lượt); d) Đúng.",
      "difficulty": "trung_binh",
      "hint": "Xếp tăng dần thì số lớn nhất nổi về cuối dãy."
    },
    {
      "id": "g7-b16-blank-1",
      "type": "fill_blank",
      "question": "Thuật toán sắp xếp nổi bọt so sánh từng cặp phần tử [1] nhau. Khi xếp tăng dần, nếu số đứng trước [2] số đứng sau thì ta [3] vị trí của chúng.",
      "blankAnswers": [
        "liền kề",
        "lớn hơn",
        "đổi chỗ"
      ],
      "wordBank": [
        "liền kề",
        "lớn hơn",
        "đổi chỗ",
        "nhỏ hơn",
        "giữ nguyên",
        "cách xa"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "So sánh cặp liền kề; đứng trước lớn hơn đứng sau thì đổi chỗ.",
      "hint": "Liền kề; lớn hơn; đổi chỗ."
    },
    {
      "id": "g7-b16-match-1",
      "type": "matching",
      "question": "Cho dãy ban đầu [5, 2, 8, 1]. Hãy ghép lượt duyệt nổi bọt tăng dần ở Cột A với trạng thái dãy ở Cột B:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "1) Sau lượt 1 (số 8 về cuối)"
        },
        {
          "id": "2",
          "text": "2) Sau lượt 2 (số 5 về vị trí kế cuối)"
        },
        {
          "id": "3",
          "text": "3) Sau lượt 3 (dãy hoàn thành)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "[1, 2, 5, 8]"
        },
        {
          "id": "b",
          "text": "[2, 5, 1, 8]"
        },
        {
          "id": "c",
          "text": "[2, 1, 5, 8]"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "a"
      },
      "options": [],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "Lượt 1: (5,2)->(2,5), (5,8)->(5,8), (8,1)->(1,8) => [2,5,1,8]. Lượt 2: (2,5)->(2,5), (5,1)->(1,5) => [2,1,5,8]. Lượt 3: (2,1)->(1,2) => [1,2,5,8].",
      "hint": "Mỗi lượt đưa một số lớn nhất còn lại về vị trí tương ứng từ cuối lên."
    }
  ]
};
