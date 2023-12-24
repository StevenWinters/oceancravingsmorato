import missionVisionData from "../data/missionVisionData";

const MissionVision = () => {
  return (
    <section className="block block--dark">
      <h2>Mission and Vision</h2>
      <div className="grid ms-vs__grid justify--center gap">
        {missionVisionData.map((data) => (
          <div key={data.id} className="card card--600 ms-vs__card">
            <h3>{data.heading}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
