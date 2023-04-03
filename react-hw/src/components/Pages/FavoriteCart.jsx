import "../../App.css";
import "../ProductCard/ProductCard.css";
import React, { useState } from "react";

function FavoriteCart(props) {
  const removeFromFavorite = (id) => {
    props.removeFromFavorite(id);
  };

  const [buttonColor, setButtonColor] = useState(
    props.cartData.isFavorite ? "green" : "white"
  );

  return (
    <>
      {props.cartData.map((product) => {
        return (
          <div className="cart">
            <img className="img" src={product.img_url}></img>

            <div className="cart-name">
              <h4 className="name">{product.name}</h4>
            </div>
            <div className="cart-price">
              <h4 className="price">${product.price}</h4>
            </div>
            <div className="buttons">
              <button
                className="button-buy"
                style={{ backgroundColor: "green" }}
                onClick={() => {
                  props.removeFromFavorite(product.id);
                  setButtonColor("white");
                }}
              >
                <img src="/image/body/fav.svg"></img>
              </button>
            </div>
          </div>
        );
      })}
      <div className="footer"></div>
    </>
  );
}

export default FavoriteCart;
