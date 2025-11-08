-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql:3306
-- Généré le : lun. 20 oct. 2025 à 13:42
-- Version du serveur : 8.4.6
-- Version de PHP : 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `alloboulot_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel-cache-0m62olqU3UW7W7oG', 'a:1:{s:11:\"valid_until\";i:1760658743;}', 1761866123),
('laravel-cache-21wLD46guFt7kHkq', 'a:1:{s:11:\"valid_until\";i:1760650693;}', 1761860353),
('laravel-cache-2CGYzmCGOLRSJKiH', 'a:1:{s:11:\"valid_until\";i:1760650720;}', 1761860380),
('laravel-cache-3oFEYWkqFiCjU8fM', 'a:1:{s:11:\"valid_until\";i:1760707595;}', 1761916475),
('laravel-cache-49xabnk2axfDx9Kd', 'a:1:{s:11:\"valid_until\";i:1760707942;}', 1761917302),
('laravel-cache-5iEdffS08dOZvH39', 'a:1:{s:11:\"valid_until\";i:1760441448;}', 1761651108),
('laravel-cache-6Y2wkZa2ycLWwBoa', 'a:1:{s:11:\"valid_until\";i:1760434187;}', 1761643487),
('laravel-cache-9jbHZVmAZCFxoYpc', 'a:1:{s:11:\"valid_until\";i:1760703416;}', 1761912716),
('laravel-cache-bc1COvJ9Ld6vEtOB', 'a:1:{s:11:\"valid_until\";i:1760706410;}', 1761915830),
('laravel-cache-cvi7zQP2P4l116Jw', 'a:1:{s:11:\"valid_until\";i:1760546255;}', 1761755915),
('laravel-cache-EyK0KEktggft0C0N', 'a:1:{s:11:\"valid_until\";i:1760967299;}', 1762174619),
('laravel-cache-FOH8F5zYcMNs5LD6', 'a:1:{s:11:\"valid_until\";i:1760706578;}', 1761916118),
('laravel-cache-FwU5LV2uiQFXDX4d', 'a:1:{s:11:\"valid_until\";i:1760555406;}', 1761761646),
('laravel-cache-hMScTGYfJ88gWST9', 'a:1:{s:11:\"valid_until\";i:1760434265;}', 1761643925),
('laravel-cache-j2fH9xm3O7cDmPuq', 'a:1:{s:11:\"valid_until\";i:1760706063;}', 1761914103),
('laravel-cache-lfdl3hvRUHkB4of8', 'a:1:{s:11:\"valid_until\";i:1760644418;}', 1761851258),
('laravel-cache-LpOLuMiuOAvF2MQz', 'a:1:{s:11:\"valid_until\";i:1760436459;}', 1761645939),
('laravel-cache-nwNtkZwIAYavG5i3', 'a:1:{s:11:\"valid_until\";i:1760703033;}', 1761912213),
('laravel-cache-qGFO26brn3638RFw', 'a:1:{s:11:\"valid_until\";i:1760650646;}', 1761858146),
('laravel-cache-QlMWbMe7XXqKyrAo', 'a:1:{s:11:\"valid_until\";i:1760704020;}', 1761913140),
('laravel-cache-Qou0xAEJ3LBn69Da', 'a:1:{s:11:\"valid_until\";i:1760644522;}', 1761854122),
('laravel-cache-RtUwWo5L0ORaMbvc', 'a:1:{s:11:\"valid_until\";i:1760656427;}', 1761864287),
('laravel-cache-sXboB6pHUFfTbHlO', 'a:1:{s:11:\"valid_until\";i:1760706779;}', 1761916259),
('laravel-cache-TQ11ep4dNDhbkURH', 'a:1:{s:11:\"valid_until\";i:1760546265;}', 1761755925),
('laravel-cache-UTxIcJ3InCgBWmmo', 'a:1:{s:11:\"valid_until\";i:1760661944;}', 1761868424),
('laravel-cache-VfU1OXp3BrtdYPdr', 'a:1:{s:11:\"valid_until\";i:1760704391;}', 1761914051),
('laravel-cache-wE5VayxyQCmqqe6q', 'a:1:{s:11:\"valid_until\";i:1760704318;}', 1761913858),
('laravel-cache-wiIcVYPQgGtQjrP2', 'a:1:{s:11:\"valid_until\";i:1760650755;}', 1761860415),
('laravel-cache-WvRZIWsAq4iPhxhs', 'a:1:{s:11:\"valid_until\";i:1760702333;}', 1761910613);

-- --------------------------------------------------------

--
-- Structure de la table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `icon`, `created_at`, `updated_at`) VALUES
(1, 'Technologie', 'cpu', '2025-10-20 12:51:39', '2025-10-20 12:51:39'),
(2, 'Finance', 'wallet', '2025-10-20 12:51:39', '2025-10-20 12:51:39'),
(3, 'Énergie', 'zap', '2025-10-20 12:51:39', '2025-10-20 12:51:39'),
(4, 'Santé', 'heart-pulse', '2025-10-20 12:51:39', '2025-10-20 12:51:39'),
(5, 'Design', 'palette', '2025-10-20 12:51:39', '2025-10-20 12:51:39'),
(6, 'Industrie', 'factory', '2025-10-20 12:51:39', '2025-10-20 12:51:39'),
(7, 'Transport', 'truck', '2025-10-20 12:51:39', '2025-10-20 12:51:39'),
(8, 'Communication', 'message-square', '2025-10-20 12:51:39', '2025-10-20 12:51:39'),
(9, 'Immobilier', 'building', '2025-10-20 12:51:39', '2025-10-20 12:51:39'),
(10, 'Tourisme', 'plane', '2025-10-20 12:51:39', '2025-10-20 12:51:39'),
(11, 'Éducation', 'book-open', '2025-10-20 12:51:52', '2025-10-20 12:51:52'),
(12, 'Environnement', 'leaf', '2025-10-20 12:51:52', '2025-10-20 12:51:52'),
(13, 'Sécurité', 'shield', '2025-10-20 12:51:52', '2025-10-20 12:51:52'),
(14, 'Divertissement', 'film', '2025-10-20 12:51:52', '2025-10-20 12:51:52'),
(15, 'Mode', 'shopping-bag', '2025-10-20 12:51:52', '2025-10-20 12:51:52'),
(16, 'Restauration', 'utensils', '2025-10-20 12:51:52', '2025-10-20 12:51:52'),
(17, 'Sport', 'dumbbell', '2025-10-20 12:51:52', '2025-10-20 12:51:52'),
(18, 'Artisanat', 'hammer', '2025-10-20 12:51:52', '2025-10-20 12:51:52'),
(19, 'Agriculture', 'sprout', '2025-10-20 12:51:52', '2025-10-20 12:51:52'),
(20, 'Science', 'beaker', '2025-10-20 12:51:52', '2025-10-20 12:51:52');

-- --------------------------------------------------------

--
-- Structure de la table `companies`
--

CREATE TABLE `companies` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `companies`
--

INSERT INTO `companies` (`id`, `name`, `logo`, `address`, `created_at`, `updated_at`, `description`) VALUES
(1, 'Aquila Tech', 'https://img.freepik.com/free-photo/low-angle-view-skyscrapers_1359-825.jpg?t=st=1760964251~exp=1760967851~hmac=5d86f59dfd63bfd4a70b69e99c1ab18b62eb7caad69ab1c2dcea7c2fb0ab11d1&w=2000', '12 rue des Archives, 75003 Paris', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Développement d’applications cloud et IA.'),
(2, 'Boreal Foods', 'https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149202347.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '45 avenue Victor Hugo, 69002 Lyon', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Production alimentaire durable et circuits courts.'),
(3, 'Coral Energy', 'https://img.freepik.com/free-psd/real-estate-logo-design_23-2151249793.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '3 quai de la Fosse, 33000 Bordeaux', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Fournisseur d’énergie renouvelable.'),
(4, 'Dune Design', 'https://img.freepik.com/free-vector/abstract-business-logotype_1035-8.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '120 boulevard Saint-Germain, 75005 Paris', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Agence de design produit et UX.'),
(5, 'Eclipse Finance', 'https://img.freepik.com/free-vector/abstract-blue-logo_1043-12.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '8 rue du Commerce, 44000 Nantes', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Conseil financier et gestion d’actifs.'),
(6, 'Flora Médical', 'https://img.freepik.com/free-vector/simple-illustration-logo-financial-company-vector-logo-design_460848-16805.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '27 rue de la Liberté, 31000 Toulouse', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Matériel médical et solutions cliniques.'),
(7, 'Granite Systems', 'https://img.freepik.com/free-vector/gradient-colored-data-logo-template_23-2149189481.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '99 cours Lafayette, 69003 Lyon', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Infrastructure informatique et cybersécurité.'),
(8, 'Helios Media', 'https://img.freepik.com/free-vector/simple-illustration-logo-financial-company-vector-logo-design_460848-16803.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '5 rue Oberkampf, 75011 Paris', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Agence de communication et marketing digital.'),
(9, 'Icarus Travel', 'https://img.freepik.com/free-photo/low-angle-view-skyscrapers_1359-825.jpg?t=st=1760964251~exp=1760967851~hmac=5d86f59dfd63bfd4a70b69e99c1ab18b62eb7caad69ab1c2dcea7c2fb0ab11d1&w=2000', '14 rue du Port, 13002 Marseille', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Agence de voyages spécialisée dans les circuits éco-responsables.'),
(10, 'Juno Consulting', 'https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149202347.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '6 avenue de Bretagne, 59000 Lille', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Conseil en stratégie et management.'),
(11, 'Krypton Labs', 'https://img.freepik.com/free-psd/real-estate-logo-design_23-2151249793.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '34 rue Saint-Charles, 75015 Paris', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Recherche et innovation en biotechnologie.'),
(12, 'Lumen Digital', 'https://img.freepik.com/free-vector/abstract-business-logotype_1035-8.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '17 rue de la République, 13001 Marseille', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Création de sites web et solutions numériques.'),
(13, 'Mistral Logistics', 'https://img.freepik.com/free-vector/abstract-blue-logo_1043-12.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '102 boulevard Carnot, 34000 Montpellier', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Transport et logistique internationale.'),
(14, 'Nexus Cloud', 'https://img.freepik.com/free-vector/simple-illustration-logo-financial-company-vector-logo-design_460848-16805.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '88 rue de Strasbourg, 67000 Strasbourg', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Solutions cloud et hébergement sécurisé.'),
(15, 'Orion Capital', 'https://img.freepik.com/free-vector/gradient-colored-data-logo-template_23-2149189481.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '3 rue Nationale, 59800 Lille', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Investissement et capital-risque.'),
(16, 'Polar Industries', 'https://img.freepik.com/free-vector/simple-illustration-logo-financial-company-vector-logo-design_460848-16803.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '59 rue d’Alsace, 54000 Nancy', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Fabrication de composants électroniques.'),
(17, 'Quantum Soft', 'https://img.freepik.com/free-photo/low-angle-view-skyscrapers_1359-825.jpg?t=st=1760964251~exp=1760967851~hmac=5d86f59dfd63bfd4a70b69e99c1ab18b62eb7caad69ab1c2dcea7c2fb0ab11d1&w=2000', '25 rue du Montparnasse, 75014 Paris', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Solutions logicielles d’automatisation.'),
(18, 'Riviera Hotels', 'https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149202347.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '9 promenade des Anglais, 06000 Nice', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Chaîne d’hôtels haut de gamme.'),
(19, 'SolarWave', 'https://img.freepik.com/free-psd/real-estate-logo-design_23-2151249793.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '21 avenue du Soleil, 84000 Avignon', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Production d’énergie solaire et installation.'),
(20, 'Titanium Works', 'https://img.freepik.com/free-vector/abstract-business-logotype_1035-8.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '4 rue des Forges, 25000 Besançon', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Usinage de précision et ingénierie mécanique.'),
(21, 'Umbra Studio', 'https://img.freepik.com/free-vector/abstract-blue-logo_1043-12.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '6 place de la Bourse, 31000 Toulouse', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Agence créative en design visuel.'),
(22, 'Vega Partners', 'https://img.freepik.com/free-vector/simple-illustration-logo-financial-company-vector-logo-design_460848-16805.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '18 rue de Metz, 57000 Metz', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Cabinet de conseil en fusion-acquisition.'),
(23, 'WaveCom', 'https://img.freepik.com/free-vector/gradient-colored-data-logo-template_23-2149189481.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '33 avenue Foch, 75008 Paris', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Opérateur télécom innovant.'),
(24, 'Xylon Motors', 'https://img.freepik.com/free-vector/simple-illustration-logo-financial-company-vector-logo-design_460848-16803.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', 'Rue de la Gare, 72000 Le Mans', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Fabricant de véhicules électriques.'),
(25, 'Yara Green', 'https://img.freepik.com/free-photo/low-angle-view-skyscrapers_1359-825.jpg?t=st=1760964251~exp=1760967851~hmac=5d86f59dfd63bfd4a70b69e99c1ab18b62eb7caad69ab1c2dcea7c2fb0ab11d1&w=2000', '7 chemin des Vignes, 33000 Bordeaux', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Entreprise d’agriculture urbaine.'),
(26, 'Zenith Security', 'https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149202347.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '25 rue Pasteur, 59800 Lille', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Solutions de sécurité et surveillance.'),
(27, 'Altis Groupe', 'https://img.freepik.com/free-psd/real-estate-logo-design_23-2151249793.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '11 boulevard des Alpes, 38000 Grenoble', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Promotion immobilière et gestion de patrimoine.'),
(28, 'Bluenova', 'https://img.freepik.com/free-vector/abstract-business-logotype_1035-8.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '5 rue du Rhône, 74000 Annecy', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Développement durable et innovation verte.'),
(29, 'Cobalt Ventures', 'https://img.freepik.com/free-vector/abstract-blue-logo_1043-12.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '10 rue Nationale, 59000 Lille', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Capital-investissement et accompagnement startup.'),
(30, 'Delta Robotics', 'https://img.freepik.com/free-vector/simple-illustration-logo-financial-company-vector-logo-design_460848-16805.jpg?uid=R116986398&ga=GA1.1.2123812046.1760964178&semt=ais_hybrid&w=740&q=80', '42 rue de l’Innovation, 35000 Rennes', '2025-10-20 12:48:59', '2025-10-20 12:48:59', 'Conception de robots industriels et automatisation.');

-- --------------------------------------------------------

--
-- Structure de la table `employees`
--

CREATE TABLE `employees` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `company_id` bigint UNSIGNED NOT NULL,
  `role` enum('creator','employee','rh') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'employee',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `employees`
--

INSERT INTO `employees` (`id`, `user_id`, `company_id`, `role`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'creator', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(2, 8, 2, 'creator', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(3, 3, 3, 'creator', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(4, 4, 4, 'creator', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(5, 5, 5, 'creator', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(6, 6, 6, 'creator', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(7, 7, 7, 'creator', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(8, 9, 8, 'creator', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(9, 11, 9, 'creator', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(10, 12, 10, 'creator', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(11, 13, 1, 'employee', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(12, 14, 1, 'employee', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(13, 15, 2, 'employee', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(14, 16, 3, 'employee', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(15, 17, 4, 'employee', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(16, 18, 5, 'employee', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(17, 19, 6, 'employee', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(18, 20, 7, 'employee', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(19, 21, 8, 'employee', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(20, 22, 9, 'employee', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(21, 2, 1, 'rh', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(22, 10, 2, 'rh', '2025-10-20 12:55:40', '2025-10-20 12:55:40'),
(23, 13, 3, 'rh', '2025-10-20 12:55:40', '2025-10-20 12:55:40');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `job_applications`
--

CREATE TABLE `job_applications` (
  `id` bigint UNSIGNED NOT NULL,
  `job_offer_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `resume_ref` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `motivation_ref` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` enum('pending','interview','test','accepted','rejected') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `job_applications`
--

INSERT INTO `job_applications` (`id`, `job_offer_id`, `user_id`, `message`, `resume_ref`, `motivation_ref`, `created_at`, `updated_at`, `status`) VALUES
(1, 1, 3, 'Je suis très intéressé par ce poste.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'pending'),
(2, 1, 4, 'Expérience pertinente pour ce rôle.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'accepted'),
(3, 1, 5, 'Motivé pour rejoindre votre équipe.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'rejected'),
(4, 1, 6, 'Disponible immédiatement.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'interview'),
(5, 1, 7, 'Passionné par le domaine.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'test'),
(6, 2, 8, 'Je souhaite contribuer à vos projets.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'pending'),
(7, 2, 9, 'Expérience en finance et analyse.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'accepted'),
(8, 2, 10, 'Compétences Excel avancées.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'rejected'),
(9, 2, 11, 'Disponible dès la fin de mon alternance.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'interview'),
(10, 2, 12, 'Profil orienté finance durable.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'test'),
(11, 3, 3, 'Motivé par les projets énergétiques.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'pending'),
(12, 3, 4, 'Expérience en gestion de projets solaires.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'accepted'),
(13, 3, 5, 'Passionné par l’énergie durable.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'rejected'),
(14, 3, 6, 'Compétences techniques solides.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'interview'),
(15, 3, 7, 'Disponible pour missions sur site.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'test'),
(16, 4, 8, 'Motivé pour un poste dans le médical.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'pending'),
(17, 4, 9, 'Expérience dans le suivi clinique.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'accepted'),
(18, 4, 10, 'Connaissance des dispositifs médicaux.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'rejected'),
(19, 4, 11, 'Disponible pour alternance.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:31:49', 'interview'),
(20, 4, 12, 'Motivé par le domaine médical.', 'https://pub-b9afbd5eb99746fb84c683687a3db57b.r2.dev/uploads/i0lsoCx5LViMUxjiJdQHBv8alJuuOU2b8xAYN69f.pdf', NULL, '2025-10-20 13:31:49', '2025-10-20 13:39:15', 'test');

-- --------------------------------------------------------

--
-- Structure de la table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `job_offers`
--

CREATE TABLE `job_offers` (
  `id` bigint UNSIGNED NOT NULL,
  `company_id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED DEFAULT NULL,
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contract_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `study_level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `end_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `job_offers`
--

