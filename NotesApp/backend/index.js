const express = require("express");
const sequelize = require("./config/database.js");
const noteRoutes = require("./routes/noteRoutes.js");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/", noteRoutes);

// Koneksi ke database
sequelize.sync()
  .then(() => console.log("Database terhubung"))
  .catch(err => console.error("Gagal koneksi ke database", err));

// Untuk error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));


