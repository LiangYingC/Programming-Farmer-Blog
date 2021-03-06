/**
 * Ref about Define a Theme Type : https://emotion.sh/docs/typescript
 * */

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
      '7xl': string;
      '8xl': string;
      '9xl': string;
    };
    fontWeights: {
      hairline: number;
      thin: number;
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };
    lineHeights: {
      none: string;
      shorter: string;
      short: string;
      base: string;
      tall: string;
      taller: string;
    };
    letterSpacings: {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
    };
    zIndexs: {
      auto: string;
      hide: number;
      base: number;
      navigater: number;
      dropdown: number;
      overlay: number;
      modal: number;
      toast: number;
    };
    borderRadius: {
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    breakpoints: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tabletS: string;
      tabletM: string;
      tabletL: string;
      desktopS: string;
      desktopM: string;
      desktopL: string;
    };
    colors: {
      primaryText: string;
      secondText: string;
      thirdText: string;
      divideLine: string;
      bodyBg: string;
      navigationBg: string;
      btnBg: string;
      preElementBg: string;
      codeElementBg: string;
      colorModeIcon: string;
      anchorInsetShadow: string;
    };
  }
}

// You are also able to use a 3rd party theme this way:
