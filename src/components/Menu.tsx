import { Link } from "react-router-dom";
import menuData from "../data/menuData";
import Button from "./Button";

const Menu = () => {
  return (
    <section className="block block--light">
      <div className="grid menu__grid gap--lg justify--center container menu">
        {menuData.map((data) => (
          <div key={data.id} className="menu__container">
            <div className="flex flex--column justify--center align--center">
              <span className="badge">{data.menu}</span>
              <p className="menu__description">{data.description}</p>
            </div>
            {data.dishes.map((dish) => (
              <div
                key={dish.id}
                className="flex justify--between align--center gap--lg food__menu"
              >
                <div>
                  <span className="food__title">{dish.title}</span>
                  <p className="food__description">{dish.description}</p>
                </div>
                <div className="flex flex--column price__column">
                  {dish.prices.map((price) => (
                    <span key={price.label} className="food__price">
                      {price.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <Link to="/location" className="flex justify--center">
          <Button className="btn--primary btn--sm menu__btn">
            How To Order
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Menu;
