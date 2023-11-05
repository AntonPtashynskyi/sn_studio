"use client";
import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 uppercase text-xs">
      <p className="text-center">All right reserved {year}</p>
    </footer>
  );
};
