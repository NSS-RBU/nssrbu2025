import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Event.css';
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";

const events = [
  {
    name: 'INDEPENDENCE DAY',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'A patriotic event celebrating India’s independence with cultural programs and flag hoisting.',
    description2: 'Students and faculty participate in speeches, dances, and community service initiatives.',
  },
  {
    name: 'YOGA DAY',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'Promoting health and wellness through yoga sessions conducted by trained professionals.',
    description2: 'People of all ages join together to practice mindfulness and improve their physical well-being.',
  },
  {
    name: 'REPUBLIC DAY',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'Commemorating the adoption of the Indian Constitution with parades and cultural programs.',
    description2: 'A day filled with patriotic fervor, music, and awareness drives about citizens’ responsibilities.',
  },
];

function EventSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings} className="event-slider">
      {images.map((img, idx) => (
        <div key={idx}>
          <img src={img} alt="event slide" className="event-slide-image" />
        </div>
      ))}
    </Slider>
  );
}

function SpecialActivities() {
  return (
    <div>
      <Navbar />
    <div className="events-container">
      <h2 className="events-title">EVENTS</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={event.name} className="event-box">
          <EventSlider images={event.images} />
          <div className="event-details">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-description">{event.description1}</p>
            <p className="event-description">{event.description2}</p>
          </div>
        </div>        
        ))}
      </div>
    </div>
    <NSSFooter />
    </div>

  );
}

export default SpecialActivities;