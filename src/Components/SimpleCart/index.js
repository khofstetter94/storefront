import { connect } from "react-redux";
import { removeSelectedProduct } from "../../store/actions";
import { Box, Container, List, ListItem, ListItemText } from '@mui/material';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

const Cart = (props) => {
  const counts = props.selectedProducts.reduce((totals, product) => ({
    ...totals,
    [product.name]: totals[product.name] ? totals[product.name] + 1 : 1
  }), {});
  const uniqProducts = props.selectedProducts.reduce((uniq, prod) => ({ ...uniq, [prod.name]: prod }), {});
  return (
    <>
      <Container align="right">
        <Box sx={{ flexGrow: 1, maxWidth: 160 }} align="right">
          <List>
            {
              Object.keys(uniqProducts).map((name, index) => (
                <ListItem key={`product-${index}`}
                  secondaryAction={
                    <HighlightOffTwoToneIcon color="red" onClick={() => props.removeSelectedProduct(uniqProducts[name])} edge="end" aria-label="delete">X
                    </HighlightOffTwoToneIcon>
                  }
                >
                  <ListItemText
                    primary={`${name} (${counts[name]})`}
                  />
                </ListItem>
              ))
            }
          </List>
        </Box>
      </Container>
    </>
  )
}

const mapStateToProps = ({ cart }) => {
  return {
    selectedProducts: cart.selectedProducts,
  }
}

const mapDispatchToProps = {
  removeSelectedProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
