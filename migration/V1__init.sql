CREATE TABLE tn_member (
    id bigint generated by default as identity,
    email clob,
    password VARCHAR(200) NULL,
    name VARCHAR(45) NULL,
    address1 VARCHAR(100) NULL,
    address2 VARCHAR(100) NULL,
    address3 VARCHAR(100) NULL,
    phone VARCHAR(45) NULL,
    role VARCHAR(45),
    last_login_date timestamp,
    created_by VARCHAR(255) NULL DEFAULT 'null',
    created_date DATETIME(6) NULL DEFAULT NULL,
    last_modified_by VARCHAR(255) NULL DEFAULT 'null',
    last_modified_date DATETIME(6) NULL DEFAULT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE tn_product (
    id BIGINT auto_increment,
    title VARCHAR(45) NULL,
    price INT NULL,
    img_path VARCHAR(255) NULL,
    category VARCHAR(255) NULL,
    stock INT NULL,
    created_by VARCHAR(255) NULL DEFAULT 'null',
    created_date DATETIME(6) NULL DEFAULT NULL,
    last_modified_by VARCHAR(255) NULL DEFAULT 'null',
    last_modified_date DATETIME(6) NULL DEFAULT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE tn_order (
    id BIGINT auto_increment,
    member_id BIGINT NULL,
    date DATE NULL,
    address1 VARCHAR(100) NULL,
    address2 VARCHAR(100) NULL,
    address3 VARCHAR(100) NULL,
    receiver_name VARCHAR(45) NULL,
    receiver_phone VARCHAR(45) NULL,
    total_price INT NULL,
    created_by VARCHAR(45) NULL DEFAULT 'null',
    created_date DATETIME(6) NULL DEFAULT NULL,
    last_modified_by VARCHAR(45) NULL DEFAULT 'null',
    last_modified_date DATETIME(6) NULL DEFAULT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_member_order
      FOREIGN KEY (member_id)
          REFERENCES tn_member (id)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION
);
CREATE TABLE tn_cart (
    id BIGINT auto_increment,
    product_id BIGINT NULL,
    member_id BIGINT NULL,
    product_count INT NULL,
    created_by VARCHAR(45) NULL DEFAULT 'null',
    created_date DATETIME(6) NULL DEFAULT NULL,
    last_modified_by VARCHAR(45) NULL DEFAULT 'null',
    last_modified_date DATETIME(6) NULL DEFAULT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_member_cart
     FOREIGN KEY (member_id)
         REFERENCES tn_member (id)
         ON DELETE NO ACTION
         ON UPDATE NO ACTION,
    CONSTRAINT fk_product_cart
     FOREIGN KEY (product_id)
         REFERENCES tn_product (id)
         ON DELETE NO ACTION
         ON UPDATE NO ACTION
);
CREATE TABLE tn_category (
    id BIGINT auto_increment,
    name VARCHAR(45) NULL,
    created_by VARCHAR(45) NULL DEFAULT 'null',
    created_date DATETIME(6) NULL DEFAULT NULL,
    last_modified_by VARCHAR(45) NULL DEFAULT 'null',
    last_modified_date DATETIME(6) NULL DEFAULT NULL,
    parent_id INT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE ti_categoty_product (
    id BIGINT auto_increment,
    category_id BIGINT NULL,
    product_id BIGINT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_category_category_product
     FOREIGN KEY (category_id)
         REFERENCES tn_category (id)
         ON DELETE NO ACTION
         ON UPDATE NO ACTION,
    CONSTRAINT fk_product_category_product
     FOREIGN KEY (product_id)
         REFERENCES tn_product (id)
         ON DELETE NO ACTION
         ON UPDATE NO ACTION
);
CREATE TABLE ti_order_product (
    id BIGINT auto_increment,
    order_id BIGINT NULL,
    product_id BIGINT NULL,
    count INT NULL,
    sale_price INT NULL,
    status VARCHAR(45) NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_order_order_product
      FOREIGN KEY (order_id)
          REFERENCES tn_order (id)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION,
    CONSTRAINT fk_product_order_product
      FOREIGN KEY (product_id)
          REFERENCES tn_product (id)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION
);
CREATE TABLE payment (
    id BIGINT auto_increment,
    pg VARCHAR(255) NULL,
    type VARCHAR(255) NULL,
    data TEXT NULL,
    datetime DATETIME NULL,
    ip VARCHAR(255) NULL,
    total_price VARCHAR(45) NULL,
    sale_price VARCHAR(45) NULL,
    order_id BIGINT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_order_payment
     FOREIGN KEY (order_id)
         REFERENCES tn_order (id)
         ON DELETE NO ACTION
         ON UPDATE NO ACTION
);
CREATE TABLE product_imgfile (
    id BIGINT auto_increment,
    product_id BIGINT NULL,
    name VARCHAR(45) NULL,
    created_date DATETIME(6) NULL,
    created_by VARCHAR(45) NULL,
    last_modified_by VARCHAR(45) NULL,
    last_modified_date DATETIME(6) NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_porduct_imgfile
     FOREIGN KEY (product_id)
         REFERENCES tn_product (id)
         ON DELETE NO ACTION
         ON UPDATE NO ACTION
);
INSERT INTO tn_product (category,img_path, title, price, stock) VALUES ('상의','images/product/yaleHoodieGray','예일후드티셔츠',39000,100), ('하의','images/product/brandedJeans','브랜디드진',59000,100), ('신발','images/product/vansOldSkool','반스올드스쿨',49000,100), ('모자','images/product/mlbCap','MLB볼캡',29000,100), ('아우터','images/product/musinsaBasicBlazer','무신사베이식블레이저',69000,100);