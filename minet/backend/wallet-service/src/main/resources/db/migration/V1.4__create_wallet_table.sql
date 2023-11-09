use minet1;

CREATE TABLE IF NOT EXISTS wallet (
  id VARCHAR(45) NOT NULL,
  user_id VARCHAR(45) NULL,
  balance VARCHAR(45) NULL,
  last_modified_date timestamp NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB;