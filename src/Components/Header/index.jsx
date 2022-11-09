import { Container, CssBaseline, Typography } from '@mui/material';


const Header = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="100%" >
        <Typography variant="h4" align="left" marginTop="25px">OUR STORE</Typography>
        <Typography variant="h6" align="right">CART (0)</Typography>
      </Container>
    </>
  )
}

export default Header;
