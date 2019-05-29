import React from 'react';
import PropTypes from 'prop-types';

import DialogItem from './dialogItem/DialogItem';
import DialogMessage from './dialogMessage/DialogMessage';

import './Dialogs.css';

function Dialogs(props) {
  const newMessageElement = React.createRef();

  const {
    addMessage,
    updateMessage,
    dataNewMessage,
    dialogMessages,
    dialogNames,
  } = props;

  const onAddMessage = () => {
    addMessage();
  };
  const onChangeMessage = () => {
    const text = newMessageElement.current.value;
    updateMessage(text);
  };

  const names = dialogNames.map(dialogName => (
    <DialogItem
      id={dialogName.id}
      key={dialogName.id}
      name={dialogName.name}
    />
  ));
  const messages = dialogMessages.map(dialogMessage => (
    <DialogMessage
      id={dialogMessage.id}
      key={dialogMessage.id}
      message={dialogMessage.message}
    />
  ));

  return (
    <div className="dialogs">
      <ul className="dialogs__list-of-names">
        {names}
      </ul>
      <div className="dialogs__messages">
        {messages}
        <div className="dialogs__textarea">
          <textarea
            className="dialogs__input"
            cols="30"
            name="dialogs__input"
            onChange={onChangeMessage}
            ref={newMessageElement}
            rows="3"
            value={dataNewMessage}
          />
          <button className="wall__button" type="button" onClick={onAddMessage}>Add post</button>
        </div>
      </div>
    </div>
  );
}

Dialogs.propTypes = {
  addMessage: PropTypes.func,
  updateMessage: PropTypes.func,
  dataNewMessage: PropTypes.string,
  dialogNames: PropTypes.array,
  dialogMessages: PropTypes.array,
};

export default Dialogs;
