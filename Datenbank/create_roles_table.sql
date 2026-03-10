-- Erstelle die role Tabelle
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(100) NOT NULL UNIQUE,
  `created_at` timestamp DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Füge Default-Rollen ein
INSERT INTO `role` (`name`) VALUES 
  ('Admin'),
  ('Editor'),
  ('Viewer')
ON DUPLICATE KEY UPDATE `name` = `name`;

-- Füge role_id Foreign Key Constraint zur user Tabelle hinzu (falls nicht vorhanden)
ALTER TABLE `user` 
ADD CONSTRAINT `user_ibfk_1` 
FOREIGN KEY (`role_id`) 
REFERENCES `role` (`id`) 
ON DELETE NO ACTION;
