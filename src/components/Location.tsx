import ContactDetails from "./ContactDetails";

const Location = () => {
  return (
    <section className="block--light">
      <div className="block block--dark location__header">
        <h1>Location</h1>
      </div>
      <div className="block container">
        <ContactDetails />
      </div>
    </section>
  );
};

export default Location;
