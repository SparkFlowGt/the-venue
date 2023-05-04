import React from "react";
import "./App.css";

import { Element } from "react-scroll";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured";
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location/location";

const App=()=> {
  return (
    <div className="App">
      <Header/>

      <Element name="featured">
        <Featured/>
      </Element>

      <Element name="venuenfo">
        <VenueNfo/>
      </Element>

      <Element name="highlights">
        <Highlights/>
      </Element>

      <Element name="pricing">
        <Pricing/>
      </Element>
      
      <Element name="location">
        <Location/>
      </Element>

      <Footer/>
    </div>
  );
}

export default App;
