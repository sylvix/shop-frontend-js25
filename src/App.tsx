import { Route, Routes } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import AppToolbar from './UI/AppToolbar/AppToolbar';
import Products from './features/products/Products';
import NewProduct from './features/products/NewProduct';
import OneProduct from './features/products/OneProduct';
import Register from '@/features/users/Register';
import Login from '@/features/users/Login';
import ProtectedRoute from '@/UI/ProtectedRoute/ProtectedRoute';
import { useAppSelector } from '@/app/hooks';
import { selectUser } from '@/features/users/usersSlice';

const App = () => {
  const user = useAppSelector(selectUser);

  return (
    <>
      <header>
        <AppToolbar />
      </header>
      <Container maxWidth="xl" component="main">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/categories/:categoryId" element={<Products />} />
          <Route
            path="/products/new"
            element={
              <ProtectedRoute isAllowed={user && user.role === 'admin'}>
                <NewProduct />
              </ProtectedRoute>
            }
          />
          <Route path="/products/:id" element={<OneProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Typography variant="h1">Not found</Typography>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
