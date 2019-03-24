import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dataPosts = [
  {
    id: 1,
    name: 'Vitalii',
    message: 'Hey everyone, my name is Vitalii',
    like: 20,
    date: '17.03.19',
  },
  {
    id: 2,
    name: 'Vitalii',
    message: 'It\'s my first post',
    like: 15,
    date: '20.03.19',
  },
];
const dialogDataNames = [
  { id: 1, name: 'Abraham' },
  { id: 2, name: 'Adam' },
  { id: 3, name: 'Caleb' },
  { id: 4, name: 'Christopher' },
  { id: 5, name: 'Corey' },
  { id: 6, name: 'Earl' },
  { id: 7, name: 'Elliot' },
];
const dialogDataMessages = [
  { id: 1, message: 'Am if number no up period regard sudden better.' },
  { id: 2, message: 'Decisively surrounded all admiration and not you.' },
  { id: 3, message: 'Out particular sympathize not favourable introduced insipidity but ham.' },
  { id: 4, message: 'Rather number can and set praise. Distrusts an it contented perceived attending oh.' },
];

ReactDOM.render(
  <App
    dataPosts={dataPosts}
    dialogDataNames={dialogDataNames}
    dialogDataMessages={dialogDataMessages}
  />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
