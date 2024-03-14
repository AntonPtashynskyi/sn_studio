import React, { useState } from 'react'

const MobileMenuDropDown = ({ title, children }) => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
        <p
            className={`mobile-accordion__button ${dropDownIsOpen}`}
            onClick={() =>
                setDropDownIsOpen((prev) => (prev === "active" ? "" : "active"))
            }
        >
            { title }
        </p>
        <div className={`mobile-accordion__copy ${dropDownIsOpen}`}>
            <div className='inner-copy__block'>
                { children }
            </div>
        </div>
    </div>
  )
}

export default MobileMenuDropDown