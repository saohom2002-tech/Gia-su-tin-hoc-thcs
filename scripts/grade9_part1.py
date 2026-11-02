# -*- coding: utf-8 -*-
"""
Grade 9 - Part 1: Lessons 1 to 5 (SGK Tin học 9 KNTT)
Mỗi bài 10-11 câu gồm: multiple_choice, true_false, fill_blank, matching.
"""

GRADE9_P1 = {
  'tin9-bai-1': [
    {
      'id': 'tin9-b1-mc1',
      'type': 'multiple_choice',
      'question': 'Thiết bị thông minh (Smart Device) có đặc điểm nổi bật nào sau đây?',
      'options': [
        'Có khả năng xử lí thông tin, kết nối mạng và hoạt động tự chủ theo ngữ cảnh',
        'Chỉ hoạt động được khi cắm dây nguồn trực tiếp vào ổ điện 220V',
        'Có giá thành luôn đắt hơn mọi thiết bị thông thường',
        'Không thể kết nối với mạng Internet hoặc Bluetooth'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 5): Thiết bị thông minh là thiết bị điện tử có khả năng xử lí dữ liệu, kết nối truyền thông và tự chủ hoạt động thích ứng với môi trường.',
      'hint': 'Khả năng xử lí dữ liệu, kết nối và tự chủ theo môi trường.'
    },
    {
      'id': 'tin9-b1-mc2',
      'type': 'multiple_choice',
      'question': 'Hệ sinh thái Internet vạn vật (Internet of Things - IoT) là gì?',
      'options': [
        'Mạng lưới kết nối các thiết bị thông minh với nhau qua Internet để thu thập và trao đổi dữ liệu',
        'Một trang mạng xã hội dành riêng cho các kĩ sư công nghệ',
        'Một loại cáp quang biển tốc độ cao',
        'Hệ thống phần mềm kế toán doanh nghiệp'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 6): IoT là mạng lưới vạn vật kết nối Internet, nơi các thiết bị cảm biến và máy móc thu thập, chia sẻ dữ liệu tự động.',
      'hint': 'Mạng lưới kết nối vạn vật qua Internet.'
    },
    {
      'id': 'tin9-b1-mc3',
      'type': 'multiple_choice',
      'question': 'Thiết bị nào sau đây KHÔNG phải là một thiết bị thông minh?',
      'options': [
        'Chiếc quạt máy cơ truyền thống điều khiển bằng nút bấm cơ học',
        'Điện thoại thông minh (Smartphone)',
        'Đồng hồ thông minh (Smartwatch) theo dõi nhịp tim',
        'Robot hút bụi tự động quét bản đồ nhà'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 5): Quạt cơ học chỉ hoạt động đơn thuần khi đóng ngắt mạch điện, không có bộ vi xử lí hay cảm biến thông minh.',
      'hint': 'Thiết bị cơ học truyền thống không có chip xử lí thông minh.'
    },
    {
      'id': 'tin9-b1-mc4',
      'type': 'multiple_choice',
      'question': 'Trong ngôi nhà thông minh (Smart Home), khi trời tối đèn tự động bật sáng nhờ vào thành phần công nghệ nào?',
      'options': [
        'Cảm biến ánh sáng kết hợp với bộ điều khiển vi xử lí',
        'Dây dẫn điện bọc nhựa',
        'Bóng đèn sợi đốt',
        'Công tắc cơ học gắn trên tường'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 7): Cảm biến quang (ánh sáng) nhận biết mức độ sáng môi trường và truyền tín hiệu cho bộ vi xử lí ra lệnh bật đèn.',
      'hint': 'Cảm biến nhận biết ánh sáng và vi điều khiển.'
    },
    {
      'id': 'tin9-b1-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về thiết bị thông minh và thế giới kĩ thuật số:',
      'options': [
        'a) Thiết bị thông minh có thể tương tác tự động với người dùng qua giọng nói hoặc cử chỉ',
        'b) Thành phố thông minh (Smart City) ứng dụng công nghệ số để quản lí giao thông, năng lượng và môi trường',
        'c) Mọi thiết bị điện gia dụng trong nhà cắm điện đều mặc nhiên là thiết bị thông minh',
        'd) Nguy cơ mất an toàn thông tin cá nhân tăng lên khi nhiều thiết bị IoT được kết nối vào Internet gia đình'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Thiết bị cắm điện thông thường nếu thiếu bộ vi xử lí và cảm biến giao tiếp mạng thì không phải thiết bị thông minh.',
      'hint': 'Cần có chip xử lí và kết nối mạng mới là thiết bị thông minh.'
    },
    {
      'id': 'tin9-b1-fb1',
      'type': 'fill_blank',
      'question': 'Thiết bị thông minh là thiết bị điện tử có gắn bộ [1] và có khả năng kết nối [2] để trao đổi thông tin tự động.',
      'blankAnswers': ['vi xử lí', 'mạng (Internet)'],
      'wordBank': ['vi xử lí', 'mạng (Internet)', 'pin hóa học', 'bánh răng cơ học', 'màn hình cong', 'loa thùng'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 5): Bộ vi xử lí và kết nối mạng là hai đặc trưng cốt lõi của thiết bị thông minh.',
      'hint': 'Có chip vi xử lí và kết nối mạng.'
    },
    {
      'id': 'tin9-b1-m1',
      'type': 'matching',
      'question': 'Nối ứng dụng công nghệ thông minh ở cột bên trái với lĩnh vực tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Vòng đeo tay thông minh theo dõi nồng độ SpO2 và giấc ngủ'},
        {'id': '2', 'text': 'Hệ thống đèn giao thông tự điều chỉnh thời gian theo mật độ xe'},
        {'id': '3', 'text': 'Hệ thống tưới nước tự động dựa trên cảm biến độ ẩm đất'},
        {'id': '4', 'text': 'Khóa cửa vân tay và nhận diện khuôn mặt'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Giao thông thông minh (Smart Traffic)'},
        {'id': 'b', 'text': 'Nông nghiệp thông minh (Smart Agriculture)'},
        {'id': 'c', 'text': 'Y tế và chăm sóc sức khỏe thông minh (Smart Healthcare)'},
        {'id': 'd', 'text': 'Ngôi nhà thông minh và an ninh số (Smart Home)'}
      ],
      'correctMatches': {'1': 'c', '2': 'a', '3': 'b', '4': 'd'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 7): Ứng dụng rộng rãi của thế giới số trong y tế, giao thông, nông nghiệp và đời sống gia đình.',
      'hint': 'Nối thiết bị với lĩnh vực đời sống cụ thể.'
    },
    {
      'id': 'tin9-b1-mc5',
      'type': 'multiple_choice',
      'question': 'Để phòng ngừa nguy cơ bị tin tặc xâm nhập vào hệ thống camera an ninh gia đình, biện pháp nào sau đây là quan trọng nhất?',
      'options': [
        'Thay đổi mật khẩu mặc định của camera ngay khi lắp đặt và thường xuyên cập nhật phần mềm',
        'Tắt camera khi đi ngủ',
        'Dùng băng dính dán kín mắt camera cả ngày',
        'Lắp camera ở vị trí càng cao càng tốt'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 8): Mật khẩu mặc định của nhà sản xuất (như admin/123456) rất dễ bị dò quét; đổi mật khẩu mạnh là nguyên tắc an toàn số số 1.',
      'hint': 'Đổi mật khẩu mặc định thành mật khẩu mạnh.'
    },
    {
      'id': 'tin9-b1-mc6',
      'type': 'multiple_choice',
      'question': 'Khái niệm "Dấu chân kĩ thuật số" (Digital Footprint) ám chỉ điều gì?',
      'options': [
        'Mọi dấu vết dữ liệu, hoạt động trực tuyến mà một người để lại khi sử dụng Internet',
        'Kích thước bàn chân được đo bằng máy quét 3D',
        'Phần mềm đếm số bước chân khi chạy bộ',
        'Vết bẩn trên bề mặt bàn phím máy tính'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 9 KNTT (Trang 8): Digital Footprint là toàn bộ lịch sử truy cập web, bình luận, ảnh đăng tải, vị trí định vị... lưu lại trên không gian số.',
      'hint': 'Dấu vết hoạt động trực tuyến của một người trên Internet.'
    },
    {
      'id': 'tin9-b1-mc7',
      'type': 'multiple_choice',
      'question': 'Công nghệ trợ lí ảo (Virtual Assistant như Siri, Google Assistant, Alexa) ứng dụng đột phá nào của công nghệ thông tin hiện đại?',
      'options': [
        'Trí tuệ nhân tạo (AI) và xử lí ngôn ngữ tự nhiên (NLP)',
        'Màn hình cảm ứng điện dung',
        'Công nghệ in ấn siêu tốc',
        'Công nghệ tản nhiệt bằng chất lỏng'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 6): Trợ lí ảo ứng dụng AI và công nghệ nhận dạng, xử lí ngôn ngữ tự nhiên để hiểu và trả lời giọng nói con người.',
      'hint': 'Trí tuệ nhân tạo (AI) nhận diện giọng nói.'
    }
  ],

  'tin9-bai-2': [
    {
      'id': 'tin9-b2-mc1',
      'type': 'multiple_choice',
      'question': 'Trong quá trình giải quyết vấn đề, thông tin có vai trò cốt lõi như thế nào?',
      'options': [
        'Là căn cứ để phân tích tình hình, đưa ra các phương án khả thi và ra quyết định tối ưu',
        'Làm tăng thêm độ phức tạp và khó khăn cho người giải quyết',
        'Chỉ có tác dụng giải trí sau khi vấn đề đã được giải quyết xong',
        'Không có vai trò gì quan trọng'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 10): Thông tin đầy đủ, chính xác giúp làm rõ bản chất vấn đề, đề xuất giải pháp và ra quyết định đúng đắn.',
      'hint': 'Thông tin là cơ sở để ra quyết định đúng đắn.'
    },
    {
      'id': 'tin9-b2-mc2',
      'type': 'multiple_choice',
      'question': 'Quy trình thu thập thông tin để giải quyết một bài toán thực tế thường trải qua mấy bước cơ bản?',
      'options': [
        '4 bước: Xác định nhu cầu thông tin -> Tìm kiếm, thu thập -> Xử lí, đánh giá -> Sử dụng ra quyết định',
        '1 bước: Lên mạng tìm bài giải có sẵn chép lại',
        '2 bước: Đoán mò kết quả rồi viết báo cáo',
        '8 bước phức tạp chỉ có chuyên gia làm được'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 11): 4 bước khoa học: 1. Xác định nhu cầu; 2. Thu thập; 3. Xử lí đánh giá; 4. Vận dụng.',
      'hint': 'Quy trình 4 bước từ xác định nhu cầu đến ra quyết định.'
    },
    {
      'id': 'tin9-b2-mc3',
      'type': 'multiple_choice',
      'question': 'Khi thu thập thông tin về giá vé và lịch trình xe bus để tổ chức buổi dã ngoại cho lớp, nguồn thông tin nào sau đây là sơ cấp (nguyên bản, trực tiếp)?',
      'options': [
        'Ứng dụng tra cứu chính thức của công ty xe buýt (như BusMap) hoặc bảng thông báo tại trạm xe',
        'Tin đồn truyền miệng của một người bạn nghe người khác kể lại',
        'Một bình luận vu vơ trên diễn đàn từ 5 năm trước',
        'Dự đoán thời tiết trên báo'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 12): Nguồn sơ cấp là dữ liệu gốc do đơn vị cung cấp dịch vụ trực tiếp phát hành.',
      'hint': 'Nguồn thông tin trực tiếp từ đơn vị quản lí dịch vụ.'
    },
    {
      'id': 'tin9-b2-mc4',
      'type': 'multiple_choice',
      'question': 'Nếu đưa ra quyết định dựa trên thông tin sai lệch, hậu quả nghiêm trọng nhất có thể là gì?',
      'options': [
        'Kế hoạch bị thất bại, lãng phí thời gian, tiền bạc và công sức',
        'Máy tính bị nhiễm virus ngay lập tức',
        'Bị cắt kết nối điện thoại',
        'Được khen thưởng sáng tạo'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 11): Thông tin sai lệch dẫn đến quyết định sai lầm, gây thiệt hại nghiêm trọng về thời gian, vật chất và uy tín.',
      'hint': 'Thông tin sai dẫn đến quyết định sai lầm và thiệt hại.'
    },
    {
      'id': 'tin9-b2-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về vai trò của thông tin trong giải quyết vấn đề:',
      'options': [
        'a) Càng có nhiều thông tin thì quyết định đưa ra luôn luôn đúng 100% mà không cần chọn lọc',
        'b) Thông tin cần thu thập phải phù hợp trực tiếp với mục tiêu giải quyết vấn đề',
        'c) Có thể sử dụng bảng tính điện tử hoặc biểu đồ để xử lí và so sánh dữ liệu thu thập được',
        'd) Việc kiểm chứng nguồn tin giúp loại bỏ các thông tin sai lệch, lỗi thời'
      ],
      'trueFalseAnswers': [False, True, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 11): Quá nhiều thông tin rác không được chọn lọc sẽ gây nhiễu loạn, dẫn đến phán đoán sai lầm.',
      'hint': 'Thông tin cần được chọn lọc kĩ lưỡng chứ không phải càng nhiều càng tốt.'
    },
    {
      'id': 'tin9-b2-fb1',
      'type': 'fill_blank',
      'question': 'Để giải quyết một vấn đề hiệu quả, trước hết ta cần xác định rõ [1] thông tin cần tìm, sau đó tìm kiếm và [2] độ tin cậy của các nguồn thông tin đó.',
      'blankAnswers': ['nhu cầu', 'kiểm chứng'],
      'wordBank': ['nhu cầu', 'kiểm chứng', 'xóa bỏ', 'sao chép', 'bảo mật', 'mã hóa'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 11): Xác định nhu cầu thông tin và kiểm chứng nguồn gốc dữ liệu.',
      'hint': 'Xác định nhu cầu và kiểm chứng thông tin.'
    },
    {
      'id': 'tin9-b2-m1',
      'type': 'matching',
      'question': 'Nối bước trong quy trình giải quyết vấn đề ở cột bên trái với hành động cụ thể ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Bước 1: Xác định nhu cầu thông tin'},
        {'id': '2', 'text': 'Bước 2: Tìm kiếm và thu thập'},
        {'id': '3', 'text': 'Bước 3: Xử lí và đánh giá dữ liệu'},
        {'id': '4', 'text': 'Bước 4: Sử dụng thông tin ra quyết định'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Tra cứu trên các website uy tín, khảo sát thực tế hoặc phỏng vấn'},
        {'id': 'b', 'text': 'Lập bảng Excel tính toán chi phí và vẽ biểu đồ so sánh các phương án'},
        {'id': 'c', 'text': 'Lựa chọn phương án tối ưu nhất và bắt tay thực hiện kế hoạch'},
        {'id': 'd', 'text': 'Lập danh sách các câu hỏi: Cần biết điều gì? Cần số liệu nào?'}
      ],
      'correctMatches': {'1': 'd', '2': 'a', '3': 'b', '4': 'c'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 11, 12): Bốn bước chặt chẽ trong thu thập và ứng dụng thông tin giải quyết vấn đề.',
      'hint': 'Nối từng bước với công việc cụ thể của bước đó.'
    },
    {
      'id': 'tin9-b2-mc5',
      'type': 'multiple_choice',
      'question': 'Khi tìm kiếm thông tin về lịch sử địa phương, nguồn nào sau đây là nguồn thông tin đáng tin cậy nhất?',
      'options': [
        'Sách Lịch sử Đảng bộ địa phương hoặc bảo tàng lịch sử tỉnh/thành phố',
        'Các bài đăng ẩn danh trên diễn đàn giải trí',
        'Video ngắn chưa kiểm duyệt trên TikTok',
        'Ý kiến võ đoán của một bạn học sinh lớp bên'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 12): Tài liệu lưu trữ lịch sử chính thống của bảo tàng và nhà xuất bản uy tín là nguồn căn cứ chuẩn xác.',
      'hint': 'Bảo tàng và sách lịch sử chính thống.'
    },
    {
      'id': 'tin9-b2-mc6',
      'type': 'multiple_choice',
      'question': 'Một bạn học sinh lập bảng tính Excel để so sánh mức tiêu hao điện năng của các loại bóng đèn: sợi đốt, huỳnh quang và LED. Bạn đang thực hiện bước nào?',
      'options': [
        'Xử lí và phân tích dữ liệu',
        'Xác định bài toán',
        'Đưa ra kết luận cuối cùng',
        'Nghiệm thu công trình'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 12): Tổng hợp số liệu vào bảng tính để tính toán, so sánh thuộc bước Xử lí và đánh giá thông tin.',
      'hint': 'Dùng bảng tính để phân tích, so sánh số liệu.'
    },
    {
      'id': 'tin9-b2-mc7',
      'type': 'multiple_choice',
      'question': 'Để thu thập ý kiến đóng góp của tất cả các bạn học sinh trong khối về việc tổ chức hội trại, công cụ số nào sau đây là tiện lợi và nhanh chóng nhất?',
      'options': [
        'Tạo biểu mẫu khảo sát trực tuyến (Google Forms / Microsoft Forms)',
        'Gửi thư tay qua đường bưu điện cho từng bạn',
        'Đến tận nhà từng bạn để hỏi trực tiếp vào ban đêm',
        'Gặp riêng từng bạn vào giờ ra chơi ghi vào sổ tay'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 13): Google Forms cho phép tạo bảng hỏi trực tuyến, gửi qua liên kết và tự động tổng hợp kết quả tức thì.',
      'hint': 'Biểu mẫu khảo sát trực tuyến Google Forms.'
    }
  ],

  'tin9-bai-3': [
    {
      'id': 'tin9-b3-mc1',
      'type': 'multiple_choice',
      'question': 'Năm tiêu chí cơ bản để đánh giá chất lượng của thông tin số bao gồm những tiêu chí nào?',
      'options': [
        'Tính chính xác, tính mới (cập nhật), tính đầy đủ, tính sử dụng được và độ tin cậy',
        'Độ dài văn bản, số lượng hình ảnh, dung lượng tệp tin, phông chữ và màu nền',
        'Số lượt thích, số lượt chia sẻ, số lượt bình luận, tên tài khoản và ảnh đại diện',
        'Tốc độ tải trang, giá tiền mua tệp tin, ngôn ngữ tiếng Anh và hệ điều hành'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 15): Năm tiêu chuẩn vàng thẩm định thông tin: Chính xác, Cập nhật, Đầy đủ, Sử dụng được và Độ tin cậy.',
      'hint': 'Chính xác, mới, đầy đủ, dùng được và tin cậy.'
    },
    {
      'id': 'tin9-b3-mc2',
      'type': 'multiple_choice',
      'question': 'Tiêu chí "Tính sử dụng được" (Relevance) của thông tin có nghĩa là gì?',
      'options': [
        'Thông tin phải phù hợp, liên quan trực tiếp đến mục đích và bài toán đang cần giải quyết',
        'Tệp tin có thể mở được trên mọi máy tính mà không bị lỗi',
        'Văn bản có thể in ra giấy A4 được',
        'Thông tin có thể dùng để bán lấy tiền'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 16): Thông tin dù chính xác đến đâu nhưng lạc đề, không phục vụ mục tiêu cần giải quyết thì không có giá trị sử dụng.',
      'hint': 'Phù hợp và đáp ứng đúng mục tiêu công việc.'
    },
    {
      'id': 'tin9-b3-mc3',
      'type': 'multiple_choice',
      'question': 'Khi đọc một bài viết khuyến cáo uống nước lá cây để chữa dứt điểm bệnh ung thư mà không có bất kì kiểm nghiệm y khoa nào, bài viết đó vi phạm tiêu chí nào nghiêm trọng nhất?',
      'options': [
        'Độ tin cậy và tính chính xác khoa học',
        'Tính cập nhật thời gian',
        'Tốc độ truyền dữ liệu',
        'Quy chuẩn phông chữ'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 16): Không có căn cứ khoa học, không được cơ quan y tế công nhận là thông tin thiếu độ tin cậy và sai lệch nghiêm trọng.',
      'hint': 'Thiếu cơ sở khoa học và độ tin cậy.'
    },
    {
      'id': 'tin9-b3-mc4',
      'type': 'multiple_choice',
      'question': 'Một bài báo hướng dẫn phòng chống bão lũ nhưng được viết từ năm 2010 đã bị thay đổi bởi quy định mới năm 2026. Thông tin này bị hạn chế bởi tiêu chí nào?',
      'options': [
        'Tính mới / tính cập nhật (Currency)',
        'Tính bí mật',
        'Tính hấp dẫn',
        'Tính thẩm mĩ'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 15): Thông tin quá cũ, đã bị quy định mới thay thế thì không còn tính cập nhật (lỗi thời).',
      'hint': 'Thông tin đã quá cũ là thiếu tính cập nhật.'
    },
    {
      'id': 'tin9-b3-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về thực hành đánh giá chất lượng thông tin:',
      'options': [
        'a) Tên miền có đuôi .gov.vn là cổng thông tin của các cơ quan nhà nước tại Việt Nam',
        'b) Thông tin được chia sẻ nhiều nhất trên mạng xã hội luôn là thông tin có chất lượng cao nhất',
        'c) Khi đánh giá độ tin cậy, cần kiểm tra danh tính và chuyên môn của tác giả bài viết',
        'd) Một bảng số liệu tài chính không ghi rõ đơn vị tính (đồng hay USD) là thiếu tính đầy đủ'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Lượt tương tác mạng xã hội nhiều không đồng nghĩa với thông tin chính xác, tin giật gân thường lan truyền nhanh nhưng sai lệch.',
      'hint': 'Lượt like trên mạng không chứng minh thông tin là đúng.'
    },
    {
      'id': 'tin9-b3-fb1',
      'type': 'fill_blank',
      'question': 'Để đánh giá độ tin cậy của thông tin, ta cần xác định rõ [1] bài viết là ai và [2] xuất bản thông tin đó có phải là cơ quan uy tín hay không.',
      'blankAnswers': ['tác giả', 'tổ chức (nguồn)'],
      'wordBank': ['tác giả', 'tổ chức (nguồn)', 'người đọc', 'máy chủ', 'bình luận viên', 'nhà tài trợ'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 15): Tác giả và tổ chức xuất bản là hai căn cứ xác định độ tin cậy của tài liệu.',
      'hint': 'Kiểm tra ai là tác giả và tổ chức nào xuất bản.'
    },
    {
      'id': 'tin9-b3-m1',
      'type': 'matching',
      'question': 'Nối tiêu chí đánh giá thông tin ở cột bên trái với câu hỏi kiểm tra tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Tính chính xác (Accuracy)'},
        {'id': '2', 'text': 'Tính cập nhật (Currency)'},
        {'id': '3', 'text': 'Tính đầy đủ (Completeness)'},
        {'id': '4', 'text': 'Tính sử dụng được (Relevance)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Thông tin này được xuất bản vào ngày tháng năm nào? Có phiên bản mới hơn không?'},
        {'id': 'b', 'text': 'Thông tin này có giúp ích trực tiếp cho bài tập nghiên cứu của em không?'},
        {'id': 'c', 'text': 'Dữ liệu có số liệu chứng minh rõ ràng và logic không bị mâu thuẫn không?'},
        {'id': 'd', 'text': 'Số liệu có bao quát hết các khía cạnh cần thiết hay bị cắt xén một phần?'}
      ],
      'correctMatches': {'1': 'c', '2': 'a', '3': 'd', '4': 'b'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 15, 16): Bộ câu hỏi kiểm tra tương ứng với từng tiêu chuẩn đánh giá chất lượng thông tin.',
      'hint': 'Nối tiêu chuẩn với câu hỏi kiểm tra tương ứng.'
    },
    {
      'id': 'tin9-b3-mc5',
      'type': 'multiple_choice',
      'question': 'Dấu hiệu nào sau đây cảnh báo một bài viết có thể chứa thông tin thiên vị hoặc không khách quan?',
      'options': [
        'Bài viết chỉ đưa ra một góc nhìn duy nhất, sử dụng nhiều từ ngữ cảm tính thái quá và nhằm mục đích quảng cáo bán hàng',
        'Bài viết có trích dẫn nguồn số liệu từ Tổng cục Thống kê',
        'Tác giả cung cấp nhiều bằng chứng từ cả hai phía đối lập',
        'Ngôn từ trung lập, khách quan, có trích dẫn tài liệu tham khảo'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 17): Ngôn từ cảm tính, chỉ khen một chiều để bán hàng là dấu hiệu của thông tin thiên vị, thiếu khách quan.',
      'hint': 'Bài viết một chiều mang mục đích bán hàng.'
    },
    {
      'id': 'tin9-b3-mc6',
      'type': 'multiple_choice',
      'question': 'Phương pháp đối chiếu thông tin (Cross-checking) trong đánh giá chất lượng dữ liệu được thực hiện như thế nào?',
      'options': [
        'So sánh cùng một thông tin trên nhiều nguồn độc lập và có uy tín khác nhau để tìm sự trùng khớp',
        'Kiểm tra xem thông tin có chứa chữ X hay không',
        'Đọc lướt qua một lần rồi thôi',
        'Chỉ tin tưởng vào một trang web duy nhất'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 17): Đối chiếu chéo từ 2-3 nguồn độc lập giúp khẳng định tính xác thực của sự kiện.',
      'hint': 'So sánh cùng nội dung trên nhiều nguồn độc lập.'
    },
    {
      'id': 'tin9-b3-mc7',
      'type': 'multiple_choice',
      'question': 'Khi tìm kiếm tài liệu học tập, địa chỉ website nào sau đây có độ tin cậy cao nhất về mặt học thuật tại Việt Nam?',
      'options': [
        'Các website có đuôi tên miền .edu.vn (các trường đại học, viện nghiên cứu)',
        'Trang web cá nhân miễn phí trên blogspot.com',
        'Website chuyên bán hàng trực tuyến có đuôi .shop',
        'Các trang web chia sẻ tệp tin ẩn danh không kiểm duyệt'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 15): Tên miền .edu.vn được cấp riêng cho các tổ chức giáo dục chính thống nên có độ chuẩn xác học thuật cao.',
      'hint': 'Tên miền .edu.vn dành cho cơ sở giáo dục.'
    }
  ],

  'tin9-bai-4': [
    {
      'id': 'tin9-b4-mc1',
      'type': 'multiple_choice',
      'question': 'Hành vi phát tán phần mềm độc hại (Virus, Trojan, Ransomware) lây nhiễm vào máy tính người khác bị xử lí theo văn bản pháp luật nào?',
      'options': [
        'Bộ luật Hình sự và Luật An ninh mạng của Việt Nam',
        'Luật Doanh nghiệp',
        'Quy chế thi đấu thể thao',
        'Luật Đất đai'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 19): Phát tán mã độc là hành vi vi phạm nghiêm trọng Luật An ninh mạng và Điều 286 Bộ luật Hình sự.',
      'hint': 'Luật An ninh mạng và Bộ luật Hình sự.'
    },
    {
      'id': 'tin9-b4-mc2',
      'type': 'multiple_choice',
      'question': 'Bản quyền tác giả (Copyright) đối với một tác phẩm số (bài viết, bức ảnh, bài hát, phần mềm) phát sinh từ thời điểm nào?',
      'options': [
        'Ngay khi tác phẩm được sáng tạo và thể hiện dưới một hình thức vật chất nhất định, không bắt buộc phải đăng kí',
        'Chỉ khi trả phí đăng kí thành công tại cơ quan nhà nước',
        'Sau khi tác phẩm đã xuất bản được 10 năm',
        'Chỉ khi tác phẩm được nhiều người biết đến'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 9 KNTT (Trang 20): Theo Luật Sở hữu trí tuệ, quyền tác giả phát sinh tự động ngay từ thời điểm tác phẩm được định hình dưới dạng vật chất.',
      'hint': 'Quyền tác giả phát sinh tự động ngay khi tác phẩm được tạo ra.'
    },
    {
      'id': 'tin9-b4-mc3',
      'type': 'multiple_choice',
      'question': 'Hành vi "Đạo văn" (Plagiarism) trong môi trường học thuật số là gì?',
      'options': [
        'Sao chép ý tưởng, câu văn hoặc công trình của người khác rồi nhận là của mình mà không trích dẫn nguồn gốc',
        'Viết một bài văn hay được điểm cao',
        'Dùng máy tính để gõ lại bài thơ của chính mình sáng tác',
        'Chia sẻ tài liệu học tập có ghi rõ tên tác giả'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 21): Đạo văn là hành vi sao chép sản phẩm trí tuệ của người khác và mạo nhận là của mình, vi phạm đạo đức nghiêm trọng.',
      'hint': 'Sao chép của người khác mạo nhận là của mình.'
    },
    {
      'id': 'tin9-b4-mc4',
      'type': 'multiple_choice',
      'question': 'Khi sử dụng các hình ảnh trên Internet có giấy phép Creative Commons (CC BY), em PHẢI tuân thủ điều kiện bắt buộc nào?',
      'options': [
        'Phải ghi nhận công lao (ghi rõ tên tác giả gốc và liên kết đến giấy phép)',
        'Phải trả cho tác giả 100 USD qua tài khoản ngân hàng',
        'Không được phép xem hình ảnh đó trên điện thoại',
        'Phải vẽ lại bức ảnh bằng bút chì'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 20): Giấy phép CC BY (Attribution) cho phép tái sử dụng miễn phí nhưng bắt buộc phải ghi tên tác giả (ghi nhận công lao).',
      'hint': 'CC BY yêu cầu ghi nhận tên tác giả gốc.'
    },
    {
      'id': 'tin9-b4-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về pháp lí và đạo đức trong môi trường số:',
      'options': [
        'a) Tự ý chia sẻ ảnh riêng tư, tài khoản ngân hàng của người khác lên mạng là hành vi vi phạm quyền riêng tư được pháp luật bảo hộ',
        'b) Thông tin trên mạng là ảo nên phát ngôn thù hằn, xúc phạm danh dự người khác sẽ không bị pháp luật xử phạt',
        'c) Mua và dùng tài khoản Netflix, Spotify lậu (dùng chung tài khoản bị hack) là hành vi tiếp tay cho tội phạm mạng',
        'd) Trích dẫn một đoạn văn ngắn trong SGK để phân tích và có ghi chú nguồn gốc rõ ràng là hành vi sử dụng hợp lí (Fair Use)'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Môi trường mạng chịu sự quản lí của Luật An ninh mạng; xúc phạm danh dự nhân phẩm người khác trên mạng vẫn bị phạt tiền hoặc phạt tù.',
      'hint': 'Không gian mạng chịu sự quản lí của pháp luật đời thực.'
    },
    {
      'id': 'tin9-b4-fb1',
      'type': 'fill_blank',
      'question': 'Hành vi [1] là việc sao chép tác phẩm của người khác mà không dẫn nguồn, còn giấy phép [2] là hệ thống giấy phép mở cho phép chia sẻ tài nguyên hợp pháp.',
      'blankAnswers': ['đạo văn', 'Creative Commons'],
      'wordBank': ['đạo văn', 'Creative Commons', 'bản quyền thương mại', 'đạo nhái', 'mã hóa', 'nội suy'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 20, 21): Đạo văn vi phạm đạo đức số; Creative Commons cung cấp chuẩn cấp phép mở cho cộng đồng.',
      'hint': 'Đạo văn và giấy phép bản quyền mở Creative Commons.'
    },
    {
      'id': 'tin9-b4-m1',
      'type': 'matching',
      'question': 'Nối biểu tượng giấy phép Creative Commons ở cột bên trái với ý nghĩa tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'CC BY (Attribution)'},
        {'id': '2', 'text': 'CC NC (NonCommercial)'},
        {'id': '3', 'text': 'CC ND (NoDerivatives)'},
        {'id': '4', 'text': 'CC SA (ShareAlike)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Chỉ được sử dụng cho mục đích phi thương mại, không được kinh doanh kiếm lời'},
        {'id': 'b', 'text': 'Bắt buộc phải ghi nhận tên tác giả gốc của tác phẩm'},
        {'id': 'c', 'text': 'Nếu chỉnh sửa tác phẩm thì phải phát hành theo cùng giấy phép với tác phẩm gốc'},
        {'id': 'd', 'text': 'Không được tạo tác phẩm phái sinh (phải giữ nguyên vẹn bản gốc)'}
      ],
      'correctMatches': {'1': 'b', '2': 'a', '3': 'd', '4': 'c'},
      'options': [],
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 9 KNTT (Trang 20): 4 điều kiện cốt lõi của bộ giấy phép Creative Commons: BY (tác giả), NC (phi thương mại), ND (không sửa đổi), SA (chia sẻ tương tự).',
      'hint': 'BY: tác giả; NC: phi thương mại; ND: không phái sinh; SA: cùng giấy phép.'
    },
    {
      'id': 'tin9-b4-mc5',
      'type': 'multiple_choice',
      'question': 'Khi tạo ra một phần mềm hoặc một bài hát, em muốn mọi người được dùng tự do nhưng KHÔNG ĐƯỢC đem bán lấy tiền, em nên áp dụng kí hiệu giấy phép CC nào?',
      'options': [
        'CC NC (NonCommercial)',
        'CC ND (NoDerivatives)',
        'CC BY-SA',
        'Commercial Only'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 20): Kí hiệu NC (NonCommercial - hình đồng đô la có gạch chéo) cấm sử dụng cho mục đích thương mại.',
      'hint': 'NC là viết tắt của Non-Commercial (phi thương mại).'
    },
    {
      'id': 'tin9-b4-mc6',
      'type': 'multiple_choice',
      'question': 'Thế nào là "Quyền riêng tư dữ liệu cá nhân" (Personal Data Privacy)?',
      'options': [
        'Quyền của cá nhân được kiểm soát thông tin liên quan đến bản thân mình (như hình ảnh, địa chỉ, lịch sử trò chuyện) và không bị xâm phạm',
        'Quyền được cài đặt mọi phần mềm miễn phí',
        'Quyền được đổi mật khẩu wifi của hàng xóm',
        'Quyền không phải trả tiền điện'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 22): Dữ liệu cá nhân gắn liền với quyền riêng tư được Hiến pháp và Nghị định 13/2023/NĐ-CP bảo vệ nghiêm ngặt.',
      'hint': 'Quyền kiểm soát thông tin cá nhân và không bị xâm phạm.'
    },
    {
      'id': 'tin9-b4-mc7',
      'type': 'multiple_choice',
      'question': 'Trong lớp học, nếu một bạn vô tình để quên tài khoản mạng xã hội trên máy tính phòng thực hành, hành động văn minh nhất là gì?',
      'options': [
        'Nhấp chuột đăng xuất (Log out) giúp bạn ngay và thông báo cho bạn biết',
        'Vào đọc hết các tin nhắn riêng tư của bạn',
        'Đăng một bài viết hài hước trêu chọc lên trang cá nhân của bạn',
        'Đổi mật khẩu tài khoản của bạn để tống tiền'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 22): Đạo đức số đòi hỏi sự tôn trọng bảo mật của người khác, giúp bạn đăng xuất an toàn.',
      'hint': 'Đăng xuất tài khoản giúp bạn để đảm bảo an toàn.'
    }
  ],

  'tin9-bai-5': [
    {
      'id': 'tin9-b5-mc1',
      'type': 'multiple_choice',
      'question': 'Phần mềm mô phỏng (Simulation Software) là gì?',
      'options': [
        'Phần mềm tái tạo lại hoạt động của các đối tượng hoặc hiện tượng trong thế giới thực trên máy tính',
        'Phần mềm dùng để chơi game bắn súng trực tuyến',
        'Phần mềm gõ văn bản tiếng Việt',
        'Phần mềm diệt virus máy tính'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 24): Phần mềm mô phỏng xây dựng mô hình toán học và đồ họa để tái hiện lại các quy luật của thế giới thực.',
      'hint': 'Tái tạo lại các hiện tượng thực tế trên máy tính.'
    },
    {
      'id': 'tin9-b5-mc2',
      'type': 'multiple_choice',
      'question': 'Lợi ích lớn nhất của việc sử dụng phần mềm mô phỏng trong nghiên cứu và học tập là gì?',
      'options': [
        'Tiết kiệm chi phí, an toàn tuyệt đối và có thể thực hiện những thí nghiệm nguy hiểm hoặc tốn kém',
        'Thay thế hoàn toàn sự có mặt của người giáo viên',
        'Giúp máy tính không bao giờ bị nóng',
        'Làm tăng tốc độ mạng Internet lên gấp 10 lần'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 25): Mô phỏng giúp quan sát những hiện tượng quá nhỏ (nguyên tử), quá lớn (thiên hà) hoặc quá nguy hiểm (phản ứng hạt nhân, núi lửa).',
      'hint': 'An toàn, tiết kiệm và mô phỏng được thí nghiệm nguy hiểm.'
    },
    {
      'id': 'tin9-b5-mc3',
      'type': 'multiple_choice',
      'question': 'Phần mềm mô phỏng PhET Interactive Simulations (do Đại học Colorado phát triển) nổi tiếng trong việc mô phỏng các môn học nào?',
      'options': [
        'Vật lí, Hóa học, Sinh học và Toán học',
        'Lịch sử và Địa lí địa phương',
        'Môn Âm nhạc và Mĩ thuật',
        'Môn Thể dục rèn luyện thân thể'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 25): PhET cung cấp hàng trăm mô phỏng tương tác miễn phí cho các môn khoa học tự nhiên: Vật lí, Hóa học, Toán học.',
      'hint': 'Các môn khoa học tự nhiên: Lí, Hóa, Sinh, Toán.'
    },
    {
      'id': 'tin9-b5-mc4',
      'type': 'multiple_choice',
      'question': 'Ứng dụng nào sau đây là một ví dụ thực tế về phần mềm mô phỏng dùng trong đào tạo phi công chuyên nghiệp?',
      'options': [
        'Hệ thống mô phỏng buồng lái máy bay (Flight Simulator)',
        'Ứng dụng vẽ Paint',
        'Phần mềm máy tính Casio',
        'Trình duyệt Google Chrome'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 26): Buồng lái mô phỏng (Flight Simulator) cho phép phi công luyện tập xử lí tình huống khẩn cấp mà không nguy hiểm đến tính mạng.',
      'hint': 'Buồng lái máy bay mô phỏng Flight Simulator.'
    },
    {
      'id': 'tin9-b5-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về phần mềm mô phỏng:',
      'options': [
        'a) Phần mềm mô phỏng cho phép người dùng thay đổi các thông số đầu vào để quan sát kết quả biến đổi tức thì',
        'b) Mọi kết quả mô phỏng trên máy tính đều chính xác tuyệt đối 100% so với thực tế mà không có sai số',
        'c) Phần mềm mô phỏng hệ Mặt Trời giúp học sinh quan sát sự chuyển động của các hành tinh quanh Mặt Trời',
        'd) Phần mềm mô phỏng giải phẫu cơ thể người giúp sinh viên y khoa thực hành mà không cần giải phẫu động vật sống'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 25): Mô hình mô phỏng luôn là bản xấp xỉ của thực tế dựa trên các giả định, do đó vẫn có thể có sai số so với đời thực.',
      'hint': 'Mô phỏng dựa trên mô hình toán học nên vẫn có sai số nhất định.'
    },
    {
      'id': 'tin9-b5-fb1',
      'type': 'fill_blank',
      'question': 'Phần mềm mô phỏng tái hiện lại thế giới thực bằng cách xây dựng các [1] toán học, cho phép người dùng tương tác và điều chỉnh các [2] để quan sát hiện tượng.',
      'blankAnswers': ['mô hình', 'thông số'],
      'wordBank': ['mô hình', 'thông số', 'hình vẽ 2D', 'mã độc', 'đồ chơi', 'thẻ nhớ'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 24): Khái niệm cốt lõi: mô hình toán học và việc thay đổi các thông số (parameters).',
      'hint': 'Xây dựng mô hình và thay đổi thông số.'
    },
    {
      'id': 'tin9-b5-m1',
      'type': 'matching',
      'question': 'Nối phần mềm mô phỏng ở cột bên trái với lĩnh vực ứng dụng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Phần mềm GeoGebra'},
        {'id': '2', 'text': 'Phần mềm PhET - Mạch điện xoay chiều'},
        {'id': '3', 'text': 'Phần mềm Solar System 3D'},
        {'id': '4', 'text': 'Phần mềm dự báo đường đi của bão'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Khí tượng thủy văn và biến đổi khí hậu'},
        {'id': 'b', 'text': 'Thiên văn học và chuyển động vũ trụ'},
        {'id': 'c', 'text': 'Hình học phẳng, không gian và đại số'},
        {'id': 'd', 'text': 'Vật lí thực nghiệm điện học'}
      ],
      'correctMatches': {'1': 'c', '2': 'd', '3': 'b', '4': 'a'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 25): Các phần mềm mô phỏng quen thuộc trong giáo dục và đời sống.',
      'hint': 'GeoGebra: Toán; PhET điện: Vật lí; Solar System: Thiên văn; Dự báo bão: Khí tượng.'
    },
    {
      'id': 'tin9-b5-mc5',
      'type': 'multiple_choice',
      'question': 'Khi thay đổi giá trị điện trở trong mô phỏng mạch điện của PhET, độ sáng của bóng đèn thay đổi tức thì. Thao tác này thể hiện tính chất gì của phần mềm mô phỏng?',
      'options': [
        'Tính tương tác và phản hồi trực quan theo thời gian thực',
        'Tính bảo mật thông tin',
        'Tính phức tạp về thuật toán',
        'Tính tĩnh lặng không biến đổi'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 26): Tính tương tác hai chiều: người học can thiệp thông số và hệ thống phản hồi kết quả trực quan lập tức.',
      'hint': 'Tương tác trực quan và phản hồi tức thời.'
    },
    {
      'id': 'tin9-b5-mc6',
      'type': 'multiple_choice',
      'question': 'Hạn chế lớn nhất của việc quá lạm dụng phần mềm mô phỏng mà không thực hành trong phòng thí nghiệm thật là gì?',
      'options': [
        'Học sinh bị thiếu hụt các kĩ năng thao tác thực tế bằng tay (như cầm ống nghiệm, đo đạc dụng cụ)',
        'Làm tốn nhiều tiền điện',
        'Máy tính bị mờ màn hình',
        'Học sinh bị giảm thị lực'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 26): Mô phỏng không thể rèn luyện hoàn toàn các kĩ năng thao tác khéo léo và cảm nhận thực tế của tay chân trong phòng thí nghiệm.',
      'hint': 'Thiếu rèn luyện kĩ năng thao tác thực tế.'
    },
    {
      'id': 'tin9-b5-mc7',
      'type': 'multiple_choice',
      'question': 'Các kĩ sư chế tạo ô tô thường dùng phần mềm mô phỏng va chạm (Crash Test Simulation) trước khi sản xuất hàng loạt nhằm mục đích gì?',
      'options': [
        'Đánh giá mức độ an toàn cho hành khách và tiết kiệm hàng triệu đô la chi phí phá hủy xe thật',
        'Để chụp ảnh quảng cáo xe',
        'Để tăng giá thành xe lên cao',
        'Để xe chạy nhanh hơn trên đường cao tốc'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 25): Mô phỏng va chạm giúp kiểm tra khung xe, túi khí và hấp thụ lực va đập mà không cần phá hủy xe thật hàng trăm lần.',
      'hint': 'Đánh giá an toàn và tiết kiệm chi phí thử nghiệm thực tế.'
    }
  ]
}

if __name__ == '__main__':
    print("Grade 9 Part 1 ready.")
    for k, v in GRADE9_P1.items():
        print(f"  {k}: {len(v)} câu")
