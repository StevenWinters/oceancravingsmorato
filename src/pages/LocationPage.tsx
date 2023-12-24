import { useEffect } from "react";
import Location from "../components/Location";

const LocationPage = () => {
  useEffect(() => {
    document.title = "Ocean Cravings | Location";
  });
  return (
    <>
      <Location />
    </>
  );
};

export default LocationPage;
