export interface IPortfolioCardProps {
  imageSrc: string;
  id?: string;
  coinName: string;
  sortName: string;
  valueInDollar: string;
  growthPercent: string;
  symbol?: string;
  currentCardId?: string;
  portfolio?: boolean;
  sx?: React.CSSProperties;
  isPriceCorrelation?: boolean;
}
