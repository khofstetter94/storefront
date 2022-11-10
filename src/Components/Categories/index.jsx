import { connect, useDispatch } from "react-redux";
import { getCategories } from '../../store/categories';
import { setChosenCategory } from "../../store/actions";
import { Button, ButtonGroup, Typography } from '@mui/material';
import { useEffect } from "react";

const Categories = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, []);

  return (
    <>
      <div>
        <Typography variant="h5">Browse our Categories</Typography>
        <ButtonGroup variant="text" aria-label="text button group" >
          {
            props.categories.map((category, index) => (
              <Button key={`category-${index}`} color="primary" onClick={() => props.setChosenCategory(category)}>{category.name}</Button>
            ))
          }
        </ButtonGroup>
      </div>
    </>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
    activeCategory: categories.activeCategory,
  }
}

const mapDispatchToProps = {
  setChosenCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
