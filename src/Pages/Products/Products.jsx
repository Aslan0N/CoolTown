import React from "react";
import { useTranslation } from "react-i18next";
import CallUs from "../About/Components/CallUs";
import Partners from "../../Components/Partners";
import FirstSec from "../../Components/FirstSec";
import FilterPanel from "./Components/FilterPanel";

const Products = () => {
  // Translation
  const { t } = useTranslation();
  return (
    <>
      <FirstSec place={t("header.2")} current={t("header.2")} />
      <FilterPanel />
      <CallUs />
      <Partners />
    </>
  );
};

export default Products;
