import { Container, CssBaseline, Typography } from '@mui/material';


const Footer = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="100%" align="center">
          <Typography>&copy; 2022 Javascript 401</Typography>
          <Typography>React + Redux + Material UI</Typography>
      </Container>
    </>
  );
};

export default Footer;
