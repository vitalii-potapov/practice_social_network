import React from 'react';
import PropTypes from 'prop-types';
import './DialogMessage.css';

function DialogMessage(props) {
  const { message } = props;
  return (
    <div className="dialogs__message">{message}</div>
  );
}

DialogMessage.propTypes = { message: PropTypes.string };
DialogMessage.defaultProps = { message: '' };
export default DialogMessage;
