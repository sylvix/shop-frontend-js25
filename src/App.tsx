import AppToolbar from './UI/AppToolbar/AppToolbar.tsx';
import { Route, Routes } from 'react-router-dom';
import Products from './features/products/Products.tsx';
import { Container, Typography } from '@mui/material';
import NewProduct from './features/products/NewProduct.tsx';
import OneProduct from './features/products/OneProduct.tsx';

const App = () => {
  return (
    <>
      <header>
        <AppToolbar/>
      </header>
      <Container maxWidth="xl" component="main">
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/products/new" element={<NewProduct/>} />
          <Route path="/products/:id" element={<OneProduct/>} />
          <Route path="*" element={<Typography variant="h1">Not found</Typography>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
