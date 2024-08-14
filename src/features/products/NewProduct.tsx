import ProductForm from './components/ProductForm';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { ProductMutation } from '@/types';
import { useNavigate } from 'react-router-dom';
import { selectProductCreating } from './productsSlice';
import { createProduct } from './productsThunks';

const NewProduct = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectProductCreating);

  const onFormSubmit = async (productMutation: ProductMutation) => {
    await dispatch(createProduct(productMutation));
    navigate('/');
  };

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        New product
      </Typography>
      <ProductForm onSubmit={onFormSubmit} isLoading={isCreating} />
    </>
  );
};

export default NewProduct;
