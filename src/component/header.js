import React from 'react';

export default function Header() {
  const logout = () => {
    localStorage.setItem('isLoggedIn', false);
  };
  return (
    <div>
      <header className="header black-bg">
        <div className="sidebar-toggle-box">
          <div
            className="fa fa-bars tooltips"
            data-placement="right"
            data-original-title="Toggle Navigation"
          ></div>
        </div>
        {/* <!--logo start--> */}
        <a href="index.html" className="logo">
          <b>
            Free <span>Education</span>
          </b>
        </a>
        {/* <!--logo end--> */}
        <div className="nav notify-row" id="top_menu">
          {/* <!--  notification start --> */}
          <ul className="nav top-menu">
            {/* <!-- notification dropdown start--> */}
            <li id="header_notification_bar" className="dropdown">
              <a
                data-toggle="dropdown"
                className="dropdown-toggle"
                href="index.html#"
              >
                <i className="fa fa-bell-o"></i>
                <span className="badge bg-warning">7</span>
              </a>
              <ul className="dropdown-menu extended notification">
                <div className="notify-arrow notify-arrow-yellow"></div>
                <li>
                  <p className="yellow">You have 7 new notifications</p>
                </li>
                <li>
                  <a href="index.html#">
                    <span className="label label-danger">
                      <i className="fa fa-bolt"></i>
                    </span>
                    Server Overloaded.
                    <span className="small italic">4 mins.</span>
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <span className="label label-warning">
                      <i className="fa fa-bell"></i>
                    </span>
                    Memory #2 Not Responding.
                    <span className="small italic">30 mins.</span>
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <span className="label label-danger">
                      <i className="fa fa-bolt"></i>
                    </span>
                    Disk Space Reached 85%.
                    <span className="small italic">2 hrs.</span>
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <span className="label label-success">
                      <i className="fa fa-plus"></i>
                    </span>
                    New User Registered.
                    <span className="small italic">3 hrs.</span>
                  </a>
                </li>
                <li>
                  <a href="index.html#">See all notifications</a>
                </li>
              </ul>
            </li>
            {/* <!-- notification dropdown end --> */}
          </ul>
          {/* <!--  notification end --> */}
        </div>
        <div className="top-menu">
          <ul className="nav pull-right top-menu">
            <li>
              <a className="logout" href="/" onClick={() => logout()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
