DROP DATABASE IF EXISTS character_DB;


CREATE DATABASE character_DB;
USE character_DB;

CREATE TABLE Characters (
  user_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  position INT NOT NUll,
  direction VARCHAR(255),
  walkIndex INT,
  HP INT,
  MP INT,
  gold INT,
  items VARCHAR(255)
);

CREATE TABLE Items (
  item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  user_id INT REFERENCES NOT NULL Characters(user_id),
  name VARCHAR(255),
  ability VARCHAR(255)
);

INSERT INTO Characters (user_id, position, direction, HP, MP, gold, items) Values ('10011001','640,0','SOUTH','0','30','10','50');
