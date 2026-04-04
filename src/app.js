const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const creditRoutes = require("./routes/creditRoutes");
const marketRoutes = require("./routes/marketRoutes");
const personnelRoutes = require("./routes/personnelRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const messageRoutes = require("./routes/messageRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/credit", creditRoutes);
app.use("/market-value", marketRoutes);
app.use("/personnel", personnelRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/messages", messageRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "AutoLabGallery API çalışıyor"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});