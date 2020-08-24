DROP DATABASE IF EXISTS as2j0yeoa35dcgfn;

CREATE DATABASE as2j0yeoa35dcgfn;

USE as2j0yeoa35dcgfn;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NULL,
  devoured boolean not null,
  createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (id)
);
