import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './DialogItem.css';

function DialogItem(props) {
  const { name } = props;
  const { id } = props;
  return (
    <li className="dialogs__item-name">
      <NavLink className="dialogs__link" to={`/dialogs/${id}`}>{name}</NavLink>
    </li>
  );
}

DialogItem.propTypes = { name: PropTypes.string };
DialogItem.propTypes = { id: PropTypes.number };
DialogItem.defaultProps = { name: '' };
DialogItem.defaultProps = { id: '' };
export default DialogItem;
