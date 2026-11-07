import { Question } from '../types/quiz';

export const QUESTIONS_GRADE_8: Record<string, Question[]> = {
  "tin8-bai-1": [
    {
      "id": "b1-de-1",
      "question": "Chiếc máy tính cơ khí đầu tiên Pascaline do nhà bác học Blaise Pascal sáng chế ra vào năm nào?",
      "options": [
        "Năm 1974",
        "Năm 1642",
        "Năm 1833",
        "Năm 1945"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 5): Năm 1642, nhà bác học Blaise Pascal khi chưa đầy 20 tuổi đã chế tạo ra chiếc máy tính cơ khí Pascaline để giúp cha tính thuế.",
      "hint": "Thế kỉ XVII, nhà bác học Pascal khi còn rất trẻ."
    },
    {
      "id": "b1-de-2",
      "question": "Ai được lịch sử công nhận là \"cha đẻ của công nghệ máy tính\"?",
      "options": [
        "John Von Neumann",
        "Gottfried Leibniz",
        "Charles Babbage",
        "Howard Aiken"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 6): Charles Babbage đã thiết kế máy tính đa năng có nguyên lý tính toán tự động tương tự máy tính ngày nay, nên ông được coi là cha đẻ của công nghệ máy tính.",
      "hint": "Nhà toán học người Anh khởi xướng dự án máy phân tích năm 1833."
    },
    {
      "id": "b1-de-3",
      "question": "Công cụ tính toán thủ công xuất hiện từ thời cổ đại và vẫn còn được sử dụng tới ngày nay ở một số nơi là gì?",
      "options": [
        "Thước kẻ logarit",
        "Máy tính Pascaline",
        "Đồng hồ cát",
        "Bàn tính hạt"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 5): Bàn tính là công cụ tính toán thủ công sơ khai xuất hiện hàng nghìn năm trước và vẫn còn được sử dụng cho việc rèn luyện tính nhẩm.",
      "hint": "Dùng các hạt gỗ trượt trên các thanh dọc."
    },
    {
      "id": "b1-de-4",
      "question": "Chiếc máy tính điện tử đa năng đầu tiên trên thế giới có tên gọi là gì?",
      "options": [
        "ENIAC",
        "UNIVAC",
        "Pascaline",
        "IBM PC"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 7): Máy tính ENIAC hoàn thành năm 1945 tại Mỹ được coi là chiếc máy tính điện tử đa năng đầu tiên.",
      "hint": "Bắt đầu bằng chữ cái E."
    },
    {
      "id": "b1-de-5",
      "question": "Nhà bác học nào đã cải tiến máy tính Pascaline để thực hiện được cả 4 phép tính: cộng, trừ, nhân, chia?",
      "options": [
        "Charles Babbage",
        "John Von Neumann",
        "Gottfried Leibniz",
        "Blaise Pascal"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 6): Nhà toán học và triết học Gottfried Leibniz đã cải tiến máy tính cơ khí của Pascal, giúp máy thực hiện được cả bốn phép tính số học cơ bản (cộng, trừ, nhân, chia).",
      "hint": "Nhà khoa học người Đức hoàn thiện khả năng nhân chia cho máy tính cơ khí."
    },
    {
      "id": "b1-tb-1",
      "question": "Máy tính điện tử thế hệ thứ nhất (1945 – 1955) sử dụng linh kiện điện tử chính nào?",
      "options": [
        "Đèn điện tử chân không",
        "Bóng bán dẫn (Transistor)",
        "Mạch tích hợp (IC)",
        "Bộ vi xử lý (VLSI)"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 7): Máy tính thế hệ thứ nhất sử dụng đèn điện tử chân không, bộ nhớ bằng trống từ, kích thước rất lớn (chiếm trọn một căn phòng).",
      "hint": "Thời kỳ ENIAC sử dụng hàng vạn bóng đèn chân không tỏa nhiệt lớn."
    },
    {
      "id": "b1-tb-2",
      "question": "Máy tính thế hệ thứ hai (1955 – 1965) có bước phát triển nhảy vọt nhờ thay thế đèn chân không bằng linh kiện gì?",
      "options": [
        "Mạch tích hợp IC",
        "Đĩa quang CD",
        "Mạch VLSI",
        "Bóng bán dẫn (Transistor)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 7): Máy tính thế hệ thứ hai sử dụng bóng bán dẫn, kích thước thu nhỏ đáng kể, tiêu thụ ít điện năng hơn và độ tin cậy cao hơn.",
      "hint": "Transistor bằng chất bán dẫn silic/germani."
    },
    {
      "id": "b1-tb-3",
      "question": "Nguyên lý kiến trúc máy tính lưu trữ chương trình trong bộ nhớ mang tên nhà bác học nào?",
      "options": [
        "Gottfried Leibniz",
        "John Von Neumann",
        "Blaise Pascal",
        "Charles Babbage"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 7): Kiến trúc Von Neumann đưa ra nguyên lý chương trình được lưu trữ sẵn trong bộ nhớ chính cùng với dữ liệu.",
      "hint": "Nhà toán học gốc Hungary - John Von Neumann."
    },
    {
      "id": "b1-tb-4",
      "question": "Máy tính thế hệ thứ ba (1965 – 1974) sử dụng linh kiện điện tử nào làm nòng cốt?",
      "options": [
        "Đèn chân không",
        "Ống phóng điện tử",
        "Thẻ nhớ flash",
        "Mạch tích hợp (IC)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 8): Máy tính thế hệ thứ ba sử dụng mạch tích hợp (Integrated Circuit - IC), tích hợp nhiều linh kiện trên một đế bán dẫn nhỏ.",
      "hint": "Mạch tích hợp viết tắt là IC."
    },
    {
      "id": "b1-tb-5",
      "question": "Sự xuất hiện của máy tính cá nhân (Personal Computer - PC) bắt đầu từ thế hệ máy tính thứ mấy?",
      "options": [
        "Thế hệ thứ nhất",
        "Thế hệ thứ tư",
        "Thế hệ thứ hai",
        "Thế hệ thứ ba"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 8): Thế hệ thứ tư (từ 1974 đến nay) sử dụng bộ vi xử lý đã tạo điều kiện ra đời các máy tính cá nhân nhỏ gọn, giá rẻ cho gia đình và trường học.",
      "hint": "Thế hệ dùng chip vi xử lý (Microprocessor)."
    },
    {
      "id": "b1-kho-1",
      "question": "Bộ vi xử lý (Microprocessor) ra đời ở thế hệ máy tính thứ tư nhờ thành tựu công nghệ nào?",
      "options": [
        "Mạch tích hợp cỡ rất lớn (VLSI) tích hợp hàng triệu linh kiện bán dẫn trên một vi mạch duy nhất",
        "Bộ nhớ trống từ quay với tốc độ cao",
        "Cải tiến độ bền của bóng đèn điện tử chân không",
        "Công nghệ thẻ đục lỗ bằng bìa cứng"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 8): Công nghệ vi mạch tích hợp mật độ rất cao (VLSI) cho phép tạo ra bộ vi xử lý trên một con chip duy nhất, khai sinh ra máy tính cá nhân (PC).",
      "hint": "VLSI là viết tắt của Very Large Scale Integration."
    },
    {
      "id": "b1-kho-2",
      "question": "Điểm khác biệt căn bản nhất giữa máy tính cơ khí Pascaline (1642) và máy phân tích của Charles Babbage (1833) là gì?",
      "options": [
        "Máy Babbage nhỏ gọn hơn Pascaline rất nhiều",
        "Pascaline có bàn phím và chuột, máy Babbage thì không",
        "Pascaline chỉ thực hiện được phép cộng trừ đơn giản bằng tay quay, còn máy của Babbage có khả năng tính toán tự động đa năng theo chương trình nạp từ thẻ đục lỗ",
        "Pascaline chạy bằng điện, máy Babbage chạy bằng hơi nước"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 5-6): Máy của Babbage là máy tính cơ khí đa năng có bộ điều khiển, bộ nhớ và khả năng đọc chương trình đục lỗ, trong khi Pascaline chỉ là máy cộng trừ cơ học đơn giản.",
      "hint": "Khả năng lập trình và tự động hoá theo chương trình."
    },
    {
      "id": "b1-kho-3",
      "question": "Máy tính thế hệ thứ năm (tương lai và hiện tại) hướng tới đặc trưng nổi bật nào sau đây?",
      "options": [
        "Trí tuệ nhân tạo (AI), tính toán lượng tử và xử lý ngôn ngữ tự nhiên thông minh",
        "Quay trở lại sử dụng bóng đèn chân không để chống bức xạ",
        "Chỉ sử dụng mã máy nhị phân 0 và 1 mà không cần phần mềm",
        "Tăng kích thước máy tính lên bằng một tòa nhà"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 8): Thế hệ thứ năm phát triển dựa trên trí tuệ nhân tạo (AI), học máy, siêu máy tính và máy tính lượng tử có khả năng nhận dạng tiếng nói, hình ảnh và tư duy mô phỏng con người.",
      "hint": "Gắn liền với trí tuệ nhân tạo (AI)."
    },
    {
      "id": "b1-kho-4",
      "question": "Phát biểu nào sau đây phản ánh ĐÚNG NHẤT về xu hướng phát triển phần cứng của máy tính điện tử qua 5 thế hệ?",
      "options": [
        "Tốc độ tính toán ngày càng chậm để bảo đảm an toàn dữ liệu",
        "Kích thước ngày càng to lớn và tiêu thụ nhiều điện năng hơn",
        "Chỉ phục vụ mục đích quân sự và nghiên cứu vũ trụ",
        "Kích thước ngày càng thu nhỏ, tốc độ tính toán ngày càng tăng, điện năng tiêu thụ giảm và giá thành trở nên bình dân hơn"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 8-9): Từ máy tính khổng lồ chiếm trọn căn phòng (ENIAC), máy tính đã thu nhỏ thành laptop, điện thoại thông minh, tốc độ tính toán gấp hàng triệu lần.",
      "hint": "Nhỏ hơn, nhanh hơn, rẻ hơn, thông minh hơn."
    }
  ],
  "tin8-bai-2": [
    {
      "id": "b2-de-1",
      "question": "Theo bài 2 SGK Tin học 8, thông tin số có đặc điểm chính nào sau đây?",
      "options": [
        "Không thể tìm kiếm hay xử lí bằng máy tính",
        "Dễ dàng được nhân bản và lan truyền nhưng khó bị xoá bỏ hoàn toàn",
        "Mọi thông tin trên mạng Internet đều hoàn toàn đáng tin cậy",
        "Chỉ có thể lưu trữ trên giấy và không thể chia sẻ từ xa"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 11): Thông tin số dễ dàng được nhân bản và lan truyền nhưng khó bị xoá bỏ hoàn toàn; có thể truy cập từ xa nếu người quản trị cho phép.",
      "hint": "Thông tin số một khi đã đăng tải lên Internet sẽ cực kỳ khó xoá sạch."
    },
    {
      "id": "b2-de-2",
      "question": "Khả năng truy cập thông tin số từ xa mang lại lợi ích chủ yếu nào cho học sinh?",
      "options": [
        "Máy tính tự động viết bài thi thay cho học sinh",
        "Làm tăng nguy cơ hỏng màn hình máy tính",
        "Có thể học tập, tra cứu tài liệu mọi lúc mọi nơi chỉ cần có kết nối mạng",
        "Không cần phải làm bài tập về nhà nữa"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 11): Truy cập từ xa giúp mọi người học tập trực tuyến, tìm kiếm bài giảng và trao đổi học liệu không phụ thuộc vào khoảng cách địa lý.",
      "hint": "Học tập mọi lúc, mọi nơi."
    },
    {
      "id": "b2-de-3",
      "question": "Nguồn thông tin nào dưới đây thường có độ tin cậy cao nhất khi tìm hiểu về dịch bệnh y tế?",
      "options": [
        "Bài viết của một tài khoản ẩn danh trên Facebook không có nguồn dẫn",
        "Cổng thông tin điện tử chính thức của Bộ Y tế (moh.gov.vn)",
        "Bình luận trên một diễn đàn game",
        "Tin nhắn chuyển tiếp giật gân trong nhóm chat"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 12): Cổng thông tin của cơ quan nhà nước, tổ chức chuyên môn chính thống có thẩm quyền và kiểm duyệt nghiêm ngặt.",
      "hint": "Cơ quan quản lý nhà nước có tên miền .gov.vn."
    },
    {
      "id": "b2-tb-1",
      "question": "Để đánh giá độ tin cậy của thông tin tìm kiếm trên mạng Internet, học sinh CẦN làm gì?",
      "options": [
        "Chia sẻ bài viết ngay cho bạn bè mà không cần kiểm chứng",
        "Chỉ đọc tiêu đề bài viết mà không cần đọc nội dung",
        "Kiểm tra nguồn gốc, thẩm quyền của cơ quan công bố, chứng cứ xác thực và tính thời sự của tin",
        "Tin ngay thông tin có nhiều lượt like và chia sẻ giật gân"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 12-13): Đánh giá thông tin đáng tin cậy dựa vào: thẩm quyền của nguồn cung cấp tin, phân biệt ý kiến với sự kiện, kiểm tra chứng cứ và tính thời sự.",
      "hint": "Kiểm tra nguồn chính thống, tác giả và chứng cứ thực tế."
    },
    {
      "id": "b2-tb-2",
      "question": "Tác hại nguy hiểm nhất của việc chia sẻ thông tin giả mạo (tin sai sự thật) trên mạng xã hội là gì?",
      "options": [
        "Máy tính tự động phát ra tiếng kêu",
        "Làm tăng tốc độ mạng Internet",
        "Làm bộ nhớ điện thoại bị đầy dung lượng",
        "Gây hoang mang dư luận xã hội, làm tổn hại uy tín người khác và người chia sẻ có thể bị xử phạt theo pháp luật"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 13): Tin giả gây hoang mang, hiểu lầm, thiệt hại kinh tế và người vi phạm bị xử phạt hành chính hoặc hình sự theo Luật An ninh mạng.",
      "hint": "Gây hoang mang xã hội và vi phạm pháp luật."
    },
    {
      "id": "b2-tb-3",
      "question": "Khi nhận được một thông tin gây sốc kèm lời kêu gọi \"Chia sẻ ngay lập tức\", hành động đúng đắn của em là gì?",
      "options": [
        "Bình tĩnh dừng lại, kiểm tra chéo thông tin trên các báo chính thống trước khi tin hoặc chia sẻ",
        "Đăng bài chỉ trích người khác ngay",
        "Sao chép nội dung gửi cho cả lớp đọc",
        "Bấm chia sẻ ngay lên tất cả các hội nhóm"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 13): Cần có tư duy phản biện, kiểm tra đối chiếu nguồn tin uy tín trước khi chia sẻ.",
      "hint": "Bình tĩnh kiểm tra nguồn tin chính thống."
    },
    {
      "id": "b2-kho-1",
      "question": "Phát biểu nào sau đây thể hiện một \"SỰ KIỆN\" (Fact) chứ không phải là \"Ý KIẾN\" (Opinion)?",
      "options": [
        "\"Học lập trình Scratch thú vị hơn nhiều so với học bảng tính Excel\"",
        "\"Tôi nghĩ đây là bộ phim hoạt hình hay nhất mọi thời đại\"",
        "\"Hội thi Tin học trẻ toàn quốc năm 2023 diễn ra tại Quảng Nam từ ngày 2 đến 4 tháng 8\"",
        "\"Chiếc máy tính bảng này có màu sắc rất đẹp và hiện đại\""
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 12): Sự kiện là thông tin khách quan, có thể kiểm chứng được tính đúng sai dựa trên số liệu, địa điểm, thời gian cụ thể.",
      "hint": "Sự kiện có số liệu, địa điểm cụ thể và kiểm chứng được."
    },
    {
      "id": "b2-kho-2",
      "question": "Tại sao việc \"khó bị xoá bỏ hoàn toàn\" của thông tin số vừa là ưu điểm vừa là rủi ro tiềm ẩn đối với mỗi cá nhân?",
      "options": [
        "Ưu điểm giúp lưu trữ di sản và tri thức lâu dài; rủi ro là các bài đăng thiếu suy nghĩ trong quá khứ có thể ảnh hưởng xấu đến tương lai và uy tín cá nhân",
        "Nó giúp mọi người không cần bảo mật mật khẩu",
        "Nó chỉ toàn ưu điểm chứ không có bất kì rủi ro nào",
        "Nó làm cho máy tính không bao giờ bị hỏng"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 11): Thông tin số một khi phát tán có thể được tải về và chia sẻ lại trên nhiều máy chủ khác nhau, tạo nên dấu chân số tồn tại mãi mãi.",
      "hint": "Dấu chân số tồn tại lâu dài trên không gian mạng."
    },
    {
      "id": "tin8-b2-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về đặc điểm thông tin trong môi trường số:",
      "options": [
        "a) Thông tin số có thể được nhân bản, lan truyền với tốc độ rất nhanh chóng trên Internet",
        "b) Mọi thông tin tìm thấy trên mạng xã hội đều đã qua kiểm duyệt nên luôn hoàn toàn chính xác",
        "c) Thông tin số dễ dàng bị chỉnh sửa, cắt ghép, thay đổi nội dung bằng các phần mềm chuyên dụng",
        "d) Dữ liệu số có thể lưu trữ với dung lượng khổng lồ trên các thiết bị nhỏ gọn hoặc điện toán đám mây"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 10): Thông tin số có tính dễ sao chép, lan truyền nhanh, khó thu hồi nhưng cũng dễ bị bóp méo, giả mạo. Cần kiểm chứng nguồn tin.",
      "hint": "Thông tin trên mạng không phải lúc nào cũng được kiểm chứng chính xác."
    },
    {
      "id": "tin8-b2-fb1",
      "type": "fill_blank",
      "question": "Thông tin số có thể được lưu trữ với dung lượng rất lớn, [1] dễ dàng và lan truyền trên không gian mạng với tốc độ [2].",
      "blankAnswers": [
        "nhân bản",
        "tức thời"
      ],
      "wordBank": [
        "nhân bản",
        "tức thời",
        "chậm chạp",
        "xóa bỏ",
        "thủ công",
        "hạn chế"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 10): Đặc điểm của thông tin số là dễ nhân bản và lan truyền gần như tức thời.",
      "hint": "Sao chép nhanh và truyền đi ngay lập tức."
    },
    {
      "id": "tin8-b2-m1",
      "type": "matching",
      "question": "Nối đặc điểm thông tin số ở cột bên trái với ý nghĩa/hậu quả tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Dễ sao chép, nhân bản"
        },
        {
          "id": "2",
          "text": "Lan truyền với tốc độ cao"
        },
        {
          "id": "3",
          "text": "Dễ bị chỉnh sửa, cắt ghép"
        },
        {
          "id": "4",
          "text": "Khó xóa bỏ hoàn toàn"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Một tin tức có thể tiếp cận hàng triệu người chỉ sau vài phút"
        },
        {
          "id": "b",
          "text": "Hình ảnh, video có thể bị làm giả (Deepfake), gây hiểu lầm"
        },
        {
          "id": "c",
          "text": "Dữ liệu đã đăng tải có thể bị người khác tải về lưu trữ lại"
        },
        {
          "id": "d",
          "text": "Tiết kiệm chi phí in ấn và phân phối tài liệu"
        }
      ],
      "correctMatches": {
        "1": "d",
        "2": "a",
        "3": "b",
        "4": "c"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 11): Các đặc tính hai mặt của thông tin số trong đời sống hiện đại.",
      "hint": "Gắn đặc tính công nghệ với tác động thực tế của nó."
    },
    {
      "id": "tin8-b2-mc1",
      "type": "multiple_choice",
      "question": "Để đánh giá độ tin cậy của một bài viết trên mạng Internet, tiêu chí nào sau đây là QUAN TRỌNG NHẤT?",
      "options": [
        "Bài viết có nhiều hình ảnh hoạt họa bắt mắt",
        "Bài viết có số lượng lượt thích (Like) và chia sẻ (Share) nhiều nhất",
        "Bài viết sử dụng tiêu đề giật gân, hấp dẫn người đọc",
        "Tác giả là chuyên gia có uy tín và bài viết được đăng trên website chính thống (.gov, .edu)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 12): Tác giả uy tín, tổ chức chịu trách nhiệm xuất bản rõ ràng (trang cơ quan chính phủ, giáo dục) là tiêu chí hàng đầu.",
      "hint": "Căn cứ vào nguồn gốc phát hành và tác giả bài viết."
    },
    {
      "id": "tin8-b2-mc2",
      "type": "multiple_choice",
      "question": "Khi thông tin cá nhân (như số căn cước công dân, địa chỉ nhà, số điện thoại) bị rò rỉ trên môi trường số, nguy cơ lớn nhất người dùng phải đối mặt là gì?",
      "options": [
        "Máy tính bị chạy chậm hơn bình thường",
        "Bị kẻ xấu lợi dụng để lừa đảo chiếm đoạt tài sản hoặc mạo danh thực hiện hành vi phi pháp",
        "Không thể xem video trực tuyến được nữa",
        "Màn hình điện thoại bị giảm độ sáng"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 11): Lộ thông tin cá nhân dẫn đến nguy cơ bị lừa đảo tài chính, tống tiền hoặc mạo danh phạm tội.",
      "hint": "Nguy cơ lừa đảo tài chính và mạo danh."
    },
    {
      "id": "tin8-b2-mc3",
      "type": "multiple_choice",
      "question": "Dấu hiệu nào sau đây cho thấy một trang web có thể là trang web giả mạo (Phishing)?",
      "options": [
        "Giao diện trang web có màu xanh dương quen thuộc",
        "Trang web tải nhanh dưới 2 giây",
        "Trang web có mục liên hệ và chính sách bảo mật chi tiết",
        "Tên miền có lỗi chính tả cố ý (ví dụ faceb00k.com), không có chứng chỉ bảo mật HTTPS (hình ổ khóa)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 12): Tên miền sai lệch kí tự, thiếu giao thức HTTPS an toàn là dấu hiệu cảnh báo trang web lừa đảo.",
      "hint": "Tên miền sai chính tả và thiếu biểu tượng ổ khóa HTTPS."
    }
  ],
  "tin8-bai-3": [
    {
      "id": "b3-de-1",
      "question": "Để tìm kiếm chính xác một cụm từ trên Google, em nên đặt cụm từ đó trong ký hiệu nào?",
      "options": [
        "Cặp dấu ngoặc vuông [...]",
        "Cặp dấu ngoặc kép \"...\"",
        "Cặp dấu ngoặc nhọn {...}",
        "Cặp dấu sao *...*"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 14): Sử dụng dấu ngoặc kép để tìm kiếm chính xác cụm từ khóa theo đúng thứ tự các từ.",
      "hint": "Dấu ngoặc kép \" \"."
    },
    {
      "id": "b3-de-2",
      "question": "Tên miền trang web của các cơ quan nhà nước Việt Nam thường có đuôi mở rộng là gì?",
      "options": [
        ".gov.vn",
        ".edu.vn",
        ".com.vn",
        ".net.vn"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 15): Đuôi .gov.vn viết tắt của Government Vietnam, dành cho các cơ quan chính phủ và tổ chức nhà nước.",
      "hint": "gov viết tắt của Government."
    },
    {
      "id": "b3-tb-1",
      "question": "Tên miền có đuôi \".edu.vn\" thường thuộc về loại tổ chức nào tại Việt Nam?",
      "options": [
        "Các tổ chức phi chính phủ quốc tế",
        "Các trang mạng xã hội giải trí",
        "Các cơ sở giáo dục và đào tạo (trường học, viện nghiên cứu, trường đại học)",
        "Các doanh nghiệp kinh doanh buôn bán"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 15): Đuôi .edu.vn dành riêng cho các tổ chức trong lĩnh vực giáo dục (Education).",
      "hint": "edu là viết tắt của Education (giáo dục)."
    },
    {
      "id": "b3-kho-1",
      "question": "Khi tổng hợp tài liệu từ Internet vào bài thuyết trình báo cáo, hành động nào thể hiện sự khai thác thông tin số ĐÚNG VÀ VĂN MINH?",
      "options": [
        "Đọc hiểu, tổng hợp lại bằng lời của mình và ghi rõ nguồn tài liệu tham khảo ở cuối bài",
        "Chỉ tìm hình ảnh có bản quyền để sao chép trái phép",
        "Sao chép nguyên văn toàn bộ bài viết trên mạng mà không cần ghi tác giả",
        "Xóa tên tác giả ban đầu và thay bằng tên của mình"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 16): Khi khai thác thông tin số cần tôn trọng bản quyền, trích dẫn rõ nguồn gốc và tác giả.",
      "hint": "Tôn trọng quyền tác giả và trích dẫn nguồn."
    },
    {
      "id": "tin8-b3-mc1",
      "type": "multiple_choice",
      "question": "Khi tìm kiếm thông tin trên Internet để làm bài thuyết trình, bước đầu tiên em cần làm là gì?",
      "options": [
        "Hỏi ý kiến bạn bè trên mạng xã hội về trò chơi mới",
        "Mở đồng thời 50 tab trình duyệt mà không cần lọc",
        "Sao chép toàn bộ trang web đầu tiên tìm thấy vào bài thuyết trình",
        "Xác định rõ mục tiêu tìm kiếm và các từ khóa (Keywords) trọng tâm"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 14): Bước đầu tiên trong quy trình khai thác thông tin là xác định rõ nhu cầu và lựa chọn từ khóa tìm kiếm phù hợp.",
      "hint": "Xác định rõ mình cần tìm cái gì và từ khóa đại diện."
    },
    {
      "id": "tin8-b3-mc2",
      "type": "multiple_choice",
      "question": "Để tìm kiếm chính xác một cụm từ trên Google mà không bị phân tách các từ, em đặt cụm từ đó trong kí hiệu nào?",
      "options": [
        "Đặt sau dấu gạch ngang -",
        "Đặt trong dấu ngoặc kép \"...\"",
        "Đặt trong dấu ngoặc nhọn {...}",
        "Đặt trong dấu ngoặc đơn (...)"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 15): Đặt cụm từ trong dấu ngoặc kép \" \" giúp công cụ tìm kiếm trả về chính xác thứ tự các từ trong cụm từ đó.",
      "hint": "Dấu ngoặc kép thường dùng để trích dẫn chính xác."
    },
    {
      "id": "tin8-b3-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các thao tác khai thác thông tin số:",
      "options": [
        "a) Cú pháp `filetype:pdf` giúp tìm kiếm các tài liệu có định dạng PDF",
        "b) Khi trích dẫn nội dung từ trang web khác, không cần ghi nguồn tác giả",
        "c) Thông tin từ các diễn đàn ẩn danh chưa được kiểm chứng có độ tin cậy thấp",
        "d) Em nên so sánh thông tin từ ít nhất 2 đến 3 nguồn độc lập trước khi kết luận"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 16): Khi trích dẫn thông tin bắt buộc phải ghi rõ nguồn tác giả để tôn trọng bản quyền.",
      "hint": "Tôn trọng quyền tác giả và kiểm chứng đa nguồn."
    },
    {
      "id": "tin8-b3-fb1",
      "type": "fill_blank",
      "question": "Để loại trừ một từ khóa khỏi kết quả tìm kiếm trên Google, ta đặt dấu [1] ngay trước từ khóa đó (không có khoảng trắng), còn để tìm dạng tệp ta dùng lệnh [2].",
      "blankAnswers": [
        "trừ (-)",
        "filetype:"
      ],
      "wordBank": [
        "trừ (-)",
        "filetype:",
        "cộng (+)",
        "site:",
        "ngoặc kép",
        "define:"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 15): Dấu trừ (-) trước từ khóa để loại trừ; filetype: dùng để giới hạn loại định dạng tệp tin.",
      "hint": "Dấu trừ để loại bỏ, filetype để chọn kiểu tệp."
    },
    {
      "id": "tin8-b3-m1",
      "type": "matching",
      "question": "Nối toán tử tìm kiếm ở cột bên trái với công dụng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "\"Cụm từ\""
        },
        {
          "id": "2",
          "text": "-từ_khóa"
        },
        {
          "id": "3",
          "text": "site:gov.vn"
        },
        {
          "id": "4",
          "text": "filetype:pptx"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Loại bỏ các trang web chứa từ khóa này"
        },
        {
          "id": "b",
          "text": "Chỉ tìm kiếm trên các trang web thuộc tên miền cơ quan nhà nước"
        },
        {
          "id": "c",
          "text": "Tìm kiếm chính xác nguyên văn cả cụm từ"
        },
        {
          "id": "d",
          "text": "Tìm các tệp tài liệu dạng bài trình chiếu PowerPoint"
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
      "explanation": "SGK Tin học 8 KNTT (Trang 15): Các toán tử tìm kiếm nâng cao của công cụ tìm kiếm Google.",
      "hint": "Ngoặc kép: chính xác; dấu trừ: loại trừ; site: miền web; filetype: loại tệp."
    },
    {
      "id": "tin8-b3-mc3",
      "type": "multiple_choice",
      "question": "Khi thu thập dữ liệu phục vụ nghiên cứu học tập, hành vi nào sau đây là ĐÚNG ĐẮN?",
      "options": [
        "Lưu lại đường dẫn liên kết (URL), tên tác giả và ngày truy cập để làm tài liệu tham khảo",
        "Tải ảnh có bản quyền về và xóa hình mờ (watermark) để coi như của mình",
        "Tự ý đăng tải tài liệu nội bộ mật của trường lên diễn đàn công cộng",
        "Tất cả các hành vi trên đều đúng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 17): Thu thập dữ liệu phải có đạo đức, lưu trữ nguồn gốc rõ ràng và không vi phạm bản quyền.",
      "hint": "Ghi nhận bản quyền và nguồn gốc tài liệu rõ ràng."
    },
    {
      "id": "tin8-b3-mc4",
      "type": "multiple_choice",
      "question": "Cú pháp tìm kiếm nào sau đây giúp tìm kiếm các bài viết về bảo vệ môi trường trên trang web của Bộ Tài nguyên Môi trường (monre.gov.vn)?",
      "options": [
        "monre.gov.vn - \"bảo vệ môi trường\"",
        "\"bảo vệ môi trường\" site:monre.gov.vn",
        "\"bảo vệ môi trường\" filetype:monre",
        "search:bảo vệ môi trường in:monre"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 15): Cú pháp `site:tên_miền` giới hạn phạm vi tìm kiếm bên trong một trang web xác định.",
      "hint": "Toán tử site: giúp giới hạn trang web cần tìm kiếm."
    },
    {
      "id": "tin8-b3-mc5",
      "type": "multiple_choice",
      "question": "Để đánh giá tính cập nhật (tính mới) của một thông tin khoa học trên mạng, em cần chú ý đến yếu tố nào?",
      "options": [
        "Số lượng người bình luận dưới bài viết",
        "Màu sắc tiêu đề của trang web",
        "Ngày tháng xuất bản hoặc thời gian cập nhật lần cuối của bài viết",
        "Độ dài của bài viết (càng dài càng mới)"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 16): Tính cập nhật được thể hiện qua ngày đăng tải hoặc sửa đổi gần nhất của tài liệu.",
      "hint": "Xem ngày giờ xuất bản của bài viết."
    },
    {
      "id": "tin8-b3-mc6",
      "type": "multiple_choice",
      "question": "Khi tìm kiếm thông tin về dịch bệnh, nguồn tin nào sau đây có độ tin cậy cao nhất?",
      "options": [
        "Tin nhắn rác gửi từ số điện thoại lạ",
        "Bình luận của một tài khoản ẩn danh trong nhóm chat",
        "Bài đăng truyền miệng không rõ tác giả trên diễn đàn mạng xã hội",
        "Cổng thông tin điện tử của Bộ Y tế (moh.gov.vn) hoặc Tổ chức Y tế Thế giới (WHO)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 16): Cơ quan y tế chính thống của chính phủ và các tổ chức quốc tế là nguồn tin chuẩn xác nhất.",
      "hint": "Nguồn tin từ cổng thông tin Bộ Y tế hoặc WHO."
    }
  ],
  "tin8-bai-4": [
    {
      "id": "b4-de-1",
      "question": "Hành vi nào dưới đây là vi phạm đạo đức và văn hoá khi sử dụng công nghệ số?",
      "options": [
        "Tự ý quay lén và đăng tải video của bạn bè lên mạng xã hội để chế giễu",
        "Gửi email chúc mừng sinh nhật thầy cô giáo",
        "Tìm kiếm tài liệu học tập trên trang web của trường",
        "Tham gia nhóm học tập trực tuyến của lớp để trao đổi bài vở"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 17-18): Quay lén, xúc phạm danh dự người khác trên mạng là hành vi vi phạm đạo đức và pháp luật.",
      "hint": "Xâm phạm quyền riêng tư và bôi nhọ người khác."
    },
    {
      "id": "b4-de-2",
      "question": "Luật nào tại Việt Nam quy định cụ thể các hành vi bị cấm trên không gian mạng?",
      "options": [
        "Luật Giao thông đường bộ",
        "Luật Xây dựng",
        "Luật An ninh mạng",
        "Luật Du lịch"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 18): Luật An ninh mạng năm 2018 quy định rõ các quy tắc bảo vệ an ninh thông tin và xử lý các hành vi sai phạm trên mạng.",
      "hint": "Luật An ninh mạng."
    },
    {
      "id": "b4-tb-1",
      "question": "Việc tải và sử dụng các phần mềm bẻ khoá (crack, phần mềm lậu) tiềm ẩn nguy cơ lớn nào?",
      "options": [
        "Dễ bị nhiễm virus, mã độc đánh cắp mật khẩu và dữ liệu cá nhân, đồng thời vi phạm bản quyền tác giả",
        "Tăng độ bền cho bàn phím máy tính",
        "Giúp máy tính chạy nhanh gấp đôi",
        "Làm giảm nhiệt độ của pin máy tính"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 18): Sử dụng phần mềm bẻ khoá vi phạm quyền tác giả và thường chứa trojan, virus theo dõi đánh cắp thông tin tài khoản.",
      "hint": "Vi phạm quyền tác giả và mang theo mã độc hại."
    },
    {
      "id": "b4-kho-1",
      "question": "Khi An mượn bức ảnh phong cảnh do bạn Khoa chụp để làm bài thuyết trình, cách ứng xử nào dưới đây là ĐÚNG ĐẠO ĐỨC VÀ VĂN HOÁ NHẤT?",
      "options": [
        "Tự ý chỉnh sửa và đăng lên mạng xã hội rồi nhận là ảnh do chính mình tự chụp",
        "Cắt bỏ chữ ký của Khoa để người khác không biết ai chụp",
        "Bán bức ảnh đó cho người khác lấy tiền mà không hỏi ý kiến Khoa",
        "Xin phép Khoa, và khi sử dụng phải ghi rõ chú thích \"Ảnh: tác giả Lê Khoa\" để tôn trọng tác giả"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 18): Cần xin phép tác giả và ghi rõ nguồn/chú thích tác giả để đảm bảo tính trung thực và văn hoá sử dụng sản phẩm số.",
      "hint": "Xin phép tác giả và ghi rõ nguồn ảnh."
    },
    {
      "id": "tin8-b4-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các hành vi văn hóa và đạo đức trên mạng:",
      "options": [
        "a) Tôn trọng quyền riêng tư của người khác bằng cách không tự ý xem tin nhắn hay đọc lén email",
        "b) Được phép dùng nick ảo để bôi nhọ, nói xấu bạn bè cùng lớp vì không ai biết danh tính thật",
        "c) Mọi sản phẩm trí tuệ có đăng kí bản quyền đều được pháp luật bảo vệ nghiêm ngặt",
        "d) Lan truyền tin giả (Fake News) gây hoang mang dư luận có thể bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 19): Dùng nick ảo bôi nhọ người khác hoặc lan truyền tin giả là hành vi vi phạm pháp luật và đạo đức mạng.",
      "hint": "Hành vi ẩn danh trên mạng vẫn phải chịu trách nhiệm pháp lí."
    },
    {
      "id": "tin8-b4-fb1",
      "type": "fill_blank",
      "question": "Luật [1] năm 2018 quy định các biện pháp bảo vệ không gian mạng quốc gia, xử lí nghiêm các hành vi vi phạm [2] và an toàn thông tin.",
      "blankAnswers": [
        "An ninh mạng",
        "bản quyền"
      ],
      "wordBank": [
        "An ninh mạng",
        "bản quyền",
        "Giao thông",
        "Thương mại",
        "Lao động",
        "Hình sự"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 20): Luật An ninh mạng năm 2018 của Việt Nam nghiêm cấm hành vi phá hoại thông tin, xâm phạm bản quyền và nhân phẩm người khác.",
      "hint": "Bộ luật ban hành năm 2018 chuyên về an ninh trên không gian số."
    },
    {
      "id": "tin8-b4-m1",
      "type": "matching",
      "question": "Nối khái niệm ở cột bên trái với hành vi tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Vi phạm bản quyền phần mềm"
        },
        {
          "id": "2",
          "text": "Bắt nạt trên mạng (Cyberbullying)"
        },
        {
          "id": "3",
          "text": "Xâm phạm quyền riêng tư"
        },
        {
          "id": "4",
          "text": "Hành vi văn hóa trên mạng"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Gửi tin nhắn đe dọa, nhục mạ người khác trên nhóm mạng xã hội"
        },
        {
          "id": "b",
          "text": "Tải phần mềm crack, bẻ khóa không trả phí để sử dụng"
        },
        {
          "id": "c",
          "text": "Tự ý chia sẻ ảnh cá nhân, số điện thoại của bạn bè khi chưa được cho phép"
        },
        {
          "id": "d",
          "text": "Bình luận lịch sự, tôn trọng quan điểm khác biệt của cộng đồng"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a",
        "3": "c",
        "4": "d"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 19, 21): Phân biệt các hành vi đúng chuẩn mực đạo đức và hành vi vi phạm pháp luật mạng.",
      "hint": "Nối hành vi với khái niệm pháp lí tương ứng."
    },
    {
      "id": "tin8-b4-mc1",
      "type": "multiple_choice",
      "question": "Khi nhận được một thông tin chưa được kiểm chứng từ một nhóm chat khẳng định ngày mai trường cho nghỉ học khẩn cấp, em nên xử sự thế nào?",
      "options": [
        "Lập tức chia sẻ lên trang cá nhân Facebook để bạn bè cùng biết",
        "Không chia sẻ tin đồn, báo lại cho giáo viên chủ nhiệm hoặc kiểm tra thông báo chính thức của nhà trường",
        "Gửi tiếp tin nhắn cho tất cả các nhóm khác trong danh bạ",
        "Tắt chuông báo thức và quyết định nghỉ học ở nhà luôn"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 21): Ứng xử có trách nhiệm là không phát tán tin thất thiệt, luôn kiểm chứng qua nguồn chính thức.",
      "hint": "Kiểm chứng nguồn tin chính thức từ giáo viên hoặc nhà trường."
    },
    {
      "id": "tin8-b4-mc2",
      "type": "multiple_choice",
      "question": "Giấy phép mã nguồn mở (như GPL, MIT, Creative Commons) cho phép người dùng điều gì?",
      "options": [
        "Có quyền nhận phần mềm đó là do mình sáng chế ra và cấm người khác dùng",
        "Tự do phát tán virus mà không bị trừng phạt",
        "Bán lại phần mềm đó với giá độc quyền cao ngất ngưởng",
        "Sử dụng, chia sẻ và có thể chỉnh sửa phần mềm theo các điều kiện minh bạch được tác giả quy định"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 20): Bản quyền Creative Commons và phần mềm nguồn mở cho phép cộng đồng tiếp cận, tái sử dụng hợp pháp theo quy ước của tác giả.",
      "hint": "Mã nguồn mở khuyến khích chia sẻ và phát triển cộng đồng."
    },
    {
      "id": "tin8-b4-mc3",
      "type": "multiple_choice",
      "question": "Hành vi nào sau đây vi phạm bản quyền phần mềm theo pháp luật Việt Nam?",
      "options": [
        "Mua bản quyền phần mềm Microsoft Office chính hãng",
        "Tải bản bẻ khóa (crack) của phần mềm thương mại có thu phí để dùng miễn phí",
        "Sử dụng hệ điều hành mã nguồn mở Linux Ubuntu",
        "Cài đặt phần mềm miễn phí (Freeware) từ trang web chính thức của nhà phát triển"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 19): Dùng phần mềm bẻ khóa (crack) là hành vi xâm phạm quyền tác giả và vi phạm pháp luật sở hữu trí tuệ.",
      "hint": "Bẻ khóa crack phần mềm trả phí là vi phạm bản quyền."
    },
    {
      "id": "tin8-b4-mc4",
      "type": "multiple_choice",
      "question": "Khi chứng kiến một người bạn cùng lớp bị lập nhóm bôi nhọ, đe dọa trên mạng (bắt nạt qua mạng), hành động đúng đắn nhất em nên làm là gì?",
      "options": [
        "Động viên bạn, chụp ảnh màn hình lưu lại bằng chứng và báo ngay cho thầy cô hoặc phụ huynh xử lí",
        "Giữ im lặng và cổ vũ hành vi bắt nạt",
        "Chia sẻ bài viết bôi nhọ đó cho cả trường cùng biết",
        "Hùa theo nhóm đó viết thêm bình luận chế giễu bạn"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 21): Giúp đỡ nạn nhân, lưu bằng chứng và báo cho người lớn (thầy cô, phụ huynh) là trách nhiệm đạo đức.",
      "hint": "Lưu bằng chứng và báo ngay cho thầy cô, phụ huynh."
    }
  ],
  "tin8-bai-5": [
    {
      "id": "b5-de-1",
      "question": "Trong phần mềm bảng tính Excel, địa chỉ nào sau đây là ĐỊA CHỈ TUYỆT ĐỐI?",
      "options": [
        "$A1",
        "A1",
        "$A$1",
        "A$1"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 23): Địa chỉ tuyệt đối có dấu $ trước tên cột và trước tên hàng (ví dụ: $A$1, $F$2).",
      "hint": "Địa chỉ có dấu đô la ($) ở cả trước chữ cái cột và chữ số hàng."
    },
    {
      "id": "b5-de-2",
      "question": "Phím tắt nào trên bàn phím dùng để chuyển đổi nhanh giữa địa chỉ tương đối và tuyệt đối khi nhập công thức trong Excel?",
      "options": [
        "Phím F4",
        "Phím F5",
        "Phím F2",
        "Phím F12"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 23-24): Sau khi nhập địa chỉ ô tương đối, nhấn phím F4 để chuyển thành địa chỉ tuyệt đối.",
      "hint": "Phím chức năng F4 ở hàng trên cùng của bàn phím."
    },
    {
      "id": "b5-de-3",
      "question": "Đặc điểm của địa chỉ tương đối (ví dụ A1) trong bảng tính Excel là gì?",
      "options": [
        "Chỉ có thể nhập một lần duy nhất trong toàn bộ bảng tính",
        "Luôn luôn giữ cố định không bao giờ thay đổi",
        "Chỉ chứa được số âm",
        "Tự động thay đổi tương ứng theo khoảng cách và hướng dịch chuyển khi sao chép công thức sang ô mới"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 23): Địa chỉ tương đối sẽ tự động thay đổi vị trí tương ứng khi công thức được sao chép đến ô khác.",
      "hint": "Tương đối nghĩa là thay đổi theo vị trí mới."
    },
    {
      "id": "b5-de-4",
      "question": "Ký hiệu nào được dùng để bắt đầu nhập một công thức tính toán trong phần mềm bảng tính Excel?",
      "options": [
        "Dấu thăng (#)",
        "Dấu bằng (=)",
        "Dấu hai chấm (:)",
        "Dấu cộng (+)"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 22): Mọi công thức trong Excel đều phải bắt đầu bằng dấu bằng (=).",
      "hint": "Dấu =."
    },
    {
      "id": "b5-de-5",
      "question": "Địa chỉ nào sau đây là địa chỉ tương đối?",
      "options": [
        "$B$5",
        "B$5",
        "B5",
        "$B5"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 23): B5 không có dấu $ trước tên cột và tên hàng nên là địa chỉ tương đối.",
      "hint": "Không có ký hiệu $ ở trước cột và hàng."
    },
    {
      "id": "b5-de-6",
      "question": "Ký hiệu phép toán nhân và phép toán chia trong công thức Excel lần lượt là gì?",
      "options": [
        "Dấu (^) và dấu (%)",
        "Dấu sao (*) và dấu gạch chéo (/)",
        "Dấu (x) và dấu (:)",
        "Dấu (.) và dấu (÷)"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "Trong Excel, phép nhân là dấu * và phép chia là dấu /.",
      "hint": "Ký tự * và /."
    },
    {
      "id": "b5-tb-1",
      "question": "Tại ô F4 có công thức `=E4*$F$2`. Khi sao chép công thức này xuống ô F5, công thức tại ô F5 sẽ là:",
      "options": [
        "=$E$5*$F$2",
        "=E4*$F$2",
        "=E5*$F$2",
        "=E5*$F$3"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 23-24): Ô E4 là địa chỉ tương đối nên khi sao chép xuống dưới một hàng sẽ thành E5; ô $F$2 là tuyệt đối nên giữ nguyên cố định. Công thức tại F5 là `=E5*$F$2`.",
      "hint": "Ô tương đối E4 đổi thành E5, ô tuyệt đối $F$2 giữ nguyên."
    },
    {
      "id": "b5-tb-2",
      "question": "Tại ô C2 có công thức `=A2+B2`. Khi sao chép công thức từ ô C2 sang ô D2 thì công thức tại D2 sẽ là gì?",
      "options": [
        "=B3+C3",
        "=A3+B3",
        "=A2+B2",
        "=B2+C2"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 23): Từ C2 sang D2 là dịch chuyển sang phải 1 cột (giữ nguyên hàng 2). Cột A thành cột B, cột B thành cột C. Công thức tại D2 là `=B2+C2`.",
      "hint": "Dịch sang phải 1 cột: A->B, B->C."
    },
    {
      "id": "b5-tb-3",
      "question": "Địa chỉ hỗn hợp `$A1` có đặc điểm gì khi sao chép công thức sang vị trí khác?",
      "options": [
        "Cột A được cố định (không đổi), còn hàng 1 sẽ tự động thay đổi theo vị trí mới",
        "Cả cột A và hàng 1 đều bị cố định",
        "Cả cột A và hàng 1 đều bị thay đổi",
        "Hàng 1 được cố định, cột A thay đổi"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Dấu $ đặt trước chữ A nên cột A bị cố định; không có dấu $ trước số 1 nên chỉ số hàng 1 thay đổi tương đối.",
      "hint": "Dấu $ đứng trước thành phần nào thì thành phần đó được cố định."
    },
    {
      "id": "b5-tb-4",
      "question": "Khi muốn sao chép một bảng dữ liệu dự án từ Excel sang bài trình chiếu PowerPoint, học sinh thực hiện các thao tác nào?",
      "options": [
        "Xóa bảng tính Excel đi",
        "Chụp ảnh màn hình rồi gửi email",
        "Chọn khối ô cần sao chép trong Excel -> Nhấn Ctrl+C -> Mở PowerPoint -> Nhấn Ctrl+V",
        "Chỉ có thể gõ lại toàn bộ bằng tay"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 25): Dữ liệu từ bảng tính có thể dễ dàng sao chép sang Word hoặc PowerPoint bằng lệnh Copy (Ctrl+C) và Paste (Ctrl+V).",
      "hint": "Sử dụng phím tắt Copy (Ctrl+C) và Paste (Ctrl+V)."
    },
    {
      "id": "b5-tb-5",
      "question": "Tại ô D3 có công thức `=C3*$B$1`. Khi sao chép công thức từ D3 sang ô D5, công thức tại ô D5 sẽ biến đổi thành:",
      "options": [
        "=C5*$B$1",
        "=D5*$B$1",
        "=C3*$B$1",
        "=C5*$B$3"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Từ D3 sang D5 là dịch xuống dưới 2 hàng (cùng cột D). C3 thành C5; $B$1 là tuyệt đối nên giữ nguyên. Kết quả là `=C5*$B$1`.",
      "hint": "C3 tăng 2 hàng thành C5, $B$1 giữ nguyên."
    },
    {
      "id": "b5-tb-6",
      "question": "Trong bảng tính quản lý chi tiêu gia đình, nếu có ô \"Tỉ lệ tiết kiệm\" nằm cố định tại ô B1, khi viết công thức tính cho các tháng bên dưới thì địa chỉ ô B1 nên để ở dạng nào?",
      "options": [
        "Gõ trực tiếp vào ô",
        "Địa chỉ tương đối (B1)",
        "Không được dùng địa chỉ ô",
        "Địa chỉ tuyệt đối ($B$1)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 24): Ô chứa giá trị dùng chung cố định cần được đặt ở dạng tuyệt đối ($B$1) để khi sao chép công thức xuống dưới, ô này không bị trượt đi.",
      "hint": "Cố định ô dùng chung bằng địa chỉ tuyệt đối."
    },
    {
      "id": "b5-kho-1",
      "question": "Trong Hình 5.6 (SGK Tin học 8 trang 26), tại ô C1 có công thức `=A1*B1`. Khi sao chép công thức từ C1 sang ô E2 thì công thức tại ô E2 sẽ tự động biến đổi thành:",
      "options": [
        "=B2*C2",
        "=C2*D2",
        "=C2*D1",
        "=C1*D2"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 26 - Luyện tập 1): Từ C1 sang E2 là dịch chuyển sang phải 2 cột và xuống dưới 1 hàng (+2 cột, +1 hàng). Cả A1 và B1 đều là tương đối: A1 thành C2, B1 thành D2. Công thức tại E2 là `=C2*D2`.",
      "hint": "Dịch sang phải 2 cột (A->C, B->D) và xuống dưới 1 hàng (1->2)."
    },
    {
      "id": "b5-kho-2",
      "question": "Tại ô B4 có công thức `=A$2+$C3`. Khi sao chép công thức này từ ô B4 sang ô D6 thì công thức tại ô D6 sẽ trở thành gì?",
      "options": [
        "=C$4+$E5",
        "=A$4+$D6",
        "=A$2+$C3",
        "=C$2+$C5"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Từ B4 sang D6 là dịch sang phải 2 cột (+2 cột) và xuống dưới 2 hàng (+2 hàng). Với A$2: cột A tăng 2 cột thành C, hàng $2 cố định -> C$2. Với $C3: cột $C cố định, hàng 3 tăng 2 hàng thành 5 -> $C5. Công thức là `=C$2+$C5`.",
      "hint": "Cột A->C, $2 giữ nguyên; $C giữ nguyên, hàng 3->5."
    },
    {
      "id": "b5-kho-3",
      "question": "Trong dự án \"Trường học xanh\", ô D5 chứa số lượng cây hoa, ô E2 chứa đơn giá cố định `15000`. Công thức chuẩn nhất cần nhập tại ô F5 để khi kéo sao chép xuống F6, F7, F8 vẫn tính đúng tiền cho từng loại cây là:",
      "options": [
        "=D5*15000 (gõ trực tiếp số)",
        "=D5*$E$2",
        "=$D$5*$E$2",
        "=D5*E2"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 24): D5 là số lượng của từng loại cây (cần tương đối để khi kéo xuống đổi thành D6, D7), còn E2 là đơn giá chung nên bắt buộc phải tuyệt đối ($E$2).",
      "hint": "D5 là tương đối, $E$2 là tuyệt đối."
    },
    {
      "id": "b5-kho-4",
      "question": "Sau khi sao chép công thức tính tiền `=A2*B2` xuống các hàng bên dưới, tại ô C8 xuất hiện lỗi `#VALUE!`. Nguyên nhân chính xác nhất là gì?",
      "options": [
        "Một trong hai ô A8 hoặc B8 chứa dữ liệu dạng văn bản (text) thay vì dạng số nên không nhân được",
        "Bảng tính bị mất kết nối Internet",
        "Dữ liệu trong ô A8 bằng 0",
        "Excel không cho phép dùng phép nhân"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "Lỗi #VALUE! xảy ra khi công thức thực hiện phép tính số học trên dữ liệu sai kiểu (ví dụ ô chứa chữ cái hoặc khoảng trắng không phải số).",
      "hint": "Sai kiểu dữ liệu (chứa chữ cái thay vì số)."
    },
    {
      "id": "b5-kho-5",
      "question": "Tại ô C1 có công thức `=SUM($A$1:A1)`. Khi sao chép công thức từ ô C1 xuống ô C4 thì công thức tại ô C4 sẽ là gì?",
      "options": [
        "=SUM($A$1:A1)",
        "=SUM($A$4:A4)",
        "=SUM($A$1:A4)",
        "=SUM(A1:A4)"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "Điểm đầu $A$1 là tuyệt đối nên giữ cố định, điểm cuối A1 là tương đối nên khi kéo xuống 3 hàng sẽ thành A4. Công thức tại C4 là `=SUM($A$1:A4)`. Đây là kỹ thuật tính tổng tích lũy rất phổ biến.",
      "hint": "Đầu cố định $A$1, đuôi A1 chạy thành A4."
    },
    {
      "id": "b5-kho-6",
      "question": "Lỗi `#DIV/0!` trong bảng tính Excel thường xuất hiện trong tình huống nào sau đây?",
      "options": [
        "Công thức thực hiện phép chia cho số 0 hoặc chia cho một ô trống",
        "Tên hàm bị viết sai chính tả",
        "Công thức có chứa dấu ngoặc đơn",
        "Độ rộng của cột quá hẹp không hiển thị hết số"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "DIV/0! là viết tắt của Divide by Zero (chia cho 0). Trong toán học và Excel không thể thực hiện phép chia cho số 0.",
      "hint": "Divide by zero nghĩa là chia cho 0."
    }
  ],
  "tin8-bai-6": [
    {
      "id": "b6-de-1",
      "question": "Trong Excel, để thực hiện sắp xếp hoặc lọc dữ liệu, người dùng chọn dải lệnh (thẻ) nào?",
      "options": [
        "Thẻ Home",
        "Thẻ Insert",
        "Thẻ View",
        "Thẻ Data"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 28, 30): Các lệnh sắp xếp (Sort) và lọc dữ liệu (Filter) nằm trong nhóm Sort & Filter của thẻ Data.",
      "hint": "Data nghĩa là dữ liệu."
    },
    {
      "id": "b6-de-2",
      "question": "Biểu tượng nút lệnh Lọc dữ liệu (Filter) trong Excel có hình gì?",
      "options": [
        "Hình kính lúp",
        "Hình chiếc phễu lọc",
        "Hình chiếc kéo",
        "Hình cục tẩy"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 30): Nút Filter có biểu tượng hình chiếc phễu lọc quen thuộc.",
      "hint": "Chiếc phễu lọc."
    },
    {
      "id": "b6-de-3",
      "question": "Sắp xếp dữ liệu trong bảng tính là gì?",
      "options": [
        "Đổi tên trang tính",
        "Đổi màu chữ các ô trong bảng tính",
        "Hoán đổi vị trí các hàng để giá trị dữ liệu trong một hoặc nhiều cột được xếp theo thứ tự tăng dần hoặc giảm dần",
        "Xóa bỏ những hàng dữ liệu có giá trị thấp"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 28): Sắp xếp dữ liệu là hoán đổi vị trí các hàng để dữ liệu được sắp theo thứ tự tăng dần hoặc giảm dần.",
      "hint": "Hoán đổi vị trí các hàng theo thứ tự tăng hoặc giảm."
    },
    {
      "id": "b6-de-4",
      "question": "Ký hiệu nào đại diện cho sắp xếp tăng dần đối với dữ liệu văn bản?",
      "options": [
        "Sort Newest to Oldest",
        "Sort A to Z",
        "Sort Z to A",
        "Filter"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "A to Z sắp xếp từ A đến Z (tăng dần theo bảng chữ cái).",
      "hint": "A đến Z là tăng dần."
    },
    {
      "id": "b6-tb-1",
      "question": "Khi muốn sắp xếp danh sách học sinh theo thứ tự: ưu tiên sắp xếp theo cột \"Tên\", nếu trùng Tên thì sắp xếp tiếp theo cột \"Họ đệm\", em thực hiện như thế nào trong hộp thoại Sort?",
      "options": [
        "Chọn cột Tên rồi đóng hộp thoại ngay",
        "Nháy nút Delete Level",
        "Chọn cột Tên ở tiêu chí thứ nhất, nháy nút \"Add Level\" để thêm tiêu chí thứ hai rồi chọn cột Họ đệm",
        "Chỉ có thể chọn sắp xếp theo một cột duy nhất"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 29 - Hình 6.5): Để sắp xếp theo nhiều tiêu chí, nháy nút \"Add Level\" để thêm các cấp độ sắp xếp tiếp theo (Then by).",
      "hint": "Add Level nghĩa là thêm mức độ/tiêu chí sắp xếp."
    },
    {
      "id": "b6-tb-2",
      "question": "Khi lọc dữ liệu trong bảng tính Excel, các hàng dữ liệu KHÔNG thoả mãn điều kiện lọc sẽ ra sao?",
      "options": [
        "Tự động chuyển sang một trang tính mới",
        "Bị xoá vĩnh viễn khỏi bảng tính và không thể khôi phục",
        "Tự động đổi màu chữ sang màu đỏ",
        "Tạm thời bị ẩn đi và sẽ hiển thị lại đầy đủ khi bỏ chế độ lọc (hoặc chọn Select All)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 30): Chức năng lọc chỉ hiển thị các dòng thoả mãn điều kiện, dữ liệu không đúng điều kiện lọc sẽ tạm thời bị ẩn đi chứ không bị xoá mất.",
      "hint": "Dữ liệu chỉ tạm thời bị ẩn, chọn Select All sẽ hiện lại đầy đủ."
    },
    {
      "id": "b6-tb-3",
      "question": "Để lọc ra những học sinh có Điểm trung bình từ 8.0 trở lên, em chọn mục nào trong menu Number Filters?",
      "options": [
        "Greater Than Or Equal To...",
        "Less Than...",
        "Between...",
        "Equals..."
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Greater Than Or Equal To nghĩa là Lớn hơn hoặc bằng (>= 8.0).",
      "hint": "Lớn hơn hoặc bằng."
    },
    {
      "id": "b6-kho-1",
      "question": "Để huỷ bỏ chế độ lọc và hiển thị lại toàn bộ dữ liệu ban đầu của bảng tính, em thao tác như thế nào?",
      "options": [
        "Nhấn phím Delete",
        "Xóa toàn bộ cột tiêu đề",
        "Vào thẻ Data, nháy chuột vào nút Filter đang sáng để tắt chế độ lọc, hoặc nháy nút Clear trong nhóm Sort & Filter",
        "Tắt máy tính và khởi động lại"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 31): Nháy lại vào nút Filter trên dải lệnh Data để tắt chế độ lọc, hoặc nháy nút Clear.",
      "hint": "Nháy lại nút Filter hoặc nút Clear."
    },
    {
      "id": "b6-kho-2",
      "question": "Khi sắp xếp bảng dữ liệu có dòng tiêu đề cột, nếu không đánh dấu vào ô \"My data has headers\" trong hộp thoại Sort thì điều gì sẽ xảy ra?",
      "options": [
        "Dòng tiêu đề cột sẽ bị coi như một dòng dữ liệu bình thường và bị xáo trộn vị trí trong bảng",
        "Không có sự cố nào xảy ra",
        "Excel sẽ tự động tạo một trang tính mới",
        "Bảng tính sẽ tự động bị khóa"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 28-29): Nếu không chọn \"My data has headers\", Excel sẽ xem dòng tiêu đề là dữ liệu và sắp xếp lẫn vào danh sách làm hỏng cấu trúc bảng.",
      "hint": "Dòng tiêu đề bị lẫn vào dữ liệu và bị sắp xếp sai vị trí."
    },
    {
      "id": "tin8-b6-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các thao tác Sắp xếp và Lọc dữ liệu trong bảng tính Excel:",
      "options": [
        "a) Lệnh sắp xếp làm thay đổi thứ tự các hàng trong bảng tính",
        "b) Lệnh lọc dữ liệu sẽ xóa vĩnh viễn các hàng không thỏa mãn điều kiện lọc",
        "c) Có thể sắp xếp dữ liệu theo thứ tự tăng dần (A-Z) hoặc giảm dần (Z-A)",
        "d) Ta có thể lọc dữ liệu theo nhiều tiêu chí cùng một lúc trên các cột khác nhau"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 28): Lọc dữ liệu chỉ tạm thời ẩn đi các hàng không thỏa mãn điều kiện chứ KHÔNG hề xóa chúng.",
      "hint": "Lọc chỉ ẩn hàng, không làm mất dữ liệu."
    },
    {
      "id": "tin8-b6-fb1",
      "type": "fill_blank",
      "question": "Để bật tính năng lọc dữ liệu trong bảng tính, ta vào dải lệnh Data và chọn biểu tượng hình [1] có chữ [2].",
      "blankAnswers": [
        "chiếc phễu",
        "Filter"
      ],
      "wordBank": [
        "chiếc phễu",
        "Filter",
        "kính lúp",
        "Sort",
        "ngôi sao",
        "Clear"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 28): Nút Filter trong thẻ Data có biểu tượng chiếc phễu lọc quen thuộc.",
      "hint": "Chiếc phễu dùng để lọc chất lỏng, trong phần mềm là Filter."
    },
    {
      "id": "tin8-b6-m1",
      "type": "matching",
      "question": "Nối nút lệnh sắp xếp / lọc ở cột bên trái với tác dụng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Sort A to Z"
        },
        {
          "id": "2",
          "text": "Sort Z to A"
        },
        {
          "id": "3",
          "text": "Filter (Phễu)"
        },
        {
          "id": "4",
          "text": "Clear Filter"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Bật/tắt các mũi tên lọc tại tiêu đề cột"
        },
        {
          "id": "b",
          "text": "Sắp xếp theo thứ tự giảm dần"
        },
        {
          "id": "c",
          "text": "Hủy bỏ bộ lọc để hiển thị lại toàn bộ dữ liệu"
        },
        {
          "id": "d",
          "text": "Sắp xếp theo thứ tự tăng dần"
        }
      ],
      "correctMatches": {
        "1": "d",
        "2": "b",
        "3": "a",
        "4": "c"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 26, 28): A-Z: tăng dần; Z-A: giảm dần; Filter: lọc; Clear: hiển thị lại tất cả.",
      "hint": "A to Z là tăng dần từ nhỏ đến lớn."
    }
  ],
  "tin8-bai-7": [
    {
      "id": "b7-de-1",
      "question": "Loại biểu đồ nào hữu ích nhất khi cần so sánh tỉ lệ phần trăm các phần so với tổng thể?",
      "options": [
        "Biểu đồ thanh ngang (Bar)",
        "Biểu đồ cột (Column)",
        "Biểu đồ đoạn thẳng (Line)",
        "Biểu đồ hình quạt tròn (Pie)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 33): Biểu đồ hình quạt tròn rất hữu ích trong trường hợp cần so sánh các phần với tổng thể (ví dụ tỉ lệ % số học sinh tham gia các CLB).",
      "hint": "Biểu đồ hình tròn chia thành các phần phần trăm."
    },
    {
      "id": "b7-de-2",
      "question": "Biểu đồ đoạn thẳng (Line chart) thường được sử dụng tốt nhất trong trường hợp nào?",
      "options": [
        "So sánh thành phần phần trăm của một chiếc bánh",
        "Quan sát xu hướng tăng giảm của dữ liệu theo thời gian hay quá trình liên tục",
        "Chỉ dùng để vẽ hình học trừu tượng",
        "Trình bày danh sách họ tên dài"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 33): Biểu đồ đoạn thẳng thường được sử dụng để quan sát xu hướng tăng giảm của dữ liệu theo thời gian (ví dụ tăng trưởng số lượng qua các năm).",
      "hint": "Đường gấp khúc nối các mốc thời gian phản ánh xu hướng."
    },
    {
      "id": "b7-de-3",
      "question": "Để chèn một biểu đồ vào bảng tính Excel, người dùng chọn dải lệnh (thẻ) nào?",
      "options": [
        "Thẻ View",
        "Thẻ Data",
        "Thẻ Formulas",
        "Thẻ Insert"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 34): Nhóm Charts nằm trong dải lệnh Insert.",
      "hint": "Insert nghĩa là chèn thêm."
    },
    {
      "id": "b7-tb-1",
      "question": "Biểu đồ cột (Column chart) thích hợp nhất cho mục đích nào dưới đây?",
      "options": [
        "Lưu trữ video clip",
        "So sánh số lượng dữ liệu giữa các đối tượng khác nhau (ví dụ so sánh điểm số hoặc số học sinh giữa các lớp)",
        "Tạo hiệu ứng âm thanh",
        "Chỉ hiển thị tỉ lệ phần trăm hình tròn"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 33): Biểu đồ cột rất dễ quan sát để so sánh đại lượng, quy mô giữa các hạng mục với nhau.",
      "hint": "So sánh độ cao các cột số liệu giữa các lớp."
    },
    {
      "id": "b7-tb-2",
      "question": "Thành phần \"Legend\" trong biểu đồ Excel có ý nghĩa là gì?",
      "options": [
        "Bảng chú giải các màu sắc/kí hiệu đại diện cho từng chuỗi dữ liệu",
        "Trục tung thẳng đứng",
        "Đường lưới nền",
        "Tiêu đề chính của biểu đồ"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Legend là bảng chú giải giúp người xem nhận biết mỗi màu sắc trên biểu đồ đại diện cho thông tin gì.",
      "hint": "Chú giải."
    },
    {
      "id": "b7-kho-1",
      "question": "Để hiển thị nhãn dữ liệu là tỉ lệ phần trăm (%) trên biểu đồ hình quạt tròn trong Excel, em chọn mục nào trong cửa sổ Format Data Labels?",
      "options": [
        "Value",
        "Series Name",
        "Percentage",
        "Category Name"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 34 - Hình 7.7): Đánh dấu chọn vào mục Percentage trong tùy chọn nhãn dữ liệu để hiển thị số phần trăm trên từng phần của biểu đồ tròn.",
      "hint": "Percentage nghĩa là tỉ lệ phần trăm."
    },
    {
      "id": "b7-kho-2",
      "question": "Sau khi đã tạo xong biểu đồ, nếu em sửa giá trị số liệu trong bảng tính thì biểu đồ sẽ như thế nào?",
      "options": [
        "Biểu đồ sẽ tự động cập nhật ngay lập tức theo số liệu mới đã chỉnh sửa",
        "Biểu đồ bị xóa mất",
        "Biểu đồ bị biến thành hình vuông màu đen",
        "Phải vẽ lại từ đầu biểu đồ mới"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 35): Biểu đồ trong Excel liên kết động với bảng dữ liệu nguồn, khi dữ liệu nguồn thay đổi thì hình dạng biểu đồ tự động cập nhật theo.",
      "hint": "Tự động cập nhật theo dữ liệu nguồn."
    },
    {
      "id": "tin8-b7-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về Biểu đồ (Chart) trong bảng tính:",
      "options": [
        "a) Biểu đồ giúp người đọc dễ so sánh và phát hiện xu hướng biến động của số liệu trực quan",
        "b) Biểu đồ hình tròn (Pie chart) thích hợp nhất để thể hiện tỉ lệ phần trăm các thành phần trong tổng thể",
        "c) Biểu đồ cột (Column chart) thích hợp nhất để so sánh dữ liệu giữa các đối tượng khác nhau",
        "d) Sau khi đã tạo biểu đồ thì không thể thay đổi loại biểu đồ hay màu sắc của nó được nữa"
      ],
      "trueFalseAnswers": [
        true,
        true,
        true,
        false
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 32): Người dùng hoàn toàn có thể nhấp chuột vào biểu đồ và chọn Change Chart Type để đổi kiểu biểu đồ bất kì lúc nào.",
      "hint": "Biểu đồ có thể chỉnh sửa và thay đổi kiểu linh hoạt."
    },
    {
      "id": "tin8-b7-fb1",
      "type": "fill_blank",
      "question": "Để vẽ biểu đồ trong Excel, sau khi chọn khối dữ liệu, ta nhấp vào dải lệnh [1] và lựa chọn dạng biểu đồ trong nhóm [2].",
      "blankAnswers": [
        "Insert",
        "Charts"
      ],
      "wordBank": [
        "Insert",
        "Charts",
        "Data",
        "Tables",
        "Format",
        "View"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 33): Chèn biểu đồ thực hiện tại Insert -> nhóm Charts.",
      "hint": "Insert là chèn, Charts là biểu đồ."
    },
    {
      "id": "tin8-b7-m1",
      "type": "matching",
      "question": "Nối loại biểu đồ ở cột bên trái với mục đích sử dụng phù hợp nhất ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Biểu đồ cột (Column / Bar)"
        },
        {
          "id": "2",
          "text": "Biểu đồ đường (Line)"
        },
        {
          "id": "3",
          "text": "Biểu đồ tròn (Pie)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Thể hiện tỉ lệ phần trăm của từng khoản chi tiêu trong ngân sách tháng"
        },
        {
          "id": "b",
          "text": "So sánh số lượng học sinh đạt điểm Giỏi giữa 4 lớp trong khối 8"
        },
        {
          "id": "c",
          "text": "Theo dõi xu hướng tăng giảm nhiệt độ trung bình qua 12 tháng trong năm"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "a"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 32): Biểu đồ cột: so sánh; đường: xu hướng thời gian; tròn: cơ cấu tỉ lệ %.",
      "hint": "Tròn là cơ cấu tỉ lệ; đường là xu hướng biến thiên; cột là so sánh."
    },
    {
      "id": "tin8-b7-mc1",
      "type": "multiple_choice",
      "question": "Thành phần nào trên biểu đồ giải thích cho người đọc biết mỗi màu sắc đại diện cho đại lượng nào?",
      "options": [
        "Tiêu đề biểu đồ (Chart Title)",
        "Đường lưới nền (Gridlines)",
        "Trục tọa độ ngang (Horizontal Axis)",
        "Chú giải (Legend)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 33): Legend (chú giải) hiển thị mẫu màu hoặc kí hiệu kèm tên chuỗi dữ liệu để người xem phân biệt.",
      "hint": "Legend là phần chú giải kí hiệu màu sắc."
    }
  ],
  "tin8-bai-8a": [
    {
      "id": "b8a-de-1",
      "question": "Phần mềm soạn thảo văn bản cung cấp hai kiểu danh sách dạng liệt kê cơ bản nào?",
      "options": [
        "Danh sách chữ hoa và danh sách chữ thường",
        "Danh sách dấu đầu dòng (Bullets) và danh sách có thứ tự (Numbering)",
        "Danh sách tự do và danh sách bắt buộc",
        "Danh sách cột và danh sách bảng"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 37): Phần mềm soạn thảo văn bản cung cấp hai kiểu danh sách dạng liệt kê là: danh sách dấu đầu dòng và danh sách có thứ tự.",
      "hint": "Bullets và Numbering trong Word."
    },
    {
      "id": "b8a-tb-1",
      "question": "Để bức ảnh làm nền chìm dưới văn bản (văn bản nổi lên trên bức ảnh) trong phần mềm Word, em chọn kiểu bố trí nào trong lệnh Wrap Text?",
      "options": [
        "In Line with Text",
        "In Front of Text",
        "Behind Text",
        "Square"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 40): Chọn lệnh Wrap Text rồi chọn Behind Text để ảnh nằm ở lớp dưới văn bản.",
      "hint": "Behind nghĩa là ở phía sau/dưới."
    },
    {
      "id": "b8a-kho-1",
      "question": "Trong danh sách có thứ tự, khi đặt con trỏ ở cuối dòng thứ 2 rồi nhấn Enter, điều gì sẽ xảy ra?",
      "options": [
        "Toàn bộ danh sách biến mất",
        "Tự động tạo ra mục số 3 mới, và các mục bên dưới tự động tăng thứ tự lên một đơn vị",
        "Chuyển thành danh sách dấu đầu dòng",
        "Chương trình báo lỗi"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 37-38): Thứ tự trong danh sách có thứ tự được tự động tạo và cập nhật mỗi khi người dùng thêm hoặc bớt dòng mới.",
      "hint": "Tính năng tự động tăng chỉ số thứ tự của Word."
    },
    {
      "id": "tin8-b8a-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về danh sách liệt kê và chèn hình ảnh:",
      "options": [
        "a) Danh sách dạng số thứ tự (Numbering) dùng khi thứ tự các mục có vai trò quan trọng (như các bước tiến hành)",
        "b) Danh sách dấu đầu dòng (Bullets) dùng khi các mục có vai trò ngang hàng nhau và thứ tự không quan trọng",
        "c) Ta không thể đổi biểu tượng dấu đầu dòng mặc định thành các hình vẽ khác",
        "d) Nhấn phím Enter hai lần liên tiếp sẽ kết thúc danh sách dạng liệt kê"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 37): Hoàn toàn có thể tùy biến đổi biểu tượng Bullets thành ngôi sao, dấu tích, mũi tên... qua Define New Bullet.",
      "hint": "Người dùng có thể tự chọn biểu tượng bullet tùy ý."
    },
    {
      "id": "tin8-b8a-fb1",
      "type": "fill_blank",
      "question": "Để đánh số thứ tự tự động cho các bước thực hiện, ta chọn công cụ [1], còn để tạo dấu hoa thị đầu dòng ta chọn công cụ [2].",
      "blankAnswers": [
        "Numbering",
        "Bullets"
      ],
      "wordBank": [
        "Numbering",
        "Bullets",
        "Multilevel List",
        "Paragraph",
        "Font",
        "Styles"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 37): Numbering đánh số thứ tự (1, 2, 3...), Bullets tạo danh sách dấu chấm/dấu gạch.",
      "hint": "Numbering là số, Bullets là kí hiệu dấu."
    },
    {
      "id": "tin8-b8a-m1",
      "type": "matching",
      "question": "Nối thao tác định dạng danh sách ở cột bên trái với kết quả tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Nhấn phím Tab ở đầu dòng mục liệt kê"
        },
        {
          "id": "2",
          "text": "Nhấn tổ hợp Shift + Tab ở đầu dòng"
        },
        {
          "id": "3",
          "text": "Nhấn Enter hai lần liên tiếp"
        },
        {
          "id": "4",
          "text": "Chọn lệnh Wrap Text -> In Front of Text"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Giảm cấp độ thụt lề lùi ra ngoài một bậc"
        },
        {
          "id": "b",
          "text": "Tăng thụt lề vào trong tạo danh sách cấp con (Sub-list)"
        },
        {
          "id": "c",
          "text": "Hình ảnh nằm đè lên trên che khuất chữ"
        },
        {
          "id": "d",
          "text": "Thoát khỏi chế độ danh sách liệt kê"
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
      "explanation": "SGK Tin học 8 KNTT (Trang 38): Phím Tab thụt lề cấp con, Shift+Tab lùi cấp cha, Enter 2 lần thoát list.",
      "hint": "Tab lùi vào, Shift+Tab lùi ra."
    },
    {
      "id": "tin8-b8a-mc3",
      "type": "multiple_choice",
      "question": "Khi chèn ảnh vào văn bản, công cụ Crop trong thẻ Picture Format có tác dụng gì?",
      "options": [
        "Tăng độ sáng chói cho ảnh",
        "Đổi màu ảnh thành đen trắng",
        "Cắt bỏ những phần rìa thừa không cần thiết của bức ảnh",
        "Xoay ảnh 90 độ sang phải"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 41): Lệnh Crop dùng để cắt tỉa bớt các viền ngoài không cần thiết của ảnh.",
      "hint": "Crop là thao tác cắt cúp khung hình."
    },
    {
      "id": "tin8-b8a-mc4",
      "type": "multiple_choice",
      "question": "Để tạo danh sách phân cấp nhiều tầng (Multilevel List) trong Word, em chọn nút lệnh nào trong nhóm Paragraph?",
      "options": [
        "Nút Sort A-Z",
        "Nút Bullets đơn",
        "Nút Numbering đơn",
        "Nút Multilevel List (biểu tượng danh sách nhiều cấp)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 38): Multilevel List dùng để tạo danh sách đa cấp (như 1. -> 1.1 -> 1.1.1).",
      "hint": "Multilevel List là danh sách đa cấp."
    },
    {
      "id": "tin8-b8a-mc5",
      "type": "multiple_choice",
      "question": "Khi chèn ảnh vào văn bản, tùy chọn Wrap Text nào cho phép ảnh nằm cùng một dòng với văn bản và ứng xử như một kí tự lớn?",
      "options": [
        "In Line with Text",
        "Behind Text",
        "In Front of Text",
        "Square"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 40): Chế độ In Line with Text xem bức ảnh như một kí tự trên dòng.",
      "hint": "In Line with Text là cùng dòng với văn bản."
    },
    {
      "id": "tin8-b8a-mc6",
      "type": "multiple_choice",
      "question": "Để điều chỉnh độ tương phản, độ sáng hoặc tạo hiệu ứng nghệ thuật nhanh cho hình ảnh trong Word, em chọn dải lệnh nào?",
      "options": [
        "View -> Window",
        "Review -> Proofing",
        "Picture Format -> Adjust",
        "Home -> Font"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 41): Nhóm Adjust trong tab Picture Format chứa Corrections, Color và Artistic Effects.",
      "hint": "Picture Format là dải lệnh định dạng ảnh."
    }
  ],
  "tin8-bai-9a": [
    {
      "id": "b9a-de-1",
      "question": "Header và Footer trong phần mềm soạn thảo văn bản lần lượt được hiểu là gì?",
      "options": [
        "Đầu trang và Chân trang",
        "Tiêu đề bài viết và Thân bài",
        "Cột trái và Cột phải",
        "Cỡ chữ và Kiểu chữ"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 42): Header là phần đầu trang, Footer là phần chân trang xuất hiện lặp lại ở mọi trang tài liệu.",
      "hint": "Đầu trang và chân trang."
    },
    {
      "id": "b9a-tb-1",
      "question": "Để chèn số trang tự động vào văn bản, người dùng sử dụng lệnh nào trong dải lệnh Insert?",
      "options": [
        "WordArt",
        "Equation",
        "Table",
        "Page Number"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 43): Lệnh Page Number dùng để chèn số trang tự động vào đầu hoặc cuối trang.",
      "hint": "Page Number."
    },
    {
      "id": "b9a-kho-1",
      "question": "Thông tin nào dưới đây thường ĐƯỢC ĐẶT ở phần Chân trang (Footer) của một cuốn sách giáo khoa?",
      "options": [
        "Một đoạn video clip",
        "Số thứ tự trang sách hoặc tên bài học/tên tác giả ngắn gọn",
        "Toàn bộ nội dung một bài học dài 5 trang",
        "Mã nguồn lập trình phức tạp"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 42): Footer thường dùng để đặt số trang, ngày tháng, tên sách ngắn gọn để người đọc tiện theo dõi.",
      "hint": "Số trang hoặc thông tin ngắn gọn nhận diện tài liệu."
    },
    {
      "id": "tin8-b9a-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về Đầu trang (Header) và Chân trang (Footer):",
      "options": [
        "a) Nội dung trong Header sẽ tự động hiển thị ở mép trên cùng của mọi trang văn bản",
        "b) Footer thường được sử dụng để hiển thị số trang, ngày tháng hoặc tên tác giả ở mép dưới",
        "c) Khi chỉnh sửa nội dung Header trên một trang thì các trang khác sẽ không thay đổi",
        "d) Có thể thiết lập trang bìa đầu tiên không hiển thị Header/Footer bằng tùy chọn Different First Page"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 43): Header và Footer mang tính lặp lại toàn văn bản; sửa trên một trang sẽ tự động đồng bộ trên toàn bộ tài liệu.",
      "hint": "Header/Footer mang tính đồng bộ xuyên suốt các trang."
    },
    {
      "id": "tin8-b9a-fb1",
      "type": "fill_blank",
      "question": "Để chèn đầu trang và chân trang trong Word, ta vào dải lệnh [1], nhóm [2] rồi chọn Header hoặc Footer.",
      "blankAnswers": [
        "Insert",
        "Header & Footer"
      ],
      "wordBank": [
        "Insert",
        "Header & Footer",
        "Layout",
        "Page Setup",
        "Home",
        "View"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 43): Chèn Header/Footer nằm trong tab Insert -> nhóm Header & Footer.",
      "hint": "Insert là dải lệnh chèn thêm đối tượng."
    },
    {
      "id": "tin8-b9a-m1",
      "type": "matching",
      "question": "Nối tùy chọn Header/Footer ở cột bên trái với chức năng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Different First Page"
        },
        {
          "id": "2",
          "text": "Different Odd & Even Pages"
        },
        {
          "id": "3",
          "text": "Page Number -> Bottom of Page"
        },
        {
          "id": "4",
          "text": "Close Header and Footer"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Đánh số trang tự động ở mép dưới trang văn bản"
        },
        {
          "id": "b",
          "text": "Tạo tiêu đề trang chẵn và trang lẻ khác nhau (như in sách)"
        },
        {
          "id": "c",
          "text": "Không áp dụng tiêu đề chung cho trang bìa đầu tiên"
        },
        {
          "id": "d",
          "text": "Đóng chế độ chỉnh sửa đầu/chân trang quay về soạn thảo"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "b",
        "3": "a",
        "4": "d"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 44): Các tùy biến nâng cao chuyên nghiệp trong thiết kế Header/Footer.",
      "hint": "Different First Page dành cho trang bìa."
    },
    {
      "id": "tin8-b9a-mc1",
      "type": "multiple_choice",
      "question": "Để thoát khỏi chế độ chỉnh sửa Header và Footer một cách nhanh nhất, em thao tác thế nào?",
      "options": [
        "Tắt phần mềm soạn thảo Word",
        "Nhấn tổ hợp phím Ctrl + Z",
        "Nhấn phím Backspace liên tục",
        "Nhấn đúp chuột vào vùng nội dung chính giữa trang giấy"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 43): Nhấp đúp chuột vào phần thân văn bản là cách nhanh nhất để đóng Header/Footer.",
      "hint": "Nhấp đúp chuột vào phần văn bản thông thường."
    },
    {
      "id": "tin8-b9a-mc2",
      "type": "multiple_choice",
      "question": "Để bắt đầu đánh số trang từ trang thứ hai và không đánh số ở trang bìa, thao tác chuẩn là gì?",
      "options": [
        "Không thể thực hiện được trong Word",
        "Tích chọn Different First Page trong thẻ ngữ cảnh Header & Footer",
        "Cắt trang bìa sang một tệp Word riêng biệt",
        "Xóa số trang thủ công ở trang 1 bằng phím Backspace"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 44): Different First Page giúp trang đầu tiên có phần đầu/chân trang độc lập với các trang còn lại.",
      "hint": "Chọn tùy chọn Different First Page."
    },
    {
      "id": "tin8-b9a-mc3",
      "type": "multiple_choice",
      "question": "Trong hộp thoại Page Number Format, mục \"Start at\" dùng để làm gì?",
      "options": [
        "Quy định số trang bắt đầu được đánh số (ví dụ bắt đầu từ số 1 hoặc số tùy ý)",
        "Quy định màu sắc của số trang",
        "Quy định khoảng cách lề của số trang",
        "Quy định cỡ chữ của số trang"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 45): Start at thiết lập giá trị số đầu tiên để đánh số trang.",
      "hint": "Start at là bắt đầu tại số bao nhiêu."
    },
    {
      "id": "tin8-b9a-mc4",
      "type": "multiple_choice",
      "question": "Để chèn ngày giờ hiện tại tự động cập nhật vào Footer của văn bản, em chọn nút lệnh nào trong thẻ Header & Footer?",
      "options": [
        "Quick Parts",
        "Go to Header",
        "Date & Time",
        "Document Info"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 44): Nút Date & Time cho phép chèn ngày giờ theo nhiều định dạng chuẩn.",
      "hint": "Date & Time là ngày và giờ."
    }
  ],
  "tin8-bai-10a": [
    {
      "id": "b10a-de-1",
      "question": "Mục đích chính của việc phối màu sắc và cỡ chữ hợp lý trên trang chiếu PowerPoint là gì?",
      "options": [
        "Giúp bài thuyết trình rõ ràng, dễ đọc, làm nổi bật nội dung chính và thu hút người nghe",
        "Giảm dung lượng file xuống mức 0 byte",
        "Làm trang chiếu có càng nhiều màu sắc lòe loẹt càng tốt",
        "Làm cho máy chiếu chiếu sáng hơn"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 46): Định dạng nâng cao giúp tăng tính thẩm mỹ và hiệu quả truyền đạt thông tin đến người xem.",
      "hint": "Rõ ràng, dễ đọc và nổi bật trọng tâm."
    },
    {
      "id": "b10a-tb-1",
      "question": "Quy tắc tương phản màu sắc nào dưới đây giúp chữ trên trang chiếu dễ đọc nhất?",
      "options": [
        "Chữ màu xám mờ trên nền xám nhạt",
        "Chữ màu xanh thẫm trên nền màu đen kịt",
        "Chữ màu vàng nhạt trên nền màu trắng tinh",
        "Chữ màu tối trên nền màu sáng, hoặc chữ màu sáng trên nền màu tối"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 47): Độ tương phản cao (chữ đậm trên nền sáng hoặc chữ sáng trên nền tối) giúp người ngồi xa vẫn đọc rõ nội dung.",
      "hint": "Độ tương phản cao giữa màu chữ và màu nền."
    },
    {
      "id": "b10a-kho-1",
      "question": "Để chèn ngày tháng hiện tại và số thứ tự trang chiếu cho tất cả các slide trong PowerPoint, em sử dụng lệnh nào?",
      "options": [
        "Vào thẻ Home -> Cut",
        "Vào thẻ Insert -> Nhóm Text -> Chọn Header & Footer",
        "Vào thẻ View -> Nháy Zoom",
        "Vào thẻ Review -> Spelling"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 48): Hộp thoại Header & Footer trong thẻ Insert cho phép bật Date and time và Slide number cho toàn bộ bài thuyết trình.",
      "hint": "Header & Footer trong thẻ Insert."
    },
    {
      "id": "tin8-b10a-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về định dạng trang chiếu trong PowerPoint:",
      "options": [
        "a) Màu nền trang chiếu nên tương phản rõ nét với màu chữ để khán giả dễ đọc từ xa",
        "b) Nên đưa toàn bộ nội dung sách giáo khoa lên trang chiếu dưới dạng các đoạn văn dài",
        "c) Ta có thể áp dụng một chủ đề (Theme) định dạng sẵn cho toàn bộ bài trình chiếu chỉ bằng một nhấp chuột",
        "d) Các trang chiếu trong bài nên có sự thống nhất về phông chữ và phong cách thiết kế"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 48): Trang chiếu chỉ nên chứa từ khóa, ý chính, sơ đồ; không chép nguyên văn cả đoạn văn dài.",
      "hint": "Trang chiếu nhấn mạnh từ khóa cô đọng, tránh dày đặc chữ."
    },
    {
      "id": "tin8-b10a-fb1",
      "type": "fill_blank",
      "question": "Để áp dụng các mẫu thiết kế phối sẵn màu sắc, phông chữ và hình nền cho toàn bộ bài chiếu, ta vào dải lệnh [1] và chọn một mẫu trong nhóm [2].",
      "blankAnswers": [
        "Design",
        "Themes"
      ],
      "wordBank": [
        "Design",
        "Themes",
        "Transitions",
        "Animations",
        "Insert",
        "Variants"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 48): Dải lệnh Design chứa bộ sưu tập Themes thiết kế sẵn cho bài thuyết trình.",
      "hint": "Design là thiết kế, Themes là chủ đề giao diện."
    },
    {
      "id": "tin8-b10a-m1",
      "type": "matching",
      "question": "Nối yếu tố định dạng trang chiếu ở cột bên trái với yêu cầu thẩm mĩ ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Màu nền trang chiếu"
        },
        {
          "id": "2",
          "text": "Phông chữ (Font)"
        },
        {
          "id": "3",
          "text": "Nội dung chữ"
        },
        {
          "id": "4",
          "text": "Hình ảnh minh họa"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Rõ nét, liên quan trực tiếp đến chủ đề bài học"
        },
        {
          "id": "b",
          "text": "Ngắn gọn, súc tích, làm nổi bật các từ khóa chính"
        },
        {
          "id": "c",
          "text": "Dễ đọc, không quá cầu kì uốn lượn, cỡ chữ đủ lớn từ 24pt trở lên"
        },
        {
          "id": "d",
          "text": "Đơn giản, nhã nhặn, tương phản tốt với màu văn bản"
        }
      ],
      "correctMatches": {
        "1": "d",
        "2": "c",
        "3": "b",
        "4": "a"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 49): Các nguyên tắc thiết kế bài trình chiếu trực quan và chuyên nghiệp.",
      "hint": "Phông chữ dễ đọc, màu tương phản, chữ cô đọng."
    },
    {
      "id": "tin8-b10a-mc1",
      "type": "multiple_choice",
      "question": "Để đánh số trang chiếu tự động và thêm tên người thuyết trình vào chân trang của mỗi slide, ta chọn lệnh nào?",
      "options": [
        "Slide Show -> Set Up Slide Show",
        "Home -> Replace",
        "Insert -> Header & Footer",
        "Animations -> Add Animation"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 50): Trong PowerPoint, lệnh Header & Footer nằm ở dải lệnh Insert cho phép đánh số slide và điền chân trang.",
      "hint": "Tương tự như phần mềm Word, dùng Header & Footer."
    },
    {
      "id": "tin8-b10a-mc2",
      "type": "multiple_choice",
      "question": "Để thay đổi màu nền của một trang chiếu đơn lẻ mà không làm ảnh hưởng đến các trang khác, ta dùng lệnh nào?",
      "options": [
        "Vào Design -> đổi toàn bộ Themes",
        "Nhấp chuột phải vào trang chiếu -> chọn Format Background",
        "Vào View -> chọn Slide Master",
        "Nhấn phím Delete trên trang chiếu"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 49): Lệnh Format Background cho phép chỉnh sửa màu nền, dải màu gradient cho từng trang slide cụ thể.",
      "hint": "Format Background định dạng nền trang chiếu."
    },
    {
      "id": "tin8-b10a-mc3",
      "type": "multiple_choice",
      "question": "Trong một bài thuyết trình chuẩn mực, một trang chiếu nội dung nên tuân theo quy tắc nào sau đây?",
      "options": [
        "Gõ kín chữ từ trên xuống dưới không chừa khoảng trống",
        "Chữ màu vàng trên nền trắng sáng",
        "Quy tắc 6x6 hoặc 7x7 (không quá 6-7 dòng, mỗi dòng không quá 6-7 từ)",
        "Dùng 10 phông chữ khác nhau trên cùng một trang"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 49): Nguyên tắc thiết kế slide: tối giản, súc tích (quy tắc 6 dòng x 6 từ/dòng), dễ nắm bắt ý chính.",
      "hint": "Quy tắc giới hạn số dòng và số chữ mỗi dòng."
    },
    {
      "id": "tin8-b10a-mc4",
      "type": "multiple_choice",
      "question": "Để hình ảnh trên trang chiếu hòa hợp với nền mà không bị khung trắng bao quanh, ta nên ưu tiên chèn ảnh định dạng nào?",
      "options": [
        "Định dạng TXT văn bản thuần",
        "Định dạng GIF nhấp nháy liên tục",
        "Định dạng BMP dung lượng nặng",
        "Định dạng PNG (hỗ trợ nền trong suốt)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 50): Ảnh PNG trong suốt không bị viền trắng thừa, rất thẩm mĩ khi đặt lên nền slide có màu.",
      "hint": "Ảnh định dạng PNG có nền trong suốt."
    }
  ],
  "tin8-bai-11a": [
    {
      "id": "b11a-de-1",
      "question": "Bản mẫu (Template) trong phần mềm trình chiếu PowerPoint là gì?",
      "options": [
        "Một tệp trình chiếu được thiết kế sẵn bố cục, phối màu, phông chữ và hình nền đồng bộ",
        "Một tệp âm thanh bài hát",
        "Một phần mềm diệt virus",
        "Một bức tranh tĩnh không sửa được"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 50): Bản mẫu (Template) là thiết kế hoàn chỉnh định sẵn phong cách giúp tạo bài trình chiếu nhanh chóng và đồng bộ.",
      "hint": "Bản thiết kế sẵn mẫu bố cục, màu sắc."
    },
    {
      "id": "b11a-tb-1",
      "question": "Tệp bản mẫu trong PowerPoint thường có phần mở rộng mặc định là gì?",
      "options": [
        ".mp3",
        ".xlsx",
        ".potx",
        ".docx"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 50): Tệp bản mẫu của PowerPoint có đuôi là .potx (PowerPoint Template).",
      "hint": "Đuôi .potx."
    },
    {
      "id": "b11a-kho-1",
      "question": "Chức năng Hyperlink (liên kết) trong PowerPoint cho phép người thuyết trình làm gì?",
      "options": [
        "Nhấp chuột vào một đối tượng để lập tức chuyển đến một trang slide khác, một trang web hoặc một tệp tài liệu bên ngoài",
        "Tăng độ phân giải của máy tính",
        "Đổi màu của màn hình máy tính",
        "Tự động sao lưu máy tính lên mây"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 52): Hyperlink tạo liên kết điều hướng nhanh đến trang chiếu khác, tệp tài liệu hay trang web Internet.",
      "hint": "Tạo liên kết chuyển tiếp nhanh."
    },
    {
      "id": "tin8-b11a-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về việc sử dụng Bản mẫu (Template) trong bài trình chiếu:",
      "options": [
        "a) Bản mẫu (Template) là tệp bài trình chiếu đã được thiết kế sẵn bố cục, hình ảnh, màu sắc cho một chủ đề cụ thể",
        "b) Khi dùng bản mẫu, người dùng bắt buộc phải giữ nguyên toàn bộ nội dung chữ gốc mà không được sửa",
        "c) Sử dụng bản mẫu giúp tiết kiệm đáng kể thời gian thiết kế và đảm bảo tính chuyên nghiệp của bài thuyết trình",
        "d) Ta có thể tải thêm nhiều bản mẫu trực tuyến miễn phí do Microsoft cung cấp"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 53): Người dùng chỉ cần thay thế các văn bản giữ chỗ (Placeholders) bằng nội dung của chính mình.",
      "hint": "Bản mẫu cho phép thay thế nội dung thoải mái."
    },
    {
      "id": "tin8-b11a-fb1",
      "type": "fill_blank",
      "question": "Bản mẫu (Template) cung cấp sẵn các khung văn bản [1], người sử dụng chỉ cần nhấp chuột vào đó để nhập nội dung [2] của mình.",
      "blankAnswers": [
        "giữ chỗ",
        "thay thế"
      ],
      "wordBank": [
        "giữ chỗ",
        "thay thế",
        "bảo mật",
        "khóa cố định",
        "tự động dịch",
        "mã hóa"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 53): Các khung văn bản giữ chỗ (Click to add text) được thiết kế để người dùng thay thế nội dung nhanh chóng.",
      "hint": "Khung văn bản chờ sẵn để thay thế nội dung."
    },
    {
      "id": "tin8-b11a-m1",
      "type": "matching",
      "question": "Nối thao tác sử dụng bản mẫu ở cột bên trái với tác dụng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Vào File -> New -> Chọn Template"
        },
        {
          "id": "2",
          "text": "Slide Master"
        },
        {
          "id": "3",
          "text": "Reset Slide"
        },
        {
          "id": "4",
          "text": "Save As Template (.potx)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Lưu tệp bài trình chiếu dưới dạng bản mẫu để dùng lại sau này"
        },
        {
          "id": "b",
          "text": "Tạo bài trình chiếu mới dựa trên mẫu thiết kế có sẵn"
        },
        {
          "id": "c",
          "text": "Khôi phục lại định dạng ban đầu của bản mẫu nếu vô tình làm biến dạng"
        },
        {
          "id": "d",
          "text": "Công cụ chỉnh sửa bố cục trang mẫu chủ đạo của toàn bộ bài"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "d",
        "3": "c",
        "4": "a"
      },
      "options": [],
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 54): Các thao tác chuyên sâu khi quản lí bản mẫu Template trong PowerPoint.",
      "hint": "Slide Master là trang mẫu chủ đạo chi phối toàn bộ các slide."
    },
    {
      "id": "tin8-b11a-mc1",
      "type": "multiple_choice",
      "question": "Đuôi tệp tin mở rộng đặc trưng của bản mẫu bài trình chiếu PowerPoint là gì?",
      "options": [
        ".xlsx",
        ".mp4",
        ".docx",
        ".potx"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT: Tệp mẫu bài chiếu lưu dưới dạng .potx (PowerPoint Template), khác với tệp trình chiếu thông thường là .pptx.",
      "hint": "Chữ T trong .potx đại diện cho Template."
    },
    {
      "id": "tin8-b11a-mc2",
      "type": "multiple_choice",
      "question": "Khi sử dụng bản mẫu (Template) trong PowerPoint, để thay đổi kiểu bố cục của một trang chiếu sang dạng \"Hai cột nội dung\", em chọn lệnh nào?",
      "options": [
        "Transitions -> Split",
        "Home -> Layout -> Two Content",
        "Insert -> Table",
        "Design -> Themes"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 53): Nút Layout trong tab Home cho phép thay đổi kiểu bố trí khung nội dung trên trang.",
      "hint": "Nút Layout trong thẻ Home."
    },
    {
      "id": "tin8-b11a-mc3",
      "type": "multiple_choice",
      "question": "Lợi ích chính của công cụ Slide Master trong bài trình chiếu là gì?",
      "options": [
        "Tự động soạn toàn bộ nội dung thuyết trình không cần người viết",
        "Ngăn chặn mọi người xem bài trình chiếu",
        "Chuyển bài trình chiếu thành video ca nhạc",
        "Chỉnh sửa logo, phông chữ một lần ở slide chủ, toàn bộ các slide con sẽ tự động cập nhật theo"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 54): Slide Master quản lí định dạng gốc, sửa ở trang chủ thì tất cả các trang chiếu khác sẽ thay đổi đồng bộ.",
      "hint": "Slide Master quản lí định dạng tập trung cho toàn bộ bài."
    },
    {
      "id": "tin8-b11a-mc4",
      "type": "multiple_choice",
      "question": "Khi tìm kiếm bản mẫu trực tuyến trên thanh tìm kiếm của PowerPoint, từ khóa nào sau đây phù hợp cho chủ đề giáo dục?",
      "options": [
        "Finance / Banking",
        "Education / School",
        "Shopping / Sale",
        "Game / Entertainment"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 53): Từ khóa Education hoặc School giúp lọc ra các mẫu trang chiếu chuyên biệt cho giáo dục.",
      "hint": "Education là giáo dục trong tiếng Anh."
    }
  ],
  "tin8-bai-8b": [
    {
      "id": "b8b-de-1",
      "question": "Điểm ảnh (Pixel) là gì trong đồ hoạ máy tính?",
      "options": [
        "Đơn vị nhỏ nhất cấu thành nên một bức ảnh số dạng raster",
        "Tên một phần mềm nghe nhạc",
        "Dung lượng của ổ đĩa cứng",
        "Độ dài của bàn phím"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 54): Pixel (Picture Element) là điểm ảnh, thành phần nhỏ nhất cấu tạo nên bức ảnh số.",
      "hint": "Điểm ảnh là phần tử nhỏ nhất cấu tạo ảnh."
    },
    {
      "id": "b8b-tb-1",
      "question": "Khái niệm Lớp ảnh (Layer) trong phần mềm GIMP có ý nghĩa như thế nào?",
      "options": [
        "Là dung lượng của bức ảnh tính bằng Megabyte",
        "Là độ sáng của bức ảnh",
        "Giống như các tờ giấy trong suốt xếp chồng lên nhau, cho phép chỉnh sửa từng phần tử mà không ảnh hưởng đến các phần khác",
        "Là phần mềm chống vi rút"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 56): Các lớp ảnh (Layers) xếp chồng lên nhau giúp chỉnh sửa độc lập từng đối tượng mà không làm hỏng bức ảnh gốc.",
      "hint": "Các lớp trong suốt xếp chồng lên nhau."
    },
    {
      "id": "b8b-kho-1",
      "question": "Tệp dự án gốc lưu giữ đầy đủ các lớp ảnh và hiệu ứng của phần mềm GIMP có đuôi mở rộng là gì?",
      "options": [
        ".xcf",
        ".gif",
        ".jpg",
        ".png"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 56): Định dạng .xcf là định dạng tệp chuẩn của GIMP lưu toàn bộ cấu trúc các layer.",
      "hint": "Đuôi .xcf."
    },
    {
      "id": "tin8-b8b-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về phần mềm chỉnh sửa ảnh (GIMP / Photoshop):",
      "options": [
        "a) GIMP là phần mềm nguồn mở, miễn phí chuyên dùng để xử lí và chỉnh sửa ảnh kĩ thuật số",
        "b) Ảnh kĩ thuật số dạng raster được tạo nên từ một mạng lưới các điểm ảnh (Pixel)",
        "c) Khi phóng to một ảnh raster quá nhiều lần, ảnh vẫn luôn sắc nét và không bao giờ bị vỡ hạt",
        "d) Mỗi điểm ảnh (Pixel) mang một màu sắc xác định được biểu diễn bằng các kênh màu số"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 57): Ảnh raster tạo bởi các pixel, khi phóng to quá giới hạn sẽ thấy rõ các ô vuông điểm ảnh bị vỡ hạt (răng cưa).",
      "hint": "Ảnh raster phóng to quá mức sẽ bị vỡ hạt."
    },
    {
      "id": "tin8-b8b-fb1",
      "type": "fill_blank",
      "question": "Thành phần cơ bản cấu tạo nên bức ảnh kĩ thuật số gọi là [1], còn phần mềm chỉnh sửa ảnh nguồn mở phổ biến trong chương trình là [2].",
      "blankAnswers": [
        "điểm ảnh (Pixel)",
        "GIMP"
      ],
      "wordBank": [
        "điểm ảnh (Pixel)",
        "GIMP",
        "đoạn văn",
        "Excel",
        "vector",
        "Scratch"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 57): Pixel là đơn vị nhỏ nhất tạo nên bức ảnh số; GIMP là phần mềm chỉnh sửa ảnh được giới thiệu trong SGK.",
      "hint": "Pixel là điểm ảnh, GIMP là phần mềm xử lí ảnh nguồn mở."
    },
    {
      "id": "tin8-b8b-m1",
      "type": "matching",
      "question": "Nối công cụ trên thanh công cụ GIMP ở cột bên trái với chức năng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Move Tool (biểu tượng 4 mũi tên)"
        },
        {
          "id": "2",
          "text": "Zoom Tool (kính lúp)"
        },
        {
          "id": "3",
          "text": "Rectangle Select Tool"
        },
        {
          "id": "4",
          "text": "Eraser Tool (cục tẩy)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Phóng to hoặc thu nhỏ vùng nhìn của bức ảnh"
        },
        {
          "id": "b",
          "text": "Di chuyển các đối tượng hoặc lớp ảnh trên khung vẽ"
        },
        {
          "id": "c",
          "text": "Xóa bỏ các điểm ảnh trên lớp hiện tại"
        },
        {
          "id": "d",
          "text": "Tạo vùng chọn hình chữ nhật trên ảnh"
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
      "explanation": "SGK Tin học 8 KNTT (Trang 58): Các công cụ cơ bản trong hộp công cụ (Toolbox) của phần mềm GIMP.",
      "hint": "Move: di chuyển; Zoom: phóng to; Select: chọn vùng; Eraser: tẩy."
    },
    {
      "id": "tin8-b8b-mc1",
      "type": "multiple_choice",
      "question": "Định dạng tệp tin lưu trữ dự án làm việc riêng của phần mềm GIMP (giữ nguyên các lớp layer) có phần mở rộng là gì?",
      "options": [
        ".docx",
        ".psd",
        ".mp3",
        ".xcf"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 59): Đuôi tệp dự án của GIMP là .xcf, cho phép lưu đầy đủ các lớp ảnh và kênh chỉnh sửa.",
      "hint": "Đuôi tệp tin ba chữ cái bắt đầu bằng chữ X."
    },
    {
      "id": "tin8-b8b-mc2",
      "type": "multiple_choice",
      "question": "Một bức ảnh có kích thước 1920 x 1080 pixel có nghĩa là gì?",
      "options": [
        "Ảnh được chụp bằng máy quay tốc độ 1080 hình/giây",
        "Ảnh có chiều rộng 1920 điểm ảnh và chiều cao 1080 điểm ảnh",
        "Ảnh có dung lượng đúng bằng 1920 kilobyte",
        "Ảnh có 1920 màu sắc khác nhau"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 57): Kích thước pixel biểu thị số lượng điểm ảnh theo chiều rộng x chiều cao (Width x Height).",
      "hint": "Chiều rộng x chiều cao tính theo đơn vị pixel."
    },
    {
      "id": "tin8-b8b-mc3",
      "type": "multiple_choice",
      "question": "Hệ màu RGB dùng trong màn hình kĩ thuật số được tạo thành từ 3 màu cơ bản nào?",
      "options": [
        "Right, Green, Back",
        "Red (Đỏ), Gray (Xám), Black (Đen)",
        "Red (Đỏ), Green (Lục), Blue (Lam)",
        "Rose (Hồng), Gold (Vàng), Brown (Nâu)"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 58): Hệ màu RGB là viết tắt của Red (Đỏ), Green (Lục), Blue (Lam).",
      "hint": "Đỏ, Lục, Lam."
    },
    {
      "id": "tin8-b8b-mc4",
      "type": "multiple_choice",
      "question": "Công cụ Bucket Fill Tool (biểu tượng thùng sơn đổ) trong GIMP dùng để làm gì?",
      "options": [
        "Đo khoảng cách giữa hai điểm",
        "Tô màu thuần hoặc màu chuyển sắc vào một vùng chọn",
        "Cắt xén bức ảnh",
        "Vẽ các nét vẽ bút chì mảnh"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 58): Thùng sơn (Bucket Fill) dùng để tô màu đồng nhất hoặc mẫu hoa văn vào vùng chọn.",
      "hint": "Biểu tượng thùng sơn đổ màu."
    }
  ],
  "tin8-bai-9b": [
    {
      "id": "b9b-de-1",
      "question": "Công cụ Crop trong phần mềm GIMP dùng để làm gì?",
      "options": [
        "Vẽ đường tròn",
        "Tô màu nền",
        "Cắt xén để lấy một phần khung hình của bức ảnh",
        "Xoá vĩnh viễn tệp ảnh"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 58): Công cụ Crop dùng để cắt lấy phần ảnh mong muốn và loại bỏ phần thừa.",
      "hint": "Crop nghĩa là cắt xén."
    },
    {
      "id": "b9b-tb-1",
      "question": "Công cụ Scale Tool trong GIMP có chức năng gì?",
      "options": [
        "Đổi ảnh màu thành ảnh đen trắng",
        "Lật ngược bức ảnh",
        "Xoay ảnh 90 độ",
        "Thay đổi kích thước (chiều rộng và chiều cao) của ảnh hoặc lớp ảnh"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 60): Scale Tool dùng để co giãn, phóng to thu nhỏ kích thước của ảnh.",
      "hint": "Scale nghĩa là tỉ lệ kích thước."
    },
    {
      "id": "b9b-kho-1",
      "question": "Khi thay đổi kích thước ảnh bằng Scale Image, biểu tượng mắt xích nối giữa Width và Height có ý nghĩa gì?",
      "options": [
        "Khóa cố định tỉ lệ khung hình (khi đổi Width thì Height tự đổi theo để ảnh không bị méo mó)",
        "Khóa không cho lưu tệp",
        "Tăng độ sáng của ảnh lên gấp đôi",
        "Xóa bức ảnh ngay lập tức"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 60): Mắt xích giúp giữ nguyên tỉ lệ chiều rộng và chiều cao để đối tượng trong ảnh không bị biến dạng, méo mó.",
      "hint": "Giữ nguyên tỉ lệ để ảnh không bị méo."
    },
    {
      "id": "tin8-b9b-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các thao tác thay đổi khung hình và kích thước ảnh:",
      "options": [
        "a) Cắt xén ảnh (Crop) giúp loại bỏ các chi tiết thừa xung quanh và tập trung vào chủ thể chính",
        "b) Khi thay đổi kích thước ảnh (Scale Image), luôn nên khóa tỉ lệ khung hình (Aspect Ratio) để ảnh không bị méo",
        "c) Giảm kích thước ảnh và độ phân giải sẽ làm tăng dung lượng tệp tin lưu trữ",
        "d) Ta có thể xoay ảnh theo các góc 90 độ, 180 độ hoặc lật ảnh theo chiều ngang/dọc"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 62): Giảm kích thước và độ phân giải sẽ làm GIẢM dung lượng tệp tin, giúp tải ảnh lên mạng nhanh hơn.",
      "hint": "Giảm kích thước giúp ảnh nhẹ hơn."
    },
    {
      "id": "tin8-b9b-fb1",
      "type": "fill_blank",
      "question": "Để cắt xén bớt phần rìa ngoài của ảnh, ta dùng công cụ [1], còn để phóng to hoặc thu nhỏ kích thước toàn bộ ảnh ta dùng lệnh [2].",
      "blankAnswers": [
        "Crop Tool",
        "Scale Image"
      ],
      "wordBank": [
        "Crop Tool",
        "Scale Image",
        "Rotate Tool",
        "Flip Tool",
        "Text Tool",
        "Bucket Fill"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 61, 63): Crop Tool dùng để cắt ảnh, Scale Image dùng để thay đổi kích thước ảnh.",
      "hint": "Crop là cắt cúp, Scale là co giãn tỉ lệ."
    },
    {
      "id": "tin8-b9b-m1",
      "type": "matching",
      "question": "Nối công cụ điều chỉnh hình học ở cột bên trái với tác dụng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Crop Tool"
        },
        {
          "id": "2",
          "text": "Rotate Tool"
        },
        {
          "id": "3",
          "text": "Flip Tool"
        },
        {
          "id": "4",
          "text": "Scale Tool"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Lật ngược bức ảnh theo trục dọc hoặc trục ngang như soi gương"
        },
        {
          "id": "b",
          "text": "Xoay bức ảnh một góc bất kì quanh tâm xoay"
        },
        {
          "id": "c",
          "text": "Cắt bỏ phần ngoài rìa của ảnh để lấy khung hình mong muốn"
        },
        {
          "id": "d",
          "text": "Thay đổi độ dài và độ rộng của ảnh"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "b",
        "3": "a",
        "4": "d"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 62, 63): Các công cụ biến đổi hình học cơ bản trong phần mềm chỉnh sửa ảnh.",
      "hint": "Crop: cắt; Rotate: xoay; Flip: lật; Scale: đổi kích thước."
    },
    {
      "id": "tin8-b9b-mc1",
      "type": "multiple_choice",
      "question": "Độ phân giải của một bức ảnh kĩ thuật số thường được đo bằng đơn vị nào?",
      "options": [
        "Km/h (Kilomet trên giờ)",
        "Hz (Hertz)",
        "DPI (Dots Per Inch) hoặc PPI (Pixels Per Inch)",
        "GB (Gigabyte)"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 63): Độ phân giải điểm ảnh đo bằng PPI (Pixels Per Inch) hoặc DPI (Dots Per Inch).",
      "hint": "Số điểm ảnh trên một inch chiều dài."
    },
    {
      "id": "tin8-b9b-mc2",
      "type": "multiple_choice",
      "question": "Khi thay đổi kích thước ảnh trong GIMP qua hộp thoại Scale Image, biểu tượng mắt xích nối giữa Width và Height có ý nghĩa gì?",
      "options": [
        "Khóa tỉ lệ khung hình (giữ nguyên tỉ lệ dài/rộng khi thay đổi một chiều)",
        "Mã hóa tệp ảnh bằng mật khẩu",
        "Kết nối ảnh với máy in",
        "Khóa bức ảnh không cho phép chỉnh sửa"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 63): Mắt xích đóng liên kết giữ nguyên tỉ lệ chiều rộng và chiều cao để ảnh không bị méo.",
      "hint": "Mắt xích liên kết giúp khóa tỉ lệ không bị méo ảnh."
    },
    {
      "id": "tin8-b9b-mc3",
      "type": "multiple_choice",
      "question": "Lệnh Flip Tool trong GIMP có phím tắt là Shift + F. Nếu chọn chế độ Horizontal, bức ảnh sẽ biến đổi như thế nào?",
      "options": [
        "Xoay tròn 45 độ theo chiều kim đồng hồ",
        "Lật lộn ngược đầu xuống đất theo chiều dọc",
        "Phóng to gấp đôi kích thước ban đầu",
        "Lật đối xứng qua gương theo chiều ngang (trái sang phải và ngược lại)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 63): Horizontal Flip là thao tác lật ảnh theo chiều ngang (đối xứng gương).",
      "hint": "Horizontal là phương ngang."
    },
    {
      "id": "tin8-b9b-mc4",
      "type": "multiple_choice",
      "question": "Để cắt ảnh theo tỉ lệ chuẩn 16:9 hoặc 4:3 cố định, ta thiết lập thông số nào trong bảng tùy chọn của công cụ Crop?",
      "options": [
        "Tăng độ phân giải lên 600 DPI",
        "Tích chọn Fixed Aspect Ratio và điền tỉ lệ mong muốn",
        "Đổi hệ màu sang CMYK",
        "Chọn chế độ Feather Edges"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 62): Mục Fixed Aspect Ratio giúp cố định khung cắt theo đúng tỉ lệ chuẩn màn hình.",
      "hint": "Fixed Aspect Ratio cố định tỉ lệ khung hình."
    }
  ],
  "tin8-bai-10b": [
    {
      "id": "b10b-de-1",
      "question": "Công cụ nào trong GIMP dùng để chèn văn bản (chữ) vào bức ảnh?",
      "options": [
        "Blend Tool",
        "Bucket Fill Tool",
        "Eraser Tool",
        "Text Tool (biểu tượng chữ A)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 62): Text tool có biểu tượng chữ A hoa dùng để chèn chữ vào ảnh.",
      "hint": "Biểu tượng chữ A."
    },
    {
      "id": "b10b-tb-1",
      "question": "Bộ lọc nào trong GIMP giúp làm mờ hậu cảnh để làm nổi bật đối tượng chính trong ảnh?",
      "options": [
        "Invert",
        "Gaussian Blur",
        "Brightness",
        "Sharpen"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 64): Bộ lọc Blur (đặc biệt là Gaussian Blur) dùng để làm mờ các vùng ảnh.",
      "hint": "Blur nghĩa là làm mờ."
    },
    {
      "id": "b10b-kho-1",
      "question": "Khi chèn chữ bằng Text Tool trong GIMP, chữ vừa tạo sẽ nằm ở đâu?",
      "options": [
        "Tự động tạo ra một Lớp văn bản (Text Layer) riêng biệt",
        "Làm biến mất toàn bộ các layer khác",
        "Dính chặt vĩnh viễn vào ảnh nền không thể sửa lại",
        "Lưu thành một tệp Word riêng biệt"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 62): GIMP tự động tạo ra một lớp văn bản mới giúp người dùng dễ dàng chỉnh sửa lại nội dung chữ, màu sắc và phông chữ bất cứ lúc nào.",
      "hint": "Tạo thành một Text layer riêng biệt."
    },
    {
      "id": "tin8-b10b-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các thao tác thêm văn bản và tạo hiệu ứng cho ảnh:",
      "options": [
        "a) Khi chèn văn bản bằng Text Tool, phần mềm thường tự động tạo một Lớp ảnh mới (Text Layer)",
        "b) Không thể thay đổi màu sắc và phông chữ sau khi đã gõ văn bản lên ảnh",
        "c) Bộ lọc hiệu ứng (Filters) giúp tạo các hiệu ứng đặc biệt như làm mờ, tăng nét, đổ bóng cho ảnh",
        "d) Các lớp ảnh nằm ở phía trên trong bảng quản lí Layers sẽ che khuất các lớp nằm ở phía dưới"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 66): Văn bản trong Text Layer có thể chỉnh sửa lại nội dung, đổi màu, đổi phông chữ bất kì lúc nào.",
      "hint": "Văn bản trên Text Layer hoàn toàn chỉnh sửa lại được."
    },
    {
      "id": "tin8-b10b-fb1",
      "type": "fill_blank",
      "question": "Khái niệm [1] trong phần mềm đồ họa giống như các tấm kính trong suốt xếp chồng lên nhau, còn dải lệnh [2] chứa các hiệu ứng làm mờ hoặc làm sắc nét ảnh.",
      "blankAnswers": [
        "Lớp (Layer)",
        "Filters"
      ],
      "wordBank": [
        "Lớp (Layer)",
        "Filters",
        "Kênh màu",
        "Tools",
        "View",
        "History"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 65, 68): Lớp (Layer) là khái niệm cốt lõi của xử lí ảnh; Filters cung cấp các hiệu ứng nghệ thuật.",
      "hint": "Layer là các lớp kính trong suốt xếp chồng lên nhau."
    },
    {
      "id": "tin8-b10b-m1",
      "type": "matching",
      "question": "Nối hiệu ứng trong menu Filters ở cột bên trái với tác dụng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Gaussian Blur"
        },
        {
          "id": "2",
          "text": "Unsharp Mask (Sharpen)"
        },
        {
          "id": "3",
          "text": "Drop Shadow"
        },
        {
          "id": "4",
          "text": "Text Tool (chữ A)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Tạo bóng đổ cho chữ hoặc đối tượng nổi bật trên nền"
        },
        {
          "id": "b",
          "text": "Tạo độ mờ mềm mại cho hậu cảnh (xóa phông)"
        },
        {
          "id": "c",
          "text": "Làm tăng độ sắc nét cho bức ảnh bị mờ nhẹ"
        },
        {
          "id": "d",
          "text": "Thêm lời chú thích, tiêu đề văn bản vào bức ảnh"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "a",
        "4": "d"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 68): Blur là làm mờ; Sharpen làm nét; Drop Shadow tạo bóng đổ; Text Tool viết chữ.",
      "hint": "Blur: làm mờ xóa phông; Shadow: đổ bóng."
    },
    {
      "id": "tin8-b10b-mc1",
      "type": "multiple_choice",
      "question": "Muốn làm nổi bật chủ thể chính ở tiền cảnh, người chỉnh sửa ảnh thường áp dụng hiệu ứng nào cho hậu cảnh (nền phía sau)?",
      "options": [
        "Xoay ảnh 180 độ",
        "Tăng độ sáng chói tối đa cho toàn ảnh",
        "Làm mờ nền bằng bộ lọc Blur (xóa phông)",
        "Tô đen toàn bộ ảnh"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 68): Làm mờ hậu cảnh (Blur) giúp thị giác người xem tập trung trọn vẹn vào chủ thể phía trước.",
      "hint": "Hiệu ứng xóa phông làm mờ hậu cảnh."
    },
    {
      "id": "tin8-b10b-mc2",
      "type": "multiple_choice",
      "question": "Để ẩn hoặc hiện một lớp ảnh trong bảng Layers của phần mềm GIMP, ta nhấp chuột vào biểu tượng nào bên cạnh tên lớp?",
      "options": [
        "Biểu tượng hình con mắt",
        "Biểu tượng chiếc khóa",
        "Biểu tượng thùng rác",
        "Biểu tượng dấu cộng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 65): Biểu tượng con mắt biểu thị trạng thái hiển thị (Visible/Invisible) của lớp ảnh.",
      "hint": "Con mắt tượng trưng cho tầm nhìn, hiển thị."
    },
    {
      "id": "tin8-b10b-mc3",
      "type": "multiple_choice",
      "question": "Thuộc tính Opacity trong bảng quản lí Layers của GIMP quy định điều gì?",
      "options": [
        "Tốc độ hiển thị hoạt hình của lớp ảnh",
        "Dung lượng bộ nhớ RAM mà lớp ảnh sử dụng",
        "Kích thước chiều rộng của lớp ảnh",
        "Độ mờ đục / độ trong suốt của lớp ảnh (từ 0% đến 100%)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 66): Opacity 100% là đặc hoàn toàn, Opacity giảm dần giúp lớp ảnh trong suốt nhìn xuyên qua lớp dưới.",
      "hint": "Opacity là độ mờ đục / trong suốt."
    },
    {
      "id": "tin8-b10b-mc4",
      "type": "multiple_choice",
      "question": "Để tạo viền chữ nổi bật trên nền ảnh tối, hiệu ứng nào sau đây trong menu Filters thường được áp dụng?",
      "options": [
        "Distorts -> Ripple",
        "Light and Shadow -> Drop Shadow (hoặc viền Stroke)",
        "Blur -> Motion Blur",
        "Noise -> RGB Noise"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 68): Tạo bóng đổ (Drop Shadow) hoặc viền chữ giúp tách chữ khỏi phông nền phức tạp.",
      "hint": "Drop Shadow tạo bóng đổ nổi bật viền chữ."
    }
  ],
  "tin8-bai-11b": [
    {
      "id": "b11b-de-1",
      "question": "Lệnh nào trong GIMP dùng để xuất bức ảnh đã hoàn thiện sang định dạng thông dụng như .jpg hoặc .png?",
      "options": [
        "File -> Save",
        "File -> Close",
        "File -> Export As...",
        "File -> New"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 66): Dùng lệnh Export As để xuất ảnh sang các định dạng chuẩn xem trên điện thoại hoặc chia sẻ lên web.",
      "hint": "Export As."
    },
    {
      "id": "b11b-tb-1",
      "question": "Định dạng ảnh PNG có ưu điểm nổi bật nào so với định dạng JPG?",
      "options": [
        "Chỉ mở được trên máy tính của Mỹ",
        "Hỗ trợ nền trong suốt (Transparency) và không bị suy giảm chất lượng khi lưu nhiều lần",
        "Dung lượng luôn lớn hơn video",
        "Không thể in ra giấy"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "PNG hỗ trợ kênh alpha trong suốt rất thích hợp để làm logo và cắt ghép ảnh.",
      "hint": "Hỗ trợ nền trong suốt."
    },
    {
      "id": "b11b-kho-1",
      "question": "Để gộp một lớp ảnh phía trên vào lớp ảnh ngay phía dưới trong bảng điều khiển Layers của GIMP, em dùng lệnh nào?",
      "options": [
        "New Layer",
        "Duplicate Layer",
        "Merge Down",
        "Delete Layer"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 67): Lệnh Merge Down gộp lớp đang chọn vào lớp liền dưới.",
      "hint": "Merge Down nghĩa là gộp xuống dưới."
    },
    {
      "id": "tin8-b11b-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về quy trình thực hành thiết kế ấn phẩm số (áp phích, thiệp chúc mừng):",
      "options": [
        "a) Cần phác thảo ý tưởng bố cục và màu sắc trước khi mở phần mềm thực hiện",
        "b) Khi xuất sản phẩm để chia sẻ qua Zalo hoặc Facebook, nên xuất sang định dạng .png hoặc .jpg",
        "c) Sau khi đã xuất sang tệp .jpg thì vẫn có thể mở lại để chỉnh sửa từng lớp layer một cách độc lập",
        "d) Tệp gốc có đuôi .xcf nên được lưu trữ cẩn thận để có thể chỉnh sửa lại sau này"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 71): Định dạng .jpg/.png đã ghép phẳng (flatten) tất cả các lớp thành một, không thể tách lớp sửa lại được nữa.",
      "hint": "Tệp .jpg đã gộp tất cả các lớp lại thành một bức ảnh phẳng."
    },
    {
      "id": "tin8-b11b-fb1",
      "type": "fill_blank",
      "question": "Để lưu lại tệp dự án chứa các lớp layer ta chọn lệnh [1], còn để xuất ảnh sang định dạng JPG hoặc PNG để đăng mạng xã hội ta chọn lệnh [2].",
      "blankAnswers": [
        "Save As (.xcf)",
        "Export As (.jpg/.png)"
      ],
      "wordBank": [
        "Save As (.xcf)",
        "Export As (.jpg/.png)",
        "Print",
        "Import",
        "Cut",
        "Paste"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 71): Save As lưu tệp dự án .xcf; Export As xuất ảnh thành phẩm phổ thông (.jpg, .png).",
      "hint": "Save lưu dự án, Export xuất sản phẩm."
    },
    {
      "id": "tin8-b11b-m1",
      "type": "matching",
      "question": "Nối định dạng tệp ảnh ở cột bên trái với đặc điểm phù hợp nhất ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Tệp .xcf"
        },
        {
          "id": "2",
          "text": "Tệp .png"
        },
        {
          "id": "3",
          "text": "Tệp .jpg (.jpeg)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Định dạng ảnh nén phổ biến nhất thế giới, kích thước tệp nhẹ phù hợp đăng web"
        },
        {
          "id": "b",
          "text": "Định dạng ảnh hỗ trợ vùng nền trong suốt (Transparency), chất lượng cao"
        },
        {
          "id": "c",
          "text": "Tệp dự án độc quyền của GIMP, lưu đầy đủ mọi lớp layer và lịch sử"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "b",
        "3": "a"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 71): Phân biệt 3 định dạng phổ biến nhất trong thiết kế đồ họa.",
      "hint": "PNG hỗ trợ nền trong suốt; JPG nhẹ phổ biến; XCF là tệp nguồn GIMP."
    },
    {
      "id": "tin8-b11b-mc1",
      "type": "multiple_choice",
      "question": "Trong một bức thiệp chúc mừng, yếu tố nào cần được thiết kế nổi bật và trang trọng nhất?",
      "options": [
        "Màu nền của thiệp",
        "Họa tiết đường viền hoa văn xung quanh",
        "Địa chỉ trang web của người thiết kế",
        "Dòng chữ thông điệp chúc mừng (chủ đề chính)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 70): Thông điệp chính của thiệp là yếu tố cốt lõi cần được ưu tiên nổi bật nhất.",
      "hint": "Thông điệp chính là nội dung quan trọng nhất của thiệp."
    },
    {
      "id": "tin8-b11b-mc2",
      "type": "multiple_choice",
      "question": "Khi thiết kế một áp phích (poster) tuyên truyền, tiêu chí nào sau đây là quan trọng nhất để thu hút thị giác?",
      "options": [
        "Hình ảnh trung tâm ấn tượng, thông điệp ngắn gọn súc tích, màu sắc hài hòa",
        "Chèn càng nhiều đoạn văn bản thuyết minh càng tốt",
        "Tô màu nền đỏ rực chói lóa trên toàn bộ poster",
        "Sử dụng các hình vẽ chất lượng thấp bị vỡ hạt"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 70): Poster cần hình ảnh chủ đạo ấn tượng, màu sắc bắt mắt và thông điệp súc tích.",
      "hint": "Hình ảnh ấn tượng, thông điệp ngắn gọn và màu hài hòa."
    },
    {
      "id": "tin8-b11b-mc3",
      "type": "multiple_choice",
      "question": "Khi xuất ảnh trong GIMP sang định dạng PNG, tùy chọn nào giúp giảm kích thước tệp mà không làm giảm chất lượng điểm ảnh?",
      "options": [
        "Đổi tên tệp thành .txt",
        "Xóa bỏ toàn bộ ảnh",
        "Mức nén Compression level (từ 0 đến 9)",
        "Giảm số màu xuống còn 2 màu đen trắng"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 71): Định dạng PNG dùng thuật toán nén không mất dữ liệu (Lossless), tăng Compression level giúp tệp nhẹ hơn.",
      "hint": "Mức độ nén Lossless của định dạng PNG."
    },
    {
      "id": "tin8-b11b-mc4",
      "type": "multiple_choice",
      "question": "Để ghép một đối tượng (ví dụ hình bông hoa) từ ảnh này sang ảnh khác mà không dính nền thừa, bước quan trọng nhất là gì?",
      "options": [
        "Dùng công cụ tạo vùng chọn tự do (Lasso / Fuzzy Select) để tách riêng bông hoa khỏi nền cũ rồi copy",
        "Làm mờ toàn bộ bức ảnh cũ",
        "Lật ảnh 180 độ rồi dán đè",
        "Chụp ảnh cả màn hình rồi dán vào"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 70): Sử dụng công cụ tách vùng chọn (Select Tool) để tách chủ thể khỏi hậu cảnh trước khi ghép sang tệp mới.",
      "hint": "Tạo vùng chọn chính xác để tách nền trước khi ghép."
    }
  ],
  "tin8-bai-12": [
    {
      "id": "b12-de-1",
      "question": "Thuật toán là gì?",
      "options": [
        "Một chiếc máy tính xách tay hiện đại",
        "Một trang web chia sẻ hình ảnh",
        "Một trò chơi giải trí trên mạng",
        "Một dãy các chỉ dẫn rõ ràng, có trình tự từng bước xác định để giải quyết một bài toán hay nhiệm vụ cụ thể"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 69): Thuật toán là dãy tuần tự các thao tác rõ ràng để biến đổi đầu vào (Input) thành đầu ra (Output).",
      "hint": "Dãy các chỉ dẫn từng bước có thứ tự."
    },
    {
      "id": "b12-de-2",
      "question": "Trong môi trường lập trình trực quan Scratch, nhân vật di chuyển trên không gian nào?",
      "options": [
        "Bảng tính (Sheet)",
        "Sân khấu (Stage)",
        "Thẻ nhớ (Flash)",
        "Trang soạn thảo (Document)"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 70): Sân khấu (Stage) là nơi biểu diễn hoạt động của các nhân vật (Sprites).",
      "hint": "Sân khấu Stage."
    },
    {
      "id": "b12-tb-1",
      "question": "Để vẽ một tam giác đều có cạnh 100 bước trong Scratch, sau mỗi cạnh nhân vật cần quay một góc bao nhiêu độ?",
      "options": [
        "180 độ",
        "60 độ",
        "90 độ",
        "120 độ"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 71 - Hình 12.3): Góc quay của nhân vật là góc ngoài của đa giác: 360 / 3 = 120 độ.",
      "hint": "Góc quay ngoài bằng 360 chia cho số cạnh (360/3 = 120)."
    },
    {
      "id": "b12-kho-1",
      "question": "Để vẽ một hình vuông có cạnh 80 bước, góc quay của nhân vật sau mỗi cạnh là bao nhiêu độ?",
      "options": [
        "120 độ",
        "90 độ",
        "360 độ",
        "45 độ"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "Góc quay của hình vuông là: 360 / 4 = 90 độ.",
      "hint": "360 chia 4 bằng 90."
    },
    {
      "id": "tin8-b12-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về mối quan hệ giữa thuật toán và chương trình:",
      "options": [
        "a) Thuật toán là ý tưởng và các bước giải quyết vấn đề dưới dạng con người hiểu được",
        "b) Chương trình máy tính là bản mô tả thuật toán bằng một ngôn ngữ lập trình cụ thể để máy tính thực hiện",
        "c) Một thuật toán chỉ có thể được viết thành duy nhất một chương trình bằng một ngôn ngữ lập trình duy nhất",
        "d) Trước khi viết mã lệnh (code), người lập trình viên cần thiết kế thuật toán trước"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 74): Một thuật toán có thể được cài đặt bằng nhiều ngôn ngữ lập trình khác nhau (Scratch, Python, C++, Pascal...).",
      "hint": "Một thuật toán có thể cài đặt bằng nhiều ngôn ngữ khác nhau."
    },
    {
      "id": "tin8-b12-fb1",
      "type": "fill_blank",
      "question": "Để máy tính có thể hiểu và thực hiện được thuật toán, ta cần chuyển thuật toán đó thành [1] bằng một [2] xác định.",
      "blankAnswers": [
        "chương trình",
        "ngôn ngữ lập trình"
      ],
      "wordBank": [
        "chương trình",
        "ngôn ngữ lập trình",
        "hình vẽ",
        "tệp âm thanh",
        "bảng tính",
        "sách in"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 74): Chuyển thuật toán thành chương trình bằng ngôn ngữ lập trình.",
      "hint": "Chương trình được viết bằng ngôn ngữ lập trình."
    },
    {
      "id": "tin8-b12-m1",
      "type": "matching",
      "question": "Nối khái niệm ở cột bên trái với bản chất tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Bài toán (Problem)"
        },
        {
          "id": "2",
          "text": "Thuật toán (Algorithm)"
        },
        {
          "id": "3",
          "text": "Chương trình (Program)"
        },
        {
          "id": "4",
          "text": "Môi trường lập trình"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Dãy các chỉ dẫn từng bước để giải quyết vấn đề"
        },
        {
          "id": "b",
          "text": "Công việc hoặc nhiệm vụ cần máy tính giải quyết từ Input ra Output"
        },
        {
          "id": "c",
          "text": "Phần mềm cung cấp công cụ soạn thảo, dịch và chạy mã lệnh"
        },
        {
          "id": "d",
          "text": "Mã lệnh hoàn chỉnh được viết bằng ngôn ngữ máy hoặc bậc cao"
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
      "explanation": "SGK Tin học 8 KNTT (Trang 73-75): Các khái niệm nền tảng trong khoa học máy tính.",
      "hint": "Bài toán: nhiệm vụ; Thuật toán: cách giải; Chương trình: mã thực thi."
    },
    {
      "id": "tin8-b12-mc1",
      "type": "multiple_choice",
      "question": "Khi viết chương trình, nếu máy tính báo lỗi cú pháp (Syntax Error), nguyên nhân là gì?",
      "options": [
        "Người lập trình viết sai quy tắc hoặc từ khóa của ngôn ngữ lập trình",
        "Máy tính bị mất kết nối mạng Internet",
        "Màn hình máy tính bị hỏng màu",
        "Dữ liệu đầu vào quá nhỏ"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 75): Lỗi cú pháp xảy ra khi câu lệnh vi phạm quy tắc chính tả, ngữ pháp của ngôn ngữ lập trình đó.",
      "hint": "Vi phạm quy tắc viết lệnh của ngôn ngữ lập trình."
    },
    {
      "id": "tin8-b12-mc2",
      "type": "multiple_choice",
      "question": "Trong môi trường lập trình Scratch, các khối lệnh có màu sắc khác nhau đại diện cho điều gì?",
      "options": [
        "Giá tiền của từng câu lệnh",
        "Mức độ khó dễ của câu lệnh",
        "Các nhóm chức năng lệnh khác nhau (Chuyển động, Hiển thị, Âm thanh, Điều khiển...)",
        "Chỉ để trang trí cho đẹp mắt mà không có ý nghĩa kĩ thuật"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 75): Mỗi nhóm lệnh trong Scratch được quy ước màu riêng: Motion (xanh lam), Looks (tím), Events (vàng), Control (cam)...",
      "hint": "Màu sắc phân loại theo nhóm chức năng của lệnh."
    },
    {
      "id": "tin8-b12-mc3",
      "type": "multiple_choice",
      "question": "Ngôn ngữ lập trình bậc cao (như Python, Scratch, C++) có ưu điểm vượt trội gì so với ngôn ngữ máy (mã nhị phân 0 và 1)?",
      "options": [
        "Gần gũi với ngôn ngữ tự nhiên của con người, dễ đọc, dễ viết và dễ học hơn rất nhiều",
        "Chỉ dùng để giải toán cộng trừ đơn giản",
        "Không thể chạy được trên các máy vi tính đời mới",
        "Chạy trực tiếp trên CPU mà không cần trình biên dịch hay thông dịch"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 74): Ngôn ngữ bậc cao sử dụng các từ khóa tiếng Anh gần gũi, giúp con người dễ dàng sáng tạo chương trình.",
      "hint": "Gần gũi với tiếng Anh và cách tư duy của con người."
    },
    {
      "id": "tin8-b12-mc4",
      "type": "multiple_choice",
      "question": "Chương trình dịch (Compiler / Interpreter) đóng vai trò gì trong hệ thống máy tính?",
      "options": [
        "Nâng cấp tốc độ mạng Internet",
        "Quét sạch bụi bẩn trên bo mạch chủ máy tính",
        "Dịch văn bản tiếng Việt sang tiếng Anh tự động",
        "Dịch mã nguồn viết bằng ngôn ngữ bậc cao sang mã máy nhị phân để phần cứng máy tính hiểu và thực thi"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 74): Máy tính chỉ hiểu mã nhị phân 0 và 1, chương trình dịch là chiếc cầu nối phiên dịch từ mã nguồn sang mã máy.",
      "hint": "Chuyển đổi mã nguồn của lập trình viên thành mã máy."
    }
  ],
  "tin8-bai-13": [
    {
      "id": "b13-de-1",
      "question": "Biến (Variable) trong chương trình máy tính dùng để làm gì?",
      "options": [
        "Là giá trị cố định không bao giờ thay đổi",
        "Dùng để lưu trữ dữ liệu và giá trị của nó có thể thay đổi trong quá trình thực hiện chương trình",
        "Dùng để tắt máy tính",
        "Dùng để kết nối mạng Internet"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 74): Biến là đại lượng được đặt tên dùng để lưu trữ dữ liệu, giá trị của biến có thể thay đổi trong khi chương trình chạy.",
      "hint": "Biến là đại lượng có thể thay đổi giá trị."
    },
    {
      "id": "b13-de-2",
      "question": "Hằng (Constant) trong chương trình khác với Biến ở điểm nào?",
      "options": [
        "Hằng chỉ dùng cho số âm",
        "Hằng không thể đặt tên",
        "Hằng là đại lượng có giá trị không đổi trong suốt quá trình thực hiện chương trình",
        "Hằng luôn luôn thay đổi liên tục"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 74): Hằng có giá trị cố định không đổi (ví dụ số Pi = 3.14).",
      "hint": "Hằng có giá trị không thay đổi."
    },
    {
      "id": "b13-tb-1",
      "question": "Trong Scratch, khối lệnh `mod` trong nhóm Toán tử (Operators) thực hiện phép toán gì?",
      "options": [
        "Tính luỹ thừa",
        "Chia lấy phần dư",
        "Chia lấy phần nguyên",
        "Tính tổng hai số"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 76): Phép toán `a mod b` trả về phần dư của phép chia a cho b (ví dụ 7 mod 3 = 1).",
      "hint": "Phép chia lấy phần dư."
    },
    {
      "id": "b13-kho-1",
      "question": "Khối lệnh `join \"Tin học \" \"Lớp 8\"` trong Scratch sẽ trả về kết quả là gì?",
      "options": [
        "\"Tin họcLớp 8\"",
        "Không thực hiện được",
        "\"Tin học Lớp 8\"",
        "0"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "Khối lệnh join dùng để ghép nối các chuỗi văn bản lại với nhau.",
      "hint": "Ghép nối chuỗi văn bản."
    },
    {
      "id": "tin8-b13-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về Biến (Variable) và Hằng (Constant):",
      "options": [
        "a) Biến là một vùng nhớ được đặt tên dùng để lưu trữ dữ liệu có thể thay đổi trong khi chương trình chạy",
        "b) Hằng là đại lượng có giá trị không bao giờ thay đổi trong suốt quá trình chạy chương trình",
        "c) Tên biến có thể bắt đầu bằng một chữ số và chứa dấu cách trắng tự do",
        "d) Trong Python hay Scratch, ta có thể gán giá trị mới cho biến bằng phép gán"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 78): Tên biến KHÔNG được bắt đầu bằng chữ số và KHÔNG được chứa khoảng trắng.",
      "hint": "Tên biến không được chứa dấu cách."
    },
    {
      "id": "tin8-b13-fb1",
      "type": "fill_blank",
      "question": "Đại lượng có giá trị có thể thay đổi trong quá trình thực hiện chương trình gọi là [1], còn đại lượng có giá trị cố định không đổi gọi là [2].",
      "blankAnswers": [
        "Biến (Variable)",
        "Hằng (Constant)"
      ],
      "wordBank": [
        "Biến (Variable)",
        "Hằng (Constant)",
        "Hàm",
        "Tham số",
        "Điều kiện",
        "Biểu thức"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 78): Biến có thể thay đổi giá trị, hằng có giá trị cố định.",
      "hint": "Biến đổi = biến; cố định bất biến = hằng."
    },
    {
      "id": "tin8-b13-m1",
      "type": "matching",
      "question": "Nối kiểu dữ liệu ở cột bên trái với ví dụ giá trị phù hợp ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Kiểu số nguyên (Integer)"
        },
        {
          "id": "2",
          "text": "Kiểu số thực (Float)"
        },
        {
          "id": "3",
          "text": "Kiểu xâu kí tự (String)"
        },
        {
          "id": "4",
          "text": "Kiểu logic (Boolean)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "\"Học sinh giỏi môn Tin\""
        },
        {
          "id": "b",
          "text": "True hoặc False"
        },
        {
          "id": "c",
          "text": "-15, 0, 100"
        },
        {
          "id": "d",
          "text": "3.14, -0.5, 9.8"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "d",
        "3": "a",
        "4": "b"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 79): Các kiểu dữ liệu cơ bản trong lập trình: số nguyên, số thực, xâu, logic.",
      "hint": "Số nguyên: không có phẩy; số thực: có phần thập phân; xâu: trong ngoặc kép; boolean: True/False."
    },
    {
      "id": "tin8-b13-mc1",
      "type": "multiple_choice",
      "question": "Tên biến nào sau đây là HỢP LỆ theo quy ước chuẩn của hầu hết các ngôn ngữ lập trình?",
      "options": [
        "2diem_so",
        "diem trung binh",
        "diem-so-lop",
        "diem_trung_binh"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 78): Tên biến hợp lệ không bắt đầu bằng số, không chứa khoảng trắng, dùng dấu gạch dưới `_`.",
      "hint": "Dùng dấu gạch dưới thay cho khoảng trắng."
    },
    {
      "id": "tin8-b13-mc2",
      "type": "multiple_choice",
      "question": "Trong biểu thức số học của hầu hết ngôn ngữ lập trình, phép chia lấy phần dư được kí hiệu bằng toán tử nào?",
      "options": [
        "Toán tử % (hoặc mod)",
        "Toán tử /",
        "Toán tử // (hoặc div)",
        "Toán tử ^"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 79): Kí hiệu `%` biểu thị phép chia lấy phần dư (Modulus). Ví dụ `7 % 3 = 1`.",
      "hint": "Kí hiệu phần trăm % dùng lấy số dư phép chia."
    },
    {
      "id": "tin8-b13-mc3",
      "type": "multiple_choice",
      "question": "Kết quả của phép so sánh logic `(15 > 10) and (4 == 5)` là gì?",
      "options": [
        "Bằng 15",
        "Không xác định",
        "False (Sai)",
        "True (Đúng)"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 80): `15 > 10` là True, nhưng `4 == 5` là False. Phép toán `and` chỉ đúng khi cả hai vế cùng đúng -> kết quả là False.",
      "hint": "Phép AND chỉ cho True khi cả hai vế đều đúng."
    },
    {
      "id": "tin8-b13-mc4",
      "type": "multiple_choice",
      "question": "Khi gán giá trị xâu kí tự cho một biến trong Python, giá trị đó bắt buộc phải được đặt trong cặp dấu nào?",
      "options": [
        "Cặp dấu ngoặc kép \" \" hoặc ngoặc đơn ' '",
        "Cặp dấu ngoặc nhọn { }",
        "Không cần dấu gì cả",
        "Cặp dấu ngoặc vuông [ ]"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 79): Xâu kí tự (String) được bao bọc trong cặp dấu nháy kép `\"...\"` hoặc nháy đơn `'...'`.",
      "hint": "Xâu kí tự đặt trong cặp dấu nháy."
    }
  ],
  "tin8-bai-14": [
    {
      "id": "b14-de-1",
      "question": "Trong Scratch, cấu trúc rẽ nhánh dạng đủ được thể hiện bằng khối lệnh nào?",
      "options": [
        "wait 1 secs",
        "repeat <10>",
        "forever",
        "if <điều kiện> then ... else ..."
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 79): Cấu trúc nếu ... thì ... không thì ... tương ứng với khối lệnh if ... then ... else ...",
      "hint": "if ... then ... else ..."
    },
    {
      "id": "b14-tb-1",
      "question": "Khối lệnh `repeat until <điều kiện>` trong Scratch sẽ thực hiện lặp như thế nào?",
      "options": [
        "Chỉ lặp đúng 1 lần duy nhất",
        "Lặp đi lặp lại các lệnh bên trong cho đến khi điều kiện trở thành ĐÚNG thì dừng lặp",
        "Lặp vô tận không bao giờ dừng",
        "Không thực hiện lệnh nào"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 80): Lệnh lặp với điều kiện dừng repeat until lặp liên tục cho tới khi điều kiện thoả mãn.",
      "hint": "Lặp cho đến khi điều kiện đúng thì dừng."
    },
    {
      "id": "b14-kho-1",
      "question": "Trong trò chơi \"Đoán số\", máy tính chọn một số ngẫu nhiên từ 1 đến 100. Cấu trúc điều khiển nào là phù hợp nhất để cho phép người chơi đoán nhiều lần cho đến khi trúng số?",
      "options": [
        "Cấu trúc tuần tự không lặp",
        "Chỉ dùng một khối lệnh if đơn lẻ",
        "Dùng lệnh wait 100 secs",
        "Cấu trúc lặp với điều kiện dừng: repeat until <số đoán = số bí mật>"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 80-81): Trò chơi đoán số cần lặp cho đến khi đoán đúng bằng khối lệnh repeat until.",
      "hint": "Lặp cho tới khi số đoán trùng số bí mật."
    },
    {
      "id": "tin8-b14-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về ba cấu trúc điều khiển cơ bản trong lập trình:",
      "options": [
        "a) Mọi thuật toán phức tạp đều có thể xây dựng từ 3 cấu trúc: tuần tự, rẽ nhánh và lặp",
        "b) Cấu trúc rẽ nhánh cho phép chương trình chọn một trong hai hành động dựa trên kết quả kiểm tra điều kiện",
        "c) Cấu trúc lặp chỉ có thể lặp với số lần biết trước, không thể lặp theo điều kiện",
        "d) Trong cấu trúc tuần tự, các câu lệnh được thực hiện lần lượt từ trên xuống dưới"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 82): Cấu trúc lặp gồm cả: lặp với số lần biết trước và lặp với số lần chưa biết trước (lặp theo điều kiện).",
      "hint": "Có cả lặp với số lần biết trước và lặp theo điều kiện."
    },
    {
      "id": "tin8-b14-fb1",
      "type": "fill_blank",
      "question": "Ba cấu trúc điều khiển cơ bản trong lập trình là: cấu trúc [1], cấu trúc [2] và cấu trúc lặp.",
      "blankAnswers": [
        "tuần tự",
        "rẽ nhánh"
      ],
      "wordBank": [
        "tuần tự",
        "rẽ nhánh",
        "ngẫu nhiên",
        "hỗn loạn",
        "đệ quy",
        "song song"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 82): Ba cấu trúc kinh điển: tuần tự (sequence), rẽ nhánh (selection/branching) và lặp (iteration/loop).",
      "hint": "Tuần tự, rẽ nhánh và lặp."
    },
    {
      "id": "tin8-b14-m1",
      "type": "matching",
      "question": "Nối cấu trúc điều khiển ở cột bên trái với ví dụ thực tế tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Cấu trúc tuần tự"
        },
        {
          "id": "2",
          "text": "Cấu trúc rẽ nhánh (dạng thiếu)"
        },
        {
          "id": "3",
          "text": "Cấu trúc rẽ nhánh (dạng đủ)"
        },
        {
          "id": "4",
          "text": "Cấu trúc lặp"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Nếu ngày mai trời mưa thì em mang theo áo mưa"
        },
        {
          "id": "b",
          "text": "Nếu điểm >= 5 thì Đạt, ngược lại thì Chưa đạt"
        },
        {
          "id": "c",
          "text": "Thức dậy -> Đánh răng -> Ăn sáng -> Đến trường"
        },
        {
          "id": "d",
          "text": "Chạy quanh sân trường đúng 3 vòng liên tục"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "a",
        "3": "b",
        "4": "d"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 83): Các ví dụ đời sống sinh động minh họa cấu trúc tuần tự, rẽ nhánh thiếu/đủ và lặp.",
      "hint": "Gắn hành động thực tế với cấu trúc logic tương ứng."
    },
    {
      "id": "tin8-b14-mc1",
      "type": "multiple_choice",
      "question": "Đoạn mã giả: \"Nếu Trời_mưa thì Ở_nhà Ngược_lại Đi_chơi\" thể hiện cấu trúc điều khiển nào?",
      "options": [
        "Cấu trúc tuần tự đơn giản",
        "Cấu trúc rẽ nhánh dạng đủ (If - Then - Else)",
        "Cấu trúc rẽ nhánh dạng thiếu (If - Then)",
        "Cấu trúc lặp vô tận (While True)"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 83): Có cả vế Nếu (If) và Ngược lại (Else) là cấu trúc rẽ nhánh dạng đủ.",
      "hint": "Có mệnh đề \"Ngược lại\" là dạng đủ."
    },
    {
      "id": "tin8-b14-mc2",
      "type": "multiple_choice",
      "question": "Vòng lặp nào sau đây là vòng lặp với số lần biết trước trong lập trình?",
      "options": [
        "Lặp đúng 10 lần câu lệnh in ra màn hình",
        "Lặp lại việc gõ cửa cho đến khi có người mở cửa",
        "Lặp lại việc uống nước cho đến khi hết khát",
        "Lặp lại việc học bài cho đến khi thuộc lòng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 83): Biết trước số lần lặp cụ thể (10 lần) là cấu trúc lặp xác định (For / Repeat 10).",
      "hint": "Số lần lặp được xác định bằng một con số cụ thể ngay từ đầu."
    },
    {
      "id": "tin8-b14-mc3",
      "type": "multiple_choice",
      "question": "Hiện tượng \"vòng lặp vô tận\" (Infinite Loop) xảy ra khi nào?",
      "options": [
        "Khi câu lệnh bên trong vòng lặp bị xóa hết",
        "Khi số lần lặp được đặt là 1 lần duy nhất",
        "Khi điều kiện dừng của vòng lặp không bao giờ thỏa mãn, khiến chương trình lặp mãi mãi không dừng",
        "Khi máy tính bị mất điện đột ngột"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 84): Điều kiện dừng không bao giờ xảy ra khiến vòng lặp chạy mãi mãi, làm đơ chương trình.",
      "hint": "Điều kiện dừng không bao giờ đạt được."
    },
    {
      "id": "tin8-b14-mc4",
      "type": "multiple_choice",
      "question": "Trong sơ đồ khối thuật toán, điều kiện rẽ nhánh thường có mấy nhánh đi ra?",
      "options": [
        "Chính xác 2 nhánh: một nhánh Đúng (True) và một nhánh Sai (False)",
        "Có 4 nhánh tương ứng 4 mùa",
        "Chỉ có 1 nhánh duy nhất",
        "Bao nhiêu nhánh tùy ý"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 83): Hình thoi điều kiện luôn có 2 nhánh rẽ: Đúng (Yes/True) và Sai (No/False).",
      "hint": "Hai ngã rẽ: Đúng hoặc Sai."
    }
  ],
  "tin8-bai-15": [
    {
      "id": "b15-de-1",
      "question": "Gỡ lỗi (Debugging) trong lập trình là quá trình gì?",
      "options": [
        "Lau chùi bụi bẩn bám trên màn hình",
        "Xóa bỏ toàn bộ phần mềm",
        "Cài đặt thêm các trò chơi mới",
        "Phát hiện, tìm nguyên nhân và sửa chữa các lỗi trong chương trình máy tính"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 83): Gỡ lỗi là quá trình tìm kiếm và khắc phục các sai sót để chương trình chạy đúng mục tiêu.",
      "hint": "Tìm và sửa lỗi chương trình."
    },
    {
      "id": "b15-tb-1",
      "question": "Lỗi logic (Logic error) trong chương trình có đặc điểm nào dưới đây?",
      "options": [
        "Chương trình báo lỗi đỏ và không thể chạy được",
        "Chương trình vẫn chạy được bình thường nhưng kết quả tính toán đưa ra bị SAI so với yêu cầu thực tế",
        "Bàn phím bị liệt",
        "Máy tính tự động sập nguồn"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 84): Lỗi logic là lỗi thuật toán hoặc công thức sai, chương trình không bị lỗi cú pháp nhưng kết quả xuất ra không chính xác.",
      "hint": "Chương trình vẫn chạy nhưng kết quả ra sai."
    },
    {
      "id": "b15-kho-1",
      "question": "Để kiểm thử và tìm lỗi cho chương trình tính chu vi hình chữ nhật, học sinh nên chọn các bộ dữ liệu kiểm thử (Test cases) như thế nào?",
      "options": [
        "Chỉ nhập chữ cái vào ô số",
        "Chỉ thử đúng 1 số duy nhất",
        "Chọn các trường hợp thông thường, trường hợp đặc biệt (chiều dài bằng chiều rộng) và trường hợp số âm để kiểm tra tính đúng đắn toàn diện",
        "Không cần kiểm tra dữ liệu"
      ],
      "correctAnswer": 2,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 84-85): Bộ dữ liệu kiểm thử tốt cần bao quát cả trường hợp biên và trường hợp đặc biệt.",
      "hint": "Thử nghiệm nhiều trường hợp, cả bình thường và đặc biệt."
    },
    {
      "id": "tin8-b15-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về Gỡ lỗi (Debugging) trong lập trình:",
      "options": [
        "a) Lỗi ngữ nghĩa (Logic Error) là lỗi làm chương trình chạy không báo lỗi nhưng cho kết quả sai",
        "b) Lỗi cú pháp (Syntax Error) được phần mềm phát hiện ngay khi dịch chương trình",
        "c) Khi chương trình không báo lỗi cú pháp thì chắc chắn kết quả tính toán sẽ luôn luôn đúng",
        "d) Thử chạy chương trình với nhiều bộ dữ liệu thử nghiệm (Test cases) giúp phát hiện lỗi tiềm ẩn"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 87): Không có lỗi cú pháp nhưng thuật toán sai sẽ sinh lỗi ngữ nghĩa (Logic Error), ra kết quả sai lệch.",
      "hint": "Hết lỗi cú pháp vẫn có thể sai về mặt thuật toán logic."
    },
    {
      "id": "tin8-b15-fb1",
      "type": "fill_blank",
      "question": "Quá trình tìm kiếm và sửa chữa các sai sót trong mã lệnh của chương trình được gọi là [1], còn bộ dữ liệu dùng để kiểm tra tính đúng đắn gọi là [2].",
      "blankAnswers": [
        "gỡ lỗi (Debugging)",
        "bộ thử (Test cases)"
      ],
      "wordBank": [
        "gỡ lỗi (Debugging)",
        "bộ thử (Test cases)",
        "mã hóa",
        "biên dịch",
        "cài đặt",
        "sao lưu"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 86): Gỡ lỗi (Debugging) là kĩ năng sống còn của lập trình viên; Test cases là các bộ thử nghiệm.",
      "hint": "Debugging là gỡ lỗi, Test cases là bộ dữ liệu thử nghiệm."
    },
    {
      "id": "tin8-b15-m1",
      "type": "matching",
      "question": "Nối loại lỗi lập trình ở cột bên trái với biểu hiện đặc trưng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Lỗi cú pháp (Syntax Error)"
        },
        {
          "id": "2",
          "text": "Lỗi ngữ nghĩa (Logic Error)"
        },
        {
          "id": "3",
          "text": "Lỗi khi chạy (Runtime Error)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Chương trình đang chạy bị dừng đột ngột (ví dụ chia cho số 0)"
        },
        {
          "id": "b",
          "text": "Viết sai chính tả từ khóa hoặc quên dấu ngoặc, chương trình không chạy được"
        },
        {
          "id": "c",
          "text": "Chương trình chạy êm xuôi nhưng tính chu vi lại ra công thức diện tích"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "c",
        "3": "a"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 86-88): Ba loại lỗi kinh điển: Syntax (cú pháp), Logic (thuật toán), Runtime (thực thi).",
      "hint": "Syntax: sai chữ; Logic: sai công thức; Runtime: đứt gánh giữa chừng (chia 0)."
    },
    {
      "id": "tin8-b15-mc1",
      "type": "multiple_choice",
      "question": "Khi viết chương trình tính diện tích hình chữ nhật `S = a * b`, bạn học sinh vô tình gõ nhầm thành `S = a + b`. Đây là loại lỗi nào?",
      "options": [
        "Lỗi cú pháp (Syntax Error)",
        "Lỗi ngữ nghĩa / lỗi logic (Logic Error)",
        "Lỗi phần cứng máy tính",
        "Lỗi mạng Internet"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 87): Máy tính vẫn tính toán bình thường (không vi phạm cú pháp) nhưng cho ra kết quả sai, đó là lỗi logic thuật toán.",
      "hint": "Công thức sai phép toán là lỗi logic."
    },
    {
      "id": "tin8-b15-mc2",
      "type": "multiple_choice",
      "question": "Khi chương trình gặp lỗi Runtime Error: \"ZeroDivisionError: division by zero\", nguyên nhân là do đâu?",
      "options": [
        "Bộ nhớ máy tính còn trống 0 byte",
        "Máy tính chưa cài đặt phần mềm diệt virus",
        "Chương trình thực hiện phép chia cho số 0 trong quá trình tính toán",
        "Người lập trình viết sai tên hàm in kết quả"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 87): Trong toán học và máy tính, phép chia cho số 0 là không xác định nên hệ thống báo lỗi dừng khẩn cấp.",
      "hint": "Phép toán chia cho số 0 là điều cấm kị."
    },
    {
      "id": "tin8-b15-mc3",
      "type": "multiple_choice",
      "question": "Một phương pháp gỡ lỗi thủ công rất hữu hiệu là gì?",
      "options": [
        "Đập mạnh vào bàn phím máy tính",
        "Tắt màn hình và đi ngủ",
        "Xóa toàn bộ mã nguồn viết lại từ đầu mà không cần đọc lỗi",
        "Chèn các câu lệnh in giá trị trung gian của biến ra màn hình (print debug) để kiểm tra từng bước"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 88): Dùng lệnh in giá trị biến ở từng giai đoạn giúp lập trình viên biết lỗi bắt đầu xuất hiện từ dòng lệnh nào.",
      "hint": "In giá trị biến ra màn hình để theo dõi biến đổi dữ liệu."
    },
    {
      "id": "tin8-b15-mc4",
      "type": "multiple_choice",
      "question": "Khi kiểm thử một bài toán xét tam giác từ 3 cạnh a, b, c, bộ dữ liệu nào sau đây là bộ dữ liệu đặc biệt cần thử nghiệm?",
      "options": [
        "Các bộ số vi phạm bất đẳng thức tam giác (ví dụ 1, 2, 5) hoặc có số âm (-3, 4, 5)",
        "Chỉ thử một bộ duy nhất rồi nộp bài luôn",
        "Không cần thử dữ liệu nào",
        "Chỉ các số nguyên dương đẹp như 3, 4, 5"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 88): Cần thử nghiệm với dữ liệu biên, dữ liệu không hợp lệ để đảm bảo chương trình không bị sập.",
      "hint": "Thử các trường hợp đặc biệt và dữ liệu ngoại lệ."
    }
  ],
  "tin8-bai-16": [
    {
      "id": "b16-de-1",
      "question": "Ứng dụng của Tin học trong ngành Y tế bao gồm lĩnh vực nào nổi bật?",
      "options": [
        "Trồng trọt lúa nước thủ công",
        "Chỉ dùng để bật đèn phòng khám",
        "Chẩn đoán hình ảnh (chụp CT, MRI), hồ sơ bệnh án điện tử và phẫu thuật nội soi có robot hỗ trợ",
        "Đan lát mây tre truyền thống"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 87): Tin học ứng dụng sâu rộng trong y tế: quản lý bệnh án, phân tích hình ảnh X-quang, MRI bằng AI.",
      "hint": "Chẩn đoán hình ảnh và quản lý bệnh án."
    },
    {
      "id": "b16-tb-1",
      "question": "Ngày Quốc tế \"Phụ nữ và trẻ em gái trong ngành CNTT\" (Girls in ICT Day) có ý nghĩa gì?",
      "options": [
        "Khuyến khích bình đẳng giới và truyền cảm hứng cho nữ giới tham gia học tập, làm việc trong lĩnh vực công nghệ thông tin",
        "Chỉ tổ chức tại một quốc gia duy nhất",
        "Là ngày nghỉ lễ không dùng Internet",
        "Quy định chỉ có phụ nữ mới được dùng máy tính"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 90): Ngày Girls in ICT Day tôn vinh và thúc đẩy cơ hội bình đẳng giới cho nữ giới trong ngành công nghệ.",
      "hint": "Khuyến khích bình đẳng giới trong ngành CNTT."
    },
    {
      "id": "b16-kho-1",
      "question": "Ứng dụng của Internet vạn vật (IoT) và Tin học trong nông nghiệp công nghệ cao giúp người nông dân điều gì?",
      "options": [
        "Làm cho đất tự biến thành cát",
        "Máy tính tự động nấu ăn",
        "Không cần trồng cây mà vẫn có quả thu hoạch",
        "Tự động theo dõi độ ẩm đất, nhiệt độ và điều khiển hệ thống tưới tiêu chính xác từ xa qua điện thoại thông minh"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 8 KNTT (Trang 88): Cảm biến IoT đo độ ẩm, ánh sáng để kích hoạt hệ thống tưới tiêu thông minh giúp tiết kiệm nước và nâng cao năng suất.",
      "hint": "Tự động đo độ ẩm, tưới tiêu chính xác từ xa."
    },
    {
      "id": "tin8-b16-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về vai trò của Tin học với nghề nghiệp hiện đại:",
      "options": [
        "a) Tin học và công nghệ số được ứng dụng sâu rộng trong hầu hết mọi ngành nghề của xã hội",
        "b) Kĩ năng tin học văn phòng và an toàn dữ liệu là yêu cầu thiết yếu đối với người lao động tương lai",
        "c) Trí tuệ nhân tạo (AI) và tự động hóa sẽ loại bỏ hoàn toàn mọi nhu cầu lao động của con người",
        "d) Các ngành nghề mới như chuyên gia an ninh mạng, kĩ sư dữ liệu, lập trình viên AI đang có nhu cầu tuyển dụng rất lớn"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 90-92): Công nghệ số thay đổi phương thức làm việc nhưng không thể thay thế hoàn toàn con người; nó mở ra nhiều cơ hội việc làm mới.",
      "hint": "Tin học hỗ trợ và mở ra việc làm mới, không triệt tiêu con người."
    },
    {
      "id": "tin8-b16-fb1",
      "type": "fill_blank",
      "question": "Trong thời đại công nghệ số, việc trang bị kĩ năng [1] và khả năng [2] suốt đời là chìa khóa để thích nghi với thị trường việc làm thay đổi.",
      "blankAnswers": [
        "tin học",
        "tự học"
      ],
      "wordBank": [
        "tin học",
        "tự học",
        "may rủi",
        "trực tiếp",
        "thủ công",
        "chờ đợi"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 92): Năng lực số và tinh thần tự học suốt đời giúp học sinh thích ứng với kỷ nguyên mới.",
      "hint": "Kĩ năng tin học và tinh thần tự học."
    },
    {
      "id": "tin8-b16-m1",
      "type": "matching",
      "question": "Nối nghề nghiệp tin học ở cột bên trái với nhiệm vụ đặc trưng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Kĩ sư phát triển phần mềm"
        },
        {
          "id": "2",
          "text": "Chuyên gia an ninh mạng"
        },
        {
          "id": "3",
          "text": "Chuyên viên phân tích dữ liệu"
        },
        {
          "id": "4",
          "text": "Nhà thiết kế đồ họa (UI/UX)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Bảo vệ hệ thống máy tính và dữ liệu chống lại sự xâm nhập của tin tặc"
        },
        {
          "id": "b",
          "text": "Thiết kế giao diện đẹp mắt, thân thiện cho trang web và ứng dụng di động"
        },
        {
          "id": "c",
          "text": "Viết mã lệnh tạo ra các phần mềm, game, ứng dụng tiện ích"
        },
        {
          "id": "d",
          "text": "Khai phá và rút ra xu hướng thông tin hữu ích từ các tập dữ liệu lớn"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "a",
        "3": "d",
        "4": "b"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 91): Giới thiệu các nhóm nghề nghiệp công nghệ thông tin chủ chốt.",
      "hint": "Nối chuyên môn với công việc đặc thù."
    },
    {
      "id": "tin8-b16-mc1",
      "type": "multiple_choice",
      "question": "Để chuẩn bị tốt nhất cho nghề nghiệp tương lai trong kỷ nguyên số, ngay từ bậc THCS học sinh nên rèn luyện điều gì?",
      "options": [
        "Học thuộc lòng bảng mã nhị phân mà không cần thực hành",
        "Kĩ năng sử dụng máy tính an toàn, tư duy logic giải quyết vấn đề và năng lực tự học",
        "Không cần quan tâm đến công nghệ vì phần mềm đã tự làm hết",
        "Chỉ chơi game trực tuyến cả ngày để hiểu về công nghệ"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 92): Tư duy giải quyết vấn đề, kĩ năng an toàn số và tinh thần tự giác học hỏi là nền tảng vững chắc nhất.",
      "hint": "Rèn tư duy giải quyết vấn đề và năng lực số."
    },
    {
      "id": "tin8-b16-mc2",
      "type": "multiple_choice",
      "question": "Ngành nghề nào sau đây đòi hỏi sự kết hợp chặt chẽ giữa tư duy nghệ thuật thẩm mĩ và kĩ thuật lập trình giao diện?",
      "options": [
        "Nhân viên tiếp thị bán hàng trực tiếp",
        "Kế toán trưởng doanh nghiệp",
        "Kĩ thuật viên bảo trì đường dây cáp viễn thông",
        "Kĩ sư thiết kế trải nghiệm và giao diện người dùng (UI/UX Designer)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 91): UI/UX Designer kết hợp óc thẩm mĩ tạo giao diện đẹp mắt và tâm lí người dùng để tạo trải nghiệm ứng dụng tối ưu.",
      "hint": "UI/UX kết hợp nghệ thuật và công nghệ."
    },
    {
      "id": "tin8-b16-mc3",
      "type": "multiple_choice",
      "question": "Tại sao kĩ năng làm việc nhóm (Teamwork) và giao tiếp lại cực kì quan trọng đối với một lập trình viên phần mềm hiện đại?",
      "options": [
        "Vì lập trình viên không được phép tự gõ code một mình",
        "Vì các phần mềm lớn ngày nay rất phức tạp, cần hàng chục đến hàng trăm kĩ sư cùng phối hợp xây dựng các module khác nhau",
        "Để phân chia tiền thưởng đều nhau",
        "Vì công ty phần mềm bắt buộc mọi người phải ngồi nói chuyện cả ngày"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 8 KNTT (Trang 92): Phát triển phần mềm hiện đại là công việc tập thể quy mô lớn, đòi hỏi phối hợp nhịp nhàng giữa các thành viên.",
      "hint": "Phần mềm lớn đòi hỏi sự phối hợp của nhiều người."
    },
    {
      "id": "tin8-b16-mc4",
      "type": "multiple_choice",
      "question": "Chứng chỉ tin học quốc tế phổ biến nào sau đây giúp học sinh THCS chứng minh năng lực sử dụng máy tính và ứng dụng văn phòng chuẩn quốc tế?",
      "options": [
        "IC3 (Internet and Computing Core Certification) hoặc MOS",
        "SAT hoặc ACT",
        "IELTS hoặc TOEFL",
        "GMAT"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 8 KNTT (Trang 92): IC3 và MOS là các chứng chỉ tin học quốc tế uy tín dành cho học sinh, sinh viên.",
      "hint": "IC3 là chứng chỉ tin học quốc tế quen thuộc cho học sinh."
    }
  ]
};
