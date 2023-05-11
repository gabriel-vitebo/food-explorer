import { Container } from "./styles"

import { Input } from "../Input"

import { AiOutlineSearch } from "react-icons/ai"

export function Menu() {
  return (
    <Container>
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
