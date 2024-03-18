"use client";
import React, { useState } from "react";
import "./faq.scss";

export const AccordionBlock = ({ title, copy, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordion accordion__block ${className}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="accordion__item">
        <h3 className="accordion__item--title">{title}</h3>
        <div className={`icon ${isOpen ? "active" : ""}`}></div>
      </button>
      <div className={`accordion__copy ${isOpen ? "active" : ""}`}>
        <p className="overflow-hidden">{copy}</p>
      </div>
    </div>
  );
};
