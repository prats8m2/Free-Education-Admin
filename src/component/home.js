import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import NGO from './ngo/ngo';
import Children from './children/children';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './user/user';
export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NGO} />
          <Route path="/ngo" component={NGO} />
          <Route path="/children" component={Children} />
          <Route path="/user" component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
