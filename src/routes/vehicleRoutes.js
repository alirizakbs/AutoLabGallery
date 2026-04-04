const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { brand, model, year } = req.body;

  res.status(201).json({
    message: "Araç eklendi",
    vehicle: {
      id: "101",
      brand,
      model,
      year
    }
  });
});

router.post("/:vehicleId/price", (req, res) => {
  const { vehicleId } = req.params;
  const { price } = req.body;

  res.status(201).json({
    message: "Araç fiyatı eklendi",
    vehicleId,
    price
  });
});

router.post("/:vehicleId/images", (req, res) => {
  const { vehicleId } = req.params;
  const { imageUrl } = req.body;

  res.status(201).json({
    message: "Araç fotoğrafı eklendi",
    vehicleId,
    image: {
      id: "img1",
      imageUrl
    }
  });
});

router.put("/:vehicleId/images/:imageId", (req, res) => {
  const { vehicleId, imageId } = req.params;
  const { imageUrl } = req.body;

  res.status(200).json({
    message: "Araç fotoğrafı güncellendi",
    vehicleId,
    image: {
      id: imageId,
      imageUrl
    }
  });
});

router.delete("/:vehicleId/images/:imageId", (req, res) => {
  const { vehicleId, imageId } = req.params;

  res.status(200).json({
    message: "Araç fotoğrafı silindi",
    vehicleId,
    deletedImageId: imageId
  });
});

module.exports = router;