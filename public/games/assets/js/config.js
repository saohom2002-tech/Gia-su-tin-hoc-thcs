/* =========================================================
   config.js — Cấu hình chung. Sửa tại đây khi cần.
   ========================================================= */
window.APP_CONFIG = {
  appName: "GAME AND LEARN",
  slogan: "Học tập chủ động — Vững vàng tri thức — Tự tin tương lai",

  /* Nhận diện thương hiệu Trường THCS Tân Bình */
  schoolName: "Trường THCS Tân Bình",
  schoolShort: "TRƯỜNG THCS TÂN BÌNH",
  schoolMotto: "Học tập chủ động — Vững vàng tri thức — Tự tin tương lai",
  schoolWebsite: "https://thcstanbinh.hcm.edu.vn",
  schoolLogo: "logo.png",
  schoolFallbackLogo: "logo.png",
  schoolAddress: "873 Cách Mạng Tháng 8, Phường Tân Sơn Nhất, TP.HCM",

  /* Thông tin tác giả */
  adminName: "Ms Trúc",
  adminPhone: "0908.959.627",
  adminPhoneTel: "0908959627",
  adminZalo: "https://zalo.me/0908959627",
  adminEmail: "tranthithanhtruc1980@gmail.com",

  /* Dữ liệu gốc Google Sheet & Thư mục Google Drive */
  googleSheetId: "1sw7iAQZw2cD7USR3O5tY6P6MvOqbWBvhuBORvr0dxNo",
  googleDriveFolderId: "",

  firebase: {
    apiKey: "AIzaSyA03JGC5MofF0WZTbChvY3Z2T6Eego6MmE",
    authDomain: "gstinhoc.firebaseapp.com",
    databaseURL: "https://gstinhoc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gstinhoc",
    storageBucket: "gstinhoc.firebasestorage.app",
    messagingSenderId: "932677144311",
    appId: "1:932677144311:web:396e0c28dc4b784ff14df2",
    measurementId: "G-77J4Y3QJT7"
  },

  /* Chỉ những email này mới thấy menu "Quản trị".
     (Nhớ sửa đồng bộ trong firebase/firestore.rules và firebase/database.rules.json) */
  adminEmails: ["tranthithanhtruc1980@gmail.com", "saohom2002@gmail.com"],

  /* Cho phép đăng nhập cục bộ để kiểm tra tính năng trước khi cập nhật web */
  allowLocalAuth: true,

  /* Thời gian chờ Firestore trước khi chuyển sang dữ liệu offline (ms) */
  cloudTimeout: 9000
};
