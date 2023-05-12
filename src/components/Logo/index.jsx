import { Container } from "./styles"

export function Logo({ isAdm, ...rest }) {
  return (
    <Container {...rest}>
      <img src="/src/assets/logo.svg" alt="logo da food explorer" />
      <h2>food explorer</h2>
      {isAdm && <span>admin</span>}
    </Container>
  )
}
