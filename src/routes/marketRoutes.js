const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { brand, model, year } = req.query;

  res.status(200).json({
    brand: brand || "Toyota",
    model: model || "Corolla",
    year: Number(year) || 2020,
    marketValue: 950000,
    source: ["arabam.com", "sahibinden.com"]
  });
});

module.exports = router;