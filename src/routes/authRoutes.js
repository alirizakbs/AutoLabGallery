const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.status(200).json({
    message: "Kullanıcı girişi başarılı",
    token: "ornek-jwt-token"
  });
});

router.post("/register", (req, res) => {
  res.status(201).json({
    message: "Kullanıcı kaydı oluşturuldu"
  });
});

router.post("/forgot-password", (req, res) => {
  res.status(200).json({
    message: "Şifre sıfırlama bağlantısı gönderildi"
  });
});

router.post("/admin/login", (req, res) => {
  res.status(200).json({
    message: "Yönetici girişi başarılı",
    token: "ornek-admin-token"
  });
});

module.exports = router;