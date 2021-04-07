import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/header/Header';
import { GlobalStyles } from './globalStyle';
import MainRoutes from './routes/MainRoutes';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <HashRouter>
          <Header />
          <MainRoutes />
        </HashRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
