-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 07. Mrz 2025 um 23:32
-- Server-Version: 10.4.32-MariaDB
-- PHP-Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `hardwarehub`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ausleihe`
--

CREATE TABLE `ausleihe` (
  `id` int(50) NOT NULL,
  `mitarbeiter_id` int(50) NOT NULL,
  `hardware_id` int(50) NOT NULL,
  `ausgeliehen_am` timestamp NOT NULL DEFAULT current_timestamp(),
  `zurückgegeben_am` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hardware`
--

CREATE TABLE `hardware` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `seriennummer` varchar(50) NOT NULL,
  `status` enum('verfügbar','ausgeliehen','defekt','') NOT NULL,
  `betriebssystem` varchar(50) NOT NULL,
  `lieferungsdatum` date NOT NULL,
  `zubehör` varchar(250) NOT NULL,
  `imei` varchar(100) NOT NULL,
  `hersteller` varchar(100) NOT NULL,
  `standort_id` int(100) NOT NULL,
  `lieferschein_datum` date NOT NULL,
  `budgetaligned` double NOT NULL,
  `erstellt_am` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mitarbeiter`
--

CREATE TABLE `mitarbeiter` (
  `id` int(11) NOT NULL,
  `vorname` varchar(50) NOT NULL,
  `nachname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `erstellt_am` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `mitarbeiter`
--

INSERT INTO `mitarbeiter` (`id`, `vorname`, `nachname`, `email`, `erstellt_am`) VALUES
(1, 'Max', 'Mustermann', 'max.mustermann@example.com', '2025-03-07 22:32:38'),
(2, 'Erika', 'Musterfrau', 'erika.musterfrau@example.com', '2025-03-07 22:32:38'),
(3, 'Hans', 'Schmidt', 'hans.schmidt@example.com', '2025-03-07 22:32:38'),
(4, 'Anna', 'Müller', 'anna.mueller@example.com', '2025-03-07 22:32:38'),
(5, 'Peter', 'Meier', 'peter.meier@example.com', '2025-03-07 22:32:38'),
(6, 'Julia', 'Fischer', 'julia.fischer@example.com', '2025-03-07 22:32:38'),
(7, 'Thomas', 'Weber', 'thomas.weber@example.com', '2025-03-07 22:32:38'),
(8, 'Laura', 'Wagner', 'laura.wagner@example.com', '2025-03-07 22:32:38'),
(9, 'Michael', 'Becker', 'michael.becker@example.com', '2025-03-07 22:32:38'),
(10, 'Sophie', 'Schäfer', 'sophie.schaefer@example.com', '2025-03-07 22:32:38'),
(11, 'Andreas', 'Hoffmann', 'andreas.hoffmann@example.com', '2025-03-07 22:32:38'),
(12, 'Lena', 'Schröder', 'lena.schroeder@example.com', '2025-03-07 22:32:38'),
(13, 'Felix', 'Koch', 'felix.koch@example.com', '2025-03-07 22:32:38'),
(14, 'Marie', 'Richter', 'marie.richter@example.com', '2025-03-07 22:32:38'),
(15, 'Johannes', 'Klein', 'johannes.klein@example.com', '2025-03-07 22:32:38'),
(16, 'Nicole', 'Wolf', 'nicole.wolf@example.com', '2025-03-07 22:32:38'),
(17, 'Daniel', 'Neumann', 'daniel.neumann@example.com', '2025-03-07 22:32:38'),
(18, 'Melanie', 'Braun', 'melanie.braun@example.com', '2025-03-07 22:32:38'),
(19, 'Sebastian', 'Krüger', 'sebastian.krueger@example.com', '2025-03-07 22:32:38'),
(20, 'Nina', 'Hofmann', 'nina.hofmann@example.com', '2025-03-07 22:32:38'),
(21, 'Tobias', 'Hartmann', 'tobias.hartmann@example.com', '2025-03-07 22:32:38'),
(22, 'Vanessa', 'Lange', 'vanessa.lange@example.com', '2025-03-07 22:32:38'),
(23, 'Jan', 'Schmid', 'jan.schmid@example.com', '2025-03-07 22:32:38'),
(24, 'Lisa', 'Werner', 'lisa.werner@example.com', '2025-03-07 22:32:38'),
(25, 'Christian', 'Simon', 'christian.simon@example.com', '2025-03-07 22:32:38'),
(26, 'Sandra', 'Weiß', 'sandra.weiss@example.com', '2025-03-07 22:32:38'),
(27, 'Stefan', 'Scholz', 'stefan.scholz@example.com', '2025-03-07 22:32:38'),
(28, 'Katharina', 'Jung', 'katharina.jung@example.com', '2025-03-07 22:32:38'),
(29, 'Patrick', 'Keller', 'patrick.keller@example.com', '2025-03-07 22:32:38'),
(30, 'Carina', 'Maier', 'carina.maier@example.com', '2025-03-07 22:32:38'),
(31, 'Alexander', 'Lehmann', 'alexander.lehmann@example.com', '2025-03-07 22:32:38'),
(32, 'Martina', 'Krause', 'martina.krause@example.com', '2025-03-07 22:32:38'),
(33, 'Florian', 'Huber', 'florian.huber@example.com', '2025-03-07 22:32:38'),
(34, 'Sabrina', 'Mayer', 'sabrina.mayer@example.com', '2025-03-07 22:32:38'),
(35, 'Oliver', 'Fuchs', 'oliver.fuchs@example.com', '2025-03-07 22:32:38'),
(36, 'Diana', 'Lang', 'diana.lang@example.com', '2025-03-07 22:32:38'),
(37, 'Rene', 'Schuster', 'rene.schuster@example.com', '2025-03-07 22:32:38'),
(38, 'Verena', 'Graf', 'verena.graf@example.com', '2025-03-07 22:32:38'),
(39, 'Dominik', 'Bauer', 'dominik.bauer@example.com', '2025-03-07 22:32:38'),
(40, 'Jessica', 'Ludwig', 'jessica.ludwig@example.com', '2025-03-07 22:32:38'),
(41, 'Simon', 'Arnold', 'simon.arnold@example.com', '2025-03-07 22:32:38'),
(42, 'Tanja', 'Pohl', 'tanja.pohl@example.com', '2025-03-07 22:32:38'),
(43, 'Marco', 'König', 'marco.koenig@example.com', '2025-03-07 22:32:38'),
(44, 'Sarah', 'Lorenz', 'sarah.lorenz@example.com', '2025-03-07 22:32:38'),
(45, 'Kevin', 'Bergmann', 'kevin.bergmann@example.com', '2025-03-07 22:32:38'),
(46, 'Miriam', 'Frank', 'miriam.frank@example.com', '2025-03-07 22:32:38'),
(47, 'Dennis', 'Schmidtke', 'dennis.schmidtke@example.com', '2025-03-07 22:32:38'),
(48, 'Rebecca', 'Wendt', 'rebecca.wendt@example.com', '2025-03-07 22:32:38'),
(49, 'Manuel', 'Schreiber', 'manuel.schreiber@example.com', '2025-03-07 22:32:38'),
(50, 'Clara', 'Scholz', 'clara.scholz@example.com', '2025-03-07 22:32:38');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `schrank`
--

