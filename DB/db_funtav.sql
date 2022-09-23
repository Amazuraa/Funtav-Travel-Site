-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Sep 2022 pada 09.27
-- Versi server: 10.4.18-MariaDB
-- Versi PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_funtav`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin@mail.com', '$2y$10$7/yc8scr4/Zuju7KNqmjQex8zgfmHQHrDh0yR6a/7P.KyN6osQLV2', '2022-09-23 00:58:24', '2022-09-23 00:58:24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(26, '2022_09_17_033240_create_users_table', 1),
(27, '2022_09_17_043243_create_admins_table', 1),
(28, '2022_09_20_144253_create_tours_table', 1),
(29, '2022_09_21_142653_create_tours_reqs_table', 1),
(30, '2022_09_23_001417_create_users_dets_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tours`
--

CREATE TABLE `tours` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `style` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `group` int(11) NOT NULL,
  `services` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `departures` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `region` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tours`
--

INSERT INTO `tours` (`id`, `title`, `duration`, `price`, `style`, `group`, `services`, `img`, `departures`, `region`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Another journey to Lorem Ipsum', 10, 15000000, 'Food', 3, '{\"insurance\":0,\"food\":\"...\",\"transport\":\"...\",\"accommodation\":\"Resort\"}', 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc3QlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', '[]', 'Asia', 2, '2022-09-23 02:19:49', '2022-09-23 02:19:49'),
(2, 'Journey to Lorem Ipsum World', 14, 20000000, 'Explorer', 19, '{\"insurance\":\"1\",\"food\":\"All Food\",\"transport\":\"All Transport\",\"accommodation\":\"Hotel & Apartment\"}', 'https://as1.ftcdn.net/v2/jpg/01/66/43/22/1000_F_166432206_rJjEKvvQ68aBM5T7E5INHkTY1dr4NfL4.jpg', '[{\"day\":\"Friday\",\"date\":\"2022-09-23\"},{\"day\":\"Saturday\",\"date\":\"2022-09-24\"}]', 'Europe', 1, '2022-09-23 02:49:57', '2022-09-23 03:53:49'),
(3, 'Private Tour to Lorem Ipsum', 7, 10000000, 'Cultural', 5, '{\"insurance\":\"1\",\"food\":\"All Food\",\"transport\":\"Provided\",\"accommodation\":\"Hotel\"}', 'https://img.freepik.com/premium-photo/temple-sumatra-island-indonesia_134785-49.jpg?w=740', '[]', 'Asia', 1, '2022-09-23 03:58:27', '2022-09-23 03:58:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tours_reqs`
--

CREATE TABLE `tours_reqs` (
  `id` int(10) UNSIGNED NOT NULL,
  `details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` int(11) NOT NULL,
  `recomendation` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tours_reqs`
--

INSERT INTO `tours_reqs` (`id`, `details`, `user`, `recomendation`, `status`, `created_at`, `updated_at`) VALUES
(1, '{\"destination\":\"Bali\",\"budget\":\"15000000\",\"accommodation\":\"Resort\",\"duration\":\"10\",\"style\":\"Food\",\"group\":\"3\",\"food\":\"-\",\"medical\":\"-\"}', 1, 1, 2, '2022-09-23 02:05:12', '2022-09-23 02:19:49');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'amazuraa@gmail.com', '$2y$10$/inhy31wmkWAZcZXBOxmTOnjg0qulug7YLZjfk2wm7tVWCjijrk4C', '2022-09-23 00:45:09', '2022-09-23 00:45:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users_dets`
--

CREATE TABLE `users_dets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `departures` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users_dets`
--

INSERT INTO `users_dets` (`id`, `name`, `phone`, `address`, `departures`, `created_at`, `updated_at`) VALUES
(1, 'Amazura', '6282122223333', 'Lorem Ipsum', '[]', '2022-09-23 00:45:09', '2022-09-23 00:45:09');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tours_reqs`
--
ALTER TABLE `tours_reqs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indeks untuk tabel `users_dets`
--
ALTER TABLE `users_dets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT untuk tabel `tours`
--
ALTER TABLE `tours`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tours_reqs`
--
ALTER TABLE `tours_reqs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
