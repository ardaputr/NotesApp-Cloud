-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Mar 2025 pada 11.14
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notesapp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `notes`
--

INSERT INTO `notes` (`id`, `judul`, `deskripsi`, `createdAt`, `updatedAt`) VALUES
(1, 'Belajar Cloud Computing', 'Mempelajari konsep dasar Cloud Computing', '2025-03-01 08:19:55', '2025-03-01 08:19:55'),
(4, 'Cloud Computing', 'Cloud Computing adalah model penyediaan sumber daya komputasi melalui jaringan internet. Dalam cloud computing, infrastruktur seperti server, penyimpanan data, jaringan, perangkat lunak, dan layanan lainnya disediakan kepada pengguna melalui internet. Pengguna dapat mengakses sumber daya ini sesuai kebutuhan mereka, dengan membayar hanya untuk penggunaan yang sebenarnya.\n\nSederhananya, Cloud Computing (Komputasi Awan) adalah metode penyampaian berbagai layanan melalui internet. Dinamakan Cloud Computing  karena informasi yang diakses secara remote di “awan” atau ruangan virtual. Daripada menyimpan banyak file di hard drive atau penyimpanan lokal di komputer atau handphone, penyimpanan berbasis cloud memungkinkan Anda menyimpan file selama Anda memiliki akses ke internet.\n\nJenis-jenis Cloud Computing:\n\nCloud Public (Publik), jenis cloud ini disediakan oleh penyedia layanan cloud kepada masyarakat umum melalui internet. Sumber daya dalam cloud public dapat digunakan oleh banyak pengguna yang berbeda secara bersamaan.\nCloud Private (Pribadi) adalah infrastruktur cloud yang disediakan secara eksklusif untuk satu organisasi atau entitas. Cloud Private sering digunakan oleh perusahaan atau organisasi yang membutuhkan kontrol yang lebih besar atas keamanan dan privasi data mereka.\nCloud Hybrid (Campuran) adalah kombinasi dari cloud public dan private. Dalam model ini, organisasi menggunakan infrastruktur cloud private untuk kebutuhan yang lebih sensitif dan cloud public untuk beban kerja yang lebih ringan atau yang dapat dikembangkan secara dinamis.\nCloud Community (Komunitas) adalah infrastruktur cloud yang digunakan dan dimiliki oleh beberapa organisasi dengan kepentingan dan tujuan bersama. Misalnya, beberapa perusahaan dalam industri yang sama dapat berbagi cloud community untuk mengurangi biaya dan meningkatkan efisiensi.\nFungsi Cloud Computing:\n\nPenyimpanan dan Penyediaan Data: Cloud Computing menyediakan penyimpanan data yang aman dan dapat diakses dari mana saja. Pengguna dapat menyimpan dan mengelola data mereka di cloud tanpa harus bergantung pada perangkat keras fisik.\nInfrastruktur sebagai Layanan (Infrastructure as a Service/IaaS): Cloud Computing memungkinkan penyediaan sumber daya infrastruktur, seperti server, jaringan, dan penyimpanan, sebagai layanan. Pengguna dapat mengelola dan mengonfigurasi infrastruktur tersebut sesuai kebutuhan mereka tanpa harus membeli perangkat keras secara fisik.\nPlatform sebagai Layanan (Platform as a Service/PaaS): Dalam model ini, penyedia cloud menyediakan lingkungan pengembangan dan pelaksanaan aplikasi. Pengguna dapat mengembangkan, menguji, dan menjalankan aplikasi mereka tanpa harus khawatir tentang kompleksitas infrastruktur yang mendasarinya.\nPerangkat Lunak sebagai Layanan (Software as a Service/SaaS): Model ini memungkinkan pengguna untuk mengakses perangkat lunak secara online melalui internet. Pengguna tidak perlu menginstal atau memperbarui perangkat lunak secara lokal, karena semua pemrosesan dan penyimpanan data terjadi di cloud.\nKeuntungan Cloud Computing:\n\nSkalabilitas: Cloud Computing memungkinkan pengguna untuk dengan mudah meningkatkan atau mengurangi kapasitas sumber daya sesuai dengan kebutuhan mereka. Hal ini memberikan fleksibilitas yang tinggi dalam mengelola beban kerja komputasi.\nAkses yang Mudah: Dengan Cloud Computing, pengguna dapat mengakses data dan aplikasi mereka dari mana saja dengan koneksi internet. Ini memungkinkan kolaborasi yang lebih baik dan mobilitas yang lebih tinggi.\nEfisiensi Biaya: Dalam Cloud Computing, pengguna hanya membayar untuk penggunaan yang sebenarnya. Hal ini mengurangi biaya investasi awal dalam perangkat keras dan perangkat lunak, serta menghilangkan kebutuhan untuk memelihara dan mengelola infrastruktur secara fisik.\nKeamanan Data: Penyedia layanan cloud biasanya memiliki langkah-langkah keamanan yang ketat untuk melindungi data pengguna. Mereka menggunakan enkripsi, firewall, dan mekanisme keamanan lainnya untuk menjaga kerahasiaan dan integritas data.\nKekurangan Cloud Computing:\n\nKetergantungan pada Koneksi Internet: Cloud Computing membutuhkan koneksi internet yang andal untuk mengakses sumber daya. Jika koneksi internet terputus, pengguna mungkin tidak dapat mengakses data atau aplikasi mereka.\nKerahasiaan Data: Dalam Cloud Computing, data pengguna disimpan di server yang dikelola oleh penyedia layanan cloud. Ini menimbulkan kekhawatiran tentang kerahasiaan data dan kepercayaan kepada pihak ketiga.\nKeterbatasan Kontrol: Dalam model cloud public, pengguna memiliki keterbatasan dalam mengelola infrastruktur dan keamanan data. Mereka harus mengandalkan penyedia layanan cloud untuk mengelola aspek-aspek tersebut.\nKetergantungan pada Penyedia Layanan: Ketika menggunakan Cloud Computing, pengguna menjadi sangat tergantung pada penyedia layanan cloud. Jika ada masalah dengan layanan atau jika penyedia layanan tersebut menghentikan operasinya, pengguna mungkin mengalami gangguan dalam akses dan pengelolaan sumber daya.\nKesimpulan\n\nCloud Computing telah mengubah cara kita mengakses, menyimpan, dan mengelola sumber daya komputasi. Dengan penyediaan sumber daya melalui internet, cloud computing memberikan fleksibilitas, skalabilitas, dan efisiensi biaya yang tinggi. Meskipun ada kekhawatiran keamanan dan keterbatasan kontrol, penggunaan cloud computing terus berkembang karena manfaat yang ditawarkannya dalam dunia digital yang terus berkembang. Saat ini, Jamkrida Banten telah memiliki infrastruktur IT seperti server, jaringan dan hardware penyimpanan sendiri serta memanfaatkan beberapa layanan Cloud Computing sebagai sarana Backup & Synchronize untuk Disaster Recovery Plan (DRP).', '2025-03-01 08:48:42', '2025-03-01 09:02:35'),
(5, '123220163_Waramatja Yuda', 'Nama : Waramatja Yuda Putra\nPraktikum Teknologi Cloud Computing', '2025-03-01 09:20:20', '2025-03-01 09:20:30');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
