import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [places, setPlace] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/places/getplaces")

      .then((res) => {
        console.log(res);
        alert(res.data.message);
        setPlace(res.data.places);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function displayPlaces() {
    return places.map((place, index) => {
      return (
        <div key={index} className="p-3 border border-primary">
          <h2 className="fw-light">{place.placeName}</h2>
          <p>{place.placeDescription}</p>
          <p>{place.placeAddress}</p>

          <Link to={`/places/${place._id}`}>
            <button className="btn btn-primary ">Book Now</button>
          </Link>
        </div>
      );
    });
  }

  return (
    <Layout>
      {/* <h1>Home page </h1> */}
      <h2 className="fw-semibold text-center text-success p-2">
        {" "}
        Select your travel destination
      </h2>
      <div className="d-flex m-2">{displayPlaces()}</div>

      {/* fetch the data from the data into home page  */}
    </Layout>
  );
}

export default Home;
