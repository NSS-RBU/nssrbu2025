import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar.js';
import NSSFooter from './NSSFooter.js';
import './ReachEvent.css';

function ReachEvent() {
  const { domain } = useParams(); // Capture the domain parameter from the URL
  const navigate = useNavigate(); // Use the new `useNavigate` hook
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isActive, setIsActive] = useState(false); // To trigger content display after load

  useEffect(() => {
    setIsActive(true); // Activate the content display after the component is mounted
  }, []);

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  };

  const navigateToEvent = () => {
    if (selectedEvent) {
      // Redirect to the specific event page within the domain
      navigate(`/${domain}/${selectedEvent}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    setIsActive(true); // Activate the content display after the component is mounted
  }, [domain]); // Re-run the effect whenever the domain changes

  let title = "";
  let content = "";
  let eventImage = ""; // Default event image variable

  // Define events for each domain with images
  switch (domain) {
    case 'education':
      title = "Education Events";
      content = "Explore a variety of educational events and initiatives.";
      eventImage = "path/to/education-image.jpg"; // Replace with actual image path
      break;
    case 'health':
      title = "Health Events";
      content = "Join health awareness campaigns, workshops, and activities.";
      eventImage = "path/to/health-image.jpg"; // Replace with actual image path
      break;
    case 'innovation':
      title = "Innovation Events";
      content = "Participate in innovation challenges, hackathons, and idea-generation events.";
      eventImage = "path/to/innovation-image.jpg"; // Replace with actual image path
      break;
    case 'society':
      title = "Society Events";
      content = "Get involved in community service projects and societal development activities.";
      eventImage = "path/to/society-image.jpg"; // Replace with actual image path
      break;
    case 'environment':
      title = "Environment Events";
      content = "Join environmental sustainability projects and eco-friendly initiatives.";
      eventImage = "path/to/environment-image.jpg"; // Replace with actual image path
      break;
    case 'rural':
      title = "Rural Development Events";
      content = "Engage in rural development projects aimed at improving infrastructure and education.";
      eventImage = "path/to/rural-image.jpg"; // Replace with actual image path
      break;
    default:
      title = "Domain Not Found";
      content = "Sorry, the domain you're looking for doesn't exist.";
  }

  return (
    <div>
      <Navbar />
      <div className={`event-page ${isActive ? 'active' : ''}`}>
        <h1>{title}</h1>
        <p>{content}</p>
        {eventImage && <img src={eventImage} alt={`${domain} event`} className="event-image" />}
        
        <div className="event-selector">
          <p>Select the event to view more details:</p>
          <select value={selectedEvent} onChange={handleEventChange}>
            <option value="">-- Select Event --</option>
            {/* Add event options here, dynamically change based on domain */}
            <option value="event1">Event 1</option>
            <option value="event2">Event 2</option>
            <option value="event3">Event 3</option>
          </select>
          <button onClick={navigateToEvent} disabled={!selectedEvent}>View Event</button>
        </div>
      </div>
      <NSSFooter />
    </div>
  );
}

export default ReachEvent;
