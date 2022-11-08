import { connect } from "react-redux";
import { setChosenProducts } from "../../store/products";

const Products = (props) => {
  console.log(props);
  const { products, activeCategory, setChosenProducts } = props;
  return (
    <>
      {
        products.map((product, index) => {
          if (product.category === activeCategory) {
            return (
              <div key={`product-${index}`}>
                <h3>{product.name}</h3>
              </div>
            )
          }
          return null;
        })
      }
    </>
  )
}

const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
    chosenProducts: products.chosenProducts
  }
}

const mapDispatchToProps = {
  setChosenProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
