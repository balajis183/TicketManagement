import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Places from "../pages/Places";
import TicketBookPage from "../pages/TicketBookPage";

function NavRoutes() {
  return (
    <div>
      <BrowserRouter>
        {/* <Layout /> */}

        <Routes>
          {/* <Route path="/" element={<Layout />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id" element={<TicketBookPage />} />
          {/* <Route path="/tickets" element={<TicketBookPage/>}/> */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NavRoutes;
