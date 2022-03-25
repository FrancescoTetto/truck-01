import React from "react";
import "../../App.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import FormContact from "../FormContact/FormContact";

function Contact() {
  return (
    <>
      <Navbar />
      <FormContact />
      <Footer />
    </>
  );
}

export default Contact;
