import React from "react";
import { useTranslation } from "react-i18next";
import CallUs from "../About/Components/CallUs";
import Partners from "../../Components/Partners";
import FirstSec from "../../Components/FirstSec";
import GalleryFirst from "./Components/GalleryFirst";

const GalleryPage = () => {
  // Translation
  const { t } = useTranslation();
  return (
    <>
      <FirstSec place={t("header.3")} current={t("header.3")} />
      <GalleryFirst />
      <CallUs />
      <Partners />
    </>
  );
};

export default GalleryPage;
