import Link from 'next/link'
import React from 'react'

const MenuLink = ({ href, title, onClick }) => {
  return (
    <Link href={href} className="link" onClick={onClick}>
      <p className="title">{ title }</p>
    </Link>
  )
}

export default MenuLink