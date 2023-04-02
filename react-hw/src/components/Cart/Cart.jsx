import PropTypes from "prop-types";
import React from "react";
import CartItem from "./CartItem/CartItem";
import "../Cart/CartItem/CartItem.css";

export default function Cart(props) {
  const { text, cartData } = props;

  return (
    <>
      <p>{text}</p>
      <div className="table">
        {cartData.map((item) => (
          <CartItem item={item} key={Math.random()} />
        ))}
      </div>
    </>
  );
}

Cart.propTypes = {
  text: PropTypes.string.isRequired,
  cartData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
