import React from "react";
import "../../App.css";
import Navbar from "../NavBar/NavBar";
import "./Home.css";
import Footer from "../Footer/Footer";
import DisplayTable from "../displayTable";

function Home() {
  return (
    <>
      <Navbar />
      <DisplayTable />
      <Footer />
    </>
  );
}

export default Home;
