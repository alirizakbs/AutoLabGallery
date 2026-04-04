const express = require("express");
const router = express.Router();

router.post("/calculate", (req, res) => {
  const { amount, interestRate, term } = req.body;

  const principal = Number(amount);
  const monthlyRate = Number(interestRate) / 100;
  const months = Number(term);

  const monthlyPayment = ((principal * monthlyRate) + principal) / months;
  const totalPayment = monthlyPayment * months;

  res.status(200).json({
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalPayment: Number(totalPayment.toFixed(2))
  });
});

module.exports = router;