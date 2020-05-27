-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: hezijian6338.ddns.net    Database: shop_of_flower
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` varchar(255) NOT NULL,
  `product_id` varchar(255) NOT NULL COMMENT '商品的查询 id',
  `name` varchar(255) NOT NULL COMMENT '商品的名称',
  `sku_id` varchar(255) NOT NULL COMMENT '规格选择的 id',
  `standard` varchar(255) NOT NULL COMMENT '规格内容',
  `price` float NOT NULL COMMENT '规格价钱',
  `photo` varchar(255) DEFAULT NULL COMMENT '规格对应的图片路径',
  `created_date` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `sku_id` (`sku_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`sku_id`) REFERENCES `sku` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES ('194e3d69f54b4569a36ff49189c39b17','f0f1a6e989448','粉红玫瑰','1a3b0fbbb00b445a9da229287cd70a3b','粉色玫瑰 (篮子)',455.5,'http://photo.dragonsking.cn/2020/04/08/aef97a447f0b4.jpg','2020-05-14 17:02:34','2020-05-14 09:02:34'),('3933d803c6164436aa669d4a76fb8cf9','0bbc755f6179c','吸染蓝玫瑰','61ae9c1f846748738c6f522f9ccca2a8','浪漫红玫瑰 (手捧花)',795.5,'http://photo.dragonsking.cn/2020/04/08/b419ded5c198a.jpg','2020-05-14 17:00:29','2020-05-14 09:00:29'),('413c065f480948cc8505a1d8db9bf5e6','0bbc755f6179c','吸染蓝玫瑰','61ae9c1f846748738c6f522f9ccca2a8','浪漫红玫瑰 (手捧花)',795.5,'http://photo.dragonsking.cn/2020/04/08/b419ded5c198a.jpg','2020-05-14 17:13:03','2020-05-14 09:13:03'),('45ddcfd47a9f44aa9088eb54ddaea3ca','f0f1a6e989448','粉红玫瑰','1a3b0fbbb00b445a9da229287cd70a3b','粉色玫瑰 (篮子)',455.5,'http://photo.dragonsking.cn/2020/04/08/aef97a447f0b4.jpg','2020-05-14 17:01:51','2020-05-14 09:01:51'),('742e98de54cc45d7ac87391e8c0af330','af9982f11572f','绣球花','1f796c20aff845569fa5f53b9baca2d0','一朵',10,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-05-14 16:55:49','2020-05-14 08:55:49'),('758b36111c9c42f7b54f22c9167a71af','f0f1a6e989448','粉红玫瑰','1a3b0fbbb00b445a9da229287cd70a3b','粉色玫瑰 (篮子)',455.5,'http://photo.dragonsking.cn/2020/04/08/aef97a447f0b4.jpg','2020-05-14 18:05:31','2020-05-14 10:05:31'),('82426e43ba8046eb8fc34a47b45bcbff','af9982f11572f','绣球花','d530e240f756466cb9bc841f5deb471c','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-05-14 16:43:46','2020-05-14 08:43:46'),('838254f2a6f2457e93fc5c462c198fc4','f0f1a6e989448','粉红玫瑰','1a3b0fbbb00b445a9da229287cd70a3b','粉色玫瑰 (篮子)',455.5,'http://photo.dragonsking.cn/2020/04/08/aef97a447f0b4.jpg','2020-05-14 17:03:05','2020-05-14 09:03:05'),('86188538fb7647cc8287822a91fe6c54','f0f1a6e989448','粉红玫瑰','885ad065abaa49a08c303aba5255b2a7','粉色玫瑰',355.5,'http://photo.dragonsking.cn/2020/04/08/f0f1a6e989448.jpg','2020-05-14 17:06:39','2020-05-14 09:06:39'),('bf4e73db1fc748ae8934513072a815b2','af9982f11572f','绣球花','25eb013649474dd68ca6a0ebf5d0e929','插花',50,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-05-14 16:59:47','2020-05-14 08:59:47'),('c8b50345db8d40a09233d7df43369542','f0f1a6e989448','粉红玫瑰','1a3b0fbbb00b445a9da229287cd70a3b','粉色玫瑰 (篮子)',455.5,'http://photo.dragonsking.cn/2020/04/08/aef97a447f0b4.jpg','2020-05-14 18:04:43','2020-05-14 10:04:43'),('d19f0e75fbc04faa9ac4be509b8338af','0bbc755f6179c','吸染蓝玫瑰','61ae9c1f846748738c6f522f9ccca2a8','浪漫红玫瑰 (手捧花)',795.5,'http://photo.dragonsking.cn/2020/04/08/b419ded5c198a.jpg','2020-05-14 18:04:57','2020-05-14 10:04:57'),('d21447bf6c894f09a644aad97c15e0d2','af9982f11572f','绣球花','d530e240f756466cb9bc841f5deb471c','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-05-14 16:51:21','2020-05-14 08:51:21'),('d691ec95b08b4bf3a7e9a8d51ac99702','f0f1a6e989448','粉红玫瑰','1a3b0fbbb00b445a9da229287cd70a3b','粉色玫瑰 (篮子)',455.5,'http://photo.dragonsking.cn/2020/04/08/aef97a447f0b4.jpg','2020-05-14 16:56:09','2020-05-14 08:56:09'),('de314744b4564308ba9968b31c40f51c','af9982f11572f','绣球花','25eb013649474dd68ca6a0ebf5d0e929','插花',50,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-05-14 18:07:53','2020-05-14 10:07:53');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order` (
  `id` varchar(255) NOT NULL,
  `product_id` varchar(255) NOT NULL COMMENT '商品的查询 id',
  `name` varchar(255) NOT NULL COMMENT '商品的名称',
  `sku_id` varchar(255) NOT NULL COMMENT '规格选择的 id',
  `standard` varchar(255) NOT NULL COMMENT '规格内容',
  `price` float NOT NULL COMMENT '规格价钱',
  `photo` varchar(255) NOT NULL COMMENT '规格对应的图片路径',
  `state` int(11) NOT NULL COMMENT '商品状态: 0: 下单成功; 1: 制作中; 2: 制作完成',
  `created_date` datetime DEFAULT NULL COMMENT '下单时间',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '订单状态修改时间',
  PRIMARY KEY (`id`),
  KEY `sku_id` (`sku_id`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`sku_id`) REFERENCES `sku` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES ('02b69bed8b57486e8822293a70551239','af9982f11572f','绣球花','791095516ce942919bdd3d2d15e9a00e','两束',100,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-23 09:30:25','2020-05-23 01:30:24'),('033cd32006724b628225ae885be1055e','0bbc755f6179c','吸染蓝玫瑰','e9784a8d4cf64f12a344b425b57aa388','浪漫红玫瑰',995.5,'http://photo.dragonsking.cn/2020/04/08/c2d6b621548fd.jpg',0,'2020-05-14 19:38:28','2020-05-14 11:38:27'),('05bb5843b26843588b9af3e3be24b5e2','0bbc755f6179c','吸染蓝玫瑰','61ae9c1f846748738c6f522f9ccca2a8','浪漫红玫瑰 (手捧花)',795.5,'http://photo.dragonsking.cn/2020/04/08/b419ded5c198a.jpg',0,'2020-05-14 19:37:43','2020-05-14 11:37:43'),('0837746fcf954950a4dc7680862e34a2','af9982f11572f','绣球花','791095516ce942919bdd3d2d15e9a00e','两束',100,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-15 11:09:29','2020-05-15 03:09:29'),('09ece3c7792b4da48c3f82613a0bfe26','f0f1a6e989448','粉红玫瑰','1a3b0fbbb00b445a9da229287cd70a3b','粉色玫瑰 (篮子)',455.5,'http://photo.dragonsking.cn/2020/04/08/aef97a447f0b4.jpg',0,'2020-05-14 18:40:43','2020-05-14 10:40:42'),('1251cab68fd44834848726cda301bf52','af9982f11572f','绣球花','1f796c20aff845569fa5f53b9baca2d0','一朵',10,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-14 18:42:14','2020-05-14 10:42:14'),('1302932c50404fe7abfb0c54ef1f1096','af9982f11572f','绣球花','25eb013649474dd68ca6a0ebf5d0e929','插花',50,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-14 18:44:36','2020-05-14 10:44:35'),('1c0f633d874148a8b6286b986ca4873b','af9982f11572f','绣球花','d530e240f756466cb9bc841f5deb471c','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-14 16:51:28','2020-05-14 08:51:27'),('3efb636048744b62b6087a428f30e05f','af9982f11572f','绣球花','1f796c20aff845569fa5f53b9baca2d0','一朵',10,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-14 16:54:33','2020-05-14 08:54:33'),('496d16c4dbe5455cbfda07762d8419ac','af9982f11572f','绣球花','d530e240f756466cb9bc841f5deb471c','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',2,'2020-05-15 11:10:12','2020-05-15 03:11:09'),('5570f8900ddb48f29e6756e568cfedb3','af9982f11572f','绣球花','d530e240f756466cb9bc841f5deb471c','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-14 18:42:00','2020-05-14 10:41:59'),('5746bb2a98474e3cbb1458b46b26c7d4','af9982f11572f','绣球花','791095516ce942919bdd3d2d15e9a00e','两束',100,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-23 09:30:11','2020-05-23 01:30:10'),('6b77addad29d467e9bbf9341485a7605','0bbc755f6179c','吸染蓝玫瑰','e9784a8d4cf64f12a344b425b57aa388','浪漫红玫瑰',995.5,'http://photo.dragonsking.cn/2020/04/08/c2d6b621548fd.jpg',0,'2020-05-14 19:32:23','2020-05-14 11:32:23'),('6c0a7abf3a78439fa98238177c75338f','0bbc755f6179c','吸染蓝玫瑰','e9784a8d4cf64f12a344b425b57aa388','浪漫红玫瑰',995.5,'http://photo.dragonsking.cn/2020/04/08/c2d6b621548fd.jpg',0,'2020-05-14 18:40:43','2020-05-14 10:40:42'),('70ba8af3277642ae8dadacb18e0b1250','af9982f11572f','绣球花','25eb013649474dd68ca6a0ebf5d0e929','插花',50,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-14 18:43:19','2020-05-14 10:43:19'),('7e43bbdf576347e4a6f9a86b8661015d','af9982f11572f','绣球花','25eb013649474dd68ca6a0ebf5d0e929','插花',50,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-15 10:13:55','2020-05-15 02:13:55'),('80669e17b7f4482b9d64f883f22f8df0','f0f1a6e989448','粉红玫瑰','885ad065abaa49a08c303aba5255b2a7','粉色玫瑰',355.5,'http://photo.dragonsking.cn/2020/04/08/f0f1a6e989448.jpg',0,'2020-05-14 18:40:52','2020-05-14 10:40:51'),('86107603d36749919472852706ca84c6','af9982f11572f','绣球花','d530e240f756466cb9bc841f5deb471c','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-15 10:13:25','2020-05-15 02:13:25'),('8ae3613e0bbe44fea9a8171ad3ec4060','0bbc755f6179c','吸染蓝玫瑰','e9784a8d4cf64f12a344b425b57aa388','浪漫红玫瑰',995.5,'http://photo.dragonsking.cn/2020/04/08/c2d6b621548fd.jpg',1,'2020-05-15 10:31:52','2020-05-15 02:32:44'),('ac1be0492f164a3580e03e57c9845def','f0f1a6e989448','粉红玫瑰','885ad065abaa49a08c303aba5255b2a7','粉色玫瑰',355.5,'http://photo.dragonsking.cn/2020/04/08/f0f1a6e989448.jpg',0,'2020-05-14 18:26:22','2020-05-14 10:26:22'),('b2dfc39c2e274b1884e120ee44f8874b','af9982f11572f','绣球花','657dd69d9a5449eca8e41388fe0895b7','10束',1000,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-22 23:57:45','2020-05-22 15:57:44'),('bb061efafdd845e9be8e7c08b0702c7d','af9982f11572f','绣球花','1f796c20aff845569fa5f53b9baca2d0','一朵',10,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-14 18:40:25','2020-05-14 10:40:25'),('c29a4f4ccc9743fb932ace1b1889966a','af9982f11572f','绣球花','d530e240f756466cb9bc841f5deb471c','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',1,'2020-05-14 16:43:49','2020-05-14 08:53:15'),('d3459e66eb83481e84ed4d12831747e6','0bbc755f6179c','吸染蓝玫瑰','e9784a8d4cf64f12a344b425b57aa388','浪漫红玫瑰',995.5,'http://photo.dragonsking.cn/2020/04/08/c2d6b621548fd.jpg',0,'2020-05-14 20:54:12','2020-05-14 12:54:12'),('dcb4950ed26b43228e200e3cbfeeaf64','0bbc755f6179c','吸染蓝玫瑰','e9784a8d4cf64f12a344b425b57aa388','浪漫红玫瑰',995.5,'http://photo.dragonsking.cn/2020/04/08/c2d6b621548fd.jpg',0,'2020-05-14 20:49:42','2020-05-14 12:49:41'),('e42541b5e1b14302aeabb976bb6afa66','af9982f11572f','绣球花','1f796c20aff845569fa5f53b9baca2d0','一朵',10,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-15 10:30:48','2020-05-15 02:30:48'),('f9a1fc3b88574713b9549f418495acac','af9982f11572f','绣球花','791095516ce942919bdd3d2d15e9a00e','两束',100,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg',0,'2020-05-23 09:30:30','2020-05-23 01:30:29');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` varchar(255) NOT NULL,
  `product_id` varchar(255) NOT NULL COMMENT '查询商品的主要 id',
  `name` varchar(255) NOT NULL COMMENT '商品名字',
  `brief` varchar(255) NOT NULL COMMENT '商品简介',
  `content` varchar(255) NOT NULL COMMENT 'Markdown格式, 商品介绍',
  `sku_ids` varchar(255) NOT NULL COMMENT '关联 sku表的id, 进行规格选择',
  `photo` varchar(255) DEFAULT NULL COMMENT '存放商品介绍图片路径',
  `created_date` datetime DEFAULT NULL,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `price` float DEFAULT NULL COMMENT '根据 sku来维护的字段, 无需手动编辑添加',
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('396a79e466e341b3b794ba8a431f7818','9ce5a98600445','迎春花1','新年来临, 暗红的迎春花, 能够带来喜庆之余又不会过于抢眼~','','ab0ac185a40e4832a69a40e86133025c','http://photo.dragonsking.cn/2020/04/08/9ce5a98600445.jpg','2020-04-23 18:38:18','2020-05-13 02:53:04',80),('747c65c2d3e4428c9faf45ce42bbc9ee','a9efaae871bdd','红橙玫瑰花礼','给出不一样的感觉, 不鲜艳, 不抢色, 很舒适的风格~','','','http://photo.dragonsking.cn/2020/04/08/c04a17222a300.jpg','2020-04-10 16:29:00','2020-04-24 07:40:15',253),('87c71a797e284c6fab2b2ea68eb45fa1','af9982f11572f','绣球花','淡淡的花色, 不会抢新人的美颜...','','d530e240f756466cb9bc841f5deb471c,25eb013649474dd68ca6a0ebf5d0e929,1f796c20aff845569fa5f53b9baca2d0,791095516ce942919bdd3d2d15e9a00e,657dd69d9a5449eca8e41388fe0895b7','http://photo.dragonsking.cn/2020/04/08/af9982f11572f.jpg','2020-04-12 17:02:50','2020-05-15 03:11:46',80),('99131c2f836a42ec91a6049408115a0c','0bbc755f6179c','吸染蓝玫瑰','手动把玫瑰染成小天蓝, 更加独特, 更加迷人, 不一样的秀丽~','','e9784a8d4cf64f12a344b425b57aa388,61ae9c1f846748738c6f522f9ccca2a8','http://photo.dragonsking.cn/2020/04/08/0bbc755f6179c.jpg','2020-04-10 16:21:02','2020-04-12 03:19:24',995.5),('a1cc84b018f048e3bad49d096d1be2f9','c2d6b621548fd','浪漫红玫瑰','红玫瑰, 情人节花礼, 进口花品种, 更持久...','','7715c486e12c4c86a3968e1a99ceb05e','http://photo.dragonsking.cn/2020/04/08/c2d6b621548fd.jpg','2020-04-08 16:31:45','2020-04-12 03:19:41',385.5),('cded91a05ecb4702829e9135b9bf32d2','f0f1a6e989448','粉红玫瑰','粉红玫瑰, 情人节, 母亲节花礼','','885ad065abaa49a08c303aba5255b2a7,1a3b0fbbb00b445a9da229287cd70a3b','http://photo.dragonsking.cn/2020/04/08/f0f1a6e989448.jpg','2020-04-08 14:51:01','2020-04-12 03:19:55',355.5);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_tag`
--

DROP TABLE IF EXISTS `product_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_tag` (
  `id` varchar(255) NOT NULL,
  `tag_name` varchar(255) NOT NULL COMMENT '商品标签名字',
  `product_id` varchar(255) NOT NULL COMMENT '商品的 id号码, 关联表',
  `created_date` datetime DEFAULT NULL,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_tag`
--

LOCK TABLES `product_tag` WRITE;
/*!40000 ALTER TABLE `product_tag` DISABLE KEYS */;
INSERT INTO `product_tag` VALUES ('2f363999694c430ba271beda86bf030c','mix','0bbc755f6179c','2020-04-12 15:52:53','2020-04-12 07:55:18'),('65dab154253c464abe5a8f532003a4b2','limit','af9982f11572f','2020-04-12 17:11:13','2020-04-12 09:11:13'),('a2a77d42b54943d281151c0083e443d4','nature','f0f1a6e989448','2020-04-12 15:54:30','2020-04-12 07:54:29'),('b6b04283b8be485c9246c9d752efa772','limit','a9efaae871bdd','2020-04-03 17:09:19','2020-04-10 12:06:54'),('b9c5a841748444e093f45c7289607239','single','a9efaae871bdd','2020-04-03 17:16:08','2020-04-10 12:06:54');
/*!40000 ALTER TABLE `product_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sku`
--

DROP TABLE IF EXISTS `sku`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sku` (
  `id` varchar(255) NOT NULL,
  `standard` varchar(255) NOT NULL COMMENT '商品规格 (单 sku)',
  `price` float NOT NULL COMMENT '商品规格对应的价格',
  `photo` varchar(255) DEFAULT NULL COMMENT '存放介绍图片路径',
  `created_date` datetime DEFAULT NULL,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sku`
--

LOCK TABLES `sku` WRITE;
/*!40000 ALTER TABLE `sku` DISABLE KEYS */;
INSERT INTO `sku` VALUES ('12fdb83a6cf347ff92b7e576a0e01756','大份',53.3,'/','2020-04-03 16:58:06','2020-04-03 08:58:29'),('1a3b0fbbb00b445a9da229287cd70a3b','粉色玫瑰 (篮子)',455.5,'http://photo.dragonsking.cn/2020/04/08/aef97a447f0b4.jpg','2020-04-08 16:24:15','2020-04-08 08:24:15'),('1f796c20aff845569fa5f53b9baca2d0','一朵',10,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-05-14 16:54:14','2020-05-14 08:54:14'),('25eb013649474dd68ca6a0ebf5d0e929','插花',50,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-05-13 10:53:56','2020-05-13 02:53:55'),('55234020857d4797b38a3503fbe5101a','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-04-23 19:06:50','2020-04-23 11:06:50'),('568aa05e27c4479894ade160f9b5b1f5','单束',8,'http://photo.dragonsking.cn/2020/04/08/e1340f28bf4a3.jpg','2020-04-23 19:01:09','2020-04-23 11:01:08'),('56ecf04172574cd19c66dbe906063d0d','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-04-23 19:03:16','2020-04-23 11:03:15'),('61ae9c1f846748738c6f522f9ccca2a8','浪漫红玫瑰 (手捧花)',795.5,'http://photo.dragonsking.cn/2020/04/08/b419ded5c198a.jpg','2020-04-08 16:33:01','2020-04-08 08:33:01'),('657dd69d9a5449eca8e41388fe0895b7','10束',1000,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-05-15 11:11:46','2020-05-15 03:11:46'),('7715c486e12c4c86a3968e1a99ceb05e','吸染蓝玫瑰',385.5,'http://photo.dragonsking.cn/2020/04/08/96078c27f10bc.jpg','2020-04-10 16:22:09','2020-04-10 08:22:09'),('791095516ce942919bdd3d2d15e9a00e','两束',100,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-05-15 10:33:34','2020-05-15 02:33:33'),('885ad065abaa49a08c303aba5255b2a7','粉色玫瑰',355.5,'http://photo.dragonsking.cn/2020/04/08/f0f1a6e989448.jpg','2020-04-08 14:52:53','2020-04-08 06:52:53'),('899710f8e4f04f7189754cdc485da515','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-04-23 19:04:48','2020-04-23 11:04:47'),('ab0ac185a40e4832a69a40e86133025c','手提',100,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-05-13 10:53:04','2020-05-13 02:53:04'),('d530e240f756466cb9bc841f5deb471c','手提',80,'http://photo.dragonsking.cn/2020/04/08/606ea57aef693.jpg','2020-04-12 17:04:24','2020-04-12 09:04:24'),('e556402c6f26416986d9acb7eaa83298','红橙花篮 (干)',277,'http://photo.dragonsking.cn/2020/04/08/9e4a539363014.jpg','2020-04-10 16:31:03','2020-04-23 09:59:14'),('e9784a8d4cf64f12a344b425b57aa388','浪漫红玫瑰',995.5,'http://photo.dragonsking.cn/2020/04/08/c2d6b621548fd.jpg','2020-04-08 16:32:19','2020-04-08 08:32:19'),('f9ee2ebd1c81433d8467bdfd01ba23e0','红橙玫瑰',345,'http://photo.dragonsking.cn/2020/04/08/27c160047f059.jpg','2020-04-10 16:29:59','2020-04-23 09:53:29');
/*!40000 ALTER TABLE `sku` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL COMMENT '登陆名称用手机做唯一',
  `password` varchar(255) NOT NULL COMMENT '登陆密码',
  `name` varchar(255) DEFAULT NULL COMMENT '用户名称',
  `role` int(11) NOT NULL COMMENT '0: 普通用户; 1: 管理员',
  `order_ids` varchar(500) DEFAULT NULL COMMENT '普通用户订单号列表',
  `cart_ids` varchar(500) DEFAULT NULL COMMENT '购物车的列表',
  `created_date` datetime DEFAULT NULL,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatar` varchar(255) DEFAULT NULL COMMENT '用户头像 URL',
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('0882ce9737bd4ef1b9380f8fac2b6272','13726300685','d0bfe475713627a28c83bf53d4fd18ab508f47d2164d1fb47fda6063a1553c77','test',0,NULL,NULL,'2020-05-26 18:58:28','2020-05-26 10:58:28',NULL),('5b2bf9f3d06f43ce88924951292617d3','13160666721','d0bfe475713627a28c83bf53d4fd18ab508f47d2164d1fb47fda6063a1553c77','Reeyoung',0,'b2dfc39c2e274b1884e120ee44f8874b,496d16c4dbe5455cbfda07762d8419ac,0837746fcf954950a4dc7680862e34a2,8ae3613e0bbe44fea9a8171ad3ec4060,e42541b5e1b14302aeabb976bb6afa66,7e43bbdf576347e4a6f9a86b8661015d,86107603d36749919472852706ca84c6,d3459e66eb83481e84ed4d12831747e6,dcb4950ed26b43228e200e3cbfeeaf64,05bb5843b26843588b9af3e3be24b5e2,70ba8af3277642ae8dadacb18e0b1250,bb061efafdd845e9be8e7c08b0702c7d,ac1be0492f164a3580e03e57c9845def,c29a4f4ccc9743fb932ace1b1889966a,3efb636048744b62b6087a428f30e05f','','2020-04-03 17:11:46','2020-05-23 01:30:58','http://photo.dragonsking.cn/2020/04/29/b4035c0b88ebc.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-27  8:55:21
