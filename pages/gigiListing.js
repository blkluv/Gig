import React from "react";

import Navbar from "../components/Navbar/index";
import PillPity from "pill-pity";
import { useColorModeValue } from "@chakra-ui/react";

import Joblisting from "../components/Minter/Joblisting";
import Footer from "../components/Footer/index";
import Head from "next/head";
export default function GigiListing() {
  const patterFill = useColorModeValue("#76E5FC", "#C6AD93");
  return (
    <PillPity
      pattern="four-point-stars"
      patternFill={patterFill}
      bgColor="choc.secondary"
      patternOpacity={0.1}
      padding="0, 2rem"
      minH="100vh"
    >
      <Head>
        <title>Post Work - GigiBlock</title>
        <meta
          name="ARVRtise Gig - A purpose based free gig marketplace"
          content="A free gig marketplace that allows you to barter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Joblisting />

      <Footer />
    </PillPity>
  );
}
