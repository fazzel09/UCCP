-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 27, 2013 at 03:45 AM
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
-- Table structure for table `autocomplete`
--

CREATE TABLE IF NOT EXISTS `autocomplete` (
  `id` varchar(3) DEFAULT NULL,
  `type` varchar(1) DEFAULT NULL,
  `desc` varchar(58) DEFAULT NULL,
  `searchKey` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `autocomplete`
--

INSERT INTO `autocomplete` (`id`, `type`, `desc`, `searchKey`) VALUES
('1', '1', 'H - Honors Course', 'HONORS    '),
('2', '1', 'I - International/Education Abroad', 'INTERNATNL'),
('3', '1', 'N - Internship Course', 'INTERNSHIP'),
('4', '1', 'R - Research Course', 'RESEARCH  '),
('5', '1', 'S - Service Learning Course', 'SVCE-LEARN'),
('6', '1', 'T - Transformational Course', 'TRANSFORM '),
('7', '1', 'Foreign Language Course', 'FORGN-LANG'),
('8', '1', 'Interdisciplinary Course', 'INTERDISC '),
('9', '1', 'Sustainability Course', 'SUSTAIN   '),
('10', '1', 'Transition Course', 'TRANSITION'),
('11', '2', 'Uptown Campus West                                ', 'WEST'),
('12', '2', 'Uptown Campus East                                ', 'EAST'),
('13', '2', 'UC Blue Ash                                ', 'UCBA'),
('14', '2', 'UC Clermont                                   ', 'CLER'),
('15', '2', 'Victory Parkway Campus                            ', 'VP'),
('16', '2', 'Off Campus                                        ', 'OC'),
('17', '3', 'Blue Ash College', '28'),
('18', '3', 'Carl H. Lindner College of Business', '22'),
('19', '3', 'Clermont College', '34'),
('20', '3', 'College of Allied Health Sciences', '35'),
('21', '3', 'College of Design, Architecture, Art and Planning', '23'),
('22', '3', 'College of Education, Criminal Justice, and Human Services', '18'),
('23', '3', 'College of Engineering and Applied Science', '20'),
('24', '3', 'College of Medicine', '26'),
('25', '3', 'College of Nursing', '29'),
('26', '3', 'College-Conservatory of Music', '16'),
('27', '3', 'Division of Professional Practice & Experiential Learning', '36'),
('28', '3', 'James L. Winkle College of Pharmacy', '25'),
('29', '3', 'McMicken College of Arts and Sciences', '15'),
('30', '3', 'University Honors Program', '38'),
('31', '3', 'University of Cincinnati', '99'),
('32', '4', 'AADM - Arts Administration', 'AADM'),
('33', '4', 'ACCT - Accounting', 'ACCT'),
('34', '4', 'AE - Architectural Engineering', 'AE'),
('35', '4', 'AEEM - Aerospace Engineering & Engineering Mechanics', 'AEEM'),
('36', '4', 'AF - Air Force ROTC', 'AF'),
('37', '4', 'AFST - Africana Studies', 'AFST'),
('38', '4', 'AIS - Applied Interdisciplinary Studies', 'AIS'),
('39', '4', 'AIST - Asian Studies', 'AIST'),
('40', '4', 'ALH - Allied Health', 'ALH'),
('41', '4', 'AMIT - Advanced Medical Imaging Technology', 'AMIT'),
('42', '4', 'ANAN - Advanced Nursing - Nurse Anesthesia', 'ANAN'),
('43', '4', 'ANCH - Advanced Nursing - Community Health', 'ANCH'),
('44', '4', 'ANNA - Advanced Nursing - Nursing Administration', 'ANNA'),
('45', '4', 'ANNP - Advanced Nursing - Nurse Practitioner', 'ANNP'),
('46', '4', 'ANPC - Advanced Nursing - Parent Child', 'ANPC'),
('47', '4', 'ANPS - Advanced Nursing - Psychiatric', 'ANPS'),
('48', '4', 'ANTH - Anthropology', 'ANTH'),
('49', '4', 'ANW - Advanced Nursing - Women', 'ANW'),
('50', '4', 'ARAB - Arabic Languages and Culture', 'ARAB'),
('51', '4', 'ARCH - Architecture', 'ARCH'),
('52', '4', 'ARTE - Art Education', 'ARTE'),
('53', '4', 'ARTH - Art History', 'ARTH'),
('54', '4', 'ARTN - Architectural Technology', 'ARTN'),
('55', '4', 'ASL - American Sign Language', 'ASL'),
('56', '4', 'ATH - Athletic Training', 'ATH'),
('57', '4', 'AVTN - Aviation Technology', 'AVTN'),
('58', '4', 'BA - Business Administration', 'BA'),
('59', '4', 'BANA - Business Analytics', 'BANA'),
('60', '4', 'BE - Biostatistics and Epidemiology', 'BE'),
('61', '4', 'BIOL - Biological Sciences', 'BIOL'),
('62', '4', 'BLAW - Business Law', 'BLAW'),
('63', '4', 'BME - Biomedical Engineering', 'BME'),
('64', '4', 'BSN - Bassoon', 'BSN'),
('65', '4', 'BTM - Blood Transfusion Medicine', 'BTM'),
('66', '4', 'CB - Cell and Molecular Biology', 'CB'),
('67', '4', 'CBMK - Cabinet and Furniture Making', 'CBMK'),
('68', '4', 'CHE - Chemical Engineering', 'CHE'),
('69', '4', 'CHEM - Chemistry', 'CHEM'),
('70', '4', 'CHIN - Chinese Languages and Cultures', 'CHIN'),
('71', '4', 'CHMU - Chamber Music', 'CHMU'),
('72', '4', 'CHTN - Chemical Technology', 'CHTN'),
('73', '4', 'CI - Curriculum and Instruction', 'CI'),
('74', '4', 'CJ - Criminal Justice', 'CJ'),
('75', '4', 'CJTN - Criminal Justice Technology', 'CJTN'),
('76', '4', 'CLAR - Clarinet', 'CLAR'),
('77', '4', 'CLAS - Classical Civilization', 'CLAS'),
('78', '4', 'CLRS - Clinical Research', 'CLRS'),
('79', '4', 'CM - Construction Management', 'CM'),
('80', '4', 'CMDS - Communication Design', 'CMDS'),
('81', '4', 'CMP - Commercial Music Production', 'CMP'),
('82', '4', 'CNSL - Counseling', 'CNSL'),
('83', '4', 'COMM - Communication', 'COMM'),
('84', '4', 'COMP - Music Composition', 'COMP'),
('85', '4', 'COND - Conducting', 'COND'),
('86', '4', 'CS - Computer Science', 'CS'),
('87', '4', 'CSD - Communication Sciences and Disorders', 'CSD'),
('88', '4', 'CSST - Computer Systems Support', 'CSST'),
('89', '4', 'CT - Cellular Therapies', 'CT'),
('90', '4', 'CUL - Culinary Arts', 'CUL'),
('91', '4', 'CVE - Civil Engineering', 'CVE'),
('92', '4', 'CVTN - Civil and Construction Engineering Technology', 'CVTN'),
('93', '4', 'DAAP - Design, Architecture, Art and Planning', 'DAAP'),
('94', '4', 'DB - Developmental Biology', 'DB'),
('95', '4', 'DBBS - Double Bass', 'DBBS'),
('96', '4', 'DHYG - Dental Hygiene', 'DHYG'),
('97', '4', 'DNCE - Dance', 'DNCE'),
('98', '4', 'DRPF - Dramatic Performance', 'DRPF'),
('99', '4', 'DSGN - Design', 'DSGN'),
('100', '4', 'ECE - Early Childhood Education', 'ECE'),
('101', '4', 'ECED - Economic Education', 'ECED'),
('102', '4', 'ECON - Economics', 'ECON'),
('103', '4', 'EDLD - Educational Leadership', 'EDLD'),
('104', '4', 'EDST - Educational Studies', 'EDST'),
('105', '4', 'EECE - Electrical and Computer Engineering', 'EECE'),
('106', '4', 'EGFD - Engineering Graduate Fundamentals', 'EGFD'),
('107', '4', 'EGTN - Engineering Graphics Technology', 'EGTN'),
('108', '4', 'EIH - Environmental and Industrial Hygiene', 'EIH'),
('109', '4', 'ELTN - Electronic Technology', 'ELTN'),
('110', '4', 'ELTT - Electronic Trades Technology', 'ELTT'),
('111', '4', 'EMDT - Electronic Media Technology', 'EMDT'),
('112', '4', 'EME - Energy and Materials Engineering', 'EME'),
('113', '4', 'EMED - Electronic Media', 'EMED'),
('114', '4', 'EMS - Emergency Medical Services', 'EMS'),
('115', '4', 'ENED - Engineering Education', 'ENED'),
('116', '4', 'ENFD - Engineering Fundamentals', 'ENFD'),
('117', '4', 'ENGB - English - British Literature', 'ENGB'),
('118', '4', 'ENGC - English - Comparative Literature', 'ENGC'),
('119', '4', 'ENGL - English', 'ENGL'),
('120', '4', 'ENGR - Engineering', 'ENGR'),
('121', '4', 'ENSM - Ensemble', 'ENSM'),
('122', '4', 'ENTR - Entrepreneurship/Family Business', 'ENTR'),
('123', '4', 'ENV - Environmental Health', 'ENV'),
('124', '4', 'ENVE - Environmental Engineering', 'ENVE'),
('125', '4', 'ESL - English as a Second Language', 'ESL'),
('126', '4', 'EUPH - Euphonium', 'EUPH'),
('127', '4', 'EUST - European Studies', 'EUST'),
('128', '4', 'EVST - Environmental Studies', 'EVST'),
('129', '4', 'FAA - Fine Arts - Art', 'FAA'),
('130', '4', 'FAM - Fine Arts - Music', 'FAM'),
('131', '4', 'FASH - Fashion Design', 'FASH'),
('132', '4', 'FIN - Finance', 'FIN'),
('133', '4', 'FLUT - Flute', 'FLUT'),
('134', '4', 'FREN - French', 'FREN'),
('135', '4', 'FST - Fire Science', 'FST'),
('136', '4', 'GC - Genetic Counseling', 'GC'),
('137', '4', 'GEOG - Geography', 'GEOG'),
('138', '4', 'GEOL - Geology', 'GEOL'),
('139', '4', 'GNTD - Graduate Medicine Interdepartmental', 'GNTD'),
('140', '4', 'GRCD - Graphic Communication Design', 'GRCD'),
('141', '4', 'GRK - Greek', 'GRK'),
('142', '4', 'GRMN - German', 'GRMN'),
('143', '4', 'GTAR - Classical Guitar', 'GTAR'),
('144', '4', 'HARP - Harp', 'HARP'),
('145', '4', 'HCA - Healthcare Administration', 'HCA'),
('146', '4', 'HCMT - Health Care Management', 'HCMT'),
('147', '4', 'HFL - Health, Fitness and Leisure Studies', 'HFL'),
('148', '4', 'HIM - Health Information Management', 'HIM'),
('149', '4', 'HIST - History', 'HIST'),
('150', '4', 'HLSC - Health Sciences', 'HLSC'),
('151', '4', 'HLTH - Interdisciplinary Health Education', 'HLTH'),
('152', '4', 'HM - Hospitality Management', 'HM'),
('153', '4', 'HNPL - Honors Plus', 'HNPL'),
('154', '4', 'HNRS - Honors', 'HNRS'),
('155', '4', 'HORN - French Horn', 'HORN'),
('156', '4', 'HORT - Horticulture', 'HORT'),
('157', '4', 'HPE - Health Education', 'HPE'),
('158', '4', 'HSC - Harpsichord', 'HSC'),
('159', '4', 'HSST - Human Social Services Technology', 'HSST'),
('160', '4', 'HVAC - HVAC and Stationary Engineering', 'HVAC'),
('161', '4', 'IMM - Immunobiology', 'IMM'),
('162', '4', 'INDL - Industrial Design', 'INDL'),
('163', '4', 'INTB - International Business', 'INTB'),
('164', '4', 'INTD - Interior Design', 'INTD'),
('165', '4', 'INTR - Interdisciplinary', 'INTR'),
('166', '4', 'IS - Information Systems', 'IS'),
('167', '4', 'IT - Information Technology', 'IT'),
('168', '4', 'ITAL - Italian', 'ITAL'),
('169', '4', 'JAPN - Japanese Languages and Cultures', 'JAPN'),
('170', '4', 'JOUR - Journalism', 'JOUR'),
('171', '4', 'JUDC - Judaic Studies', 'JUDC'),
('172', '4', 'JZDB - Jazz Double Bass', 'JZDB'),
('173', '4', 'JZGT - Jazz Guitar', 'JZGT'),
('174', '4', 'JZPA - Jazz Piano', 'JZPA'),
('175', '4', 'JZPR - Jazz Percussion', 'JZPR'),
('176', '4', 'JZST - Jazz Studies', 'JZST'),
('177', '4', 'JZSX - Jazz Saxophone', 'JZSX'),
('178', '4', 'JZTB - Jazz Trombone', 'JZTB'),
('179', '4', 'JZTP - Jazz Trumpet', 'JZTP'),
('180', '4', 'JZVO - Jazz Voice', 'JZVO'),
('181', '4', 'LATN - Latin', 'LATN'),
('182', '4', 'LSLS - Literacy and Second Language Studies', 'LSLS'),
('183', '4', 'MA - Medical Assisting', 'MA'),
('184', '4', 'MATH - Mathematics', 'MATH'),
('185', '4', 'MCBP - Molecular, Cellular and Biochemical Pharmacology', 'MCBP'),
('186', '4', 'MCP - Molecular & Cellular Physiology', 'MCP'),
('187', '4', 'MDAS - Medical Assistant', 'MDAS'),
('188', '4', 'MDL - Middle Childhood Education', 'MDL'),
('189', '4', 'MECH - Mechanical Engineering', 'MECH'),
('190', '4', 'MES - Middle Eastern Studies', 'MES'),
('191', '4', 'MET - Mechanical Engineering Technologies', 'MET'),
('192', '4', 'METL - Metallurgical Engineering', 'METL'),
('193', '4', 'MFTN - Manufacturing Engineering Technology', 'MFTN'),
('194', '4', 'MG - Molecular Gen, Biochem, Microbiol & Immunology', 'MG'),
('195', '4', 'MGMT - Management', 'MGMT'),
('196', '4', 'MKTG - Marketing', 'MKTG'),
('197', '4', 'MLIT - Music Literature', 'MLIT'),
('198', '4', 'MLSC - Medical Laboratory Science', 'MLSC'),
('199', '4', 'MLTI - Multidisciplinary', 'MLTI'),
('200', '4', 'MP - Medical Physics', 'MP'),
('201', '4', 'MS - Military Science', 'MS'),
('202', '4', 'MTEN - Materials Engineering', 'MTEN'),
('203', '4', 'MTSC - Materials Science', 'MTSC'),
('204', '4', 'MUED - Music Education', 'MUED'),
('205', '4', 'MUHS - Music History', 'MUHS'),
('206', '4', 'MUST - Musical Theater', 'MUST'),
('207', '4', 'NBSN - Baccalaureate Nursing', 'NBSN'),
('208', '4', 'NDNP - Doctorate of Nursing Practice', 'NDNP'),
('209', '4', 'NPHD - PhD in Nursing', 'NPHD'),
('210', '4', 'NS - Neuroscience', 'NS'),
('211', '4', 'NSTN - Nursing Technology', 'NSTN'),
('212', '4', 'NURS - Nursing', 'NURS'),
('213', '4', 'NUTR - Nutrition Sciences', 'NUTR'),
('214', '4', 'OATN - Office Administration Technology', 'OATN'),
('215', '4', 'OBOE - Oboe', 'OBOE'),
('216', '4', 'OCCM - Occupational Medicine', 'OCCM'),
('217', '4', 'OLHR - Organizational Leadership/Human Resources', 'OLHR'),
('218', '4', 'OM - Operations Management', 'OM'),
('219', '4', 'OPRA - Opera', 'OPRA'),
('220', '4', 'ORGN - Organ', 'ORGN'),
('221', '4', 'OSE - Occupational Safety and Ergonomics', 'OSE'),
('222', '4', 'PADM - Pharmacy-Administrative Science', 'PADM'),
('223', '4', 'PARA - Paralegal Studies', 'PARA'),
('224', '4', 'PBIO - Pharmacy-Biological Science', 'PBIO'),
('225', '4', 'PCEU - Pharmacy-Pharmaceutics', 'PCEU'),
('226', '4', 'PD - Professional Development', 'PD'),
('227', '4', 'PERC - Percussion', 'PERC'),
('228', '4', 'PH - Public Health', 'PH'),
('229', '4', 'PHCS - Pharmacy-Health Care Systems', 'PHCS'),
('230', '4', 'PHDD - Pharmaceutical Drug Development', 'PHDD'),
('231', '4', 'PHID - Pharmacy-Interdisciplinary', 'PHID'),
('232', '4', 'PHIL - Philosophy', 'PHIL'),
('233', '4', 'PHPE - Pharmacy-Professional Experience', 'PHPE'),
('234', '4', 'PHRX - Pharmacy-Pharmacy Practice', 'PHRX'),
('235', '4', 'PHTG - Photography', 'PHTG'),
('236', '4', 'PHTH - Pharmacy-Therapeutics', 'PHTH'),
('237', '4', 'PHYS - Physics', 'PHYS'),
('238', '4', 'PIAN - Piano', 'PIAN'),
('239', '4', 'PLAN - Planning', 'PLAN'),
('240', '4', 'PMM - Pathobiology and Molecular Medicine', 'PMM'),
('241', '4', 'PMSN - Pre-Masters"', 'PMSN'),
('242', '4', 'POL - Political Science', 'POL'),
('243', '4', 'PORT - Portuguese', 'PORT'),
('244', '4', 'PRFS - Professional Seminar', 'PRFS'),
('245', '4', 'PSCI - Pharmacy-Pharmaceutical Sciences', 'PSCI'),
('246', '4', 'PSTP - Physician Scientist Training Program', 'PSTP'),
('247', '4', 'PSYC - Psychology', 'PSYC'),
('248', '4', 'PT - Physical Therapy', 'PT'),
('249', '4', 'PTA - Physical Therapist Assistant', 'PTA'),
('250', '4', 'RDSC - Radiation Science', 'RDSC'),
('251', '4', 'RDTH - Radiation Therapy Technology', 'RDTH'),
('252', '4', 'RDTN - Radiologic Technology', 'RDTN'),
('253', '4', 'RE - Real Estate', 'RE'),
('254', '4', 'READ - Reading', 'READ'),
('255', '4', 'RELG - Religious Studies', 'RELG'),
('256', '4', 'RESP - Respiratory Care', 'RESP'),
('257', '4', 'RLL - Romance Languages and Literature', 'RLL'),
('258', '4', 'RT - Respiratory Therapy', 'RT'),
('259', '4', 'RUSS - Russian', 'RUSS'),
('260', '4', 'SACN - Substance Abuse Counseling', 'SACN'),
('261', '4', 'SAID - Architecture and Interior Design', 'SAID'),
('262', '4', 'SAX - Saxophone', 'SAX'),
('263', '4', 'SEC - Secondary Education', 'SEC'),
('264', '4', 'SLA - Second Language Acquisition', 'SLA'),
('265', '4', 'SLCE - Service Learning and Civic Engagement', 'SLCE'),
('266', '4', 'SLI - Signed Language Interpreting', 'SLI'),
('267', '4', 'SMGT - Sports Management', 'SMGT'),
('268', '4', 'SOC - Sociology', 'SOC'),
('269', '4', 'SPAN - Spanish', 'SPAN'),
('270', '4', 'SPED - Special Education', 'SPED'),
('271', '4', 'SPSY - School Psychology', 'SPSY'),
('272', '4', 'ST - Surgical Technician', 'ST'),
('273', '4', 'STAT - Statistics', 'STAT'),
('274', '4', 'SW - Social Work', 'SW'),
('275', '4', 'SWAH - Swahili', 'SWAH'),
('276', '4', 'THPR - Theater Production', 'THPR'),
('277', '4', 'THRY - Music Theory', 'THRY'),
('278', '4', 'TOX - Toxicology', 'TOX'),
('279', '4', 'TRB - Trombone', 'TRB'),
('280', '4', 'TRP - Trumpet', 'TRP'),
('281', '4', 'TSCI - Teaching Science', 'TSCI'),
('282', '4', 'TUBA - Tuba', 'TUBA'),
('283', '4', 'UEL - Urban Educational Leadership', 'UEL'),
('284', '4', 'URBN - Urban Administration and Urban Studies', 'URBN'),
('285', '4', 'VC - Violoncello', 'VC'),
('286', '4', 'VETN - Veterinary Technology', 'VETN'),
('287', '4', 'VLA - Viola', 'VLA'),
('288', '4', 'VLN - Violin', 'VLN'),
('289', '4', 'VOIC - Voice', 'VOIC'),
('290', '4', 'WGS - Women''s, Gender and Sexuality Studies', 'WGS'),
('291', '4', 'WLTN - Welding Technology', 'WLTN'),
('292', '5', 'CD - CD-ROM/DVD', 'CD'),
('293', '5', 'CI - Classroom or In-person meeting', 'CI'),
('294', '5', 'IN - Individual Study or Non-Classroom Study', 'IN'),
('295', '5', 'WB - World Wide Web', 'WB'),
('296', '6', 'BC:CM - Effective Communication', 'CM'),
('297', '6', 'BC:CT - Critical Thinking', 'CT'),
('298', '6', 'BC:IL - Information Literacy', 'IL'),
('299', '6', 'BC:KI - Knowledge Integration', 'KI'),
('300', '6', 'BC:SR - Social Responsibility', 'SR'),
('301', '6', 'BK:DC - Diversity & Culture', 'DC'),
('302', '6', 'BK:EC - English Composition', 'EC'),
('303', '6', 'BK:FA - Fine Arts', 'FA'),
('304', '6', 'BK:HP - Historical Perspectives', 'HP'),
('305', '6', 'BK:HU - Humanities & Literature', 'HU'),
('306', '6', 'BK:NS - Natural Sciences', 'NS'),
('307', '6', 'BK:QR - Quantitative Reasoning', 'QR'),
('308', '6', 'BK:SE - Social & Ethical Issues', 'SE'),
('309', '6', 'BK:SS - Social Sciences', 'SS'),
('310', '6', 'BK:TI - Technology & Innovation', 'TI'),
('311', '6', 'TP:CP - Capstone', 'CP'),
('312', '6', 'TP:FY - First Year Experience', 'FY'),
('313', '6', 'TP:MC - Mid-Collegiate Experience', 'MC'),
('', '', '', ''),
('', '', '', ''),
('', '', '', '');

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
