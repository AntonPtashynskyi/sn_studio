"use client";
import React, { useState } from "react";
import "./accordion-schedule.scss";

const AccordionSchedule = ({ title, copy, description, positionNumber, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  let activeClass = isOpen ? "active" : "";
  return (
    <div className={`accordion-schedule accordion-schedule__block`}>
      <button onClick={() => setIsOpen(!isOpen)} className={`accordion__item ${activeClass}`}>
        <div className="left-block">
            <span className="number">{positionNumber}</span>
            <div className="copy">
                <h3 className="title">{title}</h3>
                {description && <p className="description">{description}</p>}
            </div>
        </div>
        <div className={`icon ${activeClass}`}></div>
      </button>
      <div className={`accordion__copy ${activeClass}`}>
        <div className="overflow-hidden">
            {children}
        </div>
      </div>
    </div>
  );
};


export default AccordionSchedule;
