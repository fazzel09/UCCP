-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2013 at 05:04 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

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
-- Table structure for table `attributes`
--

CREATE TABLE IF NOT EXISTS `attributes` (
  `code` varchar(15) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`code`, `description`) VALUES
('HONORS    ', 'H - Honors Course'),
('INTERNATNL', 'I - International/Education Abroad'),
('INTERNSHIP', 'N - Internship Course'),
('RESEARCH  ', 'R - Research Course'),
('SVCE-LEARN', 'S - Service Learning Course'),
('TRANSFORM ', 'T - Transformational Course'),
('FORGN-LANG', 'Foreign Language Course'),
('INTERDISC ', 'Interdisciplinary Course'),
('SUSTAIN   ', 'Sustainability Course'),
('TRANSITION', 'Transition Course');

-- --------------------------------------------------------

--
-- Table structure for table `campuses`
--

CREATE TABLE IF NOT EXISTS `campuses` (
  `code` varchar(5) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `campuses`
--

INSERT INTO `campuses` (`code`, `description`) VALUES
('WEST', 'Uptown Campus West                                '),
('EAST', 'Uptown Campus East                                '),
('UCBA', 'UC Blue Ash                                '),
('CLER', 'UC Clermont                                   '),
('VP', 'Victory Parkway Campus                            '),
('OC', 'Off Campus                                        ');

-- --------------------------------------------------------

--
-- Table structure for table `colleges`
--

CREATE TABLE IF NOT EXISTS `colleges` (
  `code` int(3) NOT NULL,
  `name` varchar(75) NOT NULL,
  `nickname` varchar(10) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `colleges`
--

INSERT INTO `colleges` (`code`, `name`, `nickname`) VALUES
(15, 'McMicken College of Arts and Sciences', 'McMicken'),
(16, 'College-Conservatory of Music', 'CCM'),
(18, 'College of Education', ' Criminal '),
(20, 'College of Engineering and Applied Science', 'CEAS'),
(22, 'Carl H. Lindner College of Business', 'CoB'),
(23, 'College of Design', ' Architect'),
(25, 'James L. Winkle College of Pharmacy', 'Pharm'),
(26, 'College of Medicine', 'Med'),
(28, 'Blue Ash College', 'Blue Ash'),
(29, 'College of Nursing', 'Nursing'),
(34, 'Clermont College', 'Clermont'),
(35, 'College of Allied Health Sciences', 'CAHS'),
(36, 'Division of Professional Practice & Experiential Learning', 'DPP'),
(38, 'University Honors Program', 'Honors'),
(99, 'University of Cincinnati', 'UC');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

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
(10, 1, 'PHYS1051L', 'Phys 1 Lab', 'Gen Physics 1 Lab', 0, 0, 0),
(11, 3, 'ACCT2074', 'Financial Accounting', 'Financial Accounting', 0, 0, 0),
(12, 3, 'BIOL1002', 'intro to animal behav', 'Introduction to animal behavio', 0, 0, 0),
(14, 3, 'AE1011', 'Arch Skills 1', 'Arch Skills 1', 0, 0, 0),
(15, 3, 'CS5002', 'CS Senior Design 2', 'CS Senior Design 2', 0, 0, 0),
(16, 4, 'CHEM1040', 'Gen chem 1', 'Gen Chem 1', 0, 0, 0),
(17, 4, 'AEEM2042C', 'aerodynamics', 'Aerodynamics', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `disciplines`
--

CREATE TABLE IF NOT EXISTS `disciplines` (
  `description` varchar(75) NOT NULL,
  `code` varchar(5) NOT NULL,
  `college_id` int(3) DEFAULT NULL,
  KEY `code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disciplines`
--

INSERT INTO `disciplines` (`description`, `code`, `college_id`) VALUES
('AADM - Arts Administration', 'AADM', NULL),
('ACCT - Accounting', 'ACCT', NULL),
('AE - Architectural Engineering', 'AE', NULL),
('AEEM - Aerospace Engineering & Engineering Mechanics', 'AEEM', NULL),
('AF - Air Force ROTC', 'AF', NULL),
('AFST - Africana Studies', 'AFST', NULL),
('AIS - Applied Interdisciplinary Studies', 'AIS', NULL),
('AIST - Asian Studies', 'AIST', NULL),
('ALH - Allied Health', 'ALH', NULL),
('AMIT - Advanced Medical Imaging Technology', 'AMIT', NULL),
('ANAN - Advanced Nursing - Nurse Anesthesia', 'ANAN', NULL),
('ANCH - Advanced Nursing - Community Health', 'ANCH', NULL),
('ANNA - Advanced Nursing - Nursing Administration', 'ANNA', NULL),
('ANNP - Advanced Nursing - Nurse Practitioner', 'ANNP', NULL),
('ANPC - Advanced Nursing - Parent Child', 'ANPC', NULL),
('ANPS - Advanced Nursing - Psychiatric', 'ANPS', NULL),
('ANTH - Anthropology', 'ANTH', NULL),
('ANW - Advanced Nursing - Women', 'ANW', NULL),
('ARAB - Arabic Languages and Culture', 'ARAB', NULL),
('ARCH - Architecture', 'ARCH', NULL),
('ARTE - Art Education', 'ARTE', NULL),
('ARTH - Art History', 'ARTH', NULL),
('ARTN - Architectural Technology', 'ARTN', NULL),
('ASL - American Sign Language', 'ASL', NULL),
('ATH - Athletic Training', 'ATH', NULL),
('AVTN - Aviation Technology', 'AVTN', NULL),
('BA - Business Administration', 'BA', NULL),
('BANA - Business Analytics', 'BANA', NULL),
('BE - Biostatistics and Epidemiology', 'BE', NULL),
('BIOL - Biological Sciences', 'BIOL', NULL),
('BLAW - Business Law', 'BLAW', NULL),
('BME - Biomedical Engineering', 'BME', NULL),
('BSN - Bassoon', 'BSN', NULL),
('BTM - Blood Transfusion Medicine', 'BTM', NULL),
('CB - Cell and Molecular Biology', 'CB', NULL),
('CBMK - Cabinet and Furniture Making', 'CBMK', NULL),
('CHE - Chemical Engineering', 'CHE', NULL),
('CHEM - Chemistry', 'CHEM', NULL),
('CHIN - Chinese Languages and Cultures', 'CHIN', NULL),
('CHMU - Chamber Music', 'CHMU', NULL),
('CHTN - Chemical Technology', 'CHTN', NULL),
('CI - Curriculum and Instruction', 'CI', NULL),
('CJ - Criminal Justice', 'CJ', NULL),
('CJTN - Criminal Justice Technology', 'CJTN', NULL),
('CLAR - Clarinet', 'CLAR', NULL),
('CLAS - Classical Civilization', 'CLAS', NULL),
('CLRS - Clinical Research', 'CLRS', NULL),
('CM - Construction Management', 'CM', NULL),
('CMDS - Communication Design', 'CMDS', NULL),
('CMP - Commercial Music Production', 'CMP', NULL),
('CNSL - Counseling', 'CNSL', NULL),
('COMM - Communication', 'COMM', NULL),
('COMP - Music Composition', 'COMP', NULL),
('COND - Conducting', 'COND', NULL),
('CS - Computer Science', 'CS', NULL),
('CSD - Communication Sciences and Disorders', 'CSD', NULL),
('CSST - Computer Systems Support', 'CSST', NULL),
('CT - Cellular Therapies', 'CT', NULL),
('CUL - Culinary Arts', 'CUL', NULL),
('CVE - Civil Engineering', 'CVE', NULL),
('CVTN - Civil and Construction Engineering Technology', 'CVTN', NULL),
('DAAP - Design, Architecture, Art and Planning', 'DAAP', NULL),
('DB - Developmental Biology', 'DB', NULL),
('DBBS - Double Bass', 'DBBS', NULL),
('DHYG - Dental Hygiene', 'DHYG', NULL),
('DNCE - Dance', 'DNCE', NULL),
('DRPF - Dramatic Performance', 'DRPF', NULL),
('DSGN - Design', 'DSGN', NULL),
('ECE - Early Childhood Education', 'ECE', NULL),
('ECED - Economic Education', 'ECED', NULL),
('ECON - Economics', 'ECON', NULL),
('EDLD - Educational Leadership', 'EDLD', NULL),
('EDST - Educational Studies', 'EDST', NULL),
('EECE - Electrical and Computer Engineering', 'EECE', NULL),
('EGFD - Engineering Graduate Fundamentals', 'EGFD', NULL),
('EGTN - Engineering Graphics Technology', 'EGTN', NULL),
('EIH - Environmental and Industrial Hygiene', 'EIH', NULL),
('ELTN - Electronic Technology', 'ELTN', NULL),
('ELTT - Electronic Trades Technology', 'ELTT', NULL),
('EMDT - Electronic Media Technology', 'EMDT', NULL),
('EME - Energy and Materials Engineering', 'EME', NULL),
('EMED - Electronic Media', 'EMED', NULL),
('EMS - Emergency Medical Services', 'EMS', NULL),
('ENED - Engineering Education', 'ENED', NULL),
('ENFD - Engineering Fundamentals', 'ENFD', NULL),
('ENGB - English - British Literature', 'ENGB', NULL),
('ENGC - English - Comparative Literature', 'ENGC', NULL),
('ENGL - English', 'ENGL', NULL),
('ENGR - Engineering', 'ENGR', NULL),
('ENSM - Ensemble', 'ENSM', NULL),
('ENTR - Entrepreneurship/Family Business', 'ENTR', NULL),
('ENV - Environmental Health', 'ENV', NULL),
('ENVE - Environmental Engineering', 'ENVE', NULL),
('ESL - English as a Second Language', 'ESL', NULL),
('EUPH - Euphonium', 'EUPH', NULL),
('EUST - European Studies', 'EUST', NULL),
('EVST - Environmental Studies', 'EVST', NULL),
('FAA - Fine Arts - Art', 'FAA', NULL),
('FAM - Fine Arts - Music', 'FAM', NULL),
('FASH - Fashion Design', 'FASH', NULL),
('FIN - Finance', 'FIN', NULL),
('FLUT - Flute', 'FLUT', NULL),
('FREN - French', 'FREN', NULL),
('FST - Fire Science', 'FST', NULL),
('GC - Genetic Counseling', 'GC', NULL),
('GEOG - Geography', 'GEOG', NULL),
('GEOL - Geology', 'GEOL', NULL),
('GNTD - Graduate Medicine Interdepartmental', 'GNTD', NULL),
('GRCD - Graphic Communication Design', 'GRCD', NULL),
('GRK - Greek', 'GRK', NULL),
('GRMN - German', 'GRMN', NULL),
('GTAR - Classical Guitar', 'GTAR', NULL),
('HARP - Harp', 'HARP', NULL),
('HCA - Healthcare Administration', 'HCA', NULL),
('HCMT - Health Care Management', 'HCMT', NULL),
('HFL - Health, Fitness and Leisure Studies', 'HFL', NULL),
('HIM - Health Information Management', 'HIM', NULL),
('HIST - History', 'HIST', NULL),
('HLSC - Health Sciences', 'HLSC', NULL),
('HLTH - Interdisciplinary Health Education', 'HLTH', NULL),
('HM - Hospitality Management', 'HM', NULL),
('HNPL - Honors Plus', 'HNPL', NULL),
('HNRS - Honors', 'HNRS', NULL),
('HORN - French Horn', 'HORN', NULL),
('HORT - Horticulture', 'HORT', NULL),
('HPE - Health Education', 'HPE', NULL),
('HSC - Harpsichord', 'HSC', NULL),
('HSST - Human Social Services Technology', 'HSST', NULL),
('HVAC - HVAC and Stationary Engineering', 'HVAC', NULL),
('IMM - Immunobiology', 'IMM', NULL),
('INDL - Industrial Design', 'INDL', NULL),
('INTB - International Business', 'INTB', NULL),
('INTD - Interior Design', 'INTD', NULL),
('INTR - Interdisciplinary', 'INTR', NULL),
('IS - Information Systems', 'IS', NULL),
('IT - Information Technology', 'IT', NULL),
('ITAL - Italian', 'ITAL', NULL),
('JAPN - Japanese Languages and Cultures', 'JAPN', NULL),
('JOUR - Journalism', 'JOUR', NULL),
('JUDC - Judaic Studies', 'JUDC', NULL),
('JZDB - Jazz Double Bass', 'JZDB', NULL),
('JZGT - Jazz Guitar', 'JZGT', NULL),
('JZPA - Jazz Piano', 'JZPA', NULL),
('JZPR - Jazz Percussion', 'JZPR', NULL),
('JZST - Jazz Studies', 'JZST', NULL),
('JZSX - Jazz Saxophone', 'JZSX', NULL),
('JZTB - Jazz Trombone', 'JZTB', NULL),
('JZTP - Jazz Trumpet', 'JZTP', NULL),
('JZVO - Jazz Voice', 'JZVO', NULL),
('LATN - Latin', 'LATN', NULL),
('LSLS - Literacy and Second Language Studies', 'LSLS', NULL),
('MA - Medical Assisting', 'MA', NULL),
('MATH - Mathematics', 'MATH', NULL),
('MCBP - Molecular, Cellular and Biochemical Pharmacology', 'MCBP', NULL),
('MCP - Molecular & Cellular Physiology', 'MCP', NULL),
('MDAS - Medical Assistant', 'MDAS', NULL),
('MDL - Middle Childhood Education', 'MDL', NULL),
('MECH - Mechanical Engineering', 'MECH', NULL),
('MES - Middle Eastern Studies', 'MES', NULL),
('MET - Mechanical Engineering Technologies', 'MET', NULL),
('METL - Metallurgical Engineering', 'METL', NULL),
('MFTN - Manufacturing Engineering Technology', 'MFTN', NULL),
('MG - Molecular Gen, Biochem, Microbiol & Immunology', 'MG', NULL),
('MGMT - Management', 'MGMT', NULL),
('MKTG - Marketing', 'MKTG', NULL),
('MLIT - Music Literature', 'MLIT', NULL),
('MLSC - Medical Laboratory Science', 'MLSC', NULL),
('MLTI - Multidisciplinary', 'MLTI', NULL),
('MP - Medical Physics', 'MP', NULL),
('MS - Military Science', 'MS', NULL),
('MTEN - Materials Engineering', 'MTEN', NULL),
('MTSC - Materials Science', 'MTSC', NULL),
('MUED - Music Education', 'MUED', NULL),
('MUHS - Music History', 'MUHS', NULL),
('MUST - Musical Theater', 'MUST', NULL),
('NBSN - Baccalaureate Nursing', 'NBSN', NULL),
('NDNP - Doctorate of Nursing Practice', 'NDNP', NULL),
('NPHD - PhD in Nursing', 'NPHD', NULL),
('NS - Neuroscience', 'NS', NULL),
('NSTN - Nursing Technology', 'NSTN', NULL),
('NURS - Nursing', 'NURS', NULL),
('NUTR - Nutrition Sciences', 'NUTR', NULL),
('OATN - Office Administration Technology', 'OATN', NULL),
('OBOE - Oboe', 'OBOE', NULL),
('OCCM - Occupational Medicine', 'OCCM', NULL),
('OLHR - Organizational Leadership/Human Resources', 'OLHR', NULL),
('OM - Operations Management', 'OM', NULL),
('OPRA - Opera', 'OPRA', NULL),
('ORGN - Organ', 'ORGN', NULL),
('OSE - Occupational Safety and Ergonomics', 'OSE', NULL),
('PADM - Pharmacy-Administrative Science', 'PADM', NULL),
('PARA - Paralegal Studies', 'PARA', NULL),
('PBIO - Pharmacy-Biological Science', 'PBIO', NULL),
('PCEU - Pharmacy-Pharmaceutics', 'PCEU', NULL),
('PD - Professional Development', 'PD', NULL),
('PERC - Percussion', 'PERC', NULL),
('PH - Public Health', 'PH', NULL),
('PHCS - Pharmacy-Health Care Systems', 'PHCS', NULL),
('PHDD - Pharmaceutical Drug Development', 'PHDD', NULL),
('PHID - Pharmacy-Interdisciplinary', 'PHID', NULL),
('PHIL - Philosophy', 'PHIL', NULL),
('PHPE - Pharmacy-Professional Experience', 'PHPE', NULL),
('PHRX - Pharmacy-Pharmacy Practice', 'PHRX', NULL),
('PHTG - Photography', 'PHTG', NULL),
('PHTH - Pharmacy-Therapeutics', 'PHTH', NULL),
('PHYS - Physics', 'PHYS', NULL),
('PIAN - Piano', 'PIAN', NULL),
('PLAN - Planning', 'PLAN', NULL),
('PMM - Pathobiology and Molecular Medicine', 'PMM', NULL),
('PMSN - Pre-Master''s', 'PMSN', NULL),
('POL - Political Science', 'POL', NULL),
('PORT - Portuguese', 'PORT', NULL),
('PRFS - Professional Seminar', 'PRFS', NULL),
('PSCI - Pharmacy-Pharmaceutical Sciences', 'PSCI', NULL),
('PSTP - Physician Scientist Training Program', 'PSTP', NULL),
('PSYC - Psychology', 'PSYC', NULL),
('PT - Physical Therapy', 'PT', NULL),
('PTA - Physical Therapist Assistant', 'PTA', NULL),
('RDSC - Radiation Science', 'RDSC', NULL),
('RDTH - Radiation Therapy Technology', 'RDTH', NULL),
('RDTN - Radiologic Technology', 'RDTN', NULL),
('RE - Real Estate', 'RE', NULL),
('READ - Reading', 'READ', NULL),
('RELG - Religious Studies', 'RELG', NULL),
('RESP - Respiratory Care', 'RESP', NULL),
('RLL - Romance Languages and Literature', 'RLL', NULL),
('RT - Respiratory Therapy', 'RT', NULL),
('RUSS - Russian', 'RUSS', NULL),
('SACN - Substance Abuse Counseling', 'SACN', NULL),
('SAID - Architecture and Interior Design', 'SAID', NULL),
('SAX - Saxophone', 'SAX', NULL),
('SEC - Secondary Education', 'SEC', NULL),
('SLA - Second Language Acquisition', 'SLA', NULL),
('SLCE - Service Learning and Civic Engagement', 'SLCE', NULL),
('SLI - Signed Language Interpreting', 'SLI', NULL),
('SMGT - Sports Management', 'SMGT', NULL),
('SOC - Sociology', 'SOC', NULL),
('SPAN - Spanish', 'SPAN', NULL),
('SPED - Special Education', 'SPED', NULL),
('SPSY - School Psychology', 'SPSY', NULL),
('ST - Surgical Technician', 'ST', NULL),
('STAT - Statistics', 'STAT', NULL),
('SW - Social Work', 'SW', NULL),
('SWAH - Swahili', 'SWAH', NULL),
('THPR - Theater Production', 'THPR', NULL),
('THRY - Music Theory', 'THRY', NULL),
('TOX - Toxicology', 'TOX', NULL),
('TRB - Trombone', 'TRB', NULL),
('TRP - Trumpet', 'TRP', NULL),
('TSCI - Teaching Science', 'TSCI', NULL),
('TUBA - Tuba', 'TUBA', NULL),
('UEL - Urban Educational Leadership', 'UEL', NULL),
('URBN - Urban Administration and Urban Studies', 'URBN', NULL),
('VC - Violoncello', 'VC', NULL),
('VETN - Veterinary Technology', 'VETN', NULL),
('VLA - Viola', 'VLA', NULL),
('VLN - Violin', 'VLN', NULL),
('VOIC - Voice', 'VOIC', NULL),
('WGS - Women''s, Gender and Sexuality Studies', 'WGS', NULL),
('WLTN - Welding Technology', 'WLTN', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `formats`
--

CREATE TABLE IF NOT EXISTS `formats` (
  `code` varchar(5) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `formats`
--

INSERT INTO `formats` (`code`, `description`) VALUES
('CD', 'CD - CD-ROM/DVD'),
('CI', 'CI - Classroom or In-person meeting'),
('IN', 'IN - Individual Study or Non-Classroom Study'),
('WB', 'WB - World Wide Web');

-- --------------------------------------------------------

--
-- Table structure for table `gen_ed`
--

CREATE TABLE IF NOT EXISTS `gen_ed` (
  `code` varchar(5) NOT NULL,
  `description` varchar(50) NOT NULL,
  `category` varchar(5) NOT NULL,
  `category_expanded` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gen_ed`
--

INSERT INTO `gen_ed` (`code`, `description`, `category`, `category_expanded`) VALUES
('CM', 'BC:CM - Effective Communication', 'BC', 'Baccalaureate Competencies'),
('CT', 'BC:CT - Critical Thinking', 'BC', 'Baccalaureate Competencies'),
('IL', 'BC:IL - Information Literacy', 'BC', 'Baccalaureate Competencies'),
('KI', 'BC:KI - Knowledge Integration', 'BC', 'Baccalaureate Competencies'),
('SR', 'BC:SR - Social Responsibility', 'BC', 'Baccalaureate Competencies'),
('DC', 'BK:DC - Diversity & Culture', 'BoK', 'Breadth of Knowledge'),
('EC', 'BK:EC - English Composition', 'BoK', 'Breadth of Knowledge'),
('FA', 'BK:FA - Fine Arts', 'BoK', 'Breadth of Knowledge'),
('HP', 'BK:HP - Historical Perspectives', 'BoK', 'Breadth of Knowledge'),
('HU', 'BK:HU - Humanities & Literature', 'BoK', 'Breadth of Knowledge'),
('NS', 'BK:NS - Natural Sciences', 'BoK', 'Breadth of Knowledge'),
('QR', 'BK:QR - Quantitative Reasoning', 'BoK', 'Breadth of Knowledge'),
('SE', 'BK:SE - Social & Ethical Issues', 'BoK', 'Breadth of Knowledge'),
('SS', 'BK:SS - Social Sciences', 'BoK', 'Breadth of Knowledge'),
('TI', 'BK:TI - Technology & Innovation', 'BoK', 'Breadth of Knowledge'),
('CP', 'TP:CP - Capstone', 'TP', ''),
('FY', 'TP:FY - First Year Experience', 'TP', ''),
('MC', 'TP:MC - Mid-Collegiate Experience', 'TP', '');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

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
(11, 10, 2, 'WEST', 'LB', 'W', '10:10:00', '12:10:00', 'BRAUNSTN340', '706958'),
(12, 11, 2, 'WEST', 'LE', 'MW', '11:15:00', '12:10:00', 'LINDNER 112', '703894'),
(13, 11, 1, 'WEST', 'LE', 'MW', '11:15:00', '12:10:00', 'LINDNER 112', '703895'),
(14, 12, 1, 'OC', 'LE', 'W', '17:30:00', '20:20:00', 'ZOO-OC', '707685'),
(15, 12, 3, 'OC', 'LE', 'R', '17:30:00', '20:20:00', 'ZOO-OC', '707687'),
(17, 12, 2, 'OC', 'LE', 'W', '17:30:00', '20:20:00', 'ZOO-OC', '707686'),
(25, 14, 1, 'West', 'LE', 'MW', '13:00:00', '16:50:00', 'OldChem615B', '706608'),
(19, 14, 2, 'West', 'LE', 'TR', '13:00:00', '16:50:00', 'OldChem615B', '706609'),
(23, 17, 1, 'WEST', 'LE', 'MWF', '11:15:00', '12:10:00', 'OldChem615B', '802150');

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

-- --------------------------------------------------------

--
-- Table structure for table `terms`
--

CREATE TABLE IF NOT EXISTS `terms` (
  `id` varchar(10) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `terms`
--

INSERT INTO `terms` (`id`, `description`) VALUES
('2014B01', 'Fall Semester 2013-14                             '),
('2013B03', 'Summer Semester 2012-13                           '),
('2013B02', 'Spring Semester 2012-13                           ');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
