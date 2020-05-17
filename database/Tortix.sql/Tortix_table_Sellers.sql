
-- --------------------------------------------------------

--
-- Table structure for table `Sellers`
--

CREATE TABLE `Sellers` (
  `id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `surname` tinytext NOT NULL,
  `description` text NOT NULL,
  `rating` double NOT NULL,
  `city` int(11) NOT NULL,
  `vk_link` tinytext NOT NULL,
  `fb_link` tinytext NOT NULL,
  `registration_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `registration_code` varchar(50) NOT NULL,
  `insta_link` tinytext NOT NULL,
  `delivery` tinyint(1) DEFAULT NULL,
  `delivery_price` tinyint(4) DEFAULT '1',
  `smth` int(11) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
