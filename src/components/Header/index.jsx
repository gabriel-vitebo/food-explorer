import { useState } from "react"

import { Container } from "./styles"
import { TfiReceipt } from "react-icons/tfi"
import { MenuButton } from "../MenuButton"
import { Logo } from "../Logo"
import { Menu } from "../Menu"

export function Header({ amount, isActive }) {
  return (
    <Container>
      <MenuButton />
      <Logo />
      <div className="receipt">
        <TfiReceipt size={26} />
        <span>{amount}</span>
      </div>
      {isActive && <Menu />}
    </Container>
  )
}
