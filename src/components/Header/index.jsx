import { useState } from "react"

import { Container } from "./styles"
import { TfiReceipt } from "react-icons/tfi"
import { MenuButton } from "../MenuButton"
import { Logo } from "../Logo"
import { Input } from "../Input"
import { Button } from "../Button"

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"

export function Header({ amount, isAdm, isActive }) {
  return (
    <Container>
      <MenuButton />
      <Logo />
      {isAdm ? (
        <div></div>
      ) : (
        <div className="receipt">
          <TfiReceipt size={26} />
          <span>{amount}</span>
        </div>
      )}
      <div className="menu">
        <div className="close-menu">
          <Button icon={AiOutlineClose} title={"Menu"} />
        </div>
        <Input
          icon={AiOutlineSearch}
          placeholder={"Busque por pratos ou ingredientes"}
        />
        <ul>
          <li>Sair</li>
          {isAdm && <li>Novo prato</li>}
        </ul>
      </div>
    </Container>
  )
}
