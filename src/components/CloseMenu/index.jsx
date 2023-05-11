import { Container } from "./styles"
import { AiOutlineClose } from "react-icons/ai"

export function CloseMenu({ title, ...rest }) {
  return (
    <Container {...rest}>
      <button className="menu">
        <AiOutlineClose size={24} />
        <span>{title}</span>
      </button>
    </Container>
  )
}
