import React from 'react'

const MobileMenuButton = ({open, setOpen}) => {
  return (
    <div
        className={`menu-btn ${open}`}
        onClick={() => setOpen((prev) => (prev === "active" ? "" : "active"))}
    >
        <span className="lines"></span>
    </div>
  )
}

export default MobileMenuButton