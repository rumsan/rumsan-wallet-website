import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/DefaultHome/MainBanner";
import Services from "../components/DefaultHome/Services";
import About from "../components/DefaultHome/About";
import Pricing from "../components/DefaultHome/Pricing";
import ContactUs from "../components/DefaultHome/ContactUs/ContactForm";
import Footer from "../components/Layouts/Footer";

class Index extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MainBanner />
        <Services />
        <About />
        <Pricing />
        <ContactUs />
        <Footer />
      </>
    );
  }
}

export default Index;
