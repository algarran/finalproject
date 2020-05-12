DROP DATABASE IF EXISTS gifts_db;
CREATE DATABASE gifts_db;

USE gifts_db;

CREATE TABLE gifts (
	id INTEGER AUTO_INCREMENT NOT NULL,
  gift_name varchar(255) NOT NULL,
  gift_style varchar(255) NOT NULL,
  PRIMARY KEY (id)
);