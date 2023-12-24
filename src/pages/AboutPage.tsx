import { useEffect } from "react";
import AboutHero from "../components/AboutHero";
import MissionVision from "../components/MissionVision";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Ocean Cravings | About Us";
  });
  return (
    <>
      <AboutHero />
      <MissionVision />
    </>
  );
};

export default AboutPage;
