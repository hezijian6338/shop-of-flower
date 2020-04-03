CREATE TABLE `cart` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `product_id` varchar(255) NOT NULL COMMENT '商品的查询 id',
  `name` varchar(255) NOT NULL COMMENT '商品的名称',
  `sku_id` varchar(255) NOT NULL COMMENT '规格选择的 id',
  `standard` varchar(255) NOT NULL COMMENT '规格内容',
  `price` float NOT NULL COMMENT '规格价钱',
  `photo` varchar(255) DEFAULT NULL COMMENT '规格对应的图片路径',
  `created_date` datetime NOT NULL COMMENT '创建时间',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  COMMENT '修改时间'
);

CREATE TABLE `order` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `product_id` varchar(255) NOT NULL COMMENT '商品的查询 id',
  `name` varchar(255) NOT NULL COMMENT '商品的名称',
  `sku_id` varchar(255) NOT NULL COMMENT '规格选择的 id',
  `standard` varchar(255) NOT NULL COMMENT '规格内容',
  `price` float NOT NULL COMMENT '规格价钱',
  `photo` varchar(255) NOT NULL COMMENT '规格对应的图片路径',
  `state` int(11) NOT NULL COMMENT '商品状态: 0: 下单成功; 1: 制作中; 2: 制作完成',
  `created_date` datetime NOT NULL COMMENT '下单时间',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '订单状态修改时间'
);

CREATE TABLE `product` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `product_id` varchar(255) NOT NULL COMMENT '查询商品的主要 id',
  `name` varchar(255) NOT NULL COMMENT '商品名字',
  `brief` varchar(255) NOT NULL COMMENT '商品简介',
  `content` varchar(255) NOT NULL COMMENT 'Markdown格式, 商品介绍',
  `sku_ids` varchar(255) NOT NULL COMMENT '关联 sku表的id, 进行规格选择',
  `photo` varchar(255) DEFAULT NULL COMMENT '存放商品介绍图片路径',
  `created_date` datetime NOT NULL,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `sku` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `standard` varchar(255) NOT NULL COMMENT '商品规格 (单 sku)',
  `price` float NOT NULL COMMENT '商品规格对应的价格',
  `photo` varchar(255) DEFAULT NULL COMMENT '存放介绍图片路径',
  `created_date` datetime NOT NULL,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `product_tag` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `tag_name` varchar(255) NOT NULL COMMENT '商品标签名字',
  `product_id` varchar(255) NOT NULL COMMENT '商品的 id号码, 关联表',
  `created_date` datetime NOT NULL,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `user` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `phone` varchar(11) NOT NULL COMMENT '登陆名称用手机做唯一',
  `password` varchar(255) NOT NULL COMMENT '登陆密码',
  `name` varchar(255) DEFAULT NULL COMMENT '用户名称',
  `role` int(11) NOT NULL COMMENT '0: 普通用户; 1: 管理员',
  `order_ids` varchar(255) DEFAULT NULL COMMENT '普通用户订单号列表',
  `cart_ids` varchar(255) DEFAULT NULL COMMENT '购物车的列表',
  `created_date` datetime NOT NULL,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE `product_tag` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

ALTER TABLE `cart` ADD FOREIGN KEY (`sku_id`) REFERENCES `sku` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`sku_id`) REFERENCES `sku` (`id`);

CREATE INDEX `sku_id` ON `cart` (`sku_id`);

CREATE INDEX `sku_id` ON `order` (`sku_id`);

CREATE UNIQUE INDEX `product_id` ON `product` (`product_id`);

CREATE UNIQUE INDEX `tag_name` ON `product_tag` (`tag_name`);

CREATE UNIQUE INDEX `phone` ON `user` (`phone`);
