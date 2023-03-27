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
  cartData: PropTypes.array,
};
