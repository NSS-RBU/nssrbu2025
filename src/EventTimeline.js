import React from "react";
import "./EventTimeline.css";

const Timeline = () => {
  const timelineData = [
    { title: "January", content: "Youth Day" },
    { title: "January", content: "Happython" },
    { title: "January", content: "Republic Day" },
    { title: "February", content: "Prerna" },
    { title: "June", content: "Yoga Day" },
    { title: "August", content: "Independence Day" },
    { title: "September", content: "Foundation Week" },
    { title: "October", content: "Blood Donation Camp" },
    { title: "October", content: "Mega Cleanliness Drive" },
    ];

  return (
    <div className="timeline">
      <div className="outer">
        {timelineData.map((item, index) => (
          <div className="card" key={index}>
            <div className="info">
              <h3 className="title">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
