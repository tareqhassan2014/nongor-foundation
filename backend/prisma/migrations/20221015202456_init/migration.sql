-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `emailVerified` BOOLEAN NULL DEFAULT false,
    `firstName` VARCHAR(255) NULL DEFAULT 'Anonymous',
    `lastName` VARCHAR(255) NULL DEFAULT 'Anonymous',
    `password` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `role` ENUM('USER', 'MEMBER', 'ADVISOR', 'EDITOR', 'EXECUTIVE', 'ADMIN') NOT NULL DEFAULT 'USER',
    `bloodGroup` ENUM('A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-') NULL,
    `lastDonation` DATETIME(3) NULL,
    `passwordResetToken` VARCHAR(255) NULL,
    `passwordResetExpires` DATETIME(3) NULL,
    `emailVerificationToken` VARCHAR(255) NULL,
    `emailVerificationExpires` DATETIME(3) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photos` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `public_id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `degree` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,
    `institute` VARCHAR(191) NOT NULL,
    `passingYear` DATETIME(3) NOT NULL,
    `GPA` DOUBLE NOT NULL,
    `userId` VARCHAR(191) NULL,

    INDEX `Degree_userId_degree_key`(`userId`, `degree`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `country` VARCHAR(255) NOT NULL DEFAULT 'Bangladesh',
    `division` VARCHAR(255) NULL,
    `district` VARCHAR(255) NULL,
    `upazila` VARCHAR(255) NULL,
    `tana` VARCHAR(255) NULL,
    `union` VARCHAR(255) NULL,
    `village` VARCHAR(255) NULL,
    `state` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `street` VARCHAR(255) NULL,
    `zip` VARCHAR(255) NULL,
    `type` ENUM('PRESENT', 'PERMANENT') NOT NULL DEFAULT 'PRESENT',
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `whatsapp` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `imo` VARCHAR(255) NULL,
    `viber` VARCHAR(255) NULL,
    `facebook` VARCHAR(255) NULL,
    `twitter` VARCHAR(255) NULL,
    `linkedin` VARCHAR(255) NULL,
    `skype` VARCHAR(255) NULL,
    `website` VARCHAR(255) NULL,
    `page` VARCHAR(255) NULL,
    `github` VARCHAR(255) NULL,
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `photos` ADD CONSTRAINT `photos_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `degree` ADD CONSTRAINT `degree_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contact` ADD CONSTRAINT `contact_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
