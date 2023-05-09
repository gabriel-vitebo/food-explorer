import { Container } from "./styles"

import { Input } from "../Input"
import { Button } from "../Button"

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"

export function Menu() {
  return (
    <Container>
      <div className="close-menu">
        <Button icon={AiOutlineClose} title={"Menu"} />
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
