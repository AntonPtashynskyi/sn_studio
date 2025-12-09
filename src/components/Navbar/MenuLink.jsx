import Link from 'next/link'
import React from 'react'

const MenuLink = ({ href, title, onClick, ariaLabel }) => {
  return (
    <Link
      href={href}
      className="link"
      onClick={onClick}
      aria-label={ariaLabel || title}
      title={title}
    >
      <p className="title">{ title }</p>
    </Link>
  )
}

export default MenuLink