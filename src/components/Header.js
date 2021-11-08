import React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
//import AppleIcon from "@mui/icons-material/Apple";

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#333333" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 3, textAlign: "center" }}
        >
          Duo E-Comm Shop
        </Typography>
        <Button color="inherit">
          <ShoppingBagIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
