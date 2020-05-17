
-- --------------------------------------------------------

--
-- Table structure for table `trades`
--

CREATE TABLE `trades` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `buyer_id` int(11) NOT NULL,
  `delivery` int(11) NOT NULL,
  `cake_type` int(11) NOT NULL,
  `filling_type` int(11) NOT NULL,
  `decoration` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `order_date` datetime NOT NULL,
  `is_accepted?` tinyint(1) NOT NULL,
  `acception_date` datetime NOT NULL,
  `is_paid?` tinyint(1) NOT NULL,
  `cake_picture_url` varchar(200) NOT NULL,
  `pay_date` datetime NOT NULL,
  `comment` text NOT NULL,
  `feedback` text NOT NULL,
  `grades` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
