-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2022 at 09:42 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+06:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nongorfoundation`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Bangladesh',
  `division` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `upazila` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tana` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `union` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `village` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('PRESENT','PERMANENT') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PRESENT',
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `createdAt`, `updatedAt`, `country`, `division`, `district`, `upazila`, `tana`, `union`, `village`, `state`, `city`, `street`, `zip`, `type`, `userId`) VALUES
('2fe1d586-eb23-42d7-866b-aa027020dbff', '2022-10-15 19:30:06.990', '2022-10-15 19:32:18.422', 'Bangladesh', 'Dhaka', 'satkhira', 'Dhaka', 'debhata', 'nowapara union', 'Nangla', NULL, NULL, NULL, '1234', 'PRESENT', '4801cbf3-38fa-4c3f-92e2-273f56160d09'),
('a2366e2f-43bb-44e9-ad67-654f8a326022', '2022-10-15 19:33:33.647', '2022-10-15 19:33:33.647', 'Bangladesh', 'Dhaka', 'satkhira', 'Dhaka', 'debhata', 'nowapara union', 'Nangla', NULL, NULL, NULL, NULL, 'PERMANENT', '4801cbf3-38fa-4c3f-92e2-273f56160d09');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `whatsapp` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `viber` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `skype` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `page` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `github` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `degree`
--

CREATE TABLE `degree` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `degree` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `institute` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passingYear` datetime(3) NOT NULL,
  `GPA` double NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `degree`
--

INSERT INTO `degree` (`id`, `createdAt`, `updatedAt`, `degree`, `institute`, `passingYear`, `GPA`, `userId`) VALUES
('a0cc6bff-c070-4e5d-aad0-773c6b121ca4', '2022-10-15 19:03:37.078', '2022-10-15 19:03:37.078', 'HSC', 'Nalta College', '0000-01-01 00:00:00.000', 5, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `public_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'Anonymous',
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'Anonymous',
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('USER','MEMBER','ADVISOR','EDITOR','EXECUTIVE','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'USER',
  `bloodGroup` enum('A+','B+','O+','AB+','A-','B-','O-','AB-') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `passwordResetExpires` datetime(3) DEFAULT NULL,
  `passwordResetToken` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emailVerificationExpires` datetime(3) DEFAULT NULL,
  `emailVerificationToken` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emailVerified` tinyint(1) DEFAULT 0,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastDonation` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `createdAt`, `updatedAt`, `email`, `firstName`, `lastName`, `password`, `role`, `bloodGroup`, `passwordResetExpires`, `passwordResetToken`, `emailVerificationExpires`, `emailVerificationToken`, `emailVerified`, `avatar`, `lastDonation`) VALUES
('4801cbf3-38fa-4c3f-92e2-273f56160d09', '2022-10-15 19:17:02.768', '2022-10-15 19:17:02.768', 'admin123@gmail.com', 'Anonymous', 'Anonymous', '$2b$12$Dzmt9wN8rixehUmDki6x3.FeAvjk8fb0xWkavR8VsJ6qgRnxQw6iu', 'USER', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('126f2fc0-8f6d-4168-8ba8-c4d35b00c061', '81a1455a5f35741172d4684c0151ab1e0eafb489ca01b4957ab50085ce1c78d8', '2022-10-15 17:48:21.092', '20221012141602_init', NULL, NULL, '2022-10-15 17:48:21.080', 1),
('21862307-07f2-4880-96c1-9a60a0dd6279', '8bfe4fcc9e51d81abe05b851d1af9ed1cdac8fa91a9044220f5f9d529a3d000b', '2022-10-15 17:48:21.078', '20221012124220_init', NULL, NULL, '2022-10-15 17:48:21.064', 1),
('3ea0dc11-8be4-4679-a2ff-caa28d084039', '8c28e24c07560abb6e9146ce92990edb2720df2df8f3c58026aaa06be59183db', '2022-10-15 19:41:07.157', '20221015194107_init', NULL, NULL, '2022-10-15 19:41:07.103', 1),
('51162e44-7c9f-48ca-97f1-05bc4a201787', '84a6af45611da9df710378c0675b3b8fa3f70ada34e2414c264869e78accd182', '2022-10-15 18:25:01.415', '20221015182501_init', NULL, NULL, '2022-10-15 18:25:01.344', 1),
('628a078b-0291-44eb-9b03-78feb7367c27', 'd7e65740e3a610ebbb669e15cba9b96b3221a1380f3d00f609439d8d0a0b22a1', '2022-10-15 17:48:21.106', '20221012160814_init', NULL, NULL, '2022-10-15 17:48:21.094', 1),
('67a13147-f4c9-43fe-aa62-d9f9669f009f', 'bfbb81261d2efcb153acb1fe4ec83907e68cae03615a1db47ead73e07fe442bb', '2022-10-15 17:48:21.167', '20221012173935_init', NULL, NULL, '2022-10-15 17:48:21.108', 1),
('86894db9-f311-4798-96e9-a5f944de2c7f', '126060dd07c0d172962bf46f1a6f652869b291c578f92c6f812d4cca9feadc2d', '2022-10-15 18:59:16.401', '20221015185916_init', NULL, NULL, '2022-10-15 18:59:16.339', 1),
('9700d060-0705-43be-8495-7ce8117ac462', 'fb82f26863ecd07a898e19926ead5cbc16a1c852d86cb148b168169d9b4d589b', '2022-10-15 18:09:50.215', '20221015180950_init', NULL, NULL, '2022-10-15 18:09:50.133', 1),
('bf353824-055a-4d06-b993-04301e495a4b', 'aaa93ee9d60b5b3f3b625a118d4445d4f604831fdc5714733637d5d521be636c', '2022-10-15 17:48:21.062', '20221012123520_init', NULL, NULL, '2022-10-15 17:48:21.048', 1),
('e7912471-b6a5-4299-83c6-ec67e37f51bf', '95d5924658dc0ebb71528f7b6face273f3d481c8e52eb23c02d86cd86bfd1db4', '2022-10-15 17:48:21.046', '20221012120703_init', NULL, NULL, '2022-10-15 17:48:21.015', 1),
('f7b42a64-6979-4d69-a599-28c355dde066', '523af614bc2d9057076fe84a84060126e9cd4c191f5be9cf0bd07a63f2cec174', '2022-10-15 17:48:21.180', '20221012174203_init', NULL, NULL, '2022-10-15 17:48:21.168', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `address_userId_fkey` (`userId`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contact_userId_fkey` (`userId`);

--
-- Indexes for table `degree`
--
ALTER TABLE `degree`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Degree_userId_degree_key` (`userId`,`degree`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photos_userId_fkey` (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `contact_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `degree`
--
ALTER TABLE `degree`
  ADD CONSTRAINT `degree_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `photos_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
