import React from 'react';
import PropTypes from 'prop-types';
import './DialogMessage.css';

function DialogMessage(props) {
  const { id } = props;
  const { message } = props;
  return (
    <div className="dialogs__message" id={id}>{message}</div>
  );
}

DialogMessage.propTypes = { id: PropTypes.number };
DialogMessage.propTypes = { message: PropTypes.string };
DialogMessage.defaultProps = { id: '' };
DialogMessage.defaultProps = { message: '' };
export default DialogMessage;
