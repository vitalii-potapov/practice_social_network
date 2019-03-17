import React from 'react';
import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Content from './components/Content';
import Footer from './components/Footer';


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
