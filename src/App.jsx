import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

import './App.css';


function App(props) {
  const { pageProfile, pageDialogs } = props;

  return (
    <div className="app-wrapper">
      <Header />
      <BrowserRouter>
        <Aside />
        <Content {...pageProfile} {...pageDialogs} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

App.propTypes = {
  pageProfile: PropTypes.shape({
    dataPosts: PropTypes.array,
  }),
  pageDialogs: PropTypes.shape({
    dataPosts: PropTypes.array,
  }),
};

App.defaultProps = { pageProfile: '', pageDialogs: '' };

export default App;
