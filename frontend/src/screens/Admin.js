import React from 'react';
import { Link } from 'react-router-dom';
import management from '../image/management.png';
import '../cssStyle/admin.css';

const Admin = () => (
  <section id="fp">
    <div>
      <div className="organic">
        <p>
          <b>Management Page</b>
        </p>
        <div className="admin-button">
          <button className="product">
            <Link to="/products">
              <b>Product Management</b>
            </Link>
          </button>
          <button className="employee">
            <Link to="admin/member-list">
              <b>Employee Management</b>
            </Link>
          </button>
        </div>
      </div>
      <div>
        <img
          className="big-image"
          src={management}
          width="850"
          height="200"
          alt="vertical farming"
        />
      </div>
    </div>
  </section>
);

export default Admin;
