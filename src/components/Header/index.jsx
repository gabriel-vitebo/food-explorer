import { Container } from "./styles"
import { Menu } from "../Menu"

export function Header({ amount }) {
  return (
    <Container>
      <Menu />
      <div className="logo">
        <img src="/src/assets/logo.svg" alt="logo da food explorer" />
        <h1>food explorer</h1>
      </div>
      <div className="receipt">
        <img
          src="/src/assets/receipt.svg"
          alt="ícone mostrando a quantidade de itens você adicionou"
        />
        <span>{amount}</span>
      </div>
    </Container>
  )
}
