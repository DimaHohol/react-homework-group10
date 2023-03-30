import { Component } from "react";
import PropTypes from "prop-types";
import "./CartItem.css";

export default class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="cart-item">
          <div className="cart-item-info">
            <p className="cart-item-info-name">{this.props.item.name}</p>
            <p className="cart-item-info-price">${this.props.item.price}</p>
          </div>

          <p>{this.props.item.quantity}</p>
        </div>
      </>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
