import { Component } from "react";
import CartItem from "./CartItem/CartItem";

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart">
        {this.props.cartData.map((item) => (
          <CartItem item={item} key={Math.random()} />
        ))}
      </div>
    );
  }
}
