import Api from "../utils/Api";


export const fetchWalletData = async (userId: string | null) => {
  const response = await Api.get(`/wallet/${userId}`);
  return response?.data;
};
export const updateWalletData = async (
  userId: string | null,
  balance: number
) => {
  const response = await Api.patch(`/wallet/${userId}?balance=${balance}`);
  return response.data;
};
export const getCoinById = async (coinId: string) => {
  const response = await Api.get(`/crypto/coins/${coinId}`);
  return response.data;
};

export const addWatchlist = async (
  userId: string | null,
  coinId: string,
  watchlist: boolean
) => {
  const response = await Api.post(`/crypto/watchlist`, {
    userId: userId,
    coinId: coinId,
    watchlist: watchlist,
  });
  return response?.data;
};

export const updateWatchlist = async (
  userId: string,
  coinId: string,
  watchlist: boolean
) => {
  const response = await Api.patch(`/crypto/watchlist`, {
    userId: userId,
    coinId: coinId,
    watchlist: watchlist,
  });

  return response.data;
};


export const singUpToApp = async (
  email?: string,
  password?: string,
  fullName?: string
) => {
  const response = await Api.post(`/users/register`, {
    email: email,
    password: password,
    fullname: fullName,
  });
  return response.data;
};
export const signInToApp = async (email?: string, password?: string) => {
  const response = await Api.post(`/users/token`, {
    email: email,
    password: password,
  });
  return response.data;
};
export const findUserByEmail = async (email?: string) => {
  const response = await Api.get(`/users/email`, {
    params: { email: email },
  });
  return response.data;
};

