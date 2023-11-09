use minet1;
CREATE TABLE IF NOT EXISTS crypto_holding (
  id VARCHAR(45) NOT NULL,
  user_id VARCHAR(45) NULL,
  crypto_id VARCHAR(45) NULL,
  quantity int NOT NULL,
  purchase_price double NULL,
  sell_price double NULL,
  broker_name VARCHAR(45) NOT NULL,
  purchase_date timestamp NULL,
  sell_date timestamp NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS transaction (
  id VARCHAR(45) NOT NULL,
  status VARCHAR(45) NULL,
  type VARCHAR(45) NULL,
  crypto_holding_id VARCHAR(45) NULL,
  transaction_date TIMESTAMP NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_crypto_holding FOREIGN KEY (crypto_holding_id) REFERENCES crypto_holding (id)
) ENGINE = InnoDB;