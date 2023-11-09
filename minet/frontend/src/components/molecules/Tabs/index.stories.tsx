import { StoryObj, Meta } from "@storybook/react";
import Tabs from ".";
import theme from "../../../theme";

const meta: Meta<typeof Tabs> = {
  title: "molecules/Tabs",
  component: Tabs,
};

export default meta;

type story = StoryObj<typeof Tabs>;

const TradeTabItems = [
  { id: 1, name: "All Assets", disabled: false },
  { id: 2, name: "Watchlist", disabled: false },
];

const DetailTabItems = [
  { id: 1, name: "Overview", disabled: false },
  { id: 2, name: "Wallet", disabled: false },
];

export const TradeTabs: story = {
  args: {
    tabItems: TradeTabItems,
    sx: {
      textTransform: "none",
      width: "150px",
      "&.Mui-selected": {
        color: theme.palette.primary[500],
      },
      color: theme.palette.text.mediumEmphasis,
    },
    activeIndex: 0,
  },
};

export const DetailTabs: story = {
  args: {
    tabItems: DetailTabItems,
    sx: {
      textTransform: "none",
      width: "150px",
      "&.Mui-selected": {
        color: theme.palette.primary[500],
      },
      color: theme.palette.text.mediumEmphasis,
    },
    activeIndex: 0,
  },
};
