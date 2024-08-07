import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectOneProduct, selectOneProductFetching } from './productsSlice.ts';
import { fetchOneProduct } from './productsThunks.ts';
import { CircularProgress, Grid, Typography } from '@mui/material';

const OneProduct = () => {
  const {id} = useParams() as {id: string};
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectOneProduct);
  const isFetching = useAppSelector(selectOneProductFetching);

  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [dispatch, id]);

  return (
    <Grid container direction="column" spacing={2}>
      {isFetching && <Grid item><CircularProgress/></Grid>}
      {product && (
        <>
          <Grid item component={Typography} variant="h4">{product.title}</Grid>
          <Grid item component={Typography} variant="h6">{product.price} KGS</Grid>
          <Grid item component={Typography} variant="body1">{product.description}</Grid>
        </>
      )}
    </Grid>
  );
};

export default OneProduct;