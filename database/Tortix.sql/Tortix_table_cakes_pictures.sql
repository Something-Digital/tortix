
-- --------------------------------------------------------

--
-- Table structure for table `cakes_pictures`
--

CREATE TABLE `cakes_pictures` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `is_chosen?` tinyint(1) NOT NULL,
  `description` tinytext NOT NULL,
  `url` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
