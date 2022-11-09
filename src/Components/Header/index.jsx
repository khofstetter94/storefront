import { Container, CssBaseline, Typography } from '@mui/material';
import { connect } from "react-redux";
import Cart from '../SimpleCart/index';

const Header = (props) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="100%" >
        <Typography variant="h4" align="left" marginTop="25px">OUR STORE</Typography>
        <Typography variant="h6" align="right">{`CART (${props.selectedProducts.length})`}</Typography>
        <Cart />
      </Container>
    </>
  )
}

const mapStateToProps = (props) => {
  return {
    selectedProducts: props.cart.selectedProducts,
  }
}

export default connect(mapStateToProps)(Header);
