import { Container } from "./styles"
import { AiOutlineMenu } from "react-icons/ai"

export function OpenMenu({ ...rest }) {
  return (
    <Container {...rest}>
      <button className="menu">
        <AiOutlineMenu size={24} />
      </button>
    </Container>
  )
}
