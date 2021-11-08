import React, { Fragment } from "react";
import Header from "../components/Header";
import Items from "../components/Items";
//import Layout from "../components/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <Box sx={{ height: "500px", textAlign: "center", p: 5, m: 5 }}>
        Product Area 1
        <Items />
      </Box>

      <Box sx={{ height: "500px", textAlign: "center", p: 5, m: 5 }}>
        Product Area 2
        <Items />
      </Box>

      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
