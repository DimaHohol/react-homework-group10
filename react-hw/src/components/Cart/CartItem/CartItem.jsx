import PropTypes from "prop-types";
import "./CartItem.css";
import React, { useState } from "react";

function CartItem(props) {
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-info">
          {props.emptiness}
          <p className="cart-item-info-name">{props.item.name}</p>
          <p className="cart-item-info-price">${props.item.price}</p>
        </div>

        <p>{props.item.quantity}</p>
      </div>
    </>
  );
}

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
};
