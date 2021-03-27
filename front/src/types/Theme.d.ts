interface ITheme {
  id: number;
  name: string;
}

type ThemeState = {
  theme?: ITheme;
};

type ThemeAction = {
  type: string;
  theme: ITheme;
};

type DispatchType = (args: ThemeAction) => ThemeAction;
