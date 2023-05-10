import { useState } from "react"

import { Container } from "./styles"
import { TfiReceipt } from "react-icons/tfi"
import { MenuButton } from "../MenuButton"
import { Logo } from "../Logo"
import { Menu } from "../Menu"

export function Header({ amount }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Container>
      <MenuButton
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
      />
      <Logo />
      <div className="receipt">
        <TfiReceipt size={26} />
        <span>{amount}</span>
      </div>
      {openMenu && <Menu />}
    </Container>
  )
}
