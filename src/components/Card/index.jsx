import { Container } from "./styles"
import { AiOutlineHeart } from "react-icons/ai"
import { RxCaretRight } from "react-icons/rx"
import { BsPencil } from "react-icons/bs"
import { Amount } from "../../components/Amount"
import { ButtonBg } from "../../components/ButtonBg"

export function Card({ isAdm, name, price, image }) {
  return (
    <Container>
      {isAdm ? <BsPencil size={25} /> : <AiOutlineHeart size={25} />}

      <img src={image} alt="foto do prato" />
      <div className="foodname">
        <h3>{name}</h3>
        <RxCaretRight size={20} />
      </div>
      <span>R${price}</span>
      <Amount number={1} />
      <ButtonBg title={"incluir"} />
    </Container>
  )
}
