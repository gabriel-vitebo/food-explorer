import { useState } from "react"

import { Container } from "./styles"

import { Input } from "../Input"
import { Button } from "../Button"

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"

export function Menu({ ...rest }) {
  const [disable, setDisable] = useState(false)
  console.log(disable)
  return (
    <Container className={disable && "inative"}>
      <div
        className="close-menu"
        onClick={() => {
          setDisable(!disable)
          console.log(disable)
        }}
      >
        <Button icon={AiOutlineClose} title={"Menu"} {...rest} />
      </div>
      <Input
        icon={AiOutlineSearch}
        placeholder={"Busque por pratos ou ingredientes"}
      />
      <ul>
        <li>Sair</li>
        <li>Novo prato</li>
      </ul>
    </Container>
  )
}
