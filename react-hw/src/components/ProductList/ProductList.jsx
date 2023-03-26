import ProductCard from "../ProductCard/ProductCard";

function ProductList(props) {
  return (
    <>
      {props.data.map((product) => {
        // console.log(product);
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
