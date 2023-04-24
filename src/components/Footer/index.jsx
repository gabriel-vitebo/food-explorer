import { Container } from "./styles"

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <img
          src="/src/assets/logoDark.svg"
          alt="logo do food explorer mais escuro"
        />
        <h3>food explorer</h3>
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
