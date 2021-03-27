import React, { useRef, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Burger from './components/menu/Burger';
import Menu from './components/menu/Menu';
import { GlobalStyles } from './globalStyle';
import useOnClickOutside from './hooks/hooks';
import Routes from './routes/Routes';
import { theme } from './theme';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <HashRouter>
          <Routes />
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} />
          </div>
        </HashRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
