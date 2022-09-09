-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2022 at 07:19 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `questions`
--

-- --------------------------------------------------------

--
-- Table structure for table `domaine1`
--

CREATE TABLE `domaine1` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine1`
--

INSERT INTO `domaine1` (`id`, `score`) VALUES
(1, -1),
(2, 4),
(3, 4),
(4, -1),
(5, -1),
(6, 3),
(7, 4),
(8, 3),
(9, 3),
(10, 3),
(11, 4),
(12, 3),
(13, 3),
(14, 2),
(15, 4);

-- --------------------------------------------------------

--
-- Table structure for table `domaine2`
--

CREATE TABLE `domaine2` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine2`
--

INSERT INTO `domaine2` (`id`, `score`) VALUES
(1, 4),
(2, -1),
(3, 1),
(4, 4),
(5, 4),
(6, 5),
(7, 4),
(8, 3),
(9, 3),
(10, 3),
(11, 3),
(12, 3),
(13, 4),
(14, 4),
(15, 3),
(16, 4);

-- --------------------------------------------------------

--
-- Table structure for table `domaine3`
--

CREATE TABLE `domaine3` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine3`
--

INSERT INTO `domaine3` (`id`, `score`) VALUES
(1, 3),
(2, 3),
(3, 4),
(4, 5),
(5, 5),
(6, 4);

-- --------------------------------------------------------

--
-- Table structure for table `domaine4`
--

CREATE TABLE `domaine4` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine4`
--

INSERT INTO `domaine4` (`id`, `score`) VALUES
(1, 4),
(2, 3),
(3, 3),
(4, 3),
(5, 4),
(6, 5),
(7, 4),
(8, 3),
(9, 3),
(10, 3);

-- --------------------------------------------------------

--
-- Table structure for table `domaine5`
--

CREATE TABLE `domaine5` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine5`
--

INSERT INTO `domaine5` (`id`, `score`) VALUES
(1, 4),
(2, 4),
(3, 4),
(4, 3),
(5, 4),
(6, 4),
(7, 5);

-- --------------------------------------------------------

--
-- Table structure for table `domaine6`
--

CREATE TABLE `domaine6` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine6`
--

INSERT INTO `domaine6` (`id`, `score`) VALUES
(1, 4),
(2, 5),
(3, 3),
(4, 5),
(5, 3),
(6, 3),
(7, 2),
(8, 4),
(9, 5);

-- --------------------------------------------------------

--
-- Table structure for table `domaine7`
--

CREATE TABLE `domaine7` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine7`
--

INSERT INTO `domaine7` (`id`, `score`) VALUES
(1, 5),
(2, 3),
(3, 1),
(4, 2),
(5, 5),
(6, 2);

-- --------------------------------------------------------

--
-- Table structure for table `domaine8`
--

CREATE TABLE `domaine8` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine8`
--

INSERT INTO `domaine8` (`id`, `score`) VALUES
(1, 3),
(2, 3),
(3, 3),
(4, 4),
(5, 4),
(6, 4),
(7, 3),
(8, 4),
(9, 4),
(10, 4),
(11, 4),
(12, 4);

-- --------------------------------------------------------

--
-- Table structure for table `domaine9`
--

CREATE TABLE `domaine9` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine9`
--

INSERT INTO `domaine9` (`id`, `score`) VALUES
(1, 3),
(2, 3),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 3),
(8, 2),
(9, 4);

-- --------------------------------------------------------

--
-- Table structure for table `domaine10`
--

CREATE TABLE `domaine10` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine10`
--

INSERT INTO `domaine10` (`id`, `score`) VALUES
(1, 4),
(2, 3),
(3, 3),
(4, 3),
(5, 3),
(6, 2),
(7, 3),
(8, 3),
(9, 4),
(10, 4),
(11, 4),
(12, 4),
(13, 3);

-- --------------------------------------------------------

--
-- Table structure for table `domaine11`
--

CREATE TABLE `domaine11` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine11`
--

INSERT INTO `domaine11` (`id`, `score`) VALUES
(1, 4),
(2, 4),
(3, 4),
(4, 4),
(5, 3),
(6, 3),
(7, 3),
(8, 3),
(9, 3),
(10, 3),
(11, 3),
(12, 4),
(13, 4);

-- --------------------------------------------------------

--
-- Table structure for table `domaine12`
--

CREATE TABLE `domaine12` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine12`
--

INSERT INTO `domaine12` (`id`, `score`) VALUES
(1, 2),
(2, 2),
(3, 3),
(4, 3),
(5, 2),
(6, 4),
(7, 2),
(8, 2),
(9, 3),
(10, 2),
(11, 2);

-- --------------------------------------------------------

--
-- Table structure for table `domaine13`
--

