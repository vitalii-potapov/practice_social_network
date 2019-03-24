import React from 'react';
import PropTypes from 'prop-types';

import Post from './post/Post';

import './Posts.css';

function Posts(props) {
  const { dataPosts } = props;
  const posts = dataPosts.map(post => (
    <Post
      date={post.date}
      id={post.id}
      key={post.id}
      like={post.like}
      message={post.message}
      name={post.name}
    />
  ));

  return (
    <div className="posts">
      {posts}
    </div>
  );
}

Posts.propTypes = {
  dataPosts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      like: PropTypes.id,
      message: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

Posts.defaultProps = { dataPosts: '' };

export default Posts;
