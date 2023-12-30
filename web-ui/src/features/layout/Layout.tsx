import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import { Fragment, FunctionComponent, PropsWithChildren } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout: FunctionComponent<PropsWithChildren> = () => {
  const navigate = useNavigate();

  const handleCardClick = (to: string) => {
    navigate(to);
  };
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography onClick={() => handleCardClick("/")}
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
              }}
            >
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
