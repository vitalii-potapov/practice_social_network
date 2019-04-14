import React from 'react';
import PropTypes from 'prop-types';

import DialogItem from './dialogItem/DialogItem';
import DialogMessage from './dialogMessage/DialogMessage';

import './Dialogs.css';

function Dialogs(props) {
  const { dialogDataNames, dialogDataMessages } = props;
  const newPostElement = React.createRef();

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

  const addPost = () => {

  };

  return (
    <div className="dialogs">
      <ul className="dialogs__list-of-names">
        {DialogNames}
      </ul>
      <div className="dialogs__messages">
        {dialogMessages}
        <div className="dialogs__textarea">
          <textarea name="dialogs__input" className="dialogs__input" id="" cols="30" rows="3" ref={newPostElement} />
          <button className="wall__button" type="button" onClick={addPost}>Add post</button>
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
};

export default Dialogs;
