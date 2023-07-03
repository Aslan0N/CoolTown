import React, { useContext } from "react";
import FirstSec from "../../Components/FirstSec";
import AboutFirst from "./Components/AboutFirst";
import Timer from "./Components/Timer";
import CallUs from "./Components/CallUs";
import Gallery from "../../Components/Gallery";
import Makers from "../../Components/Makers";
import { GlobalContext } from "../../Context/GlobalContext";

const About = () => {
  const { darkMode } = useContext(GlobalContext);
  return (
    <>
      <FirstSec main={"Home"} current={"About Us"} pColor1={ darkMode ? "#fff"  : "#141b1d"} pColor2={darkMode ? "#f25221" : "#fff" } bg={darkMode? "url('https://webstrot.com/html/cooltown/html/images/header_bg2.jpg')" :"url('https://webstrot.com/html/cooltown/html/images/header_bg.jpg')"} />
      <AboutFirst />
      <Timer />
      <Gallery
        bg={darkMode ? "#141b1d" : "#fff"}
        title1={darkMode ? "#fff" : "#f35564"}
        title2={darkMode ? "#fff" : "#3d3d3d"}
        button={darkMode ? "#FFF" : "#f35564"}
        buttonColor={darkMode ? "#141b1d" : "#fff"}
      />
      <Makers
        bg={darkMode ? "none" : "#fff"}
        color={darkMode ? "#fff" : "#141b1d"}
        cardBg={darkMode ? "#141b1d" : "#f35564"}
        cardColor={darkMode ? "#fff" : "#fff"}
        border={darkMode ? "1px solid #fff" : "1px solid #fff"}
      />
      <CallUs />
    </>
  );
};

export default About;
