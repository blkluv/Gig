import { useColorModeValue } from "@chakra-ui/react";
import Hero from "../components/Hero/index";
import Navbar from "../components/Navbar/index";
//import JobPost from "../components/Minter/JobPost";
import PillPity from "pill-pity";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
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
        <title>ARVRtise Gig - A free gig marketplace</title>
        <meta
          name="ARVRtise Gig - A purpose based free gig marketplace"
          content="A free gig marketplace that allows you to barter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Footer />
    </PillPity>
  );
}
