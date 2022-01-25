CREATE DATABASE  IF NOT EXISTS `mercampo_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mercampo_db`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 45.79.201.214    Database: mercampo_db
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `idcategories` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idcategories`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'fruta'),(2,'verdura');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `idproducts` int NOT NULL AUTO_INCREMENT,
  `image` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price` int NOT NULL,
  `categories_idcategories` int NOT NULL,
  PRIMARY KEY (`idproducts`),
  KEY `fk_products_categories1_idx` (`categories_idcategories`),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`categories_idcategories`) REFERENCES `categories` (`idcategories`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'product-1643130422672.jpeg','Bananito','Es un tipo de banano pequeño y de sabor más dulce.',250,1),(2,'product-1643130677694.jpeg','Fresas','Es un fruto silvestre de color rojo con forma de corazón y su sabor es dulce con un leve toque ácido.',250,1),(3,'product-1643130739051.jpg','Granadilla','Es una fruta con cáscara gruesa y  en su interior se encuentra su pulpa gelatinosa, la cual está compuesta por unas pequeñas y comestibles semillas negras.',250,1),(4,'product-1643130787267.jpeg','Uchuvas','Es una fruta pequeña de color anaranjado de sabor dulce.',250,1),(5,'product-1643130840567.jpg','Mora','Es un tipo de baya de color morado oscuro, verde o roja. Su sabor es dulce aunque con un toque de acidez.',250,1),(6,'product-1643130891362.jpeg','Brevas','Es el fruto de la primera cosecha de la higuera, árbol rústico y típico de países mediterráneos.',250,1),(7,'product-1643131278283.jpg','Aguacate','El aguacate  tiene forma ovalada con una cáscara verde que puede ser lisa o rugosa y su pulpa es cremosa de color amarillo o verde.',1000,2),(8,'product-1643131020728.jpeg','Tomates','Es una hortaliza circular de color rojo y agradable aroma. \r\nEste alimento es uno de los más apetecidos en la cocina por sus múltiples usos',1000,2),(9,'product-1643131073889.jpg','Lechuga','Esta planta de color verde tiene su origen en la India, su sabor es suave y fresco.',1000,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_has_shopping_carts`
--

DROP TABLE IF EXISTS `products_has_shopping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_has_shopping_carts` (
  `products_idproducts` int NOT NULL,
  `shopping_carts_idshopping_carts` int NOT NULL,
  PRIMARY KEY (`products_idproducts`,`shopping_carts_idshopping_carts`),
  KEY `fk_products_has_shopping_carts_shopping_carts1_idx` (`shopping_carts_idshopping_carts`),
  KEY `fk_products_has_shopping_carts_products1_idx` (`products_idproducts`),
  CONSTRAINT `fk_products_has_shopping_carts_products1` FOREIGN KEY (`products_idproducts`) REFERENCES `products` (`idproducts`),
  CONSTRAINT `fk_products_has_shopping_carts_shopping_carts1` FOREIGN KEY (`shopping_carts_idshopping_carts`) REFERENCES `shopping_carts` (`idshopping_carts`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_has_shopping_carts`
--

LOCK TABLES `products_has_shopping_carts` WRITE;
/*!40000 ALTER TABLE `products_has_shopping_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_has_shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `idroles` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idroles`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'usuario'),(2,'administrador');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_carts`
--

DROP TABLE IF EXISTS `shopping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_carts` (
  `idshopping_carts` int NOT NULL AUTO_INCREMENT,
  `users_idusers` int NOT NULL,
  PRIMARY KEY (`idshopping_carts`),
  KEY `fk_shopping_carts_users1_idx` (`users_idusers`),
  CONSTRAINT `fk_shopping_carts_users1` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_carts`
--

LOCK TABLES `shopping_carts` WRITE;
/*!40000 ALTER TABLE `shopping_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `roles_idroles` int NOT NULL,
  PRIMARY KEY (`idusers`),
  KEY `fk_users_roles1_idx` (`roles_idroles`),
  CONSTRAINT `fk_users_roles1` FOREIGN KEY (`roles_idroles`) REFERENCES `roles` (`idroles`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Tania','Cardenas','tania@gmail.com','bogota','user-1643130128031.jpg','$2a$10$FsWTaiSAIP6FnRbtIgNEOeGHIYHYQ0wShHkznqz8NXTjX7vX3zH7K',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_has_products`
--

DROP TABLE IF EXISTS `users_has_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_has_products` (
  `users_idusers` int NOT NULL,
  `products_idproducts` int NOT NULL,
  PRIMARY KEY (`users_idusers`,`products_idproducts`),
  KEY `fk_users_has_products_products1_idx` (`products_idproducts`),
  KEY `fk_users_has_products_users1_idx` (`users_idusers`),
  CONSTRAINT `fk_users_has_products_products1` FOREIGN KEY (`products_idproducts`) REFERENCES `products` (`idproducts`),
  CONSTRAINT `fk_users_has_products_users1` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_has_products`
--

LOCK TABLES `users_has_products` WRITE;
/*!40000 ALTER TABLE `users_has_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_has_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-25 13:39:36
