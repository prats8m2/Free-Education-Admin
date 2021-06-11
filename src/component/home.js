import React, { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import NGO from './ngo/ngo';
import Children from './children/children';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './user/user';
export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);

  const updateSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div id="container">
      <Header updateSideBar={updateSideBar} />
      <Sidebar showSidebar={showSidebar} />

      <section
        id="main-content"
        style={{ marginLeft: showSidebar ? '210px' : '0px' }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NGO} />
            <Route path="/ngo">
              <NGO showSidebar={showSidebar} />
            </Route>
            <Route path="/children" component={Children} />
            <Route path="/user" component={User} />
          </Switch>
        </BrowserRouter>
      </section>
    </div>
  );
}
