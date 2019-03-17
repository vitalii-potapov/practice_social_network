import React from 'react';
import './Dialogs.css';
import DialogItem from './dialogItem/DialogItem';
import DialogMessage from './dialogMessage/DialogMessage';

function Dialogs() {
  const dialogsDataNames = [
    { id: 1, name: 'Abraham' },
    { id: 2, name: 'Adam' },
    { id: 3, name: 'Caleb' },
    { id: 4, name: 'Christopher' },
    { id: 5, name: 'Corey' },
    { id: 6, name: 'Earl' },
    { id: 7, name: 'Elliot' },
  ];
  const dialogsDataMessages = [
    { id: 1, message: 'Am if number no up period regard sudden better.' },
    { id: 2, message: 'Decisively surrounded all admiration and not you.' },
    { id: 3, message: 'Out particular sympathize not favourable introduced insipidity but ham.' },
    { id: 4, message: 'Rather number can and set praise. Distrusts an it contented perceived attending oh.' },
  ];

  return (
    <div className="dialogs">
      <ul className="dialogs__list-of-names">
        <DialogItem name={dialogsDataNames[0].name} id={dialogsDataNames[0].id} />
      </ul>
      <div className="dialogs__messages">
        <DialogMessage message={dialogsDataMessages[0].message} id={dialogsDataMessages[0].id} />
      </div>
    </div>
  );
}

export default Dialogs;
