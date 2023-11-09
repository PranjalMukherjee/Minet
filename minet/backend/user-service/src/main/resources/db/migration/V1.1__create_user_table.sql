use minet1;
CREATE TABLE IF NOT EXISTS user (
  id VARCHAR(45) NOT NULL,
  full_name VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  password VARCHAR(45) NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


