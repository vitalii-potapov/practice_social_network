import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Profile from '../profile/Profile';
import Dialogs from '../dialogs/Dialogs';

import './Content.css';

function Content(props) {
  const { dataPosts, ...restProps } = props;

  return (
    <section className="content">
      <Route path="/profile" render={() => <Profile dataPosts={dataPosts} />} />
      <Route path="/dialogs" render={() => <Dialogs {...restProps} />} />
    </section>
  );
}

Content.propTypes = {
  dataPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      like: PropTypes.id,
      message: PropTypes.string,
    }),
  ),
};

Content.defaultProps = { dataPosts: '' };

export default Content;
