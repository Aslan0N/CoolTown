import React, { useContext } from "react";
import CallUs from "../About/Components/CallUs";
import Partners from "../../Components/Partners";
import FirstSec from "../../Components/FirstSec";
import { GlobalContext } from "../../Context/GlobalContext";
import FilterPanel from "./Components/FilterPanel";
import { useTranslation } from "react-i18next";

const Products = () => {

  // Translation
  const {t} =useTranslation()
  return (
    <>
      <FirstSec
        place={t("header.2")}
        current={t("header.2")}
       
      />
      <FilterPanel /> 
      <CallUs />
      <Partners />
    </>
  );
};

export default Products;
