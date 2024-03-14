import React from 'react'

const MenuDropDown = ({ title, children }) => {
  return (
    <span className="link drop-down">
        <p>{title}</p>
        <div className="drop-down--list">
            {children}
        </div>
    </span>
  )
}

export default MenuDropDown