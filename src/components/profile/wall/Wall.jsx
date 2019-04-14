import React from 'react';
import PropTypes from 'prop-types';

import Posts from './posts/Posts';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../action';

import './Wall.css';

function Wall(props) {
  const {
    dispatch,
    dataNewPost,
    ...restProps
  } = props;
  const newPostElement = React.createRef();
  const newPost = () => {
    dispatch(addPostActionCreator());
  };

  const updateTextarea = () => {
    dispatch(updateNewPostActionCreator(newPostElement.current.value));
  };

  return (
    <div className="wall">
      <textarea
        className="wall__input"
        cols="30"
        name="posts"
        onChange={updateTextarea}
        ref={newPostElement}
        rows="5"
        value={dataNewPost}
      />
      <button className="wall__button" type="button" onClick={newPost}>Add post</button>
      <hr />
      <Posts {...restProps} />
    </div>
  );
}

Wall.propTypes = {
  dispatch: PropTypes.func,
  dataNewPost: PropTypes.string,
};

export default Wall;
