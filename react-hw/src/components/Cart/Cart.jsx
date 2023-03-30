import { Component } from "react";
import CartItem from "./CartItem/CartItem";
import "../Cart/CartItem/CartItem.css";
import PropTypes from "prop-types";

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>{this.props.text}</p>
        <div className="table">
          {this.props.cartData.map((item) => (
            <CartItem item={item} key={Math.random()} />
          ))}
        </div>
      </>
    );
  }
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
