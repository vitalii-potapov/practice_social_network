import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './DialogItem.css';

function DialogItem(props) {
  const { id, name } = props;
  return (
    <li className="dialogs__item-name">
      <NavLink className="dialogs__link" to={`/dialogs/${id}`}>{name}</NavLink>
    </li>
  );
}

DialogItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

DialogItem.defaultProps = {
  id: '',
  name: '',
};

export default DialogItem;
