
-- --------------------------------------------------------

--
-- Table structure for table `cake_suggested_types`
--

CREATE TABLE `cake_suggested_types` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `usual_or_muss` enum('БИСКВИТНЫЙ','МУССОВЫЙ','ВЕГАНСКИЙ','') NOT NULL DEFAULT 'БИСКВИТНЫЙ',
  `name` varchar(100) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
