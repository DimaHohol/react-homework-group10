import ProductCard from "../ProductCard/ProductCard";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <>
      {props.data.map((product) => {
        return (
          <ProductCard
            data={product}
            key={product.id}
            onQuantityAdd={(quantity) => {
              props.onProductAdd(quantity, product.id);
            }}
            onFavQuatityAdd={(quantity) => {
              props.onFavoriteAdd(quantity, product.id);
            }}
          />
        );
      })}
    </>
  );
}

export default ProductList;

ProductList.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array,
  addToFavorite: PropTypes.func,
  onProductAdd: PropTypes.func,
};
