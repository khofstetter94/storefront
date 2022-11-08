import { connect } from "react-redux";
import { setChosenCategory } from "../../store/categories";
import { setChosenProducts } from "../../store/products";

const Categories = (props) => {
  console.log(props);
  const { categories, activeCategory, setChosenCategory } = props;
  return (
    <>
      <h1>Browse our Categories</h1>
      {
        categories.map((category, index) => (
          <div key={`category-${index}`}>
            <button onClick={() => {setChosenCategory(category); setChosenProducts(category)}}>{category.displayName}</button>
          </div>
        ))
      }
    </>
  )
}

const mapStateToProps = ({categories}) => {
  return {
    categories: categories.categories,
    activeCategory: categories.activeCategory,
  }
}

const mapDispatchToProps = {
  setChosenCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
