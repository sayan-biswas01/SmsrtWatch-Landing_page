import React from "react";
import { Helmet } from "react-helmet";
import Navagation from "./Component/Navagation";
import Hero from "./Component/Hero";
import Features from "./Component/Features";
import Benefits from "./Component/Benefits";
import Demo from "./Component/Demo";
import Testimonials from "./Component/Testimonials";
import Pricing from "./Component/Pricing";
import BuyNow from "./Component/BuyNow";
import FAQ from "./Component/FAQ";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Unique Landing Page</title>
        <meta
          name="description"
          content="A unique and responsive landing page template for SaaS or Product"
        />
      </Helmet>
      <Navagation />
      <Hero />
      <Features />

      <Demo />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <BuyNow />
      <Footer />
    </>
  );
}
