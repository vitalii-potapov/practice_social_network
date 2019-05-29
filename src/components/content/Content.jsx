import React from 'react';
import { Route } from 'react-router-dom';

import Profile from '../profile/Profile';
import DialogsContainer from '../dialogs/DialogsContainer';

import './Content.css';

function Content() {
  return (
    <section className="content">
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/dialogs" render={() => <DialogsContainer />} />
    </section>
  );
}

export default Content;
