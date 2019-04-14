import React from 'react';
import PropTypes from 'prop-types';

import DialogItem from './dialogItem/DialogItem';
import DialogMessage from './dialogMessage/DialogMessage';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';

import './Dialogs.css';

function Dialogs(props) {
  const {
    dataNewMessage,
    dialogDataMessages,
    dialogDataNames,
    dispatch,
  } = props;
  const newMessageElement = React.createRef();

  const addMessage = () => {
    dispatch(addMessageActionCreator());
  };
  const updateTextarea = () => {
    dispatch(updateNewMessageActionCreator(newMessageElement.current.value));
  };

  const DialogNames = dialogDataNames.map(dialogName => (
    <DialogItem
      id={dialogName.id}
      key={dialogName.id}
      name={dialogName.name}
    />
  ));
  const dialogMessages = dialogDataMessages.map(dialogMessage => (
    <DialogMessage
      id={dialogMessage.id}
      key={dialogMessage.id}
      message={dialogMessage.message}
    />
  ));

  return (
    <div className="dialogs">
      <ul className="dialogs__list-of-names">
        {DialogNames}
      </ul>
      <div className="dialogs__messages">
        {dialogMessages}
        <div className="dialogs__textarea">
          <textarea
            className="dialogs__input"
            cols="30"
            name="dialogs__input"
            onChange={updateTextarea}
            ref={newMessageElement}
            rows="3"
            value={dataNewMessage}
          />
          <button className="wall__button" type="button" onClick={addMessage}>Add post</button>
        </div>
      </div>
    </div>
  );
}

Dialogs.propTypes = {
  dialogDataNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      name: PropTypes.string,
    }),
  ),
  dialogDataMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      message: PropTypes.string,
    }),
  ),
  dispatch: PropTypes.func,
  dataNewMessage: PropTypes.string,
};

export default Dialogs;
