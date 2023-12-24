import { BiSolidDirectionRight } from "react-icons/bi";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { GrMail } from "react-icons/gr";
import ContactImage from "../assets/images/store.jpg";

const ContactDetails = () => {
  return (
    <div className="location__card">
      <h2>Restaurant Details</h2>
      <div className="grid location__grid gap--lg">
        <img className="img location__img" src={ContactImage} alt="" />
        <div>
          <ul className="location__details">
            <li className="flex align--center gap--sm location__detail">
              <span>
                <BiSolidDirectionRight size={25} />
              </span>
              195 TOMAS MORATO , Quezon City, Philippines
            </li>
            {/* <li className="flex align--center gap--sm location__detail">
                <span>
                  <BsFillTelephoneFill size={25} />
                </span>
                0915 308 6116
              </li> */}
            {/* <li className="flex align--center gap--sm location__detail">
                <span>
                  <GrMail size={25} />
                </span>
                pinkyp.lopez@gmail.com
              </li> */}
          </ul>
          <iframe
            className="img location__img location__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4124939210456!2d121.02980648523067!3d14.63251083984575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7b2c09d9579%3A0xf8b7d8947d5b391!2s195%20Tomas%20Morato%20Ave%2C%20Diliman%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1703406889381!5m2!1sen!2sph"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <iframe
        className="img location__img location__sub-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4124939210456!2d121.02980648523067!3d14.63251083984575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7b2c09d9579%3A0xf8b7d8947d5b391!2s195%20Tomas%20Morato%20Ave%2C%20Diliman%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1703406889381!5m2!1sen!2sph"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactDetails;
