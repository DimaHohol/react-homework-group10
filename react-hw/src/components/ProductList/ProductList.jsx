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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img_url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onProductAdd: PropTypes.func.isRequired,
  onFavoriteAdd: PropTypes.func.isRequired,
};
