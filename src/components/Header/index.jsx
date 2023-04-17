import { Container, Logo } from "./styles"

import { AiOutlineMenu } from "react-icons/ai"

export function Header() {
  return (
    <Container>
      <AiOutlineMenu size={24} />
      <Logo>
        <img src="/src/assets/logo.svg" alt="" />
        <h1>food explorer</h1>
      </Logo>
    </Container>
  )
}
