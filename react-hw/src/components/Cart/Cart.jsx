import { React, Component } from "react";
// import data from "./data/data.json";
import "./Cart.css";

export default class Cart extends Component {
  state = {
    cartItems: [],
    cartItemsFavorite: [],
  };
  render() {
    return (
      <>
        <div className="cart">
          <div className="cart-img">
            <img className="img" src="/image/body/image 1.svg"></img>
          </div>
          <div className="buttons">
            <button className="button-buy">
              <img src="/image/body/buy.svg"></img>
            </button>
            <button className="button-fav">
              <img src="/image/body/fav.svg"></img>
            </button>
          </div>
          <div className="cart-name">
            <h4 className="name">Angel Wing Begonia</h4>
          </div>
          <div className="cart-price">
            <h4 className="price">$169.00</h4>
          </div>
        </div>
      </>
    );
  }
}
