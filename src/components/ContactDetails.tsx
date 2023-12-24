import { BiSolidDirectionRight } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const ContactDetails = () => {
  return (
    <div className="location__card">
      <h2>Restaurant Details</h2>
      <div className="grid grid--1x2 gap--lg">
        <iframe
          className="location__map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3860.4178233597595!2d121.03309002587478!3d14.63220787630048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s195%20Tomas%20Morato%20Ave%20Corner%20Sct.%20Fernandez%20%26%20Sct.%20Fuentebella!5e0!3m2!1sen!2sph!4v1703404176798!5m2!1sen!2sph"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
        <ul className="location__details">
          <li className="flex align--center gap--sm location__detail">
            <span>
              <BiSolidDirectionRight size={25} />
            </span>
            195 TOMAS MORATO , Quezon City, Philippines
          </li>
          <li className="flex align--center gap--sm location__detail">
            <span>
              <BsFillTelephoneFill size={25} />
            </span>
            0915 308 6116
          </li>
          <li className="flex align--center gap--sm location__detail">
            <span>
              <GrMail size={25} />
            </span>
            pinkyp.lopez@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
