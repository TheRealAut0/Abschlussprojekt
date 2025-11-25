-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 08. Mrz 2025 um 16:56
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

--
-- Trigger `ausleihe`
--
DELIMITER $$
CREATE TRIGGER `before_delete_ausleihe` AFTER DELETE ON `ausleihe` FOR EACH ROW BEGIN
    INSERT INTO ausleihe_archiv (mitarbeiter_id, hardware_id, ausgeliehen_am, zurückgegeben_am)
    VALUES (OLD.mitarbeiter_id, OLD.hardware_id, OLD.ausgeliehen_am, OLD.zurückgegeben_am);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ausleihe_archiv`
--

CREATE TABLE `ausleihe_archiv` (
  `id` int(50) NOT NULL,
  `mitarbeiter_id` int(50) NOT NULL,
  `hardware_id` int(50) NOT NULL,
  `ausgeliehen_am` varchar(50) NOT NULL,
  `zurückgegeben_am` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `ausleihe_archiv`
--

INSERT INTO `ausleihe_archiv` (`id`, `mitarbeiter_id`, `hardware_id`, `ausgeliehen_am`, `zurückgegeben_am`) VALUES
(1, 1, 1, '2025-03-08 16:16:07', '2025-03-03 16:16:10'),
(2, 1, 1, '2025-03-08 16:16:07', '2025-03-03 16:16:10'),
(3, 31, 8, '2025-03-08 16:25:50', '2025-03-08 16:34:44'),
(4, 1, 1, '2025-03-08 16:35:25', NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hardware`
--

CREATE TABLE `hardware` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `seriennummer` varchar(50) NOT NULL,
  `status` enum('verfügbar','ausgeliehen','defekt','') NOT NULL,
  `betriebssystem` varchar(50) NOT NULL,
  `lieferungsdatum` date NOT NULL,
  `zubehör` varchar(250) NOT NULL,
  `imei` varchar(100) NOT NULL,
  `hersteller` varchar(100) NOT NULL,
  `schrank_id` int(50) DEFAULT NULL,
  `lieferschein_datum` date NOT NULL,
  `budgetaligned` double NOT NULL,
  `erstellt_am` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `hardware`
--

INSERT INTO `hardware` (`id`, `name`, `seriennummer`, `status`, `betriebssystem`, `lieferungsdatum`, `zubehör`, `imei`, `hersteller`, `schrank_id`, `lieferschein_datum`, `budgetaligned`, `erstellt_am`) VALUES
(1, 'Laptop Pro 15', 'SN12345', 'verfügbar', 'Windows 10', '2023-01-15', 'Tasche, Maus', 'IMEI12345', 'TechCorp', 2, '2023-01-16', 1200.5, '2025-03-08 14:47:04'),
(2, 'Smartphone X', 'SN67890', 'ausgeliehen', 'Android 12', '2023-02-20', 'Hülle, Ladegerät', 'IMEI67890', 'MobileTech', 2, '2023-02-21', 800, '2025-03-08 14:47:04'),
(3, 'Tablet Y', 'SN11223', 'verfügbar', 'iOS 15', '2023-03-10', 'Stylus, Case', 'IMEI11223', 'Apple', 3, '2023-03-11', 950.75, '2025-03-08 14:47:04'),
(4, 'Workstation Z', 'SN44556', 'defekt', 'Linux Ubuntu', '2023-04-05', 'Monitor, Tastatur', 'IMEI44556', 'LinuxWorks', 4, '2023-04-06', 1500, '2025-03-08 14:47:04'),
(5, 'Laptop Slim', 'SN77889', 'verfügbar', 'Windows 11', '2023-05-12', 'USB-Hub, Maus', 'IMEI77889', 'TechInnovate', 5, '2023-05-13', 1100, '2025-03-08 14:47:04'),
(6, 'Smartphone Y Plus', 'SN99001', 'ausgeliehen', 'Android 13', '2023-06-15', 'Hülle, Panzerglas', 'IMEI99001', 'MobilePro', 6, '2023-06-16', 900, '2025-03-08 14:47:04'),
(7, 'Tablet Pro', 'SN22334', 'verfügbar', 'iOS 16', '2023-07-08', 'Keyboard, Pen', 'IMEI22334', 'Apple', 7, '2023-07-09', 1000.5, '2025-03-08 14:47:04'),
(8, 'PC Gaming', 'SN55667', 'defekt', 'Windows 10', '2023-08-01', 'RGB-Tastatur, Maus', 'IMEI55667', 'GameTech', 8, '2023-08-02', 2000, '2025-03-08 14:47:04'),
(9, 'Ultrabook A', 'SN88990', 'verfügbar', 'Windows 11', '2023-09-14', 'USB-C Dock', 'IMEI88990', 'NextGen', 9, '2023-09-15', 1300.75, '2025-03-08 14:47:04'),
(10, 'Smartphone Z Ultra', 'SN33445', 'ausgeliehen', 'Android 14', '2023-10-20', 'Wireless Charger', 'IMEI33445', 'MobileElite', 10, '2023-10-21', 950, '2025-03-08 14:47:04');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mitarbeiter`
--

CREATE TABLE `mitarbeiter` (
  `id` int(50) NOT NULL,
  `vorname` varchar(50) NOT NULL,
  `nachname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `erstellt_am` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `mitarbeiter`
