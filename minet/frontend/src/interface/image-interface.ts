export default interface ImageProp {
  sourceImage: string;
  style?: React.CSSProperties | object;
  onClick?: () => void;
}
