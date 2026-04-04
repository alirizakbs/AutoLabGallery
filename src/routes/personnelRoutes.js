const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, role } = req.body;

  res.status(201).json({
    message: "Personel eklendi",
    personnel: {
      id: "1",
      name,
      role
    }
  });
});

router.put("/:personnelId", (req, res) => {
  const { personnelId } = req.params;
  const { name, role } = req.body;

  res.status(200).json({
    message: "Personel güncellendi",
    personnel: {
      id: personnelId,
      name,
      role
    }
  });
});

router.delete("/:personnelId", (req, res) => {
  const { personnelId } = req.params;

  res.status(200).json({
    message: "Personel silindi",
    deletedPersonnelId: personnelId
  });
});

module.exports = router;