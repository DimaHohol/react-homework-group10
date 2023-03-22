import { React, Component } from "react";
import Cart from "./components/Cart/Cart";
import "./App.css";
import data from "./data/data.json";
import ProductList from "./components/ProductList/ProductList";

export default class App extends Component {
  state = {
    cartItems: [],
    cartItemsFavorite: [],
  };

  addToCart = (quantity, id) => {
    const product = data.products.filter((item) => item.id === id)[0];
    product.quantity = quantity;
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, product],
    }));
  };

  componentDidMount() {
    const storedState = this.getStoredState();
    if (storedState) {
      this.setState(storedState);
    }
  }

  componentDidUpdate() {
    this.setStoredState(this.state);
  }

  getStoredState() {
    try {
      const storedState = localStorage.getItem("myComponentState");
      if (storedState !== null) {
        return JSON.parse(storedState);
      }
    } catch (err) {
      console.error("Error retrieving stored state:", err);
    }
    return null;
  }

  setStoredState(state) {
    try {
      localStorage.setItem("myComponentState", JSON.stringify(state));
    } catch (err) {
      console.error("Error storing state:", err);
    }
  }

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
              <div className="header-logo-text">GREENSHOP</div>
            </div>

            <div>
              <a className="header-menu">Home</a>
              <a className="header-menu">Shop</a>
              <a className="header-menu">Blog</a>
              <a className="header-menu">Contacts</a>
            </div>

            <div className="header-shop-menu">
              <a className="header-shop-menu-bascket">
                <div className="header-shop-menu-bascket-number">
                  {this.state.cartItems.length}
                </div>
                <img
                  className="header-shop-menu-img"
                  src="/image/header/bascket.svg"
                ></img>
              </a>
            </div>
          </div>
          <div className="info"></div>
          <div className="body">
            <div className="body-left">
              <ProductList onProductAdd={this.addToCart} data={data.products} />
            </div>
            <div className="body-right">
              <div className="carts">
                <h2>Shoping Cart</h2>
                <Cart cartData={this.state.cartItems} />
              </div>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </>
    );
  }
}
