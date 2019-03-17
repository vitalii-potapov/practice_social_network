import React from 'react';
import Post from './post/Post';
import './Posts.css';

function Posts() {
  const dataPosts = [
    { id: 1, message: 'Hey everyone, my name is Vitalii', like: 20 },
    { id: 2, message: 'It\'s my first post', like: 15 },
  ];

  return (
    <div className="posts">
      <Post message={dataPosts[0].message} like={dataPosts[0].like} id={dataPosts[0].id} />
      <Post message={dataPosts[1].message} like={dataPosts[1].like} id={dataPosts[1].id} />
    </div>
  );
}

export default Posts;
