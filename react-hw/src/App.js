import React, { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import data from "./data/data.json";
import ProductList from "./components/ProductList/ProductList";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsFavorite, setCartItemsFavorite] = useState([]);

  const addToCart = (quantity, id) => {
    const product = data.products.filter((item) => item.id === id)[0];
    product.quantity = quantity;
    setCartItems((prevState) => [...prevState, product]);
  };

  const addToFavorite = (quantity, id) => {
    const product = data.products.filter((item) => item.id === id)[0];
    product.quantity = quantity;
    product.isFavorite = true;
    setCartItemsFavorite((prevState) => [...prevState, product]);
  };

  useEffect(() => {
    const storedState = getStoredState();
    if (storedState) {
      setCartItems(storedState.cartItems);
      setCartItemsFavorite(storedState.cartItemsFavorite);
    }
  }, []);

  useEffect(() => {
    setStoredState({ cartItems, cartItemsFavorite });
  }, [cartItems, cartItemsFavorite]);

  const setStoredState = (state) => {
    try {
      localStorage.setItem("myComponentState", JSON.stringify(state));
    } catch (err) {
      console.error("Error storing state:", err);
    }
  };

  const getStoredState = () => {
    try {
      const storedState = localStorage.getItem("myComponentState");
      if (storedState !== null) {
        return JSON.parse(storedState);
      }
    } catch (err) {
      console.error("Error retrieving stored state:", err);
    }
    return null;
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <div className="header-logo">
            <img className="header-logo-img" src="/image/header/Vector.svg" />
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
                {cartItemsFavorite.length}
              </div>
              <img
                className="header-shop-menu-img"
                src="/image/header/heart-svgrepo-com.svg"
              />
              <div className="header-shop-menu-bascket-number">
                {cartItems.length}
              </div>
              <img
                className="header-shop-menu-img"
                src="/image/header/bascket.svg"
              />
            </a>
          </div>
        </div>
        <div className="info"></div>
        <div className="body">
          <div className="body-left">
            <ProductList
              onProductAdd={addToCart}
              data={data.products}
              onFavoriteAdd={addToFavorite}
            />
          </div>
          <div className="body-right">
            <Cart text={"Shoping Cart"} cartData={cartItems} />
            <Cart text={"Favorite Cart"} cartData={cartItemsFavorite} />
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}
