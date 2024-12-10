import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({children}) {
  return (
    <div>
      <Header />
      <main style={{ height: "80vh" }}> {children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
