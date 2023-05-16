import { Container } from "./styles"

export function DropList({ children }) {
  return (
    <Container>
      <select name="select" id="select">
        {children}
      </select>
    </Container>
  )
}
