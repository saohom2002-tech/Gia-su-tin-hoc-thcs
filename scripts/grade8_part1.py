# -*- coding: utf-8 -*-
"""
Grade 8 supplements - Part 1:
Lessons: tin8-bai-2, tin8-bai-3, tin8-bai-4, tin8-bai-6, tin8-bai-7, tin8-bai-8a, tin8-bai-9a, tin8-bai-10a, tin8-bai-11a
"""

SUPPLEMENTS_P1 = {
  'tin8-bai-2': [
    {
      'id': 'tin8-b2-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về đặc điểm thông tin trong môi trường số:',
      'options': [
        'a) Thông tin số có thể được nhân bản, lan truyền với tốc độ rất nhanh chóng trên Internet',
        'b) Mọi thông tin tìm thấy trên mạng xã hội đều đã qua kiểm duyệt nên luôn hoàn toàn chính xác',
        'c) Thông tin số dễ dàng bị chỉnh sửa, cắt ghép, thay đổi nội dung bằng các phần mềm chuyên dụng',
        'd) Dữ liệu số có thể lưu trữ với dung lượng khổng lồ trên các thiết bị nhỏ gọn hoặc điện toán đám mây'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 10): Thông tin số có tính dễ sao chép, lan truyền nhanh, khó thu hồi nhưng cũng dễ bị bóp méo, giả mạo. Cần kiểm chứng nguồn tin.',
      'hint': 'Thông tin trên mạng không phải lúc nào cũng được kiểm chứng chính xác.'
    },
    {
      'id': 'tin8-b2-fb1',
      'type': 'fill_blank',
      'question': 'Thông tin số có thể được lưu trữ với dung lượng rất lớn, [1] dễ dàng và lan truyền trên không gian mạng với tốc độ [2].',
      'blankAnswers': ['nhân bản', 'tức thời'],
      'wordBank': ['nhân bản', 'tức thời', 'chậm chạp', 'xóa bỏ', 'thủ công', 'hạn chế'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 10): Đặc điểm của thông tin số là dễ nhân bản và lan truyền gần như tức thời.',
      'hint': 'Sao chép nhanh và truyền đi ngay lập tức.'
    },
    {
      'id': 'tin8-b2-m1',
      'type': 'matching',
      'question': 'Nối đặc điểm thông tin số ở cột bên trái với ý nghĩa/hậu quả tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Dễ sao chép, nhân bản'},
        {'id': '2', 'text': 'Lan truyền với tốc độ cao'},
        {'id': '3', 'text': 'Dễ bị chỉnh sửa, cắt ghép'},
        {'id': '4', 'text': 'Khó xóa bỏ hoàn toàn'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Một tin tức có thể tiếp cận hàng triệu người chỉ sau vài phút'},
        {'id': 'b', 'text': 'Hình ảnh, video có thể bị làm giả (Deepfake), gây hiểu lầm'},
        {'id': 'c', 'text': 'Dữ liệu đã đăng tải có thể bị người khác tải về lưu trữ lại'},
        {'id': 'd', 'text': 'Tiết kiệm chi phí in ấn và phân phối tài liệu'}
      ],
      'correctMatches': {'1': 'd', '2': 'a', '3': 'b', '4': 'c'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 11): Các đặc tính hai mặt của thông tin số trong đời sống hiện đại.',
      'hint': 'Gắn đặc tính công nghệ với tác động thực tế của nó.'
    },
    {
      'id': 'tin8-b2-mc1',
      'type': 'multiple_choice',
      'question': 'Để đánh giá độ tin cậy của một bài viết trên mạng Internet, tiêu chí nào sau đây là QUAN TRỌNG NHẤT?',
      'options': [
        'Tác giả là chuyên gia có uy tín và bài viết được đăng trên website chính thống (.gov, .edu)',
        'Bài viết có số lượng lượt thích (Like) và chia sẻ (Share) nhiều nhất',
        'Bài viết sử dụng tiêu đề giật gân, hấp dẫn người đọc',
        'Bài viết có nhiều hình ảnh hoạt họa bắt mắt'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 12): Tác giả uy tín, tổ chức chịu trách nhiệm xuất bản rõ ràng (trang cơ quan chính phủ, giáo dục) là tiêu chí hàng đầu.',
      'hint': 'Căn cứ vào nguồn gốc phát hành và tác giả bài viết.'
    }
  ],

  'tin8-bai-3': [
    {
      'id': 'tin8-b3-mc1',
      'type': 'multiple_choice',
      'question': 'Khi tìm kiếm thông tin trên Internet để làm bài thuyết trình, bước đầu tiên em cần làm là gì?',
      'options': [
        'Xác định rõ mục tiêu tìm kiếm và các từ khóa (Keywords) trọng tâm',
        'Sao chép toàn bộ trang web đầu tiên tìm thấy vào bài thuyết trình',
        'Mở đồng thời 50 tab trình duyệt mà không cần lọc',
        'Hỏi ý kiến bạn bè trên mạng xã hội về trò chơi mới'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 14): Bước đầu tiên trong quy trình khai thác thông tin là xác định rõ nhu cầu và lựa chọn từ khóa tìm kiếm phù hợp.',
      'hint': 'Xác định rõ mình cần tìm cái gì và từ khóa đại diện.'
    },
    {
      'id': 'tin8-b3-mc2',
      'type': 'multiple_choice',
      'question': 'Để tìm kiếm chính xác một cụm từ trên Google mà không bị phân tách các từ, em đặt cụm từ đó trong kí hiệu nào?',
      'options': [
        'Đặt trong dấu ngoặc kép "..."',
        'Đặt trong dấu ngoặc đơn (...)',
        'Đặt trong dấu ngoặc nhọn {...}',
        'Đặt sau dấu gạch ngang -'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 15): Đặt cụm từ trong dấu ngoặc kép " " giúp công cụ tìm kiếm trả về chính xác thứ tự các từ trong cụm từ đó.',
      'hint': 'Dấu ngoặc kép thường dùng để trích dẫn chính xác.'
    },
    {
      'id': 'tin8-b3-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các thao tác khai thác thông tin số:',
      'options': [
        'a) Cú pháp `filetype:pdf` giúp tìm kiếm các tài liệu có định dạng PDF',
        'b) Khi trích dẫn nội dung từ trang web khác, không cần ghi nguồn tác giả',
        'c) Thông tin từ các diễn đàn ẩn danh chưa được kiểm chứng có độ tin cậy thấp',
        'd) Em nên so sánh thông tin từ ít nhất 2 đến 3 nguồn độc lập trước khi kết luận'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 16): Khi trích dẫn thông tin bắt buộc phải ghi rõ nguồn tác giả để tôn trọng bản quyền.',
      'hint': 'Tôn trọng quyền tác giả và kiểm chứng đa nguồn.'
    },
    {
      'id': 'tin8-b3-fb1',
      'type': 'fill_blank',
      'question': 'Để loại trừ một từ khóa khỏi kết quả tìm kiếm trên Google, ta đặt dấu [1] ngay trước từ khóa đó (không có khoảng trắng), còn để tìm dạng tệp ta dùng lệnh [2].',
      'blankAnswers': ['trừ (-)', 'filetype:'],
      'wordBank': ['trừ (-)', 'filetype:', 'cộng (+)', 'site:', 'ngoặc kép', 'define:'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 15): Dấu trừ (-) trước từ khóa để loại trừ; filetype: dùng để giới hạn loại định dạng tệp tin.',
      'hint': 'Dấu trừ để loại bỏ, filetype để chọn kiểu tệp.'
    },
    {
      'id': 'tin8-b3-m1',
      'type': 'matching',
      'question': 'Nối toán tử tìm kiếm ở cột bên trái với công dụng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': '"Cụm từ"'},
        {'id': '2', 'text': '-từ_khóa'},
        {'id': '3', 'text': 'site:gov.vn'},
        {'id': '4', 'text': 'filetype:pptx'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Loại bỏ các trang web chứa từ khóa này'},
        {'id': 'b', 'text': 'Chỉ tìm kiếm trên các trang web thuộc tên miền cơ quan nhà nước'},
        {'id': 'c', 'text': 'Tìm kiếm chính xác nguyên văn cả cụm từ'},
        {'id': 'd', 'text': 'Tìm các tệp tài liệu dạng bài trình chiếu PowerPoint'}
      ],
      'correctMatches': {'1': 'c', '2': 'a', '3': 'b', '4': 'd'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 15): Các toán tử tìm kiếm nâng cao của công cụ tìm kiếm Google.',
      'hint': 'Ngoặc kép: chính xác; dấu trừ: loại trừ; site: miền web; filetype: loại tệp.'
    },
    {
      'id': 'tin8-b3-mc3',
      'type': 'multiple_choice',
      'question': 'Khi thu thập dữ liệu phục vụ nghiên cứu học tập, hành vi nào sau đây là ĐÚNG ĐẮN?',
      'options': [
        'Lưu lại đường dẫn liên kết (URL), tên tác giả và ngày truy cập để làm tài liệu tham khảo',
        'Tải ảnh có bản quyền về và xóa hình mờ (watermark) để coi như của mình',
        'Tự ý đăng tải tài liệu nội bộ mật của trường lên diễn đàn công cộng',
        'Tất cả các hành vi trên đều đúng'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 17): Thu thập dữ liệu phải có đạo đức, lưu trữ nguồn gốc rõ ràng và không vi phạm bản quyền.',
      'hint': 'Ghi nhận bản quyền và nguồn gốc tài liệu rõ ràng.'
    },
    {
      'id': 'tin8-b3-mc4',
      'type': 'multiple_choice',
      'question': 'Cú pháp tìm kiếm nào sau đây giúp tìm kiếm các bài viết về bảo vệ môi trường trên trang web của Bộ Tài nguyên Môi trường (monre.gov.vn)?',
      'options': [
        '"bảo vệ môi trường" site:monre.gov.vn',
        '"bảo vệ môi trường" filetype:monre',
        'monre.gov.vn - "bảo vệ môi trường"',
        'search:bảo vệ môi trường in:monre'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 8 KNTT (Trang 15): Cú pháp `site:tên_miền` giới hạn phạm vi tìm kiếm bên trong một trang web xác định.',
      'hint': 'Toán tử site: giúp giới hạn trang web cần tìm kiếm.'
    }
  ],

  'tin8-bai-4': [
    {
      'id': 'tin8-b4-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các hành vi văn hóa và đạo đức trên mạng:',
      'options': [
        'a) Tôn trọng quyền riêng tư của người khác bằng cách không tự ý xem tin nhắn hay đọc lén email',
        'b) Được phép dùng nick ảo để bôi nhọ, nói xấu bạn bè cùng lớp vì không ai biết danh tính thật',
        'c) Mọi sản phẩm trí tuệ có đăng kí bản quyền đều được pháp luật bảo vệ nghiêm ngặt',
        'd) Lan truyền tin giả (Fake News) gây hoang mang dư luận có thể bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 19): Dùng nick ảo bôi nhọ người khác hoặc lan truyền tin giả là hành vi vi phạm pháp luật và đạo đức mạng.',
      'hint': 'Hành vi ẩn danh trên mạng vẫn phải chịu trách nhiệm pháp lí.'
    },
    {
      'id': 'tin8-b4-fb1',
      'type': 'fill_blank',
      'question': 'Luật [1] năm 2018 quy định các biện pháp bảo vệ không gian mạng quốc gia, xử lí nghiêm các hành vi vi phạm [2] và an toàn thông tin.',
      'blankAnswers': ['An ninh mạng', 'bản quyền'],
      'wordBank': ['An ninh mạng', 'bản quyền', 'Giao thông', 'Thương mại', 'Lao động', 'Hình sự'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 20): Luật An ninh mạng năm 2018 của Việt Nam nghiêm cấm hành vi phá hoại thông tin, xâm phạm bản quyền và nhân phẩm người khác.',
      'hint': 'Bộ luật ban hành năm 2018 chuyên về an ninh trên không gian số.'
    },
    {
      'id': 'tin8-b4-m1',
      'type': 'matching',
      'question': 'Nối khái niệm ở cột bên trái với hành vi tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Vi phạm bản quyền phần mềm'},
        {'id': '2', 'text': 'Bắt nạt trên mạng (Cyberbullying)'},
        {'id': '3', 'text': 'Xâm phạm quyền riêng tư'},
        {'id': '4', 'text': 'Hành vi văn hóa trên mạng'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Gửi tin nhắn đe dọa, nhục mạ người khác trên nhóm mạng xã hội'},
        {'id': 'b', 'text': 'Tải phần mềm crack, bẻ khóa không trả phí để sử dụng'},
        {'id': 'c', 'text': 'Tự ý chia sẻ ảnh cá nhân, số điện thoại của bạn bè khi chưa được cho phép'},
        {'id': 'd', 'text': 'Bình luận lịch sự, tôn trọng quan điểm khác biệt của cộng đồng'}
      ],
      'correctMatches': {'1': 'b', '2': 'a', '3': 'c', '4': 'd'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 19, 21): Phân biệt các hành vi đúng chuẩn mực đạo đức và hành vi vi phạm pháp luật mạng.',
      'hint': 'Nối hành vi với khái niệm pháp lí tương ứng.'
    },
    {
      'id': 'tin8-b4-mc1',
      'type': 'multiple_choice',
      'question': 'Khi nhận được một thông tin chưa được kiểm chứng từ một nhóm chat khẳng định ngày mai trường cho nghỉ học khẩn cấp, em nên xử sự thế nào?',
      'options': [
        'Không chia sẻ tin đồn, báo lại cho giáo viên chủ nhiệm hoặc kiểm tra thông báo chính thức của nhà trường',
        'Lập tức chia sẻ lên trang cá nhân Facebook để bạn bè cùng biết',
        'Gửi tiếp tin nhắn cho tất cả các nhóm khác trong danh bạ',
        'Tắt chuông báo thức và quyết định nghỉ học ở nhà luôn'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 21): Ứng xử có trách nhiệm là không phát tán tin thất thiệt, luôn kiểm chứng qua nguồn chính thức.',
      'hint': 'Kiểm chứng nguồn tin chính thức từ giáo viên hoặc nhà trường.'
    },
    {
      'id': 'tin8-b4-mc2',
      'type': 'multiple_choice',
      'question': 'Giấy phép mã nguồn mở (như GPL, MIT, Creative Commons) cho phép người dùng điều gì?',
      'options': [
        'Sử dụng, chia sẻ và có thể chỉnh sửa phần mềm theo các điều kiện minh bạch được tác giả quy định',
        'Có quyền nhận phần mềm đó là do mình sáng chế ra và cấm người khác dùng',
        'Tự do phát tán virus mà không bị trừng phạt',
        'Bán lại phần mềm đó với giá độc quyền cao ngất ngưởng'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 8 KNTT (Trang 20): Bản quyền Creative Commons và phần mềm nguồn mở cho phép cộng đồng tiếp cận, tái sử dụng hợp pháp theo quy ước của tác giả.',
      'hint': 'Mã nguồn mở khuyến khích chia sẻ và phát triển cộng đồng.'
    }
  ],

  'tin8-bai-6': [
    {
      'id': 'tin8-b6-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các thao tác Sắp xếp và Lọc dữ liệu trong bảng tính Excel:',
      'options': [
        'a) Lệnh sắp xếp làm thay đổi thứ tự các hàng trong bảng tính',
        'b) Lệnh lọc dữ liệu sẽ xóa vĩnh viễn các hàng không thỏa mãn điều kiện lọc',
        'c) Có thể sắp xếp dữ liệu theo thứ tự tăng dần (A-Z) hoặc giảm dần (Z-A)',
        'd) Ta có thể lọc dữ liệu theo nhiều tiêu chí cùng một lúc trên các cột khác nhau'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 28): Lọc dữ liệu chỉ tạm thời ẩn đi các hàng không thỏa mãn điều kiện chứ KHÔNG hề xóa chúng.',
      'hint': 'Lọc chỉ ẩn hàng, không làm mất dữ liệu.'
    },
    {
      'id': 'tin8-b6-fb1',
      'type': 'fill_blank',
      'question': 'Để bật tính năng lọc dữ liệu trong bảng tính, ta vào dải lệnh Data và chọn biểu tượng hình [1] có chữ [2].',
      'blankAnswers': ['chiếc phễu', 'Filter'],
      'wordBank': ['chiếc phễu', 'Filter', 'kính lúp', 'Sort', 'ngôi sao', 'Clear'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 28): Nút Filter trong thẻ Data có biểu tượng chiếc phễu lọc quen thuộc.',
      'hint': 'Chiếc phễu dùng để lọc chất lỏng, trong phần mềm là Filter.'
    },
    {
      'id': 'tin8-b6-m1',
      'type': 'matching',
      'question': 'Nối nút lệnh sắp xếp / lọc ở cột bên trái với tác dụng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Sort A to Z'},
        {'id': '2', 'text': 'Sort Z to A'},
        {'id': '3', 'text': 'Filter (Phễu)'},
        {'id': '4', 'text': 'Clear Filter'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Bật/tắt các mũi tên lọc tại tiêu đề cột'},
        {'id': 'b', 'text': 'Sắp xếp theo thứ tự giảm dần'},
        {'id': 'c', 'text': 'Hủy bỏ bộ lọc để hiển thị lại toàn bộ dữ liệu'},
        {'id': 'd', 'text': 'Sắp xếp theo thứ tự tăng dần'}
      ],
      'correctMatches': {'1': 'd', '2': 'b', '3': 'a', '4': 'c'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 26, 28): A-Z: tăng dần; Z-A: giảm dần; Filter: lọc; Clear: hiển thị lại tất cả.',
      'hint': 'A to Z là tăng dần từ nhỏ đến lớn.'
    }
  ],

  'tin8-bai-7': [
    {
      'id': 'tin8-b7-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về Biểu đồ (Chart) trong bảng tính:',
      'options': [
        'a) Biểu đồ giúp người đọc dễ so sánh và phát hiện xu hướng biến động của số liệu trực quan',
        'b) Biểu đồ hình tròn (Pie chart) thích hợp nhất để thể hiện tỉ lệ phần trăm các thành phần trong tổng thể',
        'c) Biểu đồ cột (Column chart) thích hợp nhất để so sánh dữ liệu giữa các đối tượng khác nhau',
        'd) Sau khi đã tạo biểu đồ thì không thể thay đổi loại biểu đồ hay màu sắc của nó được nữa'
      ],
      'trueFalseAnswers': [True, True, True, False],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 32): Người dùng hoàn toàn có thể nhấp chuột vào biểu đồ và chọn Change Chart Type để đổi kiểu biểu đồ bất kì lúc nào.',
      'hint': 'Biểu đồ có thể chỉnh sửa và thay đổi kiểu linh hoạt.'
    },
    {
      'id': 'tin8-b7-fb1',
      'type': 'fill_blank',
      'question': 'Để vẽ biểu đồ trong Excel, sau khi chọn khối dữ liệu, ta nhấp vào dải lệnh [1] và lựa chọn dạng biểu đồ trong nhóm [2].',
      'blankAnswers': ['Insert', 'Charts'],
      'wordBank': ['Insert', 'Charts', 'Data', 'Tables', 'Format', 'View'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 33): Chèn biểu đồ thực hiện tại Insert -> nhóm Charts.',
      'hint': 'Insert là chèn, Charts là biểu đồ.'
    },
    {
      'id': 'tin8-b7-m1',
      'type': 'matching',
      'question': 'Nối loại biểu đồ ở cột bên trái với mục đích sử dụng phù hợp nhất ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Biểu đồ cột (Column / Bar)'},
        {'id': '2', 'text': 'Biểu đồ đường (Line)'},
        {'id': '3', 'text': 'Biểu đồ tròn (Pie)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Thể hiện tỉ lệ phần trăm của từng khoản chi tiêu trong ngân sách tháng'},
        {'id': 'b', 'text': 'So sánh số lượng học sinh đạt điểm Giỏi giữa 4 lớp trong khối 8'},
        {'id': 'c', 'text': 'Theo dõi xu hướng tăng giảm nhiệt độ trung bình qua 12 tháng trong năm'}
      ],
      'correctMatches': {'1': 'b', '2': 'c', '3': 'a'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 32): Biểu đồ cột: so sánh; đường: xu hướng thời gian; tròn: cơ cấu tỉ lệ %.',
      'hint': 'Tròn là cơ cấu tỉ lệ; đường là xu hướng biến thiên; cột là so sánh.'
    },
    {
      'id': 'tin8-b7-mc1',
      'type': 'multiple_choice',
      'question': 'Thành phần nào trên biểu đồ giải thích cho người đọc biết mỗi màu sắc đại diện cho đại lượng nào?',
      'options': [
        'Chú giải (Legend)',
        'Tiêu đề biểu đồ (Chart Title)',
        'Trục tọa độ ngang (Horizontal Axis)',
        'Đường lưới nền (Gridlines)'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 33): Legend (chú giải) hiển thị mẫu màu hoặc kí hiệu kèm tên chuỗi dữ liệu để người xem phân biệt.',
      'hint': 'Legend là phần chú giải kí hiệu màu sắc.'
    }
  ],

  'tin8-bai-8a': [
    {
      'id': 'tin8-b8a-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về danh sách liệt kê và chèn hình ảnh:',
      'options': [
        'a) Danh sách dạng số thứ tự (Numbering) dùng khi thứ tự các mục có vai trò quan trọng (như các bước tiến hành)',
        'b) Danh sách dấu đầu dòng (Bullets) dùng khi các mục có vai trò ngang hàng nhau và thứ tự không quan trọng',
        'c) Ta không thể đổi biểu tượng dấu đầu dòng mặc định thành các hình vẽ khác',
        'd) Nhấn phím Enter hai lần liên tiếp sẽ kết thúc danh sách dạng liệt kê'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 37): Hoàn toàn có thể tùy biến đổi biểu tượng Bullets thành ngôi sao, dấu tích, mũi tên... qua Define New Bullet.',
      'hint': 'Người dùng có thể tự chọn biểu tượng bullet tùy ý.'
    },
    {
      'id': 'tin8-b8a-fb1',
      'type': 'fill_blank',
      'question': 'Để đánh số thứ tự tự động cho các bước thực hiện, ta chọn công cụ [1], còn để tạo dấu hoa thị đầu dòng ta chọn công cụ [2].',
      'blankAnswers': ['Numbering', 'Bullets'],
      'wordBank': ['Numbering', 'Bullets', 'Multilevel List', 'Paragraph', 'Font', 'Styles'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 37): Numbering đánh số thứ tự (1, 2, 3...), Bullets tạo danh sách dấu chấm/dấu gạch.',
      'hint': 'Numbering là số, Bullets là kí hiệu dấu.'
    },
    {
      'id': 'tin8-b8a-m1',
      'type': 'matching',
      'question': 'Nối thao tác định dạng danh sách ở cột bên trái với kết quả tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Nhấn phím Tab ở đầu dòng mục liệt kê'},
        {'id': '2', 'text': 'Nhấn tổ hợp Shift + Tab ở đầu dòng'},
        {'id': '3', 'text': 'Nhấn Enter hai lần liên tiếp'},
        {'id': '4', 'text': 'Chọn lệnh Wrap Text -> In Front of Text'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Giảm cấp độ thụt lề lùi ra ngoài một bậc'},
        {'id': 'b', 'text': 'Tăng thụt lề vào trong tạo danh sách cấp con (Sub-list)'},
        {'id': 'c', 'text': 'Hình ảnh nằm đè lên trên che khuất chữ'},
        {'id': 'd', 'text': 'Thoát khỏi chế độ danh sách liệt kê'}
      ],
      'correctMatches': {'1': 'b', '2': 'a', '3': 'd', '4': 'c'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 38): Phím Tab thụt lề cấp con, Shift+Tab lùi cấp cha, Enter 2 lần thoát list.',
      'hint': 'Tab lùi vào, Shift+Tab lùi ra.'
    },
    {
      'id': 'tin8-b8a-mc3',
      'type': 'multiple_choice',
      'question': 'Khi chèn ảnh vào văn bản, công cụ Crop trong thẻ Picture Format có tác dụng gì?',
      'options': [
        'Cắt bỏ những phần rìa thừa không cần thiết của bức ảnh',
        'Xoay ảnh 90 độ sang phải',
        'Đổi màu ảnh thành đen trắng',
        'Tăng độ sáng chói cho ảnh'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 41): Lệnh Crop dùng để cắt tỉa bớt các viền ngoài không cần thiết của ảnh.',
      'hint': 'Crop là thao tác cắt cúp khung hình.'
    }
  ],

  'tin8-bai-9a': [
    {
      'id': 'tin8-b9a-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về Đầu trang (Header) và Chân trang (Footer):',
      'options': [
        'a) Nội dung trong Header sẽ tự động hiển thị ở mép trên cùng của mọi trang văn bản',
        'b) Footer thường được sử dụng để hiển thị số trang, ngày tháng hoặc tên tác giả ở mép dưới',
        'c) Khi chỉnh sửa nội dung Header trên một trang thì các trang khác sẽ không thay đổi',
        'd) Có thể thiết lập trang bìa đầu tiên không hiển thị Header/Footer bằng tùy chọn Different First Page'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 43): Header và Footer mang tính lặp lại toàn văn bản; sửa trên một trang sẽ tự động đồng bộ trên toàn bộ tài liệu.',
      'hint': 'Header/Footer mang tính đồng bộ xuyên suốt các trang.'
    },
    {
      'id': 'tin8-b9a-fb1',
      'type': 'fill_blank',
      'question': 'Để chèn đầu trang và chân trang trong Word, ta vào dải lệnh [1], nhóm [2] rồi chọn Header hoặc Footer.',
      'blankAnswers': ['Insert', 'Header & Footer'],
      'wordBank': ['Insert', 'Header & Footer', 'Layout', 'Page Setup', 'Home', 'View'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 43): Chèn Header/Footer nằm trong tab Insert -> nhóm Header & Footer.',
      'hint': 'Insert là dải lệnh chèn thêm đối tượng.'
    },
    {
      'id': 'tin8-b9a-m1',
      'type': 'matching',
      'question': 'Nối tùy chọn Header/Footer ở cột bên trái với chức năng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Different First Page'},
        {'id': '2', 'text': 'Different Odd & Even Pages'},
        {'id': '3', 'text': 'Page Number -> Bottom of Page'},
        {'id': '4', 'text': 'Close Header and Footer'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Đánh số trang tự động ở mép dưới trang văn bản'},
        {'id': 'b', 'text': 'Tạo tiêu đề trang chẵn và trang lẻ khác nhau (như in sách)'},
        {'id': 'c', 'text': 'Không áp dụng tiêu đề chung cho trang bìa đầu tiên'},
        {'id': 'd', 'text': 'Đóng chế độ chỉnh sửa đầu/chân trang quay về soạn thảo'}
      ],
      'correctMatches': {'1': 'c', '2': 'b', '3': 'a', '4': 'd'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 44): Các tùy biến nâng cao chuyên nghiệp trong thiết kế Header/Footer.',
      'hint': 'Different First Page dành cho trang bìa.'
    },
    {
      'id': 'tin8-b9a-mc1',
      'type': 'multiple_choice',
      'question': 'Để thoát khỏi chế độ chỉnh sửa Header và Footer một cách nhanh nhất, em thao tác thế nào?',
      'options': [
        'Nhấn đúp chuột vào vùng nội dung chính giữa trang giấy',
        'Tắt phần mềm soạn thảo Word',
        'Nhấn phím Backspace liên tục',
        'Nhấn tổ hợp phím Ctrl + Z'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 43): Nhấp đúp chuột vào phần thân văn bản là cách nhanh nhất để đóng Header/Footer.',
      'hint': 'Nhấp đúp chuột vào phần văn bản thông thường.'
    }
  ],

  'tin8-bai-10a': [
    {
      'id': 'tin8-b10a-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về định dạng trang chiếu trong PowerPoint:',
      'options': [
        'a) Màu nền trang chiếu nên tương phản rõ nét với màu chữ để khán giả dễ đọc từ xa',
        'b) Nên đưa toàn bộ nội dung sách giáo khoa lên trang chiếu dưới dạng các đoạn văn dài',
        'c) Ta có thể áp dụng một chủ đề (Theme) định dạng sẵn cho toàn bộ bài trình chiếu chỉ bằng một nhấp chuột',
        'd) Các trang chiếu trong bài nên có sự thống nhất về phông chữ và phong cách thiết kế'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 48): Trang chiếu chỉ nên chứa từ khóa, ý chính, sơ đồ; không chép nguyên văn cả đoạn văn dài.',
      'hint': 'Trang chiếu nhấn mạnh từ khóa cô đọng, tránh dày đặc chữ.'
    },
    {
      'id': 'tin8-b10a-fb1',
      'type': 'fill_blank',
      'question': 'Để áp dụng các mẫu thiết kế phối sẵn màu sắc, phông chữ và hình nền cho toàn bộ bài chiếu, ta vào dải lệnh [1] và chọn một mẫu trong nhóm [2].',
      'blankAnswers': ['Design', 'Themes'],
      'wordBank': ['Design', 'Themes', 'Transitions', 'Animations', 'Insert', 'Variants'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 48): Dải lệnh Design chứa bộ sưu tập Themes thiết kế sẵn cho bài thuyết trình.',
      'hint': 'Design là thiết kế, Themes là chủ đề giao diện.'
    },
    {
      'id': 'tin8-b10a-m1',
      'type': 'matching',
      'question': 'Nối yếu tố định dạng trang chiếu ở cột bên trái với yêu cầu thẩm mĩ ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Màu nền trang chiếu'},
        {'id': '2', 'text': 'Phông chữ (Font)'},
        {'id': '3', 'text': 'Nội dung chữ'},
        {'id': '4', 'text': 'Hình ảnh minh họa'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Rõ nét, liên quan trực tiếp đến chủ đề bài học'},
        {'id': 'b', 'text': 'Ngắn gọn, súc tích, làm nổi bật các từ khóa chính'},
        {'id': 'c', 'text': 'Dễ đọc, không quá cầu kì uốn lượn, cỡ chữ đủ lớn từ 24pt trở lên'},
        {'id': 'd', 'text': 'Đơn giản, nhã nhặn, tương phản tốt với màu văn bản'}
      ],
      'correctMatches': {'1': 'd', '2': 'c', '3': 'b', '4': 'a'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 49): Các nguyên tắc thiết kế bài trình chiếu trực quan và chuyên nghiệp.',
      'hint': 'Phông chữ dễ đọc, màu tương phản, chữ cô đọng.'
    },
    {
      'id': 'tin8-b10a-mc1',
      'type': 'multiple_choice',
      'question': 'Để đánh số trang chiếu tự động và thêm tên người thuyết trình vào chân trang của mỗi slide, ta chọn lệnh nào?',
      'options': [
        'Insert -> Header & Footer',
        'Home -> Replace',
        'Animations -> Add Animation',
        'Slide Show -> Set Up Slide Show'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 50): Trong PowerPoint, lệnh Header & Footer nằm ở dải lệnh Insert cho phép đánh số slide và điền chân trang.',
      'hint': 'Tương tự như phần mềm Word, dùng Header & Footer.'
    }
  ],

  'tin8-bai-11a': [
    {
      'id': 'tin8-b11a-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về việc sử dụng Bản mẫu (Template) trong bài trình chiếu:',
      'options': [
        'a) Bản mẫu (Template) là tệp bài trình chiếu đã được thiết kế sẵn bố cục, hình ảnh, màu sắc cho một chủ đề cụ thể',
        'b) Khi dùng bản mẫu, người dùng bắt buộc phải giữ nguyên toàn bộ nội dung chữ gốc mà không được sửa',
        'c) Sử dụng bản mẫu giúp tiết kiệm đáng kể thời gian thiết kế và đảm bảo tính chuyên nghiệp của bài thuyết trình',
        'd) Ta có thể tải thêm nhiều bản mẫu trực tuyến miễn phí do Microsoft cung cấp'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 53): Người dùng chỉ cần thay thế các văn bản giữ chỗ (Placeholders) bằng nội dung của chính mình.',
      'hint': 'Bản mẫu cho phép thay thế nội dung thoải mái.'
    },
    {
      'id': 'tin8-b11a-fb1',
      'type': 'fill_blank',
      'question': 'Bản mẫu (Template) cung cấp sẵn các khung văn bản [1], người sử dụng chỉ cần nhấp chuột vào đó để nhập nội dung [2] của mình.',
      'blankAnswers': ['giữ chỗ', 'thay thế'],
      'wordBank': ['giữ chỗ', 'thay thế', 'bảo mật', 'khóa cố định', 'tự động dịch', 'mã hóa'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 53): Các khung văn bản giữ chỗ (Click to add text) được thiết kế để người dùng thay thế nội dung nhanh chóng.',
      'hint': 'Khung văn bản chờ sẵn để thay thế nội dung.'
    },
    {
      'id': 'tin8-b11a-m1',
      'type': 'matching',
      'question': 'Nối thao tác sử dụng bản mẫu ở cột bên trái với tác dụng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Vào File -> New -> Chọn Template'},
        {'id': '2', 'text': 'Slide Master'},
        {'id': '3', 'text': 'Reset Slide'},
        {'id': '4', 'text': 'Save As Template (.potx)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Lưu tệp bài trình chiếu dưới dạng bản mẫu để dùng lại sau này'},
        {'id': 'b', 'text': 'Tạo bài trình chiếu mới dựa trên mẫu thiết kế có sẵn'},
        {'id': 'c', 'text': 'Khôi phục lại định dạng ban đầu của bản mẫu nếu vô tình làm biến dạng'},
        {'id': 'd', 'text': 'Công cụ chỉnh sửa bố cục trang mẫu chủ đạo của toàn bộ bài'}
      ],
      'correctMatches': {'1': 'b', '2': 'd', '3': 'c', '4': 'a'},
      'options': [],
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 8 KNTT (Trang 54): Các thao tác chuyên sâu khi quản lí bản mẫu Template trong PowerPoint.',
      'hint': 'Slide Master là trang mẫu chủ đạo chi phối toàn bộ các slide.'
    },
    {
      'id': 'tin8-b11a-mc1',
      'type': 'multiple_choice',
      'question': 'Đuôi tệp tin mở rộng đặc trưng của bản mẫu bài trình chiếu PowerPoint là gì?',
      'options': [
        '.potx',
        '.docx',
        '.xlsx',
        '.mp4'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 8 KNTT: Tệp mẫu bài chiếu lưu dưới dạng .potx (PowerPoint Template), khác với tệp trình chiếu thông thường là .pptx.',
      'hint': 'Chữ T trong .potx đại diện cho Template.'
    }
  ]
}

if __name__ == '__main__':
    print("Grade 8 Supplements Part 1 ready.")
    for k, v in SUPPLEMENTS_P1.items():
        print(f"  {k}: {len(v)} câu")
