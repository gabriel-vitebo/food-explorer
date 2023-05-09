import { Container } from "./styles"
import { AiOutlineMenu } from "react-icons/ai"

export function MenuButton({ ...rest }) {
  return (
    <Container {...rest}>
      <button className="menu">
        <AiOutlineMenu size={24} />
      </button>
    </Container>
  )
}
