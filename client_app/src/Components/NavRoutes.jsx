import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NavRoutes;
