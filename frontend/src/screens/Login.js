import React from 'react';
import '../cssStyle/homeScreen.css';
import avatar from '../image/avatar.png';

const Login = () => (
  <section id="fp">
    <div>
      <div>
        <img
          className="avatar"
          src={avatar}
          width="500"
          height="200"
          alt="avatar"
        />
        <div className="organic">
          <p>
            <b>BE GREEN</b>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Login;
