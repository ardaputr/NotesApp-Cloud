const express = require("express");
const sequelize = require("./config/database.js");
const noteRoutes = require("./routes/noteRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const cors = require("cors");
const { authenticateToken } = require("./controller/authController");

const app = express();
const PORT = 5000;

// const allowedOrigins = [
//   "https://h-05-450908.uc.r.appspot.com"
// ];

// app.use(cors({
//   origin: function(origin, callback) {
//     if (!origin) return callback(null, true);

//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = `CORS policy tidak mengizinkan origin ini: ${origin}`;
//       return callback(new Error(msg), false);
//     }

//     return callback(null, true);
//   },
// }));
app.use(cors());
app.use(express.json());

// Route auth (register, login)
app.use("/auth", authRoutes);

// Middleware JWT untuk route notes
app.use("/notes", authenticateToken, noteRoutes);

// Koneksi ke database dan jalankan server
sequelize.sync()
  .then(() => console.log("Database terhubung"))
  .catch(err => console.error("Gagal koneksi ke database", err));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
