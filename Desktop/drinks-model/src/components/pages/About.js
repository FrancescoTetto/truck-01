import React from "react";
import "../../App.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />
      <div className='testing'>
        <h1>You are currently on the About Page</h1>
        <p>You are currently on the About Page</p>
      </div>
      <Footer />
    </>
  );
}

export default About;
