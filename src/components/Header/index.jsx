import { useEffect } from "react"

import { Container } from "./styles"
import { TfiReceipt } from "react-icons/tfi"
import { MenuButton } from "../MenuButton"
import { Logo } from "../Logo"
import { Menu } from "../Menu"

export function Header({ amount, isActive = false }) {
  console.log(isActive)

  function handleActive() {
    isActive = true
    console.log(isActive)
  }

  function handleDisable() {
    isActive = false
    console.log(isActive)
  }

  return (
    <Container>
      <MenuButton onClick={handleActive} />
      <Logo />
      <div className="receipt">
        <TfiReceipt size={26} />
        <span>{amount}</span>
      </div>
      {isActive && <Menu onClick={handleDisable} />}
    </Container>
  )
}