CREATE TABLE `schrank` (
  `id` int(50) NOT NULL,
  `bezeichnung` varchar(50) NOT NULL,
  `standort` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`id`, `email`, `password`) VALUES
(1, 'user1@example.com', 'password123'),
(2, 'user2@example.com', 'securepass'),
(3, 'user3@example.com', 'mypassword'),
(4, 'user4@example.com', 'pass1234'),
(5, 'user5@example.com', 'letmein'),
(6, 'user6@example.com', 'admin123'),
(7, 'user7@example.com', 'welcome1'),
(8, 'user8@example.com', 'qwerty123'),
(9, 'user9@example.com', 'testpass'),
(10, 'user10@example.com', 'abc12345'),
(11, 'user11@example.com', 'simplepass'),
(12, 'user12@example.com', 'password1'),
(13, 'user13@example.com', 'changeme'),
(14, 'user14@example.com', 'userpass'),
(15, 'user15@example.com', 'secure1234'),
(16, 'user16@example.com', 'mysecurepass'),
(17, 'user17@example.com', 'passw0rd!'),
(18, 'user18@example.com', 'defaultpass'),
(19, 'user19@example.com', 'temporarypass'),
(20, 'user20@example.com', 'randompass'),
(21, 'test10@test.com', '314398'),
(22, 'test11@test.com', '314398'),
(23, 'test12@test.com', '314398');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `verlauf`
--

CREATE TABLE `verlauf` (
  `id` int(50) NOT NULL,
  `mitarbeiter_id` int(50) NOT NULL,
  `hardware_id` int(50) NOT NULL,
  `aktion` enum('hinzugefügt','bearbeitet','gelöscht','ausgeliehen','zurückgegeben','defekt') NOT NULL,
  `beschreibung` text NOT NULL,
  `datum` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `ausleihe`
--
ALTER TABLE `ausleihe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mitarbeiter_id` (`mitarbeiter_id`),
  ADD KEY `hardware_id` (`hardware_id`);

--
-- Indizes für die Tabelle `hardware`
--
ALTER TABLE `hardware`
  ADD PRIMARY KEY (`id`),
  ADD KEY `standort_id` (`standort_id`);

--
-- Indizes für die Tabelle `mitarbeiter`
--
ALTER TABLE `mitarbeiter`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `schrank`
--
ALTER TABLE `schrank`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `verlauf`
--
ALTER TABLE `verlauf`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mitarbeiter_id` (`mitarbeiter_id`),
  ADD KEY `hardware_id` (`hardware_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `ausleihe`
--
ALTER TABLE `ausleihe`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `hardware`
--
ALTER TABLE `hardware`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `mitarbeiter`
--
ALTER TABLE `mitarbeiter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT für Tabelle `schrank`
--
ALTER TABLE `schrank`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT für Tabelle `verlauf`
--
ALTER TABLE `verlauf`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
