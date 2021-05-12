export type MyTheme = {
  body: string;
  text: string;
  toggleBorder: string;
  background: string;
  url: string;
  urlHover: string;
};

export const darkTheme: MyTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  url: 'gray',
  urlHover: 'red',
};

export const lightTheme: MyTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  url: 'blue',
  urlHover: 'violet',
};