CREATE TABLE `domaine13` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine13`
--

INSERT INTO `domaine13` (`id`, `score`) VALUES
(1, 2),
(2, 2),
(3, 2),
(4, 4),
(5, 4),
(6, 3),
(7, 4);

-- --------------------------------------------------------

--
-- Table structure for table `domaine14`
--

CREATE TABLE `domaine14` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine14`
--

INSERT INTO `domaine14` (`id`, `score`) VALUES
(1, 2),
(2, 3),
(3, 5),
(4, 4),
(5, 4),
(6, 1),
(7, 1),
(8, 4),
(9, 3),
(10, 3),
(11, 3);

-- --------------------------------------------------------

--
-- Table structure for table `domaine15`
--

CREATE TABLE `domaine15` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine15`
--

INSERT INTO `domaine15` (`id`, `score`) VALUES
(1, 3),
(2, 3),
(3, 4),
(4, 3),
(5, 3),
(6, 2),
(7, 4),
(8, 4),
(9, 3);

-- --------------------------------------------------------

--
-- Table structure for table `domaine16`
--

CREATE TABLE `domaine16` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine16`
--

INSERT INTO `domaine16` (`id`, `score`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 2),
(6, 3),
(7, 4),
(8, 2),
(9, 2);

-- --------------------------------------------------------

--
-- Table structure for table `domaine17`
--

CREATE TABLE `domaine17` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine17`
--

INSERT INTO `domaine17` (`id`, `score`) VALUES
(1, 3),
(2, -1),
(3, 4),
(4, 3),
(5, 4),
(6, -1),
(7, 4),
(8, 3),
(9, 2),
(10, 3),
(11, 4),
(12, 1);

-- --------------------------------------------------------

--
-- Table structure for table `domaine18`
--

CREATE TABLE `domaine18` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine18`
--

INSERT INTO `domaine18` (`id`, `score`) VALUES
(1, 1),
(2, -1),
(3, -1),
(4, 3),
(5, 4),
(6, 2),
(7, 4),
(8, 4),
(9, 4),
(10, 3);

-- --------------------------------------------------------

--
-- Table structure for table `domaine19`
--

CREATE TABLE `domaine19` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine19`
--

INSERT INTO `domaine19` (`id`, `score`) VALUES
(1, 3),
(2, -1),
(3, 2),
(4, -1),
(5, -1),
(6, 5);

-- --------------------------------------------------------

--
-- Table structure for table `domaine20`
--

CREATE TABLE `domaine20` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `domaine20`
--

INSERT INTO `domaine20` (`id`, `score`) VALUES
(1, 1),
(2, 3),
(3, 3),
(4, 2),
(5, 2),
(6, 3),
(7, 3),
(8, 3),
(9, 3),
(10, 4),
(11, 4),
(12, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `domaine1`
--
ALTER TABLE `domaine1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine2`
--
ALTER TABLE `domaine2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine3`
--
ALTER TABLE `domaine3`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine4`
--
ALTER TABLE `domaine4`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine5`
--
ALTER TABLE `domaine5`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine6`
--
ALTER TABLE `domaine6`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine7`
--
ALTER TABLE `domaine7`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine8`
--
ALTER TABLE `domaine8`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine9`
--
ALTER TABLE `domaine9`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine10`
--
ALTER TABLE `domaine10`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine11`
--
ALTER TABLE `domaine11`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine12`
--
ALTER TABLE `domaine12`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine13`
--
ALTER TABLE `domaine13`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine14`
--
ALTER TABLE `domaine14`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine15`
--
ALTER TABLE `domaine15`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine16`
--
ALTER TABLE `domaine16`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine17`
--
ALTER TABLE `domaine17`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine18`
--
ALTER TABLE `domaine18`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine19`
--
ALTER TABLE `domaine19`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domaine20`
--
ALTER TABLE `domaine20`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `domaine1`
--
ALTER TABLE `domaine1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `domaine2`
--
ALTER TABLE `domaine2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `domaine3`
--
ALTER TABLE `domaine3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `domaine4`
--
ALTER TABLE `domaine4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `domaine5`
--
ALTER TABLE `domaine5`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `domaine6`
--
ALTER TABLE `domaine6`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `domaine7`
--
ALTER TABLE `domaine7`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `domaine8`
--
ALTER TABLE `domaine8`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `domaine9`
--
ALTER TABLE `domaine9`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `domaine10`
--
ALTER TABLE `domaine10`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `domaine11`
--
ALTER TABLE `domaine11`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `domaine12`
--
ALTER TABLE `domaine12`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `domaine13`
--
ALTER TABLE `domaine13`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `domaine14`
--
ALTER TABLE `domaine14`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `domaine15`
--
ALTER TABLE `domaine15`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `domaine16`
--
ALTER TABLE `domaine16`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `domaine17`
--
ALTER TABLE `domaine17`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `domaine18`
--
ALTER TABLE `domaine18`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `domaine19`
--
ALTER TABLE `domaine19`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `domaine20`
--
ALTER TABLE `domaine20`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
