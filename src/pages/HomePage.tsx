import { useEffect } from "react";
import Hero from "../components/Hero";
import Selection from "../components/Selection";
import Features from "../components/Features";

const HomePage = () => {
  useEffect(() => {
    document.title = "Ocean Cravings | Home";
  });
  return (
    <>
      <Hero />
      <Selection />
      <Features />
    </>
  );
};

export default HomePage;
