import React from 'react';
import Post from './post/Post';
import './Posts.css';

function Posts() {
  return (
    <div className="posts">
      <Post message="Hey everyone, my name is Vitalii" like={20} />
      <Post message="It's my first post" like={15} />
    </div>
  );
}

export default Posts;
