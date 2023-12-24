import { Link } from "react-router-dom";
import topSellersData from "../data/topSellersData";
import Button from "./Button";

const Selection = () => {
  return (
    <section className="block block--dark">
      <div className="container selection__container">
        <h2>Top Sellers</h2>
        <div className="grid gap selection__grid justify--center">
          {topSellersData.map((data) => (
            <div
              key={data.id}
              className="flex flex--column justify--center align--center gap card card--350"
            >
              <img
                className="img img--circle selection__image"
                src={data.src}
                alt={data.name}
              />

              <h3>{data.name}</h3>
              <Link to="menu">
                <Button className="btn--sm btn--primary">View</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Selection;
