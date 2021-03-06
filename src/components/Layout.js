import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Box p={4} sx={{ flexGrow: 1, overflow: "auto" }}></Box>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
