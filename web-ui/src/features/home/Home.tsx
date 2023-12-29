import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HandymanIcon from "@mui/icons-material/Handyman";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleCardClick = (to: string) => {
    navigate(to);
  };

  return (
    <Fragment>
      <Box
        gap={16}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={16}
      >
        <Card sx={{ width: 345 }}>
          <CardActionArea onClick={() => handleCardClick("/masteragreements")}>
            <CardMedia
              component="div"
              sx={{
                height: 140,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 100,
              }}
            >
              <HandshakeIcon fontSize={"inherit"} />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                Master Agreements
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 345 }}>
          <CardActionArea onClick={() => handleCardClick("/providers")}>
            <CardMedia
              component="div"
              sx={{
                height: 140,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 100,
              }}
            >
              <HandymanIcon fontSize={"inherit"} />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                Providers
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Fragment>
  );
};

export default Home;
