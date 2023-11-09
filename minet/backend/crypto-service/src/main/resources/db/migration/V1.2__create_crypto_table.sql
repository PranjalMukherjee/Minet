use minet1;
CREATE TABLE IF NOT EXISTS crypto (
  id VARCHAR(45) NOT NULL,
  symbol VARCHAR(45) NOT NULL,
  name VARCHAR(45) NOT NULL,
  image VARCHAR(200) NOT NULL,
  current_price double NOT NULL,
  market_cap double NOT NULL,
  total_volume double NULL,
  price_change_percentage24h double NULL,
  circulating_supply double NULL,
  total_supply double NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS watchlist (
  id VARCHAR(45) NOT NULL,
  user_id VARCHAR(45) NOT NULL,
  crypto_id VARCHAR(45) NOT NULL,
  watchlist BOOLEAN NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_crypto FOREIGN KEY (crypto_id) REFERENCES crypto (id)
) ENGINE = InnoDB;
