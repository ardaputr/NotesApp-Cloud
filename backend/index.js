// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const sequelize = require("./config/database.js");
// const noteRoutes = require("./routes/noteRoutes.js");
// const authRoutes = require("./routes/authRoutes.js");
// const { authenticateToken } = require("./controller/authController");

// const app = express();
// const PORT = process.env.PORT || 5000;

// const allowedOrigins = [
//   "http://127.0.0.1:5500",
//   "https://be-525057870643.us-central1.run.app",
//   "https://be-notesapp-525057870643.us-central1.run.app",
//   "https://notes-notesappbe-525057870643.us-central1.run.app",
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true); 
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = "The CORS policy for this site does not allow access from the specified Origin.";
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true, 
// }));

// app.use(express.json());
// app.use(cookieParser());

// // Routes
// app.use("/auth", authRoutes);
// app.use("/notes", authenticateToken, noteRoutes);

// sequelize.sync()
//   .then(() => console.log("Database terhubung"))
//   .catch(err => console.error("Gagal koneksi ke database", err));

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
// });

// app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));


const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require("./config/database.js");
const noteRoutes = require("./routes/noteRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const { authenticateToken } = require("./controller/authController");

const app = express();
const PORT = process.env.PORT || 5000;

// const allowedOrigins = [
//   "http://127.0.0.1:5500",
//   "https://be-525057870643.us-central1.run.app",
//   "https://be-notesapp-525057870643.us-central1.run.app",
//   "https://notes-notesappbe-525057870643.us-central1.run.app",
//   "https://h-05-450908.uc.r.appspot.com", // tambahkan origin frontend mu jika perlu
// ];

// Pasang middleware CORS sebelum routes dan middleware lain
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS policy: Origin not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Handle preflight OPTIONS request untuk semua route
app.options('*', cors({
  origin: "https://h-05-450908.uc.r.appspot.com",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/notes", authenticateToken, noteRoutes);

sequelize.sync()
  .then(() => console.log("Database terhubung"))
  .catch(err => console.error("Gagal koneksi ke database", err));

// Middleware khusus tangani error CORS
app.use((err, req, res, next) => {
  if (err.message && err.message.includes("CORS")) {
    return res.status(403).json({ message: err.message });
  }
  console.error(err);
  res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
