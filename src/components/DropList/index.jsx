import { Container } from "./styles"

export function DropList({ icon: Icon }) {
  return (
    <Container>
      <select name="select" id="select">
        <option className="option">refeição</option>
        <option className="option">sobremesa</option>
        <option className="option">bebida</option>
      </select>
    </Container>
  )
}
