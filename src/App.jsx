import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
