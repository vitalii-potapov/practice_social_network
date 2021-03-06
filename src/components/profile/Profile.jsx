import React from 'react';

import MyProfile from './myProfile/MyProfile';
import WallContainer from './wall/WallContainer';

import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile-top">
        <img className="profile-top__img" src="https://image.shutterstock.com/z/stock-photo-abstract-bright-glitter-blue-background-elegant-illustration-513694585.jpg" alt="" />
      </div>
      <div className="profile-middle">
        <MyProfile />
      </div>
      <div className="profile-bottom">
        <WallContainer />
      </div>
    </div>
  );
}

export default Profile;
