import featuresData from "../data/featuresData";

const Features = () => {
  return (
    <section id="features" className="block block--dark">
      <div className="container">
        <h2>Features</h2>
        {featuresData.map((data) => (
          <article
            key={data.id}
            className="grid grid--1x2 grid--center align--center gap--lg feature"
          >
            <div className="feature__description">
              <h3>{data.heading}</h3>
              <p>{data.description}</p>
            </div>
            <img
              className="img img--500 feature__img"
              src={data.src}
              alt={data.heading}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
