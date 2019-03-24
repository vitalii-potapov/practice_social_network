import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

import './App.css';


function App(props) {
  const { ...restProps } = props;

  return (
    <div className="app-wrapper">
      <Header />
      <BrowserRouter>
        <Aside />
        <Content {...restProps} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
