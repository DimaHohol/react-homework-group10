import "../../App.css";
import "../ProductCard/ProductCard.css";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

function ShopingCart(props) {
  const { text, cartData, removeFromCart } = props;
  const [buttonColor, setButtonColor] = useState(
    props.cartData.isFavorite ? "white" : "green"
  );
  const [modalRemoveFromShopingCart, setModalRemoveFromShopingCart] =
    useState(false);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const openModalBascket = () => {
    setModalRemoveFromShopingCart(true);
  };

  const closeModal = () => {
    setModalRemoveFromShopingCart(false);
  };

  return (
    <>
      {cartData.length === 0 && <div>Shoping Cart is empty</div>}
      {cartData.map((product) => {
        return (
          <div className="cart">
            {modalRemoveFromShopingCart && (
              <Modal
                closeModal={closeModal}
                text={"Remove this product from Shoping Cart ?"}
                add={
                  <button onClick={() => handleRemoveFromCart(product.id)}>
                    Remove
                  </button>
                }
              />
            )}
            <img className="img" src={product.img_url}></img>

            <div className="cart-name">
              <h4 className="name">{product.name}</h4>
            </div>
            <div className="cart-price">
              <h4 className="price">${product.price}</h4>
            </div>
            <div className="buttons" onClick={openModalBascket}>
              <button className="button-buy">X</button>
            </div>
          </div>
        );
      })}
      <div className="footer"></div>
    </>
  );
}

export default ShopingCart;
