import { Box, Link, Typography } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        Welcome to provider management system
      </Typography>
      <Box gap={16} display="flex" justifyContent="center" alignItems="center" mt={16}>
        <Link component={RouterLink} to="/providers">
          Providers
        </Link>
        <Link component={RouterLink} to="/masteragreements">
          Master agreements
        </Link>
      </Box>
    </Fragment>
  );
};

export default Home;
