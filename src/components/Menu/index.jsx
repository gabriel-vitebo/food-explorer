import { Container } from "./styles"
import { AiOutlineMenu } from "react-icons/ai"

export function Menu() {
  return (
    <Container>
      <button className="menu">
        <AiOutlineMenu size={24} />
      </button>
    </Container>
  )
}
