interface Props {
  onToggle: () => void;
}

const HamburgerMenu = ({ onToggle }: Props) => {
  return (
    <div
      className="flex flex--column hamburger__menu"
      onClick={() => onToggle()}
    >
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
    </div>
  );
};

export default HamburgerMenu;
