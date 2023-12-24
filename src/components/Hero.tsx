import { HashLink } from "react-router-hash-link";
import HeartLobster from "../assets/images/heart-lobster.png";
import Wave from "../assets/images/hero-transition.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="block--light">
      <div className="block container grid grid--1x2 grid--center gap--lg align--center">
        <div className="hero__description">
          <h1 className="highlight">Ocean Cravings</h1>
          <p className="tagline">A Seafood Lover's Paradise</p>
          <p className="heading__description">
            Indulge in the ocean's finest delicacies with our extensive array of
            fresh and sustainable seafood offerings.
          </p>
          <div className="flex gap--sm btn--group hero__btns">
            <HashLink to="#features">
              <Button className="btn--secondary">Why Dine In Here?</Button>
            </HashLink>
            <HashLink to="menu">
              <Button className="btn--primary">View Menu</Button>
            </HashLink>
          </div>
        </div>
        <img className="img img--600" src={HeartLobster} alt="" />
      </div>
      <img className="img img--sand" src={Wave} alt="" />
    </section>
  );
};

export default Hero;
