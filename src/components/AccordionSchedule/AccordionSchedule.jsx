"use client";
import React, { useState } from "react";
import "./accordion-schedule.scss";

const AccordionSchedule = ({ title, copy, className, positionNumber, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordion-schedule accordion-schedule__block`}>
      <button onClick={() => setIsOpen(!isOpen)} className="accordion__item">
        <div className="left-block">
            <span className="number">{positionNumber}</span>
            <h3 className="title">{title}</h3>
        </div>
        <div className={`icon ${isOpen ? "active" : ""}`}></div>
      </button>
      <div className={`accordion__copy ${isOpen ? "active" : ""}`}>
        <div className="overflow-hidden">{copy}
            {children}
        </div>
      </div>
    </div>
  );
};


export default AccordionSchedule;
