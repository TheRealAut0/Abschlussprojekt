-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 14. Mrz 2025 um 12:05
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
-- Tabellenstruktur für Tabelle `accessory`
--

CREATE TABLE `accessory` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `hardware_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `accessory`
--

INSERT INTO `accessory` (`id`, `name`, `hardware_id`) VALUES
(1, 'Kabel', 1),
(2, 'Ladegerät 2', NULL),
(3, 'Tasche', NULL),
(4, 'Maus', 4),
(5, 'Tastatur', 5),
(6, 'Schutzhülle', 6),
(7, 'Kopfhörer', 7),
(8, 'Dockingstation', NULL),
(9, 'Speicherkarte', NULL),
(10, 'Externe Festplatte', NULL),
(11, 'USB-Stick', 1),
(12, 'HDMI-Kabel', NULL),
(13, 'Reinigungsset', NULL),
(14, 'Mikrofon', 4),
(15, 'Webcam', 5),
(16, 'Lautsprecher', 6),
(17, 'Smartwatch', 7),
(18, 'Bluetooth Adapter', NULL),
(19, 'Erweiterungskarte', NULL),
(20, 'Mikro-USB-Kabel', NULL),
(22, 'Pen', 27),
(23, 'Maus', 27),
(24, 'Keyboard', 27),
(26, 'test', 29),
(27, 'Maus', 30),
(28, 'Keyboard', 30),
(29, 'Maus', 31),
(30, 'Keyboard', 31),
(31, 'Kabel', NULL),
(32, 'Maus', 34),
(33, 'Keyboard', 34),
(34, 'Maus', 42),
(35, 'Keyboard', 42),
(36, 'Maus', 47);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `employee`
--

CREATE TABLE `employee` (
  `id` int(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `employee`
--

INSERT INTO `employee` (`id`, `first_name`, `last_name`, `email`, `created_at`) VALUES
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
(51, 'test', 'test', 'test.test@test.com', '2025-03-10 09:02:29'),
(52, 'test2', 'test2', 'test2@test.com', '2025-03-10 09:48:44');

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
(4, 'Workstation Z', 'SN44556', 'verfügbar', 'Linux Ubuntu', '2023-04-05', 'IMEI44556', 'LinuxWorks', 4, '2023-04-06', 1500, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(5, 'Laptop Slim', 'SN77889', 'verfügbar', 'Windows 11', '2023-05-12', 'IMEI77889', 'TechInnovate', 5, '2023-05-13', 1100, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(6, 'Smartphone Y Plus', 'SN99001', 'verfügbar', 'Android 13', '2023-06-15', 'IMEI99001', 'MobilePro', 6, '2023-06-16', 900, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(7, 'Tablet Pro', 'SN22334', 'verfügbar', 'iOS 16', '2023-07-08', 'IMEI22334', 'Apple', 7, '2023-07-09', 1000.5, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(14, 'Ultrabook B', 'SN88990', 'verfügbar', 'Windows 11', '2023-09-13', 'IMEI88990', 'NextGen', 2, '2023-09-14', 1300.75, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(15, 'Smartphone X', 'SN88991', 'verfügbar', 'Android 13', '2023-09-14', 'IMEI88991', 'NextGen', 3, '2023-09-15', 850.5, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(16, 'Tablet A', 'SN88992', 'verfügbar', 'iOS 16', '2023-09-15', 'IMEI88992', 'NextGen', 4, '2023-09-16', 950, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(17, 'Ultrabook C', 'SN88993', 'verfügbar', 'Windows 10', '2023-09-16', 'IMEI88993', 'NextGen', 5, '2023-09-17', 1400.25, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(18, 'Smartphone Y', 'SN88994', 'verfügbar', 'Android 12', '2023-09-17', 'IMEI88994', 'NextGen', 6, '2023-09-18', 725.75, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(19, 'Tablet B', 'SN88995', 'verfügbar', 'iOS 15', '2023-09-18', 'IMEI88995', 'NextGen', 7, '2023-09-19', 1100.99, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(20, 'Ultrabook D', 'SN88996', 'verfügbar', 'Windows 11', '2023-09-19', 'IMEI88996', 'NextGen', 8, '2023-09-20', 1450.1, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(21, 'Smartphone Z', 'SN88997', 'verfügbar', 'Android 13', '2023-09-20', 'IMEI88997', 'NextGen', 9, '2023-09-21', 699.6, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(22, 'Tablet Z', 'SN89039', 'verfügbar', 'iOS 17', '2023-10-10', 'IMEI89039', 'NextGen', 2, '2023-10-11', 1325.9, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(23, 'Ultrabook F', 'SN88990', 'verfügbar', 'Windows 11', '2025-03-02', 'IMEI88990', 'NextGen', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 08:21:15'),
(24, 'Ultrabook G', 'SN88990', 'verfügbar', 'Windows 11', '2025-03-02', 'IMEI88990', 'NextGen', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 09:18:53'),
(25, 'Ultrabook F', 'SN88990', 'verfügbar', 'Windows 11', '2025-03-02', 'IMEI88990', 'NextGen', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 10:44:38'),
(26, 'Ultrabook H', 'SN88990', 'verfügbar', 'Windows 11', '2025-03-02', 'IMEI88990', 'NextGen', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 10:47:16'),
(27, 'Ultrabook H', 'SN88990', 'verfügbar', 'Windows 11', '2025-03-02', 'IMEI88990', 'NextGen', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 10:48:47'),
(28, 'Ultrabook I', 'SN88990', 'verfügbar', 'Windows 11', '2025-03-02', 'IMEI88990', 'NextGen', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 10:56:15'),
(29, 'Ultrabook Y', 'SN88990', 'verfügbar', 'Windows 11', '2025-03-02', 'IMEI88990', 'NextGen', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 10:57:27'),
(30, 'Ultrabook L', 'SN88990', 'verfügbar', 'Windows 11', '2025-03-02', 'IMEI88990', 'NextGen', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 14:10:37'),
(31, 'Ultrabook L', 'SN88990', 'verfügbar', 'Windows 11', '2025-03-02', 'IMEI88990', 'NextGen', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-13 14:00:36'),
(34, 'S24 Ultra', '1231231', 'verfügbar', 'Android', '2025-03-13', '123123', 'Samsung', NULL, '2025-03-13', 1200, 1, '2025-03-13', NULL, '2025-03-13 14:12:04'),
(35, 'S25 Ultra', '1231231', 'verfügbar', 'Android', '2025-03-13', '123123', 'Samsung', 4, '2025-03-13', 1500, 2, '2025-03-13', NULL, '2025-03-13 14:17:42'),
(38, 'IPhone S16 Pro Max', '551311', 'ausgeliehen', 'IOS', '2025-03-13', '123123', 'Apple', 7, '2025-03-13', 1600, 1, '2025-03-13', NULL, '2025-03-13 14:37:46'),
(42, 'Ultrabook L', 'SN88990', 'verfügbar', 'Windows 11', '2025-03-13', 'IMEI88990', 'NextGen', 9, '0000-00-00', 1300.75, NULL, NULL, NULL, '2025-03-13 14:44:56'),
(43, 'S24 Ultra', '1231231', 'verfügbar', 'Android', '2025-03-13', '123123', 'Samsung', 7, '2025-03-13', 1200, NULL, '2025-03-13', NULL, '2025-03-13 14:48:18'),
(44, 'IPhone S15 Pro Max', '1231', 'verfügbar', 'IOS', '2025-03-13', '123123', 'Apple', 4, '2025-03-13', 1200, NULL, '2025-03-13', NULL, '2025-03-13 14:49:28'),
(45, 'IPhone S14 Pro Max', '1231231', 'verfügbar', 'Android', '2025-03-13', '123123', 'Apple', 4, '2025-03-13', 1000, NULL, '2025-03-13', NULL, '2025-03-13 14:53:36'),
(46, 'S24 Ultra', '12310', 'verfügbar', 'Android', '2025-03-13', '1231230', 'Samsung', 4, '2025-03-13', 1200, NULL, '2025-03-13', NULL, '2025-03-13 14:58:24'),
(47, 'S24 Ultra', '1231231', 'ausgeliehen', 'Android', '2025-03-14', '123123', 'Samsung', 4, '2025-03-14', 1500, 1, '2025-03-14', NULL, '2025-03-14 07:34:58');

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

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hardware_data`
--

