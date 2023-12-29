import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Fragment, FunctionComponent, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const Layout: FunctionComponent<PropsWithChildren> = () => {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Provider Management Platform
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
