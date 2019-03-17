import React from 'react';
import { Route } from 'react-router-dom';
import Profile from '../profile/Profile';
import Dialogs from '../dialogs/Dialogs';
import './Content.css';

function Content() {
  return (
    <section className="content">
      <Route path="/profile" component={Profile} />
      <Route path="/dialogs" component={Dialogs} />
    </section>
  );
}

export default Content;
