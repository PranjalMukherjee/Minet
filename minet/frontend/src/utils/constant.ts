import BitcoinIcon from "../../public/images/bitcoinicon.svg";
import Ethereum from "../../public/images/ethereum.svg";
import Xrp from "../../public/images/xrp.svg";
import Tether from "../../public/images/tether.svg";
import Bitcoin from "../../public/images/biticon.svg";
import Ethereum2 from "../../public/images/ether2.svg";
import Global from "../../public/images/global.svg";
import Paper from "../../public/images/paper.svg";
import Orange from "../../public/images/organeCircle.svg";
import Blue from "../../public/images/blueCircle.svg";
import Logo from "../../public/images/logo.svg";
import Dashboard from "../../public/images/dashboard.svg";
import Portfolio from "../../public/images/portfolio.svg";
import Trade from "../../public/images/trade.svg";
import Notification from "../../public/images/notification.svg";
import Logout from "../../public/images/logout.svg";
import Avator from "../../public/images/avator.svg";
import Arrow from "../../public/images/downArrow.svg";
import BitcoinImg from "../../public/images/bitcoin.svg";

export const cryptoData = [
  {
    id: "ETH",
    color: "#0324fc",
    data: [
      { x: "2023-06-26", y: 320 },
      { x: "2023-06-27", y: 230 },
      { x: "2023-06-28", y: 225 },
      { x: "2023-06-29", y: 440 },
      { x: "2023-06-30", y: 235 },
      { x: "2023-07-01", y: 250 },
      { x: "2023-07-02", y: 345 },
      { x: "2023-07-03", y: 260 },
    ],
  },
  {
    id: "BTC",
    color: "#20B03F",
    data: [
      { x: "2023-06-26", y: 420 },
      { x: "2023-06-27", y: 330 },
      { x: "2023-06-28", y: 325 },
      { x: "2023-06-29", y: 340 },
      { x: "2023-06-30", y: 335 },
      { x: "2023-07-01", y: 350 },
      { x: "2023-07-02", y: 345 },
      { x: "2023-07-03", y: 360 },
    ],
  },
];

export const singleCryptoData = [
  {
    id: "ETH",
    color: "#20B03F",
    data: [
      { x: "2023-06-26", y: 230 },
      { x: "2023-06-27", y: 320 },
      { x: "2023-06-28", y: 225 },
      { x: "2023-06-29", y: 240 },
      { x: "2023-06-30", y: 335 },
      { x: "2023-07-01", y: 250 },
      { x: "2023-07-02", y: 445 },
      { x: "2023-07-03", y: 260 },
    ],
  },
];
export const COLORS = {
  primary_100: "#FAFCFF",
  primary_300: "#CCE3FF",
  primary_500: "#0052FF",
  primary_700: "#002EB7",
  primary_900: "#00177A",

  text_highEmphasis: "#343446",
  text_mediumEmphasis: "#7D7D89",
  text_lowEmphasis: "#B2B2B9",

  warning_main: "#ff9800",
  warning_100: "#FFF6ED",
  warning_300: "#FFA74F",
  warning_chipBorder: "#F7931A",
  warning_bitcoinBackground: "#F7931A33",
  warning_xrpBackground: "#22222233",
  warning_polkadotBackground: "#E6007A33",
  warning_ethereumBackground: "#627EEA33",
  warning_tetherBackground: "#26A17B33",
  warning_ethereumTwoBackground: "#19197133",
  warning_dodgeCoinBackground: "#DBC98433",

  success_100: "#E9F7EC",
  success_500: "#20B03F",

  error_100: "#F3E6EB",
  error_500: "#B71A33",

  grey_50: "#F2F2F7",
  grey_100: "#E8E8F7",
  grey_300: "#B4B4CF",
  grey_500: "#4B4B60",
  grey_700: "#252545",
  grey_900: "#0E0E2E",

  gray_main: "#fff",
  gray_300: "#D0D5DD",
  gray_500: "#667085",
  gray_700: "#344054",

  background_paper: "#FFFFFF",

  dropShadow_background: "#C4C4C4",
  dropShadow_boxShadow: "0px 1px 10px rgba(44, 44, 44, 0.08)",
};

