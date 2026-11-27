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
    },
    {
      "id": "g7-b1-mcq-8",
      "type": "multiple_choice",
      "question": "Cổng kết nối nào sau đây thường được dùng để truyền đồng thời cả tín hiệu hình ảnh chất lượng cao và âm thanh từ máy tính ra màn hình hoặc máy chiếu?",
      "options": [
        "Cổng HDMI",
        "Cổng VGA",
        "Cổng PS/2",
        "Cổng Audio 3.5mm chỉ có âm thanh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 7): Cổng HDMI truyền đồng thời cả âm thanh và hình ảnh số độ nét cao.",
      "hint": "Cổng kết nối phổ biến trên màn hình và TV hiện đại."
    },
    {
      "id": "g7-b1-mcq-9",
      "type": "multiple_choice",
      "question": "Cổng USB trên máy tính có đặc điểm nổi bật nào sau đây?",
      "options": [
        "Chỉ cắm được chuột máy tính",
        "Là cổng kết nối đa năng, hỗ trợ cắm nhiều loại thiết bị như bàn phím, USB, máy in, máy ảnh...",
        "Không thể truyền dữ liệu",
        "Chỉ dùng để cắm dây nguồn điện 220V"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT: USB (Universal Serial Bus) là chuẩn kết nối phổ biến, cắm được rất nhiều thiết bị ngoại vi.",
      "hint": "Cổng kết nối đa năng phổ biến nhất."
    },
    {
      "id": "g7-b1-mcq-10",
      "type": "multiple_choice",
      "question": "Khi kết nối máy in với máy tính, máy tính cần phần mềm điều khiển nào để có thể giao tiếp và điều khiển máy in hoạt động?",
      "options": [
        "Hệ điều hành Windows",
        "Trình điều khiển thiết bị (Driver)",
        "Phần mềm Photoshop",
        "Trình duyệt Google Chrome"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 7 KNTT: Driver là phần mềm giúp hệ điều hành nhận diện và điều khiển chính xác thiết bị ngoại vi.",
      "hint": "Phần mềm điều khiển thiết bị ngoại vi."
    },
    {
      "id": "g7-b1-mcq-11",
      "type": "multiple_choice",
      "question": "Thao tác tháo thiết bị nhớ ngoài (như USB) an toàn khỏi máy tính trước khi rút dây cắm là gì?",
      "options": [
        "Rút mạnh thiết bị ra ngay lập tức",
        "Tắt nguồn máy tính",
        "Chọn biểu tượng Safely Remove Hardware and Eject Media ở thanh tác vụ",
        "Xóa hết các tệp trong USB rồi mới rút"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT: Cần ngắt kết nối an toàn (Eject) để tránh hỏng dữ liệu hoặc mạch điện của USB.",
      "hint": "Chọn tính năng Eject / Ngắt kết nối an toàn."
    },
    {
      "id": "g7-b1-mcq-12",
      "type": "multiple_choice",
      "question": "Thiết bị nào sau đây dùng để số hóa các bức ảnh chụp hoặc trang sách in thành tệp ảnh trên máy tính?",
      "options": [
        "Máy quét (Scanner)",
        "Máy in (Printer)",
        "Máy chiếu (Projector)",
        "Màn hình (Monitor)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Máy quét (Scanner) là thiết bị vào giúp chuyển tài liệu giấy, tranh ảnh thành dữ liệu số trong máy tính.",
      "hint": "Thiết bị quét hình ảnh tài liệu vào máy tính."
    },
    {
      "id": "g7-b1-mcq-13",
      "type": "multiple_choice",
      "question": "Đặc điểm nào sau đây KHÔNG ĐÚNG khi sử dụng các thiết bị vào - ra?",
      "options": [
        "Cắm đúng chiều và đúng cổng kết nối tương ứng",
        "Cố gắng dùng lực thật mạnh để ép đầu cắm vào cổng khi bị ngược chiều",
        "Tránh để bụi bẩn, nước hoặc chất lỏng rơi vào các cổng cắm",
        "Giữ thiết bị ở nơi khô ráo, thoáng mát"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Cố ép đầu cắm sai chiều có thể làm gãy chân tiếp xúc của cổng kết nối.",
      "hint": "Hành vi cắm ép ngược chiều gây hỏng hóc."
    },
    {
      "id": "g7-b1-mcq-14",
      "type": "multiple_choice",
      "question": "Màn hình cảm ứng trên điện thoại thông minh hoặc máy tính bảng thuộc loại thiết bị nào?",
      "options": [
        "Chỉ là thiết bị vào",
        "Chỉ là thiết bị ra",
        "Vừa là thiết bị vào (nhận thao tác chạm), vừa là thiết bị ra (hiển thị hình ảnh)",
        "Không thuộc loại nào"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin 7 KNTT: Màn hình cảm ứng là thiết bị vào - ra kết hợp.",
      "hint": "Nhận lệnh cảm ứng ngón tay và hiển thị giao diện."
    },
    {
      "id": "g7-b1-mcq-15",
      "type": "multiple_choice",
      "question": "Khi gõ phím trên bàn phím nhưng trên màn hình không xuất hiện chữ, nguyên nhân nào có khả năng xảy ra nhất?",
      "options": [
        "Dây cắm bàn phím bị lỏng hoặc chưa được kết nối với máy tính",
        "Loa máy tính bị hỏng",
        "Máy in hết giấy",
        "Màn hình bị hỏng chuột"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Kết nối bàn phím bị lỏng khiến máy tính không nhận được tín hiệu truyền từ bàn phím.",
      "hint": "Kiểm tra đầu nối bàn phím với thùng máy."
    },
    {
      "id": "g7-b1-mcq-16",
      "type": "multiple_choice",
      "question": "Bộ phận nào sau đây thường được tích hợp sẵn trên máy tính xách tay (laptop) thay thế cho chuột rời?",
      "options": [
        "Bàn di chuột cảm ứng (Touchpad)",
        "Bàn phím ảo",
        "Cần điều khiển chơi game",
        "Máy in mini"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Touchpad (bàn cảm ứng chuột) được tích hợp ngay dưới bàn phím của laptop.",
      "hint": "Bàn rê chuột cảm ứng trên laptop."
    },
    {
      "id": "g7-b1-mcq-17",
      "type": "multiple_choice",
      "question": "Máy chiếu (Projector) thường được kết nối với máy tính nhằm mục đích gì trong lớp học?",
      "options": [
        "Phóng to hình ảnh từ máy tính lên màn chiếu lớn để cả lớp dễ dàng quan sát bài giảng",
        "Để gõ chữ vào máy tính",
        "Để sạc pin cho máy tính",
        "Để quét tài liệu thành tệp văn bản"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Máy chiếu là thiết bị ra giúp hiển thị nội dung máy tính trên màn ảnh rộng.",
      "hint": "Phóng to nội dung lên màn ảnh lớn."
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
    },
    {
      "id": "g7-b2-mcq-8",
      "type": "multiple_choice",
      "question": "Hệ điều hành có vai trò trung tâm nào đối với máy tính?",
      "options": [
        "Quản lí phần cứng, cung cấp môi trường cho phần mềm ứng dụng hoạt động và làm trung gian giao tiếp với người dùng",
        "Chỉ dùng để trang trí màn hình Desktop",
        "Chỉ dùng để quét virus",
        "Chỉ dùng để soạn thảo văn bản"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 10): Hệ điều hành là phần mềm hệ thống điều khiển mọi hoạt động phần cứng và phần mềm.",
      "hint": "Môi trường nền tảng điều khiển phần cứng và phần mềm."
    },
    {
      "id": "g7-b2-mcq-9",
      "type": "multiple_choice",
      "question": "Phần mềm nào sau đây là một HỆ ĐIỀU HÀNH dành cho điện thoại di động thông minh?",
      "options": [
        "Android hoặc iOS",
        "Microsoft Word",
        "Windows 95",
        "Google Drive"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Android và iOS là hai hệ điều hành di động phổ biến nhất hiện nay.",
      "hint": "Hệ điều hành trên điện thoại Samsung, iPhone."
    },
    {
      "id": "g7-b2-mcq-10",
      "type": "multiple_choice",
      "question": "Phần mềm nguồn mở (Open Source Software) có đặc điểm nổi bật nào?",
      "options": [
        "Mã nguồn được công khai, người dùng được quyền tự do sử dụng, chỉnh sửa và chia sẻ",
        "Bắt buộc người dùng phải trả phí hàng tháng",
        "Tuyệt đối không ai được xem mã nguồn lập trình",
        "Chỉ chạy được trên máy tính của chính phủ"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 7 KNTT: Phần mềm nguồn mở cung cấp mã nguồn tự do để người dùng nghiên cứu và phát triển.",
      "hint": "Mã nguồn công khai và miễn phí sử dụng."
    },
    {
      "id": "g7-b2-mcq-11",
      "type": "multiple_choice",
      "question": "Ví dụ nào sau đây là một phần mềm nguồn mở tiêu biểu?",
      "options": [
        "Hệ điều hành Linux / Bộ ứng dụng văn phòng LibreOffice",
        "Microsoft Windows bản quyền",
        "Adobe Photoshop",
        "AutoCAD bản thương mại"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Linux và LibreOffice là các ví dụ kinh điển về phần mềm nguồn mở.",
      "hint": "Hệ điều hành chim cánh cụt Linux."
    },
    {
      "id": "g7-b2-mcq-12",
      "type": "multiple_choice",
      "question": "Hành vi sử dụng phần mềm 'bẻ khóa' (crack) trái phép vi phạm điều gì?",
      "options": [
        "Vi phạm luật bản quyền và sở hữu trí tuệ, đồng thời có nguy cơ cao bị cài mã độc đánh cắp tài khoản",
        "Hoàn toàn hợp pháp và được nhà nước khuyến khích",
        "Giúp máy tính chạy nhanh hơn gấp đôi",
        "Không có bất kì nguy cơ nào"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Dùng phần mềm lậu vi phạm quyền tác giả và dễ lây nhiễm virus độc hại.",
      "hint": "Vi phạm luật bản quyền sở hữu trí tuệ."
    },
    {
      "id": "g7-b2-mcq-13",
      "type": "multiple_choice",
      "question": "Phần mềm ứng dụng là gì?",
      "options": [
        "Phần mềm được thiết kế để giúp người sử dụng thực hiện một hoặc một số công việc cụ thể (soạn thảo, tính toán, vẽ tranh, giải trí...)",
        "Bảng vi mạch chính trong thân máy tính",
        "Dây cáp nối máy in với máy tính",
        "Dòng điện cung cấp cho CPU"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin 7 KNTT: Phần mềm ứng dụng đáp ứng nhu cầu xử lí công việc cụ thể của con người.",
      "hint": "Phần mềm phục vụ nhu cầu công việc của người dùng."
    },
    {
      "id": "g7-b2-mcq-14",
      "type": "multiple_choice",
      "question": "Mối quan hệ giữa Hệ điều hành và Phần mềm ứng dụng là gì?",
      "options": [
        "Phần mềm ứng dụng phải hoạt động trên nền tảng của hệ điều hành quản lí",
        "Phần mềm ứng dụng có thể tự chạy mà không cần bất kì hệ điều hành nào",
        "Hệ điều hành chỉ là một tập con của phần mềm diệt virus",
        "Hai thành phần này hoàn toàn không có mối liên hệ nào"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Hệ điều hành đóng vai trò nền tảng để các ứng dụng cài đặt và vận hành.",
      "hint": "Hệ điều hành là nền móng cho các ứng dụng chạy."
    },
    {
      "id": "g7-b2-mcq-15",
      "type": "multiple_choice",
      "question": "Để cập nhật (update) một phần mềm ứng dụng trên điện thoại an toàn, em nên tải từ nguồn nào?",
      "options": [
        "Kho ứng dụng chính thức (Google Play Store hoặc Apple App Store)",
        "Các đường link lạ trong tin nhắn rác SMS",
        "Trang web quảng cáo trúng thưởng",
        "Nhờ người lạ cài đặt từ xa"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Chợ ứng dụng chính thức có cơ chế kiểm duyệt mã độc nghiêm ngặt.",
      "hint": "Google Play Store hoặc App Store."
    },
    {
      "id": "g7-b2-mcq-16",
      "type": "multiple_choice",
      "question": "Giấy phép bản quyền phần mềm thương mại (Commercial License) thường quy định điều gì?",
      "options": [
        "Người dùng phải mua quyền sử dụng và không được sao chép, chỉnh sửa hay phân phối lại mã nguồn",
        "Cho phép tự do chỉnh sửa mã nguồn và bán lại",
        "Bắt buộc người dùng phải chia sẻ miễn phí cho người khác",
        "Không có bất kì điều kiện ràng buộc nào"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Phần mềm thương mại bảo vệ độc quyền tài sản trí tuệ của nhà sản xuất.",
      "hint": "Phần mềm có bản quyền trả phí."
    },
    {
      "id": "g7-b2-mcq-17",
      "type": "multiple_choice",
      "question": "Phần mềm nào sau đây KHÔNG PHẢI là một phần mềm ứng dụng?",
      "options": [
        "Microsoft Windows 11",
        "Microsoft Word",
        "Google Chrome",
        "Zalo"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Microsoft Windows 11 là hệ điều hành (phần mềm hệ thống), không phải phần mềm ứng dụng.",
      "hint": "Windows 11 là hệ điều hành."
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
    },
    {
      "id": "g7-b3-mcq-8",
      "type": "multiple_choice",
      "question": "Tên tệp trong hệ điều hành Windows bao gồm hai phần chính là gì, ngăn cách bởi dấu gì?",
      "options": [
        "Phần tên và Phần mở rộng (đuôi tệp), ngăn cách bởi dấu chấm (.)",
        "Phần tiêu đề và phần nội dung, ngăn cách bởi dấu gạch ngang (-)",
        "Phần số và phần chữ, ngăn cách bởi dấu phẩy (,)",
        "Chỉ có một phần duy nhất không có dấu"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 14): Tên tệp gồm Phần tên và Phần mở rộng cách nhau bởi dấu chấm.",
      "hint": "Ví dụ: Baocao.docx (docx là phần mở rộng)."
    },
    {
      "id": "g7-b3-mcq-9",
      "type": "multiple_choice",
      "question": "Phần mở rộng (đuôi tệp) như .docx, .xlsx, .pptx, .mp3 giúp hệ điều hành nhận biết điều gì?",
      "options": [
        "Loại tệp dữ liệu và phần mềm mặc định tương ứng để mở tệp đó",
        "Kích thước thật của màn hình",
        "Tên của người đã tạo ra máy tính",
        "Tốc độ mạng Internet"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Phần mở rộng quy định định dạng tệp và phần mềm tương thích để đọc tệp.",
      "hint": "Định dạng tệp dữ liệu."
    },
    {
      "id": "g7-b3-mcq-10",
      "type": "multiple_choice",
      "question": "Đường dẫn (Path) trong hệ điều hành có ý nghĩa gì?",
      "options": [
        "Chỉ dẫn chính xác vị trí của tệp hoặc thư mục trên ổ đĩa từ thư mục gốc đến tệp đó",
        "Đường dây điện kết nối máy tính với ổ cắm",
        "Đường đi từ trường về nhà học sinh",
        "Tốc độ truy cập mạng không dây"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT: Đường dẫn là dãy các thư mục lồng nhau dẫn đến tệp đích, phân cách bằng dấu gạch chéo ngược (\\).",
      "hint": "Ví dụ: C:\\HocTap\\TinHoc7\\BaiTap.docx."
    },
    {
      "id": "g7-b3-mcq-11",
      "type": "multiple_choice",
      "question": "Tổ hợp phím tắt dùng để SAO CHÉP (Copy) và DÁN (Paste) tệp hoặc thư mục lần lượt là gì?",
      "options": [
        "Ctrl + C và Ctrl + V",
        "Ctrl + X và Ctrl + Z",
        "Ctrl + A và Ctrl + S",
        "Ctrl + P và Ctrl + F"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Ctrl + C sao chép đối tượng vào Clipboard; Ctrl + V dán đối tượng ra vị trí đích.",
      "hint": "Ctrl + C (Copy) và Ctrl + V (Paste)."
    },
    {
      "id": "g7-b3-mcq-12",
      "type": "multiple_choice",
      "question": "Thao tác ĐỔI TÊN (Rename) một tệp tin trên Windows nhanh nhất bằng phím nào trên bàn phím?",
      "options": [
        "Phím F2",
        "Phím F1",
        "Phím F5",
        "Phím Escape (Esc)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Phím tắt F2 cho phép đổi tên nhanh tệp/thư mục đang được chọn.",
      "hint": "Phím chức năng F2."
    },
    {
      "id": "g7-b3-mcq-13",
      "type": "multiple_choice",
      "question": "Khi xóa một tệp bằng phím Delete thông thường, tệp đó sẽ đi đâu?",
      "options": [
        "Chuyển vào Thùng rác (Recycle Bin) và có thể khôi phục lại khi cần",
        "Bị xóa vĩnh viễn khỏi ổ cứng không thể lấy lại",
        "Tự động tải lên mạng xã hội",
        "Chuyển thành tệp ảnh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tệp bị xóa tạm thời lưu trong Recycle Bin để người dùng có cơ hội Restore (khôi phục).",
      "hint": "Lưu tạm trong Recycle Bin (Thùng rác)."
    },
    {
      "id": "g7-b3-mcq-14",
      "type": "multiple_choice",
      "question": "Để xóa vĩnh viễn một tệp tin mà KHÔNG đưa vào thùng rác Recycle Bin, em nhấn tổ hợp phím nào?",
      "options": [
        "Shift + Delete",
        "Ctrl + Delete",
        "Alt + Delete",
        "Tab + Delete"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Shift + Delete xóa vĩnh viễn tệp ngay lập tức mà không đi qua Recycle Bin.",
      "hint": "Phím Shift kết hợp phím Delete."
    },
    {
      "id": "g7-b3-mcq-15",
      "type": "multiple_choice",
      "question": "Tại sao người dùng nên thường xuyên SAO LƯU DỰ PHÒNG (Backup) các dữ liệu quan trọng?",
      "options": [
        "Để bảo vệ dữ liệu, phòng trường hợp máy tính bị hỏng ổ cứng, nhiễm virus hoặc bị mất trộm",
        "Để làm đầy bộ nhớ máy tính",
        "Để máy tính tiêu thụ nhiều điện hơn",
        "Để không ai có thể xem được dữ liệu nữa"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin 7 KNTT: Sao lưu sang ổ cứng ngoài hoặc đám mây (Google Drive, OneDrive) giúp dữ liệu luôn an toàn.",
      "hint": "Phòng tránh rủi ro mất dữ liệu khi hỏng hóc hoặc virus."
    },
    {
      "id": "g7-b3-mcq-16",
      "type": "multiple_choice",
      "question": "Cấu trúc tổ chức lưu trữ dữ liệu trên máy tính có dạng gì?",
      "options": [
        "Cấu trúc hình cây (Cây thư mục - Tree Directory)",
        "Cấu trúc hình tròn",
        "Cấu trúc đường thẳng một chiều",
        "Cấu trúc tam giác"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Cây thư mục gồm thư mục gốc (Root), các thư mục con (Subfolders) và các tệp lá.",
      "hint": "Cấu trúc hình cây phân nhánh."
    },
    {
      "id": "g7-b3-mcq-17",
      "type": "multiple_choice",
      "question": "Kí tự nào sau đây KHÔNG ĐƯỢC PHÉP xuất hiện trong tên của tệp hoặc thư mục trên hệ điều hành Windows?",
      "options": [
        "Các kí tự: \\ / : * ? \" < > |",
        "Chữ cái tiếng Việt có dấu",
        "Các chữ số từ 0 đến 9",
        "Kí tự gạch dưới (_)"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Hệ điều hành Windows cấm sử dụng các kí tự đặc biệt dùng làm cú pháp hệ thống như \\ / : * ? \" < > |.",
      "hint": "Các dấu xiên, hai chấm, hỏi chấm, sao, ngoặc nhọn."
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
    },
    {
      "id": "g7-b4-mcq-8",
      "type": "multiple_choice",
      "question": "Mạng xã hội (Social Network) là gì?",
      "options": [
        "Hệ thống ứng dụng trên Internet cho phép người dùng kết nối, giao lưu, chia sẻ bài viết, hình ảnh, video và tương tác trực tuyến",
        "Một loại dây cáp mạng nối các máy tính với nhau",
        "Một mạng lưới bán buôn hàng hóa ở siêu thị",
        "Một phần mềm chỉ dùng để vẽ tranh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 18): Mạng xã hội là không gian ảo để kết nối và chia sẻ cộng đồng.",
      "hint": "Không gian kết nối, chia sẻ nội dung giữa mọi người."
    },
    {
      "id": "g7-b4-mcq-9",
      "type": "multiple_choice",
      "question": "Ứng dụng nào sau đây được coi là một mạng xã hội phổ biến rộng rãi?",
      "options": [
        "Facebook, Zalo, YouTube, TikTok",
        "Microsoft Word",
        "Phần mềm Calculator",
        "Trình duyệt Safari"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Facebook, Zalo, TikTok là các nền tảng mạng xã hội có hàng triệu người dùng.",
      "hint": "Các nền tảng tương tác, kết bạn trực tuyến."
    },
    {
      "id": "g7-b4-mcq-10",
      "type": "multiple_choice",
      "question": "Chức năng nào sau đây thường có trên hầu hết các nền tảng mạng xã hội?",
      "options": [
        "Tạo trang cá nhân, đăng bài (Post), bình luận (Comment), thích (Like) và nhắn tin riêng",
        "Tự động làm sạch bụi bẩn trên bàn phím",
        "In sách giáo khoa tự động ra giấy",
        "Nấu ăn tự động theo yêu cầu"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Các tính năng cơ bản của mạng xã hội: tạo profile, đăng tải trạng thái, kết nối và tương tác bạn bè.",
      "hint": "Đăng bài, bình luận, tương tác bạn bè."
    },
    {
      "id": "g7-b4-mcq-11",
      "type": "multiple_choice",
      "question": "Mặt trái hoặc tác hại tiêu cực khi lạm dụng mạng xã hội quá mức là gì?",
      "options": [
        "Lãng phí thời gian, suy giảm thị lực, sa sút kết quả học tập và có thể bị lừa đảo hoặc bắt nạt trực tuyến",
        "Giúp người dùng trở nên thông minh vượt bậc mà không cần học tập",
        "Giúp tiết kiệm 100% chi phí ăn uống",
        "Tăng cường sức khỏe thể chất"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin 7 KNTT: Nghiện mạng xã hội gây hại sức khỏe thể chất và tinh thần của lứa tuổi học sinh.",
      "hint": "Lãng phí thời gian và ảnh hưởng học tập, sức khỏe."
    },
    {
      "id": "g7-b4-mcq-12",
      "type": "multiple_choice",
      "question": "Khi muốn tham gia một nhóm học tập (Group) trên mạng xã hội, học sinh nên ưu tiên nhóm nào?",
      "options": [
        "Nhóm học tập do thầy cô giáo của trường thành lập, có nội dung trao đổi nghiêm túc và lành mạnh",
        "Các nhóm ẩn danh chia sẻ cách gian lận thi cử",
        "Các nhóm kích động nói xấu bạn bè",
        "Nhóm chia sẻ game bài đổi thưởng trái phép"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tham gia nhóm chính thống do nhà trường hoặc thầy cô quản lí để tiếp thu kiến thức bổ ích.",
      "hint": "Nhóm của thầy cô giáo và nhà trường."
    },
    {
      "id": "g7-b4-mcq-13",
      "type": "multiple_choice",
      "question": "Hành vi nào sau đây là văn minh và an toàn khi sử dụng mạng xã hội?",
      "options": [
        "Tôn trọng quyền riêng tư của người khác, xin phép trước khi đăng ảnh của bạn và nói lời lịch sự",
        "Lập tài khoản mạo danh người khác để đi bình luận ác ý",
        "Đăng thông tin địa chỉ nhà và số căn cước công dân công khai",
        "Chia sẻ tin đồn giật gân chưa được kiểm chứng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tôn trọng người khác và bảo vệ thông tin riêng tư là nét văn hóa mạng cần thiết.",
      "hint": "Tôn trọng và nói lời lịch sự, xin phép khi đăng ảnh."
    },
    {
      "id": "g7-b4-mcq-14",
      "type": "multiple_choice",
      "question": "Kênh trao đổi thông tin trực tuyến nào sau đây thường được sử dụng để tổ chức lớp học trực tuyến khi có dịch bệnh hoặc hội thảo từ xa?",
      "options": [
        "Google Meet, Zoom, Microsoft Teams",
        "Phần mềm Paint",
        "Microsoft Excel",
        "Trình duyệt File Explorer"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Google Meet và Zoom là ứng dụng hội nghị truyền hình trực tuyến phổ biến.",
      "hint": "Google Meet và Zoom."
    },
    {
      "id": "g7-b4-mcq-15",
      "type": "multiple_choice",
      "question": "Quyền riêng tư (Privacy) của bài đăng trên mạng xã hội có thể thiết lập ở những chế độ nào?",
      "options": [
        "Công khai (Public), Bạn bè (Friends) hoặc Chỉ mình tôi (Only me)",
        "Chỉ có thể công khai cho cả thế giới xem",
        "Chỉ có người thân trong gia đình mới xem được",
        "Không có quyền thiết lập riêng tư"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Người dùng có thể kiểm soát đối tượng nhìn thấy bài viết của mình qua thiết lập quyền riêng tư.",
      "hint": "Công khai, Bạn bè hoặc Chỉ mình tôi."
    },
    {
      "id": "g7-b4-mcq-16",
      "type": "multiple_choice",
      "question": "Khi một người lạ kết bạn trên mạng xã hội và yêu cầu em cung cấp số điện thoại của bố mẹ hoặc gửi ảnh riêng tư, em nên xử lí thế nào?",
      "options": [
        "Tuyệt đối từ chối, chặn người đó và thông báo ngay cho bố mẹ hoặc thầy cô giáo biết",
        "Lập tức gửi thông tin theo yêu cầu của họ",
        "Hẹn gặp trực tiếp người đó tại nơi vắng vẻ",
        "Rủ các bạn khác cùng gửi ảnh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Cảnh giác cao độ với đối tượng lạ trên mạng xã hội để phòng tránh nguy cơ xâm hại.",
      "hint": "Từ chối, chặn liên lạc và báo ngay người lớn."
    },
    {
      "id": "g7-b4-mcq-17",
      "type": "multiple_choice",
      "question": "Diễn đàn trực tuyến (Forum) là kênh trao đổi thông tin có đặc trưng gì?",
      "options": [
        "Người dùng tạo các chủ đề thảo luận (Topic) và các thành viên cùng vào bình luận, giải đáp theo luồng chuyên sâu",
        "Chỉ có đúng một người được phép đăng bài",
        "Bài viết sẽ tự động xóa sau 5 giây",
        "Không thể gửi văn bản"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Diễn đàn chuyên về thảo luận theo từng chuyên mục và đề tài cụ thể.",
      "hint": "Thảo luận theo chủ đề (Thread/Topic)."
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
    },
    {
      "id": "g7-b5-mcq-8",
      "type": "multiple_choice",
      "question": "Bắt nạt trên mạng (Cyberbullying) là hành vi như thế nào?",
      "options": [
        "Sử dụng tin nhắn, bài viết, hình ảnh để đe dọa, xúc phạm danh dự, nhục mạ hoặc cô lập người khác trên không gian mạng",
        "Cùng bạn bè thi đua giải bài tập Tin học",
        "Nhắn tin chúc mừng sinh nhật bạn",
        "Chia sẻ tài liệu học tập hữu ích"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 22): Bắt nạt qua mạng gây tổn hại nghiêm trọng về tâm lí cho nạn nhân.",
      "hint": "Xúc phạm, lăng mạ, bôi nhọ danh dự trên mạng."
    },
    {
      "id": "g7-b5-mcq-9",
      "type": "multiple_choice",
      "question": "Khi chứng kiến một bạn cùng lớp đang bị bắt nạt hoặc bêu rếu tập thể trên mạng xã hội, hành động ĐÚNG ĐẮN của em là gì?",
      "options": [
        "Không hùa theo, lên tiếng bảo vệ hoặc thông báo ngay cho thầy cô giáo chủ nhiệm và phụ huynh để can thiệp kịp thời",
        "Nhấn nút Thích (Like) và thả biểu cảm cười cợt",
        "Chia sẻ bài viết đi khắp nơi để mọi người cùng xem",
        "Viết thêm bình luận chê bai bạn thậm tệ hơn"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Hành vi dũng cảm bảo vệ bạn và báo người lớn giúp ngăn chặn bạo lực học đường qua mạng.",
      "hint": "Không hùa theo, báo ngay cho thầy cô và cha mẹ."
    },
    {
      "id": "g7-b5-mcq-10",
      "type": "multiple_choice",
      "question": "Quy tắc 'Hãy dừng lại suy nghĩ trước khi đăng hoặc bình luận' (Think before you post) nhằm mục đích gì?",
      "options": [
        "Tránh phát ngôn nông nổi gây tổn thương cho người khác hoặc vi phạm pháp luật",
        "Để mạng Internet không bị quá tải",
        "Để tăng số lượng người theo dõi",
        "Để kiểm tra xem bàn phím có bị liệt phím không"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Mọi dấu vết kỹ thuật số đăng lên mạng đều tồn tại lâu dài, do đó cần cẩn trọng trước khi phát ngôn.",
      "hint": "Tránh phát ngôn bốc đồng gây hậu quả xấu."
    },
    {
      "id": "g7-b5-mcq-11",
      "type": "multiple_choice",
      "question": "Tin giả (Fake News) trên không gian mạng thường có đặc điểm nhận diện nào?",
      "options": [
        "Tiêu đề giật gân, phóng đại quá mức, không ghi rõ nguồn gốc tác giả hoặc từ các trang web giả mạo tên miền lạ",
        "Có văn bản đóng dấu đỏ chính thức của cơ quan có thẩm quyền",
        "Được đăng trên cổng thông tin điện tử chính phủ .gov.vn",
        "Được phát sóng trong bản tin thời sự VTV1"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin 7 KNTT: Tin giả thường dùng chiêu trò giật gân để câu view, gây hoang mang dư luận.",
      "hint": "Tiêu đề giật gân, nguồn tin mập mờ không xác thực."
    },
    {
      "id": "g7-b5-mcq-12",
      "type": "multiple_choice",
      "question": "Hành vi lan truyền tin tức sai sự thật trên mạng xã hội có thể bị xử lí như thế nào theo pháp luật Việt Nam?",
      "options": [
        "Bị phạt tiền vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự nếu gây hậu quả nghiêm trọng",
        "Được khen thưởng vì giúp mạng xã hội thêm sôi động",
        "Không bị xử lí gì vì là thế giới ảo",
        "Chỉ bị xóa tài khoản mạng xã hội"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Luật An ninh mạng quy định mức phạt hành chính hoặc hình sự đối với hành vi tung tin thất thiệt.",
      "hint": "Xử phạt vi phạm hành chính hoặc truy cứu hình sự."
    },
    {
      "id": "g7-b5-mcq-13",
      "type": "multiple_choice",
      "question": "Học sinh nên dành thời lượng sử dụng máy tính và điện thoại thông minh mỗi ngày như thế nào là hợp lí và khoa học?",
      "options": [
        "Từ 1 đến 2 giờ mỗi ngày cho học tập và giải trí lành mạnh, xen kẽ nghỉ ngơi vận động thể thao",
        "Chơi game liên tục 10 tiếng thâu đêm",
        "Càng nhiều càng tốt, không cần ngủ",
        "Vừa sạc pin vừa dùng điện thoại suốt cả ngày"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Cần cân bằng thời gian học tập, rèn luyện thể chất và sử dụng thiết bị số để bảo vệ sức khỏe.",
      "hint": "Dưới 2 giờ mỗi ngày, kết hợp thể dục thể thao."
    },
    {
      "id": "g7-b5-mcq-14",
      "type": "multiple_choice",
      "question": "Nguyên tắc tôn trọng quyền tác giả trên Internet đòi hỏi khi sao chép tài liệu, hình ảnh vào bài thuyết trình em phải làm gì?",
      "options": [
        "Ghi rõ nguồn trích dẫn và tác giả của bức ảnh hoặc tài liệu đó",
        "Xóa tên tác giả và nhận đó là do mình tự làm",
        "Chỉnh sửa một chút rồi đăng ký bản quyền cho mình",
        "Không cần làm gì cả vì trên mạng là đồ miễn phí"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Trích dẫn nguồn là yêu cầu đạo đức và pháp lý bắt buộc khi sử dụng tư liệu của người khác.",
      "hint": "Trích dẫn rõ nguồn tác giả."
    },
    {
      "id": "g7-b5-mcq-15",
      "type": "multiple_choice",
      "question": "Khi ai đó để lại bình luận mang tính góp ý xây dựng nhưng không cùng quan điểm với em, em nên phản ứng thế nào?",
      "options": [
        "Lắng nghe, trao đổi lại một cách bình tĩnh, tôn trọng và có văn hóa",
        "Lập tức chửi bới và xúc phạm gia đình họ",
        "Kêu gọi bạn bè kéo vào tấn công trang cá nhân của họ",
        "Chặn họ ngay mà không cần đọc"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Văn hóa tranh luận văn minh trên mạng là tôn trọng sự khác biệt và trao đổi lịch sự.",
      "hint": "Bình tĩnh, tôn trọng và trao đổi lịch sự."
    },
    {
      "id": "g7-b5-mcq-16",
      "type": "multiple_choice",
      "question": "Việc chụp ảnh người khác khi chưa được họ đồng ý rồi đăng lên mạng có phải là hành vi vi phạm đạo đức không?",
      "options": [
        "Có, đó là hành vi xâm phạm quyền riêng tư và hình ảnh cá nhân của người khác",
        "Không, vì chụp ảnh ngoài đường là quyền tự do",
        "Không sao nếu bức ảnh đó nhận được nhiều lượt like",
        "Chỉ vi phạm khi chụp ảnh ban đêm"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Pháp luật bảo hộ quyền hình ảnh cá nhân, đăng ảnh người khác phải có sự đồng ý của họ.",
      "hint": "Xâm phạm quyền hình ảnh cá nhân."
    },
    {
      "id": "g7-b5-mcq-17",
      "type": "multiple_choice",
      "question": "Bộ Quy tắc ứng xử trên mạng xã hội do Bộ Thông tin và Truyền thông ban hành hướng tới xây dựng một môi trường mạng như thế nào?",
      "options": [
        "An toàn, lành mạnh, văn minh và tôn trọng pháp luật",
        "Tự do tuyệt đối muốn nói gì cũng được",
        "Chỉ dành riêng cho các doanh nghiệp lớn",
        "Bắt buộc mọi người phải ngừng dùng mạng xã hội"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Bộ quy tắc khuyến khích cộng đồng ứng xử trách nhiệm, xây dựng môi trường mạng tích cực.",
      "hint": "An toàn, lành mạnh và văn minh."
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
    },
    {
      "id": "g7-b6-mcq-8",
      "type": "multiple_choice",
      "question": "Trong phần mềm bảng tính Excel, GIAO ĐIỂM giữa một CỘT và một HÀNG được gọi là gì?",
      "options": [
        "Ô tính (Cell)",
        "Bảng tính (Sheet)",
        "Thanh công thức",
        "Sổ tính (Workbook)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 26): Giao của một cột và một hàng là ô tính.",
      "hint": "Ô tính (Cell) là đơn vị cơ sở lưu dữ liệu."
    },
    {
      "id": "g7-b6-mcq-9",
      "type": "multiple_choice",
      "question": "Địa chỉ của một ô tính được xác định như thế nào?",
      "options": [
        "Tên cột ghép với tên hàng (Ví dụ: B5, C10, A1)",
        "Tên hàng ghép với tên cột (Ví dụ: 5B, 10C)",
        "Số thứ tự của trang tính",
        "Tên của người đang soạn thảo"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Địa chỉ ô bắt đầu bằng chữ cái tên cột theo sau là số thứ tự hàng.",
      "hint": "Tên cột trước, tên hàng sau (như A1, B3)."
    },
    {
      "id": "g7-b6-mcq-10",
      "type": "multiple_choice",
      "question": "Thanh công thức (Formula Bar) trong bảng tính hiển thị điều gì?",
      "options": [
        "Dữ liệu hoặc công thức toán học đang được nhập tại ô tính đang được chọn",
        "Tên tác giả của phần mềm Excel",
        "Đồng hồ thời gian thực",
        "Số trang giấy in ra"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Thanh công thức hiển thị nội dung thực tế hoặc công thức tính toán của ô hiện hành.",
      "hint": "Hiển thị công thức hoặc nội dung gốc của ô."
    },
    {
      "id": "g7-b6-mcq-11",
      "type": "multiple_choice",
      "question": "Khối ô (Range) trong bảng tính được kí hiệu bằng cách nào sau đây?",
      "options": [
        "Địa chỉ ô đầu bên trái : Địa chỉ ô cuối bên phải (Ví dụ: A1:D10)",
        "Địa chỉ ô đầu / Địa chỉ ô cuối",
        "Địa chỉ ô đầu + Địa chỉ ô cuối",
        "Địa chỉ ô đầu * Địa chỉ ô cuối"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Khối ô hình chữ nhật được biểu diễn bằng địa chỉ ô góc trên bên trái và ô góc dưới bên phải, ngăn cách bởi dấu hai chấm (:).",
      "hint": "Ngăn cách bởi dấu hai chấm (Ví dụ: A1:C5)."
    },
    {
      "id": "g7-b6-mcq-12",
      "type": "multiple_choice",
      "question": "Theo mặc định trong Excel, dữ liệu kiểu KÍ TỰ (chữ viết) và kiểu SỐ được căn lề như thế nào trong ô?",
      "options": [
        "Dữ liệu kí tự căn lề TRÁI, dữ liệu số căn lề PHẢI",
        "Dữ liệu kí tự căn lề PHẢI, dữ liệu số căn lề TRÁI",
        "Cả hai đều căn lề giữa",
        "Cả hai đều căn lề phải"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin 7 KNTT: Quy ước mặc định: Chuỗi chữ căn trái, số căn phải, logic căn giữa.",
      "hint": "Chữ căn trái, số căn phải."
    },
    {
      "id": "g7-b6-mcq-13",
      "type": "multiple_choice",
      "question": "Hộp tên (Name Box) nằm ở vị trí nào và có chức năng gì?",
      "options": [
        "Nằm ở bên trái thanh công thức, hiển thị địa chỉ của ô hoặc khối ô đang được kích hoạt",
        "Nằm ở dưới cùng màn hình hiển thị tên máy tính",
        "Dùng để đổi phông chữ",
        "Dùng để lưu tệp"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Name Box hiển thị địa chỉ của ô hiện hành (Active Cell).",
      "hint": "Hiển thị tên/địa chỉ ô đang chọn."
    },
    {
      "id": "g7-b6-mcq-14",
      "type": "multiple_choice",
      "question": "Trong Excel, các CỘT được đặt tên bằng gì và các HÀNG được đặt tên bằng gì?",
      "options": [
        "Các cột được đặt tên bằng chữ cái (A, B, C...), các hàng được đặt tên bằng số (1, 2, 3...)",
        "Các cột bằng số, các hàng bằng chữ cái",
        "Cả cột và hàng đều bằng số",
        "Cả cột và hàng đều bằng chữ cái La Mã"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Cột là các chữ cái A, B, C...; Hàng là các chữ số 1, 2, 3...",
      "hint": "Cột chữ cái, hàng chữ số."
    },
    {
      "id": "g7-b6-mcq-15",
      "type": "multiple_choice",
      "question": "Để kích hoạt một ô tính, người dùng thực hiện thao tác gì?",
      "options": [
        "Nháy chuột vào ô đó hoặc dùng các phím mũi tên di chuyển đến ô",
        "Bấm phím tắt Print Screen",
        "Khởi động lại máy tính",
        "Tắt màn hình"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Nhấp chuột vào ô để chọn làm ô hiện hành (có viền đen đậm bao quanh).",
      "hint": "Nháy chuột vào ô cần chọn."
    },
    {
      "id": "g7-b6-mcq-16",
      "type": "multiple_choice",
      "question": "Một sổ tính (Workbook) trong phần mềm bảng tính có thể chứa bao nhiêu trang tính (Worksheet)?",
      "options": [
        "Nhiều trang tính khác nhau, có thể thêm, xóa, đổi tên tùy ý",
        "Chỉ duy nhất một trang tính không thể thêm",
        "Tối đa đúng 2 trang",
        "Không chứa trang tính nào"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Mỗi tệp Excel (Workbook) có thể gồm nhiều Sheet (trang tính) quản lí dữ liệu.",
      "hint": "Nhiều trang tính (Sheet1, Sheet2...)."
    },
    {
      "id": "g7-b6-mcq-17",
      "type": "multiple_choice",
      "question": "Để đổi tên cho một trang tính (Sheet), thao tác thuận tiện nhất là gì?",
      "options": [
        "Nháy đúp chuột vào tên trang tính (hoặc nhấp chuột phải chọn Rename), sau đó nhập tên mới và nhấn Enter",
        "Xóa bỏ trang tính đó đi rồi tạo lại",
        "Lưu tệp dưới tên mới",
        "Tắt phần mềm bảng tính"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Nháy đúp chuột vào thẻ tab sheet phía dưới để sửa tên trực tiếp.",
      "hint": "Nháy đúp chuột vào tên Sheet cần đổi."
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
    },
    {
      "id": "g7-b7-mcq-8",
      "type": "multiple_choice",
      "question": "Kí tự đầu tiên BẮT BUỘC phải gõ vào ô tính khi nhập một công thức toán học trong Excel là gì?",
      "options": [
        "Dấu bằng (=)",
        "Dấu cộng (+)",
        "Dấu sao (*)",
        "Dấu hai chấm (:)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 30): Mọi công thức tính toán đều phải bắt đầu bằng dấu '='.",
      "hint": "Dấu bằng (=)."
    },
    {
      "id": "g7-b7-mcq-9",
      "type": "multiple_choice",
      "question": "Các phép toán cộng, trừ, nhân, chia, lũy thừa trong phần mềm bảng tính lần lượt sử dụng các kí hiệu nào?",
      "options": [
        "+, -, *, /, ^",
        "+, -, x, :, ^",
        "+, -, ., /, %",
        "add, sub, mul, div, pow"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Kí hiệu chuẩn: phép nhân là dấu sao (*), phép chia là dấu xuyệt (/), lũy thừa là dấu mũ (^).",
      "hint": "Nhân là *, chia là /, lũy thừa là ^."
    },
    {
      "id": "g7-b7-mcq-10",
      "type": "multiple_choice",
      "question": "Nếu trong ô A1 có số 10, ô B1 có số 5. Tại ô C1 nhập công thức: =A1+B1*2 thì kết quả hiển thị ở C1 là bao nhiêu?",
      "options": [
        "20",
        "30",
        "15",
        "100"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Quy tắc ưu tiên toán học: nhân trước cộng sau. = 10 + 5*2 = 10 + 10 = 20.",
      "hint": "Tính phép nhân trước rồi mới cộng."
    },
    {
      "id": "g7-b7-mcq-11",
      "type": "multiple_choice",
      "question": "Ưu điểm vượt trội của việc sử dụng ĐỊA CHỈ Ô (như =A1+B1) trong công thức thay vì nhập số trực tiếp (như =10+5) là gì?",
      "options": [
        "Khi giá trị trong ô A1 hoặc B1 thay đổi, kết quả trong ô tính sẽ tự động cập nhật ngay lập tức",
        "Giúp công thức trông ngắn hơn một chút",
        "Không có ưu điểm gì",
        "Làm cho máy tính không bị nóng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin 7 KNTT: Tự động cập nhật kết quả là tính năng cốt lõi của bảng tính.",
      "hint": "Tự động tính toán lại khi dữ liệu nguồn thay đổi."
    },
    {
      "id": "g7-b7-mcq-12",
      "type": "multiple_choice",
      "question": "Khi sao chép một công thức chứa địa chỉ tương đối sang một ô khác, địa chỉ ô trong công thức sẽ như thế nào?",
      "options": [
        "Tự động thay đổi tương ứng theo vị trí mới",
        "Giữ nguyên tuyệt đối không bao giờ đổi",
        "Biến thành số 0",
        "Gây ra thông báo lỗi cú pháp"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Địa chỉ tương đối tự động dịch chuyển hàng và cột tương ứng theo hướng sao chép.",
      "hint": "Tự động thay đổi theo vị trí mới."
    },
    {
      "id": "g7-b7-mcq-13",
      "type": "multiple_choice",
      "question": "Tại ô C2 có công thức: =A2+B2. Khi sao chép (kéo nút điền Fill Handle) công thức này xuống ô C3, công thức tại ô C3 sẽ là gì?",
      "options": [
        "=A3+B3",
        "=A2+B2",
        "=B3+C3",
        "=A3*B3"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Khi kéo xuống 1 hàng, chỉ số hàng tăng thêm 1: A2 thành A3, B2 thành B3.",
      "hint": "Chỉ số hàng tăng từ 2 lên 3."
    },
    {
      "id": "g7-b7-mcq-14",
      "type": "multiple_choice",
      "question": "Thao tác sử dụng NÚT ĐIỀN (Fill Handle) ở góc dưới bên phải ô tính đang chọn có tác dụng gì?",
      "options": [
        "Sao chép nhanh công thức hoặc điền dãy dữ liệu liên tiếp xuống các ô lân cận",
        "Xóa toàn bộ dữ liệu trong bảng",
        "Đổi màu ô tính",
        "In bảng tính ra giấy"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Con trỏ chuột biến thành dấu cộng mảnh màu đen để kéo sao chép công thức cực nhanh.",
      "hint": "Kéo nút điền nhỏ ở góc dưới ô tính để copy công thức."
    },
    {
      "id": "g7-b7-mcq-15",
      "type": "multiple_choice",
      "question": "Nếu trong công thức có các dấu ngoặc đơn, thứ tự thực hiện phép tính sẽ như thế nào?",
      "options": [
        "Thực hiện phép tính trong ngoặc đơn trước, ngoài ngoặc sau",
        "Thực hiện ngoài ngoặc trước, trong ngoặc sau",
        "Bỏ qua các phép tính trong ngoặc",
        "Tùy ý không theo quy tắc nào"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Biểu thức trong dấu ngoặc luôn có độ ưu tiên cao nhất.",
      "hint": "Trong ngoặc trước, ngoài ngoặc sau."
    },
    {
      "id": "g7-b7-mcq-16",
      "type": "multiple_choice",
      "question": "Công thức tính phần trăm tỉ lệ =B4/C4*100 sẽ thực hiện các phép toán theo thứ tự nào?",
      "options": [
        "Từ trái sang phải: thực hiện phép chia trước, sau đó lấy kết quả nhân với 100",
        "Thực hiện phép nhân trước sau đó mới chia",
        "Thực hiện đồng thời",
        "Lỗi không thể tính"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Phép nhân và chia có cùng độ ưu tiên, do đó được tính theo thứ tự từ trái qua phải.",
      "hint": "Quy tắc từ trái sang phải với nhân và chia."
    },
    {
      "id": "g7-b7-mcq-17",
      "type": "multiple_choice",
      "question": "Khi ô tính hiển thị lỗi '#VALUE!', nguyên nhân thường là do điều gì?",
      "options": [
        "Công thức đang thực hiện phép tính toán học với một ô chứa văn bản (chữ)",
        "Độ rộng của cột không đủ để hiển thị số",
        "Công thức chia cho số 0",
        "Máy tính bị ngắt kết nối mạng"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "#VALUE! là lỗi sai kiểu dữ liệu (ví dụ lấy số cộng với chữ).",
      "hint": "Lỗi sai kiểu dữ liệu toán học."
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
    },
    {
      "id": "g7-b8-mcq-8",
      "type": "multiple_choice",
      "question": "Hàm tính TỔNG các số trong phạm vi ô được chọn có tên là gì?",
      "options": [
        "Hàm SUM",
        "Hàm AVERAGE",
        "Hàm MAX",
        "Hàm COUNT"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 34): Cú pháp =SUM(số1, số2,...) hoặc =SUM(phạm vi ô).",
      "hint": "SUM nghĩa là tổng."
    },
    {
      "id": "g7-b8-mcq-9",
      "type": "multiple_choice",
      "question": "Hàm tính TRUNG BÌNH CỘNG các giá trị số trong bảng tính là hàm nào?",
      "options": [
        "Hàm AVERAGE",
        "Hàm TOTAL",
        "Hàm MEAN",
        "Hàm MIN"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "=AVERAGE(danh sách đối số) tính trung bình cộng của các giá trị số.",
      "hint": "AVERAGE nghĩa là trung bình."
    },
    {
      "id": "g7-b8-mcq-10",
      "type": "multiple_choice",
      "question": "Để tìm giá trị LỚN NHẤT và NHỎ NHẤT trong một danh sách điểm số, ta dùng lần lượt hai hàm nào?",
      "options": [
        "Hàm MAX và hàm MIN",
        "Hàm BIG và hàm SMALL",
        "Hàm TOP và hàm BOTTOM",
        "Hàm HIGH và hàm LOW"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "MAX tìm giá trị cực đại lớn nhất; MIN tìm giá trị cực tiểu nhỏ nhất.",
      "hint": "MAX (lớn nhất) và MIN (nhỏ nhất)."
    },
    {
      "id": "g7-b8-mcq-11",
      "type": "multiple_choice",
      "question": "Hàm COUNT trong phần mềm bảng tính có chức năng gì?",
      "options": [
        "Đếm số lượng các ô có chứa dữ liệu kiểu SỐ trong danh sách đối số",
        "Đếm tất cả các ô trống",
        "Cộng tổng các số",
        "Xóa các ô bị trùng lặp"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "=COUNT(phạm vi) đếm số lượng ô có chứa giá trị số.",
      "hint": "Đếm số ô chứa dữ liệu số."
    },
    {
      "id": "g7-b8-mcq-12",
      "type": "multiple_choice",
      "question": "Cho các ô A1=8, A2=6, A3=10. Kết quả của công thức =AVERAGE(A1:A3) là bao nhiêu?",
      "options": [
        "8",
        "24",
        "10",
        "6"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Trung bình cộng: (8 + 6 + 10) / 3 = 24 / 3 = 8.",
      "hint": "Tổng là 24, chia cho 3 số."
    },
    {
      "id": "g7-b8-mcq-13",
      "type": "multiple_choice",
      "question": "Cách viết hàm SUM nào sau đây là ĐÚNG CÚ PHÁP?",
      "options": [
        "=SUM(B2:B10)",
        "=SUM B2:B10",
        "SUM(B2..B10)",
        "=SUM{B2:B10}"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Cú pháp bắt buộc có dấu '=', tên hàm viết hoa hay thường đều được, đối số nằm trong cặp ngoặc đơn tròn ().",
      "hint": "Có dấu = và đối số trong ngoặc tròn ()."
    },
    {
      "id": "g7-b8-mcq-14",
      "type": "multiple_choice",
      "question": "Nút lệnh AutoSum (kí hiệu chữ Hy Lạp Sigma Σ) trên thanh công cụ Home có tác dụng gì?",
      "options": [
        "Tự động điền nhanh hàm tính tổng SUM cho một hàng hoặc một cột dữ liệu liền kề",
        "Tự động vẽ biểu đồ",
        "In trang tính",
        "Đổi màu nền bảng tính"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "AutoSum giúp chèn nhanh hàm SUM mà không cần gõ từng kí tự.",
      "hint": "Chèn nhanh hàm tính tổng tự động."
    },
    {
      "id": "g7-b8-mcq-15",
      "type": "multiple_choice",
      "question": "Trong danh sách đối số của hàm =SUM(A1, B2, C3:C5), dấu phẩy (hoặc dấu chấm phẩy tùy cài đặt hệ thống) có tác dụng gì?",
      "options": [
        "Phân cách giữa các đối số độc lập",
        "Thực hiện phép chia",
        "Nối chuỗi văn bản",
        "Kết thúc câu lệnh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Dấu phẩy hoặc chấm phẩy dùng để phân tách các tham số/đối số trong hàm.",
      "hint": "Phân tách các đối số."
    },
    {
      "id": "g7-b8-mcq-16",
      "type": "multiple_choice",
      "question": "Cho các ô A1=4, A2='Tin học', A3=6. Kết quả của công thức =COUNT(A1:A3) là bao nhiêu?",
      "options": [
        "2",
        "3",
        "1",
        "10"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Hàm COUNT chỉ đếm các ô chứa số. A1=4 và A3=6 là số (2 ô), A2 là chữ nên bỏ qua.",
      "hint": "Chỉ đếm các ô có chứa số."
    },
    {
      "id": "g7-b8-mcq-17",
      "type": "multiple_choice",
      "question": "Khi gõ sai tên hàm trong bảng tính (ví dụ gõ =SUMM(A1:A5)), bảng tính sẽ thông báo mã lỗi nào?",
      "options": [
        "#NAME?",
        "#REF!",
        "#DIV/0!",
        "#N/A"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "#NAME? là lỗi không nhận diện được tên hàm hoặc tên vùng dữ liệu.",
      "hint": "Lỗi tên hàm không xác định #NAME?."
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
    },
    {
      "id": "g7-b9-mcq-8",
      "type": "multiple_choice",
      "question": "Thao tác kẻ đường viền (Borders) cho các ô tính trong bảng tính nhằm mục đích gì quan trọng nhất?",
      "options": [
        "Làm cho bảng số liệu rõ ràng, dễ đọc, phân biệt ranh giới giữa các hàng và cột khi in ra giấy",
        "Để tăng dung lượng bộ nhớ máy tính",
        "Để tự động tính toán tổng số tiền",
        "Để khóa bảng tính không cho người khác xem"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 38): Mặc định các đường lưới xám trên màn hình sẽ không được in ra, do đó cần kẻ Borders để phân định rõ ô khi in ấn.",
      "hint": "Phân chia ranh giới rõ ràng khi in ra giấy."
    },
    {
      "id": "g7-b9-mcq-9",
      "type": "multiple_choice",
      "question": "Để thay đổi màu nền (Fill Color) cho tiêu đề các cột trong bảng tính, em sử dụng biểu tượng nào trên thanh công cụ Home?",
      "options": [
        "Biểu tượng Thùng sơn đang đổ (Fill Color)",
        "Biểu tượng Chữ A gạch chân màu (Font Color)",
        "Biểu tượng Chiếc chổi quét (Format Painter)",
        "Biểu tượng Cây kéo (Cut)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Biểu tượng Thùng sơn dùng để tô màu nền cho các ô tính được chọn.",
      "hint": "Biểu tượng thùng sơn nghiêng."
    },
    {
      "id": "g7-b9-mcq-10",
      "type": "multiple_choice",
      "question": "Khi số trong ô hiển thị toàn các kí tự '#######', nguyên nhân là do đâu và cách khắc phục như thế nào?",
      "options": [
        "Do độ rộng của cột quá hẹp so với độ dài của số, khắc phục bằng cách kéo rộng cột ra",
        "Do máy tính bị nhiễm virus, cần khởi động lại máy",
        "Do công thức tính bị sai hoàn toàn",
        "Do người dùng gõ sai mật khẩu"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Kí hiệu #### cảnh báo độ rộng cột không đủ hiển thị hết các chữ số, chỉ cần kéo dãn độ rộng cột.",
      "hint": "Độ rộng cột quá hẹp, cần nới rộng cột."
    },
    {
      "id": "g7-b9-mcq-11",
      "type": "multiple_choice",
      "question": "Nút lệnh căn giữa nội dung ô tính theo cả chiều ngang và chiều dọc nằm trong nhóm lệnh nào của thẻ Home?",
      "options": [
        "Nhóm Alignment",
        "Nhóm Font",
        "Nhóm Number",
        "Nhóm Editing"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Nhóm Alignment chứa các nút căn lề: trái, phải, giữa, căn trên, giữa, dưới.",
      "hint": "Nhóm căn lề Alignment."
    },
    {
      "id": "g7-b9-mcq-12",
      "type": "multiple_choice",
      "question": "Định dạng số thập phân trong Excel có thể tăng hoặc giảm số chữ số sau dấu phẩy bằng hai nút lệnh nào?",
      "options": [
        "Increase Decimal (tăng số chữ số thập phân) và Decrease Decimal (giảm số chữ số thập phân)",
        "Bold và Italic",
        "Copy và Paste",
        "Sort và Filter"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Trong nhóm Number, hai nút có biểu tượng số 0 và mũi tên giúp tăng/giảm phần thập phân.",
      "hint": "Increase Decimal và Decrease Decimal."
    },
    {
      "id": "g7-b9-mcq-13",
      "type": "multiple_choice",
      "question": "Để in đậm một đoạn văn bản hoặc tiêu đề trong ô tính, tổ hợp phím tắt thông dụng là gì?",
      "options": [
        "Ctrl + B",
        "Ctrl + I",
        "Ctrl + U",
        "Ctrl + S"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Ctrl + B (Bold) là phím tắt in đậm chuẩn trong mọi phần mềm văn phòng.",
      "hint": "Ctrl + B (Bold)."
    },
    {
      "id": "g7-b9-mcq-14",
      "type": "multiple_choice",
      "question": "Công cụ Format Painter (biểu tượng chiếc chổi sơn) có công dụng tiện lợi gì?",
      "options": [
        "Sao chép định dạng (màu sắc, phông chữ, viền...) từ một ô sang các ô khác một cách nhanh chóng",
        "Xóa toàn bộ nội dung ô",
        "Vẽ hình khối chữ nhật",
        "Chụp ảnh màn hình"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Format Painter giúp tái sử dụng kiểu định dạng của ô mẫu cho các ô khác.",
      "hint": "Sao chép định dạng của ô tính."
    },
    {
      "id": "g7-b9-mcq-15",
      "type": "multiple_choice",
      "question": "Để căn chỉnh dữ liệu tiền tệ (ví dụ thêm kí hiệu VNĐ hoặc $), người dùng vào định dạng nào trong hộp thoại Format Cells?",
      "options": [
        "Thẻ Number -> Currency hoặc Accounting",
        "Thẻ Font -> Strikeout",
        "Thẻ Border -> Double line",
        "Thẻ Fill -> Pattern"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Mục Currency và Accounting chuyên dùng để định dạng tiền tệ chuyên nghiệp.",
      "hint": "Định dạng Currency (Tiền tệ)."
    },
    {
      "id": "g7-b9-mcq-16",
      "type": "multiple_choice",
      "question": "Cách nhanh nhất để tự động điều chỉnh độ rộng của một cột vừa khít với nội dung dài nhất trong cột đó là gì?",
      "options": [
        "Nháy đúp chuột vào vạch phân cách giữa hai tên cột ở thanh tiêu đề cột",
        "Xóa bớt chữ trong ô",
        "Nhỏ cỡ chữ xuống 1",
        "Chèn thêm một cột mới"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Nháy đúp vào đường biên cột sẽ tự động AutoFit độ rộng theo nội dung dài nhất.",
      "hint": "Nháy đúp chuột vào vạch ngăn cách tên cột."
    },
    {
      "id": "g7-b9-mcq-17",
      "type": "multiple_choice",
      "question": "Nguyên tắc chung khi thiết kế và trình bày màu sắc cho bảng tính học tập là gì?",
      "options": [
        "Màu sắc hài hòa, trang nhã, phông chữ rõ ràng, độ tương phản tốt giữa chữ và nền để dễ đọc",
        "Sử dụng càng nhiều màu sắc lòe loẹt chói mắt càng tốt",
        "Dùng phông chữ thư pháp uốn lượn khó đọc",
        "Không dùng bất kì đường kẻ nào"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Bảng tính cần ưu tiên tính khoa học, chuẩn mực và dễ quan sát đối chiếu dữ liệu.",
      "hint": "Hài hòa, trang nhã và dễ đọc."
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
    },
    {
      "id": "g7-b10-mcq-8",
      "type": "multiple_choice",
      "question": "Nút lệnh 'Merge & Center' trên thanh công cụ Home có tác dụng gì?",
      "options": [
        "Gộp nhiều ô liền kề được chọn thành một ô duy nhất và căn lề chính giữa cho nội dung",
        "Tách một ô thành nhiều ô nhỏ",
        "Xóa toàn bộ hàng và cột",
        "Sao chép nội dung sang trang tính mới"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 42): Merge & Center thường dùng để gộp các ô lại tạo tiêu đề lớn cho bảng số liệu.",
      "hint": "Gộp ô và căn lề giữa."
    },
    {
      "id": "g7-b10-mcq-9",
      "type": "multiple_choice",
      "question": "Nút lệnh 'Wrap Text' trong bảng tính có chức năng gì?",
      "options": [
        "Tự động ngắt dòng văn bản dài xuống nhiều dòng bên trong cùng một ô tính",
        "Làm cho chữ chạy ngang màn hình",
        "Xóa các từ viết sai chính tả",
        "Đổi chữ thường thành chữ hoa"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Wrap Text tự động xuống dòng trong ô khi chiều dài văn bản vượt quá độ rộng cột.",
      "hint": "Tự động ngắt dòng trong ô tính."
    },
    {
      "id": "g7-b10-mcq-10",
      "type": "multiple_choice",
      "question": "Để chèn thêm một CỘT MỚI vào bảng tính, thao tác chuẩn là gì?",
      "options": [
        "Chọn cột tại vị trí cần chèn, nhấp chuột phải và chọn Insert (hoặc nút Insert Sheet Columns trên thẻ Home)",
        "Bấm phím Delete",
        "Bấm phím Spacebar",
        "Tắt tệp và mở lại"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Lệnh Insert chèn cột mới ngay phía bên trái cột đang chọn.",
      "hint": "Nhấp chuột phải chọn Insert."
    },
    {
      "id": "g7-b10-mcq-11",
      "type": "multiple_choice",
      "question": "Để XÓA một hàng dữ liệu hoàn toàn khỏi bảng tính, em chọn hàng đó rồi thực hiện thao tác nào?",
      "options": [
        "Nhấp chuột phải chọn Delete (Delete Sheet Rows)",
        "Bấm phím Backspace",
        "Bấm phím cách (Space)",
        "Đổi màu hàng đó thành màu trắng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Phím Delete/Backspace chỉ xóa nội dung bên trong, để xóa hẳn cấu trúc hàng phải dùng lệnh Delete Sheet Rows.",
      "hint": "Chọn Delete trên menu chuột phải."
    },
    {
      "id": "g7-b10-mcq-12",
      "type": "multiple_choice",
      "question": "Tính năng CỐ ĐỊNH TIÊU ĐỀ (Freeze Panes) trong thẻ View có ý nghĩa gì khi quản lí bảng dữ liệu dài hàng trăm dòng?",
      "options": [
        "Giữ cho hàng tiêu đề luôn cố định trên cùng màn hình khi cuộn trang xuống phía dưới để theo dõi dữ liệu không bị nhầm lẫn",
        "Khóa bảng tính bằng mật khẩu",
        "Đóng băng không cho máy tính tỏa nhiệt",
        "Tự động in bảng tính"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin 7 KNTT: Freeze Panes giúp giữ tiêu đề cột luôn hiện diện khi cuộn trang xem dữ liệu lớn.",
      "hint": "Giữ cố định hàng tiêu đề khi cuộn trang."
    },
    {
      "id": "g7-b10-mcq-13",
      "type": "multiple_choice",
      "question": "Trong chế độ xem trước khi in (Print Preview), thao tác nào giúp bảng dữ liệu nằm vừa vặn trên một trang giấy?",
      "options": [
        "Thiết lập Fit Sheet on One Page trong mục Scaling của hộp thoại Print",
        "Xóa bớt một nửa số học sinh",
        "Rút dây cáp máy in",
        "Tắt màn hình"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Tùy chọn Fit Sheet on One Page tự động thu nhỏ tỉ lệ phần trăm để bảng tính nằm gọn trong một mặt giấy.",
      "hint": "Tùy chọn Fit Sheet on One Page."
    },
    {
      "id": "g7-b10-mcq-14",
      "type": "multiple_choice",
      "question": "Để thay đổi hướng trang giấy khi in giữa Trang đứng (Portrait) và Trang ngang (Landscape), em chọn lệnh nào trong thẻ Page Layout?",
      "options": [
        "Lệnh Orientation",
        "Lệnh Margins",
        "Lệnh Size",
        "Lệnh Breaks"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Orientation chứa hai lựa chọn: Portrait (hướng dọc) và Landscape (hướng ngang).",
      "hint": "Lệnh Orientation (Hướng giấy in)."
    },
    {
      "id": "g7-b10-mcq-15",
      "type": "multiple_choice",
      "question": "Lệnh Margins trong Page Layout dùng để điều chỉnh thông số gì của trang tính?",
      "options": [
        "Khoảng cách các lề (trên, dưới, trái, phải) của trang giấy in",
        "Tốc độ in ấn của máy in",
        "Độ phân giải của màn hình",
        "Độ sáng của bóng đèn"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Margins là lề trang giấy: Top, Bottom, Left, Right.",
      "hint": "Căn chỉnh lề trang in."
    },
    {
      "id": "g7-b10-mcq-16",
      "type": "multiple_choice",
      "question": "Khi muốn chọn vùng dữ liệu cụ thể để chỉ in riêng vùng đó ra giấy, em dùng lệnh nào trong Page Layout?",
      "options": [
        "Print Area -> Set Print Area",
        "Delete Page",
        "Format Cells",
        "Split Cells"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Set Print Area ấn định vùng chọn là khu vực in ấn duy nhất.",
      "hint": "Lệnh Set Print Area."
    },
    {
      "id": "g7-b10-mcq-17",
      "type": "multiple_choice",
      "question": "Nếu gộp các ô có chứa sẵn dữ liệu khác nhau lại bằng Merge & Center, Excel sẽ đưa ra cảnh báo gì?",
      "options": [
        "Chỉ giữ lại giá trị của ô ở góc trên cùng bên trái, dữ liệu các ô khác sẽ bị mất",
        "Dữ liệu tất cả các ô sẽ được cộng dồn lại với nhau",
        "Máy tính sẽ tự động tắt nguồn",
        "Không có bất kì cảnh báo nào"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Excel chỉ lưu trữ giá trị ô đầu tiên phía trên bên trái (upper-left cell) khi gộp các ô có nội dung.",
      "hint": "Chỉ giữ lại dữ liệu của ô góc trên bên trái."
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
    },
    {
      "id": "g7-b11-mcq-8",
      "type": "multiple_choice",
      "question": "Trang chiếu (Slide) là thành phần cơ bản của phần mềm nào sau đây?",
      "options": [
        "Phần mềm trình chiếu (như Microsoft PowerPoint, Google Slides)",
        "Phần mềm bảng tính Excel",
        "Phần mềm gõ văn bản Notepad",
        "Phần mềm nghe nhạc"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 48): Trang chiếu là đơn vị trình bày nội dung trong phần mềm trình chiếu.",
      "hint": "Slide trong bài thuyết trình PowerPoint."
    },
    {
      "id": "g7-b11-mcq-9",
      "type": "multiple_choice",
      "question": "Cấu trúc thông thường của một bài trình chiếu hoàn chỉnh gồm những phần cơ bản nào?",
      "options": [
        "Trang tiêu đề (tên chủ đề, người trình bày), các trang nội dung chi tiết và trang kết luận/cảm ơn",
        "Chỉ có đúng một trang duy nhất",
        "Một bảng số liệu không có chữ",
        "Một video không có âm thanh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Bài thuyết trình logic gồm: Mở đầu (tiêu đề), Thân bài (nội dung), Kết thúc (tóm tắt & cảm ơn).",
      "hint": "Trang tiêu đề, trang nội dung và trang kết thúc."
    },
    {
      "id": "g7-b11-mcq-10",
      "type": "multiple_choice",
      "question": "Phím tắt dùng để TẠO MỚI MỘT TRANG CHIẾU (New Slide) trong PowerPoint là gì?",
      "options": [
        "Ctrl + M",
        "Ctrl + N",
        "Ctrl + S",
        "Ctrl + P"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Ctrl + M tạo thêm trang chiếu mới trong bài thuyết trình (Ctrl + N tạo tệp trình chiếu hoàn toàn mới).",
      "hint": "Tổ hợp phím Ctrl + M."
    },
    {
      "id": "g7-b11-mcq-11",
      "type": "multiple_choice",
      "question": "Bố cục trang chiếu (Slide Layout) có vai trò gì?",
      "options": [
        "Sắp xếp sẵn vị trí của tiêu đề, khung văn bản, hình ảnh, bảng biểu trên trang chiếu một cách hợp lí",
        "Tự động viết nội dung thay cho học sinh",
        "Điều chỉnh âm lượng loa",
        "Xóa bài thuyết trình"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Layout cung cấp các mẫu bố cục như: Title Slide, Title and Content, Two Content...",
      "hint": "Bố trí khung văn bản và nội dung hợp lí."
    },
    {
      "id": "g7-b11-mcq-12",
      "type": "multiple_choice",
      "question": "Khung văn bản (Text Box / Placeholder) trên trang chiếu dùng để làm gì?",
      "options": [
        "Là vùng chữ nhật dành riêng để người dùng nhấp chuột vào và gõ chữ hoặc chèn nội dung",
        "Dùng để tắt trang chiếu",
        "Dùng để lưu tệp sang USB",
        "Dùng để kết nối Internet"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Trong PowerPoint, chữ không thể gõ tự do lên nền slide mà bắt buộc phải nằm trong Text Box.",
      "hint": "Khung chứa chữ viết trên trang chiếu."
    },
    {
      "id": "g7-b11-mcq-13",
      "type": "multiple_choice",
      "question": "Quy tắc 6x6 hoặc 7x7 khi thiết kế nội dung văn bản trên trang chiếu khuyên điều gì?",
      "options": [
        "Mỗi trang chiếu không nên có quá 6-7 dòng văn bản, mỗi dòng không nên quá 6-7 từ để tránh gây rối mắt",
        "Một bài thuyết trình bắt buộc phải có đúng 6 hoặc 7 trang",
        "Mỗi slide phải có đúng 6 bức tranh",
        "Thời gian thuyết trình là đúng 6 phút"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Trang chiếu chỉ nên trình bày ý chính ngắn gọn (bullet points), không nên bê nguyên đoạn văn dài.",
      "hint": "Trình bày ngắn gọn, tránh quá nhiều chữ trên một slide."
    },
    {
      "id": "g7-b11-mcq-14",
      "type": "multiple_choice",
      "question": "Để XÓA một trang chiếu không cần thiết khỏi bài trình chiếu, em chọn trang chiếu đó rồi nhấn phím nào?",
      "options": [
        "Phím Delete hoặc Backspace",
        "Phím Shift",
        "Phím Ctrl",
        "Phím Enter"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Chọn thumbnail trang chiếu ở bảng bên trái rồi bấm Delete để xóa.",
      "hint": "Phím Delete."
    },
    {
      "id": "g7-b11-mcq-15",
      "type": "multiple_choice",
      "question": "Thao tác thay đổi thứ tự xuất hiện giữa các trang chiếu được thực hiện như thế nào?",
      "options": [
        "Nhấp chuột và kéo thả trang chiếu đến vị trí mới trong ngăn hiển thị trang chiếu bên trái",
        "Xóa hết các trang đi làm lại từ đầu",
        "Không thể đổi thứ tự trang",
        "Đổi tên tệp bài giảng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Kéo thả trang chiếu trực quan trong thanh slide navigation bên trái.",
      "hint": "Kéo thả trang chiếu sang vị trí mới."
    },
    {
      "id": "g7-b11-mcq-16",
      "type": "multiple_choice",
      "question": "Mục đích chính của việc sử dụng bài trình chiếu trong buổi báo cáo dự án là gì?",
      "options": [
        "Minh họa trực quan, hỗ trợ người thuyết trình truyền tải thông điệp sinh động và thu hút sự chú ý của người nghe",
        "Để người thuyết trình đọc từng chữ trên màn hình từ đầu đến cuối",
        "Để thay thế hoàn toàn vai trò của người nói",
        "Để chiếu phim hoạt hình giải trí"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Slide là công cụ trợ thị hỗ trợ người nói diễn đạt ý tưởng mạch lạc, hấp dẫn.",
      "hint": "Hỗ trợ trực quan và thu hút người nghe."
    },
    {
      "id": "g7-b11-mcq-17",
      "type": "multiple_choice",
      "question": "Nút lệnh nào trên thanh công cụ Layout cho phép đổi kiểu bố cục của trang chiếu hiện tại?",
      "options": [
        "Nút Layout trong thẻ Home",
        "Nút New Slide",
        "Nút Reset",
        "Nút Section"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Nút Layout mở ra danh sách các kiểu bố cục mẫu để áp dụng cho slide hiện thời.",
      "hint": "Nút lệnh Layout trên thẻ Home."
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
    },
    {
      "id": "g7-b12-mcq-8",
      "type": "multiple_choice",
      "question": "Mẫu định dạng chủ đề (Theme) trong thẻ Design của phần mềm trình chiếu bao gồm những yếu tố nào?",
      "options": [
        "Bộ màu sắc (Colors), bộ phông chữ (Fonts) và các hiệu ứng hình nền được phối hợp đồng bộ và chuyên nghiệp",
        "Chỉ có duy nhất một bức tranh phong cảnh",
        "Một đoạn nhạc chuông",
        "Một danh sách các phần mềm khác"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 52): Theme định hình phong cách thẩm mỹ đồng nhất cho toàn bộ bài thuyết trình.",
      "hint": "Màu sắc, phông chữ và nền đồng bộ."
    },
    {
      "id": "g7-b12-mcq-9",
      "type": "multiple_choice",
      "question": "Để chèn một bức ảnh lưu trên máy tính vào trang chiếu, em thực hiện qua thẻ lệnh nào?",
      "options": [
        "Thẻ Insert -> Pictures -> This Device",
        "Thẻ Home -> Font",
        "Thẻ View -> Zoom",
        "Thẻ Review -> Spelling"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Thẻ Insert (Chèn) chứa tất cả các đối tượng ngoại vi như hình ảnh, hình vẽ, âm thanh, video.",
      "hint": "Thẻ Insert -> Pictures."
    },
    {
      "id": "g7-b12-mcq-10",
      "type": "multiple_choice",
      "question": "Khi thay đổi kích thước của hình ảnh trên trang chiếu, để ảnh KHÔNG BỊ BIẾN DẠNG (méo mó tỉ lệ chiều dài và chiều rộng), em nên kéo ở đâu?",
      "options": [
        "Kéo các nốt tròn ở 4 góc của bức ảnh",
        "Kéo nốt ở cạnh trên",
        "Kéo nốt ở cạnh bên trái",
        "Kéo nốt ở cạnh bên phải"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Kéo nút ở góc giữ nguyên tỉ lệ khung hình (Aspect Ratio), tránh làm hình bị dẹt hoặc kéo dài.",
      "hint": "Kéo ở 4 góc của hình ảnh."
    },
    {
      "id": "g7-b12-mcq-11",
      "type": "multiple_choice",
      "question": "Công cụ chèn sơ đồ đồ họa thông minh SmartArt trong thẻ Insert rất hữu ích khi trình bày nội dung nào?",
      "options": [
        "Quy trình từng bước, sơ đồ phân cấp tổ chức, chu trình tuần hoàn hoặc danh sách liệt kê trực quan",
        "Một bức tranh vẽ chì",
        "Một đoạn nhạc bài hát",
        "Một trò chơi điện tử"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SmartArt biến các ý tưởng cấu trúc thành các sơ đồ đồ họa bắt mắt, chuyên nghiệp.",
      "hint": "Sơ đồ quy trình, phân cấp, chu trình."
    },
    {
      "id": "g7-b12-mcq-12",
      "type": "multiple_choice",
      "question": "Để định dạng màu nền cho một trang chiếu độc lập, người dùng nhấp chuột phải vào slide và chọn lệnh nào?",
      "options": [
        "Format Background",
        "Delete Slide",
        "Hide Slide",
        "Duplicate Slide"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Format Background cho phép tùy chỉnh màu đơn sắc (Solid fill), màu chuyển (Gradient), hoặc ảnh nền.",
      "hint": "Lệnh Format Background (Định dạng nền)."
    },
    {
      "id": "g7-b12-mcq-13",
      "type": "multiple_choice",
      "question": "Nguyên tắc chọn màu chữ và màu nền trên trang chiếu để người xem ở xa vẫn nhìn rõ là gì?",
      "options": [
        "Màu chữ và màu nền phải có độ tương phản cao (Ví dụ: Chữ màu tối trên nền sáng hoặc chữ màu sáng trên nền tối)",
        "Màu chữ và màu nền trùng khít nhau",
        "Chữ màu vàng nhạt trên nền màu trắng tinh",
        "Chữ màu xám đen trên nền màu đen thui"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Độ tương phản (contrast) cao giúp chữ nổi bật, không gây mỏi mắt cho khán giả ở cuối khán phòng.",
      "hint": "Độ tương phản cao giữa chữ và nền."
    },
    {
      "id": "g7-b12-mcq-14",
      "type": "multiple_choice",
      "question": "Để xoay một hình ảnh hoặc hình vẽ (Shape) theo một góc bất kì, thao tác thực hiện là gì?",
      "options": [
        "Nhấp và rê chuột vào biểu tượng mũi tên vòng tròn xoay ở phía trên đối tượng",
        "Nháy đúp phím cách",
        "Tắt màn hình",
        "Cắt đối tượng rồi dán lại"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Nút xoay hình tròn trên đầu đối tượng cho phép xoay tự do theo các góc độ.",
      "hint": "Rê chuột vào biểu tượng mũi tên vòng xoay."
    },
    {
      "id": "g7-b12-mcq-15",
      "type": "multiple_choice",
      "question": "Thẻ Format (Picture Format hoặc Shape Format) xuất hiện trên thanh dải lệnh Ribbon khi nào?",
      "options": [
        "Khi người dùng đang bấm chọn vào một hình ảnh hoặc hình vẽ tương ứng",
        "Luôn xuất hiện liên tục ngay cả khi không chọn gì",
        "Chỉ xuất hiện khi máy tính tắt mạng",
        "Khi mở hộp thư điện tử"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Đó là thẻ ngữ cảnh (Contextual Tab), chỉ hiển thị khi có đối tượng phù hợp được chọn.",
      "hint": "Xuất hiện khi chọn vào hình ảnh hoặc hình vẽ."
    },
    {
      "id": "g7-b12-mcq-16",
      "type": "multiple_choice",
      "question": "Để cắt bỏ phần thừa không mong muốn của một bức ảnh trên trang chiếu, em dùng công cụ nào?",
      "options": [
        "Công cụ Crop (Cắt xén) trong thẻ Picture Format",
        "Công cụ Eraser",
        "Công cụ Cut",
        "Công cụ Delete"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Lệnh Crop cho phép kéo các mép biên để xén gọn ảnh theo ý muốn.",
      "hint": "Công cụ Crop (Cắt xén ảnh)."
    },
    {
      "id": "g7-b12-mcq-17",
      "type": "multiple_choice",
      "question": "Khi đưa hình ảnh vào trang chiếu, học sinh nên chú ý điều gì để bài thuyết trình đạt chất lượng cao?",
      "options": [
        "Chọn ảnh sắc nét, liên quan mật thiết đến chủ đề bài học và có kích thước cân đối với văn bản",
        "Chèn thật nhiều ảnh ngẫu nhiên không liên quan",
        "Dùng các ảnh bị nhòe vỡ hạt",
        "Phóng to ảnh che kín toàn bộ chữ"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Hình ảnh phải đóng vai trò minh họa, làm rõ nội dung kiến thức bài trình bày.",
      "hint": "Ảnh rõ nét, phù hợp nội dung và kích thước cân đối."
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
    },
    {
      "id": "g7-b13-mcq-8",
      "type": "multiple_choice",
      "question": "Sự khác biệt cơ bản giữa Hiệu ứng chuyển trang (Transition) và Hiệu ứng đối tượng (Animation) là gì?",
      "options": [
        "Transition là hiệu ứng xuất hiện của cả trang chiếu; Animation là hiệu ứng chuyển động của từng đối tượng bên trong trang chiếu (chữ, hình ảnh)",
        "Transition chỉ dùng cho chữ, Animation chỉ dùng cho video",
        "Cả hai là một không có gì khác nhau",
        "Transition dùng để tính toán điểm số"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 7 KNTT (Trang 56): Transitions áp dụng cho chuyển tiếp giữa các slide; Animations áp dụng cho các phần tử trên slide.",
      "hint": "Transition cho trang chiếu, Animation cho đối tượng trong trang."
    },
    {
      "id": "g7-b13-mcq-9",
      "type": "multiple_choice",
      "question": "Để bắt đầu TRÌNH CHIẾU bài thuyết trình toàn màn hình từ trang đầu tiên, phím tắt nhanh nhất là gì?",
      "options": [
        "Phím F5",
        "Phím F1",
        "Phím Shift + F5",
        "Phím Esc"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Phím F5 chiếu từ slide đầu tiên; Shift + F5 chiếu từ slide hiện hành.",
      "hint": "Phím F5."
    },
    {
      "id": "g7-b13-mcq-10",
      "type": "multiple_choice",
      "question": "Để trình chiếu bài thuyết trình ngay từ TRANG CHIẾU HIỆN HÀNH (trang đang mở), phím tắt là gì?",
      "options": [
        "Shift + F5",
        "F5",
        "Ctrl + F5",
        "Alt + F5"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Shift + F5 giúp chiếu thử ngay trang hiện tại mà không cần chiếu lại từ đầu.",
      "hint": "Shift + F5."
    },
    {
      "id": "g7-b13-mcq-11",
      "type": "multiple_choice",
      "question": "Để THOÁT KHỎI chế độ trình chiếu toàn màn hình quay về màn hình soạn thảo, em nhấn phím nào?",
      "options": [
        "Phím Esc (Escape)",
        "Phím Enter",
        "Phím Space",
        "Phím Tab"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Phím Esc ở góc trên cùng bên trái bàn phím dùng để hủy hoặc thoát chế độ trình chiếu.",
      "hint": "Phím Esc."
    },
    {
      "id": "g7-b13-mcq-12",
      "type": "multiple_choice",
      "question": "Trong thẻ Animations, nhóm hiệu ứng màu xanh lá cây (Entrance) có ý nghĩa gì?",
      "options": [
        "Hiệu ứng XUẤT HIỆN của đối tượng trên trang chiếu",
        "Hiệu ứng BIẾN MẤT của đối tượng khỏi trang chiếu",
        "Hiệu ứng NHẤN MẠNH đối tượng tại chỗ",
        "Hiệu ứng DI CHUYỂN theo đường vẽ"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Các nhóm Animation: Entrance (Xanh - Xuất hiện), Emphasis (Vàng - Nhấn mạnh), Exit (Đỏ - Thoát/Biến mất), Motion Paths (Đường dẫn).",
      "hint": "Hiệu ứng xuất hiện (màu xanh lá)."
    },
    {
      "id": "g7-b13-mcq-13",
      "type": "multiple_choice",
      "question": "Khi thiết lập hiệu ứng động trong bài thuyết trình học tập, lời khuyên khoa học là gì?",
      "options": [
        "Sử dụng hiệu ứng vừa phải, nhẹ nhàng, nhất quán để hỗ trợ truyền tải nội dung, tránh lạm dụng quá nhiều hiệu ứng bay lượn gây mất tập trung",
        "Càng nhiều hiệu ứng quay cuồng, nổ bùm bụp càng tốt",
        "Cài đặt mỗi chữ cái một hiệu ứng bay khác nhau",
        "Tuyệt đối không bao giờ được chiếu bài lên màn hình"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Lạm dụng hiệu ứng làm loãng nội dung bài thuyết trình và khiến người nghe chóng mặt mỏi mắt.",
      "hint": "Vừa phải, nhẹ nhàng và nhất quán."
    },
    {
      "id": "g7-b13-mcq-14",
      "type": "multiple_choice",
      "question": "Trong khi đang trình chiếu, để chuyển sang trang chiếu kế tiếp, em có thể thao tác cách nào?",
      "options": [
        "Nhấp chuột trái, hoặc bấm phím mũi tên sang phải / mũi tên xuống, hoặc phím Spacebar",
        "Nhấn phím Esc",
        "Bấm phím F1",
        "Tắt màn hình"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Nhấp chuột, phím Space, Enter hoặc phím mũi tên tới đều chuyển tiếp trang.",
      "hint": "Nhấp chuột trái hoặc phím mũi tên tới."
    },
    {
      "id": "g7-b13-mcq-15",
      "type": "multiple_choice",
      "question": "Để áp dụng hiệu ứng chuyển trang (Transition) đã chọn cho TOÀN BỘ các trang chiếu trong bài thuyết trình, em bấm nút nào?",
      "options": [
        "Nút Apply To All trong thẻ Transitions",
        "Nút Effect Options",
        "Nút Preview",
        "Nút Sound"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Apply To All sao chép cài đặt transition cho tất cả các slide trong bài một cách đồng bộ.",
      "hint": "Nút Apply To All (Áp dụng cho tất cả)."
    },
    {
      "id": "g7-b13-mcq-16",
      "type": "multiple_choice",
      "question": "Bảng điều khiển Animation Pane (trong thẻ Animations) dùng để làm gì?",
      "options": [
        "Xem danh sách thứ tự, điều chỉnh thời gian và thiết lập cách kích hoạt của các hiệu ứng trên trang chiếu",
        "Đổi phông chữ của văn bản",
        "Vẽ hình tròn và tam giác",
        "Kiểm tra dung lượng pin máy tính"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Animation Pane liệt kê trình tự thực hiện các chuyển động trên slide.",
      "hint": "Quản lí thứ tự và thời gian các hiệu ứng."
    },
    {
      "id": "g7-b13-mcq-17",
      "type": "multiple_choice",
      "question": "Để bài báo cáo thuyết trình nhóm đạt hiệu quả thuyết phục cao, các thành viên cần chuẩn bị gì?",
      "options": [
        "Phân công nhiệm vụ rõ ràng, nắm vững nội dung bài giảng, tập dượt thuyết trình trước và chuẩn bị slide chỉn chu",
        "Đến giờ thuyết trình mới bắt đầu làm slide",
        "Một bạn làm hết tất cả các bạn khác chơi game",
        "Chỉ đọc lại sách giáo khoa từng chữ một"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Kĩ năng làm việc nhóm, chuẩn bị kĩ lưỡng và luyện tập là chìa khóa thành công.",
      "hint": "Phân công rõ ràng, luyện tập trước và slide chỉn chu."
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
    },
    {
      "id": "g7-b14-mcq-8",
      "type": "multiple_choice",
      "question": "Ý tưởng chính của thuật toán TÌM KIẾM TUẦN TỰ (Sequential Search / Linear Search) là gì?",
      "options": [
        "Lần lượt duyệt và so sánh giá trị cần tìm với từng phần tử của danh sách từ phần tử đầu tiên cho đến phần tử cuối cùng",
        "Chia đôi danh sách thành hai nửa bằng nhau",
        "Lấy ngẫu nhiên một phần tử bất kì",
        "Sắp xếp danh sách trước rồi mới tìm"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 60): Tìm kiếm tuần tự duyệt lần lượt từng phần tử từ đầu đến cuối.",
      "hint": "Duyệt lần lượt từ phần tử đầu tiên đến cuối danh sách."
    },
    {
      "id": "g7-b14-mcq-9",
      "type": "multiple_choice",
      "question": "Điều kiện dừng lại của thuật toán tìm kiếm tuần tự là gì?",
      "options": [
        "Khi tìm thấy phần tử có giá trị bằng giá trị cần tìm HOẶC khi đã duyệt hết toàn bộ danh sách mà không thấy",
        "Chỉ dừng khi danh sách có đúng 100 phần tử",
        "Dừng lại khi máy tính bị nóng",
        "Không bao giờ dừng lại"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Thuật toán kết thúc thành công khi tìm thấy, hoặc kết thúc thất bại khi duyệt hết danh sách.",
      "hint": "Tìm thấy hoặc đã duyệt hết danh sách."
    },
    {
      "id": "g7-b14-mcq-10",
      "type": "multiple_choice",
      "question": "Ưu điểm lớn nhất của thuật toán tìm kiếm tuần tự so với tìm kiếm nhị phân là gì?",
      "options": [
        "Áp dụng được trên MỌI danh sách, không đòi hỏi danh sách phải được sắp xếp thứ tự trước",
        "Tốc độ luôn nhanh hơn gấp 1000 lần",
        "Không tốn bộ nhớ máy tính",
        "Chỉ dùng được cho các chữ cái tiếng Anh"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Danh sách xáo trộn bất kì đều có thể áp dụng tìm kiếm tuần tự một cách đơn giản.",
      "hint": "Không cần sắp xếp danh sách trước."
    },
    {
      "id": "g7-b14-mcq-11",
      "type": "multiple_choice",
      "question": "Cho dãy số: 4, 8, 12, 16, 20. Cần tìm số 12 bằng thuật toán tìm kiếm tuần tự, thuật toán cần thực hiện mấy bước so sánh?",
      "options": [
        "3 bước so sánh (so với 4, 8, 12)",
        "1 bước so sánh",
        "5 bước so sánh",
        "2 bước so sánh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Lượt 1 so với 4 (sai), Lượt 2 so với 8 (sai), Lượt 3 so với 12 (đúng, dừng lại).",
      "hint": "Số 12 đứng ở vị trí thứ 3 trong dãy."
    },
    {
      "id": "g7-b14-mcq-12",
      "type": "multiple_choice",
      "question": "Trong trường hợp TỐT NHẤT (Best Case), thuật toán tìm kiếm tuần tự cần bao nhiêu lần so sánh để tìm thấy giá trị cần tìm?",
      "options": [
        "1 lần so sánh duy nhất (khi giá trị cần tìm nằm ngay ở vị trí đầu tiên của danh sách)",
        "N lần so sánh",
        "Không cần so sánh",
        "Vô hạn lần"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Nếu phần tử đầu tiên chính là giá trị cần tìm thì thuật toán dừng ngay sau 1 phép so sánh.",
      "hint": "Ngay phần tử đầu tiên (1 lần so sánh)."
    },
    {
      "id": "g7-b14-mcq-13",
      "type": "multiple_choice",
      "question": "Trong trường hợp XẤU NHẤT (Worst Case), số lần so sánh của thuật toán tìm kiếm tuần tự trên một danh sách có N phần tử là bao nhiêu?",
      "options": [
        "N lần so sánh",
        "1 lần so sánh",
        "N / 2 lần so sánh",
        "N * N lần so sánh"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Khi phần tử nằm ở vị trí cuối cùng hoặc không có trong danh sách, thuật toán phải duyệt qua toàn bộ N phần tử.",
      "hint": "Phải duyệt qua toàn bộ N phần tử."
    },
    {
      "id": "g7-b14-mcq-14",
      "type": "multiple_choice",
      "question": "Tình huống đời sống nào sau đây là một ví dụ tương tự thuật toán tìm kiếm tuần tự?",
      "options": [
        "Lật từng trang vở từ trang đầu đến trang cuối để tìm bài kiểm tra bị thất lạc",
        "Tra từ điển bằng cách mở ngay trang giữa",
        "Nhập số phòng khách sạn vào thang máy",
        "Bấm chuông cửa nhà bạn"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Lật kiểm tra lần lượt từng trang giấy từ đầu đến cuối chính là mô hình tuần tự.",
      "hint": "Lật kiểm tra lần lượt từng trang một."
    },
    {
      "id": "g7-b14-mcq-15",
      "type": "multiple_choice",
      "question": "Cho danh sách tên học sinh: ['An', 'Bình', 'Châu', 'Dũng', 'Hương']. Cần tìm bạn 'Tuấn', thuật toán tìm kiếm tuần tự sẽ thực hiện bao nhiêu lần so sánh và trả về kết quả gì?",
      "options": [
        "5 lần so sánh và thông báo: 'Không tìm thấy'",
        "1 lần so sánh và tìm thấy ngay",
        "2 lần so sánh rồi dừng",
        "Báo lỗi chương trình"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Duyệt qua cả 5 bạn, không bạn nào tên là 'Tuấn' -> duyệt hết danh sách kết luận không tìm thấy.",
      "hint": "Duyệt hết 5 bạn và không tìm thấy."
    },
    {
      "id": "g7-b14-mcq-16",
      "type": "multiple_choice",
      "question": "Nhược điểm của thuật toán tìm kiếm tuần tự khi danh sách có kích thước dữ liệu cực kì lớn (hàng triệu phần tử) là gì?",
      "options": [
        "Thời gian tìm kiếm rất lâu vì phải kiểm tra lần lượt từng phần tử một",
        "Kết quả tìm kiếm không chính xác",
        "Không thể lưu vào bộ nhớ",
        "Luôn làm hỏng phần cứng máy tính"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Với dữ liệu lớn, duyệt tuần tự có độ phức tạp O(N), rất tốn thời gian tính toán.",
      "hint": "Tốn nhiều thời gian khi số phần tử rất lớn."
    },
    {
      "id": "g7-b14-mcq-17",
      "type": "multiple_choice",
      "question": "Đoạn mô tả bằng lời: 'Bước 1: Gán i = 1; Bước 2: So sánh a[i] với x; Nếu a[i] == x thì trả về i và kết thúc; Bước 3: Tăng i lên 1; Nếu i <= N thì quay lại Bước 2...' mô tả thuật toán nào?",
      "options": [
        "Thuật toán tìm kiếm tuần tự",
        "Thuật toán tìm kiếm nhị phân",
        "Thuật toán sắp xếp nổi bọt",
        "Thuật toán tính lũy thừa"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Đây là các bước thuật toán kinh điển của tìm kiếm tuần tự duyệt chỉ số i từ 1 đến N.",
      "hint": "Duyệt chỉ số i tăng dần từng đơn vị."
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
    },
    {
      "id": "g7-b15-mcq-8",
      "type": "multiple_choice",
      "question": "ĐIỀU KIỆN TIÊN QUYẾT BẮT BUỘC để có thể áp dụng thuật toán TÌM KIẾM NHỊ PHÂN (Binary Search) là gì?",
      "options": [
        "Danh sách dữ liệu ĐÃ ĐƯỢC SẮP XẾP theo thứ tự (tăng dần hoặc giảm dần)",
        "Danh sách phải có số lượng phần tử là số lẻ",
        "Danh sách chỉ được chứa các số âm",
        "Không cần bất kì điều kiện nào"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 64): Tìm kiếm nhị phân chỉ hoạt động đúng khi mảng đã có thứ tự sắp xếp.",
      "hint": "Bắt buộc danh sách phải được sắp xếp trước."
    },
    {
      "id": "g7-b15-mcq-9",
      "type": "multiple_choice",
      "question": "Nguyên lí chia để trị của thuật toán tìm kiếm nhị phân hoạt động như thế nào ở mỗi bước?",
      "options": [
        "So sánh giá trị cần tìm với phần tử ở GIỮA danh sách, sau đó loại bỏ một nửa danh sách không chứa kết quả",
        "Kiểm tra phần tử đầu tiên và cuối cùng rồi dừng lại",
        "Chia danh sách thành 3 phần bằng nhau",
        "Đổi chỗ ngẫu nhiên các phần tử"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tại mỗi bước, so sánh với phần tử chính giữa (mid) để thu hẹp phạm vi tìm kiếm xuống một nửa.",
      "hint": "So sánh với phần tử ở giữa và loại bỏ một nửa danh sách."
    },
    {
      "id": "g7-b15-mcq-10",
      "type": "multiple_choice",
      "question": "Trong danh sách sắp xếp tăng dần, nếu giá trị cần tìm NHỎ HƠN phần tử ở giữa, thuật toán nhị phân sẽ tiếp tục tìm kiếm ở đâu?",
      "options": [
        "Ở nửa danh sách PHÍA TRƯỚC (nửa bên trái của phần tử giữa)",
        "Ở nửa danh sách PHÍA SAU (nửa bên phải)",
        "Dừng lại kết luận không tìm thấy",
        "Quay lại tìm từ đầu bằng tuần tự"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Vì mảng tăng dần, các số nhỏ hơn phần tử giữa chắc chắn chỉ có thể nằm ở nửa bên trái.",
      "hint": "Tìm kiếm ở nửa bên trái (nửa phía trước)."
    },
    {
      "id": "g7-b15-mcq-11",
      "type": "multiple_choice",
      "question": "Cho dãy số tăng dần: [2, 5, 8, 12, 16, 23, 38, 56, 72]. Vị trí giữa ban đầu có giá trị là bao nhiêu?",
      "options": [
        "16 (ở vị trí chính giữa của 9 phần tử)",
        "2",
        "72",
        "8"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Dãy có 9 phần tử, phần tử chính giữa là phần tử thứ 5: mid = (1+9)/2 = 5 -> giá trị là 16.",
      "hint": "Phần tử thứ 5 trong dãy 9 phần tử là số 16."
    },
    {
      "id": "g7-b15-mcq-12",
      "type": "multiple_choice",
      "question": "Với một cuốn từ điển dày 1000 trang đã xếp thứ tự theo bảng chữ cái A-Z, nếu dùng tìm kiếm nhị phân thì tối đa cần khoảng bao nhiêu lần mở trang để tìm được một từ bất kì?",
      "options": [
        "Khoảng 10 lần (vì 2^10 = 1024 > 1000)",
        "Đúng 1000 lần",
        "Khoảng 500 lần",
        "Chỉ 1 lần"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Độ phức tạp O(log2 N): với 1000 phần tử chỉ cần tối đa 10 bước chia đôi là tìm ra vị trí.",
      "hint": "Khoảng 10 lần chia đôi (2 mũ 10 = 1024)."
    },
    {
      "id": "g7-b15-mcq-13",
      "type": "multiple_choice",
      "question": "Trò chơi 'Đoán số từ 1 đến 100': bạn A nghĩ một số, bạn B đoán và bạn A chỉ trả lời 'Lớn hơn' hoặc 'Nhỏ hơn'. Chiến thuật đoán tối ưu của B áp dụng thuật toán nào?",
      "options": [
        "Thuật toán tìm kiếm nhị phân (luôn đoán số ở chính giữa khoảng còn lại: 50, 25, 75...)",
        "Thuật toán tìm kiếm tuần tự (đoán lần lượt 1, 2, 3...)",
        "Đoán hú họa ngẫu nhiên",
        "Đoán các số chẵn trước"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Chia đôi khoảng cách đoán là ứng dụng trực quan nhất của tìm kiếm nhị phân.",
      "hint": "Đoán số chính giữa khoảng (áp dụng tìm kiếm nhị phân)."
    },
    {
      "id": "g7-b15-mcq-14",
      "type": "multiple_choice",
      "question": "Nếu giá trị cần tìm LỚN HƠN phần tử ở giữa trong dãy số sắp xếp tăng dần, phạm vi tìm kiếm tiếp theo sẽ được thu hẹp về:",
      "options": [
        "Nửa bên phải (từ phần tử mid + 1 đến cuối)",
        "Nửa bên trái (từ đầu đến mid - 1)",
        "Toàn bộ danh sách",
        "Chỉ riêng phần tử đầu tiên"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Giá trị cần tìm lớn hơn mid thì chỉ có thể nằm trong nửa bên phải có giá trị lớn hơn.",
      "hint": "Nửa bên phải (phía sau phần tử giữa)."
    },
    {
      "id": "g7-b15-mcq-15",
      "type": "multiple_choice",
      "question": "Trong trường hợp tốt nhất, thuật toán tìm kiếm nhị phân tìm thấy phần tử cần tìm sau bao nhiêu bước so sánh?",
      "options": [
        "1 bước so sánh duy nhất (khi phần tử cần tìm nằm ngay tại vị trí chính giữa của dãy)",
        "N bước",
        "log2 N bước",
        "2 bước"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Nếu phần tử mid đầu tiên trùng với giá trị cần tìm, thuật toán kết thúc ngay sau 1 lần kiểm tra.",
      "hint": "1 lần so sánh ngay tại vị trí giữa."
    },
    {
      "id": "g7-b15-mcq-16",
      "type": "multiple_choice",
      "question": "Tại sao người ta không dùng tìm kiếm nhị phân cho mọi danh sách mà vẫn dùng tìm kiếm tuần tự?",
      "options": [
        "Vì việc sắp xếp một danh sách xáo trộn tốn thời gian và công sức; nếu chỉ tìm kiếm 1 lần trên danh sách chưa sắp xếp thì tuần tự nhanh và tiện hơn",
        "Vì tìm kiếm nhị phân cho kết quả sai lệch",
        "Vì máy tính không thể chia đôi số",
        "Vì thuật toán nhị phân bị cấm dùng"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Chi phí sắp xếp danh sách khá lớn, nếu dữ liệu chưa sắp xếp và ít tìm kiếm thì tuần tự phù hợp hơn.",
      "hint": "Chi phí sắp xếp danh sách tốn công sức."
    },
    {
      "id": "g7-b15-mcq-17",
      "type": "multiple_choice",
      "question": "Cho dãy: [3, 7, 11, 15, 19]. Cần tìm số 11. Các bước thực hiện của tìm kiếm nhị phân là gì?",
      "options": [
        "Xác định vị trí giữa là số 11 (mid = 3). So sánh thấy 11 == 11, tìm thấy ngay tại bước đầu tiên",
        "So sánh lần lượt với 3 rồi 7 rồi 11",
        "Loại bỏ số 19 trước",
        "Không tìm thấy số 11"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Số 11 nằm ngay chính giữa của dãy 5 phần tử, nên thuật toán tìm ra ngay lượt đầu.",
      "hint": "Số 11 là phần tử giữa nên tìm thấy ngay lượt 1."
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
    },
    {
      "id": "g7-b16-mcq-8",
      "type": "multiple_choice",
      "question": "Ý tưởng hoạt động cốt lõi của thuật toán SẮP XẾP NỔI BỌT (Bubble Sort) là gì?",
      "options": [
        "Liên tục so sánh hai phần tử LIỀN KỀ nhau và ĐỔI CHỖ nếu chúng sai thứ tự; sau mỗi lượt, phần tử lớn nhất sẽ 'nổi' dần về cuối danh sách",
        "Chia danh sách làm hai nửa rồi ghép lại",
        "Tìm phần tử nhỏ nhất đặt lên đầu",
        "Xóa các phần tử đứng sai vị trí"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 7 KNTT (Trang 68): Nổi bọt so sánh cặp liền kề và đổi chỗ, đẩy phần tử lớn nhất về đúng vị trí cuối.",
      "hint": "So sánh hai phần tử liền kề và đổi chỗ nếu sai thứ tự."
    },
    {
      "id": "g7-b16-mcq-9",
      "type": "multiple_choice",
      "question": "Tại sao thuật toán sắp xếp này lại được đặt tên là 'Sắp xếp nổi bọt'?",
      "options": [
        "Vì các phần tử nhẹ/nhỏ (hoặc nặng/lớn) di chuyển dần về vị trí đúng giống như những bọt khí nổi dần lên mặt nước",
        "Vì nó chỉ chạy được khi máy tính bị sủi bọt",
        "Vì tên của nhà khoa học sáng chế ra nó tên là Bubble",
        "Vì nó tạo ra bọt xà phòng trên màn hình"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Hình ảnh ẩn dụ các bọt khí nhẹ nổi lên mặt nước tượng trưng cho sự dịch chuyển vị trí qua từng lượt lặp.",
      "hint": "Hình ảnh ẩn dụ bọt khí nổi lên mặt nước."
    },
    {
      "id": "g7-b16-mcq-10",
      "type": "multiple_choice",
      "question": "Cho dãy số: [5, 2, 8, 1]. Khi so sánh cặp phần tử đầu tiên (5 và 2) để sắp xếp tăng dần, thuật toán nổi bọt sẽ làm gì?",
      "options": [
        "Đổi chỗ 5 và 2 vì 5 > 2, dãy trở thành [2, 5, 8, 1]",
        "Giữ nguyên vị trí vì 5 > 2",
        "Xóa số 5 đi",
        "Cộng 5 với 2 thành 7"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Sắp xếp tăng dần yêu cầu số nhỏ đứng trước, nên 5 > 2 bị sai thứ tự -> phải hoán đổi vị trí.",
      "hint": "Đổi chỗ 5 và 2 thành 2 và 5."
    },
    {
      "id": "g7-b16-mcq-11",
      "type": "multiple_choice",
      "question": "Sau LƯỢT DUYỆT ĐẦU TIÊN của thuật toán sắp xếp nổi bọt cho dãy n phần tử, điều gì CHẮC CHẮN sẽ xảy ra?",
      "options": [
        "Phần tử LỚN NHẤT trong toàn bộ dãy đã về đúng vị trí CUỐI CÙNG của dãy",
        "Cả dãy đã được sắp xếp hoàn chỉnh ngay lập tức",
        "Phần tử nhỏ nhất về vị trí cuối cùng",
        "Các số đều bằng nhau"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Mỗi lượt duyệt hoàn tất, phần tử lớn nhất của đoạn chưa sắp xếp sẽ được đưa về đúng vị trí cuối cùng.",
      "hint": "Phần tử lớn nhất về đúng vị trí cuối cùng."
    },
    {
      "id": "g7-b16-mcq-12",
      "type": "multiple_choice",
      "question": "Để sắp xếp một dãy gồm N phần tử bằng thuật toán nổi bọt, số lượt duyệt tối đa cần thực hiện là bao nhiêu?",
      "options": [
        "N - 1 lượt duyệt",
        "N lượt duyệt",
        "N + 1 lượt duyệt",
        "2 * N lượt duyệt"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Sau N - 1 lượt duyệt đã cố định được N - 1 phần tử về đúng vị trí, phần tử còn lại duy nhất đương nhiên đúng vị trí.",
      "hint": "N - 1 lượt duyệt."
    },
    {
      "id": "g7-b16-mcq-13",
      "type": "multiple_choice",
      "question": "Dấu hiệu nhận biết thuật toán nổi bọt có thể KẾT THÚC SỚM mà không cần chạy hết N - 1 lượt là gì?",
      "options": [
        "Trong suốt một lượt duyệt, KHÔNG CÓ BẤT KÌ PHÉP ĐỔI CHỖ NÀO diễn ra (dãy đã có thứ tự hoàn toàn)",
        "Khi hết giờ 1 phút",
        "Khi máy tính phát ra tiếng chuông",
        "Khi dãy có 1 số 0"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Nếu cả lượt không phát sinh hoán đổi thì mọi cặp liền kề đều đã đúng thứ tự -> dừng sớm tối ưu thuật toán.",
      "hint": "Không có phép hoán đổi nào diễn ra trong cả lượt."
    },
    {
      "id": "g7-b16-mcq-14",
      "type": "multiple_choice",
      "question": "Cho dãy số: [3, 1, 4, 2]. Sau khi hoàn thành lượt duyệt thứ nhất sắp xếp tăng dần, dãy số trở thành dãy nào sau đây?",
      "options": [
        "[1, 3, 2, 4]",
        "[1, 2, 3, 4]",
        "[3, 1, 2, 4]",
        "[4, 3, 2, 1]"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "So 3,1 -> đổi [1,3,4,2]; so 3,4 -> giữ [1,3,4,2]; so 4,2 -> đổi [1,3,2,4]. Số 4 đã về cuối.",
      "hint": "Dãy sau lượt 1 là [1, 3, 2, 4] với số 4 lớn nhất ở cuối."
    },
    {
      "id": "g7-b16-mcq-15",
      "type": "multiple_choice",
      "question": "Ứng dụng thực tế của thuật toán sắp xếp trong quản lí học sinh của trường là gì?",
      "options": [
        "Sắp xếp danh sách học sinh theo thứ tự bảng chữ cái A-Z hoặc xếp thứ hạng điểm tổng kết từ cao xuống thấp",
        "Tự động làm bài thi thay học sinh",
        "Tính tiền điện nước của trường",
        "Đổi tên học sinh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Sắp xếp danh sách tên A-Z và xếp hạng điểm là ứng dụng phổ biến nhất.",
      "hint": "Sắp xếp họ tên A-Z và xếp hạng kết quả học tập."
    },
    {
      "id": "g7-b16-mcq-16",
      "type": "multiple_choice",
      "question": "Khi muốn sắp xếp dãy số theo thứ tự GIẢM DẦN bằng thuật toán nổi bọt, điều kiện để hoán đổi hai phần tử liền kề a[j] và a[j+1] là gì?",
      "options": [
        "a[j] < a[j+1] (phần tử đứng trước nhỏ hơn phần tử đứng sau)",
        "a[j] > a[j+1]",
        "a[j] == a[j+1]",
        "Không bao giờ đổi chỗ"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Giảm dần yêu cầu số lớn đứng trước, do đó nếu đứng trước nhỏ hơn đứng sau thì phải đổi chỗ.",
      "hint": "Số đứng trước nhỏ hơn số đứng sau (a[j] < a[j+1])."
    },
    {
      "id": "g7-b16-mcq-17",
      "type": "multiple_choice",
      "question": "Thao tác HOÁN ĐỔI (Swap) giá trị giữa hai biến a và b trong lập trình thông thường cần sử dụng thêm thành phần nào?",
      "options": [
        "Một biến trung gian tạm thời (temp) để giữ giá trị",
        "Không cần biến nào cả",
        "Một mảng 100 phần tử",
        "Một hàm toán học sin cos"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Thuật toán hoán đổi kinh điển: temp = a; a = b; b = temp;",
      "hint": "Dùng biến trung gian tạm thời (temp)."
    }
  ]
};
