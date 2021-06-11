import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isLoggedIn', true);
    }
  };

  return (
    <div>
      <div id="login-page">
        <div className="container">
          <form className="form-login" action="index.html">
            <h2 className="form-login-heading">Free Education Admin</h2>
            <div className="login-wrap">
              <input
                type="text"
                className="form-control"
                placeholder="User ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autofocus
              />
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <button
                className="btn btn-theme btn-block"
                href="index.html"
                type="submit"
                onClick={() => login()}
              >
                <i className="fa fa-lock"></i> SIGN IN
              </button>
              <hr />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