export const CURRENCY_SELECTOR = [
  {
    id: 1,
    label: "Bitcoin",
    style: {
      background: COLORS.warning_bitcoinBackground,
      borderRadius: "4px",
    },
  },
  {
    id: 2,
    label: "XRP",
    style: {
      background: COLORS.warning_xrpBackground,
      borderRadius: "4px",
    },
  },
  {
    id: 3,
    label: "Polkadot",
    style: {
      background: COLORS.warning_polkadotBackground,
      borderRadius: "4px",
    },
  },
  {
    id: 4,
    label: "Ethereum",
    style: {
      background: COLORS.warning_ethereumBackground,
      borderRadius: "4px",
    },
  },
  {
    id: 5,
    label: "Tether",
    style: {
      background: COLORS.warning_tetherBackground,
      borderRadius: "4px",
    },
  },
  {
    id: 6,
    label: "Ethereum 2",
    style: {
      background: COLORS.warning_ethereumTwoBackground,
      borderRadius: "4px",
    },
  },
  {
    id: 7,
    label: "Dodge Coin",
    style: {
      background: COLORS.warning_dodgeCoinBackground,
      borderRadius: "4px",
    },
  },
];
export const FORGOT_TITLE = "Forgot Password";
export const BACK = "Back to";
export const LOGIN = "Login";
export const TOTAL_BALANCE = "Total Balance";
export const PAYMENT_METHOD = "Payment Method";
export const USD_COIN = "USD Coin";
export const DEFAULT = "Default";

export const RESET_SUCCESS = "Password reset successful";
export const PROCEED_TEXT = "Click on button below to proceed to login";
export const SOLD = "Sold";
export const PURCHASED = "Purchased";
export const ABOUT = "About Bitcoin";
export const RESOURCES = "Resources";
export const CONTENT =
  "The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis each satoshi is worth 0.00000001 bitcoin.";
export const BANNER_TITLE = "Price correlation with";
export const BUY_MESSAGE =
  "Purchase is completed, please check your balance in your crypto wallet";
export const SELL_MESSAGE =
  "Sell is completed, please check your balance in your Rupee coin";

export const CORRELATION = [
  {
    id: 1,
    icon: Bitcoin,
    name: "Bitcoin",
    description: "Moves tightly together",
    cost: "$3,285,553.73",
    percent: "100%",
  },
  {
    id: 2,
    icon: Ethereum,
    name: "Ethereum",
    description: "Moves tightly together",
    cost: "$ 230,966.85",
    percent: "86%",
  },
  {
    id: 3,
    icon: Xrp,
    name: "XRP",
    description: "Moves tightly together",
    cost: "$60.20",
    percent: "10%",
  },
  {
    id: 4,
    icon: Tether,
    name: "Tether",
    description: "Moves tightly together",
    cost: "$74.28",
    percent: "2%",
  },
];

export const RESOURCES_LIST = [
  {
    id: 1,
    icon: Global,
    label: "Official Website",
  },
  {
    id: 2,
    icon: Paper,
    label: "White Paper",
  },
];
export const EMAIL = "Email";
export const MAIL = "you@company.com";
export const RESET = "Reset Password";
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PASSWORD_ERROR =
  "A min of 8 charaters with atleast 1 special character and number included";
export const ENTER_PASSWORD = "Enter Password";
export const RE_ENTER = "Re-Enter Password";
export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const WATCHLIST = "Watchlist";
export const DISCOVERY_ASSERTS = "Discover assets";
export const VIEW_WATCHLIST = "View Watchlist";
export const CURRENCY_INFO =
  "Click on currency name below to display it on the graph";

export const WATCH_LIST = [
  {
    id: 1,
    name: "Bitcoin",
    icon: BitcoinIcon,
    percent: 1.4,
    cost: 300439.93,
    symbol: "BTC",
  },
  {
    id: 2,
    name: "Ethereum",
    icon: Ethereum,
    percent: 1.3,
    cost: 1297.93,
    symbol: "ETH",
  },
  {
    id: 3,
    name: "Tether",
    icon: Tether,
    percent: 2.2,
    cost: 74.14,
    symbol: "THT",
  },
];

export const CURRENT_VALUE = "Current Value";
export const TOTAL_INVESTMENT = "Total Investment";
export const legendProps = {
  translateX: 0,
  translateY: -10,
  itemHeight: 14,
  itemWidth: 100,
  itemSpacing: 2,
  symbolSize: 8,
  itemTextColor: "#000",
};

