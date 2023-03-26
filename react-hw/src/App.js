import { React, Component } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
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

  addToFavorite = (quantity, id) => {
    const product = data.products.filter((item) => item.id === id)[0];
    product.quantity = quantity;
    product.isFavorite = true;
    this.setState((prevState) => ({
      cartItemsFavorite: [...prevState.cartItemsFavorite, product],
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
                  {this.state.cartItemsFavorite.length}
                </div>
                <img
                  className="header-shop-menu-img"
                  src="/image/header/heart-svgrepo-com.svg"
                ></img>
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
              <ProductList
                onProductAdd={this.addToCart}
                data={data.products}
                onFavoriteAdd={this.addToFavorite}
              />
            </div>
            <div className="body-right">
              <Cart text={"Shoping Cart"} cartData={this.state.cartItems} />
              <Cart
                text={"Favorite Cart"}
                cartData={this.state.cartItemsFavorite}
              />
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </>
    );
  }
}
