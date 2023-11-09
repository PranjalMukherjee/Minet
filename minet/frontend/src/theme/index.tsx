import { createTheme } from '@mui/material/styles';
import '../App.css';
import { COLORS } from '../utils/constant';

declare module '@mui/material/styles' {
  interface TypeText {
    lowEmphasis: string;
    mediumEmphasis: string;
    highEmphasis: string;
  }

  interface Palette {
    dropShadow: React.CSSProperties;
    gray: Palette['primary'];
  }

  interface PaletteOptions {
    dropShadow: React.CSSProperties;
    gray: PaletteOptions['primary'];
  }

  interface PaletteColor {
    900: string;
    700: string;
    500: string;
    300: string;
    100: string;
    50: string;
    chipBorder: string;
    bitcoinBackground: string;
    xrpBackground: string;
    polkadotBackground: string;
    ethereumBackground: string;
    tetherBackground: string;
    ethereumTwoBackground: string;
    dodgeCoinBackground: string;
  }

  interface SimplePaletteColorOptions {
    900?: string;
    700?: string;
    500?: string;
    300?: string;
    100?: string;
    50?: string;
    chipBorder: string;
    bitcoinBackground: string;
    xrpBackground: string;
    polkadotBackground: string;
    ethereumBackground: string;
    tetherBackground: string;
    ethereumTwoBackground: string;
    dodgeCoinBackground: string;
  }

  interface TypographyVariants {
    button: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    overline: React.CSSProperties;
    h4: React.CSSProperties;
    h6: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    label: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    button: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    overline: React.CSSProperties;
    h4: React.CSSProperties;
    h6: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    label: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    button?: true;
    caption1?: true;
    caption2?: true;
    overline?: true;
    h4?: true;
    h6?: true;
    body1?: true;
    body2?: true;
    subtitle1?: true;
    subtitle2?: true;
    label?: true;
  }
}

const MinetTheme = createTheme({
  palette: {
    primary: {
      '100': COLORS.primary_100,
      '300': COLORS.primary_300,
      '500': COLORS.primary_500,
      '700': COLORS.primary_700,
      '900': COLORS.primary_900
    },
    text: {
      highEmphasis: COLORS.text_highEmphasis,
      mediumEmphasis: COLORS.text_mediumEmphasis,
      lowEmphasis: COLORS.text_lowEmphasis,
    },
    warning: {
      main:COLORS.warning_main,
      '100':COLORS.warning_100,
      '300':COLORS.warning_300,
      chipBorder:COLORS.warning_chipBorder,
      bitcoinBackground:COLORS.warning_bitcoinBackground,
      xrpBackground:COLORS.warning_xrpBackground,
      polkadotBackground:COLORS.warning_polkadotBackground,
      ethereumBackground: COLORS.warning_ethereumBackground,
      tetherBackground:COLORS.warning_tetherBackground,
      ethereumTwoBackground: COLORS.warning_ethereumTwoBackground,
      dodgeCoinBackground: COLORS.warning_dodgeCoinBackground,
    },
    success: {
      '100': COLORS.success_100,
      '500': COLORS.success_500,
    },
    error: {
      '100': COLORS.error_100,
      '500': COLORS.error_500,
    },
    grey: {
      '50': COLORS.grey_50,
      '100': COLORS.grey_100,
      '300': COLORS.grey_300,
      '500': COLORS.grey_500,
      '700': COLORS.grey_700,
      '900': COLORS.grey_900,
    },
    gray: {
      'main': COLORS.gray_main,
      '300': COLORS.gray_300,
      '500': COLORS.gray_500,
      '700': COLORS.gray_700,
    },
    background: {
      'paper': COLORS.background_paper,
    },
    dropShadow: {
      'background': COLORS.dropShadow_background,
      'boxShadow': COLORS.dropShadow_boxShadow,
    },
  },

  typography: {
    fontFamily: 'Graphik',
    h4: {
      fontFamily: 'Graphik-Semibold',
      fontStyle: 'normal',
      fontSize: '40px',
      fontWeight: 500,
      lineHeight: '54px',
      letterSpacing: '-0.01em'
    },
    h6: {
      fontFamily: 'Graphik-Semibold',
      fontStyle: 'normal',
      fontSize: '24px',
      fontWeight: '400',
      lineHeight: '34px'
    },
    subtitle1: {
      fontFamily: 'Graphik-Semibold',
      fontStyle: 'normal',
      fontSize: '20px',
      fontWeight: '500',
      lineHeight: '28px',
      letterSpacing: '0.005em'
    },
    subtitle2: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '28px',
      letterSpacing: '0.005em'
    },
    body1: {
      fontFamily: 'Graphik-Semibold',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '22px',
      letterSpacing: '0.01em'
    },
    body2: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '22px',
      letterSpacing: '0.01em'
    },
    button: {
      fontFamily: 'Graphik-Semibold',
      fontStyle: 'normal',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '42px',
      letterSpacing: '0.01em',
      textTransform: 'none'
    },
    caption1: {
      fontFamily: 'GraphikMedium',
      fontStyle: 'normal',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '16px',
      letterSpacing: '0.01em'
    },
    caption2: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '16px',
      letterSpacing: '0.01em'
    },
    overline: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '14px',
      letterSpacing: '0.005em',
      textTransform: 'none'
    },
    label: {
      fontFamily: 'GraphikMedium',
      fontStyle: 'normal',
      fontSize: '14px',
      fontWeight: '400px',
      lineHeight: '20px', 
      letterSpacing: '0.01em',
      textTransform: 'none'
    }
  },
  spacing: 4
});

export default MinetTheme;