export const ICONS = [
  {
    id: 1,
    icon: Orange,
    label: "Bitcoin",
  },
  {
    id: 2,
    icon: Blue,
    label: "Total Investment",
  },
];
export const TIMES = ["1H", "24H", "1W", "1M", "1Y", "ALL"];
export const SIDE_NAV_BAR = [
  {
    id: 1,
    label: "Logo",
    icon: Logo,
  },
  {
    id: 2,
    label: "Dashboard",
    icon: Dashboard,
  },
  {
    id: 3,
    label: "Portfolio",
    icon: Portfolio,
  },
  {
    id: 4,
    label: "Trade",
    icon: Trade,
  },
  {
    id: 5,
    label: "Notification",
    icon: Notification,
  },
  {
    id: 6,
    label: "Logout",
    icon: Logout,
  },
];
export const SIGNUP_HEADING = "Signup with Minet";
export const FULLNAME = "Full Name";
export const FULLNAME_LABEL = "Eg: John Doe";
export const PASSWORDLABEL = "Password";
export const PASSWORD_CREATE = "Create Password";
export const PASSWORD_VALIDATION_TEXT =
  "A min of 8 charaters with atleast 1 special character and number included";
export const SIGNUP_BUTTON = "Sign up";
export const SIGNUP_TEXT = "Already have an account?";
export const SIGNUP_LINK_TEXT = "Sign In";
export const EMAILINVALID_TEXT = "Enter the Invalid email format";
export const PASSWORDINVALID_TEXT = "Enter the Invalid password format";
export const SELL = "SELL";
export const BUY = "BUY";
export const ICON_LIST = [
  {
    id: 1,
    icon: Avator,
    alt: "Avator",
  },
  {
    id: 2,
    icon: Arrow,
    alt: "Arrow",
  },
];
export const SIGNIN_HEADER = "Login to Minet";
export const PASSWORD_LABEL = "Password";
export const SIGNIN_BUTTON = "Sign in";
export const LOGIN_TEXT = "Don't have an account?";
export const LOGIN_LINK_TEXT = "Signup";
export const FORGOT_PASSWORD = "Forgot Password";
export const EMAIL_IS_REQUIRED = "Email is required";
export const PASSWORD_REQUIRED = "Password is required";
export const EMAIL_INVALID = "Invalid email format";
export const PASSWORD_INVALID = "Invalid password format";

export const TradeTabItems = [
  { id: 1, name: "All Assets", disabled: false },
  { id: 2, name: "Watchlist", disabled: false },
];
export const TradeData = [
  {
    id: 1,
    cyptoDetail: { heading: "Bitcoin", icon: BitcoinIcon, subHeading: "BTC" },
    price: "$3,285,553.73",
    change: "1.06",
    marketCap: "$60.1T",
    watchListed: true,
  },
  {
    id: 2,
    cyptoDetail: { heading: "Ethereum", icon: Xrp, subHeading: "ETH" },
    price: "$216,678.10",
    change: "-5.49",
    marketCap: "$25.4T",
    watchListed: false,
  },
  {
    id: 3,
    cyptoDetail: { heading: "Ethereum 2", icon: Ethereum2, subHeading: "ETH2" },
    price: "$216,678.10",
    change: "-5.49",
    marketCap: "$25.4T",
    watchListed: true,
  },
];

export const ALL_CRPTO = [
  {
    id: 1,
    icon: Bitcoin,
    name: "Bitcoin",
    oneCryptoPrice: "$3,406,069.54",
    isChecked: true,
  },
  {
    id: 2,
    icon: Ethereum,
    name: "Ethereum",
    oneCryptoPrice: "$230,966.85",
    isChecked: false,
  },
  {
    id: 3,
    icon: Xrp,
    name: "XRP",
    oneCryptoPrice: "$79.90",
    isChecked: false,
  },
  {
    id: 4,
    icon: Tether,
    name: "Tether",
    oneCryptoPrice: "$179.90",
    isChecked: false,
  },
  {
    id: 5,
    icon: Tether,
    name: "Tether",
    oneCryptoPrice: "$179.90",
    isChecked: false,
  },
  {
    id: 6,
    icon: Tether,
    name: "Tether",
    oneCryptoPrice: "$179.90",
    isChecked: false,
  },
  {
    id: 7,
    icon: Tether,
    name: "Tether",
    oneCryptoPrice: "$179.90",
    isChecked: false,
  },
  {
    id: 8,
    icon: Tether,
    name: "Tether",
    oneCryptoPrice: "$179.90",
    isChecked: false,
  },
  {
    id: 9,
    icon: Tether,
    name: "Tether",
    oneCryptoPrice: "$179.90",
    isChecked: false,
  },
];
export const DEPOSIT = "CASH DEPOSIT";
export const WITHDRAW = "WITHDRAWAL";
export const BALANCE = "Total balance";
export const SEARCH = "Search all assets";

