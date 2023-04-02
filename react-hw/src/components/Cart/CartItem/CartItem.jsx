import PropTypes from "prop-types";
import React, { useContext } from "react";
// import { CartContext } from "./CartContext";
import "./CartItem.css";

export default function CartItem(props) {
  const { item } = props;
  // const { dispatch } = useContext(CartContext);

  // const handleRemoveItem = () => {
  //   dispatch({ type: "REMOVE_ITEM", payload: item.id });
  // };

  return (
    <>
      <div className="cart-item">
        <div className="cart-item-info">
          <p className="cart-item-info-name">{item.name}</p>
          <p className="cart-item-info-price">${item.price}</p>
        </div>

        <div className="cart-item-controls">
          {/* <button className="cart-item-remove" onClick={handleRemoveItem}>
            Remove
          </button> */}

          {/* <p className="cart-item-quantity">{item.quantity}</p> */}
        </div>
      </div>
    </>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
