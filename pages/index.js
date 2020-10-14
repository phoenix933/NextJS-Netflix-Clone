import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import JumboCompound from "../compounds/JumboCompound";
import OptFormCompound from "../compounds/OptFormCompound";
import Seperator from "../components/Seperator/Seperator";
import AccordionCompound from "../compounds/AccordionCompound";
import FooterCompound from "../compounds/FooterCompound";
import Head from "next/head";
import Html from "next/head";


function Home() {
  return (
    <>
      <HeaderCompound>
        <OptFormCompound />
      </HeaderCompound>
      <Seperator />
      <JumboCompound />
      <AccordionCompound />
      <OptFormCompound />
      <Seperator />
      <FooterCompound />
    </>
  );
}

export default Home;
