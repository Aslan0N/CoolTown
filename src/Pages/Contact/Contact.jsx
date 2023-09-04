import React from "react";
import Form from "./Components/Form";
import { useTranslation } from "react-i18next";
import CallUs from "../About/Components/CallUs";
import Partners from "../../Components/Partners";
import FirstSec from "../../Components/FirstSec";
import ContactCard from "./Components/ContactCard";

const Contact = () => {
  // Translation

  const { t } = useTranslation();
  return (
    <>
      <FirstSec place={t("header.5")} current={t("header.5")} />
      <ContactCard />
      <Form />
      <CallUs />
      <Partners />
    </>
  );
};

export default Contact;
