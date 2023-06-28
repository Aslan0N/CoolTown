import React from "react";
import Tasty from "./Components/Tasty";
import Little from "./Components/Little";
import Offer from "./Components/Offer";
import Gallery from "./Components/Gallery";
import Services from "./Components/Services";
import Makers from "../../Components/Makers";
import Testimonial from "./Components/Testimonial";
import Cream from "./Components/Cream";
import Elements from "./Components/Elements";
import Detail from "./Components/Detail";

const Home = () => {
  return (
    <>
      <Tasty />
      <Little />
      <Offer />
      <Gallery />
      <Services />
      <Makers />
      <Testimonial />
      <Cream />
      <Elements/>
      <Detail/>
    </>
  );
};

export default Home;
