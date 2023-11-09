import * as React from 'react';
import { Divider as MuiDivider} from '@mui/material';
import { DividerProps } from '../../../interface';

const DividerAtom = (props: DividerProps) => {
  return (
    <MuiDivider
      orientation={props.direction}
      flexItem
      sx={props.sx}
      data-testid="divider"
    >
      {props.children}
    </MuiDivider>
  );
};

export default DividerAtom;