export const WALLET_BODY = [
  {
    id: 1,
    date: "28",
    month: "Feb",
    status: "Received Bitcoin",
    ownerName: "Teja Meenikanti",
    action: "Purchased",
    quantity: "0.0010",
    amount: "900",
    symbol: "BTC",
  },
  {
    id: 2,
    date: "29",
    month: "Feb",
    status: "Received Bitcoin",
    ownerName: "Teja Meenikanti",
    action: "Purchased",
    quantity: "0.0010",
    amount: "900",
    symbol: "BTC",
  },
  {
    id: 3,
    date: "30",
    month: "Feb",
    status: "Received Etherium",
    ownerName: "Pranjal Mukherjee",
    action: "Sold",
    quantity: "0.0010",
    amount: "900",
    symbol: "ETH",
  },
  {
    id: 4,
    date: "19",
    month: "Feb",
    status: "Received Bitcoin",
    ownerName: "Teja Meenikanti",
    action: "Sold",
    quantity: "0.0010",
    amount: "900",
    symbol: "BTC",
  },
  {
    id: 5,
    date: "22",
    month: "Feb",
    status: "Received Etherium",
    ownerName: "Pranjal Mukherjee",
    action: "Sold",
    quantity: "0.0010",
    amount: "900",
    symbol: "ETH",
  },
];

export const DetailTabItems = [
  { id: 1, name: "Overview", disabled: false },
  { id: 2, name: "Wallet", disabled: false },
];

export const BITCOIN_DETAILS = {
  cryptoName: "Bitcoin",
  icon: BitcoinImg,
  symbol: "BTC",
  circulatingSupply: 123,
  growthRate: 0.16,
  isPriceCorrelation: true,
  marketCap: 1000,
  volume: 34,
};

export const ETHEREUM_DETAILS = {
  cryptoName: "Etherium",
  icon: BitcoinImg,
  symbol: "ETH",
  circulatingSupply: 123,
  growthRate: 0.16,
  isPriceCorrelation: true,
  marketCap: 1000,
  volume: 34,
};

export const GRAPH_DETAILS = {
  coinCost: "3,285,553.73",
  coinPercent: "8.2",
  graphData: singleCryptoData,
  legends: false,
};

export const MESSAGE =
  "is completed, please check your balance in your Rupee coin";
export const URL_DOMAIN = "https://bc118fe.spcluster.tk";
export const domain = "dev-khkfoowows7ppauh.us.auth0.com";
export const clientId = "i7znovtOtEOZ6NuxtPhW57Zt4VLnYpDq";

export const BACKEND_URL = "https://bc118be.spcluster.tk/api/v1";

export const TRADE_CARD_STRUCTURE = [
  {
    id: "",
    symbol: "",
    name: "",
    image: "",
    current_price: 0,
    market_cap: 0,
    total_volume: 0,
    price_change_percentage_24h: 0,
    circulating_supply: 0,
    total_supply: 0,
    is_watchlisted: true,
  },
];
export const COIN_DETAILS = {
  id: "",
  name: "",
  image: "",
  symbol: "",
  circulating_supply: 0,
  price_change_percentage_24h: 0,
  isPriceCorrelation: true,
  market_cap: 0,
  total_volume: 0,
  current_price: 0,
  is_watchlisted: false,
};

export const WALLET_TRANSACTION = [
  {
    date: "",
    type: "",

    sellPrice: 0,
    sellDate: "",
    quantity: 0,
    name: "",
    symbol: "",

    status: "",
    brokerName: "",
    cryptoHoldingId: "",

    id: "",

    purchasePrice: 0,
    purchaseDate: "",
    userId: "",
    cryptoId: "",
  },
];
export const MONTH = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const LOCALHOST = "https://bc118ms.spcluster.tk";
export const CRPTOS = [
  {
    id: 0,
    icon: "",
    name: "",
    unitPrice: "",
    isChecked: false,
  },
];
