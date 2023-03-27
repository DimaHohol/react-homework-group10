import { Component } from "react";
import "./ProductCard.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isFavorite: false,
      buttonColor: this.props.data.isFavorite ? "red" : "gray",
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
    this.setState({ value: "", isFavorite: true, buttonColor: "red" });
    this.setState({ buttonColor: "red" });
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

        <div className="cart">
          <div className="cart-img">
            {/* {this.state.isFavorite && (
              <img
                className="cart-favheart-img"
                src="/image/header/heart-svgrepo-com.svg"
                alt="favorite"
              />
            )} */}
            {/* className="button-fav" */}
            <button
              onClick={this.onClickHandlerFav}
              style={{ backgroundColor: this.state.buttonColor }}
            >
              <img src="/image/body/fav.svg"></img>
            </button>
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
          </div>
        </div>
      </>
    );
  }
}

ProductCard.propTypes = {
  data: PropTypes.object,
  onQuantityAdd: PropTypes.func,
  onAddToFavorite: PropTypes.func,
};
