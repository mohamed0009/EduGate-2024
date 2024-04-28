-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: gestion_edugate
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `absence`
--

DROP TABLE IF EXISTS `absence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `absence` (
  `id_absence` int NOT NULL AUTO_INCREMENT,
  `date_absence` date DEFAULT NULL,
  `heureDebut_absence` time DEFAULT NULL,
  `heureFin_absence` time DEFAULT NULL,
  `élève_id` int DEFAULT NULL,
  `motif` varchar(100) DEFAULT NULL,
  `justifiée` enum('Oui','Non') DEFAULT NULL,
  `classe_id` int DEFAULT NULL,
  PRIMARY KEY (`id_absence`),
  KEY `élève_id` (`élève_id`),
  KEY `classe_id` (`classe_id`),
  CONSTRAINT `absence_ibfk_1` FOREIGN KEY (`élève_id`) REFERENCES `élève` (`id_élève`),
  CONSTRAINT `absence_ibfk_2` FOREIGN KEY (`classe_id`) REFERENCES `classe` (`id_classe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `absence`
--

LOCK TABLES `absence` WRITE;
/*!40000 ALTER TABLE `absence` DISABLE KEYS */;
/*!40000 ALTER TABLE `absence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id_admin` int NOT NULL,
  `rôle` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_admin`),
  CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`id_admin`) REFERENCES `utilisateur` (`id_utilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classe`
--

DROP TABLE IF EXISTS `classe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classe` (
  `id_classe` int NOT NULL,
  `nom_classe` varchar(30) DEFAULT NULL,
  `niveau` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_classe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classe`
--

LOCK TABLES `classe` WRITE;
/*!40000 ALTER TABLE `classe` DISABLE KEYS */;
/*!40000 ALTER TABLE `classe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document`
--

DROP TABLE IF EXISTS `document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `document` (
  `id_document` int NOT NULL,
  `titre` varchar(100) DEFAULT NULL,
  `contenu` text,
  `type_document` enum('devoir','leçon') DEFAULT NULL,
  `enseignant_id` int DEFAULT NULL,
  `classe_id` int DEFAULT NULL,
  PRIMARY KEY (`id_document`),
  KEY `enseignant_id` (`enseignant_id`),
  KEY `classe_id` (`classe_id`),
  CONSTRAINT `document_ibfk_1` FOREIGN KEY (`enseignant_id`) REFERENCES `enseignant` (`id_enseignant`),
  CONSTRAINT `document_ibfk_2` FOREIGN KEY (`classe_id`) REFERENCES `classe` (`id_classe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document`
--

LOCK TABLES `document` WRITE;
/*!40000 ALTER TABLE `document` DISABLE KEYS */;
/*!40000 ALTER TABLE `document` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emploidutemps`
--

DROP TABLE IF EXISTS `emploidutemps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emploidutemps` (
  `id` int NOT NULL,
  `date` date DEFAULT NULL,
  `heureDebut` time DEFAULT NULL,
  `heureFin` time DEFAULT NULL,
  `classe_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `classe_id` (`classe_id`),
  CONSTRAINT `emploidutemps_ibfk_1` FOREIGN KEY (`classe_id`) REFERENCES `classe` (`id_classe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emploidutemps`
--

LOCK TABLES `emploidutemps` WRITE;
/*!40000 ALTER TABLE `emploidutemps` DISABLE KEYS */;
/*!40000 ALTER TABLE `emploidutemps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enseignant`
--

DROP TABLE IF EXISTS `enseignant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enseignant` (
  `id_enseignant` int NOT NULL,
  PRIMARY KEY (`id_enseignant`),
  CONSTRAINT `enseignant_ibfk_1` FOREIGN KEY (`id_enseignant`) REFERENCES `utilisateur` (`id_utilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enseignant`
--

LOCK TABLES `enseignant` WRITE;
/*!40000 ALTER TABLE `enseignant` DISABLE KEYS */;
/*!40000 ALTER TABLE `enseignant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enseignant_classe`
--

DROP TABLE IF EXISTS `enseignant_classe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enseignant_classe` (
  `ID_Enseignant_Classe` int NOT NULL AUTO_INCREMENT,
  `ID_Enseignant` int DEFAULT NULL,
  `ID_Classe` int DEFAULT NULL,
  PRIMARY KEY (`ID_Enseignant_Classe`),
  KEY `ID_Enseignant` (`ID_Enseignant`),
  KEY `ID_Classe` (`ID_Classe`),
  CONSTRAINT `enseignant_classe_ibfk_1` FOREIGN KEY (`ID_Enseignant`) REFERENCES `enseignant` (`id_enseignant`),
  CONSTRAINT `enseignant_classe_ibfk_2` FOREIGN KEY (`ID_Classe`) REFERENCES `classe` (`id_classe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enseignant_classe`
--

LOCK TABLES `enseignant_classe` WRITE;
/*!40000 ALTER TABLE `enseignant_classe` DISABLE KEYS */;
/*!40000 ALTER TABLE `enseignant_classe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes` (
  `id_note` int NOT NULL,
  `matière` varchar(30) DEFAULT NULL,
  `note` float DEFAULT NULL,
  `élève_id` int DEFAULT NULL,
  `enseignant_id` int DEFAULT NULL,
  PRIMARY KEY (`id_note`),
  KEY `élève_id` (`élève_id`),
  KEY `enseignant_id` (`enseignant_id`),
  CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`élève_id`) REFERENCES `élève` (`id_élève`),
  CONSTRAINT `notes_ibfk_2` FOREIGN KEY (`enseignant_id`) REFERENCES `enseignant` (`id_enseignant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rapport`
--

DROP TABLE IF EXISTS `rapport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rapport` (
  `id_rapport` int NOT NULL,
  `contenu` text,
  `date_génération` date DEFAULT NULL,
  `admin_id` int DEFAULT NULL,
  PRIMARY KEY (`id_rapport`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `rapport_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id_admin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rapport`
--

LOCK TABLES `rapport` WRITE;
/*!40000 ALTER TABLE `rapport` DISABLE KEYS */;
/*!40000 ALTER TABLE `rapport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur` (
  `id_utilisateur` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `type_utilisateur` enum('enseignant','élève','administration') DEFAULT NULL,
  PRIMARY KEY (`id_utilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `élève`
--

DROP TABLE IF EXISTS `élève`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `élève` (
  `id_élève` int NOT NULL,
  `classe_id` int DEFAULT NULL,
  PRIMARY KEY (`id_élève`),
  KEY `classe_id` (`classe_id`),
  CONSTRAINT `élève_ibfk_1` FOREIGN KEY (`id_élève`) REFERENCES `utilisateur` (`id_utilisateur`),
  CONSTRAINT `élève_ibfk_2` FOREIGN KEY (`classe_id`) REFERENCES `classe` (`id_classe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `élève`
--

LOCK TABLES `élève` WRITE;
/*!40000 ALTER TABLE `élève` DISABLE KEYS */;
/*!40000 ALTER TABLE `élève` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-28 16:14:24
