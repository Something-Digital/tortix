
-- --------------------------------------------------------

--
-- Table structure for table `cake_fillings`
--

CREATE TABLE `cake_fillings` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
