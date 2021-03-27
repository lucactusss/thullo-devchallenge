import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

type Props = {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
};

export const Theme: React.FC<Props> = ({ theme, setTheme }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const onSetTheme = React.useCallback(
    (theme: ITheme) => dispatch(setTheme(theme)),
    [dispatch, setTheme]
  );

  return (
    <div className="Theme">
      <div>
        <h1>{theme.id}</h1>
        <p>{theme.name}</p>
      </div>
      <button onClick={() => onSetTheme(theme)}>Theme!</button>
    </div>
  );
};
