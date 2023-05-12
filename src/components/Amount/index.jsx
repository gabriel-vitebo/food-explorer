import { Container } from "./styles"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

export function Amount({ number, isAdm }) {
  return (
    <Container isAdm={isAdm}>
      <AiOutlinePlus size={27} />
      {number}
      <AiOutlineMinus size={27} />
    </Container>
  )
}
