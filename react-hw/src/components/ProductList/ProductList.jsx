import ProductCard from "../ProductCard/ProductCard";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <>
      {props.data.map((product) => {
        // console.log(product);
        return (
          <ProductCard
            onQuantityAdd={(quantity) => {
              // console.log(quantity, product.id);
              props.onProductAdd(quantity, product.id);
            }}
            onAddToFavorite={(quantity) => {
              // console.log(quantity, product.id);
              props.addToFavorite(quantity, product.id);
            }}
            data={product}
            key={product.id}
            modal={props.openModal}
            //
            cartItems1={props.cartItems}
            cartItemsFavorite1={props.cartItemsFavorite}
            addToCart1={props.addToCart}
            toggleFavorite1={props.toggleFavorite}
          />
        );
      })}
    </>
  );
}

export default ProductList;

ProductList.propTypes = {
  id: PropTypes.string,
  openModal: PropTypes.func,
  data: PropTypes.array,
  addToFavorite: PropTypes.func,
  onProductAdd: PropTypes.func,
};
