import React from 'react';

import Posts from './posts/Posts';

import './Wall.css';

function Wall(props) {
  const { ...restProps } = props;

  return (
    <div className="wall">
      <textarea className="wall__input" name="posts" id="" cols="30" rows="5" />
      <button className="wall__button" type="button">Add post</button>
      <hr />
      <Posts {...restProps} />
    </div>
  );
}

export default Wall;
