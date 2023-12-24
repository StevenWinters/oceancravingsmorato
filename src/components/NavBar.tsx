import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import IconClose from "./IconClose";
import Logo from "./Logo";
import NavLists from "./NavLists";

interface Props {
  mode: string;
}

const NavBar = ({ mode }: Props) => {
  const [isMenuActive, handleMenu] = useState(false);

  return (
    <header className={`nav__header ${mode === "dark" && "dark"}`}>
      <nav
        className={`flex justify--between align--center nav__bar ${
          isMenuActive && "active"
        }`}
      >
        <Logo mode={mode} onToggle={() => handleMenu(false)} />
        <NavLists onToggle={() => handleMenu(false)} />
        <HamburgerMenu onToggle={() => handleMenu(true)} />
        <IconClose onToggle={() => handleMenu(false)} />
      </nav>
    </header>
  );
};

export default NavBar;
