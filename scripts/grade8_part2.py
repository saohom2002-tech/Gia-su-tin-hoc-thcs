# -*- coding: utf-8 -*-
"""
Grade 8 supplements - Part 2:
Lessons: tin8-bai-8b, tin8-bai-9b, tin8-bai-10b, tin8-bai-11b, tin8-bai-12, tin8-bai-13, tin8-bai-14, tin8-bai-15, tin8-bai-16
"""

SUPPLEMENTS_P2 = {
  'tin8-bai-8b': [
    {
      'id': 'tin8-b8b-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về phần mềm chỉnh sửa ảnh (GIMP / Photoshop):',
      'options': [
        'a) GIMP là phần mềm nguồn mở, miễn phí chuyên dùng để xử lí và chỉnh sửa ảnh kĩ thuật số',
        'b) Ảnh kĩ thuật số dạng raster được tạo nên từ một mạng lưới các điểm ảnh (Pixel)',
        'c) Khi phóng to một ảnh raster quá nhiều lần, ảnh vẫn luôn sắc nét và không bao giờ bị vỡ hạt',
        'd) Mỗi điểm ảnh (Pixel) mang một màu sắc xác định được biểu diễn bằng các kênh màu số'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 57): Ảnh raster tạo bởi các pixel, khi phóng to quá giới hạn sẽ thấy rõ các ô vuông điểm ảnh bị vỡ hạt (răng cưa).',
      'hint': 'Ảnh raster phóng to quá mức sẽ bị vỡ hạt.'
    },
    {
      'id': 'tin8-b8b-fb1',
      'type': 'fill_blank',
      'question': 'Thành phần cơ bản cấu tạo nên bức ảnh kĩ thuật số gọi là [1], còn phần mềm chỉnh sửa ảnh nguồn mở phổ biến trong chương trình là [2].',
      'blankAnswers': ['điểm ảnh (Pixel)', 'GIMP'],
      'wordBank': ['điểm ảnh (Pixel)', 'GIMP', 'đoạn văn', 'Excel', 'vector', 'Scratch'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 57): Pixel là đơn vị nhỏ nhất tạo nên bức ảnh số; GIMP là phần mềm chỉnh sửa ảnh được giới thiệu trong SGK.',
      'hint': 'Pixel là điểm ảnh, GIMP là phần mềm xử lí ảnh nguồn mở.'
    },
    {
      'id': 'tin8-b8b-m1',
      'type': 'matching',
      'question': 'Nối công cụ trên thanh công cụ GIMP ở cột bên trái với chức năng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Move Tool (biểu tượng 4 mũi tên)'},
        {'id': '2', 'text': 'Zoom Tool (kính lúp)'},
        {'id': '3', 'text': 'Rectangle Select Tool'},
        {'id': '4', 'text': 'Eraser Tool (cục tẩy)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Phóng to hoặc thu nhỏ vùng nhìn của bức ảnh'},
        {'id': 'b', 'text': 'Di chuyển các đối tượng hoặc lớp ảnh trên khung vẽ'},
        {'id': 'c', 'text': 'Xóa bỏ các điểm ảnh trên lớp hiện tại'},
        {'id': 'd', 'text': 'Tạo vùng chọn hình chữ nhật trên ảnh'}
      ],
      'correctMatches': {'1': 'b', '2': 'a', '3': 'd', '4': 'c'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 58): Các công cụ cơ bản trong hộp công cụ (Toolbox) của phần mềm GIMP.',
      'hint': 'Move: di chuyển; Zoom: phóng to; Select: chọn vùng; Eraser: tẩy.'
    },
    {
      'id': 'tin8-b8b-mc1',
      'type': 'multiple_choice',
      'question': 'Định dạng tệp tin lưu trữ dự án làm việc riêng của phần mềm GIMP (giữ nguyên các lớp layer) có phần mở rộng là gì?',
      'options': [
        '.xcf',
        '.docx',
        '.psd',
        '.mp3'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 8 KNTT (Trang 59): Đuôi tệp dự án của GIMP là .xcf, cho phép lưu đầy đủ các lớp ảnh và kênh chỉnh sửa.',
      'hint': 'Đuôi tệp tin ba chữ cái bắt đầu bằng chữ X.'
    }
  ],

  'tin8-bai-9b': [
    {
      'id': 'tin8-b9b-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các thao tác thay đổi khung hình và kích thước ảnh:',
      'options': [
        'a) Cắt xén ảnh (Crop) giúp loại bỏ các chi tiết thừa xung quanh và tập trung vào chủ thể chính',
        'b) Khi thay đổi kích thước ảnh (Scale Image), luôn nên khóa tỉ lệ khung hình (Aspect Ratio) để ảnh không bị méo',
        'c) Giảm kích thước ảnh và độ phân giải sẽ làm tăng dung lượng tệp tin lưu trữ',
        'd) Ta có thể xoay ảnh theo các góc 90 độ, 180 độ hoặc lật ảnh theo chiều ngang/dọc'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 62): Giảm kích thước và độ phân giải sẽ làm GIẢM dung lượng tệp tin, giúp tải ảnh lên mạng nhanh hơn.',
      'hint': 'Giảm kích thước giúp ảnh nhẹ hơn.'
    },
    {
      'id': 'tin8-b9b-fb1',
      'type': 'fill_blank',
      'question': 'Để cắt xén bớt phần rìa ngoài của ảnh, ta dùng công cụ [1], còn để phóng to hoặc thu nhỏ kích thước toàn bộ ảnh ta dùng lệnh [2].',
      'blankAnswers': ['Crop Tool', 'Scale Image'],
      'wordBank': ['Crop Tool', 'Scale Image', 'Rotate Tool', 'Flip Tool', 'Text Tool', 'Bucket Fill'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 61, 63): Crop Tool dùng để cắt ảnh, Scale Image dùng để thay đổi kích thước ảnh.',
      'hint': 'Crop là cắt cúp, Scale là co giãn tỉ lệ.'
    },
    {
      'id': 'tin8-b9b-m1',
      'type': 'matching',
      'question': 'Nối công cụ điều chỉnh hình học ở cột bên trái với tác dụng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Crop Tool'},
        {'id': '2', 'text': 'Rotate Tool'},
        {'id': '3', 'text': 'Flip Tool'},
        {'id': '4', 'text': 'Scale Tool'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Lật ngược bức ảnh theo trục dọc hoặc trục ngang như soi gương'},
        {'id': 'b', 'text': 'Xoay bức ảnh một góc bất kì quanh tâm xoay'},
        {'id': 'c', 'text': 'Cắt bỏ phần ngoài rìa của ảnh để lấy khung hình mong muốn'},
        {'id': 'd', 'text': 'Thay đổi độ dài và độ rộng của ảnh'}
      ],
      'correctMatches': {'1': 'c', '2': 'b', '3': 'a', '4': 'd'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 62, 63): Các công cụ biến đổi hình học cơ bản trong phần mềm chỉnh sửa ảnh.',
      'hint': 'Crop: cắt; Rotate: xoay; Flip: lật; Scale: đổi kích thước.'
    },
    {
      'id': 'tin8-b9b-mc1',
      'type': 'multiple_choice',
      'question': 'Độ phân giải của một bức ảnh kĩ thuật số thường được đo bằng đơn vị nào?',
      'options': [
        'DPI (Dots Per Inch) hoặc PPI (Pixels Per Inch)',
        'Km/h (Kilomet trên giờ)',
        'GB (Gigabyte)',
        'Hz (Hertz)'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 63): Độ phân giải điểm ảnh đo bằng PPI (Pixels Per Inch) hoặc DPI (Dots Per Inch).',
      'hint': 'Số điểm ảnh trên một inch chiều dài.'
    }
  ],

  'tin8-bai-10b': [
    {
      'id': 'tin8-b10b-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các thao tác thêm văn bản và tạo hiệu ứng cho ảnh:',
      'options': [
        'a) Khi chèn văn bản bằng Text Tool, phần mềm thường tự động tạo một Lớp ảnh mới (Text Layer)',
        'b) Không thể thay đổi màu sắc và phông chữ sau khi đã gõ văn bản lên ảnh',
        'c) Bộ lọc hiệu ứng (Filters) giúp tạo các hiệu ứng đặc biệt như làm mờ, tăng nét, đổ bóng cho ảnh',
        'd) Các lớp ảnh nằm ở phía trên trong bảng quản lí Layers sẽ che khuất các lớp nằm ở phía dưới'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 66): Văn bản trong Text Layer có thể chỉnh sửa lại nội dung, đổi màu, đổi phông chữ bất kì lúc nào.',
      'hint': 'Văn bản trên Text Layer hoàn toàn chỉnh sửa lại được.'
    },
    {
      'id': 'tin8-b10b-fb1',
      'type': 'fill_blank',
      'question': 'Khái niệm [1] trong phần mềm đồ họa giống như các tấm kính trong suốt xếp chồng lên nhau, còn dải lệnh [2] chứa các hiệu ứng làm mờ hoặc làm sắc nét ảnh.',
      'blankAnswers': ['Lớp (Layer)', 'Filters'],
      'wordBank': ['Lớp (Layer)', 'Filters', 'Kênh màu', 'Tools', 'View', 'History'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 65, 68): Lớp (Layer) là khái niệm cốt lõi của xử lí ảnh; Filters cung cấp các hiệu ứng nghệ thuật.',
      'hint': 'Layer là các lớp kính trong suốt xếp chồng lên nhau.'
    },
    {
      'id': 'tin8-b10b-m1',
      'type': 'matching',
      'question': 'Nối hiệu ứng trong menu Filters ở cột bên trái với tác dụng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Gaussian Blur'},
        {'id': '2', 'text': 'Unsharp Mask (Sharpen)'},
        {'id': '3', 'text': 'Drop Shadow'},
        {'id': '4', 'text': 'Text Tool (chữ A)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Tạo bóng đổ cho chữ hoặc đối tượng nổi bật trên nền'},
        {'id': 'b', 'text': 'Tạo độ mờ mềm mại cho hậu cảnh (xóa phông)'},
        {'id': 'c', 'text': 'Làm tăng độ sắc nét cho bức ảnh bị mờ nhẹ'},
        {'id': 'd', 'text': 'Thêm lời chú thích, tiêu đề văn bản vào bức ảnh'}
      ],
      'correctMatches': {'1': 'b', '2': 'c', '3': 'a', '4': 'd'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 68): Blur là làm mờ; Sharpen làm nét; Drop Shadow tạo bóng đổ; Text Tool viết chữ.',
      'hint': 'Blur: làm mờ xóa phông; Shadow: đổ bóng.'
    },
    {
      'id': 'tin8-b10b-mc1',
      'type': 'multiple_choice',
      'question': 'Muốn làm nổi bật chủ thể chính ở tiền cảnh, người chỉnh sửa ảnh thường áp dụng hiệu ứng nào cho hậu cảnh (nền phía sau)?',
      'options': [
        'Làm mờ nền bằng bộ lọc Blur (xóa phông)',
        'Tô đen toàn bộ ảnh',
        'Tăng độ sáng chói tối đa cho toàn ảnh',
        'Xoay ảnh 180 độ'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 68): Làm mờ hậu cảnh (Blur) giúp thị giác người xem tập trung trọn vẹn vào chủ thể phía trước.',
      'hint': 'Hiệu ứng xóa phông làm mờ hậu cảnh.'
    }
  ],

  'tin8-bai-11b': [
    {
      'id': 'tin8-b11b-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về quy trình thực hành thiết kế ấn phẩm số (áp phích, thiệp chúc mừng):',
      'options': [
        'a) Cần phác thảo ý tưởng bố cục và màu sắc trước khi mở phần mềm thực hiện',
        'b) Khi xuất sản phẩm để chia sẻ qua Zalo hoặc Facebook, nên xuất sang định dạng .png hoặc .jpg',
        'c) Sau khi đã xuất sang tệp .jpg thì vẫn có thể mở lại để chỉnh sửa từng lớp layer một cách độc lập',
        'd) Tệp gốc có đuôi .xcf nên được lưu trữ cẩn thận để có thể chỉnh sửa lại sau này'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 71): Định dạng .jpg/.png đã ghép phẳng (flatten) tất cả các lớp thành một, không thể tách lớp sửa lại được nữa.',
      'hint': 'Tệp .jpg đã gộp tất cả các lớp lại thành một bức ảnh phẳng.'
    },
    {
      'id': 'tin8-b11b-fb1',
      'type': 'fill_blank',
      'question': 'Để lưu lại tệp dự án chứa các lớp layer ta chọn lệnh [1], còn để xuất ảnh sang định dạng JPG hoặc PNG để đăng mạng xã hội ta chọn lệnh [2].',
      'blankAnswers': ['Save As (.xcf)', 'Export As (.jpg/.png)'],
      'wordBank': ['Save As (.xcf)', 'Export As (.jpg/.png)', 'Print', 'Import', 'Cut', 'Paste'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 71): Save As lưu tệp dự án .xcf; Export As xuất ảnh thành phẩm phổ thông (.jpg, .png).',
      'hint': 'Save lưu dự án, Export xuất sản phẩm.'
    },
    {
      'id': 'tin8-b11b-m1',
      'type': 'matching',
      'question': 'Nối định dạng tệp ảnh ở cột bên trái với đặc điểm phù hợp nhất ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Tệp .xcf'},
        {'id': '2', 'text': 'Tệp .png'},
        {'id': '3', 'text': 'Tệp .jpg (.jpeg)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Định dạng ảnh nén phổ biến nhất thế giới, kích thước tệp nhẹ phù hợp đăng web'},
        {'id': 'b', 'text': 'Định dạng ảnh hỗ trợ vùng nền trong suốt (Transparency), chất lượng cao'},
        {'id': 'c', 'text': 'Tệp dự án độc quyền của GIMP, lưu đầy đủ mọi lớp layer và lịch sử'}
      ],
      'correctMatches': {'1': 'c', '2': 'b', '3': 'a'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 71): Phân biệt 3 định dạng phổ biến nhất trong thiết kế đồ họa.',
      'hint': 'PNG hỗ trợ nền trong suốt; JPG nhẹ phổ biến; XCF là tệp nguồn GIMP.'
    },
    {
      'id': 'tin8-b11b-mc1',
      'type': 'multiple_choice',
      'question': 'Trong một bức thiệp chúc mừng, yếu tố nào cần được thiết kế nổi bật và trang trọng nhất?',
      'options': [
        'Dòng chữ thông điệp chúc mừng (chủ đề chính)',
        'Địa chỉ trang web của người thiết kế',
        'Họa tiết đường viền hoa văn xung quanh',
        'Màu nền của thiệp'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 70): Thông điệp chính của thiệp là yếu tố cốt lõi cần được ưu tiên nổi bật nhất.',
      'hint': 'Thông điệp chính là nội dung quan trọng nhất của thiệp.'
    }
  ],

  'tin8-bai-12': [
    {
      'id': 'tin8-b12-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về mối quan hệ giữa thuật toán và chương trình:',
      'options': [
        'a) Thuật toán là ý tưởng và các bước giải quyết vấn đề dưới dạng con người hiểu được',
        'b) Chương trình máy tính là bản mô tả thuật toán bằng một ngôn ngữ lập trình cụ thể để máy tính thực hiện',
        'c) Một thuật toán chỉ có thể được viết thành duy nhất một chương trình bằng một ngôn ngữ lập trình duy nhất',
        'd) Trước khi viết mã lệnh (code), người lập trình viên cần thiết kế thuật toán trước'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 74): Một thuật toán có thể được cài đặt bằng nhiều ngôn ngữ lập trình khác nhau (Scratch, Python, C++, Pascal...).',
      'hint': 'Một thuật toán có thể cài đặt bằng nhiều ngôn ngữ khác nhau.'
    },
    {
      'id': 'tin8-b12-fb1',
      'type': 'fill_blank',
      'question': 'Để máy tính có thể hiểu và thực hiện được thuật toán, ta cần chuyển thuật toán đó thành [1] bằng một [2] xác định.',
      'blankAnswers': ['chương trình', 'ngôn ngữ lập trình'],
      'wordBank': ['chương trình', 'ngôn ngữ lập trình', 'hình vẽ', 'tệp âm thanh', 'bảng tính', 'sách in'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 74): Chuyển thuật toán thành chương trình bằng ngôn ngữ lập trình.',
      'hint': 'Chương trình được viết bằng ngôn ngữ lập trình.'
    },
    {
      'id': 'tin8-b12-m1',
      'type': 'matching',
      'question': 'Nối khái niệm ở cột bên trái với bản chất tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Bài toán (Problem)'},
        {'id': '2', 'text': 'Thuật toán (Algorithm)'},
        {'id': '3', 'text': 'Chương trình (Program)'},
        {'id': '4', 'text': 'Môi trường lập trình'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Dãy các chỉ dẫn từng bước để giải quyết vấn đề'},
        {'id': 'b', 'text': 'Công việc hoặc nhiệm vụ cần máy tính giải quyết từ Input ra Output'},
        {'id': 'c', 'text': 'Phần mềm cung cấp công cụ soạn thảo, dịch và chạy mã lệnh'},
        {'id': 'd', 'text': 'Mã lệnh hoàn chỉnh được viết bằng ngôn ngữ máy hoặc bậc cao'}
      ],
      'correctMatches': {'1': 'b', '2': 'a', '3': 'd', '4': 'c'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 73-75): Các khái niệm nền tảng trong khoa học máy tính.',
      'hint': 'Bài toán: nhiệm vụ; Thuật toán: cách giải; Chương trình: mã thực thi.'
    },
    {
      'id': 'tin8-b12-mc1',
      'type': 'multiple_choice',
      'question': 'Khi viết chương trình, nếu máy tính báo lỗi cú pháp (Syntax Error), nguyên nhân là gì?',
      'options': [
        'Người lập trình viết sai quy tắc hoặc từ khóa của ngôn ngữ lập trình',
        'Máy tính bị mất kết nối mạng Internet',
        'Dữ liệu đầu vào quá nhỏ',
        'Màn hình máy tính bị hỏng màu'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 75): Lỗi cú pháp xảy ra khi câu lệnh vi phạm quy tắc chính tả, ngữ pháp của ngôn ngữ lập trình đó.',
      'hint': 'Vi phạm quy tắc viết lệnh của ngôn ngữ lập trình.'
    }
  ],

  'tin8-bai-13': [
    {
      'id': 'tin8-b13-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về Biến (Variable) và Hằng (Constant):',
      'options': [
        'a) Biến là một vùng nhớ được đặt tên dùng để lưu trữ dữ liệu có thể thay đổi trong khi chương trình chạy',
        'b) Hằng là đại lượng có giá trị không bao giờ thay đổi trong suốt quá trình chạy chương trình',
        'c) Tên biến có thể bắt đầu bằng một chữ số và chứa dấu cách trắng tự do',
        'd) Trong Python hay Scratch, ta có thể gán giá trị mới cho biến bằng phép gán'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 78): Tên biến KHÔNG được bắt đầu bằng chữ số và KHÔNG được chứa khoảng trắng.',
      'hint': 'Tên biến không được chứa dấu cách.'
    },
    {
      'id': 'tin8-b13-fb1',
      'type': 'fill_blank',
      'question': 'Đại lượng có giá trị có thể thay đổi trong quá trình thực hiện chương trình gọi là [1], còn đại lượng có giá trị cố định không đổi gọi là [2].',
      'blankAnswers': ['Biến (Variable)', 'Hằng (Constant)'],
      'wordBank': ['Biến (Variable)', 'Hằng (Constant)', 'Hàm', 'Tham số', 'Điều kiện', 'Biểu thức'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 78): Biến có thể thay đổi giá trị, hằng có giá trị cố định.',
      'hint': 'Biến đổi = biến; cố định bất biến = hằng.'
    },
    {
      'id': 'tin8-b13-m1',
      'type': 'matching',
      'question': 'Nối kiểu dữ liệu ở cột bên trái với ví dụ giá trị phù hợp ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Kiểu số nguyên (Integer)'},
        {'id': '2', 'text': 'Kiểu số thực (Float)'},
        {'id': '3', 'text': 'Kiểu xâu kí tự (String)'},
        {'id': '4', 'text': 'Kiểu logic (Boolean)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': '"Học sinh giỏi môn Tin"'},
        {'id': 'b', 'text': 'True hoặc False'},
        {'id': 'c', 'text': '-15, 0, 100'},
        {'id': 'd', 'text': '3.14, -0.5, 9.8'}
      ],
      'correctMatches': {'1': 'c', '2': 'd', '3': 'a', '4': 'b'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 79): Các kiểu dữ liệu cơ bản trong lập trình: số nguyên, số thực, xâu, logic.',
      'hint': 'Số nguyên: không có phẩy; số thực: có phần thập phân; xâu: trong ngoặc kép; boolean: True/False.'
    },
    {
      'id': 'tin8-b13-mc1',
      'type': 'multiple_choice',
      'question': 'Tên biến nào sau đây là HỢP LỆ theo quy ước chuẩn của hầu hết các ngôn ngữ lập trình?',
      'options': [
        'diem_trung_binh',
        '2diem_so',
        'diem trung binh',
        'diem-so-lop'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 78): Tên biến hợp lệ không bắt đầu bằng số, không chứa khoảng trắng, dùng dấu gạch dưới `_`.',
      'hint': 'Dùng dấu gạch dưới thay cho khoảng trắng.'
    }
  ],

  'tin8-bai-14': [
    {
      'id': 'tin8-b14-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về ba cấu trúc điều khiển cơ bản trong lập trình:',
      'options': [
        'a) Mọi thuật toán phức tạp đều có thể xây dựng từ 3 cấu trúc: tuần tự, rẽ nhánh và lặp',
        'b) Cấu trúc rẽ nhánh cho phép chương trình chọn một trong hai hành động dựa trên kết quả kiểm tra điều kiện',
        'c) Cấu trúc lặp chỉ có thể lặp với số lần biết trước, không thể lặp theo điều kiện',
        'd) Trong cấu trúc tuần tự, các câu lệnh được thực hiện lần lượt từ trên xuống dưới'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 82): Cấu trúc lặp gồm cả: lặp với số lần biết trước và lặp với số lần chưa biết trước (lặp theo điều kiện).',
      'hint': 'Có cả lặp với số lần biết trước và lặp theo điều kiện.'
    },
    {
      'id': 'tin8-b14-fb1',
      'type': 'fill_blank',
      'question': 'Ba cấu trúc điều khiển cơ bản trong lập trình là: cấu trúc [1], cấu trúc [2] và cấu trúc lặp.',
      'blankAnswers': ['tuần tự', 'rẽ nhánh'],
      'wordBank': ['tuần tự', 'rẽ nhánh', 'ngẫu nhiên', 'hỗn loạn', 'đệ quy', 'song song'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 82): Ba cấu trúc kinh điển: tuần tự (sequence), rẽ nhánh (selection/branching) và lặp (iteration/loop).',
      'hint': 'Tuần tự, rẽ nhánh và lặp.'
    },
    {
      'id': 'tin8-b14-m1',
      'type': 'matching',
      'question': 'Nối cấu trúc điều khiển ở cột bên trái với ví dụ thực tế tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Cấu trúc tuần tự'},
        {'id': '2', 'text': 'Cấu trúc rẽ nhánh (dạng thiếu)'},
        {'id': '3', 'text': 'Cấu trúc rẽ nhánh (dạng đủ)'},
        {'id': '4', 'text': 'Cấu trúc lặp'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Nếu ngày mai trời mưa thì em mang theo áo mưa'},
        {'id': 'b', 'text': 'Nếu điểm >= 5 thì Đạt, ngược lại thì Chưa đạt'},
        {'id': 'c', 'text': 'Thức dậy -> Đánh răng -> Ăn sáng -> Đến trường'},
        {'id': 'd', 'text': 'Chạy quanh sân trường đúng 3 vòng liên tục'}
      ],
      'correctMatches': {'1': 'c', '2': 'a', '3': 'b', '4': 'd'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 83): Các ví dụ đời sống sinh động minh họa cấu trúc tuần tự, rẽ nhánh thiếu/đủ và lặp.',
      'hint': 'Gắn hành động thực tế với cấu trúc logic tương ứng.'
    },
    {
      'id': 'tin8-b14-mc1',
      'type': 'multiple_choice',
      'question': 'Đoạn mã giả: "Nếu Trời_mưa thì Ở_nhà Ngược_lại Đi_chơi" thể hiện cấu trúc điều khiển nào?',
      'options': [
        'Cấu trúc rẽ nhánh dạng đủ (If - Then - Else)',
        'Cấu trúc rẽ nhánh dạng thiếu (If - Then)',
        'Cấu trúc lặp vô tận (While True)',
        'Cấu trúc tuần tự đơn giản'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 83): Có cả vế Nếu (If) và Ngược lại (Else) là cấu trúc rẽ nhánh dạng đủ.',
      'hint': 'Có mệnh đề "Ngược lại" là dạng đủ.'
    }
  ],

  'tin8-bai-15': [
    {
      'id': 'tin8-b15-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về Gỡ lỗi (Debugging) trong lập trình:',
      'options': [
        'a) Lỗi ngữ nghĩa (Logic Error) là lỗi làm chương trình chạy không báo lỗi nhưng cho kết quả sai',
        'b) Lỗi cú pháp (Syntax Error) được phần mềm phát hiện ngay khi dịch chương trình',
        'c) Khi chương trình không báo lỗi cú pháp thì chắc chắn kết quả tính toán sẽ luôn luôn đúng',
        'd) Thử chạy chương trình với nhiều bộ dữ liệu thử nghiệm (Test cases) giúp phát hiện lỗi tiềm ẩn'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 87): Không có lỗi cú pháp nhưng thuật toán sai sẽ sinh lỗi ngữ nghĩa (Logic Error), ra kết quả sai lệch.',
      'hint': 'Hết lỗi cú pháp vẫn có thể sai về mặt thuật toán logic.'
    },
    {
      'id': 'tin8-b15-fb1',
      'type': 'fill_blank',
      'question': 'Quá trình tìm kiếm và sửa chữa các sai sót trong mã lệnh của chương trình được gọi là [1], còn bộ dữ liệu dùng để kiểm tra tính đúng đắn gọi là [2].',
      'blankAnswers': ['gỡ lỗi (Debugging)', 'bộ thử (Test cases)'],
      'wordBank': ['gỡ lỗi (Debugging)', 'bộ thử (Test cases)', 'mã hóa', 'biên dịch', 'cài đặt', 'sao lưu'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 86): Gỡ lỗi (Debugging) là kĩ năng sống còn của lập trình viên; Test cases là các bộ thử nghiệm.',
      'hint': 'Debugging là gỡ lỗi, Test cases là bộ dữ liệu thử nghiệm.'
    },
    {
      'id': 'tin8-b15-m1',
      'type': 'matching',
      'question': 'Nối loại lỗi lập trình ở cột bên trái với biểu hiện đặc trưng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Lỗi cú pháp (Syntax Error)'},
        {'id': '2', 'text': 'Lỗi ngữ nghĩa (Logic Error)'},
        {'id': '3', 'text': 'Lỗi khi chạy (Runtime Error)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Chương trình đang chạy bị dừng đột ngột (ví dụ chia cho số 0)'},
        {'id': 'b', 'text': 'Viết sai chính tả từ khóa hoặc quên dấu ngoặc, chương trình không chạy được'},
        {'id': 'c', 'text': 'Chương trình chạy êm xuôi nhưng tính chu vi lại ra công thức diện tích'}
      ],
      'correctMatches': {'1': 'b', '2': 'c', '3': 'a'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 86-88): Ba loại lỗi kinh điển: Syntax (cú pháp), Logic (thuật toán), Runtime (thực thi).',
      'hint': 'Syntax: sai chữ; Logic: sai công thức; Runtime: đứt gánh giữa chừng (chia 0).'
    },
    {
      'id': 'tin8-b15-mc1',
      'type': 'multiple_choice',
      'question': 'Khi viết chương trình tính diện tích hình chữ nhật `S = a * b`, bạn học sinh vô tình gõ nhầm thành `S = a + b`. Đây là loại lỗi nào?',
      'options': [
        'Lỗi ngữ nghĩa / lỗi logic (Logic Error)',
        'Lỗi cú pháp (Syntax Error)',
        'Lỗi phần cứng máy tính',
        'Lỗi mạng Internet'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 87): Máy tính vẫn tính toán bình thường (không vi phạm cú pháp) nhưng cho ra kết quả sai, đó là lỗi logic thuật toán.',
      'hint': 'Công thức sai phép toán là lỗi logic.'
    }
  ],

  'tin8-bai-16': [
    {
      'id': 'tin8-b16-tf1',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về vai trò của Tin học với nghề nghiệp hiện đại:',
      'options': [
        'a) Tin học và công nghệ số được ứng dụng sâu rộng trong hầu hết mọi ngành nghề của xã hội',
        'b) Kĩ năng tin học văn phòng và an toàn dữ liệu là yêu cầu thiết yếu đối với người lao động tương lai',
        'c) Trí tuệ nhân tạo (AI) và tự động hóa sẽ loại bỏ hoàn toàn mọi nhu cầu lao động của con người',
        'd) Các ngành nghề mới như chuyên gia an ninh mạng, kĩ sư dữ liệu, lập trình viên AI đang có nhu cầu tuyển dụng rất lớn'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 8 KNTT (Trang 90-92): Công nghệ số thay đổi phương thức làm việc nhưng không thể thay thế hoàn toàn con người; nó mở ra nhiều cơ hội việc làm mới.',
      'hint': 'Tin học hỗ trợ và mở ra việc làm mới, không triệt tiêu con người.'
    },
    {
      'id': 'tin8-b16-fb1',
      'type': 'fill_blank',
      'question': 'Trong thời đại công nghệ số, việc trang bị kĩ năng [1] và khả năng [2] suốt đời là chìa khóa để thích nghi với thị trường việc làm thay đổi.',
      'blankAnswers': ['tin học', 'tự học'],
      'wordBank': ['tin học', 'tự học', 'may rủi', 'trực tiếp', 'thủ công', 'chờ đợi'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 92): Năng lực số và tinh thần tự học suốt đời giúp học sinh thích ứng với kỷ nguyên mới.',
      'hint': 'Kĩ năng tin học và tinh thần tự học.'
    },
    {
      'id': 'tin8-b16-m1',
      'type': 'matching',
      'question': 'Nối nghề nghiệp tin học ở cột bên trái với nhiệm vụ đặc trưng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Kĩ sư phát triển phần mềm'},
        {'id': '2', 'text': 'Chuyên gia an ninh mạng'},
        {'id': '3', 'text': 'Chuyên viên phân tích dữ liệu'},
        {'id': '4', 'text': 'Nhà thiết kế đồ họa (UI/UX)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Bảo vệ hệ thống máy tính và dữ liệu chống lại sự xâm nhập của tin tặc'},
        {'id': 'b', 'text': 'Thiết kế giao diện đẹp mắt, thân thiện cho trang web và ứng dụng di động'},
        {'id': 'c', 'text': 'Viết mã lệnh tạo ra các phần mềm, game, ứng dụng tiện ích'},
        {'id': 'd', 'text': 'Khai phá và rút ra xu hướng thông tin hữu ích từ các tập dữ liệu lớn'}
      ],
      'correctMatches': {'1': 'c', '2': 'a', '3': 'd', '4': 'b'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 91): Giới thiệu các nhóm nghề nghiệp công nghệ thông tin chủ chốt.',
      'hint': 'Nối chuyên môn với công việc đặc thù.'
    },
    {
      'id': 'tin8-b16-mc1',
      'type': 'multiple_choice',
      'question': 'Để chuẩn bị tốt nhất cho nghề nghiệp tương lai trong kỷ nguyên số, ngay từ bậc THCS học sinh nên rèn luyện điều gì?',
      'options': [
        'Kĩ năng sử dụng máy tính an toàn, tư duy logic giải quyết vấn đề và năng lực tự học',
        'Chỉ chơi game trực tuyến cả ngày để hiểu về công nghệ',
        'Học thuộc lòng bảng mã nhị phân mà không cần thực hành',
        'Không cần quan tâm đến công nghệ vì phần mềm đã tự làm hết'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 8 KNTT (Trang 92): Tư duy giải quyết vấn đề, kĩ năng an toàn số và tinh thần tự giác học hỏi là nền tảng vững chắc nhất.',
      'hint': 'Rèn tư duy giải quyết vấn đề và năng lực số.'
    }
  ]
}

if __name__ == '__main__':
    print("Grade 8 Supplements Part 2 ready.")
    for k, v in SUPPLEMENTS_P2.items():
        print(f"  {k}: {len(v)} câu")
