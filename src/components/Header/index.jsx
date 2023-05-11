import { useState } from "react"

import { Container } from "./styles"
import { TfiReceipt } from "react-icons/tfi"
import { OpenMenu } from "../OpenMenu"
import { CloseMenu } from "../CloseMenu"
import { Logo } from "../Logo"
import { Menu } from "../Menu"

export function Header({ amount }) {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Container>
      {openMenu ? (
        <CloseMenu
          title={"Menu"}
          onClick={() => {
            setOpenMenu(!openMenu)
          }}
        />
      ) : (
        <OpenMenu
          onClick={() => {
            setOpenMenu(!openMenu)
          }}
        />
      )}
      {!openMenu && <Logo />}

      {!openMenu && (
        <div className="receipt">
          <TfiReceipt size={26} />
          <span>{amount}</span>
        </div>
      )}

      {openMenu && <Menu />}
    </Container>
  )
}
