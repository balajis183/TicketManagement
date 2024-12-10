import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>© Copy right 2024</p>
      </div>
      <div className="subscribe">
        <input type="email" placeholder="email " />
        <button>subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;
