import { React, Component } from "react";
import Cart from "./components/Cart/Cart";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="main">
          <div className="header">
            <div className="header-logo">
              <img
                className="header-logo-img"
                src="/image/header/Vector.svg"
              ></img>
              <text className="header-logo-text">GREENSHOP</text>
            </div>

            <div>
              <a className="header-menu">Home</a>
              <a className="header-menu">Shop</a>
              <a className="header-menu">Blog</a>
              <a className="header-menu">Contacts</a>
            </div>

            <div className="header-shop-menu">
              <a className="header-shop-menu-a">
                <img
                  className="header-shop-menu-img"
                  src="/image/header/bascket.svg"
                ></img>
              </a>
              <a header-shop-menu-a>
                <button>Log Out</button>
              </a>
            </div>
          </div>
          <div className="info"></div>
          <div className="body">
            <div className="body-left"></div>
            <div className="body-right">
              <div className="carts">
                <Cart />
              </div>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </>
    );
  }
}
