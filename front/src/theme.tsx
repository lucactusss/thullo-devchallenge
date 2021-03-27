export type MyTheme = {
  colors: {
    primaryDark: string;
    primaryLight: string;
    primaryHover: string;
  };
  mobile: string;
};

export const theme: MyTheme = {
  colors: {
    primaryDark: '#0D0C1D',
    primaryLight: '#EFFFFA',
    primaryHover: '#343078',
  },
  mobile: '576px',
};
