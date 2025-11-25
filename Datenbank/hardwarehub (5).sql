-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 14. Mrz 2025 um 16:17
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
(36, 'Maus', 47),
(37, 'Maus', 51),
(38, 'Maus', 52),
(39, 'Maus', 53),
(40, 'Maus', NULL),
(41, 'Keyboard', NULL),
(42, 'Maus', NULL),
(43, 'Keyboard', NULL);

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
-- Tabellenstruktur für Tabelle `hardware_data`
--

CREATE TABLE `hardware_data` (
  `id` int(50) NOT NULL,
  `name` varchar(250) NOT NULL,
  `operating_system_id` int(100) DEFAULT NULL,
  `manufacturer_id` int(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `hardware_data`
--

INSERT INTO `hardware_data` (`id`, `name`, `operating_system_id`, `manufacturer_id`, `created_at`) VALUES
(1, 'S22 Ultra', 1, 2, '2025-03-14 11:43:36'),
(2, 'S24 Ultra', 1, 2, '2025-03-14 15:07:19'),
(3, 'IPhone S14 Pro Max', 2, 1, '2025-03-14 15:08:18'),
(4, 'IPhone S16 Pro Max', 2, 1, '2025-03-14 15:08:56'),
(5, 'Laptop 1', 3, 3, '2025-03-14 15:10:00'),
(6, 'Laptop 2', 3, 3, '2025-03-14 15:10:00');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hardware_inventory`
--

CREATE TABLE `hardware_inventory` (
  `id` int(50) NOT NULL,
  `hardware_data_id` int(50) NOT NULL,
  `serial_number` varchar(50) NOT NULL,
  `status_id` int(50) NOT NULL,
  `delivery_date` date NOT NULL,
  `imei` varchar(100) NOT NULL,
  `locker_id` int(50) DEFAULT NULL,
  `delivery_note_date` date NOT NULL,
  `budget_aligned` double NOT NULL,
  `employee_id` int(50) DEFAULT NULL,
  `lends_out_at` date DEFAULT NULL,
  `returned_at` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `hardware_inventory`
--

INSERT INTO `hardware_inventory` (`id`, `hardware_data_id`, `serial_number`, `status_id`, `delivery_date`, `imei`, `locker_id`, `delivery_note_date`, `budget_aligned`, `employee_id`, `lends_out_at`, `returned_at`, `created_at`) VALUES
(1, 1, 'SN12345', 1, '2023-01-15', 'IMEI12345', 2, '2023-01-16', 1200.5, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(4, 1, 'SN44556', 1, '2023-04-05', 'IMEI44556', 4, '2023-04-06', 1500, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(5, 1, 'SN77889', 1, '2023-05-12', 'IMEI77889', 5, '2023-05-13', 1100, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(6, 1, 'SN99001', 1, '2023-06-15', 'IMEI99001', 6, '2023-06-16', 900, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(7, 1, 'SN22334', 1, '2023-07-08', 'IMEI22334', 7, '2023-07-09', 1000.5, NULL, NULL, NULL, '2025-03-08 14:47:04'),
(14, 1, 'SN88990', 1, '2023-09-13', 'IMEI88990', 2, '2023-09-14', 1300.75, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(15, 1, 'SN88991', 1, '2023-09-14', 'IMEI88991', 3, '2023-09-15', 850.5, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(16, 1, 'SN88992', 1, '2023-09-15', 'IMEI88992', 4, '2023-09-16', 950, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(17, 1, 'SN88993', 1, '2023-09-16', 'IMEI88993', 5, '2023-09-17', 1400.25, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(18, 1, 'SN88994', 1, '2023-09-17', 'IMEI88994', 6, '2023-09-18', 725.75, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(19, 1, 'SN88995', 1, '2023-09-18', 'IMEI88995', 7, '2023-09-19', 1100.99, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(20, 1, 'SN88996', 1, '2023-09-19', 'IMEI88996', 8, '2023-09-20', 1450.1, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(21, 1, 'SN88997', 1, '2023-09-20', 'IMEI88997', 9, '2023-09-21', 699.6, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(22, 1, 'SN89039', 1, '2023-10-10', 'IMEI89039', 2, '2023-10-11', 1325.9, NULL, NULL, NULL, '2025-03-11 08:17:46'),
(23, 1, 'SN88990', 1, '2025-03-02', 'IMEI88990', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 08:21:15'),
(24, 1, 'SN88990', 1, '2025-03-02', 'IMEI88990', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 09:18:53'),
(25, 1, 'SN88990', 1, '2025-03-02', 'IMEI88990', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 10:44:38'),
(26, 1, 'SN88990', 1, '2025-03-02', 'IMEI88990', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 10:47:16'),
(27, 1, 'SN88990', 1, '2025-03-02', 'IMEI88990', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 10:48:47'),
(28, 1, 'SN88990', 1, '2025-03-02', 'IMEI88990', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 10:56:15'),
(29, 1, 'SN88990', 1, '2025-03-02', 'IMEI88990', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 10:57:27'),
(30, 1, 'SN88990', 1, '2025-03-02', 'IMEI88990', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-11 14:10:37'),
(31, 1, 'SN88990', 1, '2025-03-02', 'IMEI88990', 9, '2025-03-01', 1300.75, NULL, NULL, NULL, '2025-03-13 14:00:36'),
(34, 1, '1231231', 1, '2025-03-13', '123123', NULL, '2025-03-13', 1200, 1, '2025-03-13', NULL, '2025-03-13 14:12:04'),
(35, 1, '1231231', 1, '2025-03-13', '123123', 4, '2025-03-13', 1500, 2, '2025-03-13', NULL, '2025-03-13 14:17:42'),
(38, 1, '551311', 2, '2025-03-13', '123123', 7, '2025-03-13', 1600, 31, '2025-03-13', NULL, '2025-03-13 14:37:46'),
(42, 1, 'SN88990', 1, '2025-03-13', 'IMEI88990', 9, '0000-00-00', 1300.75, NULL, NULL, NULL, '2025-03-13 14:44:56'),
(43, 1, '1231231', 1, '2025-03-13', '123123', 7, '2025-03-13', 1200, NULL, '2025-03-13', NULL, '2025-03-13 14:48:18'),
(44, 1, '1231', 1, '2025-03-13', '123123', 4, '2025-03-13', 1200, NULL, '2025-03-13', NULL, '2025-03-13 14:49:28'),
(45, 1, '1231231', 1, '2025-03-13', '123123', 4, '2025-03-13', 1000, NULL, '2025-03-13', NULL, '2025-03-13 14:53:36'),
(46, 1, '12310', 1, '2025-03-13', '1231230', 4, '2025-03-13', 1200, NULL, '2025-03-13', NULL, '2025-03-13 14:58:24'),
(47, 1, '1231231', 2, '2025-03-14', '123123', 4, '2025-03-14', 1500, 36, '2025-03-13', NULL, '2025-03-14 07:34:58'),
(48, 1, 'SN12345', 1, '0000-00-00', 'IMEI12345', 2, '0000-00-00', 1200.5, NULL, NULL, NULL, '2025-03-14 13:01:07'),
(49, 1, 'SN12345', 1, '0000-00-00', 'IMEI12345', 2, '0000-00-00', 1200.5, NULL, NULL, NULL, '2025-03-14 13:08:26'),
(50, 1, 'SN12345', 1, '0000-00-00', 'IMEI12345', 2, '0000-00-00', 1200.5, NULL, NULL, NULL, '2025-03-14 13:11:09'),
(51, 1, 'SN12345', 1, '0000-00-00', 'IMEI12345', 2, '0000-00-00', 1200.5, NULL, NULL, NULL, '2025-03-14 13:11:24'),
(52, 1, 'SN12345', 1, '0000-00-00', 'IMEI12345', 2, '0000-00-00', 1200.5, NULL, NULL, NULL, '2025-03-14 13:12:25'),
(53, 1, 'SN12345', 1, '0000-00-00', 'IMEI12345', 2, '0000-00-00', 1200.5, NULL, NULL, NULL, '2025-03-14 13:13:33'),
(56, 1, 'SN12345', 1, '0000-00-00', 'IMEI12345', 2, '0000-00-00', 1200.5, NULL, NULL, NULL, '2025-03-14 13:38:08'),
(57, 1, 'SN12345', 2, '2025-03-13', 'IMEI12345', NULL, '2025-03-13', 1200.5, 10, '2025-03-13', NULL, '2025-03-14 13:38:31');

--
-- Trigger `hardware_inventory`
--
DELIMITER $$
CREATE TRIGGER `after_hardware_status_update` BEFORE UPDATE ON `hardware_inventory` FOR EACH ROW BEGIN
  -- Prüfen, ob sich der Status von "ausgeliehen" zu "verfügbar" geändert hat
  IF OLD.status_id = 2 AND NEW.status_id = 1 THEN
    -- Falls employee_id nicht NULL ist, speichern wir die Daten ins Archiv
    IF OLD.employee_id IS NOT NULL THEN
      INSERT INTO loan_histroy (hardware_id, employee_id, lends_out_at, returned_at)
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
CREATE TRIGGER `before_hardware_status_update_locker` BEFORE UPDATE ON `hardware_inventory` FOR EACH ROW BEGIN
  -- Prüfen, ob sich der Status von "verfügbar" zu "ausgeliehen" geändert hat
  IF OLD.status_id = 1 AND NEW.status_id = 2 THEN
    -- Setze locker_id auf NULL
    SET NEW.locker_id = NULL;
  END IF;
END
$$
DELIMITER ;

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
  `aktion_id` int(50) NOT NULL,
  `description` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `history`
--

INSERT INTO `history` (`id`, `user_id`, `hardware_id`, `aktion_id`, `description`, `date`) VALUES
(4, 1, NULL, 3, 'Hardware gelöscht: Tablet Y', '2025-03-10 13:50:18'),
(6, 2, NULL, 2, 'Name: Smartphone X → Smartphone Z\nSerial: SN67890 → SN56890\nStatus: verfügbar → ausgeliehen\nOS: Android 12 → Android 13\nDelivery: Thu Feb 16 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nIMEI: IMEI67890 → IMEI67891\nManufacturer: MobileTech → MobileTech 2\nLocker ID: 2 → 2\nDelivery Note: Thu Feb 16 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nBudget: 800 → 850\nEmployee: 3 → 4\nlends out at: Sat Mar 08 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-07T23:00:00.000Z', '2025-03-10 14:20:44'),
(7, 2, NULL, 2, 'Delivery: Wed Feb 15 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nLocker ID: null → 2\nDelivery Note: Tue Feb 14 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nlends out at: Fri Mar 07 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-07T23:00:00.000Z', '2025-03-10 14:36:36'),
(8, 2, NULL, 2, 'Delivery: Wed Feb 15 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nLocker ID: 2 → 2\nDelivery Note: Wed Feb 15 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nlends out at: Fri Mar 07 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-07T23:00:00.000Z', '2025-03-10 14:37:38'),
(9, 2, NULL, 2, 'Delivery: Wed Feb 15 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nLocker ID: 2 → 2\nDelivery Note: Wed Feb 15 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2023-02-15T23:00:00.000Z\nlends out at: Fri Mar 07 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-07T23:00:00.000Z', '2025-03-10 14:38:55'),
(10, 3, NULL, 2, 'Delivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:01:36'),
(11, 3, NULL, 2, 'Name: Ultrabook B → Ultrabook Z\nDelivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:04:46'),
(12, 3, NULL, 2, 'Name: Ultrabook Z → Ultrabook B\nDelivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:05:06'),
(13, 3, NULL, 2, 'Name: Ultrabook B → Ultrabook A\nDelivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:05:18'),
(14, 3, NULL, 2, 'Name: Ultrabook A → Ultrabook B\nDelivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:05:27'),
(16, 3, NULL, 3, 'Hardware gelöscht: PC Gaming', '2025-03-11 08:13:32'),
(17, 5, 23, 1, 'Neue Hardware hinzugefügt: Ultrabook Z', '2025-03-11 08:21:15'),
(18, 5, 23, 2, 'Delivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:23:04'),
(19, 5, 23, 2, 'Delivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-13T22:00:00.000Z\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2023-09-14T22:00:00.000Z', '2025-03-11 08:23:44'),
(20, 5, 24, 1, 'Neue Hardware hinzugefügt: Ultrabook G', '2025-03-11 09:18:53'),
(21, 5, 23, 2, 'Name: Ultrabook Z → Ultrabook F\nDelivery: Wed Sep 13 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2025-03-02\nDelivery Note: Thu Sep 14 2023 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit) → 2025-03-01', '2025-03-11 09:44:03'),
(22, 5, 25, 1, 'Neue Hardware hinzugefügt: Ultrabook F', '2025-03-11 10:44:38'),
(23, 5, 26, 1, 'Neue Hardware hinzugefügt: Ultrabook H', '2025-03-11 10:47:16'),
(24, 5, 27, 1, 'Neue Hardware hinzugefügt: Ultrabook H', '2025-03-11 10:48:47'),
(25, 5, 28, 1, 'Neue Hardware hinzugefügt: Ultrabook I', '2025-03-11 10:56:15'),
(26, 5, 29, 1, 'Neue Hardware hinzugefügt: Ultrabook Y', '2025-03-11 10:57:27'),
(27, 5, 29, 1, 'Neue Zubehör hinzugefügt: test', '2025-03-11 10:57:27'),
(28, 5, 30, 1, 'Neue Hardware hinzugefügt: Ultrabook L', '2025-03-11 14:10:37'),
(29, 5, 30, 1, 'Neue Zubehör hinzugefügt: Maus', '2025-03-11 14:10:37'),
(30, 5, 30, 1, 'Neue Zubehör hinzugefügt: Keyboard', '2025-03-11 14:10:37'),
(31, 5, 31, 1, 'Neue Hardware hinzugefügt: Ultrabook L', '2025-03-13 14:00:36'),
(32, 5, 31, 1, 'Neue Zubehör hinzugefügt: Maus', '2025-03-13 14:00:36'),
(33, 5, 31, 1, 'Neue Zubehör hinzugefügt: Keyboard', '2025-03-13 14:00:36'),
(34, 5, NULL, 1, 'Neue Hardware hinzugefügt: w', '2025-03-13 14:06:50'),
(35, 5, NULL, 1, 'Neue Zubehör hinzugefügt: Kabel', '2025-03-13 14:06:50'),
(36, 5, 34, 1, 'Neue Hardware hinzugefügt: S24 Ultra', '2025-03-13 14:12:04'),
(37, 5, 34, 1, 'Neue Zubehör hinzugefügt: Maus', '2025-03-13 14:12:04'),
(38, 5, 34, 1, 'Neue Zubehör hinzugefügt: Keyboard', '2025-03-13 14:12:04'),
(39, 5, 35, 1, 'Neue Hardware hinzugefügt: S25 Ultra', '2025-03-13 14:17:42'),
(40, 5, 38, 1, 'Neue Hardware hinzugefügt: IPhone S16 Pro Max', '2025-03-13 14:37:46'),
(41, 5, 42, 1, 'Neue Hardware hinzugefügt: Ultrabook L', '2025-03-13 14:44:56'),
(42, 5, 42, 1, 'Neue Zubehör hinzugefügt: Maus', '2025-03-13 14:44:56'),
(43, 5, 42, 1, 'Neue Zubehör hinzugefügt: Keyboard', '2025-03-13 14:44:56'),
(44, 5, 43, 1, 'Neue Hardware hinzugefügt: S24 Ultra', '2025-03-13 14:48:18'),
(45, 5, 44, 1, 'Neue Hardware hinzugefügt: IPhone S15 Pro Max', '2025-03-13 14:49:28'),
(46, 5, 45, 1, 'Neue Hardware hinzugefügt: IPhone S14 Pro Max', '2025-03-13 14:53:36'),
(47, 5, 46, 1, 'Neue Hardware hinzugefügt: S24 Ultra', '2025-03-13 14:58:24'),
(48, 5, 47, 1, 'Neue Hardware hinzugefügt: S24 Ultra', '2025-03-14 07:34:58'),
(49, 5, 47, 1, 'Neue Zubehör hinzugefügt: Maus', '2025-03-14 07:34:58'),
(50, 5, 51, 1, 'Neue Hardware hinzugefügt: 1', '2025-03-14 13:11:24'),
(54, 5, NULL, 1, 'Neue Hardware hinzugefügt: 1', '2025-03-14 13:16:35'),
(55, 5, NULL, 1, 'Neue Zubehör hinzugefügt: Maus', '2025-03-14 13:16:35'),
(56, 5, NULL, 1, 'Neue Zubehör hinzugefügt: Keyboard', '2025-03-14 13:16:35'),
(57, 5, NULL, 3, 'Hardware gelöscht: 54', '2025-03-14 13:21:58'),
(58, 5, NULL, 1, 'Neue Hardware hinzugefügt: 1', '2025-03-14 13:24:35'),
(59, 5, NULL, 1, 'Neue Zubehör hinzugefügt: Maus', '2025-03-14 13:24:35'),
(60, 5, NULL, 1, 'Neue Zubehör hinzugefügt: Keyboard', '2025-03-14 13:24:35'),
(61, 5, NULL, 3, 'Hardware gelöscht: S22 Ultra', '2025-03-14 13:26:06'),
(62, 5, 56, 1, 'Neue Hardware hinzugefügt: 1', '2025-03-14 13:38:08'),
(63, 5, 57, 1, 'Neue Hardware hinzugefügt: 1', '2025-03-14 13:38:31'),
(64, 5, 57, 2, 'Hardware-Daten-ID: 1 → undefined\nSeriennummer: SN12345 → undefined\nStatus: 1 → 2\nIMEI: IMEI12345 → undefined\nSchrank-ID: 2 → undefined\nBudget: 1200.5 → undefined\nMitarbeiter: null → 10\nAusgabe-Datum: null → 2025-03-10', '2025-03-14 13:46:19'),
(65, 5, 57, 2, 'Hardware-Daten-ID: 1 → undefined\nSeriennummer: SN12345 → undefined\nStatus: 2 → 1\nIMEI: IMEI12345 → undefined\nSchrank-ID: null → undefined\nBudget: 1200.5 → undefined\nMitarbeiter: 10 → undefined\nRückgabedatum: null → 2025-03-10', '2025-03-14 13:48:55'),
(66, 5, 57, 2, 'Mitarbeiter: null → 10\nAusgabe-Datum: null → 2025-03-12', '2025-03-14 13:56:54'),
(67, 5, 57, 2, 'Status: 1 → 2\nAusgabe-Datum: Wed Mar 12 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-12', '2025-03-14 13:57:17'),
(68, 5, 57, 2, 'Ausgabe-Datum: Wed Mar 12 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-12', '2025-03-14 13:57:45'),
(69, 5, 57, 2, 'Ausgabe-Datum: Wed Mar 12 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-12', '2025-03-14 14:00:57'),
(70, 5, 57, 2, 'Ausgabe-Datum: Wed Mar 12 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-12', '2025-03-14 14:03:43'),
(71, 5, 57, 2, 'Ausgabe-Datum: Wed Mar 12 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-12', '2025-03-14 14:05:01'),
(72, 5, 57, 2, 'Ausgabe-Datum: Wed Mar 12 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-13', '2025-03-14 14:05:30'),
(73, 5, 57, 2, 'Lieferdatum: Thu Nov 30 1899 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-13\nLieferschein-Datum: Thu Nov 30 1899 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit) → 2025-03-13', '2025-03-14 14:58:04');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `histroy_aktion`
--

CREATE TABLE `histroy_aktion` (
  `id` int(50) NOT NULL,
  `aktion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `histroy_aktion`
--

INSERT INTO `histroy_aktion` (`id`, `aktion`) VALUES
(1, 'hinzugefügt'),
(2, 'bearbeitet'),
(3, 'gelöscht');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `loan_histroy`
--

CREATE TABLE `loan_histroy` (
  `id` int(50) NOT NULL,
  `employee_id` int(50) NOT NULL,
  `hardware_id` int(50) NOT NULL,
  `lends_out_at` varchar(50) NOT NULL,
  `returned_at` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `loan_histroy`
--

INSERT INTO `loan_histroy` (`id`, `employee_id`, `hardware_id`, `lends_out_at`, `returned_at`) VALUES
(3, 1, 38, '2025-03-13', NULL),
(4, 1, 47, '2025-03-14', NULL),
(5, 10, 57, '2025-03-10', '2025-03-10');

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
-- Tabellenstruktur für Tabelle `manufacturer`
--

CREATE TABLE `manufacturer` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `manufacturer`
--

INSERT INTO `manufacturer` (`id`, `name`) VALUES
(1, 'Apple'),
(2, 'Samsung'),
(3, 'Asus');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `operating_system`
--

CREATE TABLE `operating_system` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `operating_system`
--

INSERT INTO `operating_system` (`id`, `name`) VALUES
(1, 'android'),
(2, 'ios'),
(3, 'windows');

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
-- Indizes für die Tabelle `hardware_data`
--
ALTER TABLE `hardware_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `operating_system_id` (`operating_system_id`),
  ADD KEY `manufacturer_id` (`manufacturer_id`);

--
-- Indizes für die Tabelle `hardware_inventory`
--
ALTER TABLE `hardware_inventory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `standort_id` (`locker_id`),
  ADD KEY `employee_id` (`employee_id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `hardware_data_id` (`hardware_data_id`);

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
  ADD KEY `user_id` (`user_id`),
  ADD KEY `aktion_id` (`aktion_id`);

--
-- Indizes für die Tabelle `histroy_aktion`
--
ALTER TABLE `histroy_aktion`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `loan_histroy`
--
ALTER TABLE `loan_histroy`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mitarbeiter_id` (`employee_id`,`hardware_id`),
  ADD KEY `hardware_id` (`hardware_id`);

--
-- Indizes für die Tabelle `locker`
--
ALTER TABLE `locker`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `manufacturer`
--
ALTER TABLE `manufacturer`
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
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT für Tabelle `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT für Tabelle `hardware_data`
--
ALTER TABLE `hardware_data`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `hardware_inventory`
--
ALTER TABLE `hardware_inventory`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT für Tabelle `hardware_status`
--
ALTER TABLE `hardware_status`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `history`
--
ALTER TABLE `history`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT für Tabelle `histroy_aktion`
--
ALTER TABLE `histroy_aktion`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `loan_histroy`
--
ALTER TABLE `loan_histroy`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT für Tabelle `locker`
--
ALTER TABLE `locker`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT für Tabelle `manufacturer`
--
ALTER TABLE `manufacturer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `operating_system`
--
ALTER TABLE `operating_system`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  ADD CONSTRAINT `accessory_ibfk_1` FOREIGN KEY (`hardware_id`) REFERENCES `hardware_inventory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints der Tabelle `hardware_data`
--
ALTER TABLE `hardware_data`
  ADD CONSTRAINT `hardware_data_ibfk_1` FOREIGN KEY (`operating_system_id`) REFERENCES `operating_system` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `hardware_data_ibfk_2` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturer` (`id`) ON UPDATE CASCADE;

--
-- Constraints der Tabelle `hardware_inventory`
--
ALTER TABLE `hardware_inventory`
  ADD CONSTRAINT `hardware_inventory_ibfk_1` FOREIGN KEY (`locker_id`) REFERENCES `locker` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hardware_inventory_ibfk_2` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `hardware_inventory_ibfk_3` FOREIGN KEY (`status_id`) REFERENCES `hardware_status` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `hardware_inventory_ibfk_4` FOREIGN KEY (`hardware_data_id`) REFERENCES `hardware_data` (`id`) ON UPDATE CASCADE;

--
-- Constraints der Tabelle `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `history_ibfk_3` FOREIGN KEY (`hardware_id`) REFERENCES `hardware_inventory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `history_ibfk_4` FOREIGN KEY (`aktion_id`) REFERENCES `histroy_aktion` (`id`) ON UPDATE CASCADE;

--
-- Constraints der Tabelle `loan_histroy`
--
ALTER TABLE `loan_histroy`
  ADD CONSTRAINT `loan_histroy_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `loan_histroy_ibfk_2` FOREIGN KEY (`hardware_id`) REFERENCES `hardware_inventory` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
