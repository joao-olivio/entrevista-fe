import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Footer />

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