--

INSERT INTO `mitarbeiter` (`id`, `vorname`, `nachname`, `email`, `erstellt_am`) VALUES
(1, 'Max', 'Mustermann', 'max.mustermann@example.com', '2025-03-08 14:31:18'),
(2, 'Erika', 'Musterfrau', 'erika.musterfrau@example.com', '2025-03-08 14:31:18'),
(3, 'Hans', 'Schmidt', 'hans.schmidt@example.com', '2025-03-08 14:31:18'),
(4, 'Anna', 'Müller', 'anna.mueller@example.com', '2025-03-08 14:31:18'),
(5, 'Peter', 'Meier', 'peter.meier@example.com', '2025-03-08 14:31:18'),
(6, 'Julia', 'Fischer', 'julia.fischer@example.com', '2025-03-08 14:31:18'),
(7, 'Thomas', 'Weber', 'thomas.weber@example.com', '2025-03-08 14:31:18'),
(8, 'Laura', 'Wagner', 'laura.wagner@example.com', '2025-03-08 14:31:18'),
(9, 'Michael', 'Becker', 'michael.becker@example.com', '2025-03-08 14:31:18'),
(10, 'Sophie', 'Schäfer', 'sophie.schaefer@example.com', '2025-03-08 14:31:18'),
(11, 'Andreas', 'Hoffmann', 'andreas.hoffmann@example.com', '2025-03-08 14:31:18'),
(12, 'Lena', 'Schröder', 'lena.schroeder@example.com', '2025-03-08 14:31:18'),
(13, 'Felix', 'Koch', 'felix.koch@example.com', '2025-03-08 14:31:18'),
(14, 'Marie', 'Richter', 'marie.richter@example.com', '2025-03-08 14:31:18'),
(15, 'Johannes', 'Klein', 'johannes.klein@example.com', '2025-03-08 14:31:18'),
(16, 'Nicole', 'Wolf', 'nicole.wolf@example.com', '2025-03-08 14:31:18'),
(17, 'Daniel', 'Neumann', 'daniel.neumann@example.com', '2025-03-08 14:31:18'),
(18, 'Melanie', 'Braun', 'melanie.braun@example.com', '2025-03-08 14:31:18'),
(19, 'Sebastian', 'Krüger', 'sebastian.krueger@example.com', '2025-03-08 14:31:18'),
(20, 'Nina', 'Hofmann', 'nina.hofmann@example.com', '2025-03-08 14:31:18'),
(21, 'Tobias', 'Hartmann', 'tobias.hartmann@example.com', '2025-03-08 14:31:18'),
(22, 'Vanessa', 'Lange', 'vanessa.lange@example.com', '2025-03-08 14:31:18'),
(23, 'Jan', 'Schmid', 'jan.schmid@example.com', '2025-03-08 14:31:18'),
(24, 'Lisa', 'Werner', 'lisa.werner@example.com', '2025-03-08 14:31:18'),
(25, 'Christian', 'Simon', 'christian.simon@example.com', '2025-03-08 14:31:18'),
(26, 'Sandra', 'Weiß', 'sandra.weiss@example.com', '2025-03-08 14:31:18'),
(27, 'Stefan', 'Scholz', 'stefan.scholz@example.com', '2025-03-08 14:31:18'),
(28, 'Katharina', 'Jung', 'katharina.jung@example.com', '2025-03-08 14:31:18'),
(29, 'Patrick', 'Keller', 'patrick.keller@example.com', '2025-03-08 14:31:18'),
(30, 'Carina', 'Maier', 'carina.maier@example.com', '2025-03-08 14:31:18'),
(31, 'Alexander', 'Lehmann', 'alexander.lehmann@example.com', '2025-03-08 14:31:18'),
(32, 'Martina', 'Krause', 'martina.krause@example.com', '2025-03-08 14:31:18'),
(33, 'Florian', 'Huber', 'florian.huber@example.com', '2025-03-08 14:31:18'),
(34, 'Sabrina', 'Mayer', 'sabrina.mayer@example.com', '2025-03-08 14:31:18'),
(35, 'Oliver', 'Fuchs', 'oliver.fuchs@example.com', '2025-03-08 14:31:18'),
(36, 'Diana', 'Lang', 'diana.lang@example.com', '2025-03-08 14:31:18'),
(37, 'Rene', 'Schuster', 'rene.schuster@example.com', '2025-03-08 14:31:18'),
(38, 'Verena', 'Graf', 'verena.graf@example.com', '2025-03-08 14:31:18'),
(39, 'Dominik', 'Bauer', 'dominik.bauer@example.com', '2025-03-08 14:31:18'),
(40, 'Jessica', 'Ludwig', 'jessica.ludwig@example.com', '2025-03-08 14:31:18'),
(41, 'Simon', 'Arnold', 'simon.arnold@example.com', '2025-03-08 14:31:18'),
(42, 'Tanja', 'Pohl', 'tanja.pohl@example.com', '2025-03-08 14:31:18'),
(43, 'Marco', 'König', 'marco.koenig@example.com', '2025-03-08 14:31:18'),
(44, 'Sarah', 'Lorenz', 'sarah.lorenz@example.com', '2025-03-08 14:31:18'),
(45, 'Kevin', 'Bergmann', 'kevin.bergmann@example.com', '2025-03-08 14:31:18'),
(46, 'Miriam', 'Frank', 'miriam.frank@example.com', '2025-03-08 14:31:18'),
(47, 'Dennis', 'Schmidtke', 'dennis.schmidtke@example.com', '2025-03-08 14:31:18'),
(48, 'Rebecca', 'Wendt', 'rebecca.wendt@example.com', '2025-03-08 14:31:18'),
(49, 'Manuel', 'Schreiber', 'manuel.schreiber@example.com', '2025-03-08 14:31:18'),
(50, 'Clara', 'Scholz', 'clara.scholz@example.com', '2025-03-08 14:31:18');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `schrank`
--

