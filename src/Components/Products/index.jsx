import { useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import { setSelectedProduct } from "../../store/actions";
import { getProducts } from '../../store/products';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const Products = (props) => {
  // const { products, categories } = props;
  // console.log(props);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Typography gutterBottom variant="h2" component="div" align="center">{props.categories.activeCategory}</Typography>
      <Typography variant="h5" color="text.secondary" align="center">{props.categories.activeCategoryDescription}</Typography>
      <Box sx={{ display: 'flex', margin: '25px' }}>
        {
          props.filteredProducts.map((product, index) => {
            return (
              <Card key={`product-${index}`} sx={{ maxWidth: 345, margin: '25px' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">Price: {product.price}</Typography>
                  <Typography variant="body2" color="text.secondary">Stock: {product.inStock}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => props.setSelectedProduct(product)}>ADD TO CART</Button>
                  <Button size="small">VIEW DETAILS</Button>
                </CardActions>
              </Card>
            )
          })
        }
      </Box>
    </>
  )
}

const mapStateToProps = ({ products, categories }) => {
  return {
    products: products.products,
    filteredProducts: products.filteredProducts,
    categories: categories,
  }
}

const mapDispatchToProps = {
  setSelectedProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
