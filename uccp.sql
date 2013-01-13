-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 13, 2013 at 09:08 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `courseplanner`
--

-- --------------------------------------------------------

--
-- Table structure for table `colleges`
--

CREATE TABLE IF NOT EXISTS `colleges` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `code` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creditHours` int(11) DEFAULT NULL,
  `courseNum` varchar(15) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `CourseName` varchar(30) DEFAULT NULL,
  `department_id` int(10) NOT NULL,
  `college_id` int(10) NOT NULL,
  `level` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `creditHours`, `courseNum`, `description`, `CourseName`, `department_id`, `college_id`, `level`) VALUES
(5, 3, 'CS2071', 'Discrete', 'Discrete Structures', 0, 0, 0),
(4, 4, 'CS1021c', 'CS1', 'Computer Science 1', 0, 0, 0),
(6, 3, 'CS4003', 'Prog. Languages', 'Prog. Languages', 0, 0, 0),
(7, 4, 'MATH1061', 'Calc 1', 'Calculus 1', 0, 0, 0),
(8, 4, 'MATH1062', 'calc 2', 'Calculus 2', 0, 0, 0),
(9, 4, 'PHYS1051', 'Physics 1', 'Gen Physics 1', 0, 0, 0),
(10, 1, 'PHYS1051L', 'Phys 1 Lab', 'Gen Physics 1 Lab', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE IF NOT EXISTS `departments` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` int(50) NOT NULL,
  `abbreviation` int(10) NOT NULL,
  `college_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE IF NOT EXISTS `sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(10) NOT NULL,
  `sectNum` int(11) NOT NULL,
  `campus` varchar(30) DEFAULT NULL,
  `instruction` varchar(30) DEFAULT NULL,
  `days` varchar(30) DEFAULT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `location` varchar(30) DEFAULT NULL,
  `callNum` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `course_id`, `sectNum`, `campus`, `instruction`, `days`, `start_time`, `end_time`, `location`, `callNum`) VALUES
(2, 4, 1, 'WEST', 'LE', 'MWF', '13:25:00', '14:20:00', 'RECCENTER3200', '702150'),
(3, 5, 1, 'WEST', 'LE', 'TR', '14:00:00', '15:20:00', 'BALDWIN 755', '702152'),
(4, 6, 1, 'WEST', 'LE', 'MTWRF', '08:00:00', '08:55:00', '60WCHARL120', '700962'),
(5, 6, 2, 'WEST', 'LE', 'MTWRF', '09:05:00', '10:00:00', 'OLDCHEM835', '700963'),
(6, 0, 1, 'WEST', 'LE', 'MTWRF', '10:10:00', '11:05:00', '60WCHARL120', '700964'),
(7, 8, 1, 'WEST', 'LE', 'MTWRF', '08:00:00', '08:55:00', '60WCHARL125', '700968'),
(8, 8, 2, 'WEST', 'LE', 'MTWRF', '09:05:00', '10:00:00', 'OLDCHEM605', '700969'),
(9, 9, 1, 'WEST', 'LE', 'TR', '11:00:00', '12:50:00', 'BRAUNSTN300', '700981'),
(10, 10, 1, 'WEST', 'LB', 'T', '08:00:00', '10:00:00', 'BRAUNSTN340', '706957'),
(11, 10, 2, 'WEST', 'LB', 'W', '10:10:00', '12:10:00', 'BRAUNSTN340', '706958');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE IF NOT EXISTS `students` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `m_number` varchar(9) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
