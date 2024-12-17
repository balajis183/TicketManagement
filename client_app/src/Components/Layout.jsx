import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({children}) {
  console.log(children);
  return (
    <div>
      <Header />
      <main style={{ height: "200vh" }}> {children}</main>
      {/* {children} */}
      <Footer />
    </div>
  );
}

export default Layout;
