import ProductCard from "../ProductCard/ProductCard";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <>
      {props.data.map((product) => (
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
      ))}
    </>
  );
}

ProductList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img_url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onProductAdd: PropTypes.func.isRequired,
  onFavoriteAdd: PropTypes.func.isRequired,
};

export default ProductList;