CREATE TABLE `hardware_data` (
  `id` int(50) NOT NULL,
  `name` int(100) NOT NULL,
  `operating_system_id` int(100) NOT NULL,
  `manufacturer_id` int(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hardware_status`
--

CREATE TABLE `hardware_status` (
  `id` int(50) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `hardware_status`
--

INSERT INTO `hardware_status` (`id`, `status`) VALUES
(1, 'verfügbar'),
(2, 'ausgeliehen'),
(3, 'defekt');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `history`
--

CREATE TABLE `history` (
  `id` int(50) NOT NULL,
  `user_id` int(50) NOT NULL,
  `hardware_id` int(50) DEFAULT NULL,
  `aktion` enum('hinzugefügt','bearbeitet','gelöscht','ausgeliehen','zurückgegeben','defekt') NOT NULL,
  `description` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `history`
--

INSERT INTO `history` (`id`, `user_id`, `hardware_id`, `aktion`, `description`, `date`) VALUES
(4, 1, NULL, 'gelöscht', 'Hardware gelöscht: Tablet Y', '2025-03-10 13:50:18'),
(6, 2, NULL, 'bearbeitet', 'Name: Smartphone X → Smartphone Z\nSerial: SN67890 → SN56890\nStatus: verfügbar → ausgeliehen\nOS: Android 12 → Android 13\nDelivery: Thu Feb 16 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nIMEI: IMEI67890 → IMEI67891\nManufacturer: MobileTech → MobileTech 2\nLocker ID: 2 → 2\nDelivery Note: Thu Feb 16 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nBudget: 800 → 850\nEmployee: 3 → 4\nlends out at: Sat Mar 08 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-07T23:00:00.000Z', '2025-03-10 14:20:44'),
(7, 2, NULL, 'bearbeitet', 'Delivery: Wed Feb 15 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nLocker ID: null → 2\nDelivery Note: Tue Feb 14 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nlends out at: Fri Mar 07 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-07T23:00:00.000Z', '2025-03-10 14:36:36'),
(8, 2, NULL, 'bearbeitet', 'Delivery: Wed Feb 15 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nLocker ID: 2 → 2\nDelivery Note: Wed Feb 15 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nlends out at: Fri Mar 07 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-07T23:00:00.000Z', '2025-03-10 14:37:38'),
(9, 2, NULL, 'bearbeitet', 'Delivery: Wed Feb 15 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nLocker ID: 2 → 2\nDelivery Note: Wed Feb 15 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nlends out at: Fri Mar 07 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-07T23:00:00.000Z', '2025-03-10 14:38:55'),
(10, 3, NULL, 'bearbeitet', 'Delivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:01:36'),
(11, 3, NULL, 'bearbeitet', 'Name: Ultrabook B → Ultrabook Z\nDelivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:04:46'),
(12, 3, NULL, 'bearbeitet', 'Name: Ultrabook Z → Ultrabook B\nDelivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:05:06'),
(13, 3, NULL, 'bearbeitet', 'Name: Ultrabook B → Ultrabook A\nDelivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:05:18'),
(14, 3, NULL, 'bearbeitet', 'Name: Ultrabook A → Ultrabook B\nDelivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:05:27'),
(16, 3, NULL, 'gelöscht', 'Hardware gelöscht: PC Gaming', '2025-03-11 08:13:32'),
(17, 5, 23, 'hinzugefügt', 'Neue Hardware hinzugefügt: Ultrabook Z', '2025-03-11 08:21:15'),
(18, 5, 23, 'bearbeitet', 'Delivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:23:04'),
(19, 5, 23, 'bearbeitet', 'Delivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:23:44'),
(20, 5, 24, 'hinzugefügt', 'Neue Hardware hinzugefügt: Ultrabook G', '2025-03-11 09:18:53'),
(21, 5, 23, 'bearbeitet', 'Name: Ultrabook Z → Ultrabook F\nDelivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2025-03-02\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2025-03-01', '2025-03-11 09:44:03'),
(22, 5, 25, 'hinzugefügt', 'Neue Hardware hinzugefügt: Ultrabook F', '2025-03-11 10:44:38'),
(23, 5, 26, 'hinzugefügt', 'Neue Hardware hinzugefügt: Ultrabook H', '2025-03-11 10:47:16'),
(24, 5, 27, 'hinzugefügt', 'Neue Hardware hinzugefügt: Ultrabook H', '2025-03-11 10:48:47'),
(25, 5, 28, 'hinzugefügt', 'Neue Hardware hinzugefügt: Ultrabook I', '2025-03-11 10:56:15'),
(26, 5, 29, 'hinzugefügt', 'Neue Hardware hinzugefügt: Ultrabook Y', '2025-03-11 10:57:27'),
(27, 5, 29, 'hinzugefügt', 'Neue Zubehör hinzugefügt: test', '2025-03-11 10:57:27'),
(28, 5, 30, 'hinzugefügt', 'Neue Hardware hinzugefügt: Ultrabook L', '2025-03-11 14:10:37'),
(29, 5, 30, 'hinzugefügt', 'Neue Zubehör hinzugefügt: Maus', '2025-03-11 14:10:37'),
(30, 5, 30, 'hinzugefügt', 'Neue Zubehör hinzugefügt: Keyboard', '2025-03-11 14:10:37'),
(31, 5, 31, 'hinzugefügt', 'Neue Hardware hinzugefügt: Ultrabook L', '2025-03-13 14:00:36'),
(32, 5, 31, 'hinzugefügt', 'Neue Zubehör hinzugefügt: Maus', '2025-03-13 14:00:36'),
(33, 5, 31, 'hinzugefügt', 'Neue Zubehör hinzugefügt: Keyboard', '2025-03-13 14:00:36'),
(34, 5, NULL, 'hinzugefügt', 'Neue Hardware hinzugefügt: w', '2025-03-13 14:06:50'),
(35, 5, NULL, 'hinzugefügt', 'Neue Zubehör hinzugefügt: Kabel', '2025-03-13 14:06:50'),
(36, 5, 34, 'hinzugefügt', 'Neue Hardware hinzugefügt: S24 Ultra', '2025-03-13 14:12:04'),
(37, 5, 34, 'hinzugefügt', 'Neue Zubehör hinzugefügt: Maus', '2025-03-13 14:12:04'),
(38, 5, 34, 'hinzugefügt', 'Neue Zubehör hinzugefügt: Keyboard', '2025-03-13 14:12:04'),
(39, 5, 35, 'hinzugefügt', 'Neue Hardware hinzugefügt: S25 Ultra', '2025-03-13 14:17:42'),
(40, 5, 38, 'hinzugefügt', 'Neue Hardware hinzugefügt: IPhone S16 Pro Max', '2025-03-13 14:37:46'),
(41, 5, 42, 'hinzugefügt', 'Neue Hardware hinzugefügt: Ultrabook L', '2025-03-13 14:44:56'),
(42, 5, 42, 'hinzugefügt', 'Neue Zubehör hinzugefügt: Maus', '2025-03-13 14:44:56'),
(43, 5, 42, 'hinzugefügt', 'Neue Zubehör hinzugefügt: Keyboard', '2025-03-13 14:44:56'),
(44, 5, 43, 'hinzugefügt', 'Neue Hardware hinzugefügt: S24 Ultra', '2025-03-13 14:48:18'),
(45, 5, 44, 'hinzugefügt', 'Neue Hardware hinzugefügt: IPhone S15 Pro Max', '2025-03-13 14:49:28'),
(46, 5, 45, 'hinzugefügt', 'Neue Hardware hinzugefügt: IPhone S14 Pro Max', '2025-03-13 14:53:36'),
(47, 5, 46, 'hinzugefügt', 'Neue Hardware hinzugefügt: S24 Ultra', '2025-03-13 14:58:24'),
(48, 5, 47, 'hinzugefügt', 'Neue Hardware hinzugefügt: S24 Ultra', '2025-03-14 07:34:58'),
(49, 5, 47, 'hinzugefügt', 'Neue Zubehör hinzugefügt: Maus', '2025-03-14 07:34:58');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `histroy_aktion`
--

CREATE TABLE `histroy_aktion` (
  `id` int(50) NOT NULL,
  `aktion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `lends_out`
--

CREATE TABLE `lends_out` (
  `id` int(50) NOT NULL,
  `employee_id` int(50) NOT NULL,
  `hardware_id` int(50) NOT NULL,
  `lends_out_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `returned_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Trigger `lends_out`
--
DELIMITER $$
CREATE TRIGGER `before_delete_ausleihe` AFTER DELETE ON `lends_out` FOR EACH ROW BEGIN
    INSERT INTO ausleihe_archiv (mitarbeiter_id, hardware_id, ausgeliehen_am, zurückgegeben_am)
    VALUES (OLD.mitarbeiter_id, OLD.hardware_id, OLD.ausgeliehen_am, OLD.zurückgegeben_am);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `loan_archive`
--

CREATE TABLE `loan_archive` (
  `id` int(50) NOT NULL,
  `employee_id` int(50) NOT NULL,
  `hardware_id` int(50) NOT NULL,
  `lends_out_at` varchar(50) NOT NULL,
  `returned_at` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `location`
--

CREATE TABLE `location` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `locker`
--

CREATE TABLE `locker` (
  `id` int(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `locker`
--

INSERT INTO `locker` (`id`, `label`, `location`) VALUES
(2, 'Schrank B1', 'Berlin'),
(3, 'Schrank C1', 'Hamburg'),
(4, 'Schrank A2', 'Hannover'),
(5, 'Schrank B2', 'Berlin'),
(6, 'Schrank C2', 'Hamburg'),
(7, 'Schrank A3', 'Hannover'),
(8, 'Schrank B3', 'Berlin'),
(9, 'Schrank C3', 'Hamburg'),
(11, 'Schrank P2', 'Hannover');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `operating_system`
--

CREATE TABLE `operating_system` (
  `id` int(50) NOT NULL,
  `name` int(100) NOT NULL
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
(1, 'test.test@test.com', ''),
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
(22, 'test11@test.com', '314398');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `accessory`
--
ALTER TABLE `accessory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hardware_id` (`hardware_id`);

--
-- Indizes für die Tabelle `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `hardware`
--
ALTER TABLE `hardware`
  ADD PRIMARY KEY (`id`),
  ADD KEY `standort_id` (`locker_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indizes für die Tabelle `hardware_data`
--
ALTER TABLE `hardware_data`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `hardware_status`
--
ALTER TABLE `hardware_status`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hardware_id` (`hardware_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indizes für die Tabelle `histroy_aktion`
--
ALTER TABLE `histroy_aktion`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `lends_out`
--
ALTER TABLE `lends_out`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hardware_id` (`hardware_id`) USING BTREE,
  ADD KEY `mitarbeiter_id` (`employee_id`);

--
-- Indizes für die Tabelle `loan_archive`
--
ALTER TABLE `loan_archive`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mitarbeiter_id` (`employee_id`,`hardware_id`),
  ADD KEY `hardware_id` (`hardware_id`);

--
-- Indizes für die Tabelle `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `locker`
--
ALTER TABLE `locker`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `operating_system`
--
ALTER TABLE `operating_system`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `accessory`
--
ALTER TABLE `accessory`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT für Tabelle `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT für Tabelle `hardware`
--
ALTER TABLE `hardware`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT für Tabelle `hardware_data`
--
ALTER TABLE `hardware_data`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `hardware_status`
--
ALTER TABLE `hardware_status`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `history`
--
ALTER TABLE `history`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT für Tabelle `histroy_aktion`
--
ALTER TABLE `histroy_aktion`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `lends_out`
--
ALTER TABLE `lends_out`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `loan_archive`
--
ALTER TABLE `loan_archive`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `location`
--
ALTER TABLE `location`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `locker`
--
ALTER TABLE `locker`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT für Tabelle `operating_system`
--
ALTER TABLE `operating_system`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `accessory`
--
ALTER TABLE `accessory`
  ADD CONSTRAINT `accessory_ibfk_1` FOREIGN KEY (`hardware_id`) REFERENCES `hardware` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints der Tabelle `hardware`
--
ALTER TABLE `hardware`
  ADD CONSTRAINT `hardware_ibfk_1` FOREIGN KEY (`locker_id`) REFERENCES `locker` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hardware_ibfk_2` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints der Tabelle `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `history_ibfk_3` FOREIGN KEY (`hardware_id`) REFERENCES `hardware` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints der Tabelle `loan_archive`
--
ALTER TABLE `loan_archive`
  ADD CONSTRAINT `loan_archive_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `loan_archive_ibfk_2` FOREIGN KEY (`hardware_id`) REFERENCES `hardware` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
