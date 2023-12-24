import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer__block block--dark">
      <div className="flex justify--between align--center container footer__container">
        <p className="footer__copyright">
          Copyright &copy;2023 Ocean Cravings Manila. All rights reserved.
        </p>
        <div>
          <h4 className="footer__heading">Follow Us On</h4>
          <div className="flex justify--center">
            <Link
              to="https://www.facebook.com/oceancravingsmorato"
              target="_blank"
            >
              <BiLogoFacebook size={25} />
            </Link>
            <Link
              to="https://www.instagram.com/oceancravingsmnl/?hl=en"
              target="_blank"
            >
              <AiFillInstagram size={25} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
