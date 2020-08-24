DROP DATABASE IF EXISTS gpvf1zbdi5109if8;

CREATE DATABASE gpvf1zbdi5109if8;

USE gpvf1zbdi5109if8;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NULL,
  devoured boolean not null,
  createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (id)
);