CREATE TABLE `schrank` (
  `id` int(50) NOT NULL,
  `bezeichnung` varchar(50) NOT NULL,
  `standort` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `schrank`
--

INSERT INTO `schrank` (`id`, `bezeichnung`, `standort`) VALUES
(2, 'Schrank B1', 'Berlin'),
(3, 'Schrank C1', 'Hamburg'),
(4, 'Schrank A2', 'Hannover'),
(5, 'Schrank B2', 'Berlin'),
(6, 'Schrank C2', 'Hamburg'),
(7, 'Schrank A3', 'Hannover'),
(8, 'Schrank B3', 'Berlin'),
(9, 'Schrank C3', 'Hamburg'),
(10, 'Schrank A4', 'Hannover');

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
  ADD UNIQUE KEY `hardware_id` (`hardware_id`) USING BTREE,
  ADD KEY `mitarbeiter_id` (`mitarbeiter_id`);

--
-- Indizes für die Tabelle `ausleihe_archiv`
--
ALTER TABLE `ausleihe_archiv`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mitarbeiter_id` (`mitarbeiter_id`,`hardware_id`),
  ADD KEY `hardware_id` (`hardware_id`);

--
-- Indizes für die Tabelle `hardware`
--
ALTER TABLE `hardware`
  ADD PRIMARY KEY (`id`),
  ADD KEY `standort_id` (`schrank_id`);

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
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `ausleihe_archiv`
--
ALTER TABLE `ausleihe_archiv`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `hardware`
--
ALTER TABLE `hardware`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `mitarbeiter`
--
ALTER TABLE `mitarbeiter`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT für Tabelle `schrank`
--
ALTER TABLE `schrank`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `ausleihe`
--
ALTER TABLE `ausleihe`
  ADD CONSTRAINT `ausleihe_ibfk_1` FOREIGN KEY (`hardware_id`) REFERENCES `hardware` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ausleihe_ibfk_2` FOREIGN KEY (`mitarbeiter_id`) REFERENCES `mitarbeiter` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `ausleihe_archiv`
--
ALTER TABLE `ausleihe_archiv`
  ADD CONSTRAINT `ausleihe_archiv_ibfk_1` FOREIGN KEY (`mitarbeiter_id`) REFERENCES `mitarbeiter` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ausleihe_archiv_ibfk_2` FOREIGN KEY (`hardware_id`) REFERENCES `hardware` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `hardware`
--
ALTER TABLE `hardware`
  ADD CONSTRAINT `hardware_ibfk_1` FOREIGN KEY (`schrank_id`) REFERENCES `schrank` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints der Tabelle `verlauf`
--
ALTER TABLE `verlauf`
  ADD CONSTRAINT `verlauf_ibfk_1` FOREIGN KEY (`hardware_id`) REFERENCES `hardware` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `verlauf_ibfk_2` FOREIGN KEY (`mitarbeiter_id`) REFERENCES `mitarbeiter` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
