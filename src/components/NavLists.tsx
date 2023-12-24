import { NavLink } from "react-router-dom";
import { navListsData } from "../data/navListsData";

interface Props {
  onToggle: () => void;
}

const NavLists = ({ onToggle }: Props) => {
  return (
    <ul className="flex align--center nav__lists">
      {navListsData.map((data) => (
        <li key={data.id} className="nav__list">
          <NavLink
            className="nav__links"
            to={data.path}
            onClick={() => onToggle()}
          >
            {data.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLists;
