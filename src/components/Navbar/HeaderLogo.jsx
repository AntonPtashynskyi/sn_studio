import React from 'react'
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/assets/svg/logo--in_brows.svg";

const HeaderLogo = () => {
  return (
    <Link href="/">
        <Image
        src={logo}
        alt="In brows"
        width="auto"
        height="auto"
        className="logo-link"
        />
    </Link>
  )
}

export default HeaderLogo