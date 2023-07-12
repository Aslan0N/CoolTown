import React, { useContext } from "react";
import FirstSec from "../../Components/FirstSec";
import AboutFirst from "./Components/AboutFirst";
import Timer from "./Components/Timer";
import CallUs from "./Components/CallUs";
import Gallery from "../../Components/Gallery";
import Makers from "../../Components/Makers";
import { GlobalContext } from "../../Context/GlobalContext";
import Partners from "../../Components/Partners";
import Space from "../../Components/Space";
import { useTranslation } from "react-i18next";

const About = () => {
  const { darkMode } = useContext(GlobalContext);

  // Translation
  const {t} = useTranslation()
  return (
    <>
      <FirstSec place={t("header.1")} current={t("header.1")}/>
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
        bg={darkMode ? "none" : "#f7f7f7"}
        color={darkMode ? "#fff" : "#141b1d"}
        cardBg={!darkMode ? "#f35564" : "#141b1d"}
        cardColor={darkMode ? "#fff" : "#fff"}
        border={darkMode ? "1px solid #fff" : "1px solid #fff"}
      />
      <Space/>
      <CallUs />
      <Partners/>
    </>
  );
};

export default About;
