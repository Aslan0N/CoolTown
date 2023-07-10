import React, { useContext } from "react";
import CallUs from "../About/Components/CallUs";
import Partners from "../../Components/Partners";
import FirstSec from "../../Components/FirstSec";
import { GlobalContext } from "../../Context/GlobalContext";
import FilterPanel from "./Components/FilterPanel";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { darkMode } = useContext(GlobalContext);

  // Translation
  const {t} =useTranslation()
  return (
    <>
      <FirstSec
        place={t("header.2")}
        current={t("header.2")}
        pColor1={darkMode ? "#fff" : "#141b1d"}
        pColor2={darkMode ? "#f25221" : "#fff"}
        bg={
          darkMode
            ? "url('https://webstrot.com/html/cooltown/html/images/header_bg2.jpg')"
            : "url('https://webstrot.com/html/cooltown/html/images/header_bg.jpg')"
        }
      />
      <FilterPanel /> 
      <CallUs />
      <Partners />
    </>
  );
};

export default Products;
