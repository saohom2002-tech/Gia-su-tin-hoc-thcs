# -*- coding: utf-8 -*-
"""
Grade 9 - Part 2: Lessons 6 to 11a (SGK Tin học 9 KNTT)
Mỗi bài 10-11 câu gồm: multiple_choice, true_false, fill_blank, matching.
"""

GRADE9_P2 = {
  'tin9-bai-6': [
    {
      'id': 'tin9-b6-mc1',
      'type': 'multiple_choice',
      'question': 'Khi thực hành với phần mềm mô phỏng hệ thống năng lượng (như Energy Skate Park trên PhET), ta có thể quan sát sự chuyển hóa qua lại giữa các dạng năng lượng nào?',
      'options': [
        'Động năng, thế năng hấp dẫn và nhiệt năng',
        'Năng lượng hạt nhân và hóa năng',
        'Năng lượng gió và năng lượng thủy triều',
        'Năng lượng âm thanh và năng lượng ánh sáng'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 28): Mô phỏng trượt ván minh họa định luật bảo toàn năng lượng: thế năng chuyển hóa thành động năng và một phần thành nhiệt năng do ma sát.',
      'hint': 'Thế năng, động năng và nhiệt năng.'
    },
    {
      'id': 'tin9-b6-mc2',
      'type': 'multiple_choice',
      'question': 'Trong mô phỏng mạch điện trực tuyến, nếu mắc thêm một điện trở nối tiếp vào mạch kín, cường độ dòng điện trong mạch sẽ biến đổi như thế nào?',
      'options': [
        'Cường độ dòng điện giảm đi (đèn sáng yếu hơn)',
        'Cường độ dòng điện tăng vọt gấp đôi',
        'Cường độ dòng điện không hề thay đổi',
        'Mạch điện phát nổ ngay lập tức'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 29): Theo định luật Ôm `I = U / R`, khi điện trở tổng tăng thì cường độ dòng điện trong mạch sẽ giảm xuống.',
      'hint': 'Điện trở tăng cản trở dòng điện làm dòng điện giảm.'
    },
    {
      'id': 'tin9-b6-mc3',
      'type': 'multiple_choice',
      'question': 'Để lưu lại kết quả một lần thử nghiệm mô phỏng trên máy tính làm tư liệu báo cáo, em nên dùng thao tác nào?',
      'options': [
        'Chụp ảnh màn hình (Screenshot / Phím PrtSc) hoặc quay video màn hình',
        'Tắt máy tính đột ngột bằng nút nguồn',
        'Rút dây cáp màn hình',
        'Dùng bút dạ vẽ trực tiếp lên mặt kính màn hình'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 30): Chụp ảnh màn hình (PrtScn hoặc Snipping Tool) là cách lưu giữ số liệu và biểu đồ trực quan nhanh nhất.',
      'hint': 'Chụp ảnh màn hình Screenshot.'
    },
    {
      'id': 'tin9-b6-mc4',
      'type': 'multiple_choice',
      'question': 'Một trong những ưu điểm lớn khi học giải phẫu thực vật qua mô phỏng 3D là gì?',
      'options': [
        'Có thể phóng to, xoay 360 độ và bóc tách từng lớp tế bào mà không làm hỏng mẫu vật thật',
        'Ngửi thấy mùi thơm của hoa quả thật qua màn hình',
        'Được ăn thử quả của cây mô phỏng',
        'Không cần mở máy tính vẫn học được'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 31): Mô hình 3D cho phép tương tác đa chiều, xoay lật phóng to chi tiết tế bào siêu nhỏ.',
      'hint': 'Phóng to và xoay 360 độ bóc tách từng lớp tế bào.'
    },
    {
      'id': 'tin9-b6-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các thao tác thực hành khai thác phần mềm mô phỏng:',
      'options': [
        'a) Nên ghi chép lại các giá trị đầu vào và kết quả đầu ra tương ứng vào bảng số liệu',
        'b) Có thể thử nghiệm với các giá trị cực đoan (rất lớn hoặc bằng 0) để kiểm tra tính ổn định của mô hình',
        'c) Không cần đọc hướng dẫn sử dụng trước khi điều khiển các nút bấm mô phỏng',
        'd) Phần mềm mô phỏng cho phép lặp lại thí nghiệm vô số lần với cùng điều kiện kiểm soát'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Đọc kĩ quy ước và thanh trượt điều khiển trước khi thao tác giúp tránh sai sót và hiểu đúng bản chất mô phỏng.',
      'hint': 'Cần đọc kĩ hướng dẫn trước khi tiến hành thí nghiệm mô phỏng.'
    },
    {
      'id': 'tin9-b6-fb1',
      'type': 'fill_blank',
      'question': 'Khi tiến hành thí nghiệm mô phỏng, người học sử dụng các thanh [1] để thay đổi thông số và quan sát sự biến đổi [2] trên màn hình.',
      'blankAnswers': ['trượt (Sliders)', 'đồ thị / hình ảnh'],
      'wordBank': ['trượt (Sliders)', 'đồ thị / hình ảnh', 'thước kẻ gỗ', 'nút nguồn', 'bàn phím số', 'mã nhị phân'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 28): Thanh trượt (Slider) là công cụ điều khiển thông số trực quan phổ biến nhất trong các phần mềm mô phỏng.',
      'hint': 'Thanh trượt (Slider) để điều chỉnh thông số.'
    },
    {
      'id': 'tin9-b6-m1',
      'type': 'matching',
      'question': 'Nối công cụ trong mô phỏng mạch điện PhET ở cột bên trái với chức năng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Vôn kế (Voltmeter)'},
        {'id': '2', 'text': 'Ampe kế (Ammeter)'},
        {'id': '3', 'text': 'Pin (Nguồn điện)'},
        {'id': '4', 'text': 'Khóa K (Công tắc)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Cung cấp hiệu điện thế cho mạch hoạt động'},
        {'id': 'b', 'text': 'Đóng hoặc ngắt dòng điện trong mạch'},
        {'id': 'c', 'text': 'Đo hiệu điện thế giữa hai điểm trong mạch'},
        {'id': 'd', 'text': 'Đo cường độ dòng điện chạy qua dây dẫn'}
      ],
      'correctMatches': {'1': 'c', '2': 'd', '3': 'a', '4': 'b'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 29): Các linh kiện cơ bản trong mô phỏng lắp ráp mạch điện ảo.',
      'hint': 'Vôn kế đo hiệu điện thế; Ampe kế đo cường độ; Pin là nguồn; Khóa K ngắt mở mạch.'
    },
    {
      'id': 'tin9-b6-mc5',
      'type': 'multiple_choice',
      'question': 'Khi mô phỏng hiện tượng rơi tự do trong chân không (không có lực cản không khí), một chiếc lông vũ và một quả bi sắt sẽ rơi như thế nào?',
      'options': [
        'Cả hai chạm đất cùng một lúc với cùng gia tốc rơi',
        'Quả bi sắt luôn chạm đất trước vì nặng hơn',
        'Chiếc lông vũ bay ngược lên trời',
        'Chiếc lông vũ bốc cháy do ma sát'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 28): Thí nghiệm nổi tiếng của Galileo: trong chân không không có ma sát, mọi vật đều rơi với cùng một gia tốc trọng trường g.',
      'hint': 'Trong chân không mọi vật rơi với cùng gia tốc.'
    },
    {
      'id': 'tin9-b6-mc6',
      'type': 'multiple_choice',
      'question': 'Để so sánh dữ liệu thực tế đo được ngoài đời với dữ liệu tính toán từ mô phỏng, phương tiện nào sau đây là trực quan nhất?',
      'options': [
        'Vẽ hai đường đồ thị trên cùng một hệ trục tọa độ để quan sát độ lệch',
        'Viết một bức thư tay dài 5 trang',
        'Đọc nhẩm trong miệng',
        'Xóa một trong hai bộ số liệu đi'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 30): Đồ thị so sánh trực quan hai đường cong giúp nhận thấy ngay sai số giữa mô phỏng và thực tế.',
      'hint': 'Vẽ đồ thị so sánh hai đường biểu diễn trên cùng hệ trục.'
    },
    {
      'id': 'tin9-b6-mc7',
      'type': 'multiple_choice',
      'question': 'Thao tác "Reset" trong các phần mềm mô phỏng dùng để làm gì?',
      'options': [
        'Đưa toàn bộ thông số và thí nghiệm về trạng thái mặc định ban đầu',
        'Tắt máy tính',
        'Xóa vĩnh viễn phần mềm khỏi ổ đĩa',
        'Gửi kết quả lên Facebook'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 29): Nút Reset khôi phục toàn bộ các thông số về mặc định ban đầu để bắt đầu lượt thí nghiệm mới.',
      'hint': 'Reset là đưa về trạng thái ban đầu.'
    }
  ],

  'tin9-bai-7': [
    {
      'id': 'tin9-b7-mc1',
      'type': 'multiple_choice',
      'question': 'Khi trình bày thông tin để trao đổi và hợp tác trong nhóm, yếu tố nào quan trọng nhất quyết định sự thành công?',
      'options': [
        'Thông tin rõ ràng, cô đọng, có cấu trúc logic và phương tiện trực quan hỗ trợ',
        'Nói càng nhanh và càng to càng tốt để không ai phản bác được',
        'Dùng nhiều thuật ngữ tiếng nước ngoài khó hiểu',
        'Chỉ một người nói và không cho các thành viên khác đóng góp ý kiến'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 33): Giao tiếp hiệu quả đòi hỏi thông tin khúc chiết, cấu trúc mạch lạc, hình ảnh hỗ trợ và tinh thần lắng nghe hai chiều.',
      'hint': 'Rõ ràng, cô đọng, logic và có hình ảnh trực quan.'
    },
    {
      'id': 'tin9-b7-mc2',
      'type': 'multiple_choice',
      'question': 'Sơ đồ tư duy (Mindmap) đặc biệt hữu ích trong giai đoạn nào của quá trình làm việc nhóm?',
      'options': [
        'Giai đoạn động não (Brainstorming) để phát triển ý tưởng và phân công công việc',
        'Giai đoạn đóng gói sản phẩm giao cho khách hàng',
        'Giai đoạn kí hợp đồng trả tiền',
        'Giai đoạn thanh lí máy tính'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 34): Sơ đồ tư duy kích thích tư duy liên kết, thu thập ý tưởng nhanh từ các thành viên trong buổi thảo luận.',
      'hint': 'Động não (Brainstorming) để tổng hợp ý tưởng.'
    },
    {
      'id': 'tin9-b7-mc3',
      'type': 'multiple_choice',
      'question': 'Để báo cáo tiến độ thực hiện dự án của từng thành viên trong nhóm, công cụ trực quan nào sau đây là phù hợp nhất?',
      'options': [
        'Bảng tiến độ dạng biểu đồ Gantt (Gantt Chart) hoặc bảng Kanban',
        'Một bức vẽ chân dung bằng màu nước',
        'Một tệp ghi âm giọng nói dài 2 tiếng',
        'Một danh sách số điện thoại'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 35): Biểu đồ Gantt hoặc bảng Kanban (To Do, In Progress, Done) giúp theo dõi tiến độ công việc trực quan.',
      'hint': 'Biểu đồ Gantt hoặc bảng theo dõi Kanban.'
    },
    {
      'id': 'tin9-b7-mc4',
      'type': 'multiple_choice',
      'question': 'Khi thuyết trình trước lớp, người trình bày nên duy trì giao tiếp mắt (Eye contact) với khán giả như thế nào?',
      'options': [
        'Nhìn bao quát khắp phòng học, tương tác ánh mắt tự nhiên với mọi người',
        'Chỉ nhìn chằm chằm vào màn hình máy tính hoặc màn chiếu từ đầu đến cuối',
        'Nhắm tịt mắt lại khi nói để đỡ run',
        'Chỉ nhìn lên trần nhà hoặc sàn nhà'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 36): Eye contact tạo sự gắn kết, tôn trọng khán giả và giúp người thuyết trình điều chỉnh bài nói theo cảm xúc người nghe.',
      'hint': 'Giao tiếp mắt tự nhiên và bao quát khắp khán phòng.'
    },
    {
      'id': 'tin9-b7-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các nguyên tắc giao tiếp và hợp tác trong môi trường số:',
      'options': [
        'a) Lắng nghe tích cực và tôn trọng ý kiến phản biện của bạn bè giúp hoàn thiện sản phẩm chung',
        'b) Trong văn bản gửi nhóm, viết hoa toàn bộ TẤT CẢ CÁC TỪ được coi là hành vi lịch sự',
        'c) Sử dụng công cụ chia sẻ đám mây giúp các thành viên cùng chỉnh sửa một tài liệu theo thời gian thực',
        'd) Cần thống nhất quy ước đặt tên tệp và cấu trúc thư mục trước khi bắt đầu dự án nhóm'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Viết hoa toàn bộ (CAPS LOCK) trên không gian mạng bị coi là hành vi "hét vào mặt người khác", rất mất lịch sự.',
      'hint': 'Viết hoa toàn bộ từ ngữ trên mạng bị coi là to tiếng, bất lịch sự.'
    },
    {
      'id': 'tin9-b7-fb1',
      'type': 'fill_blank',
      'question': 'Để trao đổi và hợp tác trực tuyến hiệu quả, các thành viên cần thống nhất mục tiêu chung, phân công công việc [1] và sử dụng các công cụ [2] hỗ trợ.',
      'blankAnswers': ['rõ ràng', 'điện toán đám mây'],
      'wordBank': ['rõ ràng', 'điện toán đám mây', 'mập mờ', 'thủ công', 'ngẫu nhiên', 'bảo thủ'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 33): Phân công trách nhiệm rõ ràng kết hợp nền tảng đám mây tạo nên sức mạnh nhóm.',
      'hint': 'Phân công rõ ràng và ứng dụng công nghệ đám mây.'
    },
    {
      'id': 'tin9-b7-m1',
      'type': 'matching',
      'question': 'Nối công cụ trực tuyến ở cột bên trái với mục đích hợp tác phù hợp ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Google Slides / Canva'},
        {'id': '2', 'text': 'Google Drive / OneDrive'},
        {'id': '3', 'text': 'Trello / Notion'},
        {'id': '4', 'text': 'Google Meet / Zoom'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Quản lí phân công nhiệm vụ và tiến độ dự án nhóm'},
        {'id': 'b', 'text': 'Lưu trữ và chia sẻ kho tệp tin dữ liệu chung của nhóm'},
        {'id': 'c', 'text': 'Cùng nhau thiết kế bài trình chiếu báo cáo dự án'},
        {'id': 'd', 'text': 'Họp trực tuyến trao đổi ý kiến từ xa có âm thanh và hình ảnh'}
      ],
      'correctMatches': {'1': 'c', '2': 'b', '3': 'a', '4': 'd'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 34, 35): Hệ sinh thái công cụ hỗ trợ cộng tác làm việc nhóm thời đại số.',
      'hint': 'Nối công cụ với chức năng hỗ trợ làm việc nhóm.'
    },
    {
      'id': 'tin9-b7-mc5',
      'type': 'multiple_choice',
      'question': 'Khi nhận được ý kiến đóng góp trái chiều từ thành viên khác trong nhóm, thái độ chuẩn mực nhất là gì?',
      'options': [
        'Bình tĩnh lắng nghe, phân tích các điểm hợp lí và cùng nhau thảo luận tìm giải pháp tối ưu',
        'Rời ngay khỏi nhóm chat và không thèm nói chuyện nữa',
        'Xóa toàn bộ bài làm của bạn đó',
        'Lập tức lớn tiếng chỉ trích bạn'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 36): Tinh thần cởi mở, lắng nghe phản biện trên tinh thần xây dựng là cốt lõi của kĩ năng hợp tác thế kỉ 21.',
      'hint': 'Bình tĩnh lắng nghe và cùng phân tích xây dựng.'
    },
    {
      'id': 'tin9-b7-mc6',
      'type': 'multiple_choice',
      'question': 'Một bài thuyết trình đạt chuẩn về mặt trực quan cần tránh điều nào sau đây?',
      'options': [
        'Dày đặc chữ, các đoạn văn bản quá dài và phông chữ quá nhỏ khó đọc',
        'Sử dụng biểu đồ để minh họa số liệu',
        'Hình ảnh minh họa có độ phân giải cao',
        'Màu sắc tương phản rõ ràng giữa chữ và nền'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 36): Tránh nhồi nhét văn bản quá dài lên slide; người nghe sẽ mải đọc chữ mà không chú ý đến lời thuyết trình.',
      'hint': 'Tránh slide quá nhiều chữ và chữ quá nhỏ.'
    },
    {
      'id': 'tin9-b7-mc7',
      'type': 'multiple_choice',
      'question': 'Tính năng "Lịch sử phiên bản" (Version History) trên các tài liệu đám mây mang lại lợi ích to lớn gì cho làm việc nhóm?',
      'options': [
        'Biết rõ ai đã chỉnh sửa nội dung gì vào lúc nào và có thể khôi phục lại bản cũ nếu bị xóa nhầm',
        'Tự động chấm điểm bài làm của từng bạn',
        'Tăng dung lượng pin cho máy tính',
        'Gửi tin nhắn chúc mừng sinh nhật tự động'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 35): Version History giúp kiểm soát lịch sử biên tập, xem đóng góp của từng cá nhân và khôi phục dữ liệu an toàn.',
      'hint': 'Xem lịch sử chỉnh sửa và khôi phục lại phiên bản cũ.'
    }
  ],

  'tin9-bai-8': [
    {
      'id': 'tin9-b8-mc1',
      'type': 'multiple_choice',
      'question': 'Khi chia sẻ một tệp tin trên Google Drive, quyền "Người nhận xét" (Commenter) cho phép người nhận làm gì?',
      'options': [
        'Xem tài liệu và để lại các ghi chú góp ý (bình luận) nhưng không được tự ý sửa nội dung gốc',
        'Được quyền xóa vĩnh viễn tệp tin của chủ sở hữu',
        'Được toàn quyền chỉnh sửa và thay đổi nội dung văn bản',
        'Chỉ xem được tiêu đề tệp tin mà không đọc được bên trong'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 38): Phân quyền chia sẻ: Viewer (Chỉ xem), Commenter (Nhận xét/góp ý), Editor (Chỉnh sửa toàn quyền).',
      'hint': 'Commenter chỉ được nhận xét góp ý, không sửa trực tiếp.'
    },
    {
      'id': 'tin9-b8-mc2',
      'type': 'multiple_choice',
      'question': 'Để thu thập ý kiến đăng kí tham gia câu lạc bộ Tin học của các bạn học sinh trong trường, công cụ trực tuyến nào sau đây là tối ưu nhất?',
      'options': [
        'Google Biểu mẫu (Google Forms)',
        'Google Dịch (Google Translate)',
        'Phần mềm máy tính Calculator',
        'Google Bản đồ (Google Maps)'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 39): Google Forms là công cụ chuyên dụng để tạo khảo sát, bảng đăng kí và tự động xuất dữ liệu ra Google Sheets.',
      'hint': 'Google Forms chuyên dùng để tạo mẫu đăng kí và khảo sát.'
    },
    {
      'id': 'tin9-b8-mc3',
      'type': 'multiple_choice',
      'question': 'Dữ liệu phản hồi thu thập được từ Google Forms có thể tự động liên kết và xuất ra ứng dụng nào để tính toán và vẽ biểu đồ?',
      'options': [
        'Google Trang tính (Google Sheets)',
        'Phần mềm gõ Unikey',
        'Trình phát nhạc Windows Media Player',
        'Phần mềm vẽ Paint'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 40): Google Forms tự động đồng bộ mọi câu trả lời vào Google Sheets theo thời gian thực.',
      'hint': 'Tự động đồng bộ vào Google Sheets (bảng tính trực tuyến).'
    },
    {
      'id': 'tin9-b8-mc4',
      'type': 'multiple_choice',
      'question': 'Khi tạo câu hỏi trong Google Forms, dạng câu hỏi nào cho phép người trả lời chọn NHIỀU ĐÁP ÁN cùng một lúc?',
      'options': [
        'Hộp kiểm (Checkboxes)',
        'Trắc nghiệm (Multiple choice)',
        'Trả lời ngắn (Short answer)',
        'Đoạn (Paragraph)'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 39): Multiple choice hình tròn chỉ chọn được 1; Checkboxes (Hộp kiểm) hình vuông cho phép chọn nhiều lựa chọn.',
      'hint': 'Hộp kiểm Checkboxes cho phép chọn nhiều đáp án.'
    },
    {
      'id': 'tin9-b8-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các thao tác sử dụng công cụ trực tuyến Google Forms và Google Drive:',
      'options': [
        'a) Ta có thể cài đặt câu hỏi bắt buộc (Required) để người trả lời không bỏ sót thông tin quan trọng',
        'b) Khi chia sẻ liên kết Google Forms cho mọi người trả lời, phải cấp quyền "Chỉnh sửa" (Editor) cho tất cả',
        'c) Google Forms tự động vẽ sẵn các biểu đồ tròn, biểu đồ cột tổng kết câu trả lời ở tab "Câu trả lời"',
        'd) Có thể chèn hình ảnh hoặc video minh họa vào câu hỏi trong Google Forms'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Người trả lời chỉ điền vào biểu mẫu qua link xem, tuyệt đối KHÔNG cấp quyền Editor vì họ sẽ sửa mất cấu trúc đề.',
      'hint': 'Người làm khảo sát chỉ cần quyền gửi câu trả lời, không cần quyền Editor.'
    },
    {
      'id': 'tin9-b8-fb1',
      'type': 'fill_blank',
      'question': 'Trong Google Forms, để bắt buộc người dùng phải trả lời một câu hỏi trước khi gửi biểu mẫu, ta bật nút gạt [1], còn để xem kết quả tổng hợp ta chuyển sang thẻ [2].',
      'blankAnswers': ['Bắt buộc (Required)', 'Câu trả lời (Responses)'],
      'wordBank': ['Bắt buộc (Required)', 'Câu trả lời (Responses)', 'Tự động', 'Cài đặt', 'Xem trước', 'Xóa bỏ'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 39, 40): Nút Required bắt buộc trả lời; thẻ Responses hiển thị toàn bộ kết quả khảo sát.',
      'hint': 'Required là bắt buộc, Responses là câu trả lời.'
    },
    {
      'id': 'tin9-b8-m1',
      'type': 'matching',
      'question': 'Nối loại câu hỏi trong Google Forms ở cột bên trái với mục đích sử dụng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Trả lời ngắn (Short answer)'},
        {'id': '2', 'text': 'Trắc nghiệm (Multiple choice)'},
        {'id': '3', 'text': 'Hộp kiểm (Checkboxes)'},
        {'id': '4', 'text': 'Menu thả xuống (Dropdown)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Chọn một phương án duy nhất trong danh sách rất dài (ví dụ chọn Tỉnh/Thành phố)'},
        {'id': 'b', 'text': 'Điền họ và tên hoặc số điện thoại cá nhân'},
        {'id': 'c', 'text': 'Chọn nhiều sở thích cá nhân (bóng đá, đọc sách, nghe nhạc...)'},
        {'id': 'd', 'text': 'Chọn giới tính Nam hoặc Nữ (chỉ chọn đúng một phương án)'}
      ],
      'correctMatches': {'1': 'b', '2': 'd', '3': 'c', '4': 'a'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 39): Các kiểu dữ liệu đầu vào thông minh của Google Forms.',
      'hint': 'Short answer: điền tên; Multiple choice: 1 đáp án; Checkbox: nhiều đáp án; Dropdown: danh sách dài.'
    },
    {
      'id': 'tin9-b8-mc5',
      'type': 'multiple_choice',
      'question': 'Tính năng "Rút ngắn URL" (Shorten URL) khi tạo link gửi Google Forms mang lại tiện ích gì?',
      'options': [
        'Đường dẫn liên kết ngắn gọn, đẹp mắt, dễ chép và dễ chia sẻ qua tin nhắn Zalo, SMS',
        'Tăng tốc độ làm bài của người trả lời',
        'Bảo vệ tệp khỏi virus máy tính',
        'Đổi ngôn ngữ biểu mẫu sang tiếng Anh'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 40): Đường dẫn ngắn giúp người nhận dễ thao tác, không bị gãy link khi gửi qua mạng xã hội.',
      'hint': 'Đường dẫn liên kết ngắn gọn, dễ gửi qua tin nhắn.'
    },
    {
      'id': 'tin9-b8-mc6',
      'type': 'multiple_choice',
      'question': 'Để ngăn chặn một người gửi câu trả lời khảo sát nhiều lần trong Google Forms, người khảo sát có thể bật tính năng nào trong phần Cài đặt?',
      'options': [
        'Giới hạn ở 1 lần trả lời (Yêu cầu đăng nhập tài khoản Google)',
        'Tắt màn hình sau 5 phút',
        'Đổi mật khẩu tài khoản Google Drive',
        'Xóa tệp biểu mẫu'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 41): "Limit to 1 response" yêu cầu người tham gia đăng nhập Gmail và mỗi tài khoản chỉ được nộp bài đúng 1 lần.',
      'hint': 'Giới hạn ở 1 lần trả lời (Limit to 1 response).'
    },
    {
      'id': 'tin9-b8-mc7',
      'type': 'multiple_choice',
      'question': 'Khi làm việc nhóm trên Google Docs, nếu em muốn đề xuất chỉnh sửa một câu văn mà không làm mất câu gốc của bạn, em nên dùng chế độ nào?',
      'options': [
        'Chế độ Đề xuất (Suggesting mode)',
        'Chế độ Chỉnh sửa trực tiếp (Editing mode)',
        'Chế độ Xem (Viewing mode)',
        'Chế độ Ngoại tuyến (Offline mode)'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 38): Chế độ Đề xuất (Suggesting) hiển thị phần sửa dưới dạng gợi ý để chủ tài liệu duyệt (Accept) hoặc từ chối (Reject).',
      'hint': 'Chế độ Đề xuất (Suggesting) trong Google Docs.'
    }
  ],

  'tin9-bai-9a': [
    {
      'id': 'tin9-b9a-mc1',
      'type': 'multiple_choice',
      'question': 'Mục đích chính của công cụ Xác thực dữ liệu (Data Validation) trong phần mềm bảng tính là gì?',
      'options': [
        'Kiểm soát và giới hạn dữ liệu nhập vào ô, ngăn ngừa lỗi gõ nhầm dữ liệu không hợp lệ',
        'Tự động tăng tốc độ tính toán của CPU máy tính',
        'Xóa sạch các ô trống trong bảng tính',
        'Mã hóa bảng tính thành mã nhị phân'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 44): Data Validation thiết lập các quy tắc ràng buộc để người dùng chỉ được nhập dữ liệu thỏa mãn điều kiện.',
      'hint': 'Kiểm soát tính hợp lệ của dữ liệu nhập vào ô tính.'
    },
    {
      'id': 'tin9-b9a-mc2',
      'type': 'multiple_choice',
      'question': 'Để mở hộp thoại Data Validation trong Excel, ta chọn dải lệnh nào?',
      'options': [
        'Dải lệnh Data -> nhóm Data Tools -> Data Validation',
        'Dải lệnh Home -> nhóm Font',
        'Dải lệnh Insert -> nhóm Charts',
        'Dải lệnh View -> nhóm Zoom'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 44): Data Validation nằm trong dải lệnh Data -> nhóm Data Tools.',
      'hint': 'Dải lệnh Data liên quan đến quản lí dữ liệu.'
    },
    {
      'id': 'tin9-b9a-mc3',
      'type': 'multiple_choice',
      'question': 'Để quy định cột "Điểm kiểm tra" chỉ được phép nhập số thực từ 0 đến 10, trong thẻ Settings của Data Validation ta thiết lập như thế nào?',
      'options': [
        'Allow: Decimal; Data: between; Minimum: 0; Maximum: 10',
        'Allow: Whole number; Data: equal to; Value: 10',
        'Allow: Text length; Data: between; Minimum: 0; Maximum: 10',
        'Allow: Date; Data: between; Minimum: 0; Maximum: 10'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 45): Điểm số có thể có số lẻ (như 8.5) nên chọn Decimal (số thập phân) trong khoảng between từ 0 đến 10.',
      'hint': 'Điểm số có phần thập phân nên chọn Decimal trong khoảng 0 đến 10.'
    },
    {
      'id': 'tin9-b9a-mc4',
      'type': 'multiple_choice',
      'question': 'Để tạo một danh sách lựa chọn thả xuống (Dropdown List) chứa các mục: "Nam, Nữ", trong mục Allow ta chọn tùy chọn nào?',
      'options': [
        'Tùy chọn List',
        'Tùy chọn Whole number',
        'Tùy chọn Date',
        'Tùy chọn Custom'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 45): Chọn Allow: List và điền `Nam, Nữ` vào ô Source để tạo danh sách chọn tiện lợi.',
      'hint': 'List dùng để tạo danh sách chọn thả xuống.'
    },
    {
      'id': 'tin9-b9a-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về công cụ Data Validation:',
      'options': [
        'a) Thẻ "Input Message" dùng để hiển thị hộp thoại hướng dẫn người dùng khi họ nhấp chuột vào ô tính',
        'b) Thẻ "Error Alert" hiển thị thông báo lỗi cảnh báo khi người dùng cố tình nhập dữ liệu sai quy định',
        'c) Sau khi đã thiết lập Data Validation thì không thể chỉnh sửa hoặc gỡ bỏ được nữa',
        'd) Công cụ Data Validation giúp đảm bảo tính nhất quán và chính xác của dữ liệu trong toàn bảng'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 46): Người dùng hoàn toàn có thể chọn ô và nhấn nút "Clear All" trong Data Validation để gỡ bỏ quy tắc bất kì lúc nào.',
      'hint': 'Data Validation có thể gỡ bỏ dễ dàng bằng nút Clear All.'
    },
    {
      'id': 'tin9-b9a-fb1',
      'type': 'fill_blank',
      'question': 'Trong hộp thoại Data Validation, thẻ [1] dùng để hiển thị gợi ý khi chọn ô, còn thẻ [2] dùng để bật cảnh báo khi người dùng nhập sai quy định.',
      'blankAnswers': ['Input Message', 'Error Alert'],
      'wordBank': ['Input Message', 'Error Alert', 'Settings', 'Formula', 'Data Tools', 'Format'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 46): Input Message là lời nhắc nhập liệu; Error Alert là cảnh báo khi nhập sai.',
      'hint': 'Input Message hiển thị hướng dẫn; Error Alert bật khi lỗi.'
    },
    {
      'id': 'tin9-b9a-m1',
      'type': 'matching',
      'question': 'Nối kiểu dữ liệu ràng buộc trong mục Allow ở cột bên trái với trường hợp áp dụng phù hợp ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Whole number (Số nguyên)'},
        {'id': '2', 'text': 'Decimal (Số thập phân)'},
        {'id': '3', 'text': 'List (Danh sách)'},
        {'id': '4', 'text': 'Text length (Độ dài chuỗi)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Giới hạn số lượng học sinh trong một lớp phải là số nguyên dương'},
        {'id': 'b', 'text': 'Giới hạn mã căn cước công dân phải nhập đúng chính xác 12 kí tự'},
        {'id': 'c', 'text': 'Điểm kiểm tra trung bình môn học có thể có số thập phân lẻ'},
        {'id': 'd', 'text': 'Tạo danh sách cố định để chọn xếp loại: Giỏi, Khá, Đạt, Chưa đạt'}
      ],
      'correctMatches': {'1': 'a', '2': 'c', '3': 'd', '4': 'b'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 45): Ứng dụng thực tế phong phú của từng kiểu xác thực dữ liệu.',
      'hint': 'Whole number: số nguyên; Decimal: số thập phân; List: danh sách chọn; Text length: độ dài kí tự.'
    },
    {
      'id': 'tin9-b9a-mc5',
      'type': 'multiple_choice',
      'question': 'Kiểu cảnh báo lỗi (Style) nào trong thẻ Error Alert sẽ NGĂN CHẶN HOÀN TOÀN không cho phép người dùng nhập dữ liệu sai vào ô?',
      'options': [
        'Stop (biểu tượng dấu X đỏ)',
        'Warning (biểu tượng tam giác vàng)',
        'Information (biểu tượng chữ i xanh)',
        'Ignore'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 9 KNTT (Trang 46): Kiểu "Stop" bắt buộc phải sửa lại cho đúng mới được tiếp tục. "Warning" và "Information" chỉ nhắc nhở nhưng vẫn cho phép nhập sai.',
      'hint': 'Biểu tượng dấu X đỏ Stop chặn tuyệt đối dữ liệu sai.'
    },
    {
      'id': 'tin9-b9a-mc6',
      'type': 'multiple_choice',
      'question': 'Trong mục Source của Allow: List, các phần tử trong danh sách được phân cách với nhau bằng dấu gì (tùy theo cài đặt vùng của máy)?',
      'options': [
        'Dấu phẩy (,) hoặc dấu chấm phẩy (;)',
        'Dấu chấm (.)',
        'Dấu gạch chéo (/)',
        'Khoảng trắng (Space)'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 45): Các mục trong List ngăn cách bởi dấu phẩy `,` hoặc chấm phẩy `;` (ví dụ: `Hà Nội, Đà Nẵng, TP.HCM`).',
      'hint': 'Phân cách bằng dấu phẩy hoặc chấm phẩy.'
    },
    {
      'id': 'tin9-b9a-mc7',
      'type': 'multiple_choice',
      'question': 'Để tìm nhanh tất cả các ô trong bảng tính đang vi phạm quy tắc xác thực dữ liệu đã cài đặt, ta dùng lệnh nào trong dải lệnh Data?',
      'options': [
        'Circle Invalid Data',
        'Clear Validation Circles',
        'Sort Ascending',
        'Remove Duplicates'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 9 KNTT (Trang 46): Lệnh Circle Invalid Data sẽ tự động khoanh tròn đỏ xung quanh các ô chứa dữ liệu sai quy tắc.',
      'hint': 'Circle Invalid Data khoanh tròn các ô dữ liệu không hợp lệ.'
    }
  ],

  'tin9-bai-10a': [
    {
      'id': 'tin9-b10a-mc1',
      'type': 'multiple_choice',
      'question': 'Cú pháp chuẩn của hàm đếm có điều kiện COUNTIF trong bảng tính Excel là gì?',
      'options': [
        '=COUNTIF(range, criteria)',
        '=COUNTIF(criteria, range)',
        '=COUNTIF(range, sum_range, criteria)',
        '=COUNTIF(value1, value2)'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 48): Cú pháp hàm `=COUNTIF(range, criteria)` với `range` là vùng dữ liệu cần đếm và `criteria` là điều kiện đếm.',
      'hint': 'Range (vùng đếm) đứng trước, Criteria (điều kiện) đứng sau.'
    },
    {
      'id': 'tin9-b10a-mc2',
      'type': 'multiple_choice',
      'question': 'Để đếm số lượng học sinh đạt điểm Giỏi (từ 8.0 trở lên) trong cột điểm từ C2 đến C40, công thức nào sau đây là ĐÚNG?',
      'options': [
        '=COUNTIF(C2:C40, ">=8.0")',
        '=COUNTIF(C2:C40, >=8.0)',
        '=COUNTIF(">=8.0", C2:C40)',
        '=COUNT(C2:C40, ">=8.0")'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 48): Điều kiện so sánh có chứa dấu phép toán `>=` bắt buộc phải đặt trong cặp dấu ngoặc kép `">=8.0"`.',
      'hint': 'Điều kiện so sánh toán học phải đặt trong cặp dấu nháy kép.'
    },
    {
      'id': 'tin9-b10a-mc3',
      'type': 'multiple_choice',
      'question': 'Để đếm số lượng học sinh có giới tính là "Nữ" trong vùng từ D2 đến D35, công thức nào sau đây là chuẩn xác?',
      'options': [
        '=COUNTIF(D2:D35, "Nữ")',
        '=COUNTIF(D2:D35, Nữ)',
        '=COUNTIF(D2:D35 = "Nữ")',
        '=SUMIF(D2:D35, "Nữ")'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 48): Tiêu chí dạng chuỗi văn bản như `"Nữ"` phải được đặt trong cặp dấu ngoặc kép.',
      'hint': 'Chuỗi văn bản Nữ phải đặt trong dấu ngoặc kép.'
    },
    {
      'id': 'tin9-b10a-mc4',
      'type': 'multiple_choice',
      'question': 'Hàm COUNT thông thường khác với hàm COUNTIF ở điểm cơ bản nào?',
      'options': [
        'Hàm COUNT đếm tất cả các ô chứa dữ liệu số, còn COUNTIF chỉ đếm các ô thỏa mãn điều kiện nhất định',
        'Hàm COUNT dùng để tính tổng các số',
        'Hàm COUNTIF không thể đếm được số',
        'Hàm COUNTIF chỉ dùng cho bảng tính dưới 10 hàng'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 48): COUNT đếm số lượng ô chứa số vô điều kiện, COUNTIF là đếm có điều kiện (IF).',
      'hint': 'COUNTIF có thêm chữ IF mang nghĩa "nếu thỏa mãn điều kiện".'
    },
    {
      'id': 'tin9-b10a-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về hàm COUNTIF trong Excel:',
      'options': [
        'a) Hàm COUNTIF không phân biệt chữ hoa chữ thường trong điều kiện chuỗi (ví dụ "nam" và "Nam" là như nhau)',
        'b) Kí tự đại diện dấu sao (*) trong điều kiện biểu thị cho một chuỗi kí tự bất kì',
        'c) Tham số range trong hàm COUNTIF có thể là các ô rời rạc không liền kề nhau',
        'd) Kết quả trả về của hàm COUNTIF luôn là một số nguyên không âm (>= 0)'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Tham số `range` của hàm COUNTIF bắt buộc phải là một vùng ô liền khối (ví dụ A1:A10), không thể là danh sách ô rời rạc.',
      'hint': 'Vùng range trong COUNTIF bắt buộc phải là khối ô liền nhau.'
    },
    {
      'id': 'tin9-b10a-fb1',
      'type': 'fill_blank',
      'question': 'Trong hàm `=COUNTIF(range, criteria)`, tham số [1] là phạm vi các ô cần kiểm tra, còn tham số [2] là tiêu chí xác định ô nào sẽ được tính vào số đếm.',
      'blankAnswers': ['range', 'criteria'],
      'wordBank': ['range', 'criteria', 'sum_range', 'average', 'logical_test', 'value'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 48): Range: vùng đếm; Criteria: điều kiện đếm.',
      'hint': 'Range là vùng, Criteria là điều kiện.'
    },
    {
      'id': 'tin9-b10a-m1',
      'type': 'matching',
      'question': 'Nối công thức COUNTIF ở cột bên trái với ý nghĩa đếm tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': '=COUNTIF(A1:A20, ">0")'},
        {'id': '2', 'text': '=COUNTIF(B1:B20, "Hà*")'},
        {'id': '3', 'text': '=COUNTIF(C1:C20, 10)'},
        {'id': '4', 'text': '=COUNTIF(D1:D20, "<>0")'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Đếm số ô có giá trị khác 0'},
        {'id': 'b', 'text': 'Đếm số ô chứa chuỗi bắt đầu bằng chữ "Hà"'},
        {'id': 'c', 'text': 'Đếm số ô chứa số dương lớn hơn 0'},
        {'id': 'd', 'text': 'Đếm số ô có giá trị đúng bằng 10'}
      ],
      'correctMatches': {'1': 'c', '2': 'b', '3': 'd', '4': 'a'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 49): Dấu `*` là kí tự đại diện, `<>` là phép so sánh khác.',
      'hint': '>0 là số dương; Hà* là bắt đầu bằng Hà; <>0 là khác 0.'
    },
    {
      'id': 'tin9-b10a-mc5',
      'type': 'multiple_choice',
      'question': 'Cho bảng dữ liệu cột A chứa tên thành phố. Công thức `=COUNTIF(A2:A10, "*Hà*")` sẽ đếm các ô nào?',
      'options': [
        'Tất cả các ô có chứa chữ "Hà" ở bất kì vị trí nào trong tên (ví dụ: Hà Nội, Hà Nam, Thanh Hà)',
        'Chỉ các ô có đúng 2 chữ "Hà"',
        'Chỉ các ô có chữ "Hà" ở cuối cùng',
        'Các ô không chứa chữ "Hà"'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 9 KNTT (Trang 49): Kí tự đại diện `*Hà*` khớp với mọi chuỗi chứa từ "Hà" ở đầu, giữa hoặc cuối.',
      'hint': 'Hai dấu sao bao quanh chữ biểu thị chuỗi chứa từ đó ở mọi vị trí.'
    },
    {
      'id': 'tin9-b10a-mc6',
      'type': 'multiple_choice',
      'question': 'Để đếm số ô có giá trị lớn hơn giá trị đang chứa trong ô E1, công thức nào sau đây viết đúng cú pháp nối chuỗi?',
      'options': [
        '=COUNTIF(A1:A50, ">" & E1)',
        '=COUNTIF(A1:A50, ">E1")',
        '=COUNTIF(A1:A50, >E1)',
        '=COUNTIF(A1:A50, E1 > 0)'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 9 KNTT (Trang 49): Khi tham chiếu đến ô trong điều kiện so sánh, phải dùng toán tử `&` để nối chuỗi: `">" & E1`. Viết `">E1"` sẽ bị hiểu lầm là tìm chữ "E1".',
      'hint': 'Dùng dấu và (&) để nối dấu so sánh với địa chỉ ô.'
    },
    {
      'id': 'tin9-b10a-mc7',
      'type': 'multiple_choice',
      'question': 'Nếu trong vùng kiểm tra không có bất kì ô nào thỏa mãn điều kiện đặt ra, hàm COUNTIF sẽ trả về kết quả là bao nhiêu?',
      'options': [
        'Số 0',
        'Báo lỗi #VALUE!',
        'Ô trống rỗng',
        'Số âm -1'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 48): Không có phần tử thỏa mãn thì số lượng đếm được bằng 0.',
      'hint': 'Không có phần tử nào thỏa mãn thì kết quả đếm là 0.'
    }
  ],

  'tin9-bai-11a': [
    {
      'id': 'tin9-b11a-mc1',
      'type': 'multiple_choice',
      'question': 'Cú pháp chuẩn đầy đủ của hàm tính tổng có điều kiện SUMIF trong Excel là gì?',
      'options': [
        '=SUMIF(range, criteria, [sum_range])',
        '=SUMIF(sum_range, range, criteria)',
        '=SUMIF(criteria, range, sum_range)',
        '=SUMIF(range, [sum_range])'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 51): Cú pháp chuẩn `=SUMIF(range, criteria, [sum_range])`. Trong đó `sum_range` là vùng tính tổng thực sự.',
      'hint': 'Range (vùng điều kiện) -> Criteria (điều kiện) -> Sum_range (vùng tính tổng).'
    },
    {
      'id': 'tin9-b11a-mc2',
      'type': 'multiple_choice',
      'question': 'Nếu ta bỏ qua tham số `sum_range` trong hàm SUMIF `=SUMIF(A1:A10, ">50")`, Excel sẽ tính tổng trên vùng nào?',
      'options': [
        'Chính vùng `range` A1:A10',
        'Báo lỗi #N/A',
        'Tính tổng toàn bộ bảng tính',
        'Trả về kết quả bằng 0'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 51): Khi bỏ qua `sum_range`, Excel sẽ mặc định lấy chính vùng `range` làm vùng tính tổng.',
      'hint': 'Khi bỏ qua sum_range thì lấy chính vùng range làm vùng tính tổng.'
    },
    {
      'id': 'tin9-b11a-mc3',
      'type': 'multiple_choice',
      'question': 'Cho bảng chi tiêu: Cột A ghi tên Mặt hàng ("Vở", "Bút", "Thước"), Cột B ghi Số tiền. Để tính tổng số tiền đã mua "Vở" từ dòng 2 đến dòng 20, công thức nào đúng?',
      'options': [
        '=SUMIF(A2:A20, "Vở", B2:B20)',
        '=SUMIF(B2:B20, "Vở", A2:A20)',
        '=SUMIF(A2:A20, B2:B20, "Vở")',
        '=COUNTIF(A2:A20, "Vở")'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 51): Vùng điều kiện là tên mặt hàng A2:A20, điều kiện là "Vở", vùng tính tổng là số tiền B2:B20.',
      'hint': 'Cột mặt hàng (A) là range, "Vở" là criteria, cột tiền (B) là sum_range.'
    },
    {
      'id': 'tin9-b11a-mc4',
      'type': 'multiple_choice',
      'question': 'Sự khác nhau cơ bản giữa hàm SUM và hàm SUMIF là gì?',
      'options': [
        'Hàm SUM cộng tất cả các số trong vùng, còn hàm SUMIF chỉ cộng những ô thỏa mãn một điều kiện xác định',
        'Hàm SUM dùng cho bảng tính nhỏ, SUMIF dùng cho bảng tính lớn',
        'Hàm SUMIF không thể tính được số thập phân',
        'Hàm SUMIF chỉ dùng để đếm chứ không cộng'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 51): SUM tính tổng toàn bộ; SUMIF là tính tổng có chọn lọc theo điều kiện.',
      'hint': 'SUM tính tổng tất cả; SUMIF tính tổng có điều kiện lọc.'
    },
    {
      'id': 'tin9-b11a-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về hàm SUMIF trong bảng tính:',
      'options': [
        'a) Kích thước và hình dạng của vùng sum_range nên tương ứng với vùng range để tránh lỗi tính toán ngầm',
        'b) Các ô chứa dữ liệu dạng văn bản trong vùng sum_range sẽ được tự động bỏ qua khi tính tổng',
        'c) Hàm SUMIF có thể kết hợp nhiều điều kiện logic phức tạp như AND, OR trong cùng một câu lệnh đơn',
        'd) Ta có thể dùng kí tự đại diện `?` để thay thế cho chính xác một kí tự bất kì trong điều kiện'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Hàm SUMIF đơn chỉ kiểm tra được 1 điều kiện duy nhất. Muốn kết hợp nhiều điều kiện đồng thời phải dùng hàm SUMIFS.',
      'hint': 'Hàm SUMIF chỉ xử lí được một điều kiện đơn.'
    },
    {
      'id': 'tin9-b11a-fb1',
      'type': 'fill_blank',
      'question': 'Trong hàm SUMIF, tham số [1] chứa các giá trị điều kiện kiểm tra, còn tham số [2] chứa các giá trị số thực tế sẽ được cộng lại với nhau.',
      'blankAnswers': ['range', 'sum_range'],
      'wordBank': ['range', 'sum_range', 'criteria', 'average_range', 'test_range', 'format'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 51): Range để so khớp điều kiện; sum_range chứa số để tính tổng.',
      'hint': 'Range chứa điều kiện, sum_range chứa số tiền/số lượng để cộng.'
    },
    {
      'id': 'tin9-b11a-m1',
      'type': 'matching',
      'question': 'Nối công thức ở cột bên trái với ý nghĩa tính toán tương ứng ở cột bên phải (Cột A: Lớp, Cột B: Điểm):',
      'matchingLeft': [
        {'id': '1', 'text': '=SUM(B2:B30)'},
        {'id': '2', 'text': '=SUMIF(A2:A30, "9A", B2:B30)'},
        {'id': '3', 'text': '=SUMIF(B2:B30, ">=8")'},
        {'id': '4', 'text': '=COUNTIF(A2:A30, "9A")'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Tính tổng số điểm của tất cả các bài đạt từ 8 điểm trở lên'},
        {'id': 'b', 'text': 'Đếm số lượng học sinh thuộc lớp 9A'},
        {'id': 'c', 'text': 'Tính tổng toàn bộ điểm số của tất cả các học sinh'},
        {'id': 'd', 'text': 'Tính tổng điểm của riêng các học sinh thuộc lớp 9A'}
      ],
      'correctMatches': {'1': 'c', '2': 'd', '3': 'a', '4': 'b'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 52): Phân biệt rõ ràng giữa SUM, SUMIF và COUNTIF.',
      'hint': 'SUM là tổng tất cả; SUMIF 9A là tổng điểm lớp 9A; COUNTIF là đếm học sinh.'
    },
    {
      'id': 'tin9-b11a-mc5',
      'type': 'multiple_choice',
      'question': 'Để tính tổng tiền bán hàng của các mặt hàng bắt đầu bằng chữ "Sách" (như Sách giáo khoa, Sách bài tập), điều kiện trong SUMIF viết thế nào?',
      'options': [
        '"Sách*"',
        '"*Sách"',
        '"Sách?"',
        '"=Sách"'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 52): Kí tự đại diện `*` đặt sau chữ "Sách" đại diện cho mọi từ phía sau.',
      'hint': '"Sách*" đại diện cho mọi từ bắt đầu bằng chữ Sách.'
    },
    {
      'id': 'tin9-b11a-mc6',
      'type': 'multiple_choice',
      'question': 'Khi tính tổng các số tiền lớn hơn 1 triệu đồng trong cột E từ dòng 2 đến dòng 50, công thức nào sau đây viết ngắn gọn nhất?',
      'options': [
        '=SUMIF(E2:E50, ">1000000")',
        '=SUMIF(E2:E50, ">1000000", E2:E50)',
        'Cả hai công thức trên đều đúng và cho cùng kết quả',
        'Không thể tính được'
      ],
      'correctAnswer': 2,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 51): Cả hai đều cho kết quả chính xác, nhưng công thức 1 ngắn gọn hơn vì đã giản lược `sum_range` trùng với `range`.',
      'hint': 'Cả hai công thức đều đúng cú pháp của Excel.'
    },
    {
      'id': 'tin9-b11a-mc7',
      'type': 'multiple_choice',
      'question': 'Nếu muốn tính giá trị trung bình có điều kiện (ví dụ điểm trung bình môn của học sinh lớp 9B), ta nên sử dụng hàm nào tương đương với hàm SUMIF?',
      'options': [
        'Hàm AVERAGEIF',
        'Hàm MEDIAN',
        'Hàm MAXIF',
        'Hàm MINIF'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 53): Tương tự SUMIF, Excel cung cấp hàm AVERAGEIF có cấu trúc `=AVERAGEIF(range, criteria, [average_range])` để tính trung bình có điều kiện.',
      'hint': 'AVERAGEIF tính trung bình cộng có điều kiện.'
    }
  ]
}

if __name__ == '__main__':
    print("Grade 9 Part 2 ready.")
    for k, v in GRADE9_P2.items():
        print(f"  {k}: {len(v)} câu")
