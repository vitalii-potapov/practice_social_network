import React from 'react';
import PropTypes from 'prop-types';

import Posts from './posts/Posts';

import './Wall.css';

function Wall(props) {
  const newPostElement = React.createRef();

  const {
    addPost,
    updatePost,
    dataNewPost,
    ...restProps
  } = props;

  const onAddMessage = () => {
    addPost();
  };

  const onChangeMessage = () => {
    const text = newPostElement.current.value;
    updatePost(text);
  };

  return (
    <div className="wall">
      <textarea
        className="wall__input"
        cols="30"
        name="posts"
        onChange={onChangeMessage}
        ref={newPostElement}
        rows="5"
        value={dataNewPost}
      />
      <button className="wall__button" type="button" onClick={onAddMessage}>Add post</button>
      <hr />
      <Posts {...restProps} />
    </div>
  );
}

Wall.propTypes = {
  addPost: PropTypes.func,
  updatePost: PropTypes.func,
  dataNewPost: PropTypes.string,
};

export default Wall;
