import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/header/Header';
import MainGrid from './components/LinksGrid/MainGrid';
import { GlobalStyles } from './globalStyle';
import { useDarkMode } from './hooks/useDarkMode';
import { darkTheme, lightTheme } from './theme';

const App: React.FC = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={themeToggler}></Header>
      <MainGrid></MainGrid>
    </ThemeProvider>
  );
};

export default App;