INSERT INTO `job_offers` (`id`, `company_id`, `employee_id`, `category_id`, `description`, `contract_type`, `study_level`, `end_at`, `created_at`, `updated_at`, `title`) VALUES
(1, 1, 1, 1, 'Développement d’applications web et API en environnement Laravel.', 'cdi', 'Bac+5', '2026-03-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Développeur Backend Laravel'),
(2, 1, 13, 2, 'Gestion des portefeuilles clients et analyse financière.', 'cdd', 'Bac+3', '2026-02-15 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Analyste Financier Junior'),
(3, 2, 8, 3, 'Mise en œuvre de projets solaires et suivi énergétique.', 'cdi', 'Bac+5', '2026-06-30 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Chef de Projet Énergie Solaire'),
(4, 3, 3, 4, 'Suivi clinique et support technique sur dispositifs médicaux.', 'alternance', 'Bac+3', '2026-05-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Assistant Ingénieur Biomédical'),
(5, 4, 4, 5, 'Création d’interfaces utilisateurs modernes en Figma et React.', 'freelance', 'Bac+2', '2026-04-10 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'UI/UX Designer Freelance'),
(6, 5, 5, 6, 'Supervision des chaînes de production et qualité industrielle.', 'cdi', 'Bac+5', '2026-03-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Ingénieur Production'),
(7, 6, 6, 7, 'Optimisation du réseau logistique et transport international.', 'cdi', 'Bac+3', '2026-03-15 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Coordinateur Logistique'),
(8, 7, 7, 8, 'Gestion de campagnes marketing digital et réseaux sociaux.', 'alternance', 'Bac+3', '2026-05-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Chargé Marketing Digital'),
(9, 8, 9, 9, 'Prospection et gestion de biens immobiliers sur le secteur Sud-Ouest.', 'cdd', 'Bac+2', '2026-02-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Agent Immobilier Junior'),
(10, 9, 11, 10, 'Accueil client et gestion des réservations touristiques.', 'alternance', 'Bac+2', '2026-06-15 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Assistant Agence de Voyage'),
(11, 10, 12, 11, 'Support aux enseignants et gestion de plateforme LMS.', 'cdd', 'Bac+3', '2026-03-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Assistant Pédagogique'),
(12, 1, 2, 12, 'Mise en place d’initiatives RSE et durabilité.', 'cdi', 'Bac+5', '2026-07-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Responsable Développement Durable'),
(13, 2, 14, 13, 'Sécurisation des systèmes et audits réseau.', 'freelance', 'Bac+5', '2026-04-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Consultant Cybersécurité'),
(14, 3, 15, 14, 'Création de vidéos promotionnelles et spots publicitaires.', 'cdd', 'Bac+2', '2026-05-15 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Monteur Vidéo'),
(15, 4, 16, 15, 'Gestion du merchandising et coordination des vitrines mode.', 'alternance', 'Bac+3', '2026-03-20 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Assistant Styliste'),
(16, 5, 17, 16, 'Encadrement d’une équipe de cuisine en restauration rapide.', 'cdi', 'Bac+2', '2026-08-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Manager Restauration'),
(17, 6, 18, 17, 'Suivi de programmes sportifs et préparation physique.', 'cdd', 'Bac+3', '2026-06-30 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Coach Sportif'),
(18, 7, 19, 18, 'Fabrication d’éléments artisanaux pour l’export.', 'freelance', 'Bac+2', '2026-05-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Artisan Créateur'),
(19, 8, 20, 19, 'Gestion de cultures biologiques et suivi de récoltes.', 'cdi', 'Bac+5', '2026-09-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Responsable Exploitation Agricole'),
(20, 9, 21, 20, 'Recherche appliquée en chimie des matériaux.', 'cdi', 'Doctorat', '2026-10-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Chercheur Matériaux Avancés'),
(21, 10, 22, 1, 'Développement d’un CRM interne pour la gestion client.', 'alternance', 'Bac+3', '2026-05-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Développeur Web Full Stack'),
(22, 1, 3, 2, 'Suivi des flux financiers et reporting hebdomadaire.', 'cdd', 'Bac+3', '2026-02-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Comptable Junior'),
(23, 2, 4, 3, 'Analyse de données de production énergétique.', 'cdi', 'Bac+5', '2026-04-15 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Data Analyst Énergie'),
(24, 3, 5, 4, 'Suivi qualité des produits et procédures médicales.', 'cdd', 'Bac+3', '2026-03-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Technicien Qualité'),
(25, 4, 6, 5, 'Conception graphique pour supports publicitaires.', 'freelance', 'Bac+2', '2026-04-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Graphiste Print & Web'),
(26, 5, 7, 6, 'Pilotage de lignes industrielles et maintenance.', 'cdi', 'Bac+2', '2026-07-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Technicien Maintenance'),
(27, 6, 8, 7, 'Organisation des livraisons et optimisation des tournées.', 'alternance', 'Bac+3', '2026-05-15 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Assistant Logistique'),
(28, 7, 9, 8, 'Création de contenu marketing et visuels réseaux.', 'freelance', 'Bac+3', '2026-04-10 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Content Manager'),
(29, 8, 10, 9, 'Prospection immobilière et gestion client.', 'cdi', 'Bac+2', '2026-06-01 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Conseiller Immobilier'),
(30, 9, 11, 10, 'Planification d’événements touristiques internationaux.', 'cdd', 'Bac+5', '2026-08-15 00:00:00', '2025-10-20 13:19:17', '2025-10-20 13:19:17', 'Chef de Projet Tourisme');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000001_create_cache_table', 1),
(2, '0001_01_01_000002_create_jobs_table', 1),
(3, '2025_10_06_133134_create_sessions_table', 1),
(4, '2025_10_06_140015_create_users_table', 1),
(5, '2025_10_06_181951_create_employees_table', 1),
(6, '2025_10_06_182101_create_companies_table', 1),
(7, '2025_10_06_182412_create_categories_table', 1),
(8, '2025_10_06_182451_create_job_offers_table', 1),
(9, '2025_10_06_182511_create_job_applications_table', 1),
(10, '2025_10_07_085604_create_personal_access_tokens_table', 1),
(11, '2025_10_07_110151_update_users_table_for_sanctum', 1),
(12, '2025_10_08_071535_rename_mail_to_email_in_users_table', 1),
(13, '2025_10_08_134311_add_title_to_job_offers_table', 1),
(14, '2025_10_09_000639_remove_employee_id_from_companies_table', 1),
(15, '2025_10_09_000927_update_employees_table_for_company_pivot', 1),
(16, '2025_10_09_002247_add_rh_role_to_employees_table', 1),
(17, '2025_10_09_013922_add_description_field', 1),
(18, '2025_10_09_134014_update_job_offers_table', 1),
(19, '2025_10_09_134058_update_job_applications_table', 1),
(20, '2025_10_09_214013_update_job_applications_status_enum_simple', 1),
(21, '2025_10_09_225339_update_categories_add_icon_and_relation_to_job_offers', 1),
(22, '2025_10_10_071049_update_jobapplication_status_add_refused', 1),
(23, '2025_10_10_080421_update_type_of_resumeref_and_motivationref_to_text', 1);

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('00IvenSYWeXWljz2YtY6fHFO0mVUG8MBqu8GfrEI', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib1h2T2RuRjEwTnVtMEFCZmp2czNVVjhjajdOZXVxV3VRN0VZY3lSSCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzL215Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760963676),
('01fZKXC2egb3oMRQULlIsLR2gfvUZmRa0PIcsykt', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTHA0cUxGZmpkdENyMU9IY3NwVmhFNjdzbTViQnNRME9xYkpEMEpGdiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760964555),
('06GU3lsOKyRmUnTlEvHXjTuaFQCO8UM6q6awQhCK', NULL, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNUlGZ0ZNTURDbnF0MXJmQTBQOUZHT1pnelRURjNtekRJNkduNXl1VSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961203),
('2bymjDvyQfDscVb3KB700SjN3pnCZEEymdHDlvTb', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTFBhWVFFbUJjUlI1SWo2RG5qVm0wSG9QQ212MFl3Y0N4TWk5NGpxMiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9teSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760964957),
('2Gj1ri3YX4pv561yWBzwc4izuRvQJcrxe3j1i0v5', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMDJ6ZDhnSzFPOWo5d2pnbktaTDhta1dnYWdWajV6NVhHWDlnVGQ3bCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964717),
('2JsUgeqIPXziz02eTJQnch34f32GIVCDGZnV5WHK', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiOEk4WThObUJoTTk4WnF5alRveWJpeWNYTEFaZ21mTjAwTkdjNkk3byI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964955),
('2OhHjkTLt707lnjyNc0Nu4kMdHsn9Br7jnH0Gmth', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidk4wZmx4a2M3NndXUGxqdDIzVVpYSldoTVd5bjU1SDhkUmhkbk56MyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961541),
('2vaxzW19WuNhcPGxh3Ex1z3qevUn8JfrSByDyMUB', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU0NRc1c1dG9pd080SFRyT1pPcEhOdGdmaVBoOW9mWndaM3JZTnQxViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760963698),
('3C0ftdCo613srv7nShW86iYoCJvxnBvy7XpVV4a6', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVlA0ak1QM2p1c1pQeTJCYXRGNGdHZmE2dGlIVE54UFRNTHNCaWloZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964581),
('3edqYRroTO5RWGLpSAAjU7oNOuXgBSU7wwJ1KqeY', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOGZpMVM0TUNNUHp4VDJ6dldhTEhhQWdHYUdka1BsMDdBZFJuUzhFYSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzEwL2pvYi1vZmZlcnMvMTEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760966622),
('3OO2A83c151odO3jxs9iKAqcZmKuxUBNPK3MrPrG', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiV0VVZUpZZ1lQV3dDTFQ5MVdZRVFrZm1TNVNiaVhwdVY1OGhQVVpKeSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961208),
('3Qscf3rhMh6vvHqS9QC4k3mFHfdtZzFcbNsUZE99', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN2ljaHh3UWtzNHc1TE5vb0hLTFFqWFpta1VQMExXRXJGYlM3VlI0TyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961597),
('4wFcxQH9FDOjRkAWgf9ln0NM2cTgcqYt42WblFQq', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZDV0RVlOMEx5MWo5blVDcDJyYTZMam5zU1BiWHJYUWFJRXo1aG9iNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760965417),
('56pMLWi2MxomopWRMTkCHzBRRmVGbkcNxoIeEMpI', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS3hGQ0k4Sk5acmU1eFRNTDRHOFRRczBYQ2dHalZBSUpkQUpvUkk5MyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760964579),
('5OVTAOZI6zExlP1z4TSwaWII4iVvFyWTDgtwmkTG', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoieVd0YlhIbEtqUDVZYU9xV0JyUk9DZUtRNEVaU3JzeFRWbUcyY0hqcyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961603),
('617nEQG9fnhdyWntSG18jNaxD3KbzhET6AQQlBO0', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoicERqWWlUaHFiWWxLNGpJZ2p0d09OVzFpMHVTeURwVUpqRGlwemRmVCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961578),
('66S8EGsJlQeWqfU4hJB1PshbTQq2bWXBbWu1dy4p', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZG9tdHg3M3lFRFpPdEJuTkJxRVhQYWpNMXN0azRQbkE0VFIyUU9HTCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961583),
('69mw1ATO8FQeHzAxvxOEXG0nFoTC7qFFIPUJziiH', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSHZ0SkFGWTVHUm5GNmZKQlgyQXM0UzhYY0E3RTBpb2xzS29qYnpNZiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961584),
('6wgWzjF5fgfoh2W5CqyFJYWZs2lozZu1Hy4kfeMO', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRDNNWG1GUnJwdW1XejNVbDlKWEhUZ1NkWXJVR3c3dzN1YWN6QUxybCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964955),
('75nFtZAJAOEXug59zwnaZLjxPR4MPuHMNaOjAydL', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRHVDUWtzcWJHdTN1QktPbGVTNXFlMUxsenFDYjJ6b3BuaWszVFVjMCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967547),
('87aG5UPfEJTKxg7qSJCZMo24cgK8og7w8qSjRJJI', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVjg2c29LMExuUlQ4RFU4bXhrbENiNUt5bDVRSFhNZDRFdEFGdVVWcyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967121),
('8cbWLvInB0jiSf8T0xoYJtVANrGH7mGr1HTSMFt2', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ0pHSnRQcVFmZzdyendoeFNGVEJiSGJaY0tyRFNneXd4M0NycG8zbCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760966366),
('8FLBwXLhhVMYeD9ZZUdQmWCrsF5WXzGfk168W0d0', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUkdiMUsyMUJIbm1EMllUOUtGR2k2akNBd2tBQjN1TVpscFBoQXp0dSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760964550),
('8WQO84trF40W3QblVhA8spQwrf2rL1ZexFrTUT7R', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieUI3dmx6b0djNmdEU1RLZXhDc2YwVHNnbngwbFF2aGJFbXVac09ZWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967123),
('AaDX1eSlcWSXXvtXeCEsV1OqkXBBwmJZiuUpDsyj', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNXBUV0FwY3QyQ0pXZmVQZTBYZWV2cE1rR2pYUmFxaDR4ZU5CZE5EaCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760966675),
('AKToz691CwDKsbuZLNoiixyR6tU3JHnTFrC1Z4d1', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQjZZQ21IY3ZJa3pnMTFEbjRlMWh2d2ZudTJIU2J3UUZ5Qm1rbHFrVCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961601),
('aP0jnAXYhkWZx0YOGt3bx6a9XCnusugU4QYL1WwH', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSjhaWGV0TnZxWlJReTV1RjVPeHZMcjhJYkthaDgyZVhIMlF5WVhQRiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760963667),
('Bar8zRB5CyrSFX0BZ7d8kcEDmtbZNJX5fM5A58OT', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiY1ZKeXo2Zzh2VjU2V09FbjAzTG5Na0JDZnZRUlZ6QXpNUGV6TDVaSCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967553),
('BE6EMSsNXlu1JtcyF6tGFsHWTqLY1GD90x09gbJr', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN0ZXdTlwYnVVU1VsWTI0RmwwNUJuMVl5NlVVZGZnTFpBOHhaT1NKUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961567),
('bFiewzfQ0CV8qY55nLm1JCwFaJHlpK6b5Ir0LWRV', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUXh4bkdFdmFNckxuekppemNLYWZ0OHpkYXNoNE5mbzFxVTNJanVjeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760964555),
('boojzR6dGRglepZoePVhUhO6d80Rtx9UqgTjDUxQ', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTWt0QzBWa3VLT1R1UzBIc2VBMXd4WXBObDF3REg0VDEybktrWUJaOCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9MTQmc2VhcmNoPSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760967534),
('c2gCOBCFcMKYnAVwkmLVKdox70vZQwOnrbsXUmCF', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOEV4YkZJUkNYbG1sN2RGWmdzaWNxclRLaElzakpPWmFEc0o0RU8wcSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760965417),
('cBi5oSvuiZMqqbjlXeKvFX4FXBMDrAxzAdsybAzO', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiWDhxRkUzbGpWUDl1YVZVUlJKYlNLYnVSYmNQc3p6dGN5YmY3ajExbyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961582),
('CbrUQKZuX92bkaCWAr5UI7NkWPUbWESjwZEgS7zl', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU0VhZ0xpcWVNTUJTdWdmZ0U1Q255elNHb28yUDJFeVl4V0lnaFFnOCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961584),
('cFfhTm9Moo5yYLj1oQlHzprmVneA2HXv6k7xgaqT', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibmFmY3dabVlKRHltYWpJbWgyZU1YU2p6Mnd3bEE3aGZMaVJwWmlpZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961600),
('cHlYUcwWFRdArSukHNRVYTA917CXRFbpDBZtRDZb', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTHBoTHVIenpwVTY0R0ljM0RUQzRVYU9mVXZBUkxWY084ZlF4c25wOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzL215Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967313),
('cjJ5uuCNpwBjW8qi620G5cfGLdZgNr6dHLPgBexV', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUll1VG9rcFROWEg2SEZCWXdCMzlQQjFHQXJhZ1AxVDFGSU5zNHRlTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzMvam9iLW9mZmVycyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760967558),
('CKvAEWoZMmoz3MFXqVt5XgWLXHY6dSG2nhQ1hcWO', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiY2dTRXB4ZkxSWE40N3pTVm9zbXpGYzQwVFNWQ1Qxa2o2SUJtYmx1cCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760966643),
('Csl7VnRWNPZZ6WGTqADUJlv0r9QbK58thZWamixJ', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieEVTMnhVQnZ2Y29VWEU4RkFpT0hqSHlyVnkwaGVHdlJuemhDaTl4RiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961604),
('DIWROcYlTPXRcu5J36cR2nCYDM7BedGOTqf6yA2D', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU0JoQVg0Q0R0b1FLdVBWRTFtVXA2YWJGZ1RMZXlQOW5Jcmhrcm5PaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967535),
('DuLQCCM5ihP9AEbzAA8eDvKV65rk2Q04K6mXnRRH', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWHlDRGh6clRHRjYyMEdtMGJwQ01GS09ta3VCSVg0WjJNSTJrY2hmMiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964555),
('dY8GxQq7pXI1UhLnQzBjoYpI4ppiIT4XW7Lfz2D0', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSHd2a09ZSnZjdUphNm5BaDRKVVpZR3dFUktROVpKT0NGaVFjNFdxTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760966366),
('eCLWyVTNtWtJvglRtlii09MzWhYJX7x746NVpnXr', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiTXhobElESnN4bVoxZThnTjFtdDd5Y1c1eDhtQXExaU85MEg2eWI3cCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961208),
('ENrQgttBY0zbQFLTyBK6TseKQTy7tn3ieICRKiji', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiT0sxdGRveG52aFVOcmxEcHJiTTEyelFCNnl5WlgzN3FFWnhSejJCNiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961603),
('EPVtTDyrTW9UWhO2jddzOpWpHnYDnAEKT7XNjUoa', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOU5UNHBJV21IRktYSDNBYU5FWERQR3RKa3VkaFhtOGZxOHFzMnNNWiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760963682),
('Eqcjj5hQru36cj0NTGqNZxlL0qQ7mjrAOlBQjv2d', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSjVqOXNHSkRUVDdNVkdSbFFvZ0pQUzNMTWJrSVNQTHNQVThWSkVnTCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967535),
('f8CSafxKwPQPrQ6DzzfA4GFxZZep2FotuUt7FZzm', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZkZoYXpJMjd3R0wyU1pTT01OMk10QmdnOWlvSGV5MUdOWVZqdU1QZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967554),
('fLrRKrc1Ek0no3mKFXEE4v1OflmndKJU0zS6DNxN', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRnl5dTk3NlBKYmlCQlVnQXlkeXNsb0wweUE5eDcwaFVkTHoxa1lSMCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967131),
('g7TX7yJ70509Xqay0ids8K5TIOJjyXpcgZ4Y2rWU', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaFpORUJkSDFjMjlSejFoQU9HS0lwazZEdzNoMkcxWW01UnpyQVJuayI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzEvam9iLW9mZmVycyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760964964),
('GaC7InxwaWeTSReNMc1KxoDiDwh1V1tumXwHBkEJ', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOTkxVzR5QUZLbnZ4WUZTNGZoTXY0eEZhQmdVTWM1b3NXaGNwY2VoOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760966366),
('gBXCHdqZ0LHWYSAujvqR2TmDVWAxtaM3KWT4ZOM0', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoibk5UcEx3THNlQXQwdEhsdUJHSWtPMEN4UXhjWWNWZUZHQXc3eTJNRSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967302),
('GGxzVPMCGPPfGu20OUfyOevbBC4NecfvjLZAmarJ', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMjJPM3JsaG5CcDVOaEN4MFN3bTBVZ0FETDUybnY4Q2RHS3BWOE84NCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961570),
('GH519H3hK9mL6YRUWDLNjzjPOmfv7ahbSsIWLoY6', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicTBmMTdFTzk0ZmhmMjI2MTJFVFR5R0hEMmh0VnRWb1MzQXlRc0NmYSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964717),
('GYRAERcTlt61FVDHqjQkP2qiDoMDR9JlL97QIRwN', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidUJIMkEzZUlxSXlhY1BGQ0plMDhCVXRLNjFsZlJaanBZcndvbUp0WiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964555),
('gZPG5U3RUyPVbZIvLzPhJt9deHN0LEEKxse0vJDy', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN2NTWnVzUDlQdUljV1hUdXlHTHdZYjhKSzd2SjRDbHdxWDZVZVFrcCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964581),
('hfzGw0meE6WhTc5uAy8gmUSvJUvyb8HLOQhMIWfz', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR2ZCU2lQQVNmSVdia3hnUHZqMTRwNXpqVzk3WmY4dUxCMm1jdGdydiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760964965),
('hgXIPM3fmb3Tin9q59mTxi9KpnToI2mrFDwdPFir', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQnA1THBnQ0FDR2pWNGpuWVU0QmpJbWNydjFXQzB6RWNiSlBoS25GUyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzEwL2pvYi1vZmZlcnMvMTEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760966623),
('houaDNrpQA19J0r76hwIFF9hNjPgkbeX2WjAk6wm', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNlBqSW9qb1ZabExnTTA2Z2tnNUtqZjFMd2ZNT3I5dGxWbkttUUl6USI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961583),
('HRzQSsXVEDSBjXqlNLCsf6E0nLLGiDHWOJLXtk22', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR2ptYU5FOTY5N3NBb1lLQUdiYkd0cjVma3JVUXYxTGhtNTFtR3l5OCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9teSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760967306),
('i6rWmODxTsZ8soZv3iywRfF7EdQzytJpwhueUxU2', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoid1VXdWRGcDc0MzZYNnFyTWlLMTRhd0Jyc2Q5bHozWjFIQUhWNTNSbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961310),
('i7Ld2u2HUUHrCbd6L2eemQ5SuaZJDS9JQeCMGBT8', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVHlLS0F6S21zWHhoRFVMaGk0eThZbFZadDRKemdnUU1OcG4zY0YyTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760965417),
('IhoMwIq9nuUZprJSVY12GTtMpVT1NN505okiKjgO', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieVFmcXBQV0hVb3Z6WUxlNE16aFI5c2dYWTU5VWNqcUhWWFdKclY4eCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961603),
('illRUw7H6WVo23U2qqNL6UTEyP4uGV6Mct5Zhilr', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoid2dwNHU3TkZWSkdIZFRPbXV0NVlsb2RteWNDYlVYZDBUemFSS09DbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760966366),
('itp64GIeTmMCZjNRXUjnexfrIEOjp0xMu8fByfLU', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVzRQWEpzeWVMbTdIS0xPVXpzZGk4OENFdll3dElZVXl4WkUzQ1pxSiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967302),
('ItsVg08fUW75jgf1qKBwTC59uoFELBScy6Ws1lBM', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMmg2R0FESkp5cEhTaGl3Q3J5cWJqWFFhY1FOYnJrRUQyT2VIc3c4YyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961606),
('IwwJPCLMkhMTYPT34vS3qLvp6fKrPwcBxnTna8uv', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiOVh2aU54dmRRVXNLQnlWdGgyOHF6dHVYalZhUGFNMHhvUG5EQ3JvSCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961601),
('JJxsF73vJom9JDz766XjBJVxexOFktMHzXRonnDj', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoia0tmTnFQS2NqM0pENlZnelVCRjZkNmdtVkxsVUlNUTdYSFcwa3pDaSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961582),
('jnR9IgneKUSNVU67O2m2J6gWa2dgDwB6sgA2a7az', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNmlnSlpaVktEeGZTTXZ0cUVRRVEyZGFYelFYVVZvQThncVJaWTlYaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961599),
('joEM3Y2Tozr1GGeKK5L7Jl36lpX8jjUzZYeCKU2B', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWVlrM2d2Q1NBZTNlSkJkamFrQkJBbVBmSWNLQ1VudFZqV1JJcHBCayI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760964955),
('jWUS8P0BOOmjhGl84daszba8WsLj31m8iQHfgVxG', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSnY3bGprRnAwS0JJdGdSQ0xJQWZJNkVYektPSkYyaW1rSkN2UTI5UiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967514),
('K3Pu3sz1NMDrIzzrxOJuUUPfLe6nhfiRx90UHEKL', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWXVqWVhGSE5tUVFWb1ZDdEU1RURDNDc2V0ZvblQ1Y0xPODdjVGZxbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760963698),
('k4qOOUrQYLK3W5RQtoLV5IpTdLM7ZlGPeaElAchw', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiekdESXFIeHdIaWtJTldNd1RvRXNiaVF0aGRDTUIxdUdWYTBkdVZjVCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961581),
('keFIvtgy9qZEEjrtsqp9lKRIGAnHoJP7off1Zke1', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYlRDTlpSandBY0Vza0NjQXFBbzY2MjZFMjExQUsxeWl3Y2UwekJTSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzL215Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961308),
('KRqVUPJzaLeEjtFCT5cmKfQFhUI7zGtqxrHagO0n', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU09UNnd5ZXI3TVpyWmhXQWI1dnpPS213aTMxeWc2dnlIcmFxaGZlYiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760964717),
('KY7zYVPXIaJXOkCU3wm38uqbCmHQpqvowlRvnbpD', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaEVXNkpsNnJ4ZmtvcWc4NXRuSUlsdGloa0xvMlVrWFlTelJtVTgyaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760964579),
('KzaYkmUyyip3QMKmU9EObjXDa3KyvJeAb118uTzW', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU0FlNE84SmhCcTg4aExHWGtIUlFQbXdPSGRuOWo2eUo3N3g4VFM3aSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760967115),
('LmTzRvSbVlCTf8747X2BEwdUZcvcp4BWu1xLLj08', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTmdSSE9Uc3JodE5SVTFMa2ZyaDdhY1pZNGpaMGVTNWlFV3h3YnpXVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967115),
('lPXGTXXRnbPiEsTtOiLkTEdJdOeX4DHIPy23e9f7', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieTNDMlhWbXk4eGVObjB3UGtpdGhKNGxrdTd2UW5mSmtIZVZmWFVUSCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964550),
('lsLDsWvHddHzy6ZalUQcs6DLWxWXUmHuk1vVrhgv', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoidTh4SlV2elVvQ0E2eTdqa3RxN1JMdHRlQ3V0dlhaZkxuNnRqcnJzViI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961605),
('m1RbPlE0Np9H1PUgoOFKl66WiMFBNPXzFagHKiFD', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUmFweER5WGF0MHI4cWRsbFA2QXc5eUtJZno5bmdZZjVWeFVyZU1vYyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961614),
('MFWXpeBOVM2SohNL7icVA9Zms5ZFFfofwad55mD3', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSnVaUlhEZjBtVEREdVpkY3RFNXV0bTZnblNSeVlwSU1xWldFcXlzUyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967514),
('mK7tkRla6v9kaDrRFD3LjglkzDhAhJtkZaEZtfks', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWkpWbjJFZkNmdVF2d0dzSkZZejZ4QWl3U2tOdUwzS1BUdzJiaDhjaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964550),
('MTXN5BbImuq4ZoArWl1faCmhjO9rBvGj6822h4qj', NULL, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicHZ1MVNVTmpheUl4ZklaZXFMNWpTYk9oOGk0bllNb25ScFJ6a0t4NSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961203),
('MvI1kulKKgiX4FeYLE39nqVI2VKpXftlWaZQnwrS', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNmFzcTFjUkh5b09UcTRQNUhmcjNNNjBBbUVnT29XM2x1Q2VIRW1zTSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961603),
('nD7pX1n60xfU8dZdmpItAfxHBLC9tbsunk0hO9QP', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMnNsbDhHQmNOU0F1OWxCV0Qya1VVVWpYZnVpVjNmWHlEV3lETkdzUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760964550),
('Ntt76aVbGWaiJrthDfi6Yu86NB95HVHXWASZmnoK', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiN3pYTzR3NGprSHVaWjNqWHRKcjNaMzJvT2ZWQnRhQmpzOTFPU0dGUiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961604),
('o2iBmd3bOB4r3V3d98IzO6rA131Vh3l0QtUKeJiG', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiekVpcnhoV24xTkdHd2FBTTBiV1pZQkxxcnRoeThMV2hPdTRiUXBCSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967115),
('oD4FIEWjIucUHc0bcPxmfoZNpnIXhU8O4pkiUZTI', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiaUJMREJNendtanRRenJpZkhIR3hjTlJJS0ozajFMVlgwY1BFcWJNYiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961601),
('OGl9GcBC6Y5MhZxA8hPci1h189oFx2LgsEB0EjMC', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNlhsU3ZrNU5DRGFoOUluaW9NaUw4dUJJOEFhNkhtdVNsTWhtZzd6VCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760967302),
('ojJmFe6US3juAjb2kpahTUNx6KADRg8hQrxo6o2p', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiaDUxblBTcDlHUEdmaUxLWUVJUkpmY1VQZXkxcGlDdXJXQXNVdlV3eSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961600),
('oLqcOC1GzTheMfMfLAYnhnHmj2ictXJLoi5aFpQE', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieEtIZ2JIS0xEZ0dMYUxuMmJXNXJ0VXhIZmx6WGoyWVQ3ZzdRdmJEaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760967514),
('omDi3ZB9VdHno5toCOPETO39R7JOeQqLgXEsMui8', NULL, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiakoxUXVDS29yWkNzOE82Q210cXdUQ1R6ZDdWWEh5WFZaclRONk9vRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961203),
('OO6dUahIghhPgIDKO2X5rZkrFQBHNDpRngTZKA9i', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicFBSMHk0Mks0dlgzUWhHTFhGWk5iQnJEUlhNUzJkS3N6enBtUW5XTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961614),
('paEnkT9vvdYivRXZhIiLPhgxiA1x8QfiIuIvXY3w', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiQk5Td0FSd25jdENDQkcxRFJBZEpiN1VrNkp0VW1KNTBjaVFZZGV0YiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961581),
('PBxuQmu1cl2OCHbfjA2kPNUHFnLdOtnVu0TEF8tT', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYzFWZVhhdThjQ3gybmlYeDFPNEl6UkR3NkdlNWZtWDd5SFVJUEdUTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760963667),
('pcEs5fUVo7T2lB71aDoycUHMgdVFYHkQVHhvs3SB', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQWZKUGxTdFhjNFJodEMzeFF3bG85enkzR3ZzSGdJanZwVjZKOTd3dyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967302),
('Pw7DMubYsgyGydnEbrptDszOikJitYay8HOWt6tI', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTFpSaGQxYXJsSDdENmZSS3NNWXAxQlhFanhYUlFJRWRpY21wTHExcyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9teSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760961306),
('Q4CfQJPeaQIOPwpHC5L0TABOlui8ft4k8t2T12B2', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ2IxaGdPZDNWS0pOSnpHeDE5MXlxNmhNd09yd3VZb2JxSkVlZmVnOCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzL215Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967120),
('qnOqdmYa1F1NUDJZsu9eTXKyWwQodbkOcwT08sQ7', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMWdLYlVLVEl5ZHI1d1AxdkdpR2RFdXlWRTJxNDBvMU15eFVpM1AxNSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzL215Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964958),
('Qr9iRyUwklB8qoxk4XfG0kM4D5HNbqIwwWVKw4Av', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ0ZGblBPdnFNZ2YyWkl5ZHdERXB6WDVnT0RCNG54Z1hrb042MmpuUCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967553),
('QRBzFbkPTZadBrcONOrgw3hJIXXAH4N0rkE7In3L', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTFp0N0czY1B4S3c0WlMyeTU5QXhPTXNCM29Ibmp5TFcwVlhtaDR3aiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9teSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760961560),
('rDgRFuroFDD0DEylXWPB0pYLpqiPjPGtzeTb3t6m', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZXJMdDNiQUpUTHl0c1pkTTl4Ykx0S1g5QUdkOVhwdTUxaFRXT0MwQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967514),
('RkTl3SUX2Yhr4TwQGiTkVevoSFFcQz9WaaCYcK6I', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiV3MwbmxtRFM3eEo3MkhmTWp5VjNnMmhnSHppNXBEZVdzUW1kQkNETSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967554),
('rKTXYez8Iu7XPxyo6ZNaA9XAymuP2xWyRy5djzh0', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU1lZMk9peGF1WWNoNzBkdjlpZ0ZqdTNHZWhNQ3BTa1JZSG5YNGh2YyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760965417),
('rvzLIyk1Ps2jdZTjOX7OKKANwAQ3G8SP0RVZuBDi', NULL, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaXpiZVhwSkZVUnpjaEthMXZ5TldCWUlaSFJBcDh4ekN5ZFVmbVZnZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9teSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760964953),
('Rxr6mOJVCAFdDl6ZqjSe4NbZyoIZXNiViJ7PK8ff', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOXV1QWhwU1UzNmFhZlJNTkYzMkk3M01TclFLZXlUbldobXBzSTZ5ViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760964960),
('sDdFUjXetmZm0EYdDSUAkP3dO6WZ8xTl9nuRXhTc', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ05sUVJuVkxaTkxLbjRvcGZWMlF0dlVteG5pTXAwcldUUEY3Mk94ZyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961614),
('SE4C0GvKamlv9IaShzUZiz4v7XOCs5BMhI5ph8Oy', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSGZPWmdGVGZJTGlPOGR0ejEyQ2U4MWpWY01sR29HWFhEUktFR1BmTiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961597),
('sHqHjx907EDOtLPJlhK5STP9v0BohmaY1bbJXVMH', NULL, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNEFSY3hHcTNrNmc0QVNVZ2VnV2EzNkxueUxIUlFicDRvanRwR0pOVSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967299),
('T5pZAKH9mxprY9Uknsekz0cRTX4eK7Asl0yTHOEr', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNzlKemhDN2tFWHFsV0Z2eVpyOU0zQ2dMUDFnenQ5T25rTHJjOHNGQyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961606),
('T9p4lINwGy7lew5CliXcNQmC2XGAYiA95qM7jej4', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZjlmS2tZZXU3TGhpQ2RBdWlJV1BObFBZVWJvNmYxQ0ZjdzVOMmdneCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760961614);
INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('TVOVQ1rxusOaLlZAxSleuAbnLeyiAmHDoDDkOe6h', NULL, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSXRJNlBJdDRKSXFwaGsyZllJV01tY3ZYaVQzVVJlOGxBY0c4dTQyTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760961203),
('TVTjw3EbjodjoVs6zyC4JxhYTxi7fDFA6mUqqu4d', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibVdQRWpueEkzTFpvZFpDQkgwNThmYWFLWlJHNE5qbmFQaThnTXZnMiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9teSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760967118),
('UBP8EqPpr7j7O9NHiRDo7VhP9U2psQuTOVeRUAAv', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRU5JUHZURzdqNzZmU3AyVDhJSkJsSVBKWnhFcXlYQmJRUXJ1bXZ2VSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760963667),
('uGTIIRTgKSVudlfsNIItSfPZt13EEFLrKrnFZdgl', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRjIwa21IdTBtR3pxdUMzWW42MkRsd2tqMW4wd1dFQ1BSVmFQcHduUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzL215Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967544),
('UotFFq0luQdQNs6k8GJjx1dd5QSJZRoXj1LtWvbb', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieGN1QTM2ak9xMHB0T0RQa01nNjZRdXJJekxjMVdHZmo4UkxWUDU2NCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967317),
('vrYIfmsSWrVyxmCxIeLwLYg09VkuYxSOzhyNothi', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoibVJUNjhKUmF6YU5HYmVjeGFNdjRJY2dHOVQzVjZQU1NrUnlKdzhFdCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961599),
('VsderbBZPuuyvA0TBilMtGh3da6CcLavsaJtp8MD', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidXhza2RLT0h1ZVRScWp0RGZadER4WmJqeWFEcjc2NHBZR1Bpb1V5TSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760963667),
('vSHhIALqVT2pxql1TtPeBJRO5VYpJgAwLEo47ECX', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOG0yYVVCcTJzMmpRUGM5TXRIdVlwWnF6VGFkQ0FhM1ZoSWhCc05LRyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9teSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760963673),
('Vw90AfqoBENjMO8bhcw9dKwT8BmNxiYebNpdpO8h', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiek0wbm5jazY3SEFOUkNhUEFaNHdxdWRtemE3bU5EcE9ISEgyR2hwcyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760964955),
('VYErFu46gHemCE5vI7d62Ucyuk4hIMU4OWZsb6ij', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVjlOV1NCZHJ1QlhSMnluYkFMT2lwbmQ0MGFRQkZqVjBJblBXUnIzbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLW9mZmVycy9zZWFyY2g/Y2F0ZWdvcnk9JnNlYXJjaD0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760964955),
('w3MkfsyzJMRb4v8Y1F407XguQxzdOFRHvKTrPl7M', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidlpoUTJ2ME1NVjM1UFNXVGIxd2M2UEFMVjEza0V4T0JURU5DZm1aVyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzL215Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961561),
('WbmgjLLSFLZmK94yVIg74JqyhtcUDQvXykeR49Og', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib202U3poUFRhdnNhTElnRmdRam1SQm8zaFNoSGg4T04xWGJUNDBQSiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961601),
('wQFzrtnMzJTXBNZ20NFjp6LMBbfn4rUn1uCSOdjD', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSFd6TUVObHRtWmVVZWVUQk90RmJoOTJzR2hBaEx2bXRnVk41VGNscCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961535),
('xA4r1CpopZLvj4mo8fpJ9GTlQvthZSE9kQ4M96WJ', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS1Azb0tzM2RSNXRibjg0MGhrQ3B2bkVjWjFqa0EwWm96eGpwTEFFdSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967545),
('XoJ1z45cnXvJefdifZGXnNFr9Bsg1jNNUHBEDRlK', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN0dFb3ZsZVpWY0ZLVlVwOEFUZUcxWHV3c2F1cndKcmVMQWQzdmNZMSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961578),
('xtnWDN9YCkPvHNMamfgKoGMHjT0Kruz35lqQVMMl', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicnliMFJOQXJ2RmRrcFNJeTVVU2h5NmtETkxjNDlMMlBQVkZNbTNtNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961539),
('YGgOodRx10yGxBc0uJsoKKZl4sYXs1BGNQtVQBHy', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibnJmQ0xBTnZSQnhsRmtoOTZIMVJXVzFwOWxrb3NzWm5SclozZW1XSyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967555),
('yUXoTNYXLhVhlBAGTfyNR9NP9aS8Fmow1gvr3KBO', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN3JxWTUzOXJpajZ3bVdSeEljQjVLSnVEbDNvbFl5dXZGMkNiRkpibSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967302),
('yxnOqASXX7BEI8BBBQnkoVjI6TIXjEu4fQQY6Wrv', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ3NNVVJ4SlNpMFREOTVleWVPa3BMSGc1dkFIajJIT0xNYTlIdUhTVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2F0ZWdvcmllcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760964717),
('za4s65sGNq7KCvCKpyqcAzus0txAL73b6EGKWuhz', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoid1RyZGxrSUF4MFVKQ0p3WFFNNVJobGFIS2JkY3NUSkxBQnQ4akk2ZyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967555),
('zbrMi1Td1kFmWXoczquTCHdnonTNruinX7yjqfjl', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOGdjZW5UWkhkQU4xRnFtY1JCRFFHQXBrTEdvSmhNbE1CS0hHbm1weSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzLzMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760967315),
('zCXVTAwY9hPNY4Hh2drknQTvpmmgz8wkgW168kgL', 3, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRVNLVVdlYTBFWG9mbzB1bHMzVk9MZFJZeVlTOGFkWlVBT1hNR0g3VSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9teSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760967539),
('zdzUmfxAn2HDdiyEZPW9S3ipMbDQhezBqMQzz4d7', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibTAxQnJJYlVpNjBVMXhiTDZlNjZpcjJkYmFZaXA0RXgxT2x5QXBEeiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760961605),
('ZfLztkesHyEBo71XRFiulb75CqzWFppddUz77zuG', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRmRJd1hlOExVWnBNR0hRT0hXelA2dDZSbnNGeTVmSmx5MFdjekNMYyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760967115),
('zQylnBuEIeX8ylGn14CNSuWvQ5dhZZ9GylCwrMVe', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTDVWdVNkc2N3ek96ZEtFV1RkSmk4eU1LUVl5WGxETnJPb3haMUw5RyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY29tcGFuaWVzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1760961208),
('zX1kgnXWVtqhfmsy8ItcF3HU4LFrmSpz97ulgRRx', 1, '192.168.65.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibmRnb3YzNURNWlpGRENDdHZ0OHpmcmR5WkR5MWhGcHpjeG5jY0dMYyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iLWFwcGxpY2F0aW9ucy9jb21wYW55LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1760964974);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `birth_date` date NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('user','admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `birth_date`, `address`, `phone`, `email`, `password`, `role`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Mdr', 'Admin', '1990-01-01', '123 rue Example', '+33612345678', 'admin@gmail.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'admin', NULL, NULL, '2025-10-13 18:32:21', '2025-10-16 23:13:44'),
(2, 'Test', 'Test', '2025-09-30', '12 rue Perier', '+3344444444', 'test@gmail.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, '2025-10-13 19:45:03', '2025-10-13 19:45:03'),
(3, 'Alice', 'Dupont', '1990-01-01', '12 rue Victor Hugo, Paris', '+33611111111', 'alice.dupont@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, '2025-10-16 21:51:23', '2025-10-16 21:51:34'),
(4, 'Bob', 'Martin', '1988-03-15', '24 avenue de Lyon, Marseille', '+33611111112', 'bob.martin@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, '2025-10-16 21:51:39', '2025-10-14 21:51:42'),
(5, 'Claire', 'Lemoine', '1995-07-20', '7 boulevard de Strasbourg, Lille', '+33611111113', 'claire.lemoine@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, '2025-10-15 21:51:45', '2025-10-13 21:51:47'),
(6, 'David', 'Nguyen', '1992-02-11', '45 rue des Lilas, Lyon', '+33611111114', 'david.nguyen@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, '2025-10-16 21:51:50', '2025-10-06 21:51:51'),
(7, 'Monique', 'La fouragere', '1998-05-09', '3 impasse des Fleurs, Nantes', '+33611111115', 'monique@gmail.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, '2025-10-08 21:52:08', '2025-10-13 21:52:10'),
(8, 'Florian', 'Rossi', '1991-09-27', '98 avenue de Bretagne, Rennes', '+33611111116', 'florian.rossi@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'admin', NULL, NULL, NULL, '2025-10-17 13:11:58'),
(9, 'Simone', 'Kirchkovic', '1994-04-14', '15 rue du Moulin, Bordeaux', '+33611111117', 'simon@gmail.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, '2025-10-17 13:09:11'),
(11, 'Ines', 'Leclerc', '1997-01-22', '2 rue de la République, Toulouse', '+33611111119', 'ines.leclerc@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(12, 'Julien', 'Moreau', '1996-06-11', '44 chemin du Parc, Nice', '+33611111120', 'julien.moreau@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(13, 'Karine', 'Petit', '1989-08-02', '56 rue de Paris, Montpellier', '+33611111121', 'karine.petit@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(14, 'Luc', 'Girard', '1991-03-17', '78 avenue Victor Hugo, Dijon', '+33611111122', 'luc.girard@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(15, 'Marie', 'Renaud', '1993-10-29', '5 rue du Centre, Strasbourg', '+33611111123', 'marie.renaud@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(16, 'Nicolas', 'Perrot', '1990-04-03', '9 rue Lafayette, Paris', '+33611111124', 'nicolas.perrot@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(17, 'Oceane', 'Gauthier', '1992-07-19', '21 rue de Metz, Reims', '+33611111125', 'oceane.gauthier@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(18, 'Paul', 'Renard', '1995-09-25', '32 avenue du Lac, Annecy', '+33611111126', 'paul.renard@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(19, 'Quentin', 'Lambert', '1987-05-14', '10 rue des Champs, Metz', '+33611111127', 'quentin.lambert@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(20, 'Roxane', 'Blanc', '1999-02-07', '87 boulevard Voltaire, Paris', '+33611111128', 'roxane.blanc@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(21, 'Samuel', 'Henry', '1994-12-01', '13 rue Pasteur, Brest', '+33611111129', 'samuel.henry@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(22, 'Tania', 'Dupuis', '1996-11-08', '6 avenue du Général Leclerc, Tours', '+33611111130', 'tania.dupuis@example.com', '$2y$12$LSFwzCHFMeLMaCjgS.UDSO1UPlGFmILBP5hfQRd4ekQpcwxYX4/Ua', 'user', NULL, NULL, NULL, NULL),
(23, 'Soleilsky', 'Amndoulilah', '2025-09-30', '12 rue Perier', '+3344444444', 'hello@gmail.com', '$2y$12$GZ8VMLL1NR3P9CZyhVmmaem7ohcBKWNHuGbf1lBSeQrLdO.2c9eUa', 'user', NULL, NULL, '2025-10-17 12:32:33', '2025-10-17 12:32:33');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employees_user_id_company_id_unique` (`user_id`,`company_id`),
  ADD KEY `employees_company_id_foreign` (`company_id`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Index pour la table `job_applications`
--
ALTER TABLE `job_applications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_applications_job_offer_id_foreign` (`job_offer_id`),
  ADD KEY `job_applications_user_id_foreign` (`user_id`);

--
-- Index pour la table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `job_offers`
--
ALTER TABLE `job_offers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_offers_company_id_foreign` (`company_id`),
  ADD KEY `job_offers_employee_id_foreign` (`employee_id`),
  ADD KEY `job_offers_category_id_foreign` (`category_id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_mail_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `job_applications`
--
ALTER TABLE `job_applications`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `job_offers`
--
ALTER TABLE `job_offers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `employees_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `job_applications`
--
ALTER TABLE `job_applications`
  ADD CONSTRAINT `job_applications_job_offer_id_foreign` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `job_applications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `job_offers`
--
ALTER TABLE `job_offers`
  ADD CONSTRAINT `job_offers_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `job_offers_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `job_offers_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
