-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Host: ucfsb.ucfilespace.uc.edu:3306
-- Generation Time: Jan 07, 2013 at 02:33 PM
-- Server version: 5.0.92
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `conradjr`
--

-- --------------------------------------------------------

--
-- Table structure for table `Courses`
--

CREATE TABLE `Courses` (
  `id` int(11) NOT NULL auto_increment,
  `creditHours` int(11) default NULL,
  `courseNum` varchar(15) default NULL,
  `description` varchar(100) default NULL,
  `CourseName` varchar(30) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `Courses`
--

INSERT INTO `Courses` VALUES(5, 3, 'CS2071', 'Discrete', 'Discrete Structures');
INSERT INTO `Courses` VALUES(4, 4, 'CS1021c', 'CS1', 'Computer Science 1');
INSERT INTO `Courses` VALUES(6, 3, 'CS4003', 'Prog. Languages', 'Prog. Languages');
INSERT INTO `Courses` VALUES(7, 4, 'MATH1061', 'Calc 1', 'Calculus 1');
INSERT INTO `Courses` VALUES(8, 4, 'MATH1062', 'calc 2', 'Calculus 2');
INSERT INTO `Courses` VALUES(9, 4, 'PHYS1051', 'Physics 1', 'Gen Physics 1');
INSERT INTO `Courses` VALUES(10, 1, 'PHYS1051L', 'Phys 1 Lab', 'Gen Physics 1 Lab');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL auto_increment,
  `sectNum` int(11) NOT NULL,
  `campus` varchar(30) default NULL,
  `instruction` varchar(30) default NULL,
  `days` varchar(30) default NULL,
  `times` varchar(30) default NULL,
  `location` varchar(30) default NULL,
  `courseNum` varchar(30) default NULL,
  `callNum` varchar(15) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` VALUES(2, 1, 'WEST', 'LE', 'MWF', '1:25-2:20', 'RECCENTER3200', 'CS1021C', '702150');
INSERT INTO `sections` VALUES(3, 1, 'WEST', 'LE', 'TR', '2:00-3:20', 'BALDWIN 755', 'CS2071', '702152');
INSERT INTO `sections` VALUES(4, 1, 'WEST', 'LE', 'MTWRF', '8:00-8:55', '60WCHARL120', 'MATH1061', '700962');
INSERT INTO `sections` VALUES(5, 2, 'WEST', 'LE', 'MTWRF', '9:05-10:00', 'OLDCHEM835', 'MATH1061', '700963');
INSERT INTO `sections` VALUES(6, 3, 'WEST', 'LE', 'MTWRF', '10:10-11:05', '60WCHARL120', 'MATH1061', '700964');
INSERT INTO `sections` VALUES(7, 1, 'WEST', 'LE', 'MTWRF', '8:00-8:55', '60WCHARL125', 'MATH1062', '700968');
INSERT INTO `sections` VALUES(8, 2, 'WEST', 'LE', 'MTWRF', '9:05-10:00', 'OLDCHEM605', 'MATH1062', '700969');
INSERT INTO `sections` VALUES(9, 1, 'WEST', 'LE', 'TR', '11:00-12:50', 'BRAUNSTN300', 'PHYS1051', '700981');
INSERT INTO `sections` VALUES(10, 1, 'WEST', 'LB', 'T', '8:00-10:00', 'BRAUNSTN340', 'PHYS1051L', '706957');
INSERT INTO `sections` VALUES(11, 2, 'WEST', 'LB', 'W', '10:10-12:10', 'BRAUNSTN340', 'PHYS1051L', '706958');
