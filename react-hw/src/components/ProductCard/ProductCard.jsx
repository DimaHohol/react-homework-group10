import { Component } from "react";
import "./ProductCard.css";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  onClickHandler = () => {
    this.props.onQuantityAdd(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <>
        <div className="cart">
          <img className="img" src={this.props.data.img_url}></img>

          <div className="cart-name">
            <h4 className="name">{this.props.data.name}</h4>
          </div>
          <div className="cart-price">
            <h4 className="price">${this.props.data.price}</h4>
          </div>
          <div className="buttons">
            <button className="button-buy" onClick={this.onClickHandler}>
              <img src="/image/body/buy.svg"></img>
            </button>
            <button className="button-fav">
              <img src="/image/body/fav.svg"></img>
            </button>
          </div>
        </div>
      </>
    );
  }
}
