import React from 'react';
import '../cssStyle/homeScreen.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const HomeScreen = () => (
  <section id="fp">
    <div>
      <div>
        <img
          className="big-image"
          src="https://structuralpanels.ca/wp-content/uploads/2020/06/Isowall-insulated-wall-panel-systems-vertical-farming-05-749x372.jpg"
          width="1000"
          height="550"
          alt="vertical farming"
        />
        <div className="organic">
          <p>
            Organic life style with <b>Easy Green</b>
          </p>
        </div>
      </div>

      <div className="home">
        <div className="img-container">
          <div className="card">
            <div className="img-figure">
              <img
                src="https://images.ctfassets.net/cnu0m8re1exe/1mfWyxjKT3ZtD65LeL1NfV/7428547c7b9c7c6540215bae98ea23cf/shutterstock_1094613467.jpg?w=650&h=433&fit=fill"
                alt="easy eat"
              />
            </div>
            <div className="info">
              <span>Easy Eat</span>
              <p className="role">"Healthy Vegetables"</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="go">
              <Link to="/easyeat">
                {' '}
                <button>View</button>
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="img-figure">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjZ7hjr5E6LFawHXy1IE9ScVPS-zaZC5aU7jlk1AFL0g&usqp=CAU&ec=45702844"
                alt="easy grow"
              />
            </div>
            <div className="info">
              <span>Easy Grow</span>
              <p className="role">"Ease Your Mind"</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="go">
              <Link to="/easygrow">
                {' '}
                <button>View</button>
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="img-figure">
              <img
                src="https://thoughtfulgardens.com/wp-content/uploads/2019/05/hoya-heart.jpg"
                alt="our story"
              />
            </div>
            <div className="info">
              <span>Our Story</span>
              <p className="role">"Philosophy"</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="go">
              <Link to="/ourstory">
                <button>View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeScreen;
