import { Box, Tabs as MuiTabs,Tab } from '@mui/material';
import React from 'react';
import TypographyAtom from '../../atoms/Typography';
import { TabsProps } from '../../../interface';
import theme from '../../../theme';

const Tabs = ({ tabItems, sx, activeIndex, handleChange }: TabsProps) => {
  return (
    <Box>
      <MuiTabs value={activeIndex} onChange={handleChange}>
        {tabItems.map((item, index) => {
          return (
            <Tab
              key={item.id}
              label={<TypographyAtom variant='subtitle2' label={item.name}/>}
              disabled={item.disabled}
              sx={{
                ...sx,
                textTransform: "none",
                width: "150px",
                "&.Mui-selected": {
                  color: theme.palette.primary[500],
                },
                color: theme.palette.text.mediumEmphasis,
              }}
              value={index}
            />
          );
        })}
      </MuiTabs>
    </Box>
  );
};

export default Tabs;