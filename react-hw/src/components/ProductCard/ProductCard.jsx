import { Component } from "react";
import "./ProductCard.css";
import Modal from "../Modal/Modal";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      modalAddToBascket: false,
      modalAddToFavorite: false,
    };
  }

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  onClickHandler = () => {
    this.props.onQuantityAdd(this.state.value);
    this.setState({ value: "" });
    this.setState(() => {
      return { modalAddToBascket: false, modalAddToFavorite: false };
    });
  };

  onClickHandlerFav = () => {
    this.props.onFavQuatityAdd(this.state.value);
    this.setState({ value: "" });
    this.setState(() => {
      return { modalAddToBascket: false, modalAddToFavorite: false };
    });
  };

  openModalBascket = () => {
    this.setState(() => {
      return { modalAddToBascket: true };
    });
  };

  openModalFavorite = () => {
    this.setState(() => {
      return { modalAddToFavorite: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalAddToBascket: false, modalAddToFavorite: false };
    });
  };

  render() {
    return (
      <>
        {this.state.modalAddToBascket && (
          <Modal
            closeModal={this.closeModal}
            text={"Add this product to Shoping Cart ?"}
            add={<button onClick={this.onClickHandler}>Add</button>}
          />
        )}
        {this.state.modalAddToFavorite && (
          <Modal
            closeModal={this.closeModal}
            text={"Add this product to Favorite Cart ?"}
            add={<button onClick={this.onClickHandlerFav}>Add</button>}
          />
        )}

        <div className="cart">
          <div className="cart-img">
            <img
              className="cart-favheart-img"
              src="/image/header/heart-svgrepo-com.svg"
            ></img>
          </div>
          <img className="img" src={this.props.data.img_url}></img>

          <div className="cart-name">
            <h4 className="name">{this.props.data.name}</h4>
          </div>
          <div className="cart-price">
            <h4 className="price">${this.props.data.price}</h4>
          </div>
          <div className="buttons">
            {/* <button className="button-buy" onClick={this.onClickHandler}> */}
            <button className="button-buy" onClick={this.openModalBascket}>
              <img src="/image/body/buy.svg"></img>
            </button>
            <button className="button-fav" onClick={this.openModalFavorite}>
              <img src="/image/body/fav.svg"></img>
            </button>
          </div>
        </div>
      </>
    );
  }
}
