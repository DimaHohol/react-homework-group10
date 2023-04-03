import "./App.css";
import React, { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import data from "./data/data.json";
import ProductList from "./components/ProductList/ProductList";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import ShopingCart from "./components/Pages/ShopingCart";
import FavoriteCart from "./components/Pages/FavoriteCart";
import NotFound from "./components/Pages/NotFound";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsFavorite, setCartItemsFavorite] = useState([]);

  const addToCart = (quantity, id) => {
    const product = data.products.filter((item) => item.id === id)[0];
    product.quantity = quantity;
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const addToFavorite = (quantity, id) => {
    const product = data.products.filter((item) => item.id === id)[0];
    product.quantity = quantity;
    product.isFavorite = true;
    const updatedCartItemsFavorite = [...cartItemsFavorite, product];
    setCartItemsFavorite(updatedCartItemsFavorite);
    localStorage.setItem(
      "cartItemsFavorite",
      JSON.stringify(updatedCartItemsFavorite)
    );
  };

  const setStoredState = (state) => {
    localStorage.setItem("myComponentState", JSON.stringify(state));
  };

  const getStoredState = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartItemsFavorite =
      JSON.parse(localStorage.getItem("cartItemsFavorite")) || [];
    return { cartItems, cartItemsFavorite };
  };

  useEffect(() => {
    const storedState = getStoredState();
    if (storedState.cartItems.length || storedState.cartItemsFavorite.length) {
      setCartItems(storedState.cartItems);
      setCartItemsFavorite(storedState.cartItemsFavorite);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(
      "cartItemsFavorite",
      JSON.stringify(cartItemsFavorite)
    );
  }, [cartItemsFavorite]);

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const removeFromFavorite = (id) => {
    const updatedCartItemsFavorite = cartItemsFavorite
      .map((item) => {
        if (item.id === id) {
          item.isFavorite = false;
        }
        return item;
      })
      .filter((item) => item.id !== id);
    setCartItemsFavorite(updatedCartItemsFavorite);
    localStorage.setItem(
      "cartItemsFavorite",
      JSON.stringify(updatedCartItemsFavorite)
    );
  };

  return (
    <>
      <header>
        {" "}
        <div className="header">
          <div className="header-logo">
            <img
              className="header-logo-img"
              src="/image/header/Vector.svg"
            ></img>
            <div className="header-logo-text">GREENSHOP</div>
          </div>

          <div>
            <button>
              <Link to="/" className="header-menu">
                Home
              </Link>
            </button>
            <button>
              <Link to="/ShopingCart" className="header-menu">
                Shoping Cart
              </Link>
            </button>
            <button>
              <Link to="/FavoriteCart" className="header-menu">
                Favorite Cart
              </Link>
            </button>
          </div>

          <div className="header-shop-menu">
            <a className="header-shop-menu-bascket">
              <div className="header-shop-menu-bascket-number">
                {cartItemsFavorite.length}
              </div>
              <img
                className="header-shop-menu-img"
                src="/image/header/heart-svgrepo-com.svg"
              ></img>
              <div className="header-shop-menu-bascket-number">
                {cartItems.length}
              </div>
              <img
                className="header-shop-menu-img"
                src="/image/header/bascket.svg"
              ></img>
            </a>
          </div>
        </div>
      </header>

      <div className="main">
        <div className="info"></div>
        <div className="body">
          <div className="body-left">
            <Routes>
              <Route
                path="/"
                element={
                  <Homepage
                    page={
                      <ProductList
                        onProductAdd={addToCart}
                        data={data.products}
                        onFavoriteAdd={addToFavorite}
                      />
                    }
                  />
                }
              />
              <Route
                path="/ShopingCart"
                element={
                  <ShopingCart
                    text={"Shoping Cart"}
                    cartData={cartItems}
                    removeFromCart={removeFromCart}
                  />
                }
              />
              <Route
                path="/FavoriteCart"
                element={
                  <FavoriteCart
                    text={"Favorite Cart"}
                    cartData={cartItemsFavorite}
                    removeFromFavorite={removeFromFavorite}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <div className="body-right">
            <Cart
              text={"Shoping Cart"}
              cartData={cartItems}
              long={cartItems.length === 0 && <div>Cart is empty</div>}
            />
            <Cart
              text={"Favorite Cart"}
              cartData={cartItemsFavorite}
              long={cartItemsFavorite.length === 0 && <div>Cart is empty</div>}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
