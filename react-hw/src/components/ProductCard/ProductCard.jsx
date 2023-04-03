import "./ProductCard.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import React, { useState } from "react";

function ProductCard(props) {
  const [value, setValue] = useState("");
  const [isFavorite, setIsFavorite] = useState(props.data.isFavorite);
  const [buttonColor, setButtonColor] = useState(
    props.data.isFavorite ? "green" : "white"
  );
  const [modalAddToBascket, setModalAddToBascket] = useState(false);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onClickHandler = () => {
    props.onQuantityAdd(value);
    setValue("");
    setModalAddToBascket(false);
  };

  const onClickHandlerFav = () => {
    props.onFavQuatityAdd(value);
    setIsFavorite(true);
    setButtonColor("green");
  };

  const openModalBascket = () => {
    setModalAddToBascket(true);
  };

  const closeModal = () => {
    setModalAddToBascket(false);
  };

  return (
    <>
      {modalAddToBascket && (
        <Modal
          closeModal={closeModal}
          text={"Add this product to Shoping Cart ?"}
          add={<button onClick={onClickHandler}>Add</button>}
        />
      )}

      <div className="cart">
        <div className="cart-img">
          <button
            onClick={onClickHandlerFav}
            style={{ backgroundColor: buttonColor }}
          >
            <img src="/image/body/fav.svg"></img>
          </button>
        </div>
        <img className="img" src={props.data.img_url}></img>

        <div className="cart-name">
          <h4 className="name">{props.data.name}</h4>
        </div>
        <div className="cart-price">
          <h4 className="price">${props.data.price}</h4>
        </div>
        <div className="buttons">
          <button className="button-buy" onClick={openModalBascket}>
            <img src="/image/body/buy.svg"></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: PropTypes.shape({
    img_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool,
  }).isRequired,
  onQuantityAdd: PropTypes.func.isRequired,
  onFavQuatityAdd: PropTypes.func.isRequired,
};
