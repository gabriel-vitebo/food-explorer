import { Container } from "./styles"

export function Menu() {
  return (
    <Container>
      <button className="menu">
        <img src="/src/assets/menuIcon.svg" alt="botão para abrir o menu" />
      </button>
    </Container>
  )
}
