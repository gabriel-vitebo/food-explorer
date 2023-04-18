import { Container } from "./styles"

export function Header() {
  return (
    <Container>
      <img src="/src/assets/menuIcon.svg" alt="botão para abrir o menu" />
      <div className="logo">
        <img src="/src/assets/logo.svg" alt="logo da food explorer" />
        <h1>food explorer</h1>
      </div>
      <div className="receipt">
        <img
          src="/src/assets/receipt.svg"
          alt="ícone mostrando a quantidade de itens você adicionou"
        />
        <span>0</span>
      </div>
    </Container>
  )
}
