import React from 'react';
import PropTypes from 'prop-types';

import DialogItem from './dialogItem/DialogItem';
import DialogMessage from './dialogMessage/DialogMessage';

import './Dialogs.css';

function Dialogs(props) {
  const { dialogDataNames, dialogDataMessages } = props;

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

Dialogs.defaultProps = {
  dialogDataMessages: '',
  dialogDataNames: '',
};

export default Dialogs;
