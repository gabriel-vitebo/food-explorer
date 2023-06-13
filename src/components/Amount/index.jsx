import { Container } from "./styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export function Amount({ number, isAdm, addMore, remove }) {
  return (
    <Container isAdm={isAdm}>
      <AiOutlinePlus size={27} onClick={addMore} />
      {number}
      <AiOutlineMinus size={27} onClick={remove} />
    </Container>
  );
}
