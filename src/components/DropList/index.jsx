import { Container } from "./styles"

export function DropList({ children, ...rest }) {
  return (
    <Container>
      <select {...rest} name="select" id="select">
        {children}
      </select>
    </Container>
  )
}
