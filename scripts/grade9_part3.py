# -*- coding: utf-8 -*-
"""
Grade 9 - Part 3: Lessons 12a to 16 (SGK Tin học 9 KNTT)
Mỗi bài 10-11 câu gồm: multiple_choice, true_false, fill_blank, matching.
"""

GRADE9_P3 = {
  'tin9-bai-12a': [
    {
      'id': 'tin9-b12a-mc1',
      'type': 'multiple_choice',
      'question': 'Cú pháp chuẩn của hàm điều kiện logic IF trong bảng tính Excel là gì?',
      'options': [
        '=IF(logical_test, [value_if_true], [value_if_false])',
        '=IF(value_if_true, logical_test, value_if_false)',
        '=IF(logical_test, criteria, sum_range)',
        '=IF(range, criteria)'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 55): Cú pháp hàm `=IF(logical_test, [value_if_true], [value_if_false])`. Nếu điều kiện Đúng trả về vế True, ngược lại trả về vế False.',
      'hint': 'Điều kiện kiểm tra -> Giá trị nếu đúng -> Giá trị nếu sai.'
    },
    {
      'id': 'tin9-b12a-mc2',
      'type': 'multiple_choice',
      'question': 'Công thức `=IF(D2>=5, "Đạt", "Chưa đạt")` sẽ trả về kết quả gì nếu ô D2 có giá trị bằng 4.5?',
      'options': [
        'Chưa đạt',
        'Đạt',
        'Báo lỗi #VALUE!',
        'Trả về số 0'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 55): Vì 4.5 >= 5 là Sai (False), nên hàm IF sẽ thực hiện nhánh thứ hai và trả về giá trị "Chưa đạt".',
      'hint': '4.5 nhỏ hơn 5 nên điều kiện là Sai -> lấy giá trị nhánh sau.'
    },
    {
      'id': 'tin9-b12a-mc3',
      'type': 'multiple_choice',
      'question': 'Trong quản lí tài chính cá nhân, quy tắc phân bổ ngân sách "50/30/20" khuyến nghị điều gì?',
      'options': [
        '50% cho nhu cầu thiết yếu, 30% cho mong muốn cá nhân, 20% cho tiết kiệm và đầu tư tương lai',
        '50% để chơi game, 30% mua đồ ăn vặt, 20% để quên',
        '50% cho bạn bè vay, 30% mua vé số, 20% mua quần áo',
        'Cả 100% đều dành cho việc tiêu xài thoải mái'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 57): Quy tắc 50/30/20 là mô hình quản lí tài chính cá nhân thông minh: 50% nhu cầu sống (ăn, ở, học), 30% sở thích, 20% tiết kiệm.',
      'hint': '50% thiết yếu, 30% mong muốn, 20% tiết kiệm dự phòng.'
    },
    {
      'id': 'tin9-b12a-mc4',
      'type': 'multiple_choice',
      'question': 'Để cảnh báo nếu tổng chi tiêu vượt quá mức ngân sách cho phép (Số_tiền_chi > Ngân_sách) thì hiện chữ "Bội chi", ngược lại hiện "Hợp lí", ta dùng công thức nào?',
      'options': [
        '=IF(Chi > NganSach, "Bội chi", "Hợp lí")',
        '=IF(Chi < NganSach, "Bội chi", "Hợp lí")',
        '=COUNTIF(Chi, "Bội chi")',
        '=SUMIF(Chi, ">" & NganSach)'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 58): Khi chi phí thực tế lớn hơn ngân sách dự kiến, điều kiện Chi > Ngân_sách là Đúng -> hiển thị "Bội chi".',
      'hint': 'Chi lớn hơn ngân sách thì cảnh báo Bội chi.'
    },
    {
      'id': 'tin9-b12a-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về hàm IF và quản lí tài chính cá nhân:',
      'options': [
        'a) Ta có thể lồng ghép nhiều hàm IF vào nhau (Nested IF) để phân loại từ 3 mức trở lên',
        'b) Việc theo dõi thu chi hàng ngày trên bảng tính giúp học sinh kiểm soát thói quen chi tiêu và hình thành tính tự lập',
        'c) Hàm IF bắt buộc phải luôn trả về dữ liệu dạng số, không thể trả về văn bản',
        'd) Trong hàm IF, nếu vế value_if_false bị bỏ qua và điều kiện là Sai, Excel sẽ hiển thị chữ FALSE'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Hàm IF có thể trả về cả số, chuỗi văn bản, ngày tháng hoặc thậm chí là kết quả của một công thức toán học khác.',
      'hint': 'Hàm IF trả về được cả số lẫn chuỗi văn bản.'
    },
    {
      'id': 'tin9-b12a-fb1',
      'type': 'fill_blank',
      'question': 'Hàm IF trong Excel nhận vào một [1] logic; nếu điều kiện đó đúng thì trả về giá trị ở nhánh [2], nếu sai thì trả về giá trị ở nhánh thứ ba.',
      'blankAnswers': ['biểu thức điều kiện', 'value_if_true'],
      'wordBank': ['biểu thức điều kiện', 'value_if_true', 'sum_range', 'chuỗi văn bản', 'hàm SUM', 'định dạng'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 55): Nguyên lí hoạt động: kiểm tra biểu thức điều kiện (logical_test), nếu True trả về value_if_true.',
      'hint': 'Biểu thức kiểm tra điều kiện và giá trị nhánh đúng.'
    },
    {
      'id': 'tin9-b12a-m1',
      'type': 'matching',
      'question': 'Nối công thức phân loại ở cột bên trái với kết quả xếp loại ở cột bên phải (Cột C: Điểm trung bình):',
      'matchingLeft': [
        {'id': '1', 'text': '=IF(C2>=8, "Tốt", "Chưa tốt") (với C2 = 8.5)'},
        {'id': '2', 'text': '=IF(C2>=8, "Tốt", "Chưa tốt") (với C2 = 7.0)'},
        {'id': '3', 'text': '=IF(C2>=9, "Xuất sắc", IF(C2>=8, "Giỏi", "Khá")) (với C2 = 9.2)'},
        {'id': '4', 'text': '=IF(C2>=9, "Xuất sắc", IF(C2>=8, "Giỏi", "Khá")) (với C2 = 8.3)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Chưa tốt'},
        {'id': 'b', 'text': 'Tốt'},
        {'id': 'c', 'text': 'Giỏi'},
        {'id': 'd', 'text': 'Xuất sắc'}
      ],
      'correctMatches': {'1': 'b', '2': 'a', '3': 'd', '4': 'c'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 56): Kĩ thuật dùng hàm IF đơn và hàm IF lồng nhau để xếp loại nhiều bậc.',
      'hint': 'Xét từng điều kiện điểm số tương ứng.'
    },
    {
      'id': 'tin9-b12a-mc5',
      'type': 'multiple_choice',
      'question': 'Khi xây dựng kế hoạch tài chính cá nhân trên Excel, chỉ số "Số dư cuối tháng" được tính bằng công thức cơ bản nào?',
      'options': [
        'Tổng thu nhập - Tổng chi tiêu',
        'Tổng thu nhập + Tổng chi tiêu',
        'Tổng thu nhập x Tổng chi tiêu',
        'Tổng chi tiêu / Tổng thu nhập'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 57): Số dư tích lũy = Tổng thu - Tổng chi. Nếu số dư > 0 là có thặng dư tiết kiệm, nếu < 0 là bị thâm hụt tài chính.',
      'hint': 'Số dư = Tiền thu vào trừ đi Tiền chi ra.'
    },
    {
      'id': 'tin9-b12a-mc6',
      'type': 'multiple_choice',
      'question': 'Để tính số tiền thưởng: nếu Doanh_thu > 100 triệu thì thưởng 5% Doanh_thu, ngược lại không thưởng (thưởng 0 đồng), công thức nào đúng?',
      'options': [
        '=IF(A2>100000000, A2*5%, 0)',
        '=IF(A2>100000000, 0, A2*5%)',
        '=IF(A2>100000000, "5%", "0")',
        '=SUMIF(A2, ">100000000")*5%'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 56): Nhánh True trả về phép tính số học `A2*5%`, nhánh False trả về số 0.',
      'hint': 'Thỏa mãn điều kiện thì nhân 5%, ngược lại trả về 0.'
    },
    {
      'id': 'tin9-b12a-mc7',
      'type': 'multiple_choice',
      'question': 'Hàm điều kiện IF có thể kết hợp với các hàm logic nào sau đây để kiểm tra nhiều điều kiện phức tạp cùng lúc?',
      'options': [
        'Hàm AND và hàm OR',
        'Hàm COUNT và hàm MAX',
        'Hàm SUM và hàm AVERAGE',
        'Hàm LEFT và hàm RIGHT'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 56): Các hàm logic AND (đồng thời) và OR (hoặc) kết hợp chặt chẽ với hàm IF để tạo điều kiện phức hợp.',
      'hint': 'Hàm AND và hàm OR là hai hàm logic kinh điển.'
    }
  ],

  'tin9-bai-13': [
    {
      'id': 'tin9-b13-mc1',
      'type': 'multiple_choice',
      'question': 'Dịch vụ mạng và điện toán đám mây mang lại lợi ích nổi bật nào cho người dùng cá nhân và doanh nghiệp?',
      'options': [
        'Truy cập dữ liệu từ mọi nơi có kết nối mạng, đồng bộ liên tục và giảm chi phí đầu tư phần cứng lưu trữ',
        'Làm cho máy tính cá nhân không bao giờ bị hỏng',
        'Miễn phí hoàn toàn tiền sử dụng điện thoại',
        'Tự động làm bài tập hộ học sinh'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 60): Điện toán đám mây cho phép lưu trữ, xử lí dữ liệu linh hoạt trên máy chủ từ xa thông qua mạng Internet.',
      'hint': 'Truy cập dữ liệu mọi lúc mọi nơi và đồng bộ tự động.'
    },
    {
      'id': 'tin9-b13-mc2',
      'type': 'multiple_choice',
      'question': 'Mã độc tống tiền (Ransomware) là loại phần mềm độc hại hoạt động theo phương thức nào?',
      'options': [
        'Mã hóa toàn bộ tệp tin quan trọng trên máy nạn nhân và đòi tiền chuộc để cung cấp khóa giải mã',
        'Tự động tăng âm lượng loa máy tính lên mức to nhất',
        'Làm đổi hình nền màn hình thành màu đen',
        'Xóa bỏ biểu tượng Recycle Bin trên màn hình desktop'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 61): Ransomware chiếm quyền kiểm soát và mã hóa dữ liệu cá nhân của người dùng nhằm tống tiền bất hợp pháp.',
      'hint': 'Mã hóa dữ liệu và đòi tiền chuộc để giải mã.'
    },
    {
      'id': 'tin9-b13-mc3',
      'type': 'multiple_choice',
      'question': 'Hình thức tấn công lừa đảo qua mạng (Phishing) thường được kẻ xấu thực hiện bằng cách nào?',
      'options': [
        'Giả mạo email, tin nhắn hoặc website của ngân hàng, tổ chức uy tín để lừa người dùng nhập mật khẩu và mã OTP',
        'Đến tận nhà người dùng đe dọa bằng vũ lực',
        'Tự chế tạo chip vi xử lí giả',
        'Cắt đứt dây cáp mạng ngoài cột điện'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 62): Phishing là chiêu trò giả mạo giao diện chính thống (như ngân hàng, mạng xã hội) để đánh cắp tài khoản đăng nhập.',
      'hint': 'Giả mạo website uy tín để lừa nhập mật khẩu và mã OTP.'
    },
    {
      'id': 'tin9-b13-mc4',
      'type': 'multiple_choice',
      'question': 'Giao thức HTTPS trên thanh địa chỉ trình duyệt (có biểu tượng chiếc ổ khóa xanh) đảm bảo điều gì?',
      'options': [
        'Dữ liệu truyền giữa trình duyệt của người dùng và máy chủ trang web đã được mã hóa an toàn',
        'Trang web đó hoàn toàn không có quảng cáo',
        'Trang web tải nhanh gấp 5 lần trang web HTTP',
        'Máy tính của người dùng đã được cài phần mềm diệt virus'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 63): HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ SSL/TLS để mã hóa đường truyền dữ liệu chống nghe lén.',
      'hint': 'Dữ liệu đường truyền được mã hóa bảo mật chống nghe lén.'
    },
    {
      'id': 'tin9-b13-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về an ninh thông tin và phòng chống mã độc:',
      'options': [
        'a) Tường lửa (Firewall) đóng vai trò rào chắn kiểm soát lưu lượng mạng ra và vào máy tính',
        'b) Sử dụng mạng Wi-Fi công cộng không có mật khẩu tại quán cà phê để giao dịch ngân hàng là rất an toàn',
        'c) Xác thực hai yếu tố (2FA) giúp bảo vệ tài khoản ngay cả khi kẻ xấu đã biết được mật khẩu đăng nhập',
        'd) Phần mềm diệt virus cần được cập nhật cơ sở dữ liệu mẫu nhận diện virus định kì thường xuyên'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 62): Wi-Fi công cộng không bảo mật là môi trường nguy hiểm nhất, kẻ xấu dễ dàng nghe lén (Man-in-the-middle) gói tin tài khoản.',
      'hint': 'Tuyệt đối không giao dịch ngân hàng trên Wi-Fi công cộng mở.'
    },
    {
      'id': 'tin9-b13-fb1',
      'type': 'fill_blank',
      'question': 'Biện pháp xác thực hai yếu tố [1] bổ sung thêm một lớp bảo vệ (như mã OTP gửi về điện thoại), còn [2] giúp lọc và ngăn chặn các kết nối độc hại từ bên ngoài.',
      'blankAnswers': ['(2FA)', 'tường lửa (Firewall)'],
      'wordBank': ['(2FA)', 'tường lửa (Firewall)', 'mã độc', 'chuột quang', 'bộ nhớ RAM', 'cáp quang'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 63): 2FA là bảo vệ hai lớp; Firewall là tường lửa rào chắn an ninh mạng.',
      'hint': 'Xác thực 2 yếu tố 2FA và tường lửa Firewall.'
    },
    {
      'id': 'tin9-b13-m1',
      'type': 'matching',
      'question': 'Nối loại mã độc ở cột bên trái với tác hại nguy hiểm ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Ransomware (Mã độc tống tiền)'},
        {'id': '2', 'text': 'Spyware (Phần mềm gián điệp)'},
        {'id': '3', 'text': 'Keylogger (Ghi lại thao tác phím)'},
        {'id': '4', 'text': 'Worm (Sâu máy tính)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Âm thầm ghi lại mọi kí tự người dùng bấm trên bàn phím để trộm mật khẩu'},
        {'id': 'b', 'text': 'Mã hóa dữ liệu máy tính và đòi trả tiền chuộc để giải mã'},
        {'id': 'c', 'text': 'Tự động nhân bản và lây lan cực nhanh qua hệ thống mạng máy tính'},
        {'id': 'd', 'text': 'Bí mật theo dõi hành vi, vị trí và đánh cắp thông tin cá nhân gửi về máy chủ tin tặc'}
      ],
      'correctMatches': {'1': 'b', '2': 'd', '3': 'a', '4': 'c'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 61, 62): Phân loại và đặc tính phá hoại của các dòng mã độc phổ biến.',
      'hint': 'Ransomware tống tiền; Spyware gián điệp; Keylogger ghi phím; Worm lây lan.'
    },
    {
      'id': 'tin9-b13-mc5',
      'type': 'multiple_choice',
      'question': 'Khi nhận được một email lạ kèm tệp tin đính kèm có đuôi mở rộng là `.exe` hoặc `.scr`, hành vi an toàn nhất là gì?',
      'options': [
        'Tuyệt đối không mở hay tải về, xóa ngay email và báo cáo thư rác (Spam)',
        'Mở tệp tin ra ngay để xem bên trong có gì vui',
        'Chuyển tiếp email cho tất cả bạn bè trong danh bạ cùng xem',
        'Lưu tệp tin vào màn hình desktop để hôm sau mở'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 63): Tệp đính kèm có đuôi thực thi (.exe, .bat, .scr) từ nguồn không xác định chứa nguy cơ mã độc cực cao.',
      'hint': 'Không mở tệp thực thi lạ và xóa ngay lập tức.'
    },
    {
      'id': 'tin9-b13-mc6',
      'type': 'multiple_choice',
      'question': 'Một mật khẩu được coi là mạnh và có độ an toàn cao khi thỏa mãn điều kiện nào sau đây?',
      'options': [
        'Có độ dài từ 8 đến 12 kí tự trở lên, kết hợp chữ hoa, chữ thường, chữ số và kí tự đặc biệt',
        'Là ngày tháng năm sinh của chính mình',
        'Là dãy số liên tiếp 12345678',
        'Chỉ gồm 4 chữ số trùng với biển số xe'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 64): Mật khẩu mạnh phải dài, không liên quan đến thông tin cá nhân dễ đoán và phối hợp đa dạng kí tự.',
      'hint': 'Dài trên 8-12 kí tự, có hoa, thường, số và kí hiệu đặc biệt.'
    },
    {
      'id': 'tin9-b13-mc7',
      'type': 'multiple_choice',
      'question': 'Kẻ xấu có thể thực hiện cuộc tấn công từ chối dịch vụ phân tán (DDoS) nhằm mục đích gì?',
      'options': [
        'Làm tê liệt máy chủ của một trang web hoặc dịch vụ trực tuyến bằng cách gửi hàng triệu yêu cầu truy cập ảo cùng lúc',
        'Đánh cắp mật khẩu wifi của từng nhà',
        'Làm hỏng chuột máy tính của người dùng',
        'Đổi phông chữ của trang web'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 9 KNTT (Trang 62): Tấn công từ chối dịch vụ (DDoS) gây quá tải băng thông và bộ nhớ máy chủ, khiến người dùng chính thống không thể truy cập.',
      'hint': 'Làm tê liệt máy chủ bằng lượng truy cập ảo khổng lồ.'
    }
  ],

  'tin9-bai-14': [
    {
      'id': 'tin9-b14-mc1',
      'type': 'multiple_choice',
      'question': 'Thao tác nào sau đây giúp kích hoạt tính năng Xác thực 2 bước (2-Step Verification) cho tài khoản Google / Gmail cá nhân?',
      'options': [
        'Vào Quản lí Tài khoản Google -> Bảo mật (Security) -> Bật Xác minh 2 bước',
        'Xóa tài khoản Gmail cũ tạo tài khoản mới',
        'Đổi tên hiển thị của tài khoản',
        'Chỉ dùng Gmail vào ban ngày'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 66): Trong phần Cài đặt Tài khoản Google mục Bảo mật (Security) có tùy chọn kích hoạt Xác minh 2 bước.',
      'hint': 'Vào mục Quản lí tài khoản Google -> Bảo mật.'
    },
    {
      'id': 'tin9-b14-mc2',
      'type': 'multiple_choice',
      'question': 'Để sao lưu (Backup) dữ liệu cá nhân quan trọng phòng trường hợp máy tính bị hỏng hoặc nhiễm virus, giải pháp nào sau đây là an toàn nhất?',
      'options': [
        'Sao lưu dữ liệu định kì lên dịch vụ đám mây (Google Drive / OneDrive) và ổ cứng di động ngoài',
        'Sao chép tệp từ ổ đĩa C sang màn hình Desktop của cùng một máy',
        'Chỉ lưu trong bộ nhớ tạm Clipboard',
        'Ghi nhớ thông tin bằng trí nhớ cá nhân'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 67): Nguyên tắc sao lưu 3-2-1: lưu trữ trên ít nhất 2 phương tiện độc lập (đám mây và ổ cứng gắn ngoài).',
      'hint': 'Sao lưu lên dịch vụ đám mây và ổ cứng di động ngoài.'
    },
    {
      'id': 'tin9-b14-mc3',
      'type': 'multiple_choice',
      'question': 'Trình duyệt web cung cấp tính năng "Duyệt web riêng tư" (Incognito Mode / InPrivate). Tính năng này KHÔNG lưu lại điều gì trên máy tính sau khi đóng cửa sổ?',
      'options': [
        'Lịch sử duyệt web, các tệp cookie và thông tin biểu mẫu đã nhập',
        'Địa chỉ IP của nhà mạng',
        'Tệp tin mà người dùng đã chủ động tải về máy',
        'Dấu trang (Bookmark) người dùng đã chủ động thêm vào'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 68): Chế độ ẩn danh xóa sạch lịch sử truy cập, cookie và dữ liệu tạm ngay khi đóng cửa sổ trình duyệt.',
      'hint': 'Không lưu lịch sử, cookie và dữ liệu biểu mẫu trên máy.'
    },
    {
      'id': 'tin9-b14-mc4',
      'type': 'multiple_choice',
      'question': 'Khi nghi ngờ máy tính bị nhiễm virus hoặc phần mềm độc hại, thao tác đầu tiên cần làm ngay là gì?',
      'options': [
        'Ngắt kết nối mạng Internet (rút dây mạng hoặc tắt Wi-Fi) và tiến hành quét toàn bộ máy bằng phần mềm diệt virus',
        'Tiếp tục mở các tệp tin lạ để kiểm tra',
        'Gõ mật khẩu ngân hàng thử xem còn dùng được không',
        'Khởi động lại máy tính liên tục 10 lần'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 67): Ngắt kết nối mạng ngay lập tức để cô lập mã độc, ngăn chặn nó phát tán hoặc gửi dữ liệu đánh cắp ra ngoài.',
      'hint': 'Ngắt kết nối mạng Internet để cô lập mã độc.'
    },
    {
      'id': 'tin9-b14-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các thao tác thực hành bảo mật thông tin máy tính:',
      'options': [
        'a) Nên sử dụng tính năng khóa màn hình tự động (Screen Lock) có mật khẩu khi rời khỏi máy tính',
        'b) Có thể dùng chung một mật khẩu duy nhất cho tất cả các tài khoản mạng xã hội và ngân hàng để đỡ quên',
        'c) Phần mềm quản lí mật khẩu (Password Manager) giúp tạo và lưu trữ mật khẩu phức tạp an toàn',
        'd) Cập nhật hệ điều hành Windows định kì giúp vá các lỗ hổng bảo mật nguy hiểm'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Dùng chung một mật khẩu cho mọi tài khoản là sai lầm chết người: nếu một tài khoản bị lộ thì toàn bộ hệ sinh thái sẽ bị xâm nhập.',
      'hint': 'Không bao giờ dùng chung một mật khẩu cho nhiều tài khoản.'
    },
    {
      'id': 'tin9-b14-fb1',
      'type': 'fill_blank',
      'question': 'Để bảo vệ máy tính khi tạm thời rời vị trí, ta nhấn tổ hợp phím [1] để khóa màn hình ngay lập tức, còn để sao lưu dữ liệu ta dùng dịch vụ lưu trữ [2].',
      'blankAnswers': ['Windows + L', 'đám mây'],
      'wordBank': ['Windows + L', 'đám mây', 'Ctrl + C', 'thùng rác', 'Alt + F4', 'màn hình ngoài'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 67): Phím tắt Windows + L (Lock) khóa màn hình nhanh; lưu trữ đám mây giúp sao lưu dữ liệu an toàn.',
      'hint': 'Windows + L để khóa máy (Lock) và lưu trữ đám mây.'
    },
    {
      'id': 'tin9-b14-m1',
      'type': 'matching',
      'question': 'Nối thao tác bảo mật ở cột bên trái với mục đích bảo vệ tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Bật xác thực hai yếu tố (2FA)'},
        {'id': '2', 'text': 'Duyệt web ở chế độ ẩn danh (Incognito)'},
        {'id': '3', 'text': 'Sao lưu dự phòng 3-2-1'},
        {'id': '4', 'text': 'Cập nhật bản vá hệ điều hành (Windows Update)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Khắc phục các lỗ hổng bảo mật mà tin tặc có thể khai thác'},
        {'id': 'b', 'text': 'Chống mất mát dữ liệu vĩnh viễn khi phần cứng gặp sự cố bất ngờ'},
        {'id': 'c', 'text': 'Không lưu dấu vết lịch sử duyệt web trên máy tính công cộng'},
        {'id': 'd', 'text': 'Ngăn kẻ xấu đăng nhập ngay cả khi bị lộ mật khẩu'}
      ],
      'correctMatches': {'1': 'd', '2': 'c', '3': 'b', '4': 'a'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 66-68): Các biện pháp thực hành bảo mật thông tin toàn diện cho người dùng.',
      'hint': 'Nối thao tác an ninh với mục tiêu bảo vệ tương ứng.'
    },
    {
      'id': 'tin9-b14-mc5',
      'type': 'multiple_choice',
      'question': 'Ứng dụng tạo mã OTP xác thực hai yếu tố phổ biến trên điện thoại thông minh hiện nay là gì?',
      'options': [
        'Google Authenticator hoặc Microsoft Authenticator',
        'TikTok',
        'YouTube',
        'Flappy Bird'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 66): Google Authenticator và Microsoft Authenticator là các ứng dụng tạo mã OTP 6 số bảo mật đổi mới mỗi 30 giây.',
      'hint': 'Ứng dụng Authenticator tạo mã xác thực 2 bước.'
    },
    {
      'id': 'tin9-b14-mc6',
      'type': 'multiple_choice',
      'question': 'Khi cắm ổ đĩa USB của người khác vào máy tính của mình, thao tác an toàn nhất cần làm trước khi mở tệp là gì?',
      'options': [
        'Nhấp chuột phải vào biểu tượng ổ đĩa USB và chọn lệnh quét virus (Scan with antivirus)',
        'Mở nhanh tất cả các tệp có trong USB',
        'Định dạng (Format) xóa sạch ổ USB của người ta ngay',
        'Rút mạnh USB ra khỏi cổng cắm'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 67): Quét virus trước khi mở giúp ngăn chặn virus lây lan từ USB vào máy tính qua chế độ tự chạy (Autorun).',
      'hint': 'Quét virus ổ USB trước khi mở tệp.'
    },
    {
      'id': 'tin9-b14-mc7',
      'type': 'multiple_choice',
      'question': 'Khi xóa một tài liệu chứa thông tin bí mật cá nhân khỏi máy tính, việc chỉ nhấn phím Delete thông thường có an toàn tuyệt đối không? Vì sao?',
      'options': [
        'Chưa an toàn tuyệt đối, vì tệp tin vẫn nằm trong thùng rác (Recycle Bin) và người khác có thể khôi phục lại dễ dàng',
        'Hoàn toàn an toàn tuyệt đối 100%',
        'Xóa xong thì máy tính sẽ tự động hỏng',
        'Delete làm tài liệu biến mất khỏi thế giới vĩnh viễn'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 68): Nhấn Delete chỉ chuyển tệp vào Recycle Bin. Cần xóa vĩnh viễn (Shift + Delete) và làm rỗng thùng rác (Empty Recycle Bin).',
      'hint': 'Tệp vẫn còn trong thùng rác Recycle Bin nếu chỉ nhấn Delete.'
    }
  ],

  'tin9-bai-15': [
    {
      'id': 'tin9-b15-mc1',
      'type': 'multiple_choice',
      'question': 'Trong kỷ nguyên số hóa và trí tuệ nhân tạo (AI), nhóm ngành nghề nào sau đây đang có nhu cầu nhân lực phát triển mạnh mẽ nhất?',
      'options': [
        'Khoa học máy tính, Trí tuệ nhân tạo (AI), Kĩ sư dữ liệu và An ninh mạng',
        'Các công việc thủ công lặp đi lặp lại không đòi hỏi chuyên môn',
        'Nghề chép sách tay bằng bút mực',
        'Nghề thu cước thủ công bằng vé giấy'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 70): Nhóm ngành công nghệ cao như AI, Khoa học dữ liệu, An ninh mạng là trụ cột của cuộc cách mạng công nghiệp lần thứ tư.',
      'hint': 'Trí tuệ nhân tạo (AI), khoa học dữ liệu và an toàn thông tin.'
    },
    {
      'id': 'tin9-b15-mc2',
      'type': 'multiple_choice',
      'question': 'Vai trò chính của một "Chuyên gia phân tích dữ liệu" (Data Analyst) trong doanh nghiệp là gì?',
      'options': [
        'Thu thập, xử lí và trực quan hóa số liệu kinh doanh để giúp ban giám đốc đưa ra các chiến lược chính xác',
        'Lắp ráp các linh kiện màn hình máy tính trong nhà máy',
        'Cài đặt lại Windows cho nhân viên trong công ty',
        'Trực tiếp đi giao hàng tận nhà cho khách'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 71): Nhà phân tích dữ liệu biến số liệu thô thành các báo cáo xu hướng có giá trị định hướng kinh doanh.',
      'hint': 'Phân tích số liệu và hỗ trợ ra quyết định chiến lược.'
    },
    {
      'id': 'tin9-b15-mc3',
      'type': 'multiple_choice',
      'question': 'Để theo đuổi các ngành nghề thuộc lĩnh vực Công nghệ thông tin, học sinh cần chuẩn bị tốt các môn học nền tảng nào ngay từ bậc phổ thông?',
      'options': [
        'Môn Toán học, môn Tin học và Ngoại ngữ (tiếng Anh)',
        'Môn Âm nhạc và Mĩ thuật',
        'Chỉ cần học thuộc bảng cửu chương',
        'Không cần học môn nào cả'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 72): Toán học rèn luyện tư duy logic thuật toán, Tin học cung cấp kiến thức nền tảng và tiếng Anh giúp đọc hiểu tài liệu công nghệ quốc tế.',
      'hint': 'Toán học, Tin học và tiếng Anh.'
    },
    {
      'id': 'tin9-b15-mc4',
      'type': 'multiple_choice',
      'question': 'Nghề "Kĩ sư an ninh mạng" (Cybersecurity Engineer) có nhiệm vụ quan trọng nhất là gì?',
      'options': [
        'Thiết kế, xây dựng các hàng rào phòng thủ bảo vệ hệ thống mạng và dữ liệu của tổ chức trước sự tấn công của tin tặc',
        'Tìm cách hack tài khoản Facebook của người khác',
        'Bán máy tính dạo ngoài chợ',
        'Viết virus phát tán lên mạng'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 71): Kĩ sư an ninh mạng là "lá chắn số" bảo vệ hạ tầng công nghệ và dữ liệu bí mật trước tội phạm mạng.',
      'hint': 'Bảo vệ hệ thống và dữ liệu chống lại sự xâm nhập của tin tặc.'
    },
    {
      'id': 'tin9-b15-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các nhận định về định hướng nghề nghiệp trong kỷ nguyên số:',
      'options': [
        'a) Công nghệ thông tin chỉ dành riêng cho những người muốn trở thành lập trình viên chuyên nghiệp',
        'b) Kĩ năng số (Digital skills) là yêu cầu thiết yếu trong hầu hết mọi ngành nghề: y tế, giáo dục, nông nghiệp, kinh doanh',
        'c) Năng lực tự học suốt đời là yếu tố sống còn vì công nghệ luôn thay đổi và cập nhật liên tục mỗi ngày',
        'd) Trí tuệ nhân tạo có thể thay thế hoàn toàn cảm xúc, sự đồng cảm và óc sáng tạo tinh tế của con người'
      ],
      'trueFalseAnswers': [False, True, True, False],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: AI là công cụ hỗ trợ, không thể thay thế năng lực thấu cảm và sáng tạo nhân văn của con người; kĩ năng số cần cho mọi ngành nghề.',
      'hint': 'Kĩ năng số cần cho mọi ngành nghề, AI không thay thế được sự đồng cảm con người.'
    },
    {
      'id': 'tin9-b15-fb1',
      'type': 'fill_blank',
      'question': 'Trong thị trường lao động số, người lao động cần sở hữu [1] vững vàng về chuyên môn kết hợp với các [2] như làm việc nhóm, giao tiếp và tư duy phản biện.',
      'blankAnswers': ['kĩ năng cứng (chuyên môn)', 'kĩ năng mềm'],
      'wordBank': ['kĩ năng cứng (chuyên môn)', 'kĩ năng mềm', 'máy tính đắt tiền', 'bằng lái xe', 'trí nhớ vẹt', 'ngoại hình'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 72): Sự kết hợp giữa kĩ năng cứng (chuyên môn công nghệ) và kĩ năng mềm (giao tiếp, làm việc nhóm) tạo nên thành công.',
      'hint': 'Kĩ năng cứng chuyên môn kết hợp kĩ năng mềm.'
    },
    {
      'id': 'tin9-b15-m1',
      'type': 'matching',
      'question': 'Nối vị trí nghề nghiệp công nghệ ở cột bên trái với sản phẩm đầu ra đặc trưng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Lập trình viên ứng dụng di động (Mobile App Developer)'},
        {'id': '2', 'text': 'Kĩ sư thiết kế vi mạch (Chip Designer)'},
        {'id': '3', 'text': 'Nhà phát triển trí tuệ nhân tạo (AI Engineer)'},
        {'id': '4', 'text': 'Chuyên viên quản trị cơ sở dữ liệu (Database Admin)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Hệ thống mô hình học máy nhận dạng giọng nói, thị giác máy tính'},
        {'id': 'b', 'text': 'Ứng dụng chạy trên hệ điều hành Android hoặc iOS cho người dùng di động'},
        {'id': 'c', 'text': 'Bản vẽ thiết kế và kiến trúc bộ vi xử lí bán dẫn nano siêu nhỏ'},
        {'id': 'd', 'text': 'Hệ thống kho dữ liệu an toàn, không bị nghẽn và truy vấn tốc độ cao'}
      ],
      'correctMatches': {'1': 'b', '2': 'c', '3': 'a', '4': 'd'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 71, 72): Các chuyên ngành công nghệ cao và sản phẩm đặc trưng.',
      'hint': 'Nối chức danh công việc với sản phẩm công nghệ cụ thể.'
    },
    {
      'id': 'tin9-b15-mc5',
      'type': 'multiple_choice',
      'question': 'Hình thức làm việc từ xa (Remote Work / Freelancing) nhờ vào mạng Internet mang lại lợi ích gì cho các chuyên gia công nghệ?',
      'options': [
        'Có thể làm việc cho các công ty lớn ở khắp nơi trên thế giới ngay tại nhà của mình',
        'Không bao giờ phải làm bất kì công việc gì',
        'Được nhận lương mà không cần nộp sản phẩm',
        'Không cần máy tính vẫn làm việc được'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 72): Không gian số xóa nhòa khoảng cách địa lí, cho phép kĩ sư Việt Nam tham gia các dự án toàn cầu ngay tại nhà.',
      'hint': 'Làm việc linh hoạt cho các dự án toàn cầu từ xa.'
    },
    {
      'id': 'tin9-b15-mc6',
      'type': 'multiple_choice',
      'question': 'Yếu tố nào sau đây là quan trọng nhất để duy trì năng lực cạnh tranh của một người làm việc trong ngành công nghệ thông tin?',
      'options': [
        'Tinh thần tự học, liên tục cập nhật công nghệ và ngôn ngữ lập trình mới',
        'Chỉ hài lòng với kiến thức đã học ở trường và không đọc thêm gì nữa',
        'Mua máy tính đắt tiền nhất mỗi năm',
        'Chỉ làm việc một mình không giao lưu với ai'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 73): Công nghệ phát triển theo cấp số nhân; ngừng học hỏi là tự đào thải khỏi thị trường công nghệ.',
      'hint': 'Tinh thần tự học và liên tục cập nhật công nghệ mới.'
    },
    {
      'id': 'tin9-b15-mc7',
      'type': 'multiple_choice',
      'question': 'Nghề "Kiểm thử phần mềm" (Software Tester / QA) đóng vai trò gì trong quy trình sản xuất phần mềm?',
      'options': [
        'Chạy thử nghiệm phần mềm với các trường hợp dữ liệu khác nhau để tìm ra lỗi (Bug) trước khi bàn giao cho người dùng',
        'Viết toàn bộ mã nguồn của phần mềm từ đầu đến cuối',
        'Đi bán đĩa cài phần mềm ở các cửa hàng',
        'Sửa chữa phần cứng máy tính bị hỏng'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 71): Tester là "người gác cổng chất lượng", kiểm thử tỉ mỉ nhằm phát hiện lỗi để lập trình viên sửa trước khi phát hành.',
      'hint': 'Tìm lỗi (bug) để đảm bảo chất lượng phần mềm trước khi phát hành.'
    }
  ],

  'tin9-bai-16': [
    {
      'id': 'tin9-b16-mc1',
      'type': 'multiple_choice',
      'question': 'Mục tiêu chính của Dự án "Khởi nghiệp cùng công nghệ số" trong chương trình Tin học 9 là gì?',
      'options': [
        'Vận dụng tổng hợp các kiến thức tin học đã học để xây dựng ý tưởng kinh doanh số, quản lí tài chính và quảng bá sản phẩm',
        'Vay tiền ngân hàng để mở công ty thật ngay lập tức',
        'Học cách chơi chứng khoán trên mạng',
        'Lập trình trò chơi điện tử để kiếm hàng triệu đô la'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 75): Dự án rèn luyện tư duy khởi nghiệp đổi mới sáng tạo, ứng dụng công cụ số (văn bản, bảng tính, bài trình chiếu) giải quyết bài toán thực tiễn.',
      'hint': 'Vận dụng tổng hợp kiến thức tin học giải quyết bài toán khởi nghiệp thực tế.'
    },
    {
      'id': 'tin9-b16-mc2',
      'type': 'multiple_choice',
      'question': 'Khi lập kế hoạch kinh doanh số, công cụ phần mềm nào thích hợp nhất để tính toán chi phí vốn, giá thành sản phẩm và dự báo điểm hòa vốn?',
      'options': [
        'Phần mềm bảng tính điện tử (Microsoft Excel / Google Sheets)',
        'Phần mềm nghe nhạc Spotify',
        'Phần mềm vẽ Paint',
        'Trình xem ảnh Windows Photos'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 76): Bảng tính Excel cho phép lập mô hình tài chính với các công thức tự động (SUM, IF, SUMIF) tính toán chi phí chính xác.',
      'hint': 'Bảng tính Excel hoặc Google Sheets để tính toán tài chính.'
    },
    {
      'id': 'tin9-b16-mc3',
      'type': 'multiple_choice',
      'question': 'Để giới thiệu ý tưởng khởi nghiệp đến các nhà đầu tư (hoặc thầy cô và bạn bè), nhóm dự án cần chuẩn bị phương tiện nào quan trọng nhất?',
      'options': [
        'Một bài thuyết trình (Pitch Deck) cô đọng, cuốn hút và bài bản bằng PowerPoint hoặc Canva',
        'Một cuộc gọi điện thoại kéo dài 3 tiếng',
        'Một bức vẽ tay trên giấy nháp',
        'Một đoạn tin nhắn Zalo'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 77): Bài trình chiếu Pitch Deck trực quan, cô đọng (từ 10-12 slide) là phương tiện thuyết phục người nghe chuẩn quốc tế.',
      'hint': 'Bài trình chiếu Pitch Deck chuyên nghiệp trên PowerPoint/Canva.'
    },
    {
      'id': 'tin9-b16-mc4',
      'type': 'multiple_choice',
      'question': 'Kênh tiếp thị và bán hàng số nào sau đây giúp dự án khởi nghiệp tiếp cận khách hàng tiềm năng với chi phí ban đầu thấp nhất?',
      'options': [
        'Trang mạng xã hội (Facebook, TikTok, Instagram) và sàn thương mại điện tử',
        'Thuê biển quảng cáo pano tấm lớn ngoài ngã tư đường cao tốc',
        'Thuê quảng cáo trên khung giờ vàng truyền hình quốc gia',
        'In 1 triệu tờ rơi phát ngoài ngã tư'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 76): Tiếp thị số (Digital Marketing) qua mạng xã hội và thương mại điện tử giúp tối ưu hóa chi phí quảng bá cho các dự án nhỏ.',
      'hint': 'Mạng xã hội và sàn thương mại điện tử chi phí thấp.'
    },
    {
      'id': 'tin9-b16-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các bước thực hiện một dự án khởi nghiệp công nghệ số học đường:',
      'options': [
        'a) Cần khảo sát nhu cầu thị trường thực tế bằng Google Forms trước khi bắt tay vào sản xuất',
        'b) Kế hoạch kinh doanh khởi nghiệp không cần quan tâm đến vấn đề thu hồi vốn và rủi ro',
        'c) Thiết kế logo, bộ nhận diện thương hiệu và áp phích quảng cáo bằng phần mềm đồ họa (Canva, GIMP)',
        'd) Phân công công việc rõ ràng cho từng thành viên theo đúng năng lực sở trường'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT: Quản trị rủi ro và bài toán hoàn vốn là yếu tố sống còn của một dự án khởi nghiệp; không thể bỏ qua.',
      'hint': 'Quản trị rủi ro và tính toán vốn là điều bắt buộc phải có.'
    },
    {
      'id': 'tin9-b16-fb1',
      'type': 'fill_blank',
      'question': 'Trong dự án khởi nghiệp, nhóm sử dụng [1] để khảo sát nhu cầu khách hàng, dùng [2] để lập bảng dự toán thu chi và dùng PowerPoint để thuyết trình ý tưởng.',
      'blankAnswers': ['Google Forms', 'Excel (bảng tính)'],
      'wordBank': ['Google Forms', 'Excel (bảng tính)', 'máy in kim', 'máy fax', 'bàn tính gảy', 'mã QR'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 75, 76): Ứng dụng chuỗi công cụ số hoàn chỉnh: Google Forms (khảo sát) -> Excel (tài chính) -> PowerPoint (thuyết trình).',
      'hint': 'Google Forms để khảo sát và Excel để tính toán.'
    },
    {
      'id': 'tin9-b16-m1',
      'type': 'matching',
      'question': 'Nối giai đoạn dự án khởi nghiệp ở cột bên trái với nhiệm vụ công nghệ tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Giai đoạn 1: Khảo sát thị trường'},
        {'id': '2', 'text': 'Giai đoạn 2: Lập kế hoạch tài chính'},
        {'id': '3', 'text': 'Giai đoạn 3: Thiết kế quảng bá sản phẩm'},
        {'id': '4', 'text': 'Giai đoạn 4: Báo cáo gọi vốn'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Thiết kế logo, catalogue và tờ rơi số trên Canva / GIMP'},
        {'id': 'b', 'text': 'Thuyết trình bài chiếu Pitch Deck trước hội đồng giám khảo'},
        {'id': 'c', 'text': 'Lập bảng tính dự toán chi phí, doanh thu và điểm hòa vốn trên Excel'},
        {'id': 'd', 'text': 'Tạo phiếu khảo sát online Google Forms và phân tích biểu đồ phản hồi'}
      ],
      'correctMatches': {'1': 'd', '2': 'c', '3': 'a', '4': 'b'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 75-78): Bốn giai đoạn bài bản của một dự án công nghệ số khởi nghiệp học đường.',
      'hint': 'Nối từng giai đoạn với công việc tương ứng.'
    },
    {
      'id': 'tin9-b16-mc5',
      'type': 'multiple_choice',
      'question': 'Thế nào là "Điểm hòa vốn" (Break-even point) trong kinh doanh dự án?',
      'options': [
        'Thời điểm mà tổng doanh thu thu về vừa đủ bù đắp toàn bộ chi phí đã bỏ ra (lợi nhuận bằng 0)',
        'Thời điểm công ty bị phá sản hoàn toàn',
        'Thời điểm kiếm được số tiền nhiều nhất',
        'Thời điểm nhân viên được tăng gấp đôi tiền lương'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 9 KNTT (Trang 76): Điểm hòa vốn là mốc quan trọng trong kế hoạch tài chính: sau điểm này, mỗi sản phẩm bán thêm sẽ bắt đầu sinh lời.',
      'hint': 'Doanh thu vừa đủ bù đắp chi phí bỏ ra.'
    },
    {
      'id': 'tin9-b16-mc6',
      'type': 'multiple_choice',
      'question': 'Khi thuyết trình gọi vốn dự án, thời lượng một bài Pitch Deck hiệu quả thường kéo dài trong khoảng bao lâu?',
      'options': [
        'Từ 3 đến 5 phút (tập trung nêu bật vấn đề, giải pháp và tính khả thi)',
        'Kéo dài 2 đến 3 tiếng đồng hồ',
        'Đúng 10 giây rồi dừng lại',
        'Nói liên tục đến khi hết giờ học mới thôi'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 77): Thuyết trình khởi nghiệp đòi hỏi tính súc tích cao, thông thường chỉ từ 3 đến 5 phút để gây ấn tượng mạnh với người nghe.',
      'hint': 'Khoảng 3 đến 5 phút ngắn gọn và ấn tượng.'
    },
    {
      'id': 'tin9-b16-mc7',
      'type': 'multiple_choice',
      'question': 'Giá trị lớn nhất mà học sinh nhận được sau khi hoàn thành dự án khởi nghiệp công nghệ số là gì?',
      'options': [
        'Rèn luyện tư duy phản biện, kĩ năng hợp tác nhóm, năng lực số và hiểu biết về thực tế đời sống kinh tế',
        'Kiếm được rất nhiều tiền để mua sắm đồ chơi đắt tiền',
        'Không cần phải học các môn học khác nữa',
        'Được miễn thi tốt nghiệp môn Tin học'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 9 KNTT (Trang 78): Dự án bồi dưỡng phẩm chất và năng lực toàn diện của học sinh: tư duy sáng tạo, tự chủ, kĩ năng giải quyết vấn đề thực tiễn.',
      'hint': 'Phát triển tư duy, kĩ năng hợp tác và năng lực số toàn diện.'
    }
  ]
}

if __name__ == '__main__':
    print("Grade 9 Part 3 ready.")
    for k, v in GRADE9_P3.items():
        print(f"  {k}: {len(v)} câu")
