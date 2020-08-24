DROP DATABASE IF EXISTS w7vvbhpbhr5s6h4t;

CREATE DATABASE w7vvbhpbhr5s6h4t;

USE w7vvbhpbhr5s6h4t;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NULL,
  devoured boolean not null,
  createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (id)
);
