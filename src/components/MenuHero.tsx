import MenuImage from "../assets/images/all-seafood.jpg";

const MenuHero = () => {
  return (
    <section className="block block--dark">
      <div className="flex justify--center align--center flex--column container menu__hero">
        <img
          className="img img--750 menu__image"
          src={MenuImage}
          alt="Heart Lobster"
        />
        <h1 className="menu__heading">Sea Food</h1>
        <p className="highlight tagline">Menu</p>
      </div>
    </section>
  );
};

export default MenuHero;
