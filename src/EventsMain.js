import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Import Link from React Router
import "./EventsMain.css";
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";
import Event from "./Event.js";

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
          {/* Use Link if navigating within React */}
          <Link to="/events" className="btn-event">
            Regular Events
          </Link>

          {/* External link should open properly */}
          <a href="https://rcoem.in/anon_evForm.htm?ev=225" className="btn-activity" target="_blank" rel="noopener noreferrer">
            Special Activities
          </a>
        </div>
      </div>
      <NSSFooter />
    </div>
  );
};

export default EventMain;
