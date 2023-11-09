import { CryptoHolding, Transaction } from "../utils/type";
import Api from "../utils/Api";

export const getTransactions = async () => {
  const response = await Api.get(`/portfolio/transaction`);

  return response?.data;
};
export const postTransaction = async (transaction: Transaction) => {
  const response = await Api.post(`/portfolio/transaction`, transaction);
  return response?.data;
};
export const postCrypto = async (cryptoHolding: CryptoHolding) => {
  const response = await Api.post(`/portfolio/crypto`, cryptoHolding);
  return response;
};
export const getAllCrypto = async () => {
  const response = await Api.get(`/portfolio/crypto`);
  return response?.data;
};
