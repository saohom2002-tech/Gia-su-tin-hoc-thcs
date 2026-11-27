import { Question } from '../types/quiz';

export const QUESTIONS_GRADE_9: Record<string, Question[]> = {
  "tin9-bai-1": [
    {
      "id": "g9-b1-de-1",
      "question": "Thiết bị nào sau đây là thiết bị số thông minh có gắn bộ xử lí thông tin (CPU/Microcontroller)?",
      "options": [
        "Chiếc quạt cói",
        "Điện thoại thông minh, Robot hút bụi, Đồng hồ thông minh Smartwatch",
        "Bút bi truyền thống",
        "Cái bàn gỗ"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 5): Các thiết bị số hiện đại đều tích hợp bộ vi xử lí để tự động hoá hoạt động và xử lý dữ liệu.",
      "hint": "Thiết bị có vi mạch điện tử xử lý thông tin."
    },
    {
      "id": "g9-b1-tb-1",
      "question": "Máy tính và công nghệ thông tin giúp nâng cao hiệu quả trong lĩnh vực y tế như thế nào?",
      "options": [
        "Tự động sản xuất thuốc không cần kiểm nghiệm",
        "Chỉ dùng để bật tắt đèn bệnh viện",
        "Hỗ trợ chẩn đoán bệnh từ xa, phân tích hình ảnh MRI/CT bằng AI và quản lí hồ sơ bệnh án điện tử",
        "Thay thế hoàn toàn bác sĩ trong 100% ca bệnh"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Tin học đóng vai trò hỗ trợ bác sĩ chẩn đoán hình ảnh chính xác, lưu trữ bệnh án số và phẫu thuật robot chuẩn xác.",
      "hint": "Chẩn đoán hình ảnh, hồ sơ bệnh án điện tử."
    },
    {
      "id": "g9-b1-kho-1",
      "question": "Tác động tiêu cực của kỉ nguyên số đối với con người nếu sử dụng thiết bị số thiếu kiểm soát là gì?",
      "options": [
        "Làm cho thời gian trôi chậm lại",
        "Làm tăng tuổi thọ con người tự động",
        "Tự động chữa lành mọi bệnh tật",
        "Lối sống ít vận động, nguy cơ mắc các bệnh về mắt/cột sống, giảm tương tác xã hội thực tế và phụ thuộc công nghệ"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Lạm dụng thiết bị số gây hại sức khỏe thể chất và tâm lý, làm giảm giao tiếp trực tiếp trong gia đình và xã hội.",
      "hint": "Ít vận động, giảm tương tác xã hội, phụ thuộc công nghệ."
    },
    {
      "id": "tin9-b1-mc1",
      "type": "multiple_choice",
      "question": "Thiết bị thông minh (Smart Device) có đặc điểm nổi bật nào sau đây?",
      "options": [
        "Có khả năng xử lí thông tin, kết nối mạng và hoạt động tự chủ theo ngữ cảnh",
        "Có giá thành luôn đắt hơn mọi thiết bị thông thường",
        "Không thể kết nối với mạng Internet hoặc Bluetooth",
        "Chỉ hoạt động được khi cắm dây nguồn trực tiếp vào ổ điện 220V"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 5): Thiết bị thông minh là thiết bị điện tử có khả năng xử lí dữ liệu, kết nối truyền thông và tự chủ hoạt động thích ứng với môi trường.",
      "hint": "Khả năng xử lí dữ liệu, kết nối và tự chủ theo môi trường."
    },
    {
      "id": "tin9-b1-mc2",
      "type": "multiple_choice",
      "question": "Hệ sinh thái Internet vạn vật (Internet of Things - IoT) là gì?",
      "options": [
        "Một loại cáp quang biển tốc độ cao",
        "Một trang mạng xã hội dành riêng cho các kĩ sư công nghệ",
        "Mạng lưới kết nối các thiết bị thông minh với nhau qua Internet để thu thập và trao đổi dữ liệu",
        "Hệ thống phần mềm kế toán doanh nghiệp"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 6): IoT là mạng lưới vạn vật kết nối Internet, nơi các thiết bị cảm biến và máy móc thu thập, chia sẻ dữ liệu tự động.",
      "hint": "Mạng lưới kết nối vạn vật qua Internet."
    },
    {
      "id": "tin9-b1-mc3",
      "type": "multiple_choice",
      "question": "Thiết bị nào sau đây KHÔNG phải là một thiết bị thông minh?",
      "options": [
        "Chiếc quạt máy cơ truyền thống điều khiển bằng nút bấm cơ học",
        "Robot hút bụi tự động quét bản đồ nhà",
        "Đồng hồ thông minh (Smartwatch) theo dõi nhịp tim",
        "Điện thoại thông minh (Smartphone)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 5): Quạt cơ học chỉ hoạt động đơn thuần khi đóng ngắt mạch điện, không có bộ vi xử lí hay cảm biến thông minh.",
      "hint": "Thiết bị cơ học truyền thống không có chip xử lí thông minh."
    },
    {
      "id": "tin9-b1-mc4",
      "type": "multiple_choice",
      "question": "Trong ngôi nhà thông minh (Smart Home), khi trời tối đèn tự động bật sáng nhờ vào thành phần công nghệ nào?",
      "options": [
        "Công tắc cơ học gắn trên tường",
        "Bóng đèn sợi đốt",
        "Dây dẫn điện bọc nhựa",
        "Cảm biến ánh sáng kết hợp với bộ điều khiển vi xử lí"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 7): Cảm biến quang (ánh sáng) nhận biết mức độ sáng môi trường và truyền tín hiệu cho bộ vi xử lí ra lệnh bật đèn.",
      "hint": "Cảm biến nhận biết ánh sáng và vi điều khiển."
    },
    {
      "id": "tin9-b1-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về thiết bị thông minh và thế giới kĩ thuật số:",
      "options": [
        "a) Thiết bị thông minh có thể tương tác tự động với người dùng qua giọng nói hoặc cử chỉ",
        "b) Thành phố thông minh (Smart City) ứng dụng công nghệ số để quản lí giao thông, năng lượng và môi trường",
        "c) Mọi thiết bị điện gia dụng trong nhà cắm điện đều mặc nhiên là thiết bị thông minh",
        "d) Nguy cơ mất an toàn thông tin cá nhân tăng lên khi nhiều thiết bị IoT được kết nối vào Internet gia đình"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Thiết bị cắm điện thông thường nếu thiếu bộ vi xử lí và cảm biến giao tiếp mạng thì không phải thiết bị thông minh.",
      "hint": "Cần có chip xử lí và kết nối mạng mới là thiết bị thông minh."
    },
    {
      "id": "tin9-b1-fb1",
      "type": "fill_blank",
      "question": "Thiết bị thông minh là thiết bị điện tử có gắn bộ [1] và có khả năng kết nối [2] để trao đổi thông tin tự động.",
      "blankAnswers": [
        "vi xử lí",
        "mạng (Internet)"
      ],
      "wordBank": [
        "vi xử lí",
        "mạng (Internet)",
        "pin hóa học",
        "bánh răng cơ học",
        "màn hình cong",
        "loa thùng"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 5): Bộ vi xử lí và kết nối mạng là hai đặc trưng cốt lõi của thiết bị thông minh.",
      "hint": "Có chip vi xử lí và kết nối mạng."
    },
    {
      "id": "tin9-b1-m1",
      "type": "matching",
      "question": "Nối ứng dụng công nghệ thông minh ở cột bên trái với lĩnh vực tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Vòng đeo tay thông minh theo dõi nồng độ SpO2 và giấc ngủ"
        },
        {
          "id": "2",
          "text": "Hệ thống đèn giao thông tự điều chỉnh thời gian theo mật độ xe"
        },
        {
          "id": "3",
          "text": "Hệ thống tưới nước tự động dựa trên cảm biến độ ẩm đất"
        },
        {
          "id": "4",
          "text": "Khóa cửa vân tay và nhận diện khuôn mặt"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Giao thông thông minh (Smart Traffic)"
        },
        {
          "id": "b",
          "text": "Nông nghiệp thông minh (Smart Agriculture)"
        },
        {
          "id": "c",
          "text": "Y tế và chăm sóc sức khỏe thông minh (Smart Healthcare)"
        },
        {
          "id": "d",
          "text": "Ngôi nhà thông minh và an ninh số (Smart Home)"
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
      "explanation": "SGK Tin học 9 KNTT (Trang 7): Ứng dụng rộng rãi của thế giới số trong y tế, giao thông, nông nghiệp và đời sống gia đình.",
      "hint": "Nối thiết bị với lĩnh vực đời sống cụ thể."
    },
    {
      "id": "tin9-b1-mc5",
      "type": "multiple_choice",
      "question": "Để phòng ngừa nguy cơ bị tin tặc xâm nhập vào hệ thống camera an ninh gia đình, biện pháp nào sau đây là quan trọng nhất?",
      "options": [
        "Lắp camera ở vị trí càng cao càng tốt",
        "Thay đổi mật khẩu mặc định của camera ngay khi lắp đặt và thường xuyên cập nhật phần mềm",
        "Tắt camera khi đi ngủ",
        "Dùng băng dính dán kín mắt camera cả ngày"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 8): Mật khẩu mặc định của nhà sản xuất (như admin/123456) rất dễ bị dò quét; đổi mật khẩu mạnh là nguyên tắc an toàn số số 1.",
      "hint": "Đổi mật khẩu mặc định thành mật khẩu mạnh."
    },
    {
      "id": "tin9-b1-mc6",
      "type": "multiple_choice",
      "question": "Khái niệm \"Dấu chân kĩ thuật số\" (Digital Footprint) ám chỉ điều gì?",
      "options": [
        "Kích thước bàn chân được đo bằng máy quét 3D",
        "Vết bẩn trên bề mặt bàn phím máy tính",
        "Phần mềm đếm số bước chân khi chạy bộ",
        "Mọi dấu vết dữ liệu, hoạt động trực tuyến mà một người để lại khi sử dụng Internet"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 9 KNTT (Trang 8): Digital Footprint là toàn bộ lịch sử truy cập web, bình luận, ảnh đăng tải, vị trí định vị... lưu lại trên không gian số.",
      "hint": "Dấu vết hoạt động trực tuyến của một người trên Internet."
    },
    {
      "id": "tin9-b1-mc7",
      "type": "multiple_choice",
      "question": "Công nghệ trợ lí ảo (Virtual Assistant như Siri, Google Assistant, Alexa) ứng dụng đột phá nào của công nghệ thông tin hiện đại?",
      "options": [
        "Công nghệ tản nhiệt bằng chất lỏng",
        "Trí tuệ nhân tạo (AI) và xử lí ngôn ngữ tự nhiên (NLP)",
        "Công nghệ in ấn siêu tốc",
        "Màn hình cảm ứng điện dung"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 6): Trợ lí ảo ứng dụng AI và công nghệ nhận dạng, xử lí ngôn ngữ tự nhiên để hiểu và trả lời giọng nói con người.",
      "hint": "Trí tuệ nhân tạo (AI) nhận diện giọng nói."
    },
    {
      "id": "tin9-b1-mc8",
      "type": "multiple_choice",
      "question": "Thuật ngữ 'Thiết bị thông minh' (Smart Device) trong thế giới kĩ thuật số được định nghĩa như thế nào?",
      "options": [
        "Thiết bị điện tử được tích hợp bộ vi xử lí, có khả năng kết nối mạng, tương tác với môi trường qua cảm biến và tự động xử lí thông tin",
        "Chỉ là các thiết bị có màn hình cảm ứng",
        "Thiết bị có giá bán trên 20 triệu đồng",
        "Thiết bị chỉ dùng bằng pin năng lượng mặt trời"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 6): Thiết bị thông minh có vi xử lí, cảm biến, kết nối mạng và khả năng tự động xử lí dữ liệu.",
      "hint": "Có bộ vi xử lí, cảm biến, kết nối mạng và khả năng tự động xử lí."
    },
    {
      "id": "tin9-b1-mc9",
      "type": "multiple_choice",
      "question": "Khái niệm 'Internet vạn vật' (IoT - Internet of Things) đề cập đến điều gì?",
      "options": [
        "Mạng lưới kết nối hàng tỉ đồ vật vật lí (đèn đường, xe cộ, tủ lạnh, camera...) lại với nhau qua Internet để thu thập và trao đổi dữ liệu tự động",
        "Một trang web bán hàng online toàn cầu",
        "Hệ thống cáp ngầm dưới đáy biển",
        "Một loại máy tính bảng đời mới"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT: IoT kết nối vạn vật trong đời sống vào không gian mạng số.",
      "hint": "Mạng lưới kết nối mọi đồ vật vật lí qua Internet."
    },
    {
      "id": "tin9-b1-mc10",
      "type": "multiple_choice",
      "question": "Ngôi nhà thông minh (Smart Home) đem lại những tiện ích công nghệ nổi bật nào cho người sử dụng?",
      "options": [
        "Tự động điều chỉnh nhiệt độ điều hòa, tự động tắt bật đèn theo sự hiện diện của con người, điều khiển thiết bị từ xa qua điện thoại hoặc giọng nói",
        "Tự động xây thêm phòng ngủ mới",
        "Làm cho tường nhà đổi màu mỗi phút",
        "Tự động in tiền giấy"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Smart Home tối ưu hóa sự tiện nghi, an toàn và tiết kiệm năng lượng thông qua cảm biến tự động hóa.",
      "hint": "Tự động hóa đèn, điều hòa và điều khiển qua điện thoại, giọng nói."
    },
    {
      "id": "tin9-b1-mc11",
      "type": "multiple_choice",
      "question": "Đặc điểm cơ bản của cuộc Cách mạng công nghiệp lần thứ tư (Cách mạng công nghiệp 4.0) là gì?",
      "options": [
        "Sự hội tụ và xóa nhòa ranh giới giữa các thế giới vật lí, kĩ thuật số và sinh học, với cốt lõi là AI, IoT, Dữ liệu lớn (Big Data) và Điện toán đám mây",
        "Sự ra đời của động cơ hơi nước",
        "Sự xuất hiện của dây chuyền sản xuất chạy bằng điện năng",
        "Sự phát minh ra bóng đèn dây tóc"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Công nghiệp 4.0 là cuộc cách mạng dựa trên nền tảng tích hợp số hóa sâu rộng với AI, IoT và Big Data.",
      "hint": "Hội tụ thế giới số, vật lí và sinh học với AI, IoT, Big Data."
    },
    {
      "id": "tin9-b1-mc12",
      "type": "multiple_choice",
      "question": "Ví dụ nào sau đây KHÔNG PHẢI là một thiết bị thông minh?",
      "options": [
        "Chiếc quạt máy cơ xoay tút năng bấm nút số cơ học",
        "Đồng hồ thông minh theo dõi nhịp tim (Smartwatch)",
        "Robot hút bụi tự động lập bản đồ phòng",
        "Khóa cửa thông minh nhận diện khuôn mặt"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Quạt cơ học truyền thống không có chip vi xử lí hay cảm biến thông minh.",
      "hint": "Quạt cơ bấm nút thông thường không có bộ vi xử lí."
    },
    {
      "id": "tin9-b1-mc13",
      "type": "multiple_choice",
      "question": "Điện toán đám mây (Cloud Computing) cho phép người dùng làm gì?",
      "options": [
        "Truy cập, lưu trữ dữ liệu và sử dụng các phần mềm máy chủ từ xa thông qua mạng Internet mà không cần cài đặt nặng nề trên máy tính cá nhân",
        "Dự báo chính xác 100% hình dạng đám mây trên trời",
        "Ngăn chặn hoàn toàn hiện tượng mưa bão",
        "Làm mát phần cứng máy tính bằng hơi nước"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Điện toán đám mây cung cấp tài nguyên tính toán và lưu trữ linh hoạt qua Internet (như Google Drive, OneDrive).",
      "hint": "Lưu trữ và sử dụng phần mềm từ xa qua Internet."
    },
    {
      "id": "tin9-b1-mc14",
      "type": "multiple_choice",
      "question": "Trợ lí ảo thông minh (như Siri, Google Assistant, Alexa) ứng dụng công nghệ đột phá nào?",
      "options": [
        "Trí tuệ nhân tạo (AI) và công nghệ xử lí ngôn ngữ tự nhiên (NLP) để hiểu và phản hồi giọng nói của người dùng",
        "Công nghệ sóng siêu âm phá đá",
        "Hệ thống định vị bánh răng cơ học",
        "Chỉ là các đoạn băng ghi âm phát lại ngẫu nhiên"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Trợ lí ảo nhận diện giọng nói và suy luận câu trả lời nhờ mô hình AI học sâu và NLP.",
      "hint": "Trí tuệ nhân tạo (AI) và xử lí ngôn ngữ tự nhiên (NLP)."
    },
    {
      "id": "tin9-b1-mc15",
      "type": "multiple_choice",
      "question": "Thách thức lớn nhất đối với xã hội loài người khi bước vào thế giới kĩ thuật số là gì?",
      "options": [
        "Nguy cơ mất an toàn thông tin cá nhân, rò rỉ dữ liệu mật, tội phạm công nghệ cao và nguy cơ phụ thuộc quá mức vào thiết bị số",
        "Máy tính tiêu tốn quá nhiều oxy trong không khí",
        "Giá sách giấy ngày càng đắt đỏ",
        "Không có bất kì thách thức nào"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "An ninh mạng, bảo vệ đời tư và văn hóa số là bài toán sống còn trong kỷ nguyên số.",
      "hint": "An toàn thông tin, bảo mật dữ liệu và tội phạm mạng."
    }
  ],
  "tin9-bai-2": [
    {
      "id": "g9-b2-de-1",
      "question": "Bốn tiêu chí cơ bản để đánh giá chất lượng thông tin trong giải quyết vấn đề gồm những gì?",
      "options": [
        "Tính mới (cập nhật), Tính chính xác, Tính đầy đủ, Tính sử dụng được",
        "Tốc độ tải, Dung lượng lớn, Nhạc nền to, Đẹp mắt",
        "Chữ in hoa, Đắt tiền, Quen thuộc, Nhiều hình vẽ",
        "Độ dài, Màu sắc, Số lượt like, Tác giả ẩn danh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 9): 4 tiêu chí cốt lõi đánh giá thông tin là: Tính mới, Tính chính xác, Tính đầy đủ và Tính sử dụng được.",
      "hint": "Mới, chính xác, đầy đủ, sử dụng được."
    },
    {
      "id": "g9-b2-tb-1",
      "question": "Em cần xem dự báo thời tiết cho chuyến dã ngoại vào ngày mai. Nguồn tin nào sau đây có TÍNH CHÍNH XÁC VÀ ĐÁNG TIN CẬY CAO NHẤT?",
      "options": [
        "Trang web bán hàng quảng cáo áo mưa",
        "Một bình luận ẩn danh trên diễn đàn mạng xã hội",
        "Cổng thông tin điện tử của Trung tâm Dự báo Khí tượng Thủy văn Quốc gia (.gov.vn)",
        "Tin đồn truyền miệng của nhóm bạn"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Cơ quan khí tượng nhà nước (.gov.vn) có chuyên môn nghiệp vụ và hệ thống đo lường hiện đại nên thông tin có độ tin cậy cao nhất.",
      "hint": "Nguồn tin chính thống của cơ quan chuyên môn nhà nước (.gov.vn)."
    },
    {
      "id": "g9-b2-kho-1",
      "question": "Một bản tin thông báo lịch thi nhưng thiếu thông tin về \"Địa điểm thi và giờ bắt đầu\", bản tin đó vi phạm tiêu chí nào trong 4 tiêu chí chất lượng thông tin?",
      "options": [
        "Tính đầy đủ",
        "Tính mới",
        "Tính bảo mật",
        "Tính sử dụng được"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "Bản tin thiếu các yếu tố cốt lõi (thời gian, địa điểm) để thí sinh có thể đi thi, nên vi phạm tiêu chí Tính đầy đủ.",
      "hint": "Thiếu thông tin quan trọng nên không đầy đủ."
    },
    {
      "id": "tin9-b2-mc1",
      "type": "multiple_choice",
      "question": "Trong quá trình giải quyết vấn đề, thông tin có vai trò cốt lõi như thế nào?",
      "options": [
        "Không có vai trò gì quan trọng",
        "Làm tăng thêm độ phức tạp và khó khăn cho người giải quyết",
        "Chỉ có tác dụng giải trí sau khi vấn đề đã được giải quyết xong",
        "Là căn cứ để phân tích tình hình, đưa ra các phương án khả thi và ra quyết định tối ưu"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 10): Thông tin đầy đủ, chính xác giúp làm rõ bản chất vấn đề, đề xuất giải pháp và ra quyết định đúng đắn.",
      "hint": "Thông tin là cơ sở để ra quyết định đúng đắn."
    },
    {
      "id": "tin9-b2-mc2",
      "type": "multiple_choice",
      "question": "Quy trình thu thập thông tin để giải quyết một bài toán thực tế thường trải qua mấy bước cơ bản?",
      "options": [
        "8 bước phức tạp chỉ có chuyên gia làm được",
        "4 bước: Xác định nhu cầu thông tin -> Tìm kiếm, thu thập -> Xử lí, đánh giá -> Sử dụng ra quyết định",
        "1 bước: Lên mạng tìm bài giải có sẵn chép lại",
        "2 bước: Đoán mò kết quả rồi viết báo cáo"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 11): 4 bước khoa học: 1. Xác định nhu cầu; 2. Thu thập; 3. Xử lí đánh giá; 4. Vận dụng.",
      "hint": "Quy trình 4 bước từ xác định nhu cầu đến ra quyết định."
    },
    {
      "id": "tin9-b2-mc3",
      "type": "multiple_choice",
      "question": "Khi thu thập thông tin về giá vé và lịch trình xe bus để tổ chức buổi dã ngoại cho lớp, nguồn thông tin nào sau đây là sơ cấp (nguyên bản, trực tiếp)?",
      "options": [
        "Một bình luận vu vơ trên diễn đàn từ 5 năm trước",
        "Dự đoán thời tiết trên báo",
        "Ứng dụng tra cứu chính thức của công ty xe buýt (như BusMap) hoặc bảng thông báo tại trạm xe",
        "Tin đồn truyền miệng của một người bạn nghe người khác kể lại"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 12): Nguồn sơ cấp là dữ liệu gốc do đơn vị cung cấp dịch vụ trực tiếp phát hành.",
      "hint": "Nguồn thông tin trực tiếp từ đơn vị quản lí dịch vụ."
    },
    {
      "id": "tin9-b2-mc4",
      "type": "multiple_choice",
      "question": "Nếu đưa ra quyết định dựa trên thông tin sai lệch, hậu quả nghiêm trọng nhất có thể là gì?",
      "options": [
        "Bị cắt kết nối điện thoại",
        "Kế hoạch bị thất bại, lãng phí thời gian, tiền bạc và công sức",
        "Máy tính bị nhiễm virus ngay lập tức",
        "Được khen thưởng sáng tạo"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 11): Thông tin sai lệch dẫn đến quyết định sai lầm, gây thiệt hại nghiêm trọng về thời gian, vật chất và uy tín.",
      "hint": "Thông tin sai dẫn đến quyết định sai lầm và thiệt hại."
    },
    {
      "id": "tin9-b2-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về vai trò của thông tin trong giải quyết vấn đề:",
      "options": [
        "a) Càng có nhiều thông tin thì quyết định đưa ra luôn luôn đúng 100% mà không cần chọn lọc",
        "b) Thông tin cần thu thập phải phù hợp trực tiếp với mục tiêu giải quyết vấn đề",
        "c) Có thể sử dụng bảng tính điện tử hoặc biểu đồ để xử lí và so sánh dữ liệu thu thập được",
        "d) Việc kiểm chứng nguồn tin giúp loại bỏ các thông tin sai lệch, lỗi thời"
      ],
      "trueFalseAnswers": [
        false,
        true,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 11): Quá nhiều thông tin rác không được chọn lọc sẽ gây nhiễu loạn, dẫn đến phán đoán sai lầm.",
      "hint": "Thông tin cần được chọn lọc kĩ lưỡng chứ không phải càng nhiều càng tốt."
    },
    {
      "id": "tin9-b2-fb1",
      "type": "fill_blank",
      "question": "Để giải quyết một vấn đề hiệu quả, trước hết ta cần xác định rõ [1] thông tin cần tìm, sau đó tìm kiếm và [2] độ tin cậy của các nguồn thông tin đó.",
      "blankAnswers": [
        "nhu cầu",
        "kiểm chứng"
      ],
      "wordBank": [
        "nhu cầu",
        "kiểm chứng",
        "xóa bỏ",
        "sao chép",
        "bảo mật",
        "mã hóa"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 11): Xác định nhu cầu thông tin và kiểm chứng nguồn gốc dữ liệu.",
      "hint": "Xác định nhu cầu và kiểm chứng thông tin."
    },
    {
      "id": "tin9-b2-m1",
      "type": "matching",
      "question": "Nối bước trong quy trình giải quyết vấn đề ở cột bên trái với hành động cụ thể ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Bước 1: Xác định nhu cầu thông tin"
        },
        {
          "id": "2",
          "text": "Bước 2: Tìm kiếm và thu thập"
        },
        {
          "id": "3",
          "text": "Bước 3: Xử lí và đánh giá dữ liệu"
        },
        {
          "id": "4",
          "text": "Bước 4: Sử dụng thông tin ra quyết định"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Tra cứu trên các website uy tín, khảo sát thực tế hoặc phỏng vấn"
        },
        {
          "id": "b",
          "text": "Lập bảng Excel tính toán chi phí và vẽ biểu đồ so sánh các phương án"
        },
        {
          "id": "c",
          "text": "Lựa chọn phương án tối ưu nhất và bắt tay thực hiện kế hoạch"
        },
        {
          "id": "d",
          "text": "Lập danh sách các câu hỏi: Cần biết điều gì? Cần số liệu nào?"
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
      "explanation": "SGK Tin học 9 KNTT (Trang 11, 12): Bốn bước chặt chẽ trong thu thập và ứng dụng thông tin giải quyết vấn đề.",
      "hint": "Nối từng bước với công việc cụ thể của bước đó."
    },
    {
      "id": "tin9-b2-mc5",
      "type": "multiple_choice",
      "question": "Khi tìm kiếm thông tin về lịch sử địa phương, nguồn nào sau đây là nguồn thông tin đáng tin cậy nhất?",
      "options": [
        "Các bài đăng ẩn danh trên diễn đàn giải trí",
        "Ý kiến võ đoán của một bạn học sinh lớp bên",
        "Sách Lịch sử Đảng bộ địa phương hoặc bảo tàng lịch sử tỉnh/thành phố",
        "Video ngắn chưa kiểm duyệt trên TikTok"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 12): Tài liệu lưu trữ lịch sử chính thống của bảo tàng và nhà xuất bản uy tín là nguồn căn cứ chuẩn xác.",
      "hint": "Bảo tàng và sách lịch sử chính thống."
    },
    {
      "id": "tin9-b2-mc6",
      "type": "multiple_choice",
      "question": "Một bạn học sinh lập bảng tính Excel để so sánh mức tiêu hao điện năng của các loại bóng đèn: sợi đốt, huỳnh quang và LED. Bạn đang thực hiện bước nào?",
      "options": [
        "Đưa ra kết luận cuối cùng",
        "Xác định bài toán",
        "Nghiệm thu công trình",
        "Xử lí và phân tích dữ liệu"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 12): Tổng hợp số liệu vào bảng tính để tính toán, so sánh thuộc bước Xử lí và đánh giá thông tin.",
      "hint": "Dùng bảng tính để phân tích, so sánh số liệu."
    },
    {
      "id": "tin9-b2-mc7",
      "type": "multiple_choice",
      "question": "Để thu thập ý kiến đóng góp của tất cả các bạn học sinh trong khối về việc tổ chức hội trại, công cụ số nào sau đây là tiện lợi và nhanh chóng nhất?",
      "options": [
        "Tạo biểu mẫu khảo sát trực tuyến (Google Forms / Microsoft Forms)",
        "Đến tận nhà từng bạn để hỏi trực tiếp vào ban đêm",
        "Gặp riêng từng bạn vào giờ ra chơi ghi vào sổ tay",
        "Gửi thư tay qua đường bưu điện cho từng bạn"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 13): Google Forms cho phép tạo bảng hỏi trực tuyến, gửi qua liên kết và tự động tổng hợp kết quả tức thì.",
      "hint": "Biểu mẫu khảo sát trực tuyến Google Forms."
    },
    {
      "id": "tin9-b2-mc8",
      "type": "multiple_choice",
      "question": "Quy trình giải quyết vấn đề với sự trợ giúp của thông tin và máy tính gồm các bước cơ bản nào?",
      "options": [
        "Xác định vấn đề -> Thu thập & Tìm kiếm thông tin -> Xử lí & Phân tích thông tin -> Đưa ra giải pháp & Đánh giá kết quả",
        "Bấm phím nguồn tắt máy tính",
        "Chỉ cần đoán mò mà không cần tìm hiểu",
        "Nhờ người khác làm hộ từ đầu đến cuối"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 10): 4 bước khoa học: Xác định vấn đề, Thu thập thông tin, Xử lí phân tích và Đưa ra quyết định tối ưu.",
      "hint": "Xác định, thu thập, phân tích và đưa ra giải pháp."
    },
    {
      "id": "tin9-b2-mc9",
      "type": "multiple_choice",
      "question": "Tại sao việc xác định rõ ràng 'Mục tiêu thông tin cần tìm' là bước quan trọng đầu tiên khi giải quyết vấn đề?",
      "options": [
        "Giúp định hướng đúng trọng tâm tìm kiếm, tránh lan man, lãng phí thời gian và lạc vào biển thông tin rác trên mạng",
        "Để làm cho bài văn dài hơn",
        "Để tăng số trang in",
        "Không có vai trò gì quan trọng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Biết rõ mình cần thông tin gì giúp đặt từ khóa chính xác và chọn lọc dữ liệu hiệu quả.",
      "hint": "Tránh lan man, tiết kiệm thời gian và định hướng đúng trọng tâm."
    },
    {
      "id": "tin9-b2-mc10",
      "type": "multiple_choice",
      "question": "Tình huống: Em cần lựa chọn một chiếc máy tính xách tay phù hợp để học tập với ngân sách 12 triệu đồng. Thông tin nào sau đây là QUAN TRỌNG NHẤT cần thu thập?",
      "options": [
        "Cấu hình phần cứng (CPU, RAM, SSD), mức giá, độ bền pin và chính sách bảo hành của các dòng máy trong tầm giá",
        "Màu sắc của vỏ hộp bìa carton",
        "Tên của người giao hàng",
        "Bài hát quảng cáo của hãng máy tính"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Cấu hình, giá bán thực tế và độ bền là tiêu chí kĩ thuật quyết định hiệu năng phục vụ học tập.",
      "hint": "Cấu hình kĩ thuật (CPU, RAM, ổ cứng), giá thành và bảo hành."
    },
    {
      "id": "tin9-b2-mc11",
      "type": "multiple_choice",
      "question": "Sử dụng bảng tính (Excel/Sheets) để hỗ trợ so sánh và đưa ra quyết định mua hàng giúp ích gì?",
      "options": [
        "Liệt kê các tiêu chí so sánh (giá, cấu hình, ưu nhược điểm) vào từng cột hàng một cách trực quan, khoa học để chấm điểm lựa chọn",
        "Tự động thanh toán tiền mà không cần có tiền",
        "Giao hàng tức thì trong 1 giây",
        "Làm tăng giá tiền sản phẩm"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Bảng đối chiếu tiêu chí (Decision Matrix) là công cụ ra quyết định định lượng chuyên nghiệp.",
      "hint": "Lập ma trận đối chiếu tiêu chuẩn rõ ràng và khoa học."
    },
    {
      "id": "tin9-b2-mc12",
      "type": "multiple_choice",
      "question": "Khi thông tin thu thập được từ hai nguồn uy tín có sự MÂU THUẪN về số liệu, bước xử lí đúng đắn là gì?",
      "options": [
        "Tiếp tục tìm kiếm nguồn thứ ba độc lập có thẩm quyền cao hơn, kiểm tra thời điểm khảo sát và phương pháp thu thập số liệu của từng nguồn",
        "Chọn bừa một nguồn mình thích",
        "Cộng hai số liệu lại chia đôi",
        "Bỏ cuộc không làm nữa"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Kiểm chứng phương pháp luận và tìm nguồn trọng tài uy tín cao hơn là phương pháp khoa học chuẩn mực.",
      "hint": "Tìm nguồn độc lập thứ ba có thẩm quyền và kiểm tra thời điểm khảo sát."
    },
    {
      "id": "tin9-b2-mc13",
      "type": "multiple_choice",
      "question": "Thế nào là 'Thông tin thứ cấp' (Secondary Information)?",
      "options": [
        "Thông tin được thu thập, tổng hợp và phân tích lại từ các tài liệu hoặc nghiên cứu sơ cấp đã công bố trước đó của người khác",
        "Thông tin bị hỏng một nửa",
        "Thông tin chỉ lưu trên USB cũ",
        "Thông tin có độ phân giải thấp"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Thông tin sơ cấp là dữ liệu thu thập trực tiếp; thứ cấp là dữ liệu đã qua xử lí tổng hợp từ nguồn khác.",
      "hint": "Thông tin tổng hợp, phân tích từ các nguồn đã công bố."
    },
    {
      "id": "tin9-b2-mc14",
      "type": "multiple_choice",
      "question": "Công cụ lập biểu đồ tư duy (như XMind, MindMup) hỗ trợ đắc lực nhất cho giai đoạn nào khi giải quyết vấn đề?",
      "options": [
        "Giai đoạn phân tích, chia nhỏ vấn đề thành các nhánh khía cạnh và động não (Brainstorming) tìm kiếm ý tưởng giải pháp",
        "Giai đoạn đóng gói sản phẩm gửi bưu điện",
        "Giai đoạn thanh toán hóa đơn",
        "Giai đoạn in báo cáo"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Sơ đồ tư duy mở rộng cấu trúc tư duy đa chiều và phân rã vấn đề phức tạp thành các bài toán nhỏ.",
      "hint": "Phân tích, chia nhỏ vấn đề và động não tìm ý tưởng."
    },
    {
      "id": "tin9-b2-mc15",
      "type": "multiple_choice",
      "question": "Sau khi thực hiện giải pháp, bước ĐÁNH GIÁ KẾT QUẢ có ý nghĩa gì?",
      "options": [
        "Kiểm tra xem giải pháp có đạt được mục tiêu ban đầu đặt ra hay không, rút ra bài học kinh nghiệm để hoàn thiện cho các lần sau",
        "Chỉ để chấm điểm lấy thành tích",
        "Xóa bỏ toàn bộ dữ liệu dự án",
        "Không có tác dụng gì"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Đánh giá kết quả khép lại chu trình giải quyết vấn đề và tạo nền tảng cho sự cải tiến liên tục.",
      "hint": "Kiểm tra mức độ đạt mục tiêu và rút kinh nghiệm cải tiến."
    }
  ],
  "tin9-bai-3": [
    {
      "id": "g9-b3-de-1",
      "question": "Khi tìm kiếm thông tin trên Internet để phục vụ bài thuyết trình, 4 tiêu chí cốt lõi để đánh giá chất lượng thông tin là gì?",
      "options": [
        "Độ dài bài viết, số lượng ảnh, tên miền đắt tiền và số lượt thích ảo.",
        "Chỉ cần thông tin có nhiều người chia sẻ nhất trên mạng xã hội.",
        "Tính mới, tính chính xác, tính đầy đủ và tính sử dụng được.",
        "Thông tin được viết bằng chữ in hoa toàn bộ."
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 12): Bốn tiêu chí đánh giá chất lượng thông tin gồm: Tính mới (thời sự), Tính chính xác (nguồn uy tín), Tính đầy đủ (toàn diện) và Tính sử dụng được (phù hợp mục tiêu).",
      "hint": "Mới - Chính xác - Đầy đủ - Sử dụng được."
    },
    {
      "id": "g9-b3-tb-1",
      "question": "Để kiểm tra tính xác thực của một thông tin y tế giật gân lan truyền trên mạng xã hội, cách xử lý nào sau đây là KHOA HỌC nhất?",
      "options": [
        "Đối chiếu thông tin đó với cổng thông tin chính thức của Bộ Y tế, Tổ chức Y tế Thế giới (WHO) hoặc các bài báo khoa học uy tín.",
        "Nhắn tin cho bạn bè yêu cầu làm theo ngay lập tức.",
        "Chia sẻ ngay lên trang cá nhân kèm lời cảnh báo khẩn cấp.",
        "Tin tưởng 100% vì bài viết có hàng nghìn lượt thả tim."
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 14): Cần đối chiếu với các nguồn tin chính thống, có kiểm chứng của cơ quan chuyên môn uy tín.",
      "hint": "Đối chiếu với nguồn chính thống của Bộ Y tế hoặc WHO."
    },
    {
      "id": "g9-b3-kho-1",
      "question": "Dấu hiệu nào sau đây cho thấy một trang tin tức có khả năng cao là trang \"tin giả\" (Fake News)?",
      "options": [
        "Có bài viết được ký tên nhà nghiên cứu rõ ràng và đăng trên tên miền cơ quan chính phủ (.gov.vn).",
        "Có dữ liệu thống kê từ Viện Thống kê Quốc gia kèm biểu đồ chi tiết.",
        "Có ghi rõ ngày giờ xuất bản và cập nhật chính xác.",
        "Tiêu đề giật gân câu khách (Clickbait), lỗi chính tả nhiều, không có tên tác giả và trích dẫn nguồn mập mờ \"theo một chuyên gia giấu tên\"."
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Tin giả thường có tiêu đề câu view gây sốc, nội dung sai ngữ pháp, tác giả nặc danh và thiếu bằng chứng khoa học cụ thể.",
      "hint": "Tiêu đề giật gân, thiếu tên tác giả và nguồn mập mờ."
    },
    {
      "id": "tin9-b3-mc1",
      "type": "multiple_choice",
      "question": "Năm tiêu chí cơ bản để đánh giá chất lượng của thông tin số bao gồm những tiêu chí nào?",
      "options": [
        "Số lượt thích, số lượt chia sẻ, số lượt bình luận, tên tài khoản và ảnh đại diện",
        "Tính chính xác, tính mới (cập nhật), tính đầy đủ, tính sử dụng được và độ tin cậy",
        "Độ dài văn bản, số lượng hình ảnh, dung lượng tệp tin, phông chữ và màu nền",
        "Tốc độ tải trang, giá tiền mua tệp tin, ngôn ngữ tiếng Anh và hệ điều hành"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 15): Năm tiêu chuẩn vàng thẩm định thông tin: Chính xác, Cập nhật, Đầy đủ, Sử dụng được và Độ tin cậy.",
      "hint": "Chính xác, mới, đầy đủ, dùng được và tin cậy."
    },
    {
      "id": "tin9-b3-mc2",
      "type": "multiple_choice",
      "question": "Tiêu chí \"Tính sử dụng được\" (Relevance) của thông tin có nghĩa là gì?",
      "options": [
        "Thông tin có thể dùng để bán lấy tiền",
        "Văn bản có thể in ra giấy A4 được",
        "Tệp tin có thể mở được trên mọi máy tính mà không bị lỗi",
        "Thông tin phải phù hợp, liên quan trực tiếp đến mục đích và bài toán đang cần giải quyết"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 16): Thông tin dù chính xác đến đâu nhưng lạc đề, không phục vụ mục tiêu cần giải quyết thì không có giá trị sử dụng.",
      "hint": "Phù hợp và đáp ứng đúng mục tiêu công việc."
    },
    {
      "id": "tin9-b3-mc3",
      "type": "multiple_choice",
      "question": "Khi đọc một bài viết khuyến cáo uống nước lá cây để chữa dứt điểm bệnh ung thư mà không có bất kì kiểm nghiệm y khoa nào, bài viết đó vi phạm tiêu chí nào nghiêm trọng nhất?",
      "options": [
        "Tốc độ truyền dữ liệu",
        "Độ tin cậy và tính chính xác khoa học",
        "Tính cập nhật thời gian",
        "Quy chuẩn phông chữ"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 16): Không có căn cứ khoa học, không được cơ quan y tế công nhận là thông tin thiếu độ tin cậy và sai lệch nghiêm trọng.",
      "hint": "Thiếu cơ sở khoa học và độ tin cậy."
    },
    {
      "id": "tin9-b3-mc4",
      "type": "multiple_choice",
      "question": "Một bài báo hướng dẫn phòng chống bão lũ nhưng được viết từ năm 2010 đã bị thay đổi bởi quy định mới năm 2026. Thông tin này bị hạn chế bởi tiêu chí nào?",
      "options": [
        "Tính mới / tính cập nhật (Currency)",
        "Tính thẩm mĩ",
        "Tính bí mật",
        "Tính hấp dẫn"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 15): Thông tin quá cũ, đã bị quy định mới thay thế thì không còn tính cập nhật (lỗi thời).",
      "hint": "Thông tin đã quá cũ là thiếu tính cập nhật."
    },
    {
      "id": "tin9-b3-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về thực hành đánh giá chất lượng thông tin:",
      "options": [
        "a) Tên miền có đuôi .gov.vn là cổng thông tin của các cơ quan nhà nước tại Việt Nam",
        "b) Thông tin được chia sẻ nhiều nhất trên mạng xã hội luôn là thông tin có chất lượng cao nhất",
        "c) Khi đánh giá độ tin cậy, cần kiểm tra danh tính và chuyên môn của tác giả bài viết",
        "d) Một bảng số liệu tài chính không ghi rõ đơn vị tính (đồng hay USD) là thiếu tính đầy đủ"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Lượt tương tác mạng xã hội nhiều không đồng nghĩa với thông tin chính xác, tin giật gân thường lan truyền nhanh nhưng sai lệch.",
      "hint": "Lượt like trên mạng không chứng minh thông tin là đúng."
    },
    {
      "id": "tin9-b3-fb1",
      "type": "fill_blank",
      "question": "Để đánh giá độ tin cậy của thông tin, ta cần xác định rõ [1] bài viết là ai và [2] xuất bản thông tin đó có phải là cơ quan uy tín hay không.",
      "blankAnswers": [
        "tác giả",
        "tổ chức (nguồn)"
      ],
      "wordBank": [
        "tác giả",
        "tổ chức (nguồn)",
        "người đọc",
        "máy chủ",
        "bình luận viên",
        "nhà tài trợ"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 15): Tác giả và tổ chức xuất bản là hai căn cứ xác định độ tin cậy của tài liệu.",
      "hint": "Kiểm tra ai là tác giả và tổ chức nào xuất bản."
    },
    {
      "id": "tin9-b3-m1",
      "type": "matching",
      "question": "Nối tiêu chí đánh giá thông tin ở cột bên trái với câu hỏi kiểm tra tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Tính chính xác (Accuracy)"
        },
        {
          "id": "2",
          "text": "Tính cập nhật (Currency)"
        },
        {
          "id": "3",
          "text": "Tính đầy đủ (Completeness)"
        },
        {
          "id": "4",
          "text": "Tính sử dụng được (Relevance)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Thông tin này được xuất bản vào ngày tháng năm nào? Có phiên bản mới hơn không?"
        },
        {
          "id": "b",
          "text": "Thông tin này có giúp ích trực tiếp cho bài tập nghiên cứu của em không?"
        },
        {
          "id": "c",
          "text": "Dữ liệu có số liệu chứng minh rõ ràng và logic không bị mâu thuẫn không?"
        },
        {
          "id": "d",
          "text": "Số liệu có bao quát hết các khía cạnh cần thiết hay bị cắt xén một phần?"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "a",
        "3": "d",
        "4": "b"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 15, 16): Bộ câu hỏi kiểm tra tương ứng với từng tiêu chuẩn đánh giá chất lượng thông tin.",
      "hint": "Nối tiêu chuẩn với câu hỏi kiểm tra tương ứng."
    },
    {
      "id": "tin9-b3-mc5",
      "type": "multiple_choice",
      "question": "Dấu hiệu nào sau đây cảnh báo một bài viết có thể chứa thông tin thiên vị hoặc không khách quan?",
      "options": [
        "Bài viết có trích dẫn nguồn số liệu từ Tổng cục Thống kê",
        "Tác giả cung cấp nhiều bằng chứng từ cả hai phía đối lập",
        "Bài viết chỉ đưa ra một góc nhìn duy nhất, sử dụng nhiều từ ngữ cảm tính thái quá và nhằm mục đích quảng cáo bán hàng",
        "Ngôn từ trung lập, khách quan, có trích dẫn tài liệu tham khảo"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 17): Ngôn từ cảm tính, chỉ khen một chiều để bán hàng là dấu hiệu của thông tin thiên vị, thiếu khách quan.",
      "hint": "Bài viết một chiều mang mục đích bán hàng."
    },
    {
      "id": "tin9-b3-mc6",
      "type": "multiple_choice",
      "question": "Phương pháp đối chiếu thông tin (Cross-checking) trong đánh giá chất lượng dữ liệu được thực hiện như thế nào?",
      "options": [
        "So sánh cùng một thông tin trên nhiều nguồn độc lập và có uy tín khác nhau để tìm sự trùng khớp",
        "Đọc lướt qua một lần rồi thôi",
        "Kiểm tra xem thông tin có chứa chữ X hay không",
        "Chỉ tin tưởng vào một trang web duy nhất"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 17): Đối chiếu chéo từ 2-3 nguồn độc lập giúp khẳng định tính xác thực của sự kiện.",
      "hint": "So sánh cùng nội dung trên nhiều nguồn độc lập."
    },
    {
      "id": "tin9-b3-mc7",
      "type": "multiple_choice",
      "question": "Khi tìm kiếm tài liệu học tập, địa chỉ website nào sau đây có độ tin cậy cao nhất về mặt học thuật tại Việt Nam?",
      "options": [
        "Website chuyên bán hàng trực tuyến có đuôi .shop",
        "Các trang web chia sẻ tệp tin ẩn danh không kiểm duyệt",
        "Trang web cá nhân miễn phí trên blogspot.com",
        "Các website có đuôi tên miền .edu.vn (các trường đại học, viện nghiên cứu)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 15): Tên miền .edu.vn được cấp riêng cho các tổ chức giáo dục chính thống nên có độ chuẩn xác học thuật cao.",
      "hint": "Tên miền .edu.vn dành cho cơ sở giáo dục."
    },
    {
      "id": "tin9-b3-mc8",
      "type": "multiple_choice",
      "question": "Tiêu chí 'Tính chính xác' (Accuracy) của thông tin số đòi hỏi điều gì?",
      "options": [
        "Dữ liệu phản ánh đúng sự thật khách quan, không có sai sót, được chứng minh bằng bằng chứng hoặc số liệu kiểm chứng đáng tin cậy",
        "Bài viết phải có trên 10 bức ảnh",
        "Phải được viết bằng tiếng nước ngoài",
        "Thông tin phải nhận được 1 triệu lượt xem"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 14): Tính chính xác là tiêu chuẩn cốt lõi đảm bảo sự thật khách quan của dữ liệu.",
      "hint": "Phản ánh đúng sự thật khách quan và có số liệu kiểm chứng."
    },
    {
      "id": "tin9-b3-mc9",
      "type": "multiple_choice",
      "question": "Tiêu chí 'Tính cập nhật / Thời sự' (Timeliness) có ý nghĩa như thế nào trong đánh giá thông tin?",
      "options": [
        "Thông tin phải mới nhất, phù hợp với thời điểm hiện tại và chưa bị lạc hậu bởi các phát hiện khoa học hay văn bản pháp luật mới",
        "Thông tin được viết vào ban đêm",
        "Thông tin đã tồn tại 100 năm",
        "Thông tin được lưu trữ trên đĩa mềm"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Thông tin lạc hậu dù từng đúng trong quá khứ nhưng có thể hoàn toàn sai lệch ở thời điểm hiện tại.",
      "hint": "Mới nhất, còn nguyên giá trị thời sự và không bị lạc hậu."
    },
    {
      "id": "tin9-b3-mc10",
      "type": "multiple_choice",
      "question": "Tiêu chí 'Tính toàn vẹn / Đầy đủ' (Completeness) giúp người giải quyết vấn đề tránh được sai lầm gì?",
      "options": [
        "Tránh việc kết luận phiến diện, một chiều hoặc hiểu sai bản chất sự việc do thông tin bị cắt xén, thiếu sót các dữ kiện quan trọng",
        "Tránh việc máy tính bị nóng",
        "Tránh tốn giấy in",
        "Tránh phải đọc văn bản"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Thông tin bị cắt xén một nửa sự thật còn nguy hiểm hơn cả lời nói dối hoàn toàn.",
      "hint": "Tránh kết luận phiến diện do thông tin bị cắt xén thiếu sót."
    },
    {
      "id": "tin9-b3-mc11",
      "type": "multiple_choice",
      "question": "Mô hình đánh giá nguồn tin CRAAP (Currency, Relevance, Authority, Accuracy, Purpose) chữ 'A' đầu tiên (Authority) kiểm tra điều gì?",
      "options": [
        "Thẩm quyền, trình độ chuyên môn và uy tín của tác giả hoặc tổ chức chịu trách nhiệm xuất bản bài viết",
        "Tốc độ mạng Internet",
        "Kích thước tệp tải về",
        "Màu sắc của trang web"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Authority đánh giá tư cách chuyên môn và thẩm quyền khoa học của người phát ngôn.",
      "hint": "Thẩm quyền và uy tín chuyên môn của tác giả/nhà xuất bản."
    },
    {
      "id": "tin9-b3-mc12",
      "type": "multiple_choice",
      "question": "Dấu hiệu nào sau đây cho thấy một bài viết trên mạng có mục đích THIÊN VỊ hoặc THƯƠNG MẠI (Purpose)?",
      "options": [
        "Bài viết chỉ khen ngợi một sản phẩm duy nhất, che giấu các khuyết điểm và liên tục chèn các đường link mua hàng kèm mã giảm giá",
        "Bài viết so sánh khách quan ưu và nhược điểm của nhiều sản phẩm",
        "Bài báo khoa học có số liệu thực nghiệm rõ ràng",
        "Báo cáo của cơ quan khí tượng thủy văn"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Bài viết mang động cơ quảng cáo hoặc thiên vị thường thiếu tính khách quan khoa học.",
      "hint": "Chỉ khen một chiều và liên tục giục mua hàng."
    },
    {
      "id": "tin9-b3-mc13",
      "type": "multiple_choice",
      "question": "Khi đọc một bài báo mạng có tiêu đề giật gân: 'Uống nước chanh nóng chữa khỏi 100% bệnh ung thư', kĩ năng đánh giá thông tin đúng là gì?",
      "options": [
        "Cảnh giác cao, không vội tin và đối chiếu ngay với khuyến cáo của Bộ Y tế hoặc Tổ chức Y tế Thế giới (WHO)",
        "Lập tức chia sẻ cho tất cả người thân làm theo",
        "Bình luận khen ngợi tác giả",
        "Mua ngay 100 quả chanh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Các bài thuốc dân gian giật gân chữa bách bệnh trên mạng xã hội tiềm ẩn rủi ro sinh mạng rất lớn nếu không kiểm chứng y khoa.",
      "hint": "Cảnh giác và đối chiếu khuyến cáo chính thống của Bộ Y tế, WHO."
    },
    {
      "id": "tin9-b3-mc14",
      "type": "multiple_choice",
      "question": "Tại sao các trang web có tên miền kết thúc bằng '.gov' (Chính phủ) hoặc '.edu' (Giáo dục) lại có điểm đánh giá chất lượng thông tin rất cao?",
      "options": [
        "Vì tên miền này được nhà nước quản lí nghiêm ngặt, thông tin đăng tải được kiểm duyệt bởi các cơ quan chuyên môn có trách nhiệm pháp lí",
        "Vì những trang này có thiết kế hình ảnh đẹp nhất",
        "Vì trang này tải về nhanh nhất",
        "Vì ai cũng có thể tự do đăng kí tên miền này miễn phí"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tên miền .gov và .edu đòi hỏi thủ tục định danh pháp nhân nhà nước khắt khe nên có độ tín nhiệm cao nhất.",
      "hint": "Cơ quan chuyên môn kiểm duyệt và chịu trách nhiệm pháp lí nghiêm ngặt."
    },
    {
      "id": "tin9-b3-mc15",
      "type": "multiple_choice",
      "question": "Một báo cáo khoa học không ghi ngày tháng xuất bản và không có tên tác giả thì mức độ tin cậy được xếp vào loại nào?",
      "options": [
        "Độ tin cậy thấp, cần hết sức thận trọng và tìm kiếm tài liệu khác có danh tính xác thực để thay thế",
        "Độ tin cậy tuyệt đối 100%",
        "Chắc chắn là tài liệu mật của chính phủ",
        "Có thể sử dụng làm luận cứ chính mà không cần suy nghĩ"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Thông tin vô danh tính (Anonymous) thiếu trách nhiệm giải trình nên có độ tin cậy thấp.",
      "hint": "Độ tin cậy thấp vì thiếu tác giả và thời gian công bố."
    }
  ],
  "tin9-bai-4": [
    {
      "id": "g9-b4-de-1",
      "question": "Phần mềm nguồn mở (Open Source Software) có đặc điểm nổi bật nào?",
      "options": [
        "Không được phép xem mã nguồn",
        "Mã nguồn được công khai, người dùng có quyền tự do sử dụng, nghiên cứu, sửa đổi và phân phối lại theo giấy phép",
        "Chỉ chạy được trên máy tính của một hãng duy nhất",
        "Bắt buộc phải trả phí bản quyền rất đắt"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 17): Phần mềm nguồn mở cung cấp mã nguồn công khai (như Linux, GIMP, LibreOffice).",
      "hint": "Công khai mã nguồn, tự do sử dụng và cải tiến."
    },
    {
      "id": "g9-b4-tb-1",
      "question": "Hành vi sử dụng phần mềm thương mại có bản quyền đã bị \"bẻ khóa\" (crack) vi phạm điều gì?",
      "options": [
        "Không vi phạm gì vì trên mạng chia sẻ miễn phí",
        "Là việc làm được luật pháp khuyến khích",
        "Vi phạm Luật Sở hữu trí tuệ và quyền tác giả của nhà phát triển phần mềm",
        "Chỉ là vi phạm nội quy trường học"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Dùng phần mềm crack là vi phạm bản quyền tác giả và còn tiềm ẩn nguy cơ nhiễm mã độc, trojan đánh cắp thông tin.",
      "hint": "Vi phạm bản quyền sở hữu trí tuệ."
    },
    {
      "id": "g9-b4-kho-1",
      "question": "Giấy phép Creative Commons (CC) thường được áp dụng cho mục đích gì?",
      "options": [
        "Bắt buộc người xem phải trả tiền cho mỗi lượt nhấp chuột",
        "Giúp tác giả chia sẻ tác phẩm số một cách hợp pháp với các điều kiện bản quyền linh hoạt cho cộng đồng",
        "Cấm tất cả mọi người xem tác phẩm",
        "Chuyển quyền sở hữu cho chính phủ"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "Giấy phép CC là chuẩn chia sẻ bản quyền sáng tạo phổ biến trên Internet, cho phép tái sử dụng có điều kiện (ghi nguồn, phi thương mại...).",
      "hint": "Chia sẻ tác phẩm với các điều kiện bản quyền linh hoạt."
    },
    {
      "id": "tin9-b4-mc1",
      "type": "multiple_choice",
      "question": "Hành vi phát tán phần mềm độc hại (Virus, Trojan, Ransomware) lây nhiễm vào máy tính người khác bị xử lí theo văn bản pháp luật nào?",
      "options": [
        "Quy chế thi đấu thể thao",
        "Luật Đất đai",
        "Bộ luật Hình sự và Luật An ninh mạng của Việt Nam",
        "Luật Doanh nghiệp"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 19): Phát tán mã độc là hành vi vi phạm nghiêm trọng Luật An ninh mạng và Điều 286 Bộ luật Hình sự.",
      "hint": "Luật An ninh mạng và Bộ luật Hình sự."
    },
    {
      "id": "tin9-b4-mc2",
      "type": "multiple_choice",
      "question": "Bản quyền tác giả (Copyright) đối với một tác phẩm số (bài viết, bức ảnh, bài hát, phần mềm) phát sinh từ thời điểm nào?",
      "options": [
        "Sau khi tác phẩm đã xuất bản được 10 năm",
        "Chỉ khi trả phí đăng kí thành công tại cơ quan nhà nước",
        "Chỉ khi tác phẩm được nhiều người biết đến",
        "Ngay khi tác phẩm được sáng tạo và thể hiện dưới một hình thức vật chất nhất định, không bắt buộc phải đăng kí"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 9 KNTT (Trang 20): Theo Luật Sở hữu trí tuệ, quyền tác giả phát sinh tự động ngay từ thời điểm tác phẩm được định hình dưới dạng vật chất.",
      "hint": "Quyền tác giả phát sinh tự động ngay khi tác phẩm được tạo ra."
    },
    {
      "id": "tin9-b4-mc3",
      "type": "multiple_choice",
      "question": "Hành vi \"Đạo văn\" (Plagiarism) trong môi trường học thuật số là gì?",
      "options": [
        "Sao chép ý tưởng, câu văn hoặc công trình của người khác rồi nhận là của mình mà không trích dẫn nguồn gốc",
        "Chia sẻ tài liệu học tập có ghi rõ tên tác giả",
        "Viết một bài văn hay được điểm cao",
        "Dùng máy tính để gõ lại bài thơ của chính mình sáng tác"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 21): Đạo văn là hành vi sao chép sản phẩm trí tuệ của người khác và mạo nhận là của mình, vi phạm đạo đức nghiêm trọng.",
      "hint": "Sao chép của người khác mạo nhận là của mình."
    },
    {
      "id": "tin9-b4-mc4",
      "type": "multiple_choice",
      "question": "Khi sử dụng các hình ảnh trên Internet có giấy phép Creative Commons (CC BY), em PHẢI tuân thủ điều kiện bắt buộc nào?",
      "options": [
        "Không được phép xem hình ảnh đó trên điện thoại",
        "Phải vẽ lại bức ảnh bằng bút chì",
        "Phải ghi nhận công lao (ghi rõ tên tác giả gốc và liên kết đến giấy phép)",
        "Phải trả cho tác giả 100 USD qua tài khoản ngân hàng"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 20): Giấy phép CC BY (Attribution) cho phép tái sử dụng miễn phí nhưng bắt buộc phải ghi tên tác giả (ghi nhận công lao).",
      "hint": "CC BY yêu cầu ghi nhận tên tác giả gốc."
    },
    {
      "id": "tin9-b4-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về pháp lí và đạo đức trong môi trường số:",
      "options": [
        "a) Tự ý chia sẻ ảnh riêng tư, tài khoản ngân hàng của người khác lên mạng là hành vi vi phạm quyền riêng tư được pháp luật bảo hộ",
        "b) Thông tin trên mạng là ảo nên phát ngôn thù hằn, xúc phạm danh dự người khác sẽ không bị pháp luật xử phạt",
        "c) Mua và dùng tài khoản Netflix, Spotify lậu (dùng chung tài khoản bị hack) là hành vi tiếp tay cho tội phạm mạng",
        "d) Trích dẫn một đoạn văn ngắn trong SGK để phân tích và có ghi chú nguồn gốc rõ ràng là hành vi sử dụng hợp lí (Fair Use)"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Môi trường mạng chịu sự quản lí của Luật An ninh mạng; xúc phạm danh dự nhân phẩm người khác trên mạng vẫn bị phạt tiền hoặc phạt tù.",
      "hint": "Không gian mạng chịu sự quản lí của pháp luật đời thực."
    },
    {
      "id": "tin9-b4-fb1",
      "type": "fill_blank",
      "question": "Hành vi [1] là việc sao chép tác phẩm của người khác mà không dẫn nguồn, còn giấy phép [2] là hệ thống giấy phép mở cho phép chia sẻ tài nguyên hợp pháp.",
      "blankAnswers": [
        "đạo văn",
        "Creative Commons"
      ],
      "wordBank": [
        "đạo văn",
        "Creative Commons",
        "bản quyền thương mại",
        "đạo nhái",
        "mã hóa",
        "nội suy"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 20, 21): Đạo văn vi phạm đạo đức số; Creative Commons cung cấp chuẩn cấp phép mở cho cộng đồng.",
      "hint": "Đạo văn và giấy phép bản quyền mở Creative Commons."
    },
    {
      "id": "tin9-b4-m1",
      "type": "matching",
      "question": "Nối biểu tượng giấy phép Creative Commons ở cột bên trái với ý nghĩa tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "CC BY (Attribution)"
        },
        {
          "id": "2",
          "text": "CC NC (NonCommercial)"
        },
        {
          "id": "3",
          "text": "CC ND (NoDerivatives)"
        },
        {
          "id": "4",
          "text": "CC SA (ShareAlike)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Chỉ được sử dụng cho mục đích phi thương mại, không được kinh doanh kiếm lời"
        },
        {
          "id": "b",
          "text": "Bắt buộc phải ghi nhận tên tác giả gốc của tác phẩm"
        },
        {
          "id": "c",
          "text": "Nếu chỉnh sửa tác phẩm thì phải phát hành theo cùng giấy phép với tác phẩm gốc"
        },
        {
          "id": "d",
          "text": "Không được tạo tác phẩm phái sinh (phải giữ nguyên vẹn bản gốc)"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "a",
        "3": "d",
        "4": "c"
      },
      "options": [],
      "difficulty": "kho",
      "explanation": "SGK Tin học 9 KNTT (Trang 20): 4 điều kiện cốt lõi của bộ giấy phép Creative Commons: BY (tác giả), NC (phi thương mại), ND (không sửa đổi), SA (chia sẻ tương tự).",
      "hint": "BY: tác giả; NC: phi thương mại; ND: không phái sinh; SA: cùng giấy phép."
    },
    {
      "id": "tin9-b4-mc5",
      "type": "multiple_choice",
      "question": "Khi tạo ra một phần mềm hoặc một bài hát, em muốn mọi người được dùng tự do nhưng KHÔNG ĐƯỢC đem bán lấy tiền, em nên áp dụng kí hiệu giấy phép CC nào?",
      "options": [
        "CC NC (NonCommercial)",
        "CC ND (NoDerivatives)",
        "CC BY-SA",
        "Commercial Only"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 20): Kí hiệu NC (NonCommercial - hình đồng đô la có gạch chéo) cấm sử dụng cho mục đích thương mại.",
      "hint": "NC là viết tắt của Non-Commercial (phi thương mại)."
    },
    {
      "id": "tin9-b4-mc6",
      "type": "multiple_choice",
      "question": "Thế nào là \"Quyền riêng tư dữ liệu cá nhân\" (Personal Data Privacy)?",
      "options": [
        "Quyền được cài đặt mọi phần mềm miễn phí",
        "Quyền không phải trả tiền điện",
        "Quyền được đổi mật khẩu wifi của hàng xóm",
        "Quyền của cá nhân được kiểm soát thông tin liên quan đến bản thân mình (như hình ảnh, địa chỉ, lịch sử trò chuyện) và không bị xâm phạm"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 22): Dữ liệu cá nhân gắn liền với quyền riêng tư được Hiến pháp và Nghị định 13/2023/NĐ-CP bảo vệ nghiêm ngặt.",
      "hint": "Quyền kiểm soát thông tin cá nhân và không bị xâm phạm."
    },
    {
      "id": "tin9-b4-mc7",
      "type": "multiple_choice",
      "question": "Trong lớp học, nếu một bạn vô tình để quên tài khoản mạng xã hội trên máy tính phòng thực hành, hành động văn minh nhất là gì?",
      "options": [
        "Đăng một bài viết hài hước trêu chọc lên trang cá nhân của bạn",
        "Nhấp chuột đăng xuất (Log out) giúp bạn ngay và thông báo cho bạn biết",
        "Vào đọc hết các tin nhắn riêng tư của bạn",
        "Đổi mật khẩu tài khoản của bạn để tống tiền"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 22): Đạo đức số đòi hỏi sự tôn trọng bảo mật của người khác, giúp bạn đăng xuất an toàn.",
      "hint": "Đăng xuất tài khoản giúp bạn để đảm bảo an toàn."
    },
    {
      "id": "tin9-b4-mc8",
      "type": "multiple_choice",
      "question": "Hành vi nào sau đây vi phạm nghiêm trọng Luật An ninh mạng của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam?",
      "options": [
        "Phát tán chương trình phần mềm độc hại, tấn công từ chối dịch vụ (DDoS) làm tê liệt hệ thống máy chủ hoặc chiếm đoạt tài khoản trái phép",
        "Học sinh tự lập trình trò chơi giáo dục trên Scratch",
        "Gửi email chúc mừng sinh nhật thầy cô",
        "Tìm kiếm tài liệu học tập trên Google"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 18): Luật An ninh mạng nghiêm cấm tấn công mạng, phát tán mã độc và phá hoại hệ thống thông tin.",
      "hint": "Tấn công mạng, phát tán mã độc và chiếm đoạt tài khoản trái phép."
    },
    {
      "id": "tin9-b4-mc9",
      "type": "multiple_choice",
      "question": "Tội phạm công nghệ cao sử dụng thủ đoạn tạo tài khoản Zalo, Facebook giả danh bạn bè, người thân để làm gì?",
      "options": [
        "Nhắn tin bịa ra lí do khẩn cấp (như tai nạn, kẹt tiền) để vay tiền hoặc nhờ chuyển tiền vào số tài khoản ngân hàng lạ nhằm chiếm đoạt tài sản",
        "Nhờ làm bài tập về nhà",
        "Rủ nhau đi đá bóng",
        "Tặng quà miễn phí"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Thủ đoạn mạo danh người quen vay tiền khẩn cấp là chiêu trò lừa đảo tinh vi phổ biến hiện nay.",
      "hint": "Giả danh người quen bị nạn để lừa chuyển tiền chiếm đoạt tài sản."
    },
    {
      "id": "tin9-b4-mc10",
      "type": "multiple_choice",
      "question": "Khi nhận được tin nhắn từ tài khoản của người thân giục chuyển tiền gấp, phản xạ an toàn đầu tiên của em là gì?",
      "options": [
        "Gọi điện thoại trực tiếp hoặc gọi video call cho người thân đó để kiểm tra xác thực trước khi thực hiện bất kì giao dịch nào",
        "Chuyển tiền ngay lập tức không chần chừ",
        "Chuyển thêm gấp đôi số tiền họ xin",
        "Gửi kèm mã OTP ngân hàng cho họ"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Xác minh trực tiếp bằng giọng nói hoặc hình ảnh là biện pháp hữu hiệu bẻ gãy bẫy mạo danh.",
      "hint": "Gọi điện thoại trực tiếp kiểm chứng trước khi chuyển tiền."
    },
    {
      "id": "tin9-b4-mc11",
      "type": "multiple_choice",
      "question": "Hành vi sử dụng công nghệ Deepfake (trí tuệ nhân tạo ghép khuôn mặt và giọng nói) để giả mạo người khác phạm tội gì?",
      "options": [
        "Tội lừa đảo chiếm đoạt tài sản hoặc làm nhục người khác, bị pháp luật xử phạt rất nặng",
        "Chỉ là trò đùa nghệ thuật được tự do sáng tạo",
        "Được tặng giấy khen vì ứng dụng AI giỏi",
        "Không vi phạm pháp luật nếu không để lộ mặt thật"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Deepfake phục vụ mục đích lừa đảo hoặc xúc phạm danh dự là hành vi tội phạm công nghệ cao bị truy tố hình sự.",
      "hint": "Tội lừa đảo hoặc làm nhục người khác bị truy cứu hình sự."
    },
    {
      "id": "tin9-b4-mc12",
      "type": "multiple_choice",
      "question": "Hành vi 'Quấy rối và đe dọa trực tuyến' (Online Harassment) có thể dẫn đến hậu quả tâm lí nào cho nạn nhân?",
      "options": [
        "Gây hoảng loạn, trầm cảm, suy sụp tinh thần, sợ hãi giao tiếp xã hội và có thể dẫn đến hành vi tự hại",
        "Giúp nạn nhân trở nên tự tin hơn",
        "Làm tăng sức đề kháng của cơ thể",
        "Không gây ra bất kì ảnh hưởng nào"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Bạo lực ngôn từ trên mạng có sức tàn phá tâm lí ghê gớm, đặc biệt đối với lứa tuổi thanh thiếu niên.",
      "hint": "Trầm cảm, hoảng loạn tinh thần và sợ hãi giao tiếp."
    },
    {
      "id": "tin9-b4-mc13",
      "type": "multiple_choice",
      "question": "Quyền sở hữu trí tuệ đối với tác phẩm phần mềm máy tính bảo vệ những quyền nào của tác giả?",
      "options": [
        "Quyền nhân thân (được đứng tên tác giả, bảo vệ sự toàn vẹn của tác phẩm) và Quyền tài sản (được hưởng lợi ích kinh tế khi phát hành)",
        "Quyền sở hữu toàn bộ các máy tính cài phần mềm đó",
        "Quyền tịch thu tài sản của người dùng",
        "Chỉ có quyền đặt tên không có quyền bán"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Luật Sở hữu trí tuệ quy định rõ hai nhóm quyền: quyền nhân thân và quyền tài sản.",
      "hint": "Quyền nhân thân và quyền tài sản của tác giả."
    },
    {
      "id": "tin9-b4-mc14",
      "type": "multiple_choice",
      "question": "Khi tham gia thảo luận trên mạng, nguyên tắc 'Tôn trọng sự đa dạng và khác biệt' nhắc nhở học sinh điều gì?",
      "options": [
        "Mỗi người có quan điểm, văn hóa, hoàn cảnh khác nhau; cần lắng nghe, phản biện bằng lí lẽ hòa nhã, tuyệt đối không phân biệt vùng miền, giới tính hay kì thị cá nhân",
        "Bắt buộc mọi người phải có cùng một suy nghĩ giống hệt mình",
        "Ai có quan điểm khác là phải xúc phạm ngay",
        "Chỉ nói chuyện với người giàu"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tôn trọng sự khác biệt là nền tảng của một không gian mạng văn minh và tiến bộ.",
      "hint": "Lắng nghe, tôn trọng và không kì thị hay xúc phạm cá nhân."
    },
    {
      "id": "tin9-b4-mc15",
      "type": "multiple_choice",
      "question": "Đường dây nóng (Hotline) quốc gia bảo vệ trẻ em trên không gian mạng và đời thực ở Việt Nam có đầu số là bao nhiêu?",
      "options": [
        "Tổng đài 111",
        "Tổng đài 113",
        "Tổng đài 114",
        "Tổng đài 115"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Đầu số 111 là Tổng đài Quốc gia Bảo vệ Trẻ em tiếp nhận tố giác xâm hại và tư vấn tâm lí 24/7 hoàn toàn miễn phí.",
      "hint": "Tổng đài Quốc gia Bảo vệ Trẻ em số 111."
    }
  ],
  "tin9-bai-5": [
    {
      "id": "g9-b5-de-1",
      "question": "Phần mềm mô phỏng (Simulation Software) là gì?",
      "options": [
        "Trình duyệt web",
        "Phần mềm nghe nhạc trực tuyến",
        "Phần mềm gõ dấu Tiếng Việt",
        "Phần mềm tái tạo lại các hiện tượng, quá trình thực tế trong thế giới ảo nhằm phục vụ học tập, nghiên cứu"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 21): Phần mềm mô phỏng mô hình hóa các hiện tượng tự nhiên, xã hội hoặc kỹ thuật trong môi trường máy tính.",
      "hint": "Mô phỏng lại hiện tượng thực tế trên máy tính."
    },
    {
      "id": "g9-b5-tb-1",
      "question": "Ưu điểm lớn nhất của việc dùng phần mềm mô phỏng (như PhET) trong học tập môn Khoa học tự nhiên là gì?",
      "options": [
        "Thay thế hoàn toàn các trường học",
        "An toàn tuyệt đối (không sợ cháy nổ, chất độc hại), chi phí thấp và có thể quan sát hiện tượng cực nhỏ hoặc cực lớn",
        "Tự động làm bài tập hộ học sinh",
        "Không cần học bài vẫn được điểm 10"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Phần mềm mô phỏng cho phép thử nghiệm các thí nghiệm nguy hiểm, tốn kém hoặc vô hình (nguyên tử, chuyển động hành tinh) một cách an toàn.",
      "hint": "An toàn, chi phí thấp, trực quan sinh động."
    },
    {
      "id": "g9-b5-kho-1",
      "question": "Phần mềm PhET Interactive Simulations (do Đại học Colorado phát triển) thường mô phỏng các lĩnh vực khoa học nào?",
      "options": [
        "Vật lí, Hóa học, Sinh học, Toán học và Khoa học Trái Đất",
        "Chỉ chỉnh sửa video",
        "Chỉ dịch tiếng nước ngoài",
        "Chỉ dạy nấu ăn"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "PhET là dự án mô phỏng giáo dục tương tác nổi tiếng toàn cầu cho các môn STEM.",
      "hint": "Các môn STEM: Vật lý, Hóa học, Sinh học, Toán học."
    },
    {
      "id": "tin9-b5-mc2",
      "type": "multiple_choice",
      "question": "Lợi ích lớn nhất của việc sử dụng phần mềm mô phỏng trong nghiên cứu và học tập là gì?",
      "options": [
        "Làm tăng tốc độ mạng Internet lên gấp 10 lần",
        "Giúp máy tính không bao giờ bị nóng",
        "Tiết kiệm chi phí, an toàn tuyệt đối và có thể thực hiện những thí nghiệm nguy hiểm hoặc tốn kém",
        "Thay thế hoàn toàn sự có mặt của người giáo viên"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 25): Mô phỏng giúp quan sát những hiện tượng quá nhỏ (nguyên tử), quá lớn (thiên hà) hoặc quá nguy hiểm (phản ứng hạt nhân, núi lửa).",
      "hint": "An toàn, tiết kiệm và mô phỏng được thí nghiệm nguy hiểm."
    },
    {
      "id": "tin9-b5-mc3",
      "type": "multiple_choice",
      "question": "Phần mềm mô phỏng PhET Interactive Simulations (do Đại học Colorado phát triển) nổi tiếng trong việc mô phỏng các môn học nào?",
      "options": [
        "Vật lí, Hóa học, Sinh học và Toán học",
        "Môn Âm nhạc và Mĩ thuật",
        "Lịch sử và Địa lí địa phương",
        "Môn Thể dục rèn luyện thân thể"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 25): PhET cung cấp hàng trăm mô phỏng tương tác miễn phí cho các môn khoa học tự nhiên: Vật lí, Hóa học, Toán học.",
      "hint": "Các môn khoa học tự nhiên: Lí, Hóa, Sinh, Toán."
    },
    {
      "id": "tin9-b5-mc4",
      "type": "multiple_choice",
      "question": "Ứng dụng nào sau đây là một ví dụ thực tế về phần mềm mô phỏng dùng trong đào tạo phi công chuyên nghiệp?",
      "options": [
        "Trình duyệt Google Chrome",
        "Ứng dụng vẽ Paint",
        "Phần mềm máy tính Casio",
        "Hệ thống mô phỏng buồng lái máy bay (Flight Simulator)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 26): Buồng lái mô phỏng (Flight Simulator) cho phép phi công luyện tập xử lí tình huống khẩn cấp mà không nguy hiểm đến tính mạng.",
      "hint": "Buồng lái máy bay mô phỏng Flight Simulator."
    },
    {
      "id": "tin9-b5-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về phần mềm mô phỏng:",
      "options": [
        "a) Phần mềm mô phỏng cho phép người dùng thay đổi các thông số đầu vào để quan sát kết quả biến đổi tức thì",
        "b) Mọi kết quả mô phỏng trên máy tính đều chính xác tuyệt đối 100% so với thực tế mà không có sai số",
        "c) Phần mềm mô phỏng hệ Mặt Trời giúp học sinh quan sát sự chuyển động của các hành tinh quanh Mặt Trời",
        "d) Phần mềm mô phỏng giải phẫu cơ thể người giúp sinh viên y khoa thực hành mà không cần giải phẫu động vật sống"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 25): Mô hình mô phỏng luôn là bản xấp xỉ của thực tế dựa trên các giả định, do đó vẫn có thể có sai số so với đời thực.",
      "hint": "Mô phỏng dựa trên mô hình toán học nên vẫn có sai số nhất định."
    },
    {
      "id": "tin9-b5-fb1",
      "type": "fill_blank",
      "question": "Phần mềm mô phỏng tái hiện lại thế giới thực bằng cách xây dựng các [1] toán học, cho phép người dùng tương tác và điều chỉnh các [2] để quan sát hiện tượng.",
      "blankAnswers": [
        "mô hình",
        "thông số"
      ],
      "wordBank": [
        "mô hình",
        "thông số",
        "hình vẽ 2D",
        "mã độc",
        "đồ chơi",
        "thẻ nhớ"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 24): Khái niệm cốt lõi: mô hình toán học và việc thay đổi các thông số (parameters).",
      "hint": "Xây dựng mô hình và thay đổi thông số."
    },
    {
      "id": "tin9-b5-m1",
      "type": "matching",
      "question": "Nối phần mềm mô phỏng ở cột bên trái với lĩnh vực ứng dụng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Phần mềm GeoGebra"
        },
        {
          "id": "2",
          "text": "Phần mềm PhET - Mạch điện xoay chiều"
        },
        {
          "id": "3",
          "text": "Phần mềm Solar System 3D"
        },
        {
          "id": "4",
          "text": "Phần mềm dự báo đường đi của bão"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Khí tượng thủy văn và biến đổi khí hậu"
        },
        {
          "id": "b",
          "text": "Thiên văn học và chuyển động vũ trụ"
        },
        {
          "id": "c",
          "text": "Hình học phẳng, không gian và đại số"
        },
        {
          "id": "d",
          "text": "Vật lí thực nghiệm điện học"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "d",
        "3": "b",
        "4": "a"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 25): Các phần mềm mô phỏng quen thuộc trong giáo dục và đời sống.",
      "hint": "GeoGebra: Toán; PhET điện: Vật lí; Solar System: Thiên văn; Dự báo bão: Khí tượng."
    },
    {
      "id": "tin9-b5-mc5",
      "type": "multiple_choice",
      "question": "Khi thay đổi giá trị điện trở trong mô phỏng mạch điện của PhET, độ sáng của bóng đèn thay đổi tức thì. Thao tác này thể hiện tính chất gì của phần mềm mô phỏng?",
      "options": [
        "Tính tĩnh lặng không biến đổi",
        "Tính tương tác và phản hồi trực quan theo thời gian thực",
        "Tính bảo mật thông tin",
        "Tính phức tạp về thuật toán"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 26): Tính tương tác hai chiều: người học can thiệp thông số và hệ thống phản hồi kết quả trực quan lập tức.",
      "hint": "Tương tác trực quan và phản hồi tức thời."
    },
    {
      "id": "tin9-b5-mc6",
      "type": "multiple_choice",
      "question": "Hạn chế lớn nhất của việc quá lạm dụng phần mềm mô phỏng mà không thực hành trong phòng thí nghiệm thật là gì?",
      "options": [
        "Máy tính bị mờ màn hình",
        "Học sinh bị giảm thị lực",
        "Học sinh bị thiếu hụt các kĩ năng thao tác thực tế bằng tay (như cầm ống nghiệm, đo đạc dụng cụ)",
        "Làm tốn nhiều tiền điện"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 26): Mô phỏng không thể rèn luyện hoàn toàn các kĩ năng thao tác khéo léo và cảm nhận thực tế của tay chân trong phòng thí nghiệm.",
      "hint": "Thiếu rèn luyện kĩ năng thao tác thực tế."
    },
    {
      "id": "tin9-b5-mc7",
      "type": "multiple_choice",
      "question": "Các kĩ sư chế tạo ô tô thường dùng phần mềm mô phỏng va chạm (Crash Test Simulation) trước khi sản xuất hàng loạt nhằm mục đích gì?",
      "options": [
        "Để chụp ảnh quảng cáo xe",
        "Đánh giá mức độ an toàn cho hành khách và tiết kiệm hàng triệu đô la chi phí phá hủy xe thật",
        "Để tăng giá thành xe lên cao",
        "Để xe chạy nhanh hơn trên đường cao tốc"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 25): Mô phỏng va chạm giúp kiểm tra khung xe, túi khí và hấp thụ lực va đập mà không cần phá hủy xe thật hàng trăm lần.",
      "hint": "Đánh giá an toàn và tiết kiệm chi phí thử nghiệm thực tế."
    },
    {
      "id": "tin9-b5-mc8",
      "type": "multiple_choice",
      "question": "Phần mềm mô phỏng (Simulation Software) là gì?",
      "options": [
        "Phần mềm tái hiện lại các đối tượng, hiện tượng tự nhiên hoặc quá trình thực tế trong một môi trường ảo có kiểm soát",
        "Một trò chơi bắn súng trên điện thoại",
        "Một bộ phim tài liệu khoa học",
        "Một cuốn từ điển tiếng Anh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 22): Phần mềm mô phỏng xây dựng mô hình toán học ảo mô phỏng thế giới thực.",
      "hint": "Tái hiện đối tượng, hiện tượng hoặc quá trình thực tế trong môi trường ảo."
    },
    {
      "id": "tin9-b5-mc9",
      "type": "multiple_choice",
      "question": "Ưu điểm vượt trội của việc sử dụng phần mềm mô phỏng trong dạy học các môn Khoa học tự nhiên (Lí, Hóa, Sinh) là gì?",
      "options": [
        "Cho phép thực hiện các thí nghiệm nguy hiểm (cháy nổ, hóa chất độc), thí nghiệm tốn kém kinh phí hoặc các hiện tượng mắt thường không thấy được (sự phân rã nguyên tử, cấu trúc DNA)",
        "Thay thế hoàn toàn người thầy giáo",
        "Giúp học sinh không cần làm bài tập",
        "Làm cho máy tính tự phát sáng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Mô phỏng an toàn tuyệt đối, tiết kiệm hóa chất đắt tiền và mở rộng trực quan các thế giới vi mô/vĩ mô.",
      "hint": "An toàn với thí nghiệm nguy hiểm, tiết kiệm chi phí và quan sát thế giới vi mô."
    },
    {
      "id": "tin9-b5-mc10",
      "type": "multiple_choice",
      "question": "Phần mềm mô phỏng PhET (Interactive Simulations) của Đại học Colorado rất nổi tiếng trong việc mô phỏng các lĩnh vực nào?",
      "options": [
        "Vật lí, Hóa học, Sinh học, Toán học và Khoa học Trái đất",
        "Chỉ mô phỏng chơi game",
        "Mô phỏng gõ văn bản",
        "Mô phỏng gửi email"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "PhET là nền tảng mô phỏng tương tác giáo dục STEM mở hàng đầu thế giới.",
      "hint": "Mô phỏng tương tác STEM: Vật lí, Hóa học, Sinh học, Toán học."
    },
    {
      "id": "tin9-b5-mc11",
      "type": "multiple_choice",
      "question": "Phần mềm Geogebra là phần mềm mô phỏng và hỗ trợ học tập môn học nào?",
      "options": [
        "Môn Toán học (Hình học động, Đại số, Vẽ đồ thị hàm số và Thống kê)",
        "Môn Lịch sử",
        "Môn Âm nhạc",
        "Môn Thể dục"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Geogebra kết hợp hình học động và đồ thị đại số rất trực quan cho giáo dục toán học.",
      "hint": "Môn Toán học (Hình học động và đồ thị đại số)."
    },
    {
      "id": "tin9-b5-mc12",
      "type": "multiple_choice",
      "question": "Trong ngành Hàng không vũ trụ, các phần mềm mô phỏng buồng lái máy bay (Flight Simulator) có vai trò sống còn là gì?",
      "options": [
        "Huấn luyện kĩ năng điều khiển cho phi công và rèn luyện phản xạ xử lí sự cố khẩn cấp (thời tiết bão tố, hỏng động cơ) an toàn trước khi bay thật",
        "Để phi công chơi trò chơi điện tử xả stress",
        "Để tiết kiệm tiền mua vé máy bay",
        "Để chiếu phim cho hành khách xem"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Huấn luyện trên buồng lái mô phỏng giúp phi công đạt trình độ chuẩn xác cao mà không nguy hiểm tính mạng.",
      "hint": "Huấn luyện phi công và diễn tập xử lí sự cố an toàn."
    },
    {
      "id": "tin9-b5-mc13",
      "type": "multiple_choice",
      "question": "Điểm hạn chế cần lưu ý khi học tập bằng phần mềm mô phỏng là gì?",
      "options": [
        "Mô hình mô phỏng luôn có những giả định lí tưởng hóa, không thể phản ánh hoàn toàn 100% mọi yếu tố ngẫu nhiên và phức tạp của thực tế bên ngoài",
        "Phần mềm mô phỏng luôn cho kết quả sai",
        "Phần mềm mô phỏng làm hỏng màn hình",
        "Không thể tương tác được"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Mô phỏng thường bỏ qua một số ma sát hoặc sai số môi trường ngoài đời thực.",
      "hint": "Dựa trên mô hình lí tưởng hóa, không thay thế hoàn toàn thực nghiệm thực tế."
    },
    {
      "id": "tin9-b5-mc14",
      "type": "multiple_choice",
      "question": "Phần mềm mô phỏng hệ mặt trời Solar System Scope giúp học sinh quan sát trực quan điều gì?",
      "options": [
        "Sự chuyển động quay của các hành tinh quanh Mặt Trời, quỹ đạo và vị trí tương đối giữa các thiên thể trong không gian 3D",
        "Thời tiết hàng ngày tại trường học",
        "Sơ đồ giao thông của thành phố",
        "Cấu tạo của một chiếc xe máy"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Solar System Scope mô phỏng vũ trụ 3D trực quan, tái hiện chân thực quỹ đạo hành tinh.",
      "hint": "Quỹ đạo chuyển động của các hành tinh trong Hệ Mặt Trời 3D."
    },
    {
      "id": "tin9-b5-mc15",
      "type": "multiple_choice",
      "question": "Khả năng 'Tua nhanh / Làm chậm thời gian' trong các phần mềm mô phỏng mang lại lợi ích gì?",
      "options": [
        "Quan sát rõ các hiện tượng diễn ra quá nhanh (như phản ứng nổ) hoặc các hiện tượng diễn ra quá chậm kéo dài hàng triệu năm (sự trôi dạt lục địa, tiến hóa sinh học)",
        "Làm cho giờ tan học đến nhanh hơn",
        "Tăng tuổi thọ của học sinh",
        "Tự động giải xong bài kiểm tra"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Điều khiển tốc độ thời gian giúp con người nắm bắt những quy luật vượt khỏi giới hạn quan sát tự nhiên.",
      "hint": "Quan sát các hiện tượng cực nhanh hoặc cực chậm kéo dài."
    }
  ],
  "tin9-bai-6": [
    {
      "id": "g9-b6-de-1",
      "question": "Phần mềm mô phỏng (Simulation Software) trong giáo dục mang lại lợi ích nổi bật nào?",
      "options": [
        "Tự động làm bài thi tốt nghiệp thay cho học sinh.",
        "Thay thế hoàn toàn việc đọc sách giáo khoa.",
        "Giúp học sinh quan sát trực quan các hiện tượng vật lý, hóa học, sinh học nguy hiểm hoặc khó thực hiện trong phòng thí nghiệm thực tế một cách an toàn.",
        "Chỉ dùng để chơi game giải trí."
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 25): Phần mềm mô phỏng giúp học sinh tương tác với các mô hình trực quan, an toàn, tiết kiệm chi phí hóa chất thiết bị.",
      "hint": "Quan sát hiện tượng phức tạp hoặc nguy hiểm một cách an toàn."
    },
    {
      "id": "g9-b6-tb-1",
      "question": "Nền tảng thí nghiệm ảo tương tác mở nổi tiếng thế giới nào thường được dùng để mô phỏng mạch điện, quang học và chuyển động vật lý?",
      "options": [
        "Trình duyệt Cốc Cốc",
        "Phần mềm Unikey",
        "Phần mềm nén WinRAR",
        "PhET Interactive Simulations (Đại học Colorado)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 26): Nền tảng PhET cung cấp hàng trăm mô phỏng khoa học tương tác miễn phí bằng Tiếng Việt.",
      "hint": "PhET của Đại học Colorado."
    },
    {
      "id": "tin9-b6-mc1",
      "type": "multiple_choice",
      "question": "Khi thực hành với phần mềm mô phỏng hệ thống năng lượng (như Energy Skate Park trên PhET), ta có thể quan sát sự chuyển hóa qua lại giữa các dạng năng lượng nào?",
      "options": [
        "Động năng, thế năng hấp dẫn và nhiệt năng",
        "Năng lượng hạt nhân và hóa năng",
        "Năng lượng âm thanh và năng lượng ánh sáng",
        "Năng lượng gió và năng lượng thủy triều"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 28): Mô phỏng trượt ván minh họa định luật bảo toàn năng lượng: thế năng chuyển hóa thành động năng và một phần thành nhiệt năng do ma sát.",
      "hint": "Thế năng, động năng và nhiệt năng."
    },
    {
      "id": "tin9-b6-mc2",
      "type": "multiple_choice",
      "question": "Trong mô phỏng mạch điện trực tuyến, nếu mắc thêm một điện trở nối tiếp vào mạch kín, cường độ dòng điện trong mạch sẽ biến đổi như thế nào?",
      "options": [
        "Mạch điện phát nổ ngay lập tức",
        "Cường độ dòng điện không hề thay đổi",
        "Cường độ dòng điện giảm đi (đèn sáng yếu hơn)",
        "Cường độ dòng điện tăng vọt gấp đôi"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 29): Theo định luật Ôm `I = U / R`, khi điện trở tổng tăng thì cường độ dòng điện trong mạch sẽ giảm xuống.",
      "hint": "Điện trở tăng cản trở dòng điện làm dòng điện giảm."
    },
    {
      "id": "tin9-b6-mc3",
      "type": "multiple_choice",
      "question": "Để lưu lại kết quả một lần thử nghiệm mô phỏng trên máy tính làm tư liệu báo cáo, em nên dùng thao tác nào?",
      "options": [
        "Chụp ảnh màn hình (Screenshot / Phím PrtSc) hoặc quay video màn hình",
        "Tắt máy tính đột ngột bằng nút nguồn",
        "Rút dây cáp màn hình",
        "Dùng bút dạ vẽ trực tiếp lên mặt kính màn hình"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 30): Chụp ảnh màn hình (PrtScn hoặc Snipping Tool) là cách lưu giữ số liệu và biểu đồ trực quan nhanh nhất.",
      "hint": "Chụp ảnh màn hình Screenshot."
    },
    {
      "id": "tin9-b6-mc4",
      "type": "multiple_choice",
      "question": "Một trong những ưu điểm lớn khi học giải phẫu thực vật qua mô phỏng 3D là gì?",
      "options": [
        "Ngửi thấy mùi thơm của hoa quả thật qua màn hình",
        "Không cần mở máy tính vẫn học được",
        "Được ăn thử quả của cây mô phỏng",
        "Có thể phóng to, xoay 360 độ và bóc tách từng lớp tế bào mà không làm hỏng mẫu vật thật"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 31): Mô hình 3D cho phép tương tác đa chiều, xoay lật phóng to chi tiết tế bào siêu nhỏ.",
      "hint": "Phóng to và xoay 360 độ bóc tách từng lớp tế bào."
    },
    {
      "id": "tin9-b6-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các thao tác thực hành khai thác phần mềm mô phỏng:",
      "options": [
        "a) Nên ghi chép lại các giá trị đầu vào và kết quả đầu ra tương ứng vào bảng số liệu",
        "b) Có thể thử nghiệm với các giá trị cực đoan (rất lớn hoặc bằng 0) để kiểm tra tính ổn định của mô hình",
        "c) Không cần đọc hướng dẫn sử dụng trước khi điều khiển các nút bấm mô phỏng",
        "d) Phần mềm mô phỏng cho phép lặp lại thí nghiệm vô số lần với cùng điều kiện kiểm soát"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Đọc kĩ quy ước và thanh trượt điều khiển trước khi thao tác giúp tránh sai sót và hiểu đúng bản chất mô phỏng.",
      "hint": "Cần đọc kĩ hướng dẫn trước khi tiến hành thí nghiệm mô phỏng."
    },
    {
      "id": "tin9-b6-fb1",
      "type": "fill_blank",
      "question": "Khi tiến hành thí nghiệm mô phỏng, người học sử dụng các thanh [1] để thay đổi thông số và quan sát sự biến đổi [2] trên màn hình.",
      "blankAnswers": [
        "trượt (Sliders)",
        "đồ thị / hình ảnh"
      ],
      "wordBank": [
        "trượt (Sliders)",
        "đồ thị / hình ảnh",
        "thước kẻ gỗ",
        "nút nguồn",
        "bàn phím số",
        "mã nhị phân"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 28): Thanh trượt (Slider) là công cụ điều khiển thông số trực quan phổ biến nhất trong các phần mềm mô phỏng.",
      "hint": "Thanh trượt (Slider) để điều chỉnh thông số."
    },
    {
      "id": "tin9-b6-m1",
      "type": "matching",
      "question": "Nối công cụ trong mô phỏng mạch điện PhET ở cột bên trái với chức năng tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Vôn kế (Voltmeter)"
        },
        {
          "id": "2",
          "text": "Ampe kế (Ammeter)"
        },
        {
          "id": "3",
          "text": "Pin (Nguồn điện)"
        },
        {
          "id": "4",
          "text": "Khóa K (Công tắc)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Cung cấp hiệu điện thế cho mạch hoạt động"
        },
        {
          "id": "b",
          "text": "Đóng hoặc ngắt dòng điện trong mạch"
        },
        {
          "id": "c",
          "text": "Đo hiệu điện thế giữa hai điểm trong mạch"
        },
        {
          "id": "d",
          "text": "Đo cường độ dòng điện chạy qua dây dẫn"
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
      "explanation": "SGK Tin học 9 KNTT (Trang 29): Các linh kiện cơ bản trong mô phỏng lắp ráp mạch điện ảo.",
      "hint": "Vôn kế đo hiệu điện thế; Ampe kế đo cường độ; Pin là nguồn; Khóa K ngắt mở mạch."
    },
    {
      "id": "tin9-b6-mc5",
      "type": "multiple_choice",
      "question": "Khi mô phỏng hiện tượng rơi tự do trong chân không (không có lực cản không khí), một chiếc lông vũ và một quả bi sắt sẽ rơi như thế nào?",
      "options": [
        "Chiếc lông vũ bốc cháy do ma sát",
        "Cả hai chạm đất cùng một lúc với cùng gia tốc rơi",
        "Chiếc lông vũ bay ngược lên trời",
        "Quả bi sắt luôn chạm đất trước vì nặng hơn"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 28): Thí nghiệm nổi tiếng của Galileo: trong chân không không có ma sát, mọi vật đều rơi với cùng một gia tốc trọng trường g.",
      "hint": "Trong chân không mọi vật rơi với cùng gia tốc."
    },
    {
      "id": "tin9-b6-mc6",
      "type": "multiple_choice",
      "question": "Để so sánh dữ liệu thực tế đo được ngoài đời với dữ liệu tính toán từ mô phỏng, phương tiện nào sau đây là trực quan nhất?",
      "options": [
        "Đọc nhẩm trong miệng",
        "Viết một bức thư tay dài 5 trang",
        "Xóa một trong hai bộ số liệu đi",
        "Vẽ hai đường đồ thị trên cùng một hệ trục tọa độ để quan sát độ lệch"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 30): Đồ thị so sánh trực quan hai đường cong giúp nhận thấy ngay sai số giữa mô phỏng và thực tế.",
      "hint": "Vẽ đồ thị so sánh hai đường biểu diễn trên cùng hệ trục."
    },
    {
      "id": "tin9-b6-mc7",
      "type": "multiple_choice",
      "question": "Thao tác \"Reset\" trong các phần mềm mô phỏng dùng để làm gì?",
      "options": [
        "Tắt máy tính",
        "Đưa toàn bộ thông số và thí nghiệm về trạng thái mặc định ban đầu",
        "Gửi kết quả lên Facebook",
        "Xóa vĩnh viễn phần mềm khỏi ổ đĩa"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 29): Nút Reset khôi phục toàn bộ các thông số về mặc định ban đầu để bắt đầu lượt thí nghiệm mới.",
      "hint": "Reset là đưa về trạng thái ban đầu."
    },
    {
      "id": "tin9-b6-mc8",
      "type": "multiple_choice",
      "question": "Khi thực hành với phần mềm mô phỏng mạch điện trực tuyến (như Tinkercad Circuits hoặc PhET Circuit), thao tác đầu tiên là gì?",
      "options": [
        "Kéo thả các linh kiện cần thiết (nguồn pin, bóng đèn, công tắc, dây dẫn) từ thanh công cụ vào vùng làm việc",
        "Bấm phím tắt máy tính",
        "Đo nhiệt độ phòng học",
        "Lấy kéo cắt dây điện thật"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 26): Bắt đầu bằng việc chọn và bố trí các linh kiện ảo lên bảng mạch mô phỏng.",
      "hint": "Kéo thả linh kiện từ thư viện vào vùng làm việc ảo."
    },
    {
      "id": "tin9-b6-mc9",
      "type": "multiple_choice",
      "question": "Nếu trong mô phỏng mạch điện ảo, em vô tình đấu nối đoản mạch (chập cực dương và cực âm của pin), điều gì sẽ xảy ra?",
      "options": [
        "Phần mềm sẽ hiển thị cảnh báo (cháy bóng đèn, nổ pin ảo hoặc bốc khói ảo) giúp học sinh nhận biết lỗi nguy hiểm mà không gây chấn thương thực tế nào",
        "Máy tính thật của học sinh sẽ bị nổ tung",
        "Toàn bộ căn phòng học bị mất điện",
        "Phần mềm sẽ tự động biến mất"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Mô phỏng tái hiện hậu quả trực quan để học sinh rút kinh nghiệm an toàn mà không hề nguy hiểm thân thể.",
      "hint": "Cảnh báo chập cháy ảo trực quan, an toàn tuyệt đối cho người học."
    },
    {
      "id": "tin9-b6-mc10",
      "type": "multiple_choice",
      "question": "Nút lệnh 'Start Simulation' (Bắt đầu mô phỏng) trong các phần mềm mô phỏng dùng để làm gì?",
      "options": [
        "Kích hoạt mô hình hoạt động theo các quy luật vật lí để người dùng quan sát diễn biến và đo đạc số liệu",
        "In mạch điện ra giấy",
        "Lưu dự án lên đám mây",
        "Xóa toàn bộ linh kiện"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Start Simulation khởi động động cơ tính toán vật lí để mô hình vận hành chuyển động.",
      "hint": "Kích hoạt mô hình vận hành và bắt đầu tính toán."
    },
    {
      "id": "tin9-b6-mc11",
      "type": "multiple_choice",
      "question": "Thao tác thay đổi các tham số đầu vào (như tăng điện áp của nguồn, thay đổi điện trở của biến trở) nhằm mục đích gì?",
      "options": [
        "Quan sát và ghi nhận sự thay đổi tương ứng của các đại lượng đầu ra (như cường độ dòng điện, độ sáng của đèn) để kiểm chứng định luật Ôm",
        "Để làm hỏng phần mềm",
        "Để đổi màu giao diện máy tính",
        "Không có mục đích gì"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Biến đổi tham số độc lập và quan sát biến phụ thuộc là phương pháp thực nghiệm khoa học cốt lõi.",
      "hint": "Kiểm tra mối quan hệ giữa các đại lượng và kiểm chứng định luật."
    },
    {
      "id": "tin9-b6-mc12",
      "type": "multiple_choice",
      "question": "Trong phần mềm mô phỏng giải phẫu cơ thể người hoặc động vật 3D, thao tác nào cho phép quan sát các cơ quan ẩn sâu bên trong?",
      "options": [
        "Ẩn bớt các lớp da, cơ bên ngoài hoặc điều chỉnh độ trong suốt của các bộ phận",
        "Nhỏ cồn vào màn hình",
        "Xoay ngược màn hình máy tính",
        "Tắt loa máy tính"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tính năng bóc tách từng lớp cơ quan 3D (Dissection) cho phép khám phá cấu trúc giải phẫu sinh học sâu sắc.",
      "hint": "Ẩn bớt các lớp bên ngoài hoặc chỉnh độ trong suốt."
    },
    {
      "id": "tin9-b6-mc13",
      "type": "multiple_choice",
      "question": "Để đo hiệu điện thế giữa hai đầu bóng đèn trong phần mềm mô phỏng, em sử dụng thiết bị đo ảo nào và mắc như thế nào?",
      "options": [
        "Dùng Vôn kế (Voltmeter) ảo và mắc SONG SONG với hai đầu bóng đèn",
        "Dùng Ampe kế ảo và mắc song song",
        "Dùng thước dây",
        "Dùng nhiệt kế"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Quy tắc vật lí: Vôn kế luôn mắc song song để đo hiệu điện thế; Ampe kế mắc nối tiếp để đo cường độ dòng điện.",
      "hint": "Vôn kế (Voltmeter) ảo mắc song song."
    },
    {
      "id": "tin9-b6-mc14",
      "type": "multiple_choice",
      "question": "Sau khi kết thúc phiên thực hành trên phần mềm mô phỏng, học sinh cần làm gì để hoàn thiện bài học?",
      "options": [
        "Ghi chép số liệu đo đạc vào bảng báo cáo thực hành, so sánh với công thức lí thuyết và đưa ra nhận xét kết luận",
        "Tắt máy tính bỏ về ngay",
        "Xóa hết kết quả đo được",
        "Chép nguyên bài của bạn khác"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Xử lí số liệu và đối chiếu lí thuyết là bước hoàn tất quy trình thực nghiệm khoa học.",
      "hint": "Ghi chép số liệu, đối chiếu lí thuyết và rút ra kết luận."
    },
    {
      "id": "tin9-b6-mc15",
      "type": "multiple_choice",
      "question": "Ưu điểm của việc chia sẻ tệp dự án mô phỏng cho các bạn trong nhóm học tập là gì?",
      "options": [
        "Các thành viên có thể cùng xem, cùng tương tác trên cùng một mô hình và thảo luận giải pháp từ xa",
        "Giúp máy tính của các bạn bị quá tải",
        "Để khoe khoang",
        "Không có lợi ích gì"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Chia sẻ dự án mô phỏng hỗ trợ đắc lực cho hoạt động học tập hợp tác nhóm STEM.",
      "hint": "Cùng tương tác, thảo luận trên cùng mô hình từ xa."
    }
  ],
  "tin9-bai-7": [
    {
      "id": "g9-b7-de-1",
      "question": "Khi làm việc nhóm để chuẩn bị bài báo cáo thuyết trình dự án, công cụ nào sau đây cho phép các thành viên cùng soạn thảo slide trực tuyến thời gian thực?",
      "options": [
        "Google Slides hoặc Microsoft PowerPoint Online",
        "Máy tính cầm tay Calc",
        "Ứng dụng Notepad",
        "Phần mềm vẽ Paint"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 31): Các công cụ trình chiếu trên nền tảng đám mây cho phép nhiều người cùng truy cập và chỉnh sửa đồng thời.",
      "hint": "Google Slides hoặc PowerPoint Online."
    },
    {
      "id": "g9-b7-tb-1",
      "question": "Để bài báo cáo thuyết trình dự án gây ấn tượng tích cực với người nghe, nhóm thuyết trình cần tuân thủ nguyên tắc nào?",
      "options": [
        "Chiếu liên tục 100 trang slide trong vòng 5 phút.",
        "Đọc nguyên văn toàn bộ từng chữ có trên slide từ đầu đến cuối.",
        "Bố cục mạch lạc, thông tin cô đọng, sử dụng sơ đồ/biểu đồ trực quan và kết hợp lời nói truyền cảm, tự tin.",
        "Bật thật nhiều nhạc nền ồn ào át cả tiếng người thuyết trình."
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Thuyết trình hiệu quả đòi hỏi sự tương tác với khán giả, slide chỉ đóng vai trò hỗ trợ trực quan, không phải bản đọc chép.",
      "hint": "Bố cục mạch lạc, thông tin cô đọng, kết hợp biểu đồ trực quan."
    },
    {
      "id": "tin9-b7-mc1",
      "type": "multiple_choice",
      "question": "Khi trình bày thông tin để trao đổi và hợp tác trong nhóm, yếu tố nào quan trọng nhất quyết định sự thành công?",
      "options": [
        "Thông tin rõ ràng, cô đọng, có cấu trúc logic và phương tiện trực quan hỗ trợ",
        "Chỉ một người nói và không cho các thành viên khác đóng góp ý kiến",
        "Nói càng nhanh và càng to càng tốt để không ai phản bác được",
        "Dùng nhiều thuật ngữ tiếng nước ngoài khó hiểu"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 33): Giao tiếp hiệu quả đòi hỏi thông tin khúc chiết, cấu trúc mạch lạc, hình ảnh hỗ trợ và tinh thần lắng nghe hai chiều.",
      "hint": "Rõ ràng, cô đọng, logic và có hình ảnh trực quan."
    },
    {
      "id": "tin9-b7-mc2",
      "type": "multiple_choice",
      "question": "Sơ đồ tư duy (Mindmap) đặc biệt hữu ích trong giai đoạn nào của quá trình làm việc nhóm?",
      "options": [
        "Giai đoạn thanh lí máy tính",
        "Giai đoạn kí hợp đồng trả tiền",
        "Giai đoạn đóng gói sản phẩm giao cho khách hàng",
        "Giai đoạn động não (Brainstorming) để phát triển ý tưởng và phân công công việc"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 34): Sơ đồ tư duy kích thích tư duy liên kết, thu thập ý tưởng nhanh từ các thành viên trong buổi thảo luận.",
      "hint": "Động não (Brainstorming) để tổng hợp ý tưởng."
    },
    {
      "id": "tin9-b7-mc3",
      "type": "multiple_choice",
      "question": "Để báo cáo tiến độ thực hiện dự án của từng thành viên trong nhóm, công cụ trực quan nào sau đây là phù hợp nhất?",
      "options": [
        "Một danh sách số điện thoại",
        "Bảng tiến độ dạng biểu đồ Gantt (Gantt Chart) hoặc bảng Kanban",
        "Một bức vẽ chân dung bằng màu nước",
        "Một tệp ghi âm giọng nói dài 2 tiếng"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 35): Biểu đồ Gantt hoặc bảng Kanban (To Do, In Progress, Done) giúp theo dõi tiến độ công việc trực quan.",
      "hint": "Biểu đồ Gantt hoặc bảng theo dõi Kanban."
    },
    {
      "id": "tin9-b7-mc4",
      "type": "multiple_choice",
      "question": "Khi thuyết trình trước lớp, người trình bày nên duy trì giao tiếp mắt (Eye contact) với khán giả như thế nào?",
      "options": [
        "Nhắm tịt mắt lại khi nói để đỡ run",
        "Chỉ nhìn chằm chằm vào màn hình máy tính hoặc màn chiếu từ đầu đến cuối",
        "Nhìn bao quát khắp phòng học, tương tác ánh mắt tự nhiên với mọi người",
        "Chỉ nhìn lên trần nhà hoặc sàn nhà"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 36): Eye contact tạo sự gắn kết, tôn trọng khán giả và giúp người thuyết trình điều chỉnh bài nói theo cảm xúc người nghe.",
      "hint": "Giao tiếp mắt tự nhiên và bao quát khắp khán phòng."
    },
    {
      "id": "tin9-b7-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các nguyên tắc giao tiếp và hợp tác trong môi trường số:",
      "options": [
        "a) Lắng nghe tích cực và tôn trọng ý kiến phản biện của bạn bè giúp hoàn thiện sản phẩm chung",
        "b) Trong văn bản gửi nhóm, viết hoa toàn bộ TẤT CẢ CÁC TỪ được coi là hành vi lịch sự",
        "c) Sử dụng công cụ chia sẻ đám mây giúp các thành viên cùng chỉnh sửa một tài liệu theo thời gian thực",
        "d) Cần thống nhất quy ước đặt tên tệp và cấu trúc thư mục trước khi bắt đầu dự án nhóm"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Viết hoa toàn bộ (CAPS LOCK) trên không gian mạng bị coi là hành vi \"hét vào mặt người khác\", rất mất lịch sự.",
      "hint": "Viết hoa toàn bộ từ ngữ trên mạng bị coi là to tiếng, bất lịch sự."
    },
    {
      "id": "tin9-b7-fb1",
      "type": "fill_blank",
      "question": "Để trao đổi và hợp tác trực tuyến hiệu quả, các thành viên cần thống nhất mục tiêu chung, phân công công việc [1] và sử dụng các công cụ [2] hỗ trợ.",
      "blankAnswers": [
        "rõ ràng",
        "điện toán đám mây"
      ],
      "wordBank": [
        "rõ ràng",
        "điện toán đám mây",
        "mập mờ",
        "thủ công",
        "ngẫu nhiên",
        "bảo thủ"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 33): Phân công trách nhiệm rõ ràng kết hợp nền tảng đám mây tạo nên sức mạnh nhóm.",
      "hint": "Phân công rõ ràng và ứng dụng công nghệ đám mây."
    },
    {
      "id": "tin9-b7-m1",
      "type": "matching",
      "question": "Nối công cụ trực tuyến ở cột bên trái với mục đích hợp tác phù hợp ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Google Slides / Canva"
        },
        {
          "id": "2",
          "text": "Google Drive / OneDrive"
        },
        {
          "id": "3",
          "text": "Trello / Notion"
        },
        {
          "id": "4",
          "text": "Google Meet / Zoom"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Quản lí phân công nhiệm vụ và tiến độ dự án nhóm"
        },
        {
          "id": "b",
          "text": "Lưu trữ và chia sẻ kho tệp tin dữ liệu chung của nhóm"
        },
        {
          "id": "c",
          "text": "Cùng nhau thiết kế bài trình chiếu báo cáo dự án"
        },
        {
          "id": "d",
          "text": "Họp trực tuyến trao đổi ý kiến từ xa có âm thanh và hình ảnh"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "b",
        "3": "a",
        "4": "d"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 34, 35): Hệ sinh thái công cụ hỗ trợ cộng tác làm việc nhóm thời đại số.",
      "hint": "Nối công cụ với chức năng hỗ trợ làm việc nhóm."
    },
    {
      "id": "tin9-b7-mc5",
      "type": "multiple_choice",
      "question": "Khi nhận được ý kiến đóng góp trái chiều từ thành viên khác trong nhóm, thái độ chuẩn mực nhất là gì?",
      "options": [
        "Rời ngay khỏi nhóm chat và không thèm nói chuyện nữa",
        "Bình tĩnh lắng nghe, phân tích các điểm hợp lí và cùng nhau thảo luận tìm giải pháp tối ưu",
        "Lập tức lớn tiếng chỉ trích bạn",
        "Xóa toàn bộ bài làm của bạn đó"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 36): Tinh thần cởi mở, lắng nghe phản biện trên tinh thần xây dựng là cốt lõi của kĩ năng hợp tác thế kỉ 21.",
      "hint": "Bình tĩnh lắng nghe và cùng phân tích xây dựng."
    },
    {
      "id": "tin9-b7-mc6",
      "type": "multiple_choice",
      "question": "Một bài thuyết trình đạt chuẩn về mặt trực quan cần tránh điều nào sau đây?",
      "options": [
        "Sử dụng biểu đồ để minh họa số liệu",
        "Màu sắc tương phản rõ ràng giữa chữ và nền",
        "Dày đặc chữ, các đoạn văn bản quá dài và phông chữ quá nhỏ khó đọc",
        "Hình ảnh minh họa có độ phân giải cao"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 36): Tránh nhồi nhét văn bản quá dài lên slide; người nghe sẽ mải đọc chữ mà không chú ý đến lời thuyết trình.",
      "hint": "Tránh slide quá nhiều chữ và chữ quá nhỏ."
    },
    {
      "id": "tin9-b7-mc7",
      "type": "multiple_choice",
      "question": "Tính năng \"Lịch sử phiên bản\" (Version History) trên các tài liệu đám mây mang lại lợi ích to lớn gì cho làm việc nhóm?",
      "options": [
        "Tăng dung lượng pin cho máy tính",
        "Tự động chấm điểm bài làm của từng bạn",
        "Gửi tin nhắn chúc mừng sinh nhật tự động",
        "Biết rõ ai đã chỉnh sửa nội dung gì vào lúc nào và có thể khôi phục lại bản cũ nếu bị xóa nhầm"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 35): Version History giúp kiểm soát lịch sử biên tập, xem đóng góp của từng cá nhân và khôi phục dữ liệu an toàn.",
      "hint": "Xem lịch sử chỉnh sửa và khôi phục lại phiên bản cũ."
    },
    {
      "id": "tin9-b7-mc8",
      "type": "multiple_choice",
      "question": "Khi làm việc nhóm để tạo bài thuyết trình báo cáo dự án, việc 'Đồng tác giả' (Co-authoring) trực tuyến đem lại ưu điểm gì?",
      "options": [
        "Nhiều thành viên có thể cùng mở, cùng chỉnh sửa nội dung trên cùng một tệp trình chiếu cùng lúc theo thời gian thực",
        "Chỉ một người làm việc còn những người khác bị khóa tài khoản",
        "Tệp sẽ tự động chia làm 10 mảnh độc lập",
        "Làm tăng giá tiền của phần mềm"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 30): Co-authoring (như Google Slides, PowerPoint Online) giúp làm việc nhóm tức thì, không bị chồng chéo phiên bản.",
      "hint": "Nhiều người cùng chỉnh sửa đồng thời theo thời gian thực."
    },
    {
      "id": "tin9-b7-mc9",
      "type": "multiple_choice",
      "question": "Quyền truy cập chia sẻ tài liệu trực tuyến thường gồm những cấp độ phân quyền cơ bản nào?",
      "options": [
        "Người xem (Viewer - chỉ được xem), Người nhận xét (Commenter - được ghi chú góp ý) và Người chỉnh sửa (Editor - toàn quyền sửa)",
        "Quyền xóa máy tính và quyền cài lại hệ điều hành",
        "Chỉ có đúng một quyền duy nhất là xóa tệp",
        "Không có cấp độ phân quyền nào"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Ba cấp độ chuẩn bảo mật chia sẻ: Viewer (Chỉ xem), Commenter (Bình luận), Editor (Chỉnh sửa).",
      "hint": "Viewer (Xem), Commenter (Bình luận) và Editor (Chỉnh sửa)."
    },
    {
      "id": "tin9-b7-mc10",
      "type": "multiple_choice",
      "question": "Tính năng Lịch sử phiên bản (Version History) trong các công cụ cộng tác trực tuyến có vai trò bảo vệ công việc nhóm như thế nào?",
      "options": [
        "Theo dõi ai đã sửa nội dung gì vào thời điểm nào và cho phép khôi phục lại bất kì phiên bản cũ nào nếu lỡ bị bạn khác xóa nhầm",
        "Tự động xóa tệp sau 24 giờ",
        "Khóa không cho ai xem bài",
        "In bài tự động ra máy in"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Version History là chiếc phao cứu sinh ghi lại vết tích lịch sử đóng góp và phòng ngừa tai nạn mất dữ liệu.",
      "hint": "Theo dõi người chỉnh sửa và khôi phục phiên bản cũ khi bị xóa nhầm."
    },
    {
      "id": "tin9-b7-mc11",
      "type": "multiple_choice",
      "question": "Để trao đổi, góp ý về một đoạn văn cụ thể trong bài báo cáo chung mà không làm thay đổi trực tiếp nội dung gốc, em dùng tính năng nào?",
      "options": [
        "Tính năng Thêm nhận xét / Bình luận (Add Comment)",
        "Tính năng Xóa đoạn văn (Delete)",
        "Tính năng Cắt đoạn văn (Cut)",
        "Tính năng Khởi động lại máy"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Add Comment tạo luồng trao đổi bên lề giúp nhóm thảo luận dân chủ trước khi duyệt chỉnh sửa.",
      "hint": "Thêm nhận xét / Bình luận (Add Comment)."
    },
    {
      "id": "tin9-b7-mc12",
      "type": "multiple_choice",
      "question": "Kĩ thuật @mention (Gắn thẻ tên người khác, ví dụ @NguyenVanA) trong bình luận có tác dụng gì?",
      "options": [
        "Gửi thông báo trực tiếp qua email hoặc ứng dụng cho người đó và giao nhiệm vụ xử lí cụ thể cho họ",
        "Xóa bạn đó khỏi nhóm",
        "Đổi mật khẩu tài khoản của bạn đó",
        "Làm bạn đó bị ngắt kết nối mạng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "@mention điều hướng sự chú ý và phân quyền trách nhiệm cụ thể cho thành viên trong dự án.",
      "hint": "Gửi thông báo và điều hướng giao việc cho đúng thành viên."
    },
    {
      "id": "tin9-b7-mc13",
      "type": "multiple_choice",
      "question": "Nguyên tắc thiết kế bài trình bày báo cáo dự án đảm bảo tính 'Chuyên nghiệp và Đồng bộ' đòi hỏi điều gì?",
      "options": [
        "Nhất quán về phông chữ, tông màu chủ đạo, kích thước tiêu đề và bố cục đồ họa xuyên suốt từ slide đầu đến slide cuối",
        "Mỗi trang chiếu dùng một phông chữ và 10 màu sắc sặc sỡ khác nhau",
        "Trang nào cũng phải chèn video ca nhạc dài 5 phút",
        "Không ghi tên tác giả"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tính đồng bộ thẩm mỹ khẳng định sự chuẩn mực và tôn trọng người tiếp nhận thông điệp.",
      "hint": "Đồng bộ phông chữ, bảng màu và phong cách bố cục xuyên suốt."
    },
    {
      "id": "tin9-b7-mc14",
      "type": "multiple_choice",
      "question": "Khi gửi liên kết chia sẻ tài liệu bài tập cho giáo viên chấm điểm, em nên phân quyền ở chế độ nào là phù hợp nhất?",
      "options": [
        "Người xem (Viewer) hoặc Người nhận xét (Commenter) để giáo viên xem và ghi chú nhận xét mà không bị xáo trộn bài",
        "Bắt buộc đặt mật khẩu khóa không cho thầy cô xem",
        "Chỉ gửi tệp rỗng",
        "Xóa tệp trước khi gửi link"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Cấp quyền Viewer/Commenter vừa giúp thầy cô đọc và nhận xét thuận lợi, vừa giữ nguyên trạng bài làm của học sinh.",
      "hint": "Quyền Viewer (Xem) hoặc Commenter (Nhận xét)."
    },
    {
      "id": "tin9-b7-mc15",
      "type": "multiple_choice",
      "question": "Hành vi tự ý vào xóa bài của bạn khác trong tệp tài liệu cộng tác chung của nhóm thể hiện điều gì?",
      "options": [
        "Hành vi thiếu văn hóa hợp tác, vi phạm kỉ luật làm việc nhóm và thiếu tôn trọng công sức của bạn bè",
        "Hành động dũng cảm",
        "Giúp nhóm đạt điểm cao hơn",
        "Không có vấn đề gì"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Làm việc cộng tác đòi hỏi tinh thần trách nhiệm, tôn trọng sản phẩm của đồng đội và thảo luận trước khi thay đổi.",
      "hint": "Thiếu văn hóa hợp tác và không tôn trọng công sức tập thể."
    }
  ],
  "tin9-bai-8": [
    {
      "id": "g9-b8-de-1",
      "question": "Khi chia sẻ tệp tài liệu học tập qua Google Drive, quyền chia sẻ nào cho phép người nhận ĐƯỢC PHÉP SỬA nội dung tệp?",
      "options": [
        "Quyền Người chỉnh sửa (Editor)",
        "Quyền Người xem (Viewer)",
        "Quyền Hạn chế (Restricted)",
        "Quyền Người nhận xét (Commenter)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 36): Quyền Editor (Người chỉnh sửa) cho phép thay đổi dữ liệu; Viewer chỉ được xem; Commenter chỉ được thêm nhận xét.",
      "hint": "Editor có nghĩa là người chỉnh sửa."
    },
    {
      "id": "g9-b8-tb-1",
      "question": "Tính năng \"Lịch sử phiên bản\" (Version History) trên các dịch vụ đám mây (Google Docs/Drive) có tác dụng gì?",
      "options": [
        "Tự động dịch văn bản sang 100 thứ tiếng.",
        "Xóa vĩnh viễn tệp sau 1 ngày sử dụng.",
        "Xem lại lịch sử ai đã sửa nội dung gì vào thời điểm nào và có thể khôi phục lại phiên bản cũ khi cần thiết.",
        "Tăng tốc độ kết nối Internet lên gấp đôi."
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Lịch sử phiên bản giúp theo dõi sự đóng góp của từng thành viên trong nhóm và an toàn phục hồi dữ liệu khi bị chỉnh sửa nhầm.",
      "hint": "Xem lại và khôi phục các phiên bản cũ đã lưu."
    },
    {
      "id": "tin9-b8-mc1",
      "type": "multiple_choice",
      "question": "Khi chia sẻ một tệp tin trên Google Drive, quyền \"Người nhận xét\" (Commenter) cho phép người nhận làm gì?",
      "options": [
        "Xem tài liệu và để lại các ghi chú góp ý (bình luận) nhưng không được tự ý sửa nội dung gốc",
        "Chỉ xem được tiêu đề tệp tin mà không đọc được bên trong",
        "Được quyền xóa vĩnh viễn tệp tin của chủ sở hữu",
        "Được toàn quyền chỉnh sửa và thay đổi nội dung văn bản"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 38): Phân quyền chia sẻ: Viewer (Chỉ xem), Commenter (Nhận xét/góp ý), Editor (Chỉnh sửa toàn quyền).",
      "hint": "Commenter chỉ được nhận xét góp ý, không sửa trực tiếp."
    },
    {
      "id": "tin9-b8-mc2",
      "type": "multiple_choice",
      "question": "Để thu thập ý kiến đăng kí tham gia câu lạc bộ Tin học của các bạn học sinh trong trường, công cụ trực tuyến nào sau đây là tối ưu nhất?",
      "options": [
        "Google Bản đồ (Google Maps)",
        "Phần mềm máy tính Calculator",
        "Google Dịch (Google Translate)",
        "Google Biểu mẫu (Google Forms)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 39): Google Forms là công cụ chuyên dụng để tạo khảo sát, bảng đăng kí và tự động xuất dữ liệu ra Google Sheets.",
      "hint": "Google Forms chuyên dùng để tạo mẫu đăng kí và khảo sát."
    },
    {
      "id": "tin9-b8-mc3",
      "type": "multiple_choice",
      "question": "Dữ liệu phản hồi thu thập được từ Google Forms có thể tự động liên kết và xuất ra ứng dụng nào để tính toán và vẽ biểu đồ?",
      "options": [
        "Phần mềm vẽ Paint",
        "Google Trang tính (Google Sheets)",
        "Phần mềm gõ Unikey",
        "Trình phát nhạc Windows Media Player"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 40): Google Forms tự động đồng bộ mọi câu trả lời vào Google Sheets theo thời gian thực.",
      "hint": "Tự động đồng bộ vào Google Sheets (bảng tính trực tuyến)."
    },
    {
      "id": "tin9-b8-mc4",
      "type": "multiple_choice",
      "question": "Khi tạo câu hỏi trong Google Forms, dạng câu hỏi nào cho phép người trả lời chọn NHIỀU ĐÁP ÁN cùng một lúc?",
      "options": [
        "Trắc nghiệm (Multiple choice)",
        "Đoạn (Paragraph)",
        "Trả lời ngắn (Short answer)",
        "Hộp kiểm (Checkboxes)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 39): Multiple choice hình tròn chỉ chọn được 1; Checkboxes (Hộp kiểm) hình vuông cho phép chọn nhiều lựa chọn.",
      "hint": "Hộp kiểm Checkboxes cho phép chọn nhiều đáp án."
    },
    {
      "id": "tin9-b8-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các thao tác sử dụng công cụ trực tuyến Google Forms và Google Drive:",
      "options": [
        "a) Ta có thể cài đặt câu hỏi bắt buộc (Required) để người trả lời không bỏ sót thông tin quan trọng",
        "b) Khi chia sẻ liên kết Google Forms cho mọi người trả lời, phải cấp quyền \"Chỉnh sửa\" (Editor) cho tất cả",
        "c) Google Forms tự động vẽ sẵn các biểu đồ tròn, biểu đồ cột tổng kết câu trả lời ở tab \"Câu trả lời\"",
        "d) Có thể chèn hình ảnh hoặc video minh họa vào câu hỏi trong Google Forms"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Người trả lời chỉ điền vào biểu mẫu qua link xem, tuyệt đối KHÔNG cấp quyền Editor vì họ sẽ sửa mất cấu trúc đề.",
      "hint": "Người làm khảo sát chỉ cần quyền gửi câu trả lời, không cần quyền Editor."
    },
    {
      "id": "tin9-b8-fb1",
      "type": "fill_blank",
      "question": "Trong Google Forms, để bắt buộc người dùng phải trả lời một câu hỏi trước khi gửi biểu mẫu, ta bật nút gạt [1], còn để xem kết quả tổng hợp ta chuyển sang thẻ [2].",
      "blankAnswers": [
        "Bắt buộc (Required)",
        "Câu trả lời (Responses)"
      ],
      "wordBank": [
        "Bắt buộc (Required)",
        "Câu trả lời (Responses)",
        "Tự động",
        "Cài đặt",
        "Xem trước",
        "Xóa bỏ"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 39, 40): Nút Required bắt buộc trả lời; thẻ Responses hiển thị toàn bộ kết quả khảo sát.",
      "hint": "Required là bắt buộc, Responses là câu trả lời."
    },
    {
      "id": "tin9-b8-m1",
      "type": "matching",
      "question": "Nối loại câu hỏi trong Google Forms ở cột bên trái với mục đích sử dụng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Trả lời ngắn (Short answer)"
        },
        {
          "id": "2",
          "text": "Trắc nghiệm (Multiple choice)"
        },
        {
          "id": "3",
          "text": "Hộp kiểm (Checkboxes)"
        },
        {
          "id": "4",
          "text": "Menu thả xuống (Dropdown)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Chọn một phương án duy nhất trong danh sách rất dài (ví dụ chọn Tỉnh/Thành phố)"
        },
        {
          "id": "b",
          "text": "Điền họ và tên hoặc số điện thoại cá nhân"
        },
        {
          "id": "c",
          "text": "Chọn nhiều sở thích cá nhân (bóng đá, đọc sách, nghe nhạc...)"
        },
        {
          "id": "d",
          "text": "Chọn giới tính Nam hoặc Nữ (chỉ chọn đúng một phương án)"
        }
      ],
      "correctMatches": {
        "1": "b",
        "2": "d",
        "3": "c",
        "4": "a"
      },
      "options": [],
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 39): Các kiểu dữ liệu đầu vào thông minh của Google Forms.",
      "hint": "Short answer: điền tên; Multiple choice: 1 đáp án; Checkbox: nhiều đáp án; Dropdown: danh sách dài."
    },
    {
      "id": "tin9-b8-mc5",
      "type": "multiple_choice",
      "question": "Tính năng \"Rút ngắn URL\" (Shorten URL) khi tạo link gửi Google Forms mang lại tiện ích gì?",
      "options": [
        "Đổi ngôn ngữ biểu mẫu sang tiếng Anh",
        "Đường dẫn liên kết ngắn gọn, đẹp mắt, dễ chép và dễ chia sẻ qua tin nhắn Zalo, SMS",
        "Bảo vệ tệp khỏi virus máy tính",
        "Tăng tốc độ làm bài của người trả lời"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 40): Đường dẫn ngắn giúp người nhận dễ thao tác, không bị gãy link khi gửi qua mạng xã hội.",
      "hint": "Đường dẫn liên kết ngắn gọn, dễ gửi qua tin nhắn."
    },
    {
      "id": "tin9-b8-mc6",
      "type": "multiple_choice",
      "question": "Để ngăn chặn một người gửi câu trả lời khảo sát nhiều lần trong Google Forms, người khảo sát có thể bật tính năng nào trong phần Cài đặt?",
      "options": [
        "Giới hạn ở 1 lần trả lời (Yêu cầu đăng nhập tài khoản Google)",
        "Xóa tệp biểu mẫu",
        "Đổi mật khẩu tài khoản Google Drive",
        "Tắt màn hình sau 5 phút"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 41): \"Limit to 1 response\" yêu cầu người tham gia đăng nhập Gmail và mỗi tài khoản chỉ được nộp bài đúng 1 lần.",
      "hint": "Giới hạn ở 1 lần trả lời (Limit to 1 response)."
    },
    {
      "id": "tin9-b8-mc7",
      "type": "multiple_choice",
      "question": "Khi làm việc nhóm trên Google Docs, nếu em muốn đề xuất chỉnh sửa một câu văn mà không làm mất câu gốc của bạn, em nên dùng chế độ nào?",
      "options": [
        "Chế độ Ngoại tuyến (Offline mode)",
        "Chế độ Chỉnh sửa trực tiếp (Editing mode)",
        "Chế độ Đề xuất (Suggesting mode)",
        "Chế độ Xem (Viewing mode)"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 38): Chế độ Đề xuất (Suggesting) hiển thị phần sửa dưới dạng gợi ý để chủ tài liệu duyệt (Accept) hoặc từ chối (Reject).",
      "hint": "Chế độ Đề xuất (Suggesting) trong Google Docs."
    },
    {
      "id": "tin9-b8-mc8",
      "type": "multiple_choice",
      "question": "Nền tảng lưu trữ và chia sẻ tệp trực tuyến Google Drive (hoặc OneDrive) có tính năng nào sau đây?",
      "options": [
        "Tải tệp lên, đồng bộ dữ liệu giữa các thiết bị, chia sẻ quyền truy cập qua đường link và sao lưu an toàn",
        "Tự động in tất cả tài liệu ra giấy",
        "Chỉ lưu được một tệp duy nhất",
        "Không cho phép người khác xem tệp"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 34): Đám mây lưu trữ dữ liệu an toàn, truy cập linh hoạt từ máy tính và điện thoại thông minh.",
      "hint": "Lưu trữ, đồng bộ đa thiết bị, chia sẻ link và sao lưu đám mây."
    },
    {
      "id": "tin9-b8-mc9",
      "type": "multiple_choice",
      "question": "Công cụ biểu mẫu trực tuyến (Google Forms / Microsoft Forms) rất hữu ích cho hoạt động nào của học sinh?",
      "options": [
        "Tạo bảng khảo sát ý kiến, thu thập thông tin đăng kí tham gia câu lạc bộ hoặc tạo bài kiểm tra trắc nghiệm chấm điểm tự động",
        "Soạn thảo một cuốn tiểu thuyết dài",
        "Vẽ tranh sơn dầu",
        "Nghe nhạc trực tuyến"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Google Forms thu thập dữ liệu bảng hỏi và xuất kết quả khảo sát ra bảng tính tự động tức thì.",
      "hint": "Tạo phiếu khảo sát ý kiến hoặc bài trắc nghiệm tự chấm điểm."
    },
    {
      "id": "tin9-b8-mc10",
      "type": "multiple_choice",
      "question": "Để chia sẻ một tệp trên Google Drive cho một bạn cụ thể mà không công khai cho người khác xem, thao tác là gì?",
      "options": [
        "Nhập chính xác địa chỉ email của bạn đó vào ô 'Chia sẻ với mọi người và nhóm' và chọn cấp quyền tương ứng",
        "Bật chế độ 'Bất kì ai có liên kết đều xem được'",
        "Đăng đường link lên trang Facebook cá nhân",
        "In tệp ra giấy"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Chia sẻ đích danh qua địa chỉ email đảm bảo chỉ tài khoản được chỉ định mới mở được tệp.",
      "hint": "Nhập chính xác địa chỉ email của bạn đó vào ô chia sẻ."
    },
    {
      "id": "tin9-b8-mc11",
      "type": "multiple_choice",
      "question": "Tùy chọn 'Bất kì ai có liên kết' (Anyone with the link) khi chia sẻ tệp có rủi ro bảo mật gì cần lưu ý?",
      "options": [
        "Bất kì người nào có được đường link đó (kể cả người lạ được chuyển tiếp) đều có thể mở xem hoặc tải tệp về",
        "Máy tính của em sẽ bị xóa hết dữ liệu",
        "Tệp sẽ bị đổi tên",
        "Không có rủi ro nào"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Link mở công khai có thể bị rò rỉ hoặc chia sẻ tràn lan ngoài tầm kiểm soát.",
      "hint": "Bất kì ai có đường link đều mở được tài liệu."
    },
    {
      "id": "tin9-b8-mc12",
      "type": "multiple_choice",
      "question": "Khi kết quả phản hồi của biểu mẫu Google Forms gửi về, dữ liệu tổng hợp có thể được xuất tự động sang phần mềm nào?",
      "options": [
        "Bảng tính Google Sheets (hoặc Microsoft Excel)",
        "Phần mềm Paint",
        "Phần mềm Calculator",
        "Hộp thư rác Spam"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Forms liên kết trực tiếp với Sheets để lưu trữ mỗi câu trả lời thành một hàng dữ liệu kèm dấu thời gian.",
      "hint": "Xuất tự động sang bảng tính Google Sheets."
    },
    {
      "id": "tin9-b8-mc13",
      "type": "multiple_choice",
      "question": "Tính năng đặt Hạn chót nộp bài (Deadline / Schedule) trong Google Classroom hỗ trợ quản lí học tập như thế nào?",
      "options": [
        "Nhắc nhở học sinh nộp bài đúng hạn và tự động đánh dấu 'Nộp muộn' (Turned in late) đối với các bài nộp sau thời gian quy định",
        "Khóa máy tính của học sinh nếu nộp muộn",
        "Tự động chấm 0 điểm",
        "Xóa tài khoản của học sinh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Classroom hỗ trợ rèn luyện kỉ luật thời gian và quản lí tiến độ nộp bài khoa học.",
      "hint": "Nhắc hạn nộp và tự động ghi nhận nộp muộn."
    },
    {
      "id": "tin9-b8-mc14",
      "type": "multiple_choice",
      "question": "Để bảo vệ an toàn cho các tệp dữ liệu lưu trên Google Drive khi dùng máy tính công cộng ở trường, điều bắt buộc phải làm trước khi ra về là gì?",
      "options": [
        "Đăng xuất (Sign out) hoàn toàn tài khoản Google và xóa lịch sử duyệt web",
        "Chỉ cần tắt màn hình máy tính",
        "Rút dây cắm chuột",
        "Để nguyên tài khoản cho bạn sau vào dùng tiếp"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Không đăng xuất ở máy tính chung sẽ khiến người dùng sau dễ dàng xem, sửa hoặc xóa dữ liệu riêng tư của mình.",
      "hint": "Đăng xuất tài khoản hoàn toàn trước khi rời máy tính công cộng."
    },
    {
      "id": "tin9-b8-mc15",
      "type": "multiple_choice",
      "question": "Khái niệm 'Không gian làm việc số' (Digital Workspace) cho phép người học và người làm việc đạt được điều gì?",
      "options": [
        "Kết nối, trao đổi, quản lí dự án và tiếp cận kho học liệu ở bất kì đâu, bất kì lúc nào chỉ cần có thiết bị kết nối Internet",
        "Không bao giờ phải thi cử",
        "Học sinh không cần làm bài mà tự động lên lớp",
        "Không cần giáo viên giảng dạy"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Không gian số xóa bỏ rào cản địa lí và thời gian, thúc đẩy học tập suốt đời linh hoạt.",
      "hint": "Làm việc và học tập linh hoạt mọi lúc, mọi nơi có kết nối mạng."
    }
  ],
  "tin9-bai-9a": [
    {
      "id": "g9-b9a-de-1",
      "question": "Công cụ Data Validation trong Excel có chức năng chính là gì?",
      "options": [
        "Thiết lập quy tắc giới hạn dữ liệu nhập vào ô tính, ngăn ngừa sai sót dữ liệu",
        "Tắt tiếng loa máy tính",
        "Xóa bảng tính tự động",
        "Đổi phông chữ toàn bộ máy tính"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 38): Data Validation dùng để kiểm soát và xác thực dữ liệu đầu vào trong Excel.",
      "hint": "Xác thực và giới hạn dữ liệu nhập vào ô."
    },
    {
      "id": "g9-b9a-tb-1",
      "question": "Muốn tạo danh sách lựa chọn thả xuống (Drop-down list) trong ô tính, tại mục Allow của Data Validation ta chọn kiểu nào?",
      "options": [
        "Any value",
        "Whole number",
        "Date",
        "List"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Chọn kiểu List và nhập nguồn dữ liệu (Source) để tạo danh sách chọn dạng thả xuống tiện lợi.",
      "hint": "Chọn List để tạo danh sách thả xuống."
    },
    {
      "id": "g9-b9a-kho-1",
      "question": "Thẻ \"Error Alert\" trong hộp thoại Data Validation có tác dụng gì?",
      "options": [
        "Gửi email cho giáo viên",
        "Hiển thị thông báo lỗi cảnh báo khi người dùng nhập dữ liệu không thỏa mãn quy tắc đã đặt",
        "Xóa hết dữ liệu của hàng",
        "Tự động tắt phần mềm Excel"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "Error Alert đưa ra thông điệp cảnh báo rõ ràng hướng dẫn người dùng nhập đúng định dạng khi xảy ra lỗi nhập liệu.",
      "hint": "Hiển thị thông báo khi nhập sai quy tắc."
    },
    {
      "id": "tin9-b9a-mc1",
      "type": "multiple_choice",
      "question": "Mục đích chính của công cụ Xác thực dữ liệu (Data Validation) trong phần mềm bảng tính là gì?",
      "options": [
        "Xóa sạch các ô trống trong bảng tính",
        "Tự động tăng tốc độ tính toán của CPU máy tính",
        "Kiểm soát và giới hạn dữ liệu nhập vào ô, ngăn ngừa lỗi gõ nhầm dữ liệu không hợp lệ",
        "Mã hóa bảng tính thành mã nhị phân"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 44): Data Validation thiết lập các quy tắc ràng buộc để người dùng chỉ được nhập dữ liệu thỏa mãn điều kiện.",
      "hint": "Kiểm soát tính hợp lệ của dữ liệu nhập vào ô tính."
    },
    {
      "id": "tin9-b9a-mc2",
      "type": "multiple_choice",
      "question": "Để mở hộp thoại Data Validation trong Excel, ta chọn dải lệnh nào?",
      "options": [
        "Dải lệnh Insert -> nhóm Charts",
        "Dải lệnh Data -> nhóm Data Tools -> Data Validation",
        "Dải lệnh View -> nhóm Zoom",
        "Dải lệnh Home -> nhóm Font"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 44): Data Validation nằm trong dải lệnh Data -> nhóm Data Tools.",
      "hint": "Dải lệnh Data liên quan đến quản lí dữ liệu."
    },
    {
      "id": "tin9-b9a-mc3",
      "type": "multiple_choice",
      "question": "Để quy định cột \"Điểm kiểm tra\" chỉ được phép nhập số thực từ 0 đến 10, trong thẻ Settings của Data Validation ta thiết lập như thế nào?",
      "options": [
        "Allow: Date; Data: between; Minimum: 0; Maximum: 10",
        "Allow: Whole number; Data: equal to; Value: 10",
        "Allow: Decimal; Data: between; Minimum: 0; Maximum: 10",
        "Allow: Text length; Data: between; Minimum: 0; Maximum: 10"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 45): Điểm số có thể có số lẻ (như 8.5) nên chọn Decimal (số thập phân) trong khoảng between từ 0 đến 10.",
      "hint": "Điểm số có phần thập phân nên chọn Decimal trong khoảng 0 đến 10."
    },
    {
      "id": "tin9-b9a-mc4",
      "type": "multiple_choice",
      "question": "Để tạo một danh sách lựa chọn thả xuống (Dropdown List) chứa các mục: \"Nam, Nữ\", trong mục Allow ta chọn tùy chọn nào?",
      "options": [
        "Tùy chọn Custom",
        "Tùy chọn Date",
        "Tùy chọn Whole number",
        "Tùy chọn List"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 45): Chọn Allow: List và điền `Nam, Nữ` vào ô Source để tạo danh sách chọn tiện lợi.",
      "hint": "List dùng để tạo danh sách chọn thả xuống."
    },
    {
      "id": "tin9-b9a-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về công cụ Data Validation:",
      "options": [
        "a) Thẻ \"Input Message\" dùng để hiển thị hộp thoại hướng dẫn người dùng khi họ nhấp chuột vào ô tính",
        "b) Thẻ \"Error Alert\" hiển thị thông báo lỗi cảnh báo khi người dùng cố tình nhập dữ liệu sai quy định",
        "c) Sau khi đã thiết lập Data Validation thì không thể chỉnh sửa hoặc gỡ bỏ được nữa",
        "d) Công cụ Data Validation giúp đảm bảo tính nhất quán và chính xác của dữ liệu trong toàn bảng"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 46): Người dùng hoàn toàn có thể chọn ô và nhấn nút \"Clear All\" trong Data Validation để gỡ bỏ quy tắc bất kì lúc nào.",
      "hint": "Data Validation có thể gỡ bỏ dễ dàng bằng nút Clear All."
    },
    {
      "id": "tin9-b9a-fb1",
      "type": "fill_blank",
      "question": "Trong hộp thoại Data Validation, thẻ [1] dùng để hiển thị gợi ý khi chọn ô, còn thẻ [2] dùng để bật cảnh báo khi người dùng nhập sai quy định.",
      "blankAnswers": [
        "Input Message",
        "Error Alert"
      ],
      "wordBank": [
        "Input Message",
        "Error Alert",
        "Settings",
        "Formula",
        "Data Tools",
        "Format"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 46): Input Message là lời nhắc nhập liệu; Error Alert là cảnh báo khi nhập sai.",
      "hint": "Input Message hiển thị hướng dẫn; Error Alert bật khi lỗi."
    },
    {
      "id": "tin9-b9a-m1",
      "type": "matching",
      "question": "Nối kiểu dữ liệu ràng buộc trong mục Allow ở cột bên trái với trường hợp áp dụng phù hợp ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Whole number (Số nguyên)"
        },
        {
          "id": "2",
          "text": "Decimal (Số thập phân)"
        },
        {
          "id": "3",
          "text": "List (Danh sách)"
        },
        {
          "id": "4",
          "text": "Text length (Độ dài chuỗi)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Giới hạn số lượng học sinh trong một lớp phải là số nguyên dương"
        },
        {
          "id": "b",
          "text": "Giới hạn mã căn cước công dân phải nhập đúng chính xác 12 kí tự"
        },
        {
          "id": "c",
          "text": "Điểm kiểm tra trung bình môn học có thể có số thập phân lẻ"
        },
        {
          "id": "d",
          "text": "Tạo danh sách cố định để chọn xếp loại: Giỏi, Khá, Đạt, Chưa đạt"
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
      "explanation": "SGK Tin học 9 KNTT (Trang 45): Ứng dụng thực tế phong phú của từng kiểu xác thực dữ liệu.",
      "hint": "Whole number: số nguyên; Decimal: số thập phân; List: danh sách chọn; Text length: độ dài kí tự."
    },
    {
      "id": "tin9-b9a-mc5",
      "type": "multiple_choice",
      "question": "Kiểu cảnh báo lỗi (Style) nào trong thẻ Error Alert sẽ NGĂN CHẶN HOÀN TOÀN không cho phép người dùng nhập dữ liệu sai vào ô?",
      "options": [
        "Stop (biểu tượng dấu X đỏ)",
        "Information (biểu tượng chữ i xanh)",
        "Warning (biểu tượng tam giác vàng)",
        "Ignore"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 9 KNTT (Trang 46): Kiểu \"Stop\" bắt buộc phải sửa lại cho đúng mới được tiếp tục. \"Warning\" và \"Information\" chỉ nhắc nhở nhưng vẫn cho phép nhập sai.",
      "hint": "Biểu tượng dấu X đỏ Stop chặn tuyệt đối dữ liệu sai."
    },
    {
      "id": "tin9-b9a-mc6",
      "type": "multiple_choice",
      "question": "Trong mục Source của Allow: List, các phần tử trong danh sách được phân cách với nhau bằng dấu gì (tùy theo cài đặt vùng của máy)?",
      "options": [
        "Khoảng trắng (Space)",
        "Dấu chấm (.)",
        "Dấu phẩy (,) hoặc dấu chấm phẩy (;)",
        "Dấu gạch chéo (/)"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 45): Các mục trong List ngăn cách bởi dấu phẩy `,` hoặc chấm phẩy `;` (ví dụ: `Hà Nội, Đà Nẵng, TP.HCM`).",
      "hint": "Phân cách bằng dấu phẩy hoặc chấm phẩy."
    },
    {
      "id": "tin9-b9a-mc7",
      "type": "multiple_choice",
      "question": "Để tìm nhanh tất cả các ô trong bảng tính đang vi phạm quy tắc xác thực dữ liệu đã cài đặt, ta dùng lệnh nào trong dải lệnh Data?",
      "options": [
        "Circle Invalid Data",
        "Remove Duplicates",
        "Clear Validation Circles",
        "Sort Ascending"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "SGK Tin học 9 KNTT (Trang 46): Lệnh Circle Invalid Data sẽ tự động khoanh tròn đỏ xung quanh các ô chứa dữ liệu sai quy tắc.",
      "hint": "Circle Invalid Data khoanh tròn các ô dữ liệu không hợp lệ."
    },
    {
      "id": "tin9-b9a-mc8",
      "type": "multiple_choice",
      "question": "Công cụ XÁC THỰC DỮ LIỆU (Data Validation) trong phần mềm bảng tính Excel có chức năng chính là gì?",
      "options": [
        "Thiết lập các quy tắc ràng buộc để kiểm soát và chỉ cho phép người dùng nhập vào những dữ liệu hợp lệ trong một phạm vi hoặc danh sách định sẵn",
        "Tự động dịch văn bản sang tiếng nước ngoài",
        "Xóa bỏ các hàng bị trùng lặp",
        "Đổi phông chữ của toàn bộ trang tính"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 38): Data Validation ngăn chặn sai sót nhập liệu ngay từ lúc gõ dữ liệu vào ô tính.",
      "hint": "Thiết lập quy tắc kiểm soát dữ liệu nhập vào hợp lệ."
    },
    {
      "id": "tin9-b9a-mc9",
      "type": "multiple_choice",
      "question": "Để mở hộp thoại Data Validation, người dùng chọn vùng ô tính rồi vào thẻ lệnh nào?",
      "options": [
        "Thẻ Data -> Nhóm Data Tools -> Chọn Data Validation",
        "Thẻ Home -> Nhóm Font",
        "Thẻ Insert -> Nhóm Charts",
        "Thẻ View -> Nhóm Zoom"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Data Validation nằm trong nhóm Data Tools trên thanh dải lệnh của thẻ Data.",
      "hint": "Thẻ Data -> nhóm Data Tools -> Data Validation."
    },
    {
      "id": "tin9-b9a-mc10",
      "type": "multiple_choice",
      "question": "Tính năng tạo 'Danh sách thả xuống' (Drop-down List) trong ô tính được thiết lập bằng lựa chọn nào trong thẻ Settings của Data Validation?",
      "options": [
        "Mục Allow chọn: List",
        "Mục Allow chọn: Whole number",
        "Mục Allow chọn: Date",
        "Mục Allow chọn: Text length"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tùy chọn List tạo menu thả xuống chứa danh mục cố định (ví dụ: Nam, Nữ; Giỏi, Khá, Trung bình).",
      "hint": "Mục Allow -> chọn List."
    },
    {
      "id": "tin9-b9a-mc11",
      "type": "multiple_choice",
      "question": "Nếu muốn giới hạn người dùng CHỈ ĐƯỢC NHẬP ĐIỂM SỐ từ 0 đến 10 vào ô Điểm kiểm tra, ta thiết lập điều kiện nào trong Data Validation?",
      "options": [
        "Allow: Decimal (hoặc Whole number), Data: between, Minimum: 0, Maximum: 10",
        "Allow: Text length, Minimum: 1, Maximum: 2",
        "Allow: Date, between: 2026",
        "Allow: Any value"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Thiết lập số thập phân Decimal nằm trong khoảng Between từ 0 đến 10 ngăn chặn nhập điểm âm hoặc điểm > 10.",
      "hint": "Allow: Decimal, Data: between từ 0 đến 10."
    },
    {
      "id": "tin9-b9a-mc12",
      "type": "multiple_choice",
      "question": "Thẻ 'Input Message' (Thông báo nhập) trong Data Validation có tác dụng gì?",
      "options": [
        "Hiển thị một khung hướng dẫn nhỏ màu vàng ngay khi người dùng nhấp chuột chọn ô đó để nhắc nhở quy tắc nhập dữ liệu",
        "Gửi tin nhắn SMS cho giáo viên",
        "Phát âm thanh cảnh báo",
        "Tự động nhập dữ liệu vào ô"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Input Message hiển thị tooltip hướng dẫn người nhập liệu biết định dạng dữ liệu được phép nhập.",
      "hint": "Hiển thị khung hướng dẫn khi người dùng nhấp chọn ô."
    },
    {
      "id": "tin9-b9a-mc13",
      "type": "multiple_choice",
      "question": "Thẻ 'Error Alert' (Cảnh báo lỗi) trong Data Validation hoạt động khi nào?",
      "options": [
        "Bật lên hộp thoại cảnh báo khi người dùng cố tình hoặc vô ý nhập vào giá trị SAI QUY TẮC đã được quy định",
        "Khi máy tính bị mất điện",
        "Khi ô tính có dữ liệu đúng",
        "Khi in bảng tính ra giấy"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Error Alert từ chối dữ liệu không hợp lệ và hiển thị thông điệp giải thích lí do sai.",
      "hint": "Hiển thị khi người dùng nhập dữ liệu sai quy tắc."
    },
    {
      "id": "tin9-b9a-mc14",
      "type": "multiple_choice",
      "question": "Trong ba kiểu cảnh báo lỗi của Error Alert: Stop, Warning và Information, kiểu nào sẽ CHẶN TUYỆT ĐỐI không cho phép lưu giá trị sai vào ô?",
      "options": [
        "Kiểu Stop (biểu tượng dấu chéo trắng trong hình tròn đỏ)",
        "Kiểu Warning (biểu tượng tam giác vàng)",
        "Kiểu Information (biểu tượng chữ i xanh)",
        "Cả ba kiểu đều cho phép lưu"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Stop khóa cứng hoàn toàn; Warning và Information chỉ nhắc nhở cảnh báo nhưng vẫn cho phép vượt qua.",
      "hint": "Kiểu Stop (hình tròn đỏ có dấu chéo trắng)."
    },
    {
      "id": "tin9-b9a-mc15",
      "type": "multiple_choice",
      "question": "Để xóa bỏ toàn bộ quy tắc xác thực dữ liệu Data Validation đã cài đặt trên một vùng ô tính, em bấm nút nào trong hộp thoại?",
      "options": [
        "Nút 'Clear All'",
        "Nút 'OK'",
        "Nút 'Apply'",
        "Nút 'Cancel'"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Clear All đưa vùng ô tính trở lại trạng thái tự do mặc định (Allow: Any value).",
      "hint": "Nút lệnh Clear All."
    }
  ],
  "tin9-bai-10a": [
    {
      "id": "g9-b10a-de-1",
      "question": "Cú pháp chuẩn của hàm COUNTIF trong bảng tính Excel là gì?",
      "options": [
        "=COUNTIF(criteria, range)",
        "=COUNTIF(value)",
        "=COUNTIF(number1, number2)",
        "=COUNTIF(range, criteria)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 43): =COUNTIF(range, criteria) với range là vùng dữ liệu và criteria là điều kiện đếm.",
      "hint": "=COUNTIF(phạm_vi, điều_kiện)."
    },
    {
      "id": "g9-b10a-tb-1",
      "question": "Để đếm số học sinh có giới tính là \"Nữ\" trong cột Giới tính từ B2 đến B40, công thức nào sau đây là ĐÚNG?",
      "options": [
        "=COUNT(B2:B40, \"Nữ\")",
        "=COUNTIF(B2:B40, \"Nữ\")",
        "=COUNTIF(\"Nữ\", B2:B40)",
        "=SUMIF(B2:B40, \"Nữ\")"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "Cú pháp đúng: =COUNTIF(B2:B40, \"Nữ\"). Chuỗi điều kiện văn bản phải đặt trong cặp dấu ngoặc kép.",
      "hint": "Phạm vi B2:B40 trước, điều kiện \"Nữ\" sau."
    },
    {
      "id": "g9-b10a-kho-1",
      "question": "Để đếm số sản phẩm có giá bán lớn hơn hoặc bằng 100,000 đồng trong cột C từ C2 đến C50, công thức nào viết CHUẨN XÁC?",
      "options": [
        "=COUNT(C2:C50 > 100000)",
        "=COUNTIF(>=100000, C2:C50)",
        "=COUNTIF(C2:C50, >=100000)",
        "=COUNTIF(C2:C50, \">=100000\")"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Toán tử so sánh trong điều kiện của COUNTIF bắt buộc phải bao bọc trong cặp dấu ngoặc kép: \">=100000\".",
      "hint": "Điều kiện so sánh đặt trong dấu ngoặc kép \">=100000\"."
    },
    {
      "id": "tin9-b10a-mc1",
      "type": "multiple_choice",
      "question": "Cú pháp chuẩn của hàm đếm có điều kiện COUNTIF trong bảng tính Excel là gì?",
      "options": [
        "=COUNTIF(criteria, range)",
        "=COUNTIF(range, criteria)",
        "=COUNTIF(range, sum_range, criteria)",
        "=COUNTIF(value1, value2)"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 48): Cú pháp hàm `=COUNTIF(range, criteria)` với `range` là vùng dữ liệu cần đếm và `criteria` là điều kiện đếm.",
      "hint": "Range (vùng đếm) đứng trước, Criteria (điều kiện) đứng sau."
    },
    {
      "id": "tin9-b10a-mc2",
      "type": "multiple_choice",
      "question": "Để đếm số lượng học sinh đạt điểm Giỏi (từ 8.0 trở lên) trong cột điểm từ C2 đến C40, công thức nào sau đây là ĐÚNG?",
      "options": [
        "=COUNTIF(C2:C40, \">=8.0\")",
        "=COUNTIF(\">=8.0\", C2:C40)",
        "=COUNTIF(C2:C40, >=8.0)",
        "=COUNT(C2:C40, \">=8.0\")"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 48): Điều kiện so sánh có chứa dấu phép toán `>=` bắt buộc phải đặt trong cặp dấu ngoặc kép `\">=8.0\"`.",
      "hint": "Điều kiện so sánh toán học phải đặt trong cặp dấu nháy kép."
    },
    {
      "id": "tin9-b10a-mc3",
      "type": "multiple_choice",
      "question": "Để đếm số lượng học sinh có giới tính là \"Nữ\" trong vùng từ D2 đến D35, công thức nào sau đây là chuẩn xác?",
      "options": [
        "=COUNTIF(D2:D35, Nữ)",
        "=SUMIF(D2:D35, \"Nữ\")",
        "=COUNTIF(D2:D35, \"Nữ\")",
        "=COUNTIF(D2:D35 = \"Nữ\")"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 48): Tiêu chí dạng chuỗi văn bản như `\"Nữ\"` phải được đặt trong cặp dấu ngoặc kép.",
      "hint": "Chuỗi văn bản Nữ phải đặt trong dấu ngoặc kép."
    },
    {
      "id": "tin9-b10a-mc4",
      "type": "multiple_choice",
      "question": "Hàm COUNT thông thường khác với hàm COUNTIF ở điểm cơ bản nào?",
      "options": [
        "Hàm COUNT đếm tất cả các ô chứa dữ liệu số, còn COUNTIF chỉ đếm các ô thỏa mãn điều kiện nhất định",
        "Hàm COUNTIF không thể đếm được số",
        "Hàm COUNT dùng để tính tổng các số",
        "Hàm COUNTIF chỉ dùng cho bảng tính dưới 10 hàng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 48): COUNT đếm số lượng ô chứa số vô điều kiện, COUNTIF là đếm có điều kiện (IF).",
      "hint": "COUNTIF có thêm chữ IF mang nghĩa \"nếu thỏa mãn điều kiện\"."
    },
    {
      "id": "tin9-b10a-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về hàm COUNTIF trong Excel:",
      "options": [
        "a) Hàm COUNTIF không phân biệt chữ hoa chữ thường trong điều kiện chuỗi (ví dụ \"nam\" và \"Nam\" là như nhau)",
        "b) Kí tự đại diện dấu sao (*) trong điều kiện biểu thị cho một chuỗi kí tự bất kì",
        "c) Tham số range trong hàm COUNTIF có thể là các ô rời rạc không liền kề nhau",
        "d) Kết quả trả về của hàm COUNTIF luôn là một số nguyên không âm (>= 0)"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Tham số `range` của hàm COUNTIF bắt buộc phải là một vùng ô liền khối (ví dụ A1:A10), không thể là danh sách ô rời rạc.",
      "hint": "Vùng range trong COUNTIF bắt buộc phải là khối ô liền nhau."
    },
    {
      "id": "tin9-b10a-fb1",
      "type": "fill_blank",
      "question": "Trong hàm `=COUNTIF(range, criteria)`, tham số [1] là phạm vi các ô cần kiểm tra, còn tham số [2] là tiêu chí xác định ô nào sẽ được tính vào số đếm.",
      "blankAnswers": [
        "range",
        "criteria"
      ],
      "wordBank": [
        "range",
        "criteria",
        "sum_range",
        "average",
        "logical_test",
        "value"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 48): Range: vùng đếm; Criteria: điều kiện đếm.",
      "hint": "Range là vùng, Criteria là điều kiện."
    },
    {
      "id": "tin9-b10a-m1",
      "type": "matching",
      "question": "Nối công thức COUNTIF ở cột bên trái với ý nghĩa đếm tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "=COUNTIF(A1:A20, \">0\")"
        },
        {
          "id": "2",
          "text": "=COUNTIF(B1:B20, \"Hà*\")"
        },
        {
          "id": "3",
          "text": "=COUNTIF(C1:C20, 10)"
        },
        {
          "id": "4",
          "text": "=COUNTIF(D1:D20, \"<>0\")"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Đếm số ô có giá trị khác 0"
        },
        {
          "id": "b",
          "text": "Đếm số ô chứa chuỗi bắt đầu bằng chữ \"Hà\""
        },
        {
          "id": "c",
          "text": "Đếm số ô chứa số dương lớn hơn 0"
        },
        {
          "id": "d",
          "text": "Đếm số ô có giá trị đúng bằng 10"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "b",
        "3": "d",
        "4": "a"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 49): Dấu `*` là kí tự đại diện, `<>` là phép so sánh khác.",
      "hint": ">0 là số dương; Hà* là bắt đầu bằng Hà; <>0 là khác 0."
    },
    {
      "id": "tin9-b10a-mc5",
      "type": "multiple_choice",
      "question": "Cho bảng dữ liệu cột A chứa tên thành phố. Công thức `=COUNTIF(A2:A10, \"*Hà*\")` sẽ đếm các ô nào?",
      "options": [
        "Các ô không chứa chữ \"Hà\"",
        "Chỉ các ô có đúng 2 chữ \"Hà\"",
        "Chỉ các ô có chữ \"Hà\" ở cuối cùng",
        "Tất cả các ô có chứa chữ \"Hà\" ở bất kì vị trí nào trong tên (ví dụ: Hà Nội, Hà Nam, Thanh Hà)"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 9 KNTT (Trang 49): Kí tự đại diện `*Hà*` khớp với mọi chuỗi chứa từ \"Hà\" ở đầu, giữa hoặc cuối.",
      "hint": "Hai dấu sao bao quanh chữ biểu thị chuỗi chứa từ đó ở mọi vị trí."
    },
    {
      "id": "tin9-b10a-mc6",
      "type": "multiple_choice",
      "question": "Để đếm số ô có giá trị lớn hơn giá trị đang chứa trong ô E1, công thức nào sau đây viết đúng cú pháp nối chuỗi?",
      "options": [
        "=COUNTIF(A1:A50, >E1)",
        "=COUNTIF(A1:A50, \">\" & E1)",
        "=COUNTIF(A1:A50, \">E1\")",
        "=COUNTIF(A1:A50, E1 > 0)"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "SGK Tin học 9 KNTT (Trang 49): Khi tham chiếu đến ô trong điều kiện so sánh, phải dùng toán tử `&` để nối chuỗi: `\">\" & E1`. Viết `\">E1\"` sẽ bị hiểu lầm là tìm chữ \"E1\".",
      "hint": "Dùng dấu và (&) để nối dấu so sánh với địa chỉ ô."
    },
    {
      "id": "tin9-b10a-mc7",
      "type": "multiple_choice",
      "question": "Nếu trong vùng kiểm tra không có bất kì ô nào thỏa mãn điều kiện đặt ra, hàm COUNTIF sẽ trả về kết quả là bao nhiêu?",
      "options": [
        "Báo lỗi #VALUE!",
        "Ô trống rỗng",
        "Số 0",
        "Số âm -1"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 48): Không có phần tử thỏa mãn thì số lượng đếm được bằng 0.",
      "hint": "Không có phần tử nào thỏa mãn thì kết quả đếm là 0."
    },
    {
      "id": "tin9-b10a-mc8",
      "type": "multiple_choice",
      "question": "Hàm COUNTIF trong phần mềm bảng tính Excel có chức năng chính là gì?",
      "options": [
        "Đếm số lượng các ô trong một phạm vi thỏa mãn một ĐIỀU KIỆN (tiêu chí) xác định",
        "Tính tổng các số trong một phạm vi",
        "Tìm giá trị lớn nhất trong bảng",
        "Đếm tất cả các ô không cần điều kiện"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 42): COUNT (đếm) kết hợp IF (nếu) tạo thành hàm đếm theo điều kiện.",
      "hint": "Đếm số ô thỏa mãn một điều kiện xác định."
    },
    {
      "id": "tin9-b10a-mc9",
      "type": "multiple_choice",
      "question": "Cú pháp chuẩn xác của hàm COUNTIF là gì?",
      "options": [
        "=COUNTIF(range, criteria)",
        "=COUNTIF(criteria, range)",
        "=COUNTIF(range1, range2, condition)",
        "=COUNTIF(sum, count)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "range là vùng dữ liệu cần đếm; criteria là điều kiện đếm (chuỗi văn bản, số, hoặc biểu thức so sánh).",
      "hint": "=COUNTIF(vùng_đếm, điều_kiện)."
    },
    {
      "id": "tin9-b10a-mc10",
      "type": "multiple_choice",
      "question": "Để đếm xem có bao nhiêu học sinh xếp loại 'Giỏi' trong cột Xếp loại từ ô D2 đến D30, công thức nào sau đây là ĐÚNG?",
      "options": [
        "=COUNTIF(D2:D30, \"Giỏi\")",
        "=COUNTIF(D2:D30, Giỏi)",
        "=COUNTIF(\"Giỏi\", D2:D30)",
        "=COUNT(D2:D30, \"Giỏi\")"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Điều kiện là chuỗi văn bản 'Giỏi' bắt buộc phải được đặt trong cặp dấu ngoặc kép \"\".",
      "hint": "=COUNTIF(D2:D30, \"Giỏi\")."
    },
    {
      "id": "tin9-b10a-mc11",
      "type": "multiple_choice",
      "question": "Để đếm số lượng học sinh có điểm kiểm tra từ 8.0 trở lên trong vùng C2:C40, điều kiện so sánh được viết như thế nào?",
      "options": [
        "=COUNTIF(C2:C40, \">=8.0\")",
        "=COUNTIF(C2:C40, >=8.0)",
        "=COUNTIF(C2:C40, >8.0 or =8.0)",
        "=COUNTIF(C2:C40; 8.0)"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Biểu thức so sánh toán học như >=8.0 phải đặt trong cặp dấu ngoặc kép \">=8.0\".",
      "hint": "\">=8.0\" (đặt trong ngoặc kép)."
    },
    {
      "id": "tin9-b10a-mc12",
      "type": "multiple_choice",
      "question": "Cho vùng dữ liệu A1:A5 gồm các số: 5, 8, 2, 8, 10. Kết quả của công thức =COUNTIF(A1:A5, 8) là bao nhiêu?",
      "options": [
        "2",
        "1",
        "3",
        "8"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Số 8 xuất hiện đúng 2 lần trong vùng A1:A5 -> kết quả đếm là 2.",
      "hint": "Số 8 xuất hiện 2 lần."
    },
    {
      "id": "tin9-b10a-mc13",
      "type": "multiple_choice",
      "question": "Kí tự đại diện dấu sao (*) trong điều kiện của hàm COUNTIF (ví dụ: =COUNTIF(A2:A20, \"Trần*\")) có ý nghĩa gì?",
      "options": [
        "Đại diện cho một chuỗi kí tự bất kì (đếm tất cả những người có họ bắt đầu bằng chữ 'Trần')",
        "Phép nhân với số 10",
        "Đếm các ô có vẽ hình ngôi sao",
        "Báo lỗi cú pháp"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Dấu sao (*) là ký tự wildcard đại diện cho một chuỗi ký tự tùy ý độ dài bất kì.",
      "hint": "Kí tự đại diện (wildcard) cho chuỗi kí tự bất kì."
    },
    {
      "id": "tin9-b10a-mc14",
      "type": "multiple_choice",
      "question": "Để đếm số lượng các ô KHÔNG TRỐNG (có chứa nội dung) trong vùng B2:B15, điều kiện nào có thể sử dụng trong COUNTIF?",
      "options": [
        "=COUNTIF(B2:B15, \"<>\")",
        "=COUNTIF(B2:B15, \"=\")",
        "=COUNTIF(B2:B15, 0)",
        "=COUNTIF(B2:B15, \"blank\")"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Kí hiệu <> (khác rỗng) đếm tất cả các ô có chứa dữ liệu.",
      "hint": "\"<>\" (khác rỗng)."
    },
    {
      "id": "tin9-b10a-mc15",
      "type": "multiple_choice",
      "question": "Khi sao chép công thức chứa hàm COUNTIF sang các ô khác, điều quan trọng cần chú ý về vùng tham chiếu range là gì?",
      "options": [
        "Nên sử dụng ĐỊA CHỈ TUYỆT ĐỐI (như $D$2:$D$30 bằng cách nhấn phím F4) để vùng dữ liệu không bị trượt khi kéo sao chép công thức",
        "Không bao giờ được bấm phím F4",
        "Vùng dữ liệu sẽ tự động thu nhỏ lại",
        "Luôn phải gõ lại từng công thức bằng tay"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Cố định vùng tham chiếu bằng dấu $ giữ nguyên bảng số liệu khi sao chép công thức thống kê.",
      "hint": "Cố định địa chỉ tuyệt đối bằng phím F4 ($D$2:$D$30)."
    }
  ],
  "tin9-bai-11a": [
    {
      "id": "g9-b11a-de-1",
      "question": "Hàm SUMIF trong Excel dùng để làm gì?",
      "options": [
        "Chia trung bình cộng",
        "Tính tổng các ô trong một phạm vi thỏa mãn một điều kiện xác định",
        "Tìm số lớn nhất",
        "Đếm số ô có chứa chữ cái"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 48): Hàm SUMIF tính tổng có điều kiện.",
      "hint": "SUM (tổng) + IF (nếu thỏa điều kiện)."
    },
    {
      "id": "g9-b11a-tb-1",
      "question": "Cú pháp đầy đủ của hàm SUMIF là gì?",
      "options": [
        "=SUMIF(sum_range, range)",
        "=SUMIF(criteria, range)",
        "=SUMIF(range, criteria, [sum_range])",
        "=SUMIF(range, sum_range)"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "range: vùng kiểm tra điều kiện; criteria: điều kiện; sum_range: vùng tính tổng thực tế.",
      "hint": "range, criteria, sum_range."
    },
    {
      "id": "g9-b11a-kho-1",
      "question": "Cho bảng theo dõi chi tiêu: Cột B (B2:B20) là Tên danh mục chi (\"Ăn uống\", \"Học tập\"...); Cột C (C2:C20) là Số tiền chi. Công thức tính tổng tiền chi cho danh mục \"Học tập\" là gì?",
      "options": [
        "=SUMIF(C2:C20, \"Học tập\", B2:B20)",
        "=SUMIF(\"Học tập\", B2:B20, C2:C20)",
        "=COUNTIF(B2:B20, \"Học tập\")",
        "=SUMIF(B2:B20, \"Học tập\", C2:C20)"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Vùng kiểm tra là B2:B20, điều kiện là \"Học tập\", vùng cộng tiền là C2:C20: =SUMIF(B2:B20, \"Học tập\", C2:C20).",
      "hint": "Kiểm tra cột B, điều kiện \"Học tập\", tính tổng cột C."
    },
    {
      "id": "tin9-b11a-mc1",
      "type": "multiple_choice",
      "question": "Cú pháp chuẩn đầy đủ của hàm tính tổng có điều kiện SUMIF trong Excel là gì?",
      "options": [
        "=SUMIF(range, criteria, [sum_range])",
        "=SUMIF(range, [sum_range])",
        "=SUMIF(criteria, range, sum_range)",
        "=SUMIF(sum_range, range, criteria)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 51): Cú pháp chuẩn `=SUMIF(range, criteria, [sum_range])`. Trong đó `sum_range` là vùng tính tổng thực sự.",
      "hint": "Range (vùng điều kiện) -> Criteria (điều kiện) -> Sum_range (vùng tính tổng)."
    },
    {
      "id": "tin9-b11a-mc2",
      "type": "multiple_choice",
      "question": "Nếu ta bỏ qua tham số `sum_range` trong hàm SUMIF `=SUMIF(A1:A10, \">50\")`, Excel sẽ tính tổng trên vùng nào?",
      "options": [
        "Tính tổng toàn bộ bảng tính",
        "Báo lỗi #N/A",
        "Chính vùng `range` A1:A10",
        "Trả về kết quả bằng 0"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 51): Khi bỏ qua `sum_range`, Excel sẽ mặc định lấy chính vùng `range` làm vùng tính tổng.",
      "hint": "Khi bỏ qua sum_range thì lấy chính vùng range làm vùng tính tổng."
    },
    {
      "id": "tin9-b11a-mc3",
      "type": "multiple_choice",
      "question": "Cho bảng chi tiêu: Cột A ghi tên Mặt hàng (\"Vở\", \"Bút\", \"Thước\"), Cột B ghi Số tiền. Để tính tổng số tiền đã mua \"Vở\" từ dòng 2 đến dòng 20, công thức nào đúng?",
      "options": [
        "=SUMIF(A2:A20, \"Vở\", B2:B20)",
        "=SUMIF(B2:B20, \"Vở\", A2:A20)",
        "=SUMIF(A2:A20, B2:B20, \"Vở\")",
        "=COUNTIF(A2:A20, \"Vở\")"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 51): Vùng điều kiện là tên mặt hàng A2:A20, điều kiện là \"Vở\", vùng tính tổng là số tiền B2:B20.",
      "hint": "Cột mặt hàng (A) là range, \"Vở\" là criteria, cột tiền (B) là sum_range."
    },
    {
      "id": "tin9-b11a-mc4",
      "type": "multiple_choice",
      "question": "Sự khác nhau cơ bản giữa hàm SUM và hàm SUMIF là gì?",
      "options": [
        "Hàm SUMIF không thể tính được số thập phân",
        "Hàm SUM dùng cho bảng tính nhỏ, SUMIF dùng cho bảng tính lớn",
        "Hàm SUMIF chỉ dùng để đếm chứ không cộng",
        "Hàm SUM cộng tất cả các số trong vùng, còn hàm SUMIF chỉ cộng những ô thỏa mãn một điều kiện xác định"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 51): SUM tính tổng toàn bộ; SUMIF là tính tổng có chọn lọc theo điều kiện.",
      "hint": "SUM tính tổng tất cả; SUMIF tính tổng có điều kiện lọc."
    },
    {
      "id": "tin9-b11a-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về hàm SUMIF trong bảng tính:",
      "options": [
        "a) Kích thước và hình dạng của vùng sum_range nên tương ứng với vùng range để tránh lỗi tính toán ngầm",
        "b) Các ô chứa dữ liệu dạng văn bản trong vùng sum_range sẽ được tự động bỏ qua khi tính tổng",
        "c) Hàm SUMIF có thể kết hợp nhiều điều kiện logic phức tạp như AND, OR trong cùng một câu lệnh đơn",
        "d) Ta có thể dùng kí tự đại diện `?` để thay thế cho chính xác một kí tự bất kì trong điều kiện"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Hàm SUMIF đơn chỉ kiểm tra được 1 điều kiện duy nhất. Muốn kết hợp nhiều điều kiện đồng thời phải dùng hàm SUMIFS.",
      "hint": "Hàm SUMIF chỉ xử lí được một điều kiện đơn."
    },
    {
      "id": "tin9-b11a-fb1",
      "type": "fill_blank",
      "question": "Trong hàm SUMIF, tham số [1] chứa các giá trị điều kiện kiểm tra, còn tham số [2] chứa các giá trị số thực tế sẽ được cộng lại với nhau.",
      "blankAnswers": [
        "range",
        "sum_range"
      ],
      "wordBank": [
        "range",
        "sum_range",
        "criteria",
        "average_range",
        "test_range",
        "format"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 51): Range để so khớp điều kiện; sum_range chứa số để tính tổng.",
      "hint": "Range chứa điều kiện, sum_range chứa số tiền/số lượng để cộng."
    },
    {
      "id": "tin9-b11a-m1",
      "type": "matching",
      "question": "Nối công thức ở cột bên trái với ý nghĩa tính toán tương ứng ở cột bên phải (Cột A: Lớp, Cột B: Điểm):",
      "matchingLeft": [
        {
          "id": "1",
          "text": "=SUM(B2:B30)"
        },
        {
          "id": "2",
          "text": "=SUMIF(A2:A30, \"9A\", B2:B30)"
        },
        {
          "id": "3",
          "text": "=SUMIF(B2:B30, \">=8\")"
        },
        {
          "id": "4",
          "text": "=COUNTIF(A2:A30, \"9A\")"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Tính tổng số điểm của tất cả các bài đạt từ 8 điểm trở lên"
        },
        {
          "id": "b",
          "text": "Đếm số lượng học sinh thuộc lớp 9A"
        },
        {
          "id": "c",
          "text": "Tính tổng toàn bộ điểm số của tất cả các học sinh"
        },
        {
          "id": "d",
          "text": "Tính tổng điểm của riêng các học sinh thuộc lớp 9A"
        }
      ],
      "correctMatches": {
        "1": "c",
        "2": "d",
        "3": "a",
        "4": "b"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 52): Phân biệt rõ ràng giữa SUM, SUMIF và COUNTIF.",
      "hint": "SUM là tổng tất cả; SUMIF 9A là tổng điểm lớp 9A; COUNTIF là đếm học sinh."
    },
    {
      "id": "tin9-b11a-mc5",
      "type": "multiple_choice",
      "question": "Để tính tổng tiền bán hàng của các mặt hàng bắt đầu bằng chữ \"Sách\" (như Sách giáo khoa, Sách bài tập), điều kiện trong SUMIF viết thế nào?",
      "options": [
        "\"=Sách\"",
        "\"Sách*\"",
        "\"Sách?\"",
        "\"*Sách\""
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 52): Kí tự đại diện `*` đặt sau chữ \"Sách\" đại diện cho mọi từ phía sau.",
      "hint": "\"Sách*\" đại diện cho mọi từ bắt đầu bằng chữ Sách."
    },
    {
      "id": "tin9-b11a-mc6",
      "type": "multiple_choice",
      "question": "Khi tính tổng các số tiền lớn hơn 1 triệu đồng trong cột E từ dòng 2 đến dòng 50, công thức nào sau đây viết ngắn gọn nhất?",
      "options": [
        "=SUMIF(E2:E50, \">1000000\", E2:E50)",
        "=SUMIF(E2:E50, \">1000000\")",
        "Không thể tính được",
        "Cả hai công thức trên đều đúng và cho cùng kết quả"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 51): Cả hai đều cho kết quả chính xác, nhưng công thức 1 ngắn gọn hơn vì đã giản lược `sum_range` trùng với `range`.",
      "hint": "Cả hai công thức đều đúng cú pháp của Excel."
    },
    {
      "id": "tin9-b11a-mc7",
      "type": "multiple_choice",
      "question": "Nếu muốn tính giá trị trung bình có điều kiện (ví dụ điểm trung bình môn của học sinh lớp 9B), ta nên sử dụng hàm nào tương đương với hàm SUMIF?",
      "options": [
        "Hàm MEDIAN",
        "Hàm AVERAGEIF",
        "Hàm MAXIF",
        "Hàm MINIF"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 53): Tương tự SUMIF, Excel cung cấp hàm AVERAGEIF có cấu trúc `=AVERAGEIF(range, criteria, [average_range])` để tính trung bình có điều kiện.",
      "hint": "AVERAGEIF tính trung bình cộng có điều kiện."
    },
    {
      "id": "tin9-b11a-mc8",
      "type": "multiple_choice",
      "question": "Hàm SUMIF trong phần mềm bảng tính Excel có chức năng chính là gì?",
      "options": [
        "Tính TỔNG các giá trị trong một phạm vi thỏa mãn một ĐIỀU KIỆN (tiêu chí) xác định",
        "Đếm số lượng học sinh",
        "Tìm số nhỏ nhất",
        "Tính trung bình cộng không điều kiện"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 46): SUM (tổng) kết hợp IF (nếu) tạo thành hàm tính tổng theo điều kiện.",
      "hint": "Tính tổng các giá trị thỏa mãn một điều kiện xác định."
    },
    {
      "id": "tin9-b11a-mc9",
      "type": "multiple_choice",
      "question": "Cú pháp đầy đủ của hàm SUMIF gồm những đối số nào?",
      "options": [
        "=SUMIF(range, criteria, [sum_range])",
        "=SUMIF(sum_range, criteria, range)",
        "=SUMIF(criteria, sum_range)",
        "=SUMIF(range, sum_range)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "range: vùng kiểm tra điều kiện; criteria: điều kiện; sum_range: vùng thực tế cần tính tổng (nếu bỏ qua thì tính tổng trên range).",
      "hint": "=SUMIF(vùng_điều_kiện, điều_kiện, [vùng_tính_tổng])."
    },
    {
      "id": "tin9-b11a-mc10",
      "type": "multiple_choice",
      "question": "Nếu bỏ qua đối số thứ ba [sum_range] trong hàm =SUMIF(range, criteria), Excel sẽ tính tổng trên vùng nào?",
      "options": [
        "Tính tổng chính trên các ô của vùng thứ nhất (range) thỏa mãn điều kiện",
        "Kết quả trả về số 0",
        "Báo lỗi cú pháp",
        "Tính tổng toàn bộ trang tính"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Mặc định nếu sum_range bị lược bỏ, Excel lấy luôn range làm vùng cộng tổng số liệu.",
      "hint": "Tính tổng ngay trên chính vùng range."
    },
    {
      "id": "tin9-b11a-mc11",
      "type": "multiple_choice",
      "question": "Cho cột B (tên môn thể thao) và cột C (số tiền đóng góp). Để tính tổng số tiền đóng góp riêng cho môn 'Bóng đá', công thức đúng là:",
      "options": [
        "=SUMIF(B2:B20, \"Bóng đá\", C2:C20)",
        "=SUMIF(C2:C20, \"Bóng đá\", B2:B20)",
        "=SUMIF(B2:B20, C2:C20, \"Bóng đá\")",
        "=SUM(B2:B20, \"Bóng đá\")"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Vùng điều kiện là môn thể thao (B2:B20), điều kiện là \"Bóng đá\", vùng tính tổng là số tiền (C2:C20).",
      "hint": "=SUMIF(B2:B20, \"Bóng đá\", C2:C20)."
    },
    {
      "id": "tin9-b11a-mc12",
      "type": "multiple_choice",
      "question": "Để tính tổng số tiền của tất cả các khoản chi tiêu có giá trị LỚN HƠN 500.000 VNĐ trong vùng D2:D30, công thức viết là:",
      "options": [
        "=SUMIF(D2:D30, \">500000\")",
        "=SUMIF(D2:D30, >500000)",
        "=SUMIF(\">500000\", D2:D30)",
        "=SUM(D2:D30, \">500000\")"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Khi vùng điều kiện và vùng tính tổng trùng nhau, lược bỏ sum_range: =SUMIF(D2:D30, \">500000\").",
      "hint": "=SUMIF(D2:D30, \">500000\")."
    },
    {
      "id": "tin9-b11a-mc13",
      "type": "multiple_choice",
      "question": "Sự khác biệt cơ bản giữa hàm COUNTIF và hàm SUMIF là gì?",
      "options": [
        "COUNTIF dùng để ĐẾM số lượng các ô thỏa mãn điều kiện; SUMIF dùng để CỘNG TỔNG giá trị các số trong các ô thỏa mãn điều kiện",
        "COUNTIF chỉ dùng cho chữ cái, SUMIF chỉ dùng cho ngày tháng",
        "Hai hàm này hoàn toàn giống hệt nhau không khác gì",
        "SUMIF không bao giờ dùng được điều kiện"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "COUNTIF = Đếm số lần xuất hiện; SUMIF = Tính tổng giá trị số học.",
      "hint": "COUNTIF là đếm số lượng, SUMIF là cộng tổng giá trị."
    },
    {
      "id": "tin9-b11a-mc14",
      "type": "multiple_choice",
      "question": "Ứng dụng thực tế của hàm SUMIF trong quản lí quỹ lớp học sinh là gì?",
      "options": [
        "Tổng hợp nhanh tổng số tiền đã chi riêng cho từng mục (như tiền mua báo học tập, tiền photo tài liệu, tiền liên hoan) từ sổ thu chi chi tiết",
        "Tự động in tiền cho quỹ lớp",
        "Đổi mật khẩu tài khoản thủ quỹ",
        "Xóa sổ các bạn chưa nộp tiền"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Phân loại và cộng tổng chi phí theo từng danh mục là nghiệp vụ kế toán kinh điển của hàm SUMIF.",
      "hint": "Cộng tổng chi tiêu theo từng mục cụ thể của quỹ lớp."
    },
    {
      "id": "tin9-b11a-mc15",
      "type": "multiple_choice",
      "question": "Cho vùng A1:A4 chứa: [\"Táo\", \"Lê\", \"Táo\", \"Cam\"], vùng B1:B4 chứa: [10, 20, 30, 40]. Kết quả của =SUMIF(A1:A4, \"Táo\", B1:B4) là bao nhiêu?",
      "options": [
        "40 (vì 10 + 30 = 40)",
        "10",
        "30",
        "100"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Các ô có chữ 'Táo' là hàng 1 (10) và hàng 3 (30) -> Tổng = 10 + 30 = 40.",
      "hint": "10 + 30 = 40."
    }
  ],
  "tin9-bai-12a": [
    {
      "id": "g9-b12a-de-1",
      "question": "Cú pháp cơ bản của hàm điều kiện IF trong Excel là gì?",
      "options": [
        "=IF(logical_test, value_if_true, value_if_false)",
        "=IF(test)",
        "=IF(condition, value1, value2, value3)",
        "=IF(value_if_true, logical_test)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 52): =IF(điều_kiện, giá_trị_nếu_đúng, giá_trị_nếu_sai).",
      "hint": "Điều kiện, giá trị đúng, giá trị sai."
    },
    {
      "id": "g9-b12a-tb-1",
      "question": "Quy tắc quản lí tài chính cá nhân 50/30/20 phân chia thu nhập theo tỉ lệ nào?",
      "options": [
        "50% tiết kiệm, 50% ăn uống",
        "50% mua sắm giải trí, 30% ăn uống, 20% đi chơi",
        "50% cho nhu cầu thiết yếu, 30% cho mong muốn cá nhân, 20% cho tiết kiệm và dự phòng",
        "Chia đều mỗi phần 33%"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 54): Quy tắc 50-30-20 chia thu nhập thành: 50% thiết yếu, 30% mong muốn, 20% tiết kiệm.",
      "hint": "50% thiết yếu, 30% mong muốn, 20% tiết kiệm."
    },
    {
      "id": "g9-b12a-kho-1",
      "question": "Tại ô D2 có điểm trung bình. Nếu D2 >= 8.0 thì xếp loại \"Giỏi\", ngược lại nếu D2 >= 6.5 thì \"Khá\", còn lại là \"Đạt\". Công thức hàm IF lồng nhau nào ĐÚNG?",
      "options": [
        "=IF(D2>=8.0, \"Giỏi\", IF(D2>=6.5, \"Khá\", \"Đạt\"))",
        "=IF(D2>=6.5, \"Khá\", IF(D2>=8.0, \"Giỏi\", \"Đạt\"))",
        "=IF(D2>=8.0, \"Đạt\", IF(D2>=6.5, \"Khá\", \"Giỏi\"))",
        "=IF(D2>=8.0, \"Giỏi\", \"Khá\", \"Đạt\")"
      ],
      "correctAnswer": 0,
      "difficulty": "kho",
      "explanation": "Hàm IF lồng kiểm tra từ mức cao nhất trước: =IF(D2>=8.0, \"Giỏi\", IF(D2>=6.5, \"Khá\", \"Đạt\")).",
      "hint": "Kiểm tra >= 8.0 trước, rồi mới kiểm tra tiếp >= 6.5."
    },
    {
      "id": "tin9-b12a-mc1",
      "type": "multiple_choice",
      "question": "Cú pháp chuẩn của hàm điều kiện logic IF trong bảng tính Excel là gì?",
      "options": [
        "=IF(logical_test, criteria, sum_range)",
        "=IF(range, criteria)",
        "=IF(value_if_true, logical_test, value_if_false)",
        "=IF(logical_test, [value_if_true], [value_if_false])"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 55): Cú pháp hàm `=IF(logical_test, [value_if_true], [value_if_false])`. Nếu điều kiện Đúng trả về vế True, ngược lại trả về vế False.",
      "hint": "Điều kiện kiểm tra -> Giá trị nếu đúng -> Giá trị nếu sai."
    },
    {
      "id": "tin9-b12a-mc2",
      "type": "multiple_choice",
      "question": "Công thức `=IF(D2>=5, \"Đạt\", \"Chưa đạt\")` sẽ trả về kết quả gì nếu ô D2 có giá trị bằng 4.5?",
      "options": [
        "Đạt",
        "Chưa đạt",
        "Báo lỗi #VALUE!",
        "Trả về số 0"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 55): Vì 4.5 >= 5 là Sai (False), nên hàm IF sẽ thực hiện nhánh thứ hai và trả về giá trị \"Chưa đạt\".",
      "hint": "4.5 nhỏ hơn 5 nên điều kiện là Sai -> lấy giá trị nhánh sau."
    },
    {
      "id": "tin9-b12a-mc3",
      "type": "multiple_choice",
      "question": "Trong quản lí tài chính cá nhân, quy tắc phân bổ ngân sách \"50/30/20\" khuyến nghị điều gì?",
      "options": [
        "50% để chơi game, 30% mua đồ ăn vặt, 20% để quên",
        "50% cho bạn bè vay, 30% mua vé số, 20% mua quần áo",
        "50% cho nhu cầu thiết yếu, 30% cho mong muốn cá nhân, 20% cho tiết kiệm và đầu tư tương lai",
        "Cả 100% đều dành cho việc tiêu xài thoải mái"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 57): Quy tắc 50/30/20 là mô hình quản lí tài chính cá nhân thông minh: 50% nhu cầu sống (ăn, ở, học), 30% sở thích, 20% tiết kiệm.",
      "hint": "50% thiết yếu, 30% mong muốn, 20% tiết kiệm dự phòng."
    },
    {
      "id": "tin9-b12a-mc4",
      "type": "multiple_choice",
      "question": "Để cảnh báo nếu tổng chi tiêu vượt quá mức ngân sách cho phép (Số_tiền_chi > Ngân_sách) thì hiện chữ \"Bội chi\", ngược lại hiện \"Hợp lí\", ta dùng công thức nào?",
      "options": [
        "=IF(Chi < NganSach, \"Bội chi\", \"Hợp lí\")",
        "=IF(Chi > NganSach, \"Bội chi\", \"Hợp lí\")",
        "=COUNTIF(Chi, \"Bội chi\")",
        "=SUMIF(Chi, \">\" & NganSach)"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 58): Khi chi phí thực tế lớn hơn ngân sách dự kiến, điều kiện Chi > Ngân_sách là Đúng -> hiển thị \"Bội chi\".",
      "hint": "Chi lớn hơn ngân sách thì cảnh báo Bội chi."
    },
    {
      "id": "tin9-b12a-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về hàm IF và quản lí tài chính cá nhân:",
      "options": [
        "a) Ta có thể lồng ghép nhiều hàm IF vào nhau (Nested IF) để phân loại từ 3 mức trở lên",
        "b) Việc theo dõi thu chi hàng ngày trên bảng tính giúp học sinh kiểm soát thói quen chi tiêu và hình thành tính tự lập",
        "c) Hàm IF bắt buộc phải luôn trả về dữ liệu dạng số, không thể trả về văn bản",
        "d) Trong hàm IF, nếu vế value_if_false bị bỏ qua và điều kiện là Sai, Excel sẽ hiển thị chữ FALSE"
      ],
      "trueFalseAnswers": [
        true,
        true,
        false,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Hàm IF có thể trả về cả số, chuỗi văn bản, ngày tháng hoặc thậm chí là kết quả của một công thức toán học khác.",
      "hint": "Hàm IF trả về được cả số lẫn chuỗi văn bản."
    },
    {
      "id": "tin9-b12a-fb1",
      "type": "fill_blank",
      "question": "Hàm IF trong Excel nhận vào một [1] logic; nếu điều kiện đó đúng thì trả về giá trị ở nhánh [2], nếu sai thì trả về giá trị ở nhánh thứ ba.",
      "blankAnswers": [
        "biểu thức điều kiện",
        "value_if_true"
      ],
      "wordBank": [
        "biểu thức điều kiện",
        "value_if_true",
        "sum_range",
        "chuỗi văn bản",
        "hàm SUM",
        "định dạng"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 55): Nguyên lí hoạt động: kiểm tra biểu thức điều kiện (logical_test), nếu True trả về value_if_true.",
      "hint": "Biểu thức kiểm tra điều kiện và giá trị nhánh đúng."
    },
    {
      "id": "tin9-b12a-m1",
      "type": "matching",
      "question": "Nối công thức phân loại ở cột bên trái với kết quả xếp loại ở cột bên phải (Cột C: Điểm trung bình):",
      "matchingLeft": [
        {
          "id": "1",
          "text": "=IF(C2>=8, \"Tốt\", \"Chưa tốt\") (với C2 = 8.5)"
        },
        {
          "id": "2",
          "text": "=IF(C2>=8, \"Tốt\", \"Chưa tốt\") (với C2 = 7.0)"
        },
        {
          "id": "3",
          "text": "=IF(C2>=9, \"Xuất sắc\", IF(C2>=8, \"Giỏi\", \"Khá\")) (với C2 = 9.2)"
        },
        {
          "id": "4",
          "text": "=IF(C2>=9, \"Xuất sắc\", IF(C2>=8, \"Giỏi\", \"Khá\")) (với C2 = 8.3)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Chưa tốt"
        },
        {
          "id": "b",
          "text": "Tốt"
        },
        {
          "id": "c",
          "text": "Giỏi"
        },
        {
          "id": "d",
          "text": "Xuất sắc"
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
      "explanation": "SGK Tin học 9 KNTT (Trang 56): Kĩ thuật dùng hàm IF đơn và hàm IF lồng nhau để xếp loại nhiều bậc.",
      "hint": "Xét từng điều kiện điểm số tương ứng."
    },
    {
      "id": "tin9-b12a-mc5",
      "type": "multiple_choice",
      "question": "Khi xây dựng kế hoạch tài chính cá nhân trên Excel, chỉ số \"Số dư cuối tháng\" được tính bằng công thức cơ bản nào?",
      "options": [
        "Tổng thu nhập x Tổng chi tiêu",
        "Tổng thu nhập + Tổng chi tiêu",
        "Tổng thu nhập - Tổng chi tiêu",
        "Tổng chi tiêu / Tổng thu nhập"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 57): Số dư tích lũy = Tổng thu - Tổng chi. Nếu số dư > 0 là có thặng dư tiết kiệm, nếu < 0 là bị thâm hụt tài chính.",
      "hint": "Số dư = Tiền thu vào trừ đi Tiền chi ra."
    },
    {
      "id": "tin9-b12a-mc6",
      "type": "multiple_choice",
      "question": "Để tính số tiền thưởng: nếu Doanh_thu > 100 triệu thì thưởng 5% Doanh_thu, ngược lại không thưởng (thưởng 0 đồng), công thức nào đúng?",
      "options": [
        "=SUMIF(A2, \">100000000\")*5%",
        "=IF(A2>100000000, \"5%\", \"0\")",
        "=IF(A2>100000000, 0, A2*5%)",
        "=IF(A2>100000000, A2*5%, 0)"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 56): Nhánh True trả về phép tính số học `A2*5%`, nhánh False trả về số 0.",
      "hint": "Thỏa mãn điều kiện thì nhân 5%, ngược lại trả về 0."
    },
    {
      "id": "tin9-b12a-mc7",
      "type": "multiple_choice",
      "question": "Hàm điều kiện IF có thể kết hợp với các hàm logic nào sau đây để kiểm tra nhiều điều kiện phức tạp cùng lúc?",
      "options": [
        "Hàm AND và hàm OR",
        "Hàm LEFT và hàm RIGHT",
        "Hàm SUM và hàm AVERAGE",
        "Hàm COUNT và hàm MAX"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 56): Các hàm logic AND (đồng thời) và OR (hoặc) kết hợp chặt chẽ với hàm IF để tạo điều kiện phức hợp.",
      "hint": "Hàm AND và hàm OR là hai hàm logic kinh điển."
    },
    {
      "id": "tin9-b12a-mc8",
      "type": "multiple_choice",
      "question": "Cú pháp chuẩn xác của hàm điều kiện IF trong phần mềm bảng tính Excel là gì?",
      "options": [
        "=IF(logical_test, value_if_true, value_if_false)",
        "=IF(value_if_true, logical_test, value_if_false)",
        "=IF(condition, result)",
        "=IF(logical_test; value1; value2; value3)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 50): logical_test (điều kiện kiểm tra), value_if_true (giá trị trả về nếu điều kiện Đúng), value_if_false (giá trị nếu điều kiện Sai).",
      "hint": "=IF(điều_kiện, giá_trị_nếu_đúng, giá_trị_nếu_sai)."
    },
    {
      "id": "tin9-b12a-mc9",
      "type": "multiple_choice",
      "question": "Để xét kết quả học tập tại ô C2: nếu Điểm trung bình (ô B2) >= 5.0 thì ghi 'Đạt', ngược lại ghi 'Chưa đạt', công thức đúng là:",
      "options": [
        "=IF(B2>=5.0, \"Đạt\", \"Chưa đạt\")",
        "=IF(B2>=5.0, Đạt, Chưa đạt)",
        "=IF(B2<5.0, \"Đạt\", \"Chưa đạt\")",
        "=IF(B2=5.0, \"Đạt\")"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Giá trị chuỗi trả về (\"Đạt\", \"Chưa đạt\") bắt buộc phải đặt trong dấu ngoặc kép.",
      "hint": "=IF(B2>=5.0, \"Đạt\", \"Chưa đạt\")."
    },
    {
      "id": "tin9-b12a-mc10",
      "type": "multiple_choice",
      "question": "Hàm IF lồng nhau (Nested IF) được sử dụng khi nào trong bảng tính?",
      "options": [
        "Khi bài toán cần kiểm tra nhiều hơn hai trường hợp điều kiện rẽ nhánh (Ví dụ: xếp loại Giỏi, Khá, Trung bình, Yếu)",
        "Chỉ khi cần cộng 2 số",
        "Khi máy tính bị lỗi phần cứng",
        "Không bao giờ được lồng hàm IF"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Lồng hàm IF vào vị trí value_if_false giúp phân nhánh đa cấp cho 3, 4 hoặc nhiều mức phân loại.",
      "hint": "Khi có từ 3 trường hợp điều kiện trở lên."
    },
    {
      "id": "tin9-b12a-mc11",
      "type": "multiple_choice",
      "question": "Tại sao việc 'Quản lí tài chính cá nhân' từ lứa tuổi học sinh lại có ý nghĩa thiết thực?",
      "options": [
        "Giúp hình thành thói quen chi tiêu thông minh, biết tiết kiệm cho các mục tiêu tương lai và tránh lãng phí tiền bạc vào những thứ không cần thiết",
        "Để học sinh trở thành tỉ phú ngay lập tức",
        "Để không cần ăn uống gì cả",
        "Để cho vay lấy lãi"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tư duy tài chính thông minh giúp học sinh làm chủ cuộc sống, quý trọng giá trị sức lao động.",
      "hint": "Chi tiêu thông minh, tiết kiệm cho tương lai và tránh lãng phí."
    },
    {
      "id": "tin9-b12a-mc12",
      "type": "multiple_choice",
      "question": "Quy tắc quản lí tài chính theo mô hình 50/30/20 khuyên phân bổ thu nhập (tiền tiêu vặt) như thế nào?",
      "options": [
        "50% cho Nhu cầu thiết yếu (ăn uống, học tập), 30% cho Mong muốn giải trí cá nhân, và 20% cho Tiết kiệm tích lũy",
        "100% dành cho chơi game",
        "50% cho giải trí, 50% mua quà",
        "Tiêu hết không cần giữ lại đồng nào"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Mô hình ngân sách 50/30/20 là chuẩn mực tài chính phổ biến nhất giúp cân bằng cuộc sống và tích lũy an toàn.",
      "hint": "50% thiết yếu, 30% sở thích giải trí, 20% tiết kiệm tích lũy."
    },
    {
      "id": "tin9-b12a-mc13",
      "type": "multiple_choice",
      "question": "Khi lập bảng theo dõi chi tiêu cá nhân trên Excel, công thức nào giúp tự động cảnh báo 'Vượt ngân sách' nếu số tiền đã chi (ô C10) lớn hơn hạn mức cho phép (ô B10)?",
      "options": [
        "=IF(C10>B10, \"Vượt ngân sách!\", \"An toàn\")",
        "=IF(C10<B10, \"Vượt ngân sách!\", \"An toàn\")",
        "=IF(C10=B10, \"Nguy hiểm\")",
        "=SUM(B10, C10)"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Nếu chi > hạn mức (C10 > B10) thì cảnh báo \"Vượt ngân sách!\", ngược lại trả về \"An toàn\".",
      "hint": "=IF(C10>B10, \"Vượt ngân sách!\", \"An toàn\")."
    },
    {
      "id": "tin9-b12a-mc14",
      "type": "multiple_choice",
      "question": "Khoản chi nào sau đây thuộc nhóm 'Nhu cầu thiết yếu' (Needs) của một học sinh THCS?",
      "options": [
        "Mua sách vở, đồ dùng học tập, dụng cụ vẽ và bữa ăn trưa dinh dưỡng",
        "Mua một chiếc điện thoại iPhone đời mới nhất",
        "Nạp thẻ chơi game online",
        "Đi xem phim rạp mỗi ngày"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Sách vở học tập và ăn uống là nhu cầu thiết yếu cơ bản, các thứ giải trí thuộc nhóm mong muốn (Wants).",
      "hint": "Sách vở, dụng cụ học tập và ăn uống."
    },
    {
      "id": "tin9-b12a-mc15",
      "type": "multiple_choice",
      "question": "Để làm nổi bật màu nền đỏ cho các ô có chữ 'Vượt ngân sách' tự động, ta kết hợp tính năng nào của Excel?",
      "options": [
        "Định dạng có điều kiện (Conditional Formatting)",
        "Đổi phông chữ thủ công",
        "Xóa cột đó đi",
        "In trang tính"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Conditional Formatting tự động tô màu trực quan khi giá trị ô thỏa mãn điều kiện quy định.",
      "hint": "Tính năng Conditional Formatting (Định dạng có điều kiện)."
    }
  ],
  "tin9-bai-13": [
    {
      "id": "g9-b13-de-1",
      "question": "Tường lửa (Firewall) trong hệ thống mạng máy tính có vai trò gì?",
      "options": [
        "Phòng chống cháy nổ cho thiết bị",
        "Làm mát bộ vi xử lý máy tính",
        "Kiểm soát và ngăn chặn các truy cập trái phép từ bên ngoài vào mạng nội bộ hoặc máy tính cá nhân",
        "Tăng tốc độ sạc pin cho máy tính"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 58): Tường lửa là rào chắn an ninh kiểm soát lưu lượng mạng vào/ra để ngăn ngừa tin tặc.",
      "hint": "Rào chắn an ninh kiểm soát các kết nối mạng."
    },
    {
      "id": "g9-b13-tb-1",
      "question": "Giao thức HTTPS trên thanh địa chỉ trình duyệt (có biểu tượng ổ khóa) khác với HTTP ở điểm nào?",
      "options": [
        "Dữ liệu truyền giữa trình duyệt và máy chủ được mã hóa an toàn bằng chứng chỉ SSL/TLS",
        "HTTP nhanh hơn HTTPS 100 lần",
        "HTTPS không dùng được trên điện thoại",
        "HTTPS chỉ dùng cho xem phim"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Chữ S trong HTTPS viết tắt của Secure. Dữ liệu truyền tải được mã hóa bảo mật chống nghe lén và đánh cắp tài khoản.",
      "hint": "HTTPS có mã hóa dữ liệu an toàn."
    },
    {
      "id": "g9-b13-kho-1",
      "question": "Hành vi tấn công mạng \"Lừa đảo mạo danh\" (Phishing) thường được thực hiện qua hình thức nào?",
      "options": [
        "Đến tận nhà lấy cắp máy tính",
        "Bấm còi xe lớn làm gián đoạn mạng",
        "Cắt đứt dây cáp quang biển",
        "Gửi email hoặc tin nhắn giả mạo ngân hàng/nhà trường kèm đường link đăng nhập giả để lừa người dùng nhập mật khẩu"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "Tấn công Phishing tạo website mạo danh y hệt trang thật để đánh lừa người dùng tự cung cấp tên đăng nhập và mật khẩu.",
      "hint": "Giả mạo ngân hàng hoặc dịch vụ uy tín để lừa mật khẩu."
    },
    {
      "id": "tin9-b13-mc1",
      "type": "multiple_choice",
      "question": "Dịch vụ mạng và điện toán đám mây mang lại lợi ích nổi bật nào cho người dùng cá nhân và doanh nghiệp?",
      "options": [
        "Tự động làm bài tập hộ học sinh",
        "Truy cập dữ liệu từ mọi nơi có kết nối mạng, đồng bộ liên tục và giảm chi phí đầu tư phần cứng lưu trữ",
        "Miễn phí hoàn toàn tiền sử dụng điện thoại",
        "Làm cho máy tính cá nhân không bao giờ bị hỏng"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 60): Điện toán đám mây cho phép lưu trữ, xử lí dữ liệu linh hoạt trên máy chủ từ xa thông qua mạng Internet.",
      "hint": "Truy cập dữ liệu mọi lúc mọi nơi và đồng bộ tự động."
    },
    {
      "id": "tin9-b13-mc2",
      "type": "multiple_choice",
      "question": "Mã độc tống tiền (Ransomware) là loại phần mềm độc hại hoạt động theo phương thức nào?",
      "options": [
        "Xóa bỏ biểu tượng Recycle Bin trên màn hình desktop",
        "Tự động tăng âm lượng loa máy tính lên mức to nhất",
        "Làm đổi hình nền màn hình thành màu đen",
        "Mã hóa toàn bộ tệp tin quan trọng trên máy nạn nhân và đòi tiền chuộc để cung cấp khóa giải mã"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 61): Ransomware chiếm quyền kiểm soát và mã hóa dữ liệu cá nhân của người dùng nhằm tống tiền bất hợp pháp.",
      "hint": "Mã hóa dữ liệu và đòi tiền chuộc để giải mã."
    },
    {
      "id": "tin9-b13-mc3",
      "type": "multiple_choice",
      "question": "Hình thức tấn công lừa đảo qua mạng (Phishing) thường được kẻ xấu thực hiện bằng cách nào?",
      "options": [
        "Đến tận nhà người dùng đe dọa bằng vũ lực",
        "Giả mạo email, tin nhắn hoặc website của ngân hàng, tổ chức uy tín để lừa người dùng nhập mật khẩu và mã OTP",
        "Cắt đứt dây cáp mạng ngoài cột điện",
        "Tự chế tạo chip vi xử lí giả"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 62): Phishing là chiêu trò giả mạo giao diện chính thống (như ngân hàng, mạng xã hội) để đánh cắp tài khoản đăng nhập.",
      "hint": "Giả mạo website uy tín để lừa nhập mật khẩu và mã OTP."
    },
    {
      "id": "tin9-b13-mc4",
      "type": "multiple_choice",
      "question": "Giao thức HTTPS trên thanh địa chỉ trình duyệt (có biểu tượng chiếc ổ khóa xanh) đảm bảo điều gì?",
      "options": [
        "Dữ liệu truyền giữa trình duyệt của người dùng và máy chủ trang web đã được mã hóa an toàn",
        "Trang web tải nhanh gấp 5 lần trang web HTTP",
        "Máy tính của người dùng đã được cài phần mềm diệt virus",
        "Trang web đó hoàn toàn không có quảng cáo"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 63): HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ SSL/TLS để mã hóa đường truyền dữ liệu chống nghe lén.",
      "hint": "Dữ liệu đường truyền được mã hóa bảo mật chống nghe lén."
    },
    {
      "id": "tin9-b13-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các phát biểu về an ninh thông tin và phòng chống mã độc:",
      "options": [
        "a) Tường lửa (Firewall) đóng vai trò rào chắn kiểm soát lưu lượng mạng ra và vào máy tính",
        "b) Sử dụng mạng Wi-Fi công cộng không có mật khẩu tại quán cà phê để giao dịch ngân hàng là rất an toàn",
        "c) Xác thực hai yếu tố (2FA) giúp bảo vệ tài khoản ngay cả khi kẻ xấu đã biết được mật khẩu đăng nhập",
        "d) Phần mềm diệt virus cần được cập nhật cơ sở dữ liệu mẫu nhận diện virus định kì thường xuyên"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 62): Wi-Fi công cộng không bảo mật là môi trường nguy hiểm nhất, kẻ xấu dễ dàng nghe lén (Man-in-the-middle) gói tin tài khoản.",
      "hint": "Tuyệt đối không giao dịch ngân hàng trên Wi-Fi công cộng mở."
    },
    {
      "id": "tin9-b13-fb1",
      "type": "fill_blank",
      "question": "Biện pháp xác thực hai yếu tố [1] bổ sung thêm một lớp bảo vệ (như mã OTP gửi về điện thoại), còn [2] giúp lọc và ngăn chặn các kết nối độc hại từ bên ngoài.",
      "blankAnswers": [
        "(2FA)",
        "tường lửa (Firewall)"
      ],
      "wordBank": [
        "(2FA)",
        "tường lửa (Firewall)",
        "mã độc",
        "chuột quang",
        "bộ nhớ RAM",
        "cáp quang"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 63): 2FA là bảo vệ hai lớp; Firewall là tường lửa rào chắn an ninh mạng.",
      "hint": "Xác thực 2 yếu tố 2FA và tường lửa Firewall."
    },
    {
      "id": "tin9-b13-m1",
      "type": "matching",
      "question": "Nối loại mã độc ở cột bên trái với tác hại nguy hiểm ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Ransomware (Mã độc tống tiền)"
        },
        {
          "id": "2",
          "text": "Spyware (Phần mềm gián điệp)"
        },
        {
          "id": "3",
          "text": "Keylogger (Ghi lại thao tác phím)"
        },
        {
          "id": "4",
          "text": "Worm (Sâu máy tính)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Âm thầm ghi lại mọi kí tự người dùng bấm trên bàn phím để trộm mật khẩu"
        },
        {
          "id": "b",
          "text": "Mã hóa dữ liệu máy tính và đòi trả tiền chuộc để giải mã"
        },
        {
          "id": "c",
          "text": "Tự động nhân bản và lây lan cực nhanh qua hệ thống mạng máy tính"
        },
        {
          "id": "d",
          "text": "Bí mật theo dõi hành vi, vị trí và đánh cắp thông tin cá nhân gửi về máy chủ tin tặc"
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
      "explanation": "SGK Tin học 9 KNTT (Trang 61, 62): Phân loại và đặc tính phá hoại của các dòng mã độc phổ biến.",
      "hint": "Ransomware tống tiền; Spyware gián điệp; Keylogger ghi phím; Worm lây lan."
    },
    {
      "id": "tin9-b13-mc5",
      "type": "multiple_choice",
      "question": "Khi nhận được một email lạ kèm tệp tin đính kèm có đuôi mở rộng là `.exe` hoặc `.scr`, hành vi an toàn nhất là gì?",
      "options": [
        "Lưu tệp tin vào màn hình desktop để hôm sau mở",
        "Mở tệp tin ra ngay để xem bên trong có gì vui",
        "Tuyệt đối không mở hay tải về, xóa ngay email và báo cáo thư rác (Spam)",
        "Chuyển tiếp email cho tất cả bạn bè trong danh bạ cùng xem"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 63): Tệp đính kèm có đuôi thực thi (.exe, .bat, .scr) từ nguồn không xác định chứa nguy cơ mã độc cực cao.",
      "hint": "Không mở tệp thực thi lạ và xóa ngay lập tức."
    },
    {
      "id": "tin9-b13-mc6",
      "type": "multiple_choice",
      "question": "Một mật khẩu được coi là mạnh và có độ an toàn cao khi thỏa mãn điều kiện nào sau đây?",
      "options": [
        "Có độ dài từ 8 đến 12 kí tự trở lên, kết hợp chữ hoa, chữ thường, chữ số và kí tự đặc biệt",
        "Chỉ gồm 4 chữ số trùng với biển số xe",
        "Là dãy số liên tiếp 12345678",
        "Là ngày tháng năm sinh của chính mình"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 64): Mật khẩu mạnh phải dài, không liên quan đến thông tin cá nhân dễ đoán và phối hợp đa dạng kí tự.",
      "hint": "Dài trên 8-12 kí tự, có hoa, thường, số và kí hiệu đặc biệt."
    },
    {
      "id": "tin9-b13-mc7",
      "type": "multiple_choice",
      "question": "Kẻ xấu có thể thực hiện cuộc tấn công từ chối dịch vụ phân tán (DDoS) nhằm mục đích gì?",
      "options": [
        "Làm hỏng chuột máy tính của người dùng",
        "Đổi phông chữ của trang web",
        "Đánh cắp mật khẩu wifi của từng nhà",
        "Làm tê liệt máy chủ của một trang web hoặc dịch vụ trực tuyến bằng cách gửi hàng triệu yêu cầu truy cập ảo cùng lúc"
      ],
      "correctAnswer": 3,
      "difficulty": "kho",
      "explanation": "SGK Tin học 9 KNTT (Trang 62): Tấn công từ chối dịch vụ (DDoS) gây quá tải băng thông và bộ nhớ máy chủ, khiến người dùng chính thống không thể truy cập.",
      "hint": "Làm tê liệt máy chủ bằng lượng truy cập ảo khổng lồ."
    },
    {
      "id": "tin9-b13-mc8",
      "type": "multiple_choice",
      "question": "Tấn công từ chối dịch vụ phân tán (DDoS - Distributed Denial of Service) có phương thức hoạt động nguy hiểm như thế nào?",
      "options": [
        "Huy động mạng lưới hàng ngàn máy tính 'ma' (Botnet) đồng loạt gửi lượng yêu cầu truy cập khổng lồ đến một máy chủ khiến máy chủ bị quá tải và tê liệt hoàn toàn",
        "Gửi một con virus xóa tệp tin trên máy nạn nhân",
        "Ăn trộm bàn phím của người khác",
        "Rút dây điện nguồn máy tính"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 54): DDoS làm nghẽn băng thông hệ thống máy chủ, ngăn chặn người dùng hợp pháp tiếp cận dịch vụ.",
      "hint": "Làm tê liệt máy chủ bằng cách gửi lượng yêu cầu khổng lồ từ mạng Botnet."
    },
    {
      "id": "tin9-b13-mc9",
      "type": "multiple_choice",
      "question": "Mã độc tống tiền (Ransomware) gây ra thiệt hại nghiêm trọng nào cho nạn nhân?",
      "options": [
        "Mã hóa toàn bộ các tệp tài liệu quan trọng trên máy tính của nạn nhân bằng mật mã phức tạp và đòi tiền chuộc để giải mã",
        "Chỉ làm màn hình máy tính nhấp nháy",
        "Tự động gửi lời chúc mừng sinh nhật",
        "Làm tăng tốc độ quạt gió"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Ransomware biến dữ liệu thành con tin đòi tiền chuộc bằng tiền mã hóa; sao lưu định kì là giải pháp phòng vệ duy nhất.",
      "hint": "Mã hóa khóa dữ liệu và đòi tiền chuộc."
    },
    {
      "id": "tin9-b13-mc10",
      "type": "multiple_choice",
      "question": "Mạng riêng ảo (VPN - Virtual Private Network) cung cấp cơ chế bảo mật nào khi người dùng truy cập Internet ở quán cafe qua Wi-Fi công cộng?",
      "options": [
        "Mã hóa toàn bộ lưu lượng dữ liệu truyền qua một 'đường hầm' an toàn, ngăn chặn kẻ xấu nghe lén hoặc đánh cắp thông tin đăng nhập",
        "Tăng dung lượng pin điện thoại",
        "Chặn không cho màn hình sáng",
        "Tự động thanh toán tiền cafe"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "VPN mã hóa đường truyền điểm-điểm (Tunneling), bảo vệ dữ liệu nhạy cảm trên sóng Wi-Fi không an toàn.",
      "hint": "Tạo đường hầm mã hóa dữ liệu an toàn trên mạng công cộng."
    },
    {
      "id": "tin9-b13-mc11",
      "type": "multiple_choice",
      "question": "Tường lửa (Firewall) trong hệ thống mạng máy tính đóng vai trò gì?",
      "options": [
        "Rào chắn bảo vệ kiểm soát toàn bộ lưu lượng ra vào mạng máy tính theo các quy tắc an ninh, ngăn chặn các truy cập trái phép từ bên ngoài",
        "Bức tường gạch chống cháy nổ cho phòng máy tính",
        "Dây cáp chống sét",
        "Phần mềm nghe nhạc trực tuyến"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Firewall giám sát và sàng lọc các gói tin mạng, chặn đứng các mối nguy hại thâm nhập vào mạng nội bộ.",
      "hint": "Rào chắn kiểm soát lưu lượng và ngăn chặn truy cập trái phép."
    },
    {
      "id": "tin9-b13-mc12",
      "type": "multiple_choice",
      "question": "Biểu tượng ổ khóa màu xanh lá cây hoặc ổ khóa đóng cạnh đường link URL trên thanh địa chỉ của trình duyệt web biểu thị điều gì?",
      "options": [
        "Trang web đang sử dụng giao thức bảo mật HTTPS với chứng chỉ SSL/TLS, dữ liệu trao đổi giữa em và máy chủ được mã hóa an toàn",
        "Trang web này đang bị khóa không cho vào",
        "Máy tính của em đang bị nhiễm virus",
        "Trang web yêu cầu người dùng phải trả tiền mặt"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Biểu tượng khóa chứng thực kênh truyền bảo mật HTTPS, bảo vệ mật khẩu và thẻ tín dụng không bị chặn bắt.",
      "hint": "Giao thức HTTPS mã hóa dữ liệu an toàn (chứng chỉ SSL/TLS)."
    },
    {
      "id": "tin9-b13-mc13",
      "type": "multiple_choice",
      "question": "Phương thức xác thực hai yếu tố (2FA / Two-Factor Authentication) bảo vệ tài khoản tốt hơn mật khẩu thông thường như thế nào?",
      "options": [
        "Đòi hỏi 2 lớp bảo vệ độc lập: mật khẩu và một mã xác nhận gửi về điện thoại (hoặc sinh trắc học vân tay); kẻ trộm có biết mật khẩu cũng không vào được",
        "Bắt buộc người dùng phải gõ mật khẩu hai lần liên tiếp",
        "Chỉ cho phép hai người cùng đăng nhập",
        "Không có tác dụng gì"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "2FA kết hợp điều bạn biết (mật khẩu) và điều bạn sở hữu (điện thoại/OTP) tạo ra lớp bảo vệ kép kiên cố.",
      "hint": "Kết hợp mật khẩu và mã OTP gửi qua điện thoại cá nhân."
    },
    {
      "id": "tin9-b13-mc14",
      "type": "multiple_choice",
      "question": "Hành vi sử dụng mạng Wi-Fi công cộng mở (không có mật khẩu) ở sân bay hay bến xe để đăng nhập tài khoản ngân hàng tiềm ẩn nguy cơ gì?",
      "options": [
        "Bị tin tặc sử dụng kỹ thuật tấn công kẻ đứng giữa (Man-in-the-Middle) để chặn bắt tên đăng nhập, mật khẩu và dữ liệu tài chính",
        "Điện thoại sẽ bị vỡ màn hình",
        "Máy bay không thể cất cánh",
        "Tài khoản sẽ được tặng thêm tiền"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Wi-Fi công cộng không mã hóa là mảnh đất màu mỡ cho các cuộc tấn công đánh cắp phiên làm việc.",
      "hint": "Nguy cơ bị nghe lén và đánh cắp thông tin tài chính."
    },
    {
      "id": "tin9-b13-mc15",
      "type": "multiple_choice",
      "question": "Lỗ hổng 'Zero-day' (Lỗ hổng ngày số không) trong an ninh thông tin là gì?",
      "options": [
        "Lỗ hổng bảo mật phần mềm mà nhà phát triển chưa hề biết đến và chưa có bản vá lỗi nào, có nguy cơ bị hacker khai thác tấn công tức thì",
        "Lỗ hổng xảy ra vào ngày đầu tiên của năm mới",
        "Một phần mềm hoàn toàn không có lỗi",
        "Lỗi xảy ra lúc 0 giờ đêm"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Zero-day cực kì nguy hiểm vì nạn nhân và nhà sản xuất có '0 ngày' để phòng thủ trước khi bản vá kịp ra đời.",
      "hint": "Lỗ hổng chưa được công bố và chưa có bản vá sửa chữa."
    }
  ],
  "tin9-bai-14": [
    {
      "id": "g9-b14-de-1",
      "question": "Phương thức xác thực hai yếu tố (2FA - Two-Factor Authentication) bảo vệ tài khoản người dùng như thế nào?",
      "options": [
        "Yêu cầu nhập mật khẩu đúng 2 lần liên tiếp.",
        "Yêu cầu mật khẩu và thêm một mã xác thực thứ hai (gửi qua tin nhắn SMS hoặc ứng dụng Authenticator) khi đăng nhập từ thiết bị mới.",
        "Tự động đổi mật khẩu sau mỗi 2 phút.",
        "Yêu cầu 2 người cùng nhập mật khẩu một lúc."
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 61): 2FA kết hợp giữa mật khẩu (điều bạn biết) và thiết bị tin cậy (điều bạn sở hữu) để ngăn chặn tin tặc.",
      "hint": "Mật khẩu kèm mã xác thực gửi về điện thoại."
    },
    {
      "id": "g9-b14-tb-1",
      "question": "Mật khẩu nào sau đây được coi là MẬT KHẨU MẠNH và AN TOÀN nhất?",
      "options": [
        "hovaten2010",
        "12345678",
        "TinHoc9@KNTT#2026! (Dài trên 12 ký tự, gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt)",
        "matkhau123"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "Mật khẩu mạnh phải dài từ 8-12 ký tự trở lên, không chứa thông tin cá nhân dễ đoán và kết hợp chữ hoa, thường, số, ký tự đặc biệt.",
      "hint": "Kết hợp chữ hoa, thường, số và ký tự đặc biệt."
    },
    {
      "id": "tin9-b14-mc1",
      "type": "multiple_choice",
      "question": "Thao tác nào sau đây giúp kích hoạt tính năng Xác thực 2 bước (2-Step Verification) cho tài khoản Google / Gmail cá nhân?",
      "options": [
        "Đổi tên hiển thị của tài khoản",
        "Vào Quản lí Tài khoản Google -> Bảo mật (Security) -> Bật Xác minh 2 bước",
        "Chỉ dùng Gmail vào ban ngày",
        "Xóa tài khoản Gmail cũ tạo tài khoản mới"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 66): Trong phần Cài đặt Tài khoản Google mục Bảo mật (Security) có tùy chọn kích hoạt Xác minh 2 bước.",
      "hint": "Vào mục Quản lí tài khoản Google -> Bảo mật."
    },
    {
      "id": "tin9-b14-mc2",
      "type": "multiple_choice",
      "question": "Để sao lưu (Backup) dữ liệu cá nhân quan trọng phòng trường hợp máy tính bị hỏng hoặc nhiễm virus, giải pháp nào sau đây là an toàn nhất?",
      "options": [
        "Sao chép tệp từ ổ đĩa C sang màn hình Desktop của cùng một máy",
        "Ghi nhớ thông tin bằng trí nhớ cá nhân",
        "Sao lưu dữ liệu định kì lên dịch vụ đám mây (Google Drive / OneDrive) và ổ cứng di động ngoài",
        "Chỉ lưu trong bộ nhớ tạm Clipboard"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 67): Nguyên tắc sao lưu 3-2-1: lưu trữ trên ít nhất 2 phương tiện độc lập (đám mây và ổ cứng gắn ngoài).",
      "hint": "Sao lưu lên dịch vụ đám mây và ổ cứng di động ngoài."
    },
    {
      "id": "tin9-b14-mc3",
      "type": "multiple_choice",
      "question": "Trình duyệt web cung cấp tính năng \"Duyệt web riêng tư\" (Incognito Mode / InPrivate). Tính năng này KHÔNG lưu lại điều gì trên máy tính sau khi đóng cửa sổ?",
      "options": [
        "Dấu trang (Bookmark) người dùng đã chủ động thêm vào",
        "Địa chỉ IP của nhà mạng",
        "Tệp tin mà người dùng đã chủ động tải về máy",
        "Lịch sử duyệt web, các tệp cookie và thông tin biểu mẫu đã nhập"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 68): Chế độ ẩn danh xóa sạch lịch sử truy cập, cookie và dữ liệu tạm ngay khi đóng cửa sổ trình duyệt.",
      "hint": "Không lưu lịch sử, cookie và dữ liệu biểu mẫu trên máy."
    },
    {
      "id": "tin9-b14-mc4",
      "type": "multiple_choice",
      "question": "Khi nghi ngờ máy tính bị nhiễm virus hoặc phần mềm độc hại, thao tác đầu tiên cần làm ngay là gì?",
      "options": [
        "Ngắt kết nối mạng Internet (rút dây mạng hoặc tắt Wi-Fi) và tiến hành quét toàn bộ máy bằng phần mềm diệt virus",
        "Khởi động lại máy tính liên tục 10 lần",
        "Tiếp tục mở các tệp tin lạ để kiểm tra",
        "Gõ mật khẩu ngân hàng thử xem còn dùng được không"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 67): Ngắt kết nối mạng ngay lập tức để cô lập mã độc, ngăn chặn nó phát tán hoặc gửi dữ liệu đánh cắp ra ngoài.",
      "hint": "Ngắt kết nối mạng Internet để cô lập mã độc."
    },
    {
      "id": "tin9-b14-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các thao tác thực hành bảo mật thông tin máy tính:",
      "options": [
        "a) Nên sử dụng tính năng khóa màn hình tự động (Screen Lock) có mật khẩu khi rời khỏi máy tính",
        "b) Có thể dùng chung một mật khẩu duy nhất cho tất cả các tài khoản mạng xã hội và ngân hàng để đỡ quên",
        "c) Phần mềm quản lí mật khẩu (Password Manager) giúp tạo và lưu trữ mật khẩu phức tạp an toàn",
        "d) Cập nhật hệ điều hành Windows định kì giúp vá các lỗ hổng bảo mật nguy hiểm"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Dùng chung một mật khẩu cho mọi tài khoản là sai lầm chết người: nếu một tài khoản bị lộ thì toàn bộ hệ sinh thái sẽ bị xâm nhập.",
      "hint": "Không bao giờ dùng chung một mật khẩu cho nhiều tài khoản."
    },
    {
      "id": "tin9-b14-fb1",
      "type": "fill_blank",
      "question": "Để bảo vệ máy tính khi tạm thời rời vị trí, ta nhấn tổ hợp phím [1] để khóa màn hình ngay lập tức, còn để sao lưu dữ liệu ta dùng dịch vụ lưu trữ [2].",
      "blankAnswers": [
        "Windows + L",
        "đám mây"
      ],
      "wordBank": [
        "Windows + L",
        "đám mây",
        "Ctrl + C",
        "thùng rác",
        "Alt + F4",
        "màn hình ngoài"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 67): Phím tắt Windows + L (Lock) khóa màn hình nhanh; lưu trữ đám mây giúp sao lưu dữ liệu an toàn.",
      "hint": "Windows + L để khóa máy (Lock) và lưu trữ đám mây."
    },
    {
      "id": "tin9-b14-m1",
      "type": "matching",
      "question": "Nối thao tác bảo mật ở cột bên trái với mục đích bảo vệ tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Bật xác thực hai yếu tố (2FA)"
        },
        {
          "id": "2",
          "text": "Duyệt web ở chế độ ẩn danh (Incognito)"
        },
        {
          "id": "3",
          "text": "Sao lưu dự phòng 3-2-1"
        },
        {
          "id": "4",
          "text": "Cập nhật bản vá hệ điều hành (Windows Update)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Khắc phục các lỗ hổng bảo mật mà tin tặc có thể khai thác"
        },
        {
          "id": "b",
          "text": "Chống mất mát dữ liệu vĩnh viễn khi phần cứng gặp sự cố bất ngờ"
        },
        {
          "id": "c",
          "text": "Không lưu dấu vết lịch sử duyệt web trên máy tính công cộng"
        },
        {
          "id": "d",
          "text": "Ngăn kẻ xấu đăng nhập ngay cả khi bị lộ mật khẩu"
        }
      ],
      "correctMatches": {
        "1": "d",
        "2": "c",
        "3": "b",
        "4": "a"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 66-68): Các biện pháp thực hành bảo mật thông tin toàn diện cho người dùng.",
      "hint": "Nối thao tác an ninh với mục tiêu bảo vệ tương ứng."
    },
    {
      "id": "tin9-b14-mc5",
      "type": "multiple_choice",
      "question": "Ứng dụng tạo mã OTP xác thực hai yếu tố phổ biến trên điện thoại thông minh hiện nay là gì?",
      "options": [
        "YouTube",
        "TikTok",
        "Google Authenticator hoặc Microsoft Authenticator",
        "Flappy Bird"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 66): Google Authenticator và Microsoft Authenticator là các ứng dụng tạo mã OTP 6 số bảo mật đổi mới mỗi 30 giây.",
      "hint": "Ứng dụng Authenticator tạo mã xác thực 2 bước."
    },
    {
      "id": "tin9-b14-mc6",
      "type": "multiple_choice",
      "question": "Khi cắm ổ đĩa USB của người khác vào máy tính của mình, thao tác an toàn nhất cần làm trước khi mở tệp là gì?",
      "options": [
        "Nhấp chuột phải vào biểu tượng ổ đĩa USB và chọn lệnh quét virus (Scan with antivirus)",
        "Mở nhanh tất cả các tệp có trong USB",
        "Định dạng (Format) xóa sạch ổ USB của người ta ngay",
        "Rút mạnh USB ra khỏi cổng cắm"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 67): Quét virus trước khi mở giúp ngăn chặn virus lây lan từ USB vào máy tính qua chế độ tự chạy (Autorun).",
      "hint": "Quét virus ổ USB trước khi mở tệp."
    },
    {
      "id": "tin9-b14-mc7",
      "type": "multiple_choice",
      "question": "Khi xóa một tài liệu chứa thông tin bí mật cá nhân khỏi máy tính, việc chỉ nhấn phím Delete thông thường có an toàn tuyệt đối không? Vì sao?",
      "options": [
        "Hoàn toàn an toàn tuyệt đối 100%",
        "Delete làm tài liệu biến mất khỏi thế giới vĩnh viễn",
        "Xóa xong thì máy tính sẽ tự động hỏng",
        "Chưa an toàn tuyệt đối, vì tệp tin vẫn nằm trong thùng rác (Recycle Bin) và người khác có thể khôi phục lại dễ dàng"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 68): Nhấn Delete chỉ chuyển tệp vào Recycle Bin. Cần xóa vĩnh viễn (Shift + Delete) và làm rỗng thùng rác (Empty Recycle Bin).",
      "hint": "Tệp vẫn còn trong thùng rác Recycle Bin nếu chỉ nhấn Delete."
    },
    {
      "id": "tin9-b14-mc8",
      "type": "multiple_choice",
      "question": "Thao tác BẬT TÍNH NĂNG XÁC THỰC 2 BƯỚC (2-Step Verification) cho tài khoản Google / Gmail cá nhân được thực hiện ở đâu?",
      "options": [
        "Quản lí Tài khoản Google -> Thẻ Bảo mật (Security) -> Bật Xác minh 2 bước",
        "Cài đặt hình nền điện thoại",
        "Trong thư mục Spam",
        "Trong ứng dụng Máy tính Calculator"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 58): Thẻ Bảo mật trong trang quản trị tài khoản quản lí tất cả thiết bị và cơ chế bảo vệ.",
      "hint": "Tài khoản Google -> Bảo mật (Security) -> Xác minh 2 bước."
    },
    {
      "id": "tin9-b14-mc9",
      "type": "multiple_choice",
      "question": "Tại sao người dùng nên định kì 'Đăng xuất khỏi tất cả các thiết bị khác' (Sign out of all other sessions) trong cài đặt bảo mật tài khoản?",
      "options": [
        "Để đảm bảo tài khoản không còn bị đăng nhập trên các máy tính công cộng, quán net hoặc điện thoại cũ lỡ bị thất lạc",
        "Để xóa vĩnh viễn tài khoản",
        "Để giải phóng bộ nhớ RAM",
        "Để máy tính tải nhanh hơn"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Ngắt các phiên đăng nhập lạ giúp cô lập tài khoản và chấm dứt các nguy cơ truy cập trái phép.",
      "hint": "Chấm dứt các phiên đăng nhập cũ trên máy lạ hoặc máy công cộng."
    },
    {
      "id": "tin9-b14-mc10",
      "type": "multiple_choice",
      "question": "Kĩ năng kiểm tra xem một đường link có phải là trang lừa đảo (Phishing) trước khi bấm vào trên máy tính là gì?",
      "options": [
        "Rê chuột (Hover) lên trên liên kết mà KHÔNG nhấp, quan sát địa chỉ URL thật hiển thị ở góc dưới màn hình xem có sai lệch tên miền không (ví dụ: g00gle.com thay vì google.com)",
        "Bấm vào liên kết thật nhanh 10 lần",
        "Tắt màn hình",
        "Chụp ảnh màn hình"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Rê chuột soi địa chỉ URL đích (Preview URL) là phản xạ bảo mật kinh điển nhận diện website mạo danh.",
      "hint": "Rê chuột quan sát đường link URL thật ở góc dưới màn hình."
    },
    {
      "id": "tin9-b14-mc11",
      "type": "multiple_choice",
      "question": "Tính năng 'Quản lí mật khẩu' (Password Manager) của trình duyệt hoặc các ứng dụng chuyên dụng (Bitwarden, 1Password) mang lại lợi ích gì?",
      "options": [
        "Tạo mật khẩu cực mạnh ngẫu nhiên, lưu trữ mã hóa an toàn và tự động điền mật khẩu mà người dùng không cần phải ghi nhớ hàng chục mật khẩu phức tạp",
        "Công khai mật khẩu lên mạng",
        "Chia sẻ mật khẩu cho mọi người xem",
        "Xóa toàn bộ mật khẩu sau 1 ngày"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Trình quản lí mật khẩu giải quyết bài toán đặt mật khẩu phức tạp duy nhất cho mỗi trang web mà không lo quên.",
      "hint": "Tạo mật khẩu mạnh ngẫu nhiên và lưu trữ mã hóa an toàn."
    },
    {
      "id": "tin9-b14-mc12",
      "type": "multiple_choice",
      "question": "Hành vi quét toàn bộ máy tính bằng phần mềm diệt virus định kì hàng tuần có tác dụng gì?",
      "options": [
        "Kịp thời phát hiện, cách li hoặc tiêu diệt các tệp tin chứa mã độc, sâu máy tính ẩn nấp trước khi chúng phát tán gây hại",
        "Làm mát phần cứng máy tính",
        "Tăng tốc độ gõ bàn phím",
        "Đổi giao diện màn hình"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Quét virus định kì giúp thanh lọc hệ thống và bảo vệ toàn vẹn tài nguyên dữ liệu.",
      "hint": "Kịp thời phát hiện và tiêu diệt mã độc ẩn nấp trong hệ thống."
    },
    {
      "id": "tin9-b14-mc13",
      "type": "multiple_choice",
      "question": "Khi nhận được một thông báo: 'Điện thoại của bạn bị nhiễm 13 con virus! Bấm vào đây để tải phần mềm diệt ngay!', em nên làm gì?",
      "options": [
        "Đóng ngay tab trang web đó lại và tuyệt đối KHÔNG bấm vào đường link cảnh báo giả đó (đó là chiêu trò quảng cáo lừa đảo cài mã độc Scareware)",
        "Lập tức bấm tải về ngay",
        "Chuyển tiếp cho các bạn trong lớp",
        "Ném điện thoại đi"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Đó là Scareware (phần mềm hù dọa); trình duyệt web không thể tự quét virus trên thiết bị.",
      "hint": "Đóng tab trang web ngay, đó là quảng cáo lừa đảo Scareware."
    },
    {
      "id": "tin9-b14-mc14",
      "type": "multiple_choice",
      "question": "Quy tắc sao lưu dữ liệu '3-2-1' khuyên người sử dụng thực hiện sao lưu như thế nào?",
      "options": [
        "Lưu ít nhất 3 bản sao dữ liệu, trên 2 loại phương tiện lưu trữ khác nhau, và có ít nhất 1 bản sao lưu ở nơi khác (như đám mây hoặc ổ cứng ngoài để nơi khác)",
        "Sao lưu 3 lần trong 1 ngày",
        "Chỉ giữ 1 bản sao duy nhất trong thùng rác",
        "Sao lưu vào 3 chiếc đĩa mềm"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "Chiến lược 3-2-1 là tiêu chuẩn vàng sao lưu dữ liệu toàn cầu phòng ngừa mọi thảm họa ổ cứng.",
      "hint": "3 bản sao, trên 2 loại thiết bị, 1 bản lưu trên đám mây hoặc nơi khác."
    },
    {
      "id": "tin9-b14-mc15",
      "type": "multiple_choice",
      "question": "Tại sao việc 'Cập nhật hệ điều hành và ứng dụng lên phiên bản mới nhất' (Update) là biện pháp bảo mật cốt lõi?",
      "options": [
        "Vì các bản cập nhật mới liên tục vá các lỗ hổng bảo mật vừa được phát hiện, ngăn chặn hacker lợi dụng để xâm nhập",
        "Để làm đầy bộ nhớ máy tính",
        "Để đổi màu các biểu tượng ứng dụng",
        "Chỉ để máy tính tốn thêm pin"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Phần mềm không update là miếng mồi ngon cho hacker khai thác các lỗ hổng đã được công bố.",
      "hint": "Vá các lỗ hổng bảo mật và ngăn chặn nguy cơ xâm nhập."
    }
  ],
  "tin9-bai-15": [
    {
      "id": "g9-b15-de-1",
      "question": "Nghề nào sau đây là nghề chuyên nghiệp trong lĩnh vực Công nghệ thông tin?",
      "options": [
        "Lái xe buýt truyền thống",
        "Kĩ sư phát triển phần mềm, Chuyên gia an ninh mạng, Chuyên viên phân tích dữ liệu AI",
        "Nhân viên bán hoa quả",
        "Thợ may trang phục thủ công"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 67): Lập trình viên, chuyên gia bảo mật, kỹ sư trí tuệ nhân tạo là các nghề ICT trọng điểm.",
      "hint": "Phát triển phần mềm, an ninh mạng, dữ liệu AI."
    },
    {
      "id": "g9-b15-tb-1",
      "question": "Để chuẩn bị tốt cho các nghề nghiệp trong tương lai ở kỷ nguyên trí tuệ nhân tạo (AI), học sinh THCS cần rèn luyện năng lực nào?",
      "options": [
        "Chỉ cần học thuộc lòng sách giáo khoa",
        "Không cần học gì vì AI sẽ làm thay hết",
        "Chỉ chơi game cả ngày",
        "Tư duy logic, tư duy giải quyết vấn đề, khả năng tự học công nghệ mới và kỹ năng làm việc nhóm sáng tạo"
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Kỷ nguyên AI đòi hỏi khả năng tư duy giải quyết vấn đề thực tế, khả năng thích ứng linh hoạt và sáng tạo không ngừng.",
      "hint": "Tư duy logic, tự học và sáng tạo thích ứng."
    },
    {
      "id": "g9-b15-kho-1",
      "question": "Xu hướng ứng dụng Tin học và Trí tuệ nhân tạo trong các ngành nghề truyền thống (nông nghiệp, may mặc, vận tải) mang lại lợi ích gì lớn nhất?",
      "options": [
        "Làm cho các sản phẩm trở nên đắt đỏ không ai mua được",
        "Tự động hóa dây chuyền, giảm chi phí, tăng năng suất lao động và tạo ra các sản phẩm chất lượng cao, bền vững",
        "Không đem lại lợi ích gì",
        "Làm mất đi toàn bộ cây trồng vật nuôi"
      ],
      "correctAnswer": 1,
      "difficulty": "kho",
      "explanation": "Chuyển đổi số trong mọi ngành nghề giúp tối ưu hóa chuỗi cung ứng, tự động hóa và nâng cao năng suất đột phá.",
      "hint": "Tự động hóa, tăng năng suất và chất lượng sản phẩm."
    },
    {
      "id": "tin9-b15-mc1",
      "type": "multiple_choice",
      "question": "Trong kỷ nguyên số hóa và trí tuệ nhân tạo (AI), nhóm ngành nghề nào sau đây đang có nhu cầu nhân lực phát triển mạnh mẽ nhất?",
      "options": [
        "Khoa học máy tính, Trí tuệ nhân tạo (AI), Kĩ sư dữ liệu và An ninh mạng",
        "Nghề chép sách tay bằng bút mực",
        "Các công việc thủ công lặp đi lặp lại không đòi hỏi chuyên môn",
        "Nghề thu cước thủ công bằng vé giấy"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 70): Nhóm ngành công nghệ cao như AI, Khoa học dữ liệu, An ninh mạng là trụ cột của cuộc cách mạng công nghiệp lần thứ tư.",
      "hint": "Trí tuệ nhân tạo (AI), khoa học dữ liệu và an toàn thông tin."
    },
    {
      "id": "tin9-b15-mc2",
      "type": "multiple_choice",
      "question": "Vai trò chính của một \"Chuyên gia phân tích dữ liệu\" (Data Analyst) trong doanh nghiệp là gì?",
      "options": [
        "Cài đặt lại Windows cho nhân viên trong công ty",
        "Lắp ráp các linh kiện màn hình máy tính trong nhà máy",
        "Thu thập, xử lí và trực quan hóa số liệu kinh doanh để giúp ban giám đốc đưa ra các chiến lược chính xác",
        "Trực tiếp đi giao hàng tận nhà cho khách"
      ],
      "correctAnswer": 2,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 71): Nhà phân tích dữ liệu biến số liệu thô thành các báo cáo xu hướng có giá trị định hướng kinh doanh.",
      "hint": "Phân tích số liệu và hỗ trợ ra quyết định chiến lược."
    },
    {
      "id": "tin9-b15-mc3",
      "type": "multiple_choice",
      "question": "Để theo đuổi các ngành nghề thuộc lĩnh vực Công nghệ thông tin, học sinh cần chuẩn bị tốt các môn học nền tảng nào ngay từ bậc phổ thông?",
      "options": [
        "Môn Toán học, môn Tin học và Ngoại ngữ (tiếng Anh)",
        "Chỉ cần học thuộc bảng cửu chương",
        "Môn Âm nhạc và Mĩ thuật",
        "Không cần học môn nào cả"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 72): Toán học rèn luyện tư duy logic thuật toán, Tin học cung cấp kiến thức nền tảng và tiếng Anh giúp đọc hiểu tài liệu công nghệ quốc tế.",
      "hint": "Toán học, Tin học và tiếng Anh."
    },
    {
      "id": "tin9-b15-mc4",
      "type": "multiple_choice",
      "question": "Nghề \"Kĩ sư an ninh mạng\" (Cybersecurity Engineer) có nhiệm vụ quan trọng nhất là gì?",
      "options": [
        "Tìm cách hack tài khoản Facebook của người khác",
        "Viết virus phát tán lên mạng",
        "Bán máy tính dạo ngoài chợ",
        "Thiết kế, xây dựng các hàng rào phòng thủ bảo vệ hệ thống mạng và dữ liệu của tổ chức trước sự tấn công của tin tặc"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 71): Kĩ sư an ninh mạng là \"lá chắn số\" bảo vệ hạ tầng công nghệ và dữ liệu bí mật trước tội phạm mạng.",
      "hint": "Bảo vệ hệ thống và dữ liệu chống lại sự xâm nhập của tin tặc."
    },
    {
      "id": "tin9-b15-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các nhận định về định hướng nghề nghiệp trong kỷ nguyên số:",
      "options": [
        "a) Công nghệ thông tin chỉ dành riêng cho những người muốn trở thành lập trình viên chuyên nghiệp",
        "b) Kĩ năng số (Digital skills) là yêu cầu thiết yếu trong hầu hết mọi ngành nghề: y tế, giáo dục, nông nghiệp, kinh doanh",
        "c) Năng lực tự học suốt đời là yếu tố sống còn vì công nghệ luôn thay đổi và cập nhật liên tục mỗi ngày",
        "d) Trí tuệ nhân tạo có thể thay thế hoàn toàn cảm xúc, sự đồng cảm và óc sáng tạo tinh tế của con người"
      ],
      "trueFalseAnswers": [
        false,
        true,
        true,
        false
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: AI là công cụ hỗ trợ, không thể thay thế năng lực thấu cảm và sáng tạo nhân văn của con người; kĩ năng số cần cho mọi ngành nghề.",
      "hint": "Kĩ năng số cần cho mọi ngành nghề, AI không thay thế được sự đồng cảm con người."
    },
    {
      "id": "tin9-b15-fb1",
      "type": "fill_blank",
      "question": "Trong thị trường lao động số, người lao động cần sở hữu [1] vững vàng về chuyên môn kết hợp với các [2] như làm việc nhóm, giao tiếp và tư duy phản biện.",
      "blankAnswers": [
        "kĩ năng cứng (chuyên môn)",
        "kĩ năng mềm"
      ],
      "wordBank": [
        "kĩ năng cứng (chuyên môn)",
        "kĩ năng mềm",
        "máy tính đắt tiền",
        "bằng lái xe",
        "trí nhớ vẹt",
        "ngoại hình"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 72): Sự kết hợp giữa kĩ năng cứng (chuyên môn công nghệ) và kĩ năng mềm (giao tiếp, làm việc nhóm) tạo nên thành công.",
      "hint": "Kĩ năng cứng chuyên môn kết hợp kĩ năng mềm."
    },
    {
      "id": "tin9-b15-m1",
      "type": "matching",
      "question": "Nối vị trí nghề nghiệp công nghệ ở cột bên trái với sản phẩm đầu ra đặc trưng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Lập trình viên ứng dụng di động (Mobile App Developer)"
        },
        {
          "id": "2",
          "text": "Kĩ sư thiết kế vi mạch (Chip Designer)"
        },
        {
          "id": "3",
          "text": "Nhà phát triển trí tuệ nhân tạo (AI Engineer)"
        },
        {
          "id": "4",
          "text": "Chuyên viên quản trị cơ sở dữ liệu (Database Admin)"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Hệ thống mô hình học máy nhận dạng giọng nói, thị giác máy tính"
        },
        {
          "id": "b",
          "text": "Ứng dụng chạy trên hệ điều hành Android hoặc iOS cho người dùng di động"
        },
        {
          "id": "c",
          "text": "Bản vẽ thiết kế và kiến trúc bộ vi xử lí bán dẫn nano siêu nhỏ"
        },
        {
          "id": "d",
          "text": "Hệ thống kho dữ liệu an toàn, không bị nghẽn và truy vấn tốc độ cao"
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
      "explanation": "SGK Tin học 9 KNTT (Trang 71, 72): Các chuyên ngành công nghệ cao và sản phẩm đặc trưng.",
      "hint": "Nối chức danh công việc với sản phẩm công nghệ cụ thể."
    },
    {
      "id": "tin9-b15-mc5",
      "type": "multiple_choice",
      "question": "Hình thức làm việc từ xa (Remote Work / Freelancing) nhờ vào mạng Internet mang lại lợi ích gì cho các chuyên gia công nghệ?",
      "options": [
        "Không bao giờ phải làm bất kì công việc gì",
        "Có thể làm việc cho các công ty lớn ở khắp nơi trên thế giới ngay tại nhà của mình",
        "Không cần máy tính vẫn làm việc được",
        "Được nhận lương mà không cần nộp sản phẩm"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 72): Không gian số xóa nhòa khoảng cách địa lí, cho phép kĩ sư Việt Nam tham gia các dự án toàn cầu ngay tại nhà.",
      "hint": "Làm việc linh hoạt cho các dự án toàn cầu từ xa."
    },
    {
      "id": "tin9-b15-mc6",
      "type": "multiple_choice",
      "question": "Yếu tố nào sau đây là quan trọng nhất để duy trì năng lực cạnh tranh của một người làm việc trong ngành công nghệ thông tin?",
      "options": [
        "Chỉ hài lòng với kiến thức đã học ở trường và không đọc thêm gì nữa",
        "Mua máy tính đắt tiền nhất mỗi năm",
        "Tinh thần tự học, liên tục cập nhật công nghệ và ngôn ngữ lập trình mới",
        "Chỉ làm việc một mình không giao lưu với ai"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 73): Công nghệ phát triển theo cấp số nhân; ngừng học hỏi là tự đào thải khỏi thị trường công nghệ.",
      "hint": "Tinh thần tự học và liên tục cập nhật công nghệ mới."
    },
    {
      "id": "tin9-b15-mc7",
      "type": "multiple_choice",
      "question": "Nghề \"Kiểm thử phần mềm\" (Software Tester / QA) đóng vai trò gì trong quy trình sản xuất phần mềm?",
      "options": [
        "Đi bán đĩa cài phần mềm ở các cửa hàng",
        "Chạy thử nghiệm phần mềm với các trường hợp dữ liệu khác nhau để tìm ra lỗi (Bug) trước khi bàn giao cho người dùng",
        "Viết toàn bộ mã nguồn của phần mềm từ đầu đến cuối",
        "Sửa chữa phần cứng máy tính bị hỏng"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 71): Tester là \"người gác cổng chất lượng\", kiểm thử tỉ mỉ nhằm phát hiện lỗi để lập trình viên sửa trước khi phát hành.",
      "hint": "Tìm lỗi (bug) để đảm bảo chất lượng phần mềm trước khi phát hành."
    },
    {
      "id": "tin9-b15-mc8",
      "type": "multiple_choice",
      "question": "Trong bối cảnh Trí tuệ nhân tạo (AI) và tự động hóa phát triển thần tốc, xu hướng việc làm trong tương lai sẽ thay đổi như thế nào?",
      "options": [
        "Các công việc lặp đi lặp lại đơn giản sẽ dần được máy móc thay thế, trong khi nhu cầu về các vị trí đòi hỏi tư duy sáng tạo, năng lực công nghệ và kĩ năng xã hội sẽ tăng vọt",
        "Tất cả mọi người sẽ thất nghiệp hoàn toàn",
        "Không có bất kì sự thay đổi nào so với thế kỉ 19",
        "Chỉ có các robot mới được phép đi làm"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 62): AI định hình lại thị trường lao động, chuyển dịch mạnh mẽ sang nền kinh tế sáng tạo và công nghệ.",
      "hint": "Máy móc thay thế việc lặp lại, gia tăng việc làm đòi hỏi sáng tạo và công nghệ."
    },
    {
      "id": "tin9-b15-mc9",
      "type": "multiple_choice",
      "question": "Nghề 'Kĩ sư Trí tuệ nhân tạo' (AI Engineer / Machine Learning Specialist) làm công việc gì?",
      "options": [
        "Nghiên cứu, huấn luyện các mô hình học máy (Machine Learning) và phát triển các thuật toán giúp máy tính có khả năng tự học, suy luận và nhận thức thông minh",
        "Lắp ráp vỏ máy vi tính ở nhà máy",
        "Bán chuột máy tính trên mạng",
        "Dọn vệ sinh phòng thí nghiệm"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Kĩ sư AI xây dựng các giải pháp thông minh tự động hóa phân tích dữ liệu, nhận diện hình ảnh và tiếng nói.",
      "hint": "Huấn luyện mô hình học máy và phát triển thuật toán AI thông minh."
    },
    {
      "id": "tin9-b15-mc10",
      "type": "multiple_choice",
      "question": "Nghề 'Thiết kế giao diện và trải nghiệm người dùng' (UI/UX Designer) phụ trách công việc gì?",
      "options": [
        "Thiết kế hình ảnh giao diện đẹp mắt (UI) và nghiên cứu hành vi để người dùng thao tác trên ứng dụng/website một cách thuận tiện, dễ chịu nhất (UX)",
        "Sửa chữa đường dây điện",
        "Lập bảng tính lương nhân viên",
        "Gõ văn bản hành chính"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "UI (User Interface) tạo vẻ đẹp thẩm mỹ; UX (User Experience) tối ưu hóa sự mượt mà và cảm xúc người dùng.",
      "hint": "Thiết kế giao diện đẹp (UI) và tối ưu trải nghiệm thuận tiện (UX)."
    },
    {
      "id": "tin9-b15-mc11",
      "type": "multiple_choice",
      "question": "Khái niệm 'Kĩ năng mềm' (Soft Skills) bổ trợ cho dân công nghệ thông tin gồm những kĩ năng nào?",
      "options": [
        "Kĩ năng giao tiếp thuyết trình, kĩ năng làm việc nhóm (Teamwork), kĩ năng quản lí thời gian và giải quyết xung đột",
        "Chỉ là khả năng gõ phím nhanh bằng 10 ngón",
        "Khả năng nhịn ăn lâu",
        "Khả năng thức đêm chơi game"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Chuyên môn kĩ thuật giỏi kết hợp kĩ năng mềm vượt trội tạo nên nhà lãnh đạo công nghệ thành công.",
      "hint": "Giao tiếp, làm việc nhóm, quản lí thời gian và tư duy phản biện."
    },
    {
      "id": "tin9-b15-mc12",
      "type": "multiple_choice",
      "question": "Khái niệm 'Học tập suốt đời' (Lifelong Learning) có ý nghĩa sống còn như thế nào đối với người làm trong ngành Công nghệ thông tin?",
      "options": [
        "Vì công nghệ số thay đổi và đào thải liên tục từng ngày; nếu không chủ động tự học và cập nhật kiến thức mới thì sẽ nhanh chóng bị tụt hậu",
        "Để tích lũy càng nhiều bằng khen càng tốt",
        "Để thi đỗ đại học một lần duy nhất",
        "Không có ý nghĩa gì đặc biệt"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Chu kì công nghệ tính bằng tháng đòi hỏi tinh thần tự học bền bỉ suốt cả cuộc đời.",
      "hint": "Công nghệ thay đổi liên tục, cần tự học thường xuyên để không bị tụt hậu."
    },
    {
      "id": "tin9-b15-mc13",
      "type": "multiple_choice",
      "question": "Nghề 'Chuyên viên kiểm thử phần mềm' (Tester / QA Engineer) có nhiệm vụ gì trước khi phần mềm được bàn giao cho khách hàng?",
      "options": [
        "Chạy thử các kịch bản sử dụng để tìm kiếm tất cả các lỗi tiềm ẩn (bugs) và đảm bảo phần mềm hoạt động trơn tru, đúng thiết kế",
        "Viết hợp đồng mua bán",
        "Đóng gói đĩa cài đặt vào hộp",
        "Tính toán tiền thuế thu nhập"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tester là người gác cổng chất lượng sản phẩm công nghệ trước khi ra mắt thị trường.",
      "hint": "Tìm kiếm các lỗi tiềm ẩn (bugs) và đảm bảo chất lượng phần mềm."
    },
    {
      "id": "tin9-b15-mc14",
      "type": "multiple_choice",
      "question": "Lợi thế vượt trội của việc học giỏi ngoại ngữ (đặc biệt là Tiếng Anh) đối với học sinh yêu thích ngành Tin học là gì?",
      "options": [
        "Dễ dàng tiếp cận các tài liệu chuyên ngành mới nhất, học các khóa học quốc tế trực tuyến và tham gia cộng đồng lập trình viên toàn cầu",
        "Để đi du lịch nước ngoài",
        "Để xem phim không cần phụ đề",
        "Chỉ để đạt điểm cao trên lớp"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Tiếng Anh là ngôn ngữ mẹ đẻ của khoa học máy tính; nắm vững tiếng Anh mở toang cánh cửa tri thức quốc tế.",
      "hint": "Tiếp cận kho học liệu quốc tế và giao lưu cộng đồng công nghệ toàn cầu."
    },
    {
      "id": "tin9-b15-mc15",
      "type": "multiple_choice",
      "question": "Hoạt động nào ngay từ cấp THCS giúp học sinh khám phá và nuôi dưỡng đam mê nghề nghiệp công nghệ?",
      "options": [
        "Tham gia các câu lạc bộ Tin học, Robotics, STEM, thử sức lập trình các dự án nhỏ có ích cho cuộc sống và tham dự các kì thi sáng tạo khoa học kĩ thuật",
        "Chơi game thâu đêm suốt sáng",
        "Ngồi xem video giải trí trên mạng cả ngày",
        "Không làm gì cả đợi lớn lên tự biết"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Thực hành dự án STEM và sáng chế công nghệ từ sớm giúp định hình ước mơ và năng khiếu.",
      "hint": "Tham gia CLB Tin học, Robotics, STEM và sáng tạo dự án công nghệ."
    }
  ],
  "tin9-bai-16": [
    {
      "id": "g9-b16-de-1",
      "question": "Trong dự án \"Khởi nghiệp cùng công nghệ số\", bước đầu tiên và quan trọng nhất để xây dựng một sản phẩm số thành công là gì?",
      "options": [
        "Bán sản phẩm với giá thật đắt.",
        "In tờ rơi quảng cáo khi chưa có sản phẩm.",
        "Xác định vấn đề thực tế của khách hàng/người dùng và khảo sát nhu cầu thị trường.",
        "Chi thật nhiều tiền thuê văn phòng lớn."
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 72): Khởi nghiệp số bắt nguồn từ việc phát hiện nhu cầu chưa được đáp ứng và dùng công nghệ giải quyết hiệu quả.",
      "hint": "Xác định vấn đề thực tế và nhu cầu người dùng."
    },
    {
      "id": "g9-b16-tb-1",
      "question": "Công cụ kỹ thuật số nào giúp dự án khởi nghiệp tiếp cận khách hàng tiềm năng với chi phí tiết kiệm nhất?",
      "options": [
        "Nhắn tin làm phiền (spam) số điện thoại của người lạ.",
        "Mua biển quảng cáo ngoài trời đắt đỏ hàng tỷ đồng.",
        "Chỉ dùng thư tay gửi qua bưu điện.",
        "Xây dựng trang web giới thiệu, Fanpage mạng xã hội và kênh video ngắn sáng tạo (TikTok, YouTube Shorts)."
      ],
      "correctAnswer": 3,
      "difficulty": "trung_binh",
      "explanation": "Marketing số (Digital Marketing) qua website và mạng xã hội là kênh truyền thông có chi phí tối ưu cho các dự án khởi nghiệp trẻ.",
      "hint": "Trang web, mạng xã hội và video ngắn."
    },
    {
      "id": "tin9-b16-mc1",
      "type": "multiple_choice",
      "question": "Mục tiêu chính của Dự án \"Khởi nghiệp cùng công nghệ số\" trong chương trình Tin học 9 là gì?",
      "options": [
        "Vận dụng tổng hợp các kiến thức tin học đã học để xây dựng ý tưởng kinh doanh số, quản lí tài chính và quảng bá sản phẩm",
        "Học cách chơi chứng khoán trên mạng",
        "Vay tiền ngân hàng để mở công ty thật ngay lập tức",
        "Lập trình trò chơi điện tử để kiếm hàng triệu đô la"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 75): Dự án rèn luyện tư duy khởi nghiệp đổi mới sáng tạo, ứng dụng công cụ số (văn bản, bảng tính, bài trình chiếu) giải quyết bài toán thực tiễn.",
      "hint": "Vận dụng tổng hợp kiến thức tin học giải quyết bài toán khởi nghiệp thực tế."
    },
    {
      "id": "tin9-b16-mc2",
      "type": "multiple_choice",
      "question": "Khi lập kế hoạch kinh doanh số, công cụ phần mềm nào thích hợp nhất để tính toán chi phí vốn, giá thành sản phẩm và dự báo điểm hòa vốn?",
      "options": [
        "Phần mềm vẽ Paint",
        "Trình xem ảnh Windows Photos",
        "Phần mềm bảng tính điện tử (Microsoft Excel / Google Sheets)",
        "Phần mềm nghe nhạc Spotify"
      ],
      "correctAnswer": 2,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 76): Bảng tính Excel cho phép lập mô hình tài chính với các công thức tự động (SUM, IF, SUMIF) tính toán chi phí chính xác.",
      "hint": "Bảng tính Excel hoặc Google Sheets để tính toán tài chính."
    },
    {
      "id": "tin9-b16-mc3",
      "type": "multiple_choice",
      "question": "Để giới thiệu ý tưởng khởi nghiệp đến các nhà đầu tư (hoặc thầy cô và bạn bè), nhóm dự án cần chuẩn bị phương tiện nào quan trọng nhất?",
      "options": [
        "Một bài thuyết trình (Pitch Deck) cô đọng, cuốn hút và bài bản bằng PowerPoint hoặc Canva",
        "Một đoạn tin nhắn Zalo",
        "Một bức vẽ tay trên giấy nháp",
        "Một cuộc gọi điện thoại kéo dài 3 tiếng"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 77): Bài trình chiếu Pitch Deck trực quan, cô đọng (từ 10-12 slide) là phương tiện thuyết phục người nghe chuẩn quốc tế.",
      "hint": "Bài trình chiếu Pitch Deck chuyên nghiệp trên PowerPoint/Canva."
    },
    {
      "id": "tin9-b16-mc4",
      "type": "multiple_choice",
      "question": "Kênh tiếp thị và bán hàng số nào sau đây giúp dự án khởi nghiệp tiếp cận khách hàng tiềm năng với chi phí ban đầu thấp nhất?",
      "options": [
        "In 1 triệu tờ rơi phát ngoài ngã tư",
        "Thuê quảng cáo trên khung giờ vàng truyền hình quốc gia",
        "Thuê biển quảng cáo pano tấm lớn ngoài ngã tư đường cao tốc",
        "Trang mạng xã hội (Facebook, TikTok, Instagram) và sàn thương mại điện tử"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 76): Tiếp thị số (Digital Marketing) qua mạng xã hội và thương mại điện tử giúp tối ưu hóa chi phí quảng bá cho các dự án nhỏ.",
      "hint": "Mạng xã hội và sàn thương mại điện tử chi phí thấp."
    },
    {
      "id": "tin9-b16-tf1",
      "type": "true_false",
      "question": "Xác định tính Đúng / Sai của các bước thực hiện một dự án khởi nghiệp công nghệ số học đường:",
      "options": [
        "a) Cần khảo sát nhu cầu thị trường thực tế bằng Google Forms trước khi bắt tay vào sản xuất",
        "b) Kế hoạch kinh doanh khởi nghiệp không cần quan tâm đến vấn đề thu hồi vốn và rủi ro",
        "c) Thiết kế logo, bộ nhận diện thương hiệu và áp phích quảng cáo bằng phần mềm đồ họa (Canva, GIMP)",
        "d) Phân công công việc rõ ràng cho từng thành viên theo đúng năng lực sở trường"
      ],
      "trueFalseAnswers": [
        true,
        false,
        true,
        true
      ],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT: Quản trị rủi ro và bài toán hoàn vốn là yếu tố sống còn của một dự án khởi nghiệp; không thể bỏ qua.",
      "hint": "Quản trị rủi ro và tính toán vốn là điều bắt buộc phải có."
    },
    {
      "id": "tin9-b16-fb1",
      "type": "fill_blank",
      "question": "Trong dự án khởi nghiệp, nhóm sử dụng [1] để khảo sát nhu cầu khách hàng, dùng [2] để lập bảng dự toán thu chi và dùng PowerPoint để thuyết trình ý tưởng.",
      "blankAnswers": [
        "Google Forms",
        "Excel (bảng tính)"
      ],
      "wordBank": [
        "Google Forms",
        "Excel (bảng tính)",
        "máy in kim",
        "máy fax",
        "bàn tính gảy",
        "mã QR"
      ],
      "options": [],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 75, 76): Ứng dụng chuỗi công cụ số hoàn chỉnh: Google Forms (khảo sát) -> Excel (tài chính) -> PowerPoint (thuyết trình).",
      "hint": "Google Forms để khảo sát và Excel để tính toán."
    },
    {
      "id": "tin9-b16-m1",
      "type": "matching",
      "question": "Nối giai đoạn dự án khởi nghiệp ở cột bên trái với nhiệm vụ công nghệ tương ứng ở cột bên phải:",
      "matchingLeft": [
        {
          "id": "1",
          "text": "Giai đoạn 1: Khảo sát thị trường"
        },
        {
          "id": "2",
          "text": "Giai đoạn 2: Lập kế hoạch tài chính"
        },
        {
          "id": "3",
          "text": "Giai đoạn 3: Thiết kế quảng bá sản phẩm"
        },
        {
          "id": "4",
          "text": "Giai đoạn 4: Báo cáo gọi vốn"
        }
      ],
      "matchingRight": [
        {
          "id": "a",
          "text": "Thiết kế logo, catalogue và tờ rơi số trên Canva / GIMP"
        },
        {
          "id": "b",
          "text": "Thuyết trình bài chiếu Pitch Deck trước hội đồng giám khảo"
        },
        {
          "id": "c",
          "text": "Lập bảng tính dự toán chi phí, doanh thu và điểm hòa vốn trên Excel"
        },
        {
          "id": "d",
          "text": "Tạo phiếu khảo sát online Google Forms và phân tích biểu đồ phản hồi"
        }
      ],
      "correctMatches": {
        "1": "d",
        "2": "c",
        "3": "a",
        "4": "b"
      },
      "options": [],
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 75-78): Bốn giai đoạn bài bản của một dự án công nghệ số khởi nghiệp học đường.",
      "hint": "Nối từng giai đoạn với công việc tương ứng."
    },
    {
      "id": "tin9-b16-mc5",
      "type": "multiple_choice",
      "question": "Thế nào là \"Điểm hòa vốn\" (Break-even point) trong kinh doanh dự án?",
      "options": [
        "Thời điểm nhân viên được tăng gấp đôi tiền lương",
        "Thời điểm mà tổng doanh thu thu về vừa đủ bù đắp toàn bộ chi phí đã bỏ ra (lợi nhuận bằng 0)",
        "Thời điểm kiếm được số tiền nhiều nhất",
        "Thời điểm công ty bị phá sản hoàn toàn"
      ],
      "correctAnswer": 1,
      "difficulty": "trung_binh",
      "explanation": "SGK Tin học 9 KNTT (Trang 76): Điểm hòa vốn là mốc quan trọng trong kế hoạch tài chính: sau điểm này, mỗi sản phẩm bán thêm sẽ bắt đầu sinh lời.",
      "hint": "Doanh thu vừa đủ bù đắp chi phí bỏ ra."
    },
    {
      "id": "tin9-b16-mc6",
      "type": "multiple_choice",
      "question": "Khi thuyết trình gọi vốn dự án, thời lượng một bài Pitch Deck hiệu quả thường kéo dài trong khoảng bao lâu?",
      "options": [
        "Đúng 10 giây rồi dừng lại",
        "Kéo dài 2 đến 3 tiếng đồng hồ",
        "Nói liên tục đến khi hết giờ học mới thôi",
        "Từ 3 đến 5 phút (tập trung nêu bật vấn đề, giải pháp và tính khả thi)"
      ],
      "correctAnswer": 3,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 77): Thuyết trình khởi nghiệp đòi hỏi tính súc tích cao, thông thường chỉ từ 3 đến 5 phút để gây ấn tượng mạnh với người nghe.",
      "hint": "Khoảng 3 đến 5 phút ngắn gọn và ấn tượng."
    },
    {
      "id": "tin9-b16-mc7",
      "type": "multiple_choice",
      "question": "Giá trị lớn nhất mà học sinh nhận được sau khi hoàn thành dự án khởi nghiệp công nghệ số là gì?",
      "options": [
        "Không cần phải học các môn học khác nữa",
        "Rèn luyện tư duy phản biện, kĩ năng hợp tác nhóm, năng lực số và hiểu biết về thực tế đời sống kinh tế",
        "Kiếm được rất nhiều tiền để mua sắm đồ chơi đắt tiền",
        "Được miễn thi tốt nghiệp môn Tin học"
      ],
      "correctAnswer": 1,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 78): Dự án bồi dưỡng phẩm chất và năng lực toàn diện của học sinh: tư duy sáng tạo, tự chủ, kĩ năng giải quyết vấn đề thực tiễn.",
      "hint": "Phát triển tư duy, kĩ năng hợp tác và năng lực số toàn diện."
    },
    {
      "id": "tin9-b16-mc8",
      "type": "multiple_choice",
      "question": "Khái niệm 'Khởi nghiệp đổi mới sáng tạo' (Startup) trong lĩnh vực công nghệ số có đặc điểm gì?",
      "options": [
        "Doanh nghiệp mới thành lập dựa trên việc khai thác các công nghệ mới hoặc mô hình kinh doanh đột phá, có tiềm năng tăng trưởng quy mô cực nhanh",
        "Mở một quán tạp hóa buôn bán truyền thống",
        "Mua bán đất đai bất động sản",
        "Một cơ quan hành chính nhà nước"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "SGK Tin học 9 KNTT (Trang 66): Startup công nghệ tạo đột phá bằng giải pháp số và có tính nhân rộng quy mô (scalability) cao.",
      "hint": "Khai thác công nghệ mới đột phá với tiềm năng tăng trưởng quy mô nhanh."
    },
    {
      "id": "tin9-b16-mc9",
      "type": "multiple_choice",
      "question": "Các bước cơ bản để triển khai một Dự án khởi nghiệp công nghệ học đường bao gồm quy trình nào?",
      "options": [
        "Tìm ý tưởng giải quyết 'nỗi đau' thực tế -> Nghiên cứu thị trường & người dùng -> Xây dựng sản phẩm mẫu thử nghiệm (MVP) -> Thử nghiệm phản hồi -> Hoàn thiện & Kêu gọi hỗ trợ",
        "Đăng kí kinh doanh rồi đi vay tiền tỉ ngay",
        "Sao chép nguyên bản của đối thủ",
        "Làm sản phẩm xong mới đi tìm xem ai cần mua"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Quy trình Khởi nghiệp tinh gọn (Lean Startup): Ý tưởng -> Nghiên cứu -> MVP -> Thử nghiệm và cải tiến lặp.",
      "hint": "Khảo sát nhu cầu thực tế, tạo sản phẩm mẫu MVP và cải tiến lặp."
    },
    {
      "id": "tin9-b16-mc10",
      "type": "multiple_choice",
      "question": "Khái niệm 'Sản phẩm khả dụng tối thiểu' (MVP - Minimum Viable Product) là gì?",
      "options": [
        "Phiên bản sản phẩm đầu tiên chỉ chứa những tính năng cốt lõi nhất vừa đủ để đưa cho người dùng trải nghiệm và thu thập phản hồi hoàn thiện",
        "Một sản phẩm bị lỗi hoàn toàn không dùng được",
        "Một bản vẽ phác thảo trên giấy nháp",
        "Sản phẩm đắt tiền nhất"
      ],
      "correctAnswer": 0,
      "difficulty": "trung_binh",
      "explanation": "MVP giúp nhóm khởi nghiệp kiểm chứng giả thuyết thị trường nhanh nhất với chi phí và nguồn lực tối thiểu.",
      "hint": "Phiên bản tối thiểu mang tính năng cốt lõi để thử nghiệm thị trường."
    },
    {
      "id": "tin9-b16-mc11",
      "type": "multiple_choice",
      "question": "Ý tưởng dự án công nghệ nào sau đây mang tính ứng dụng thực tiễn và ý nghĩa xã hội cao đối với trường học?",
      "options": [
        "Ứng dụng 'Tủ sách số chia sẻ học liệu và trao đổi sách cũ' giữa các bạn học sinh trong trường",
        "Ứng dụng chia sẻ bài giải để gian lận kiểm tra",
        "Trang web nói xấu giáo viên và bạn bè",
        "Trò chơi đánh bài ảo ăn tiền"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Dự án công nghệ có giá trị là dự án giải quyết bài toán thiết thực, lan tỏa tri thức và gắn kết cộng đồng.",
      "hint": "Dự án chia sẻ học liệu và trao đổi sách cũ hữu ích cho học đường."
    },
    {
      "id": "tin9-b16-mc12",
      "type": "multiple_choice",
      "question": "Kĩ năng 'Thuyết trình gọi vốn / Trình bày ý tưởng' (Pitching) đòi hỏi nhóm dự án phải thể hiện điều gì?",
      "options": [
        "Nêu rõ vấn đề đang tồn tại, giải pháp công nghệ độc đáo của nhóm, lợi ích mang lại cho người dùng và tính khả thi trong thời gian ngắn gọn (3-5 phút)",
        "Đọc nguyên một cuốn sách dày 200 trang cho ban giám khảo nghe",
        "Chỉ xin tiền mà không nói sẽ làm gì",
        "Chiếu một bộ phim hoạt hình"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Pitching thuyết phục người nghe bằng sự cô đọng, sắc bén về giải pháp và tính khả thi của dự án.",
      "hint": "Nêu rõ vấn đề, giải pháp độc đáo, lợi ích và tính khả thi trong 3-5 phút."
    },
    {
      "id": "tin9-b16-mc13",
      "type": "multiple_choice",
      "question": "Công cụ tiếp thị kĩ thuật số (Digital Marketing) giúp dự án khởi nghiệp tiếp cận khách hàng tiềm năng qua các kênh nào?",
      "options": [
        "Mạng xã hội (Facebook, TikTok, Instagram), video ngắn giới thiệu sản phẩm trên YouTube và trang web dự án",
        "Phát loa phóng thanh trên phố",
        "Chờ đợi khách hàng tự tìm đến",
        "Gửi thư tay qua bưu điện"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Truyền thông số lan tỏa thông điệp dự án với chi phí thấp và độ phủ sóng rộng khắp tới đối tượng mục tiêu.",
      "hint": "Mạng xã hội, video ngắn và trang web dự án."
    },
    {
      "id": "tin9-b16-mc14",
      "type": "multiple_choice",
      "question": "Thái độ quan trọng nhất của một người khởi nghiệp trẻ khi sản phẩm đầu tiên thất bại hoặc bị người dùng chê là gì?",
      "options": [
        "Lắng nghe phản hồi chân thành, kiên trì phân tích nguyên nhân sai lầm, điều chỉnh sản phẩm và không nản chí bỏ cuộc",
        "Tức giận mắng chửi khách hàng",
        "Từ bỏ hoàn toàn không bao giờ làm gì nữa",
        "Đổ lỗi cho hoàn cảnh"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Thất bại là người thầy vĩ đại nhất của khởi nghiệp; tinh thần quật khởi và thích ứng làm nên thành công.",
      "hint": "Lắng nghe phản hồi, kiên trì phân tích lỗi và hoàn thiện sản phẩm."
    },
    {
      "id": "tin9-b16-mc15",
      "type": "multiple_choice",
      "question": "Ý nghĩa lớn nhất của việc trải nghiệm một dự án khởi nghiệp công nghệ ngay từ khi còn ngồi trên ghế nhà trường là gì?",
      "options": [
        "Rèn luyện tư duy dám nghĩ dám làm, tinh thần dấn thân giải quyết vấn đề xã hội và phát triển toàn diện các kĩ năng thế kỉ 21",
        "Chỉ để kiếm thật nhiều tiền tiêu vặt",
        "Để được miễn thi tất cả các môn học",
        "Không có ý nghĩa gì"
      ],
      "correctAnswer": 0,
      "difficulty": "de",
      "explanation": "Trải nghiệm dự án khởi nghiệp trui rèn bản lĩnh, tư duy đổi mới và trách nhiệm phụng sự cộng đồng.",
      "hint": "Rèn luyện tư duy dám nghĩ dám làm và giải quyết vấn đề cộng đồng."
    }
  ]
};
