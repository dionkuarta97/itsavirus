import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Home, ShoppingCart, ArrowBackIosNew } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";
import { grey } from "@mui/material/colors";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path === "/mybag") {
      navigate("/mybag");
    } else {
      navigate("/");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: grey[800], height: 68 }}>
        <Toolbar>
          <IconButton size="large" edge="start" onClick={() => handleClick(location.pathname)} color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            {location.pathname === "/" ? <Home /> : location.pathname === "/detail" ? <ArrowBackIosNew /> : <ShoppingCart />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "Bebas Neue" }}>
            {location.pathname === "/" ? "Home" : location.pathname === "/detail" ? "Detail" : "MY BAG"}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
