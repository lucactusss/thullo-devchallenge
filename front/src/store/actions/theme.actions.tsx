import { SET_THEME } from '../../constants';

export function addArticle(theme: ITheme): DispatchType {
  const action: ThemeAction = {
    type: SET_THEME,
    theme,
  };

  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ThemeAction): any {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
