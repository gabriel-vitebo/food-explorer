import { useState } from "react"

import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

import { Container, Receipt } from "./styles"
import { TfiReceipt } from "react-icons/tfi"
import { OpenMenu } from "../OpenMenu"
import { CloseMenu } from "../CloseMenu"
import { Logo } from "../Logo"
import { Menu } from "../Menu"

export function Header({ amount }) {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)
  const [isAdm, setIsAdm] = useState(user.isAdm)

  function backToHome() {
    navigate("/")
  }

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
      {!openMenu && <Logo isAdm={isAdm} onClick={backToHome} />}

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
