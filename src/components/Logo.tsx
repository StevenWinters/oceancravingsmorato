import { Link } from "react-router-dom";
import LogoImage from "../assets/images/logo.png";
import LogoLightText from "../assets/images/text-logo-orange.png";
import LogoDarkText from "../assets/images/text-logo-white.png";

interface Props {
  mode: string;
  onToggle?: () => void;
}

const Logo = ({ mode, onToggle }: Props) => {
  return (
    <Link to="/" className="flex align--center">
      <img
        className="img img--logo"
        src={LogoImage}
        alt=""
        onClick={() => onToggle!()}
      />
      {window.matchMedia("(min-width: 768px)").matches && mode === "dark" ? (
        <img
          className="img img--text"
          src={LogoDarkText}
          alt="Ocean Cravings"
          onClick={() => onToggle!()}
        />
      ) : (
        <img
          className="img img--text"
          src={LogoLightText}
          alt="Ocean Cravings"
          onClick={() => onToggle!()}
        />
      )}
    </Link>
  );
};

export default Logo;
