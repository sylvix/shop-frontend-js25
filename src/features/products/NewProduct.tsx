import ProductForm from './components/ProductForm.tsx';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { createProduct } from './productsThunks.ts';
import { ProductMutation } from '../../types.ts';
import { useNavigate } from 'react-router-dom';
import { selectProductCreating } from './productsSlice.ts';

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
      <Typography variant="h4" sx={{mb: 2}}>New product</Typography>
      <ProductForm onSubmit={onFormSubmit} isLoading={isCreating} />
    </>
  );
};

export default NewProduct;