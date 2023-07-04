import React, { useContext } from "react";
import Tasty from "./Components/Tasty";
import Little from "./Components/Little";
import Offer from "./Components/Offer";
import Gallery from "../../Components/Gallery";
import Services from "./Components/Services";
import Makers from "../../Components/Makers";
import Testimonial from "./Components/Testimonial";
import Cream from "./Components/Cream";
import Elements from "./Components/Elements";
import Detail from "./Components/Detail";
import { GlobalContext } from "../../Context/GlobalContext";

const Home = () => {
  const { darkMode } = useContext(GlobalContext);
  return (
    <>
      <Tasty />
      <Little />
      <Offer />
      <Gallery
        bg={
          !darkMode
            ? "url('https://webstrot.com/html/cooltown/html/images/header_bg5.jpg')"
            : "none"
        }
        buttonColor={darkMode ? "#141b1d" : "#f35564"}
        title1={"#fff"}
        title2={"#fff"}
        buttonBg={"#fff"}
      />
      <Services />
      <Makers bg={!darkMode ? "url('https://webstrot.com/html/cooltown/html/images/header_bg7.jpg')" : "none"}
        cardBg={"#fff"} cardColor={darkMode ? "#141b1d" : "#f35564"} border={darkMode ? '1px solid #141b1d': '1px solid #f06292'}
        color={darkMode ? "#fff" : "#fff"}
      />
      <Testimonial />
      <Cream />
      <Elements />
      <Detail />
    </>
  );
};

export default Home;
