import { useState } from "react"

import { useAuth } from "../../hooks/auth"

import { Container, Receipt } from "./styles"
import { TfiReceipt } from "react-icons/tfi"
import { OpenMenu } from "../OpenMenu"
import { CloseMenu } from "../CloseMenu"
import { Logo } from "../Logo"
import { Menu } from "../Menu"

export function Header({ amount }) {
  const { user } = useAuth()
  const [openMenu, setOpenMenu] = useState(false)
  const [isAdm, setIsAdm] = useState(user.isAdm)

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
      {!openMenu && <Logo isAdm={isAdm} />}

      {!openMenu && (
        <Receipt isAdm={isAdm}>
          <TfiReceipt size={26} />
          <span>{amount}</span>
        </Receipt>
      )}

      {openMenu && <Menu isAdm={isAdm} />}
    </Container>
  )
}
