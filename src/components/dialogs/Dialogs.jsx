import React from 'react';
import './Dialogs.css';
import DialogItem from './dialogItem/DialogItem';
import DialogMessage from './dialogMessage/DialogMessage';

function Dialogs() {
  return (
    <div className="dialogs">
      <ul className="dialogs__list-of-names">
        <DialogItem name="Abraham" id={1} />
        <DialogItem name="Adam" id={2} />
        <DialogItem name="Caleb" id={3} />
        <DialogItem name="Christopher" id={4} />
        <DialogItem name="Corey" id={5} />
        <DialogItem name="Earl" id={6} />
        <DialogItem name="Elliot" id={7} />
      </ul>
      <div className="dialogs__messages">
        <DialogMessage message="Am if number no up period regard sudden better." />
        <DialogMessage message="Decisively surrounded all admiration and not you." />
        <DialogMessage message="Out particular sympathize not favourable introduced insipidity but ham." />
        <DialogMessage message="Rather number can and set praise. Distrusts an it contented perceived attending oh." />
      </div>
    </div>
  );
}

export default Dialogs;
