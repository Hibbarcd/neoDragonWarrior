DROP DATABASE IF EXISTS character_POS_DB;


CREATE DATABASE character_POS_DB;
USE character;

CREATE TABLE position (
item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  created_at DATETIME NOT NULL,
  position INT NOT NUll,
  direction VARCHAR,
  HP INT,
  MP INT,
  gold INT,
  items VARCHAR

  PRIMARY KEY ( item_id ) 
);