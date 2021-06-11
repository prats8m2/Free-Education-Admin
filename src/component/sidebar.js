import React from 'react';

export default function Sidebar() {
  return (
    <div>
      <aside>
        <div id="sidebar" className="nav-collapse ">
          {/* <!-- sidebar menu start--> */}
          <ul className="sidebar-menu" id="nav-accordion">
            <p className="centered">
              <a href="profile.html">
                <img src="img/ui-sam.jpg" className="img-circle" width="80" />
              </a>
            </p>
            <h5 className="centered">Prateek Singh</h5>
            <li className="mt">
              <a href="index.html">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li className="mt">
              <a href="/ngo">
                <i className="fa fa-building-o"></i>
                <span>NGOs</span>
              </a>
            </li>

            <li className="mt">
              <a href="/children">
                <i className="fa fa-male"></i>
                <span>Children</span>
              </a>
            </li>

            <li className="mt">
              <a href="/user">
                <i className="fa fa-users"></i>
                <span>Users</span>
              </a>
            </li>

            <li className="mt">
              <a href="index.html">
                <i className="fa fa-gift"></i>
                <span>Gifts</span>
              </a>
            </li>

            <li className="mt">
              <a href="index.html">
                <i className="fa fa-leaf"></i>
                <span>Adoption</span>
              </a>
            </li>

            <li className="mt">
              <a href="index.html">
                <i className="fa fa-truck"></i>
                <span>Orders</span>
              </a>
            </li>

            <li className="mt">
              <a href="index.html">
                <i className="fa fa-inr"></i>
                <span>Payments</span>
              </a>
            </li>
          </ul>
          {/* <!-- sidebar menu end--> */}
        </div>
      </aside>
    </div>
  );
}
