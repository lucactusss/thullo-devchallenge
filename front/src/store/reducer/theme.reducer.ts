import { SET_THEME } from '../../constants';

const initialState: ThemeState = {
  theme: {
    id: 2,
    name: 'toto',
  },
};

const reducer = (
  state: ThemeState = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case SET_THEME:
      const theme: ITheme = {
        id: Math.random(), // not really unique
        name: action.theme.name,
      };
      return {
        ...state,
        theme,
      };
    default:
      return state;
  }
};

export default reducer;
