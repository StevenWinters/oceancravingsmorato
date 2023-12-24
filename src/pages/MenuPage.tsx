import { useEffect } from "react";
import Menu from "../components/Menu";
import MenuHero from "../components/MenuHero";

const MenuPage = () => {
  useEffect(() => {
    document.title = "Ocean Cravings | Menu";
  });
  return (
    <>
      <MenuHero />
      <Menu />
    </>
  );
};

export default MenuPage;
