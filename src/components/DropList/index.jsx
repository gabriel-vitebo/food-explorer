import { Container } from "./styles"

export function DropList({ title, icon: Icon }) {
  return (
    <Container>
      <span>{title}</span>
      <select name="select" id="select">
        <option className="option">refeição</option>
        <option className="option">sobremesa</option>
        <option className="option">bebida</option>
      </select>
    </Container>
  )
}
