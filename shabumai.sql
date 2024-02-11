-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for shabumai
CREATE DATABASE IF NOT EXISTS `shabumai` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `shabumai`;

-- Dumping structure for table shabumai.historys
CREATE TABLE IF NOT EXISTS `historys` (
  `id_his` int(11) NOT NULL AUTO_INCREMENT,
  `fname_his` varchar(50) DEFAULT NULL,
  `lname_his` varchar(50) DEFAULT NULL,
  `tel_his` varchar(50) DEFAULT NULL,
  `time_his` varchar(50) DEFAULT NULL,
  `count_customer_his` varchar(50) DEFAULT NULL,
  `date_his` varchar(50) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `number_his` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_his`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shabumai.historys: ~0 rows (approximately)
INSERT INTO `historys` (`id_his`, `fname_his`, `lname_his`, `tel_his`, `time_his`, `count_customer_his`, `date_his`, `status`, `number_his`) VALUES
	(1, 'กัณฑ์อเนก', 'พึ่งเจียม', '0834377487', '0', '5', '2024-02-11', 1, NULL),
	(2, 'micle', 'jeck', '0854698785', '7', '6', '2024-02-11', 0, NULL),
	(3, 'merlee', 'hambrek', '0985456874', '8', '6', '2024-02-11', 1, NULL);

-- Dumping structure for table shabumai.list_order
CREATE TABLE IF NOT EXISTS `list_order` (
  `id_list` int(11) NOT NULL AUTO_INCREMENT,
  `name_list` varchar(50) DEFAULT NULL,
  `img_list` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_list`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shabumai.list_order: ~0 rows (approximately)
INSERT INTO `list_order` (`id_list`, `name_list`, `img_list`) VALUES
	(1, 'หมูหมัก', 'https://cdn.discordapp.com/attachments/1203729179045007432/1203730836814430279/odr1.jpg?ex=65d228b3&is=65bfb3b3&hm=90eb285e0ef3c2f06f6f912d067155485d3790f65685594ed7ce07b7b489a964&'),
	(2, 'หมึกกรอบ', 'https://cdn.discordapp.com/attachments/1203729179045007432/1203730837133201418/odr2.JPG?ex=65d228b3&is=65bfb3b3&hm=6598bb5812d2bd5adfffc3eac6b4d03bbd64fd2481438f0670d43fed1fff1dac&'),
	(3, 'ไส้กรอก', 'https://cdn.discordapp.com/attachments/1203729179045007432/1203730837405962352/odr3.JPG?ex=65d228b3&is=65bfb3b3&hm=2699c5325d053f1bf0e546d9cc3aed1d711f2d8415d9362eded73a48a0a7de69&'),
	(4, 'ปลาหมึก', 'https://cdn.discordapp.com/attachments/1203729179045007432/1203730837619613706/odr4.JPG?ex=65d228b3&is=65bfb3b3&hm=d863e17922ddedc7d95563579f15b0466129f698afd1c1537a79c6dd48f3c694&');

-- Dumping structure for table shabumai.tables
CREATE TABLE IF NOT EXISTS `tables` (
  `id_table` int(11) NOT NULL AUTO_INCREMENT,
  `number_table` int(11) DEFAULT NULL,
  `f_name` varchar(50) DEFAULT NULL,
  `l_name` varchar(50) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `dates` varchar(50) DEFAULT NULL,
  `c_customer` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_table`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shabumai.tables: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
