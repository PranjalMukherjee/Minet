import { ReactNode } from "react";

export interface Mark {
  label?: ReactNode;
  value: number;
}

export interface ISliderProps {
  value?: number | number[];
  min: number;
  max: number;
  step?: number;
  marks?: boolean | Mark[];
  onChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
}
