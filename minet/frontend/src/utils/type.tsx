export type WalletType = [
  {
    id: number;
    status: string;
    date: string;
    transaction_type: string;
    coin_name: string;
    purchase_price: number;
    quantity: number;
    symbol: string;
    sold: boolean;
    user_id: number;
  }
];
export type CoinDetails = {
  id: string;
  name: string;
  image: string;
  symbol: string;
  circulating_supply: number;
  price_change_percentage_24h: number;
  isPriceCorrelation: boolean;
  market_cap: number;
  total_volume: number;
  current_price: number;
  is_watchlisted: boolean;
};
export type PortfolioService = {
  status: string;
  date: string;
  type: string;
  cryptoHoldingId: string;
  id: string;
  purchasePrice: number;
  purchaseDate: string;
  sellPrice: number;
  sellDate: string;
  quantity: number;
  name: string;
  symbol: string;
  userId: string;
  cryptoId: string;
  brokerName: string;
};
export type CryptoHolding = {
  purchasePrice: number | null;
  purchaseDate: string | null;
  sellPrice: number | null;
  sellDate: string | null;
  quantity: number | number[];
  userId: string | null;
  cryptoId: string;
  brokerName: string;
};
export type Transaction = {
  status: string;
  date: string;
  type: string;
  cryptoHoldingId: string;
};
