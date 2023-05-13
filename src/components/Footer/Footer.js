import React from "react";
import lg from "../../img/lg.jpg";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row abc">
          <img src={lg} alt="Logo" />
          <br />
          By leveraging our full spectrum strategy, design, and technology
          capabilities, we deliver game-changing outcomes for our clients around
          the world.
        </div>
        <div className="row">
          <h2>Locations</h2>
          Toronto
          <br />
          New Delhi
        </div>
        <div className="row">
          <h2>Services</h2>
          Complete AI + RPA Automation
          <br />
          Cloud Services
          <br />
          Delivery Pipeline Automation
          <br />
          Simplify Cloud Ops
          <br />
          Build Better Apps
        </div>
        <div className="row">
          <h2>XivTech</h2>
          About
          <br />
          Careers
          <br />
          Contact
        </div>
      </div>
    </footer>
  );
}

export default Footer;
