import { Alert, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectProducts, selectProductsFetching } from './productsSlice';
import ProductItem from './components/ProductItem';
import React, { useEffect, useMemo } from 'react';
import { fetchProducts } from './productsThunks';
import CategoriesMenu from '@/features/categories/components/CategoriesMenu';
import { selectCategories } from '@/features/categories/categoriesSlice';
import { fetchCategories } from '@/features/categories/categoriesThunks';
import { selectUser } from '@/features/users/usersSlice';

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);
  const isFetching = useAppSelector(selectProductsFetching);
  const user = useAppSelector(selectUser);
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts(categoryId));
  }, [dispatch, categoryId]);

  let content: React.ReactNode = (
    <Alert severity="info" sx={{ width: '100%' }}>
      There are no products here!
    </Alert>
  );

  if (isFetching) {
    content = <CircularProgress />;
  } else if (products.length > 0) {
    content = products.map((product) => (
      <ProductItem
        key={product._id}
        id={product._id}
        title={product.title}
        price={product.price}
        image={product.image}
        category={product.category?.title}
      />
    ));
  }

  const pageTitle = useMemo(() => {
    if (!categoryId) {
      return 'All products';
    }
    const category = categories.find((category) => category._id === categoryId);
    if (!category) {
      return '...';
    }
    return category.title;
  }, [categories, categoryId]);

  return (
    <Grid container spacing={2}>
      <Grid item sx={{ width: 200 }}>
        <CategoriesMenu categories={categories} />
      </Grid>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">{pageTitle}</Typography>
          </Grid>
          {user && user.role === 'admin' && (
            <Grid item>
              <Button color="primary" component={Link} to="/products/new">
                Add product
              </Button>
            </Grid>
          )}
        </Grid>
        <Grid item container spacing={1}>
          {isFetching && <CircularProgress />}
          {content}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
