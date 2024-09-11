import { AppBar, Button, Grid, styled, Toolbar, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  },
});

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <StyledLink to="/">CompStore</StyledLink>
          </Typography>
          <Button component={NavLink} to="/register" color="inherit">
            Sign up
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
