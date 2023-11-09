/* eslint-disable @typescript-eslint/no-explicit-any */
import { OutlinedInputProps, SxProps, TypographyProps } from "@mui/material";
import React from "react";

export interface ITotalBalanceProps {
  name: string;
  icon: string;
  balance: string;
}

export interface IPaymentMethodProps {
  cost: string;
}
export interface IRecentCardProps {
  date: string;
  name: string;
  sold: boolean;
  symbol: string;
  quantity: string | number;
  cost: string | number;
  type: string;
  status: string;
}
export interface ChipProp {
  chipLabel: string;
  style?: React.CSSProperties | object;
  onClick?: () => void;
}
export interface ImageProp {
  sourceImage: string;
  style?: React.CSSProperties | object;
  onClick?: () => void;
}

export interface IPaymentMethodProps {
  cost: string;
}

export interface ICorrelationType {
  id: number;
  icon: string;
  name: string;
  description: string;
  cost: string;
  percent: string;
}

export interface IForgetPasswordProps {
  onClick: () => void;
}

export default interface InputFieldProp extends OutlinedInputProps {
  inputId?: string;
  isRequired?: boolean;
  placeholder?: string;
  borderColor?: string;
  icon?: React.ReactNode;
}

export interface TradeCardProp {
  id?: number;
  cyptoDetail: {
    heading: string;
    icon: string;
    subHeading: string;
  };
  price?: string;
  change?: string;
  marketCap?: string;
  watchListed?: boolean;
  onClick?: () => void;
  handleRedirect?: () => void;
}

export interface IWalletTransaction {
  transactionStatus: string;
  cryptoName: string;
  crytoAction: string;
  name: string;
  month: string;
  date: string;
  cost: string | number;
  symbol: string;
  income: string;
}

export interface CyptoProps {
  valuePerOneCoin: number;
  profitOrLossPercentage: number;
  name: string;
  icon: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface DividerProps {
  direction: "horizontal" | "vertical";
  children?: React.ReactNode;
  sx?: object;
}

export interface IconProps {
  src: string;
  alt: string;
  style?: React.CSSProperties | object;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface ItemProps {
  id: number;
  name: string;
  disabled: boolean;
}

export interface TabsProps {
  tabItems: ItemProps[];
  sx?: SxProps;
  activeIndex?: number;
  handleChange?: (e: React.SyntheticEvent, newValue: number) => void;
  value?: number;
}
export interface InputLabelProps {
  variant?: TypographyProps["variant"];
  label?: string;
  placeholder?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  type?: string;
  icon?: React.ReactNode;
}

export interface ResourceType {
  id: number;
  icon: string;
  label: string;
}

export interface IBannerProps {
  name: string;
  description: string;
  resources: ResourceType[];
  items: ICorrelationType[];
}
export interface CryptoCardProps {
  isChecked: boolean;
  currencyImage: string;
  currencyName: string;
  currencyValue: string;
  handleClick?: () => void;
}
export interface TransactionSuccessProps {
  goToUSDCoin?: () => void;
  amount: string;
  message: string;
  coinLabel: string;
}

export interface OriginalData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  is_watchlisted: boolean;
}
export interface ConvertedCryptoData {
  id: string;
  icon: string;
  name: string;
  unitPrice: 0;
  isChecked: boolean;
}

export interface CryptoCard {
  id: string;
  name: string;
  icon: string;
  percent: number;
  cost: number;
}

export interface IWatchListProps {
  watchList: CryptoCard[];
}

export interface IHeaderProps {
  title: string;
  buttons?: boolean;
  handleSell?: React.MouseEventHandler<HTMLButtonElement>;
  handleBuy?: React.MouseEventHandler<HTMLButtonElement>;
  sellDisabled?: boolean;
  buyDisabled?: boolean;
}

export interface ISubHeder {
  id: string;
  icon: string;
  symbol: string;
  cryptoName: string;
  marketCap: number;
  volume: number;
  circulatingSupply: number;
  growthRate: number;
  isPriceCorrelation: boolean;
  watchlisted?: boolean;
}

export interface IDetailsProps extends IHeaderProps {
  body1: React.ReactNode;
  dashboard?: boolean;
  body2?: React.ReactNode;
}
export interface IAmountDetail {
  cryptoPrice: number;
  cryptoQuantity: number | number[];
  cryptoAction: string;
  symbol: string;
  handleSliderChange?: () => void;
  setQuantity: React.Dispatch<React.SetStateAction<number | number[]>>;
  maximumValue: number
}

export interface ITransactionCardProps {
  headerStatement: string;
  amount: string;
  unit: string;
  handleTransaction: () => void;
  paymentSource: string;
  deliveryFees: string;
  deposit: string;
  totalCurrencyAmount: string;
  totalAmount: string;
  buttonLabel: string;
  totalCurrencyQuantity: string;
  enableButton?: boolean;
}

export interface IMyWallet {
  cost?: string;
  recentTransaction: React.ReactNode;
}
export interface IMyPortfolio {
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  id: string;
}
export interface IWalletBody {
  showWallet: boolean;
  coinAmount?: number | string;
  coinName?: string;
  totalBalance: number | undefined;
  header: boolean;
  coinValue?: number | string;
  showAllTranscation: boolean;
}

export interface IPortfolioGraphProps {
  legends: boolean;
  totalCost?: string | number;
  totalPercent?: string;
  coinName?: string;
  coinCost: string;
  coinPercent: string;
  graphData: Array<{
    id: string;
    color: string;
    data: Array<{
      x: string | number;
      y: number | string;
    }>;
  }>;
}
export interface IDashboardProps {
  totalInvestment: number;
}
export interface ICrypto {
  coins?: Array<{
    id: string;
    icon: string;
    name: string;
    oneCryptoPrice: string;
    isChecked: boolean;
  }>;
  transaction_type?: string;
  handleClick?: () => void;
  selectedCoin?: string;
  setUnitPrice: React.Dispatch<number>;
  setSymbol: React.Dispatch<string>;
  setCoinName: React.Dispatch<string>;
}
export interface IAssetTable {
  selectedTab: number;
}
export interface IDetailsPage {
  showTab?: boolean;
  tabValue?: number;
}

export interface OriginalTransaction {
  id: number;
  status: string;
  date: string;
  transaction_type: string;
  coin_name: string;
  purchase_price: number;
  purchase_date: string;
  quantity: number;
  symbol: string;
  user_id: number;
  crypto_id: string;
  broker_name: string;
}

export interface WatchlistType {
  id: string;
  userId: string;
  coinId: string;
  watchlist: boolean;
}
