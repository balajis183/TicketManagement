import React, { useState } from "react";
import Layout from "../Components/Layout";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Places() {
  const [placeName, setplaceName] = useState("");
  const [placeDescription, setplaceDescription] = useState("");
  const [placeAddress, setplaceAddress] = useState("");
  const [image, setImage] = useState(null);

  function handleSubmit(event) {
    const formObj = { placeName, placeDescription, placeAddress, image };
    console.log(formObj);

    axios
      .post("http://localhost:8000/places/createPlace", formObj)

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    event.preventDefault();
  }

  return (
    <div>
      <Layout>
        <h1>Places</h1>
        <h3 className="display-4 text-center">Create places </h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label For="placeName">Place Name</label>
            <input
              type="text"
              name="placeName"
              id="placeName"
              className="form-control"
              onChange={(event) => {
                setplaceName(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label For="description">Description </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              onChange={(event) => {
                setplaceDescription(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label For="address">Address</label>
            <input
              type="text"
              name="placeaddress"
              id="placeaddress"
              className="form-control"
              onChange={(event) => {
                setplaceAddress(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label For="place-image">Image</label>
            <input
              type="file"
              accept="image/**"
              name="placeimage"
              id="placeimage"
              className="form-control"
              onChange={(event) => {
                const file = event.target.files[0];
                console.log(event.target.files);
                if (file) {
                  setImage(file);
                  alert("Image uploaded");
                } else {
                  alert("Cannot upload image ");
                }
              }}
            />
          </div>

          <div className="form-group d-flex justify-content-center">
            <input type="submit" className="btn btn-primary p-3 m-3" />
          </div>
        </form>
      </Layout>
    </div>
  );
}

export default Places;
