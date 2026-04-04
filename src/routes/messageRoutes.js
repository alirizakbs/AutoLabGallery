const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { receiverId, message } = req.body;

  res.status(201).json({
    message: "Mesaj gönderildi",
    data: {
      id: "msg1",
      receiverId,
      message
    }
  });
});

router.delete("/:messageId", (req, res) => {
  const { messageId } = req.params;

  res.status(200).json({
    message: "Mesaj silindi",
    deletedMessageId: messageId
  });
});

module.exports = router;