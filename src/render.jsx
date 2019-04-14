import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

const reRenderEntireTree = (state) => {
  ReactDOM.render(
    <App {...state} />,
    document.getElementById('root'),
  );
};

export default reRenderEntireTree;
