-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: gestion_edugate
-- ------------------------------------------------------
-- Server version	8.0.36

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
  CONSTRAINT `absence_ibfk_1` FOREIGN KEY (`élève_id`) REFERENCES `eleve` (`id_eleve`),
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
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Administrator'),(2,'Moderator'),(3,'Support Staff'),(4,'System Analyst'),(5,'Database Administrator');
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
INSERT INTO `classe` VALUES (1,'Classe A','Niveau 1'),(2,'Classe B','Niveau 2'),(3,'Classe C','Niveau 1'),(4,'Classe D','Niveau 3'),(5,'Classe E','Niveau 2'),(6,'Classe F','Niveau 1'),(7,'Classe G','Niveau 3'),(8,'Classe H','Niveau 2'),(9,'Classe I','Niveau 1'),(10,'Classe J','Niveau 3');
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
-- Table structure for table `eleve`
--

DROP TABLE IF EXISTS `eleve`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eleve` (
  `id_eleve` int NOT NULL,
  `classe_id` int DEFAULT NULL,
  PRIMARY KEY (`id_eleve`),
  KEY `classe_id` (`classe_id`),
  CONSTRAINT `eleve_ibfk_1` FOREIGN KEY (`id_eleve`) REFERENCES `utilisateur` (`id_utilisateur`),
  CONSTRAINT `eleve_ibfk_2` FOREIGN KEY (`classe_id`) REFERENCES `classe` (`id_classe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eleve`
--

LOCK TABLES `eleve` WRITE;
/*!40000 ALTER TABLE `eleve` DISABLE KEYS */;
INSERT INTO `eleve` VALUES (1,1),(3,1),(7,1),(10,1),(2,2),(5,2),(9,2),(4,3),(6,3);
/*!40000 ALTER TABLE `eleve` ENABLE KEYS */;
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
INSERT INTO `enseignant` VALUES (1),(2),(3),(4);
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
  CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`élève_id`) REFERENCES `eleve` (`id_eleve`),
  CONSTRAINT `notes_ibfk_2` FOREIGN KEY (`enseignant_id`) REFERENCES `enseignant` (`id_enseignant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,'Math',85.5,1,1),(2,'Science',92,2,2),(3,'History',78,3,3),(4,'Math',88.5,4,1),(5,'Science',95,1,2),(6,'History',80,2,3),(7,'Math',72,3,1),(8,'Science',89,4,2),(9,'History',85,1,3),(10,'Math',90,2,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'Doe','John','john.doe@example.com','password123','élève'),(2,'Smith','Jane','jane.smith@example.com','password123','élève'),(3,'Brown','Charlie','charlie.brown@example.com','password123','élève'),(4,'Johnson','Emily','emily.johnson@example.com','password123','élève'),(5,'Williams','David','david.williams@example.com','password123','élève'),(6,'Jones','Emma','emma.jones@example.com','password123','élève'),(7,'Garcia','Michael','michael.garcia@example.com','password123','élève'),(8,'Martinez','Sophia','sophia.martinez@example.com','password123','élève'),(9,'Rodriguez','James','james.rodriguez@example.com','password123','élève'),(10,'Wilson','Olivia','olivia.wilson@example.com','password123','élève');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-22 15:54:17
