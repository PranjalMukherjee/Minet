import Api from "../utils/Api";

export const getCoins = async () => {

  const response = await Api.get(`/crypto/coins`);
  return response?.data;
};

export const getWatchlistByUser = async (userId: string | null) => {
  const response = await Api.get(`/crypto/watchlist?userId=${userId}`);
  return response?.data;
};

