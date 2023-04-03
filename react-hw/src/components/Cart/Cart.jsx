import CartItem from "./CartItem/CartItem";
import "../Cart/CartItem/CartItem.css";
import PropTypes from "prop-types";

function Cart(props) {
  return (
    <>
      <p>{props.text}</p>
      <div className="table">
        {props.cartData.map((item) => (
          <CartItem item={item} key={Math.random()} emptiness={props.long} />
        ))}
      </div>
    </>
  );
}

export default Cart;

Cart.propTypes = {
  text: PropTypes.string.isRequired,
  cartData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.string.isRequired,
    })
  ).isRequired,
};
