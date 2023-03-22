import { Component } from "react";
import "./CartItem.css";

export default class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="cart-item">
          <div className="cart-item-name">
            <p>{this.props.item.name}</p>
          </div>
          <div className="cart-item-price">
            <p>${this.props.item.price}</p>
          </div>

          <p>{this.props.item.quantity}</p>
        </div>
      </>
    );
  }
}
