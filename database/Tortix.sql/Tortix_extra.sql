
--
-- Indexes for dumped tables
--

--
-- Indexes for table `buyers`
--
ALTER TABLE `buyers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cakes_pictures`
--
ALTER TABLE `cakes_pictures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cake_fillings`
--
ALTER TABLE `cake_fillings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cake_suggested_types`
--
ALTER TABLE `cake_suggested_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cake_types`
--
ALTER TABLE `cake_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Sellers`
--
ALTER TABLE `Sellers`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `trades`
--
ALTER TABLE `trades`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buyers`
--
ALTER TABLE `buyers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cakes_pictures`
--
ALTER TABLE `cakes_pictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cake_fillings`
--
ALTER TABLE `cake_fillings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cake_suggested_types`
--
ALTER TABLE `cake_suggested_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cake_types`
--
ALTER TABLE `cake_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Sellers`
--
ALTER TABLE `Sellers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trades`
--
ALTER TABLE `trades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
