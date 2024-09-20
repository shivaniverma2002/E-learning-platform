import React from "react";
import Hero from "./Hero";
// import Program from "./Program";
import Benefits from "./Benefits";
import Testimonial from "./Testimonial";
import Company from "./Company";

function HomePage() {
  return (
    <>
      <Hero />
      <Company/>
      <Testimonial />
      <Benefits />
    </>
  );
}

export default HomePage;
