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
  schoolWebsite: "",
  schoolLogo: "logo.png",
  schoolFallbackLogo: "logo.png",
  schoolAddress: "Phường Tân Sơn Nhất, Q. Tân Bình, TP.HCM",

  /* Thông tin tác giả */
  adminName: "Ms Trúc",
  adminPhone: "0908.959.627",
  adminPhoneTel: "0908959627",
  adminZalo: "https://zalo.me/0908959627",
  adminEmail: "tranthithanhtruc1980@gmail.com",

  /* Dữ liệu gốc Google Sheet & Thư mục Google Drive */
  googleSheetId: "",
  googleDriveFolderId: "",

  firebase: {
    apiKey: "AIzaSyBX4_WGe0BZCG0ZSG_c09GcleJ-hq4aeEY",
    authDomain: "tpn123-f7971.firebaseapp.com",
    databaseURL: "https:\/\/tpn123-f7971-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tpn123-f7971",
    storageBucket: "tpn123-f7971.firebasestorage.app",
    messagingSenderId: "443986355362",
    appId: "1:443986355362:web:1d62c3378d8b439ec6e3fb",
    measurementId: "G-JFQDG5X5CN"
  },

  /* Chỉ những email này mới thấy menu "Quản trị".
     (Nhớ sửa đồng bộ trong firebase/firestore.rules và firebase/database.rules.json) */
  adminEmails: ["tranthithanhtruc1980@gmail.com", "saohom2002@gmail.com"],

  /* Cho phép đăng nhập cục bộ để kiểm tra tính năng trước khi cập nhật web */
  allowLocalAuth: true,

  /* Thời gian chờ Firestore trước khi chuyển sang dữ liệu offline (ms) */
  cloudTimeout: 9000
};
