// import React, { useEffect,useState } from "react";
// import Layout from "../Components/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function TicketBookPage() {
//   const [place, setPlace] = useState("");
//   const [user, setUser] = useState("");
//   const [from, setFrom] = useState("");
//   const [seats, setSeats] = useState("");
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/places/getplace/${id}`)
//       .then((res) => {
//         setPlace(res.data.place);
//         console.log(res.data.place);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);

//   function handleSubmit() {
//     const formObj = { user, from, seats };
//   }

//   return (
//     <Layout>
//       <h1>Book a ticket</h1>
//       <form onSubmit={handleSubmit}   className="d-flex justify-content-center flex-column align-items-center">
//         <label htmlFor="">UserName</label>
//         <input
//           type="text"
//           placeholder="User Name"
//           onChange={(event) => {
//             setUser(event.target.value);
//           }}
//         />

//         <label htmlFor="">Form</label>
//         <input
//           type="text"
//           placeholder="from"
//           onChange={(event) => {
//             setFrom(event.target.value);
//           }}
//         />

//         <label htmlFor="">Seats</label>
//         <input
//           type="text"
//           placeholder="number of seats "
//           onChange={(event) => {
//             setSeats(event.target.value);
//           }}
//         />
//         <input type="submit" />
//       </form>
//     </Layout>
//   );
// }

// export default TicketBookPage;


import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function TicketBookPage() {
  const [place, setPlace] = useState("");
  const [user, setUser] = useState("");
  const [from, setFrom] = useState("");
  const [seats, setSeats] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/places/getplace/${id}`)
      .then((res) => {
        setPlace(res.data.place);
        console.log(res.data.place);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function handleSubmit() {
    const formObj = { user, from, seats };
  }
  return (
    <Layout>
      {/* {console.log(place)} */}
      <h1 className="fw-light text-center p-3">Tickets to {place.placeName}</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input
            type="text"
            placeholder="User name"
            className="form-control"
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            From
          </label>
          <input
            type="text"
            placeholder="from"
            className="form-control"
            onChange={(event) => {
              setFrom(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Seats
          </label>
          <input
            type="text"
            placeholder="number of seats"
            className="form-control"
            onChange={(event) => {
              setSeats(event.target.value);
            }}
          />
        </div>
        <input type="submit" className="btn btn-success p-2 m-2" />
      </form>
    </Layout>
  );
}

export default TicketBookPage;