import AboutHeroImage from "../assets/images/heart-lobster.png";

const AboutHero = () => {
  return (
    <section className="block block--light">
      <div className="grid grid--1x2 grid--center align--center container">
        <h1>About Us</h1>
        <img className="img img--500" src={AboutHeroImage} alt="" />
      </div>
    </section>
  );
};

export default AboutHero;
