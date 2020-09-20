import React from 'react';
import '../cssStyle/contact.css';

const Contact = () => {
  return (
    <div className="contact-body">
      <div className="contact-left-content">
        <div className="contact-bg">
          <img
            src=" https://images.unsplash.com/photo-1534254608209-03b8f2c24397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            width="600"
            height="700"
          />
        </div>
      </div>

      <div className="contact-right-content">
        <div className="contact-inner-content">
          <h3 className="contact-title">
            <span>Contact</span>
          </h3>
          <b>Email: </b> aliceyootech@gmail.com
          <br />
          <br />
          <b>Phone: </b> 123-456-78910
          <br />
          <br />
          <b>Address: </b> main street, Dallas, Texas
          <br />
          <br />
          <b>Social Media: </b> @easygrow
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Contact;
