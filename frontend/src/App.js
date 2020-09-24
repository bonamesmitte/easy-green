import React from 'react';
import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
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
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import Thankyou from './screens/Thankyou';
import Admin from './screens/Admin';
import Login from './screens/Login';
import AllProductScreen from './screens/AllProductScreen';
import AllGrowProductScreen from './screens/AllGrowProductScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <HashRouter>
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
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}

            <Link to="/register">Sign Up</Link>
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

            {/* <li>
              <Link to="/interior">Green Interior</Link>
            </li> */}

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
            <Route path="/ourstory" component={OurStory} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/recipe-detail" component={RecipeDetail} />
            <Route path="/interior" component={Interior} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin/member-list" component={MemberList} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/ordercomplete" component={Thankyou} />
            <Route path="/admin" component={Admin} />
            <Route path="/profile" component={Login} />
            <Route path="/acc" component={Acc} />
            <Route path="/alleat/:id" component={AllProductScreen} />
            <Route path="/allgrow/:id" component={AllGrowProductScreen} />
          </div>
        </main>
        <footer className="footer">© Alice Yoo 2020</footer>
      </div>
    </HashRouter>
  );
}

export default App;
