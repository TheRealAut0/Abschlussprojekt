-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 10. Mrz 2025 um 15:29
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
-- Tabellenstruktur für Tabelle `hardware`
--

CREATE TABLE `hardware` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `serial_number` varchar(50) NOT NULL,
  `status` enum('verfügbar','ausgeliehen','defekt','') NOT NULL,
  `operating_system` varchar(50) NOT NULL,
  `delivery_date` date NOT NULL,
  `imei` varchar(100) NOT NULL,
  `manufacturer` varchar(100) NOT NULL,
  `locker_id` int(50) DEFAULT NULL,
  `delivery_note_date` date NOT NULL,
  `budget_aligned` double NOT NULL,
  `employee_id` int(50) DEFAULT NULL,
  `lends_out_at` date DEFAULT NULL,
  `returned_at` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `hardware`
--

INSERT INTO `hardware` (`id`, `name`, `serial_number`, `status`, `operating_system`, `delivery_date`, `imei`, `manufacturer`, `locker_id`, `delivery_note_date`, `budget_aligned`, `employee_id`, `lends_out_at`, `returned_at`, `created_at`) VALUES
(1, 'Laptop Pro 15', 'SN12345', 'verfügbar', 'Windows 10', '2023-01-15', 'IMEI12345', 'TechCorp', 2, '2023-01-16', 1200.5, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(2, 'Smartphone Z', 'SN56890', 'ausgeliehen', 'Android 13', '2023-02-15', 'IMEI67891', 'MobileTech 2', NULL, '2023-02-14', 850, 4, '2025-03-07', NULL, '2025-03-08 14:47:04'),
(3, 'Tablet Y', 'SN11223', 'verfügbar', 'iOS 15', '2023-03-10', 'IMEI11223', 'Apple', 3, '2023-03-11', 950.75, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(4, 'Workstation Z', 'SN44556', 'verfügbar', 'Linux Ubuntu', '2023-04-05', 'IMEI44556', 'LinuxWorks', 4, '2023-04-06', 1500, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(5, 'Laptop Slim', 'SN77889', 'verfügbar', 'Windows 11', '2023-05-12', 'IMEI77889', 'TechInnovate', 5, '2023-05-13', 1100, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(6, 'Smartphone Y Plus', 'SN99001', 'verfügbar', 'Android 13', '2023-06-15', 'IMEI99001', 'MobilePro', 6, '2023-06-16', 900, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(7, 'Tablet Pro', 'SN22334', 'verfügbar', 'iOS 16', '2023-07-08', 'IMEI22334', 'Apple', 7, '2023-07-09', 1000.5, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(8, 'PC Gaming', 'SN55667', 'verfügbar', 'Windows 10', '2023-08-01', 'IMEI55667', 'GameTech', 8, '2023-08-02', 2000, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(9, 'Ultrabook A', 'SN88990', 'verfügbar', 'Windows 11', '2023-09-14', 'IMEI88990', 'NextGen', 9, '2023-09-15', 1300.75, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(10, 'Smartphone Z Ultra', 'SN33445', 'verfügbar', 'Android 14', '2023-10-20', 'IMEI33445', 'MobileElite', NULL, '2023-10-21', 950, NULL, NULL, NULL, '2025-03-08 14:47:04');

--
-- Trigger `hardware`
--
DELIMITER $$
CREATE TRIGGER `after_hardware_status_update` BEFORE UPDATE ON `hardware` FOR EACH ROW BEGIN
  -- Prüfen, ob sich der Status von "ausgeliehen" zu "verfügbar" geändert hat
  IF OLD.status = 'ausgeliehen' AND NEW.status = 'verfügbar' THEN
    -- Falls employee_id nicht NULL ist, speichern wir die Daten ins Archiv
    IF OLD.employee_id IS NOT NULL THEN
      INSERT INTO loan_archive (hardware_id, employee_id, lends_out_at, returned_at)
      VALUES (OLD.id, OLD.employee_id, OLD.lends_out_at, NEW.returned_at);

      -- Setze employee_id, lends_out_at und returned_at auf NULL (direkt in NEW)
      SET NEW.employee_id = NULL;
      SET NEW.lends_out_at = NULL;
      SET NEW.returned_at = NULL;
    END IF;
  END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `before_hardware_status_update_locker` BEFORE UPDATE ON `hardware` FOR EACH ROW BEGIN
  -- Prüfen, ob sich der Status von "verfügbar" zu "ausgeliehen" geändert hat
  IF OLD.status = 'verfügbar' AND NEW.status = 'ausgeliehen' THEN
    -- Setze locker_id auf NULL
    SET NEW.locker_id = NULL;
  END IF;
END
$$
DELIMITER ;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `hardware`
--
ALTER TABLE `hardware`
  ADD PRIMARY KEY (`id`),
  ADD KEY `standort_id` (`locker_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `hardware`
--
ALTER TABLE `hardware`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `hardware`
--
ALTER TABLE `hardware`
  ADD CONSTRAINT `hardware_ibfk_1` FOREIGN KEY (`locker_id`) REFERENCES `locker` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hardware_ibfk_2` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
