import Hero from "../components/landingPage/Hero";
import Ranking from "../components/landingPage/Ranking";
import CardData from "../components/CardData";
import Plans from "../components/landingPage/Plans";
import Testimonial from "../components/landingPage/Testimonial";
import Blog from "../components/landingPage/Blog";
import Footer from "../components/static/Footer";
import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import Header from "../components/static/Header";

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          <Header />
          <Hero />
          <Ranking />
          <CardData />
          <Plans />
          <Testimonial />
          <Blog />
          <Footer />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
