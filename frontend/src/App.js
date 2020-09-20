import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import EasyEat from './screens/EasyEat';
import EasyGrow from './screens/EasyGrow';
import OurStory from './screens/OurStroy';
import Acc from './screens/Acc';
import Recipes from './screens/Recipes';
import RecipeDetail from './screens/RecipeDetail';
import Interior from './screens/Interior';
import Contact from './screens/Contact';
import MemberList from './screens/MemberList';
import ListMemberComponent from './components/ListMemberComponent';
import './cssStyle/sideBar.css';
// import SignUp from './screens/SignUp';
// import SignIn from './screens/SignIn';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      {' '}
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">
              <img
                className="logo"
                src="/images/logo6.png"
                alt="easy green logo"
                width="170"
                height="100"
              />
            </Link>
          </div>
          <div className="header-links">
            <Link to="/cart/:id?">Cart</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <br />
            <li>
              <Link to="/ourstory">Our Story</Link>
            </li>
            <br />
            <br />
            <li>
              <Link to="/easyeat">Easy Eat</Link>
            </li>

            <li>
              <Link to="/easygrow">Easy Grow</Link>
            </li>

            <li>
              <Link to="/acc">Acc.</Link>
            </li>
            <br />
            <br />
            <li>
              <Link to="/recipes">Green Recipes</Link>
            </li>

            <li>
              <Link to="/interior">Green Interior</Link>
            </li>

            <br />
            <br />
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/easyeat" component={EasyEat} />
            <Route path="/easygrow" component={EasyGrow} />
            <Route path="/acc" component={Acc} />
            <Route path="/ourstory" component={OurStory} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/recipe-detail" component={RecipeDetail} />
            <Route path="/interior" component={Interior} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin/member-list" component={MemberList} />
            {/* <Route path="/signin" component={SignIn} /> */}
            {/* <Route path="/signup" component={SignUp} /> */}
          </div>
        </main>
        <footer className="footer">© Alice Yoo 2020</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
