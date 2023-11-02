"use client";
import React, { useState } from "react";
// import styles from "./navbar.module.scss";
import "./navbar.scss";

export const Navbar = () => {
  const [open, setOpen] = useState("");

  return (
    <header className="navBar">
      <div className="">LOGO</div>
      {/* <button
        className={`${styles.hamburger_init} ${open}`}
        onClick={() => setOpen((prev) => (prev === "active" ? "" : "active"))}
      >
        <span className={`${styles.bar} ${styles.top_bar}`}></span>
        < className={`${styles.bar} ${styles.middle_bar}`}></ span>
        <span className={`${styles.bar} ${styles.bottom_bar}`}></span>
      </button> */}
      <div
        className={`${open} menu-btn`}
        onClick={() => setOpen((prev) => (prev === "active" ? "" : "active"))}
      >
        <span></span>
      </div>
    </header>
  );
};
