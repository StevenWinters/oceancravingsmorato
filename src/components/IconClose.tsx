import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  onToggle: () => void;
}

const IconClose = ({ onToggle }: Props) => {
  return (
    <span className="icon icon--close" onClick={() => onToggle()}>
      <AiOutlineCloseCircle size={30} color={"var(--color-dark-background)"} />
    </span>
  );
};

export default IconClose;
