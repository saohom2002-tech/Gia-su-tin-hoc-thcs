# -*- coding: utf-8 -*-
"""
Ngân hàng câu hỏi Tin học 6 - Kết Nối Tri Thức:
Bài 11 -> Bài 16
Mỗi bài 10-12 câu gồm 4 dạng: multiple_choice, true_false, fill_blank, matching.
"""

PART3 = {
  'tin6-bai-11': [
    {
      'id': 'tin6-b11-q1',
      'type': 'multiple_choice',
      'question': 'Mục đích chính của việc định dạng văn bản trong phần mềm soạn thảo là gì?',
      'options': [
        'Văn bản đẹp mắt, rõ ràng, dễ đọc và nhấn mạnh nội dung quan trọng',
        'Làm tăng dung lượng tệp tin trên máy tính',
        'Tự động dịch văn bản sang nhiều ngôn ngữ khác nhau',
        'Mã hóa văn bản để người khác không đọc được'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 48): Định dạng văn bản giúp văn bản rõ ràng, đẹp mắt, dễ đọc và làm nổi bật các phần nội dung quan trọng.',
      'hint': 'Giúp người xem dễ theo dõi và nắm bắt thông tin nhanh chóng.'
    },
    {
      'id': 'tin6-b11-q2',
      'type': 'multiple_choice',
      'question': 'Định dạng kí tự KHÔNG bao gồm thuộc tính nào sau đây?',
      'options': [
        'Phông chữ (Font) và cỡ chữ (Size)',
        'Kiểu chữ (đậm, nghiêng, gạch chân) và màu chữ',
        'Khoảng cách giữa các đoạn văn (Paragraph spacing)',
        'Màu sắc của chữ (Font color)'
      ],
      'correctAnswer': 2,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 49): Khoảng cách giữa các đoạn văn thuộc định dạng đoạn văn bản, không phải định dạng kí tự.',
      'hint': 'Khoảng cách giữa các dòng và các đoạn là định dạng đoạn.'
    },
    {
      'id': 'tin6-b11-q3',
      'type': 'multiple_choice',
      'question': 'Để căn đều cả hai lề (Justify) cho một đoạn văn bản, em sử dụng tổ hợp phím tắt nào?',
      'options': [
        'Ctrl + J',
        'Ctrl + L',
        'Ctrl + R',
        'Ctrl + E'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 50): Phím tắt căn đều hai lề là Ctrl + J (Justify). Ctrl + L là căn trái, Ctrl + R căn phải, Ctrl + E căn giữa.',
      'hint': 'Justify bắt đầu bằng chữ J.'
    },
    {
      'id': 'tin6-b11-q4',
      'type': 'multiple_choice',
      'question': 'Để định dạng khoảng cách thụt lề đầu dòng cho dòng đầu tiên của đoạn văn, ta chỉnh thuộc tính nào trong hộp thoại Paragraph?',
      'options': [
        'First line trong mục Special',
        'Hanging trong mục Special',
        'Line Spacing',
        'Before / After spacing'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 6 KNTT (Trang 51): Trong hộp thoại Paragraph, tại mục Special ta chọn First line để tự động thụt lề dòng đầu tiên.',
      'hint': 'Dòng đầu tiên là First line.'
    },
    {
      'id': 'tin6-b11-q5',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về định dạng trang và định dạng đoạn văn:',
      'options': [
        'a) Căn lề trái (Align Left) là căn lề mặc định của văn bản tiếng Việt',
        'b) Định dạng văn bản làm thay đổi ý nghĩa nội dung của các từ trong văn bản',
        'c) Hướng trang giấy chỉ có thể là hướng đứng (Portrait) hoặc hướng ngang (Landscape)',
        'd) Khoảng cách dòng (Line spacing) là khoảng cách giữa lề trang giấy với mép giấy'
      ],
      'trueFalseAnswers': [True, False, True, False],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT: Định dạng chỉ thay đổi hình thức trình bày chứ không thay đổi nội dung từ ngữ. Line spacing là khoảng cách giữa các dòng trong đoạn.',
      'hint': 'Định dạng chỉ thay đổi giao diện, không đổi nội dung.'
    },
    {
      'id': 'tin6-b11-q6',
      'type': 'fill_blank',
      'question': 'Để thay đổi hướng trang giấy, trong dải lệnh Layout em chọn nút lệnh [1], còn để chỉnh kích thước lề giấy em chọn nút lệnh [2].',
      'blankAnswers': ['Orientation', 'Margins'],
      'wordBank': ['Orientation', 'Margins', 'Size', 'Columns', 'Font', 'Paragraph'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 52): Trong tab Layout, Orientation dùng để đổi hướng trang giấy (đứng/ngang), Margins dùng để đặt lề giấy.',
      'hint': 'Orientation là hướng trang, Margins là căn lề.'
    },
    {
      'id': 'tin6-b11-q7',
      'type': 'matching',
      'question': 'Nối nút lệnh định dạng kí tự ở cột bên trái với tác dụng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Nút B (Bold)'},
        {'id': '2', 'text': 'Nút I (Italic)'},
        {'id': '3', 'text': 'Nút U (Underline)'},
        {'id': '4', 'text': 'Nút Font Color (chữ A có vạch màu)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Chọn màu sắc cho chữ'},
        {'id': 'b', 'text': 'Tạo kiểu chữ in nghiêng'},
        {'id': 'c', 'text': 'Tạo kiểu chữ in đậm'},
        {'id': 'd', 'text': 'Tạo đường gạch chân dưới chữ'}
      ],
      'correctMatches': {'1': 'c', '2': 'b', '3': 'd', '4': 'a'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 49): B: Bold (đậm), I: Italic (nghiêng), U: Underline (gạch chân), Font Color: màu chữ.',
      'hint': 'Quan sát chữ cái biểu tượng trên dải lệnh Home.'
    },
    {
      'id': 'tin6-b11-q8',
      'type': 'multiple_choice',
      'question': 'Khi soạn thảo văn bản, em nên thực hiện định dạng văn bản vào thời điểm nào là hợp lí nhất?',
      'options': [
        'Vừa gõ từng từ vừa định dạng phông chữ ngay',
        'Gõ xong toàn bộ nội dung thô rồi mới tiến hành định dạng tổng thể',
        'Chỉ định dạng trang in sau khi đã in ra giấy',
        'Trước khi gõ văn bản phải chỉnh màu chữ từng câu một'
      ],
      'correctAnswer': 1,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 53): Quy trình soạn thảo khoa học là gõ đầy đủ nội dung thô trước, sau đó chỉnh sửa và định dạng toàn bộ văn bản để tiết kiệm thời gian.',
      'hint': 'Hoàn thành nội dung thô trước khi trau chuốt hình thức.'
    },
    {
      'id': 'tin6-b11-q9',
      'type': 'multiple_choice',
      'question': 'Bốn lề cơ bản của một trang văn bản bao gồm những lề nào?',
      'options': [
        'Lề trên (Top), lề dưới (Bottom), lề trái (Left), lề phải (Right)',
        'Lề trước, lề sau, lề giữa, lề viền',
        'Lề ngang, lề dọc, lề chéo, lề nghiêng',
        'Lề dòng đầu, lề dòng cuối, lề trái, lề phải'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 52): Các lề của trang văn bản gồm: lề trên (Top), lề dưới (Bottom), lề trái (Left) và lề phải (Right).',
      'hint': 'Bốn phía của một tờ giấy hình chữ nhật.'
    },
    {
      'id': 'tin6-b11-q10',
      'type': 'multiple_choice',
      'question': 'Trong phần mềm soạn thảo văn bản, thao tác nào giúp sao chép nhanh định dạng từ một đoạn văn bản có sẵn sang đoạn văn bản khác?',
      'options': [
        'Sử dụng công cụ Format Painter (hình cây chổi)',
        'Nhấn tổ hợp phím Ctrl + C rồi Ctrl + V',
        'Sử dụng nút lệnh Clear All Formatting',
        'Nhấn phím F4 liên tục'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 6 KNTT: Nút lệnh Format Painter (biểu tượng chổi quét sơn) cho phép sao chép nhanh toàn bộ thuộc tính định dạng của văn bản.',
      'hint': 'Biểu tượng chiếc chổi quét sơn trên thanh công cụ Home.'
    }
  ],

  'tin6-bai-12': [
    {
      'id': 'tin6-b12-q1',
      'type': 'multiple_choice',
      'question': 'Bảng (Table) trong văn bản được tạo nên từ sự giao nhau của các yếu tố nào?',
      'options': [
        'Các hàng (Rows) và các cột (Columns)',
        'Các ô (Cells) và các hình vẽ (Shapes)',
        'Các đoạn văn và các hình ảnh',
        'Các tiêu đề và các trang văn bản'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 54): Bảng được cấu tạo bởi các hàng và các cột. Vùng giao nhau giữa một hàng và một cột được gọi là ô (cell).',
      'hint': 'Hàng ngang kết hợp cột dọc tạo thành ô.'
    },
    {
      'id': 'tin6-b12-q2',
      'type': 'multiple_choice',
      'question': 'Để chèn một bảng biểu vào văn bản trong Word, ta vào dải lệnh nào?',
      'options': [
        'Dải lệnh Insert, chọn Table',
        'Dải lệnh Home, chọn Paragraph',
        'Dải lệnh Layout, chọn Margins',
        'Dải lệnh View, chọn Gridlines'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 54): Để chèn bảng, nháy chọn dải lệnh Insert -> chọn nhóm nút lệnh Table.',
      'hint': 'Insert có nghĩa là chèn thêm đối tượng vào văn bản.'
    },
    {
      'id': 'tin6-b12-q3',
      'type': 'multiple_choice',
      'question': 'Khi muốn gộp nhiều ô liền kề nhau trong bảng thành một ô duy nhất, ta dùng lệnh nào trong dải lệnh ngữ cảnh Table Layout?',
      'options': [
        'Merge Cells',
        'Split Cells',
        'Delete Cells',
        'Insert Above'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 56): Lệnh Merge Cells dùng để gộp nhiều ô thành một ô. Lệnh Split Cells dùng để tách một ô thành nhiều ô.',
      'hint': 'Merge có nghĩa là hòa vào, gộp lại.'
    },
    {
      'id': 'tin6-b12-q4',
      'type': 'multiple_choice',
      'question': 'Để xóa hẳn một cột khỏi bảng biểu, thao tác chuẩn là gì?',
      'options': [
        'Chọn cột cần xóa, vào Table Layout -> Delete -> Delete Columns',
        'Chọn cột và nhấn phím Delete trên bàn phím',
        'Chọn cột và nhấn phím Backspace một lần',
        'Kéo co hẹp độ rộng cột về 0'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 56): Nhấn Delete chỉ xóa nội dung trong ô chứ không xóa cấu trúc cột. Muốn xóa cột phải chọn Delete -> Delete Columns.',
      'hint': 'Phím Delete thông thường chỉ xóa chữ bên trong.'
    },
    {
      'id': 'tin6-b12-q5',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về việc sử dụng bảng biểu trong văn bản:',
      'options': [
        'a) Trình bày dữ liệu dạng bảng giúp thông tin cô đọng, dễ so sánh và đối chiếu',
        'b) Mỗi ô trong bảng chỉ có thể chứa văn bản ngắn, không thể chèn được hình ảnh',
        'c) Có thể thay đổi linh hoạt độ rộng của cột và chiều cao của hàng',
        'd) Ta có thể căn lề (trái, phải, giữa) cho dữ liệu trong từng ô của bảng'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT: Trong ô của bảng, ta hoàn toàn có thể chèn văn bản, số liệu và cả hình ảnh minh họa.',
      'hint': 'Ô bảng có thể chứa cả hình ảnh minh họa.'
    },
    {
      'id': 'tin6-b12-q6',
      'type': 'fill_blank',
      'question': 'Để chèn thêm một hàng mới phía trên hàng đang chọn, ta dùng lệnh [1], còn để chèn một cột sang bên phải cột đang chọn, ta dùng lệnh [2].',
      'blankAnswers': ['Insert Above', 'Insert Right'],
      'wordBank': ['Insert Above', 'Insert Right', 'Insert Below', 'Insert Left', 'Merge Cells', 'Delete Cells'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 56): Insert Above (chèn hàng phía trên), Insert Right (chèn cột bên phải).',
      'hint': 'Above = phía trên, Right = bên phải.'
    },
    {
      'id': 'tin6-b12-q7',
      'type': 'matching',
      'question': 'Nối thao tác quản lí bảng biểu ở cột bên trái với tác dụng tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Split Cells'},
        {'id': '2', 'text': 'Merge Cells'},
        {'id': '3', 'text': 'Delete Rows'},
        {'id': '4', 'text': 'Distribute Columns Evenly'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Xóa các hàng đang được chọn'},
        {'id': 'b', 'text': 'Tách một ô thành nhiều ô nhỏ hơn'},
        {'id': 'c', 'text': 'Chia đều độ rộng cho các cột đang chọn'},
        {'id': 'd', 'text': 'Gộp nhiều ô thành một ô lớn'}
      ],
      'correctMatches': {'1': 'b', '2': 'd', '3': 'a', '4': 'c'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 56): Split: chia tách, Merge: gộp ô, Delete Rows: xóa hàng, Distribute: phân bổ đều kích thước.',
      'hint': 'Split là chia tách, Merge là gộp lại.'
    },
    {
      'id': 'tin6-b12-q8',
      'type': 'multiple_choice',
      'question': 'Muốn di chuyển con trỏ soạn thảo sang ô tiếp theo bên phải trong cùng một hàng của bảng, em nhấn phím nào?',
      'options': [
        'Phím Tab',
        'Phím Enter',
        'Phím Shift',
        'Phím Space'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 55): Trong bảng, phím Tab dùng để di chuyển con trỏ sang ô kế tiếp bên phải. Khi ở ô cuối cùng của bảng, phím Tab sẽ tự động tạo thêm một hàng mới.',
      'hint': 'Phím Tab nằm phía trên phím Caps Lock.'
    },
    {
      'id': 'tin6-b12-q9',
      'type': 'multiple_choice',
      'question': 'Dữ liệu nào sau đây PHÙ HỢP NHẤT để trình bày ở dạng bảng biểu?',
      'options': [
        'Thời khóa biểu các ngày trong tuần của lớp',
        'Một bài thơ lục bát dài bốn khổ',
        'Một bức thư cảm ơn gửi thầy cô',
        'Một đoạn văn miêu tả phong cảnh mùa thu'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 54): Các thông tin có tính so sánh, đối chiếu, gồm nhiều danh mục lặp lại như Thời khóa biểu, Bảng điểm... phù hợp nhất để trình bày bằng bảng.',
      'hint': 'Thời khóa biểu có các ngày (thứ) và các tiết học.'
    },
    {
      'id': 'tin6-b12-q10',
      'type': 'multiple_choice',
      'question': 'Để trang trí đường viền (Border) và màu nền (Shading) cho bảng, ta chọn thẻ ngữ cảnh nào khi nhấp vào bảng?',
      'options': [
        'Table Design',
        'Table Layout',
        'References',
        'Review'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 6 KNTT (Trang 57): Thẻ ngữ cảnh Table Design chứa các công cụ thiết kế phong cách bảng, đường viền (Borders) và màu tô nền (Shading).',
      'hint': 'Design liên quan đến thiết kế, trang trí màu sắc viền bảng.'
    }
  ],

  'tin6-bai-13': [
    {
      'id': 'tin6-b13-q1',
      'type': 'multiple_choice',
      'question': 'Mục tiêu chính của dự án thực hành "Hoàn thiện sổ lưu niệm" trong môn Tin học 6 là gì?',
      'options': [
        'Vận dụng tổng hợp kĩ năng soạn thảo, chèn bảng, chèn hình ảnh và định dạng văn bản',
        'Học cách lập trình trò chơi điện tử phức tạp',
        'Cài đặt lại hệ điều hành cho máy tính trường học',
        'Học cách gửi email hàng loạt cho các doanh nghiệp'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 58): Dự án sổ lưu niệm giúp học sinh kết hợp tổng hợp kiến thức đã học: định dạng văn bản, chèn ảnh, bảng biểu để tạo sản phẩm thực tế.',
      'hint': 'Áp dụng tổng hợp các kĩ năng soạn thảo văn bản đã học.'
    },
    {
      'id': 'tin6-b13-q2',
      'type': 'multiple_choice',
      'question': 'Để chèn một hình ảnh chụp hoạt động của lớp vào trang văn bản, ta chọn lệnh nào?',
      'options': [
        'Insert -> Pictures',
        'Home -> Font Color',
        'Layout -> Orientation',
        'View -> Zoom'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 59): Để chèn ảnh từ máy tính, ta vào dải lệnh Insert -> chọn Pictures (This Device).',
      'hint': 'Pictures có nghĩa là hình ảnh.'
    },
    {
      'id': 'tin6-b13-q3',
      'type': 'multiple_choice',
      'question': 'Khi chèn ảnh vào văn bản, để hình ảnh có thể di chuyển tự do và văn bản bao quanh theo dạng vuông, em chọn chế độ Wrap Text nào?',
      'options': [
        'Square',
        'In Line with Text',
        'Behind Text',
        'Top and Bottom'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 60): Chế độ Square cho phép văn bản bao quanh bức ảnh theo một khung hình chữ nhật vuông vắn, dễ di chuyển trên trang.',
      'hint': 'Square là hình vuông.'
    },
    {
      'id': 'tin6-b13-q4',
      'type': 'multiple_choice',
      'question': 'Để thu nhỏ hoặc phóng to một bức ảnh mà KHÔNG làm méo tỉ lệ khung hình, em nên kéo chuột tại vị trí nào?',
      'options': [
        'Một trong bốn nút tròn ở bốn góc của bức ảnh',
        'Nút vuông ở cạnh giữa phía trên của bức ảnh',
        'Nút vuông ở cạnh giữa bên phải của bức ảnh',
        'Bất kì điểm nào bên trong lòng bức ảnh'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 60): Kéo tại các góc giữ nguyên tỉ lệ chiều dài và chiều rộng, tránh làm bức ảnh bị méo mó, biến dạng.',
      'hint': 'Kéo chuột tại 4 góc của ảnh.'
    },
    {
      'id': 'tin6-b13-q5',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về thiết kế và hoàn thiện cuốn sổ lưu niệm:',
      'options': [
        'a) Cần chọn lọc hình ảnh rõ nét, phù hợp với nội dung trang viết',
        'b) Nên sử dụng càng nhiều phông chữ và màu sắc sặc sỡ trong một trang càng tốt',
        'c) Có thể sử dụng bảng để tạo sơ đồ danh sách các thành viên trong tổ',
        'd) Trước khi in ấn hoặc nộp bài, nên xem lại tổng thể ở chế độ Print Preview'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT: Không nên dùng quá nhiều phông chữ (tối đa 2-3 phông) và màu sắc lòe loẹt vì sẽ làm trang sách rối mắt, khó đọc.',
      'hint': 'Tính thẩm mĩ đòi hỏi sự hài hòa, không lạm dụng quá nhiều kiểu chữ.'
    },
    {
      'id': 'tin6-b13-q6',
      'type': 'fill_blank',
      'question': 'Để đánh số trang tự động cho cuốn sổ lưu niệm, trong dải lệnh Insert ta chọn công cụ [1], còn để tạo tiêu đề đầu trang cố định ta chọn [2].',
      'blankAnswers': ['Page Number', 'Header'],
      'wordBank': ['Page Number', 'Header', 'Footer', 'WordArt', 'Drop Cap', 'Table'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT: Page Number dùng đánh số trang, Header tạo phần đầu trang hiển thị trên mọi trang văn bản.',
      'hint': 'Page Number: số trang, Header: đầu trang.'
    },
    {
      'id': 'tin6-b13-q7',
      'type': 'matching',
      'question': 'Nối chế độ bố trí ảnh (Wrap Text) ở cột bên trái với cách hiển thị tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'In Line with Text'},
        {'id': '2', 'text': 'Behind Text'},
        {'id': '3', 'text': 'In Front of Text'},
        {'id': '4', 'text': 'Square'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Bức ảnh chìm xuống dưới, văn bản nổi lên trên ảnh'},
        {'id': 'b', 'text': 'Ảnh nằm đè lên trên, che khuất một phần văn bản'},
        {'id': 'c', 'text': 'Ảnh được coi như một kí tự lớn nằm cùng dòng văn bản'},
        {'id': 'd', 'text': 'Văn bản bao bọc vuông vức xung quanh bức ảnh'}
      ],
      'correctMatches': {'1': 'c', '2': 'a', '3': 'b', '4': 'd'},
      'options': [],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 60): In Line: cùng dòng; Behind: ảnh làm nền chìm; In Front: ảnh đè lên chữ; Square: chữ bao quanh.',
      'hint': 'Behind = phía sau/dưới, In Front = phía trước/trên.'
    },
    {
      'id': 'tin6-b13-q8',
      'type': 'multiple_choice',
      'question': 'Khi tạo chữ nghệ thuật làm tiêu đề cho bìa sổ lưu niệm, ta sử dụng công cụ nào trong dải lệnh Insert?',
      'options': [
        'WordArt (chữ A nghiêng cách điệu)',
        'ClipArt',
        'SmartArt',
        'Shapes'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 61): Công cụ WordArt giúp tạo các dòng chữ uốn lượn, có hiệu ứng đổ bóng, nổi bật làm tiêu đề trang.',
      'hint': 'WordArt là nghệ thuật chữ trong bộ Office.'
    },
    {
      'id': 'tin6-b13-q9',
      'type': 'multiple_choice',
      'question': 'Thao tác nào sau đây giúp xoay một bức ảnh theo một góc tùy ý?',
      'options': [
        'Nhấp chuột vào nút mũi tên tròn xoay phía trên bức ảnh và kéo rê chuột',
        'Nhấn đúp chuột vào giữa bức ảnh',
        'Kéo chuột sang góc dưới bên phải',
        'Nhấn tổ hợp phím Ctrl + R'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT: Khi chọn ảnh, một nút tròn hình mũi tên xoay xuất hiện ở đỉnh, kéo nút này để xoay ảnh theo góc mong muốn.',
      'hint': 'Nút có biểu tượng mũi tên uốn vòng tròn.'
    },
    {
      'id': 'tin6-b13-q10',
      'type': 'multiple_choice',
      'question': 'Để xuất tệp sổ lưu niệm sang định dạng tài liệu không bị biến dạng phông chữ khi xem trên máy tính khác, ta nên lưu dưới dạng đuôi tệp nào?',
      'options': [
        '.pdf',
        '.txt',
        '.bmp',
        '.bat'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 6 KNTT: Định dạng PDF (Portable Document Format) giữ nguyên toàn bộ định dạng, phông chữ và hình ảnh trên mọi thiết bị.',
      'hint': 'Định dạng tài liệu phổ biến để đọc trên mọi hệ điều hành.'
    }
  ],

  'tin6-bai-14': [
    {
      'id': 'tin6-b14-q1',
      'type': 'multiple_choice',
      'question': 'Theo định nghĩa trong SGK Tin học 6, thuật toán (Algorithm) là gì?',
      'options': [
        'Dãy các thao tác rõ ràng được sắp xếp theo một trình tự xác định để giải quyết một bài toán hay công việc',
        'Một đoạn văn bản dài miêu tả các thành phần cấu tạo phần cứng của máy tính',
        'Một trò chơi giải trí được cài đặt sẵn trên hệ điều hành Windows',
        'Bản danh sách ghi lại mật khẩu đăng nhập của các tài khoản mạng xã hội'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 64): Thuật toán là một dãy các chỉ dẫn rõ ràng, có trình tự cụ thể, nếu thực hiện đúng tuần tự đó thì từ đầu vào sẽ thu được kết quả mong muốn.',
      'hint': 'Các bước thực hiện theo thứ tự nhất định để giải quyết công việc.'
    },
    {
      'id': 'tin6-b14-q2',
      'type': 'multiple_choice',
      'question': 'Hai cách thông dụng nhất để mô tả thuật toán cho con người hiểu là gì?',
      'options': [
        'Liệt kê từng bước (bằng ngôn ngữ tự nhiên) và dùng sơ đồ khối (Flowchart)',
        'Viết bài văn tự sự và vẽ tranh biếm họa',
        'Dùng máy ảnh chụp lại và thu âm giọng nói',
        'Dùng bảng tính Excel và gửi email'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 65): Hai cách biểu diễn thuật toán cơ bản là: 1) Liệt kê các bước bằng lời; 2) Sử dụng sơ đồ khối.',
      'hint': 'Liệt kê bằng lời và vẽ sơ đồ khối.'
    },
    {
      'id': 'tin6-b14-q3',
      'type': 'multiple_choice',
      'question': 'Trong sơ đồ khối thuật toán, hình thoi (Rhombus) được sử dụng để thể hiện điều gì?',
      'options': [
        'Thao tác kiểm tra điều kiện (rẽ nhánh)',
        'Bắt đầu hoặc kết thúc thuật toán',
        'Các bước xử lí, tính toán',
        'Thao tác nhập dữ liệu hoặc xuất kết quả'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 66): Trong sơ đồ khối, hình thoi biểu diễn thao tác kiểm tra điều kiện; tùy theo điều kiện Đúng hay Sai mà rẽ theo hai hướng khác nhau.',
      'hint': 'Hình thoi dùng để hỏi điều kiện đúng hay sai.'
    },
    {
      'id': 'tin6-b14-q4',
      'type': 'multiple_choice',
      'question': 'Trong sơ đồ khối thuật toán, hình chữ nhật dùng để biểu thị thao tác nào?',
      'options': [
        'Thực hiện một phép tính hoặc thao tác xử lí',
        'Điểm bắt đầu hoặc kết thúc của thuật toán',
        'Kiểm tra một điều kiện logic',
        'Chỉ dẫn hướng đi của luồng thực hiện'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 66): Hình chữ nhật biểu thị thao tác xử lí (tính toán, gán giá trị, hành động cụ thể).',
      'hint': 'Hành động cụ thể được đặt trong hình chữ nhật.'
    },
    {
      'id': 'tin6-b14-q5',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về thuật toán và sơ đồ khối:',
      'options': [
        'a) Đầu vào (Input) là các dữ liệu ban đầu được cung cấp cho thuật toán',
        'b) Một thuật toán có thể chạy vô tận và không bao giờ kết thúc vẫn được coi là thuật toán đúng',
        'c) Hình oval (elip) dùng để thể hiện điểm Bắt đầu và Kết thúc của sơ đồ khối',
        'd) Các mũi tên trong sơ đồ khối biểu thị thứ tự thực hiện các thao tác'
      ],
      'trueFalseAnswers': [True, False, True, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT: Tính dừng là đặc trưng bắt buộc của thuật toán: sau một số bước hữu hạn, thuật toán phải kết thúc và cho kết quả.',
      'hint': 'Thuật toán bắt buộc phải dừng lại sau một số bước hữu hạn.'
    },
    {
      'id': 'tin6-b14-q6',
      'type': 'fill_blank',
      'question': 'Trong sơ đồ khối thuật toán, khối [1] dùng để kiểm tra điều kiện rẽ nhánh, còn khối [2] dùng để nhập dữ liệu đầu vào hoặc xuất kết quả đầu ra.',
      'blankAnswers': ['hình thoi', 'hình bình hành'],
      'wordBank': ['hình thoi', 'hình bình hành', 'hình chữ nhật', 'hình elip', 'hình tròn', 'mũi tên'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 6 KNTT (Trang 66): Hình thoi thể hiện điều kiện; hình bình hành thể hiện nhập dữ liệu vào (Input) hoặc xuất kết quả (Output).',
      'hint': 'Điều kiện dùng hình thoi, vào/ra dùng hình bình hành.'
    },
    {
      'id': 'tin6-b14-q7',
      'type': 'matching',
      'question': 'Nối hình dạng hình học trong sơ đồ khối ở cột bên trái với ý nghĩa tương ứng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Hình elip (hoặc chữ nhật bo góc)'},
        {'id': '2', 'text': 'Hình chữ nhật'},
        {'id': '3', 'text': 'Hình thoi'},
        {'id': '4', 'text': 'Đường mũi tên'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Thao tác xử lí, tính toán dữ liệu'},
        {'id': 'b', 'text': 'Điểm bắt đầu (Start) hoặc kết thúc (End)'},
        {'id': 'c', 'text': 'Hướng tuần tự thực hiện các bước'},
        {'id': 'd', 'text': 'Kiểm tra điều kiện rẽ nhánh (Đúng / Sai)'}
      ],
      'correctMatches': {'1': 'b', '2': 'a', '3': 'd', '4': 'c'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 66): Quy ước chuẩn các khối cơ bản trong biểu diễn sơ đồ khối thuật toán.',
      'hint': 'Elip: Start/End, Chữ nhật: Xử lí, Thoi: Điều kiện, Mũi tên: Hướng đi.'
    },
    {
      'id': 'tin6-b14-q8',
      'type': 'multiple_choice',
      'question': 'Cho bài toán: "Tính chu vi hình chữ nhật khi biết chiều dài a và chiều rộng b". Đầu vào (Input) và Đầu ra (Output) của thuật toán lần lượt là gì?',
      'options': [
        'Input: Hai số a và b; Output: Giá trị chu vi (a + b) x 2',
        'Input: Chu vi; Output: Hai cạnh a và b',
        'Input: Chiều dài a; Output: Chiều rộng b',
        'Input: Công thức tính; Output: Số cạnh của hình'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 65): Input là thông tin được cho trước (chiều dài a, chiều rộng b). Output là kết quả cần tìm (chu vi hình chữ nhật).',
      'hint': 'Input là cái đã biết, Output là kết quả cần tìm.'
    },
    {
      'id': 'tin6-b14-q9',
      'type': 'multiple_choice',
      'question': 'Một thuật toán chuẩn mực bắt buộc phải thỏa mãn tính chất nào sau đây?',
      'options': [
        'Tính xác định, tính dừng và tính đúng đắn',
        'Tính phức tạp cao và khó hiểu nhất có thể',
        'Phải sử dụng ít nhất mười câu lệnh lặp liên tục',
        'Chỉ có máy vi tính mới có thể thực hiện được'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT: Thuật toán cần có tính xác định (mỗi bước rõ ràng không gây nhầm lẫn), tính dừng (phải kết thúc sau số bước hữu hạn) và tính đúng đắn.',
      'hint': 'Rõ ràng, chắc chắn kết thúc và ra kết quả đúng.'
    },
    {
      'id': 'tin6-b14-q10',
      'type': 'multiple_choice',
      'question': 'Trong cuộc sống hàng ngày, hoạt động nào sau đây có thể coi là một thuật toán?',
      'options': [
        'Các bước theo công thức để nấu món cơm sườn theo sách hướng dẫn',
        'Cảm xúc vui buồn ngẫu nhiên của một người trong ngày',
        'Tiếng chim hót ngẫu nhiên trên cành cây buổi sớm',
        'Hướng gió thổi bất chợt ngoài sân trường'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 64): Công thức nấu ăn gồm các bước trình tự rõ ràng (nguyên liệu -> sơ chế -> nấu -> nêm gia vị -> thành phẩm) là ví dụ gần gũi về thuật toán.',
      'hint': 'Hoạt động có quy trình từng bước rõ ràng.'
    }
  ],

  'tin6-bai-15': [
    {
      'id': 'tin6-b15-q1',
      'type': 'multiple_choice',
      'question': 'Thuật toán tìm kiếm tuần tự (Sequential Search) hoạt động theo nguyên lí nào?',
      'options': [
        'Lần lượt so sánh giá trị cần tìm với từng phần tử của danh sách, từ phần tử đầu tiên đến phần tử cuối cùng',
        'Chia đôi danh sách liên tục cho đến khi tìm thấy',
        'Chỉ kiểm tra phần tử ở chính giữa danh sách',
        'Đảo lộn ngẫu nhiên danh sách rồi bốc thăm may mắn'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 70): Tìm kiếm tuần tự kiểm tra lần lượt từng phần tử từ đầu đến cuối danh sách cho đến khi tìm thấy hoặc hết danh sách.',
      'hint': 'Duyệt lần lượt từng phần tử theo thứ tự.'
    },
    {
      'id': 'tin6-b15-q2',
      'type': 'multiple_choice',
      'question': 'Thuật toán tìm kiếm tuần tự kết thúc khi nào?',
      'options': [
        'Khi tìm thấy phần tử cần tìm HOẶC khi đã duyệt hết toàn bộ danh sách mà không thấy',
        'Chỉ dừng lại khi đã duyệt đủ 100 lần',
        'Không bao giờ dừng lại cho đến khi tắt máy',
        'Dừng lại ngay ở phần tử thứ hai của danh sách'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 71): Thuật toán dừng khi tìm thấy mục tiêu (thành công) hoặc khi đã xét hết danh sách mà không có (thất bại).',
      'hint': 'Tìm thấy thì dừng, hoặc hết danh sách thì dừng.'
    },
    {
      'id': 'tin6-b15-q3',
      'type': 'multiple_choice',
      'question': 'Điều kiện TIÊN QUYẾT để có thể áp dụng được thuật toán tìm kiếm nhị phân (Binary Search) là gì?',
      'options': [
        'Danh sách dữ liệu đã phải được sắp xếp theo một thứ tự nhất định (tăng dần hoặc giảm dần)',
        'Danh sách phải chứa toàn các số nguyên âm',
        'Số lượng phần tử trong danh sách bắt buộc phải là số chẵn',
        'Tất cả các phần tử phải có giá trị bằng nhau'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 73): Tìm kiếm nhị phân chỉ áp dụng được trên danh sách đã được sắp xếp có thứ tự.',
      'hint': 'Dữ liệu bắt buộc phải được sắp xếp trước.'
    },
    {
      'id': 'tin6-b15-q4',
      'type': 'multiple_choice',
      'question': 'Trong thuật toán tìm kiếm nhị phân trên dãy số tăng dần, nếu giá trị cần tìm LỚN HƠN giá trị của phần tử ở giữa, ta sẽ tiếp tục tìm kiếm ở đâu?',
      'options': [
        'Nửa sau của danh sách (phía bên phải phần tử giữa)',
        'Nửa trước của danh sách (phía bên trái phần tử giữa)',
        'Quay lại kiểm tra lại từ đầu danh sách',
        'Dừng thuật toán và kết luận không có'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 74): Vì dãy tăng dần, nếu giá trị cần tìm lớn hơn phần tử giữa thì nó chắc chắn chỉ có thể nằm ở nửa bên phải (nửa sau).',
      'hint': 'Dãy tăng dần nên số lớn hơn sẽ nằm bên phải.'
    },
    {
      'id': 'tin6-b15-q5',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về thuật toán tìm kiếm tuần tự và tìm kiếm nhị phân:',
      'options': [
        'a) Tìm kiếm tuần tự có thể áp dụng cho danh sách chưa được sắp xếp',
        'b) Với danh sách đã sắp xếp có số lượng phần tử rất lớn, tìm kiếm nhị phân thường nhanh hơn nhiều so với tìm kiếm tuần tự',
        'c) Tìm kiếm nhị phân chỉ cần so sánh với phần tử đầu tiên và cuối cùng của dãy',
        'd) Trong trường hợp xấu nhất, tìm kiếm tuần tự phải thực hiện số lần so sánh bằng đúng số phần tử của danh sách'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT: Tìm kiếm nhị phân so sánh với phần tử ở giữa (mid) để loại bỏ một nửa số phần tử sau mỗi lần kiểm tra.',
      'hint': 'Nhị phân chia đôi ở giữa mỗi lần xét.'
    },
    {
      'id': 'tin6-b15-q6',
      'type': 'fill_blank',
      'question': 'Thuật toán tìm kiếm nhị phân thu hẹp phạm vi tìm kiếm bằng cách so sánh giá trị cần tìm với phần tử [1] của danh sách, sau đó loại bỏ [2] danh sách không chứa phần tử đó.',
      'blankAnswers': ['ở giữa', 'một nửa'],
      'wordBank': ['ở giữa', 'một nửa', 'đầu tiên', 'cuối cùng', 'toàn bộ', 'một phần ba'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 73): Tìm kiếm nhị phân lấy phần tử ở giữa, so sánh rồi bỏ đi một nửa danh sách.',
      'hint': 'Nhị phân là chia đôi (hai nửa).'
    },
    {
      'id': 'tin6-b15-q7',
      'type': 'matching',
      'question': 'Nối đặc điểm ở cột bên trái với thuật toán tìm kiếm phù hợp ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Áp dụng được cho mọi danh sách, kể cả danh sách xếp lộn xộn'},
        {'id': '2', 'text': 'Bắt buộc danh sách phải có thứ tự tăng dần hoặc giảm dần'},
        {'id': '3', 'text': 'Mỗi bước so sánh giúp loại bỏ một nửa số phần tử còn lại'},
        {'id': '4', 'text': 'So sánh lần lượt từng phần tử từ vị trí đầu tiên đến cuối'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Thuật toán tìm kiếm tuần tự'},
        {'id': 'b', 'text': 'Thuật toán tìm kiếm nhị phân'}
      ],
      'correctMatches': {'1': 'a', '2': 'b', '3': 'b', '4': 'a'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 70, 73): Phân biệt rõ ràng giữa tìm kiếm tuần tự (tuần tự, không cần sắp xếp) và tìm kiếm nhị phân (chia đôi, cần có thứ tự).',
      'hint': 'Tuần tự đi từ đầu đến cuối; Nhị phân chia đôi danh sách có thứ tự.'
    },
    {
      'id': 'tin6-b15-q8',
      'type': 'multiple_choice',
      'question': 'Cho dãy số: 3, 7, 12, 19, 25, 31, 40. Dùng thuật toán tìm kiếm nhị phân để tìm số 19. Phần tử ở giữa ở bước đầu tiên là số nào?',
      'options': [
        'Số 19 (vị trí chính giữa thứ 4)',
        'Số 12',
        'Số 25',
        'Số 3'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 6 KNTT (Trang 74): Dãy có 7 số: 3 (1), 7 (2), 12 (3), 19 (4), 25 (5), 31 (6), 40 (7). Vị trí ở giữa là (1 + 7) / 2 = 4, mang giá trị 19. Thuật toán tìm thấy ngay ở bước 1!',
      'hint': 'Vị trí ở giữa của dãy 7 phần tử là vị trí số 4.'
    },
    {
      'id': 'tin6-b15-q9',
      'type': 'multiple_choice',
      'question': 'Cho dãy họ tên học sinh trong sổ điểm chưa được sắp xếp. Để tìm một bạn có tên "Bình", ta PHẢI sử dụng thuật toán tìm kiếm nào?',
      'options': [
        'Tìm kiếm tuần tự',
        'Tìm kiếm nhị phân',
        'Tìm kiếm đồ thị',
        'Tìm kiếm cây nhị phân'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 72): Vì danh sách chưa được sắp xếp theo bảng chữ cái nên KHÔNG thể dùng tìm kiếm nhị phân, bắt buộc phải dùng tìm kiếm tuần tự.',
      'hint': 'Chưa sắp xếp thì chỉ có thể tìm tuần tự từng người.'
    },
    {
      'id': 'tin6-b15-q10',
      'type': 'multiple_choice',
      'question': 'Giả sử một cuốn từ điển dày 1000 trang được sắp theo bảng chữ cái. Cách em mở trang giữa rồi lật về trước hoặc sau tương ứng với thuật toán nào trong tin học?',
      'options': [
        'Thuật toán tìm kiếm nhị phân',
        'Thuật toán tìm kiếm tuần tự',
        'Thuật toán sắp xếp nổi bọt',
        'Thuật toán sắp xếp chọn'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 73): Mở từ điển ở trang giữa rồi thu hẹp về nửa trước hoặc nửa sau chính là áp dụng tự nhiên của thuật toán tìm kiếm nhị phân.',
      'hint': 'Hành động mở giữa trang từ điển đã có thứ tự abc.'
    }
  ],

  'tin6-bai-16': [
    {
      'id': 'tin6-b16-q1',
      'type': 'multiple_choice',
      'question': 'Mục đích chính của các thuật toán sắp xếp (Sorting Algorithm) là gì?',
      'options': [
        'Hoán đổi vị trí các phần tử để đưa danh sách về thứ tự tăng dần hoặc giảm dần xác định',
        'Xóa bỏ các phần tử trùng nhau trong danh sách',
        'Nhân đôi giá trị của tất cả các phần tử trong danh sách',
        'Mã hóa các kí tự để bảo mật thông tin'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 76): Sắp xếp là việc tổ chức lại các phần tử trong danh sách theo một trật tự xác định (thường là tăng dần hoặc giảm dần).',
      'hint': 'Tổ chức lại danh sách theo thứ tự tăng hoặc giảm.'
    },
    {
      'id': 'tin6-b16-q2',
      'type': 'multiple_choice',
      'question': 'Thuật toán sắp xếp nổi bọt (Bubble Sort) hoạt động dựa trên thao tác cơ bản nào?',
      'options': [
        'So sánh hai phần tử liền kề nhau và đổi chỗ nếu chúng đứng sai thứ tự',
        'Tìm phần tử nhỏ nhất rồi đưa về vị trí đầu tiên',
        'Chia đôi dãy rồi sắp xếp độc lập từng nửa',
        'Chọn ngẫu nhiên một phần tử làm mốc so sánh'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 77): Sắp xếp nổi bọt duyệt dãy từ cuối lên (hoặc đầu xuống), liên tục so sánh hai phần tử liền kề và đổi chỗ nếu chúng chưa đúng thứ tự.',
      'hint': 'So sánh 2 phần tử cạnh nhau liên tiếp.'
    },
    {
      'id': 'tin6-b16-q3',
      'type': 'multiple_choice',
      'question': 'Vì sao thuật toán sắp xếp nổi bọt lại có tên gọi là "nổi bọt"?',
      'options': [
        'Vì qua mỗi lượt duyệt, phần tử nhẹ nhất (nhỏ nhất) sẽ từ từ dịch chuyển lên đầu giống như bọt khí nổi lên mặt nước',
        'Vì máy tính sẽ phát ra tiếng bọt nước sủi bọt khi chạy chương trình',
        'Vì thuật toán chỉ áp dụng cho dữ liệu chất lỏng trong phòng thí nghiệm',
        'Vì do nhà khoa học tên Bubble phát minh ra'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 77): Tên gọi nổi bọt xuất phát từ hình ảnh phần tử nhỏ nhất dịch chuyển dần lên vị trí thích hợp giống bọt khí nổi lên mặt nước.',
      'hint': 'Phần tử nhẹ hơn sẽ nổi dần lên trên mặt nước.'
    },
    {
      'id': 'tin6-b16-q4',
      'type': 'multiple_choice',
      'question': 'Thuật toán sắp xếp chọn (Selection Sort) thực hiện theo nguyên lí nào để sắp xếp tăng dần?',
      'options': [
        'Tại mỗi bước, tìm phần tử nhỏ nhất trong phần còn lại chưa sắp xếp và đổi chỗ nó về vị trí đầu tiên của phần đó',
        'So sánh từng cặp liền kề và đổi chỗ liên tục',
        'Bốc ngẫu nhiên một phần tử đặt vào vị trí bất kì',
        'Xóa các phần tử lớn nhất khỏi danh sách'
      ],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 79): Sắp xếp chọn tìm phần tử nhỏ nhất trong đoạn chưa sắp xếp, sau đó hoán đổi nó với phần tử đầu tiên của đoạn đó.',
      'hint': 'Tìm (chọn) phần tử nhỏ nhất rồi đặt vào vị trí đúng.'
    },
    {
      'id': 'tin6-b16-q5',
      'type': 'true_false',
      'question': 'Xác định tính Đúng / Sai của các phát biểu về thuật toán sắp xếp nổi bọt và sắp xếp chọn:',
      'options': [
        'a) Sau vòng lặp đầu tiên của sắp xếp chọn (tăng dần), phần tử nhỏ nhất của dãy đã ở đúng vị trí đầu tiên',
        'b) Sắp xếp dữ liệu giúp việc tra cứu và tìm kiếm thông tin sau đó trở nên nhanh chóng và thuận tiện hơn',
        'c) Sắp xếp nổi bọt không bao giờ cần phải hoán đổi vị trí giữa hai phần tử',
        'd) Một dãy số gồm n phần tử cần tối đa (n - 1) lượt duyệt để đảm bảo sắp xếp hoàn tất'
      ],
      'trueFalseAnswers': [True, True, False, True],
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT: Nổi bọt bắt buộc phải hoán đổi khi 2 phần tử cạnh nhau sai thứ tự. Với n phần tử cần tối đa n-1 lượt.',
      'hint': 'Cần n-1 lượt để sắp xếp hoàn toàn danh sách n phần tử.'
    },
    {
      'id': 'tin6-b16-q6',
      'type': 'fill_blank',
      'question': 'Trong thuật toán sắp xếp chọn, ở bước 1 ta tìm phần tử [1] trong toàn bộ danh sách và hoán đổi vị trí với phần tử ở vị trí [2].',
      'blankAnswers': ['nhỏ nhất', 'đầu tiên'],
      'wordBank': ['nhỏ nhất', 'đầu tiên', 'lớn nhất', 'cuối cùng', 'ở giữa', 'bất kì'],
      'options': [],
      'correctAnswer': 0,
      'difficulty': 'trung_binh',
      'explanation': 'SGK Tin học 6 KNTT (Trang 79): Bước đầu tiên của sắp xếp chọn tăng dần: tìm giá trị nhỏ nhất trong dãy và đổi chỗ với phần tử đầu tiên.',
      'hint': 'Sắp tăng dần thì số nhỏ nhất đưa về đầu.'
    },
    {
      'id': 'tin6-b16-q7',
      'type': 'matching',
      'question': 'Nối thuật toán sắp xếp ở cột bên trái với cách làm việc đặc trưng ở cột bên phải:',
      'matchingLeft': [
        {'id': '1', 'text': 'Sắp xếp nổi bọt (Bubble Sort)'},
        {'id': '2', 'text': 'Sắp xếp chọn (Selection Sort)'}
      ],
      'matchingRight': [
        {'id': 'a', 'text': 'Luôn tìm giá trị nhỏ nhất trong phần chưa sắp xếp rồi đưa về vị trí thích hợp'},
        {'id': 'b', 'text': 'Liên tục so sánh và đổi chỗ hai phần tử đứng cạnh nhau nếu chúng nghịch thế'}
      ],
      'correctMatches': {'1': 'b', '2': 'a'},
      'options': [],
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 77, 79): Nổi bọt so sánh cặp cạnh nhau; Chọn tìm min/max đưa về vị trí.',
      'hint': 'Nổi bọt: cặp cạnh nhau; Chọn: tìm phần tử nhỏ nhất/lớn nhất.'
    },
    {
      'id': 'tin6-b16-q8',
      'type': 'multiple_choice',
      'question': 'Cho dãy số ban đầu: 8, 3, 5, 2. Nếu dùng thuật toán sắp xếp chọn tăng dần, sau lượt thứ nhất dãy số sẽ trở thành dãy nào?',
      'options': [
        '2, 3, 5, 8 (phần tử nhỏ nhất là 2 đổi chỗ cho số 8 đầu dãy)',
        '3, 8, 5, 2',
        '8, 5, 3, 2',
        '2, 8, 5, 3'
      ],
      'correctAnswer': 0,
      'difficulty': 'kho',
      'explanation': 'SGK Tin học 6 KNTT (Trang 79): Dãy 8, 3, 5, 2 có số nhỏ nhất là 2. Đổi chỗ 2 với phần tử đầu tiên (8) -> dãy trở thành 2, 3, 5, 8.',
      'hint': 'Số 2 nhỏ nhất đổi chỗ với vị trí số 8.'
    },
    {
      'id': 'tin6-b16-q9',
      'type': 'multiple_choice',
      'question': 'Khi xếp hàng học sinh chào cờ theo chiều cao từ thấp đến cao, thầy giáo yêu cầu bạn thấp nhất lên đứng đầu hàng, sau đó tìm bạn thấp nhất trong số các bạn còn lại đứng tiếp theo. Thầy giáo đang áp dụng thuật toán nào?',
      'options': [
        'Thuật toán sắp xếp chọn',
        'Thuật toán sắp xếp nổi bọt',
        'Thuật toán tìm kiếm nhị phân',
        'Thuật toán tìm kiếm tuần tự'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 79): Tìm người thấp nhất (nhỏ nhất) đặt lên vị trí tiếp theo chính là nguyên lí của thuật toán sắp xếp chọn (Selection Sort).',
      'hint': 'Tìm người thấp nhất đứng đầu, rồi tìm người thấp kế tiếp.'
    },
    {
      'id': 'tin6-b16-q10',
      'type': 'multiple_choice',
      'question': 'Lợi ích lớn nhất của việc sắp xếp danh bạ điện thoại theo thứ tự bảng chữ cái ABC là gì?',
      'options': [
        'Giúp việc tìm kiếm tên và số điện thoại của người cần gọi nhanh chóng hơn rất nhiều',
        'Làm tăng số lượng liên lạc có thể lưu trong điện thoại',
        'Giúp tiết kiệm pin cho điện thoại thông minh',
        'Ngăn chặn được các cuộc gọi làm phiền từ số lạ'
      ],
      'correctAnswer': 0,
      'difficulty': 'de',
      'explanation': 'SGK Tin học 6 KNTT (Trang 76): Dữ liệu được sắp xếp giúp con người hoặc máy tính tìm kiếm thông tin nhanh hơn (có thể dùng tìm kiếm nhị phân).',
      'hint': 'Sắp xếp để tìm kiếm dễ dàng và nhanh chóng.'
    }
  ]
}

if __name__ == '__main__':
    print("Part 3: Lessons 11-16 ready.")
    for k, v in PART3.items():
        print(f"  {k}: {len(v)} câu")
