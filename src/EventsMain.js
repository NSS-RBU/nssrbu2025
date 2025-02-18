import React, { useEffect, useState } from "react";
import "./EventsMain.css";
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";

const EventMain = () => {
  const [boomEffect, setBoomEffect] = useState(false);

  useEffect(() => {
    setBoomEffect(true);
  }, []);

  return (
    <div>
      <Navbar />
    <div className={`event-container ${boomEffect ? "boom-effect" : ""}`}>
      <h1 className="title">🎉 Welcome to NSS Events 🎉</h1>
      <p className="subtitle">Know more about events organised by NSS RBU</p>

      <div className="button-container">
        <a href="https://linktr.ee/Prerna_17.0_Registration" className="btn rbu-btn">
           Regular Events
        </a>
        <a href="https://rcoem.in/anon_evForm.htm?ev=225" className="btn non-rbu-btn">
          Special Activities
        </a>
      </div>
    </div>
    <NSSFooter />
    </div>
  );
};

export default EventMain;