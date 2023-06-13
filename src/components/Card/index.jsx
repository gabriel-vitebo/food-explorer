import { Container } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";
import { RxCaretRight } from "react-icons/rx";
import { BsPencil } from "react-icons/bs";
import { Amount } from "../../components/Amount";
import { ButtonBg } from "../../components/ButtonBg";

export function Card({
  isAdm,
  name,
  price,
  image,
  openDetails,
  editFood,
  amount,
  addMore,
  remove,
  addToCart,
}) {
  return (
    <Container>
      {isAdm ? (
        <BsPencil size={25} onClick={editFood} />
      ) : (
        <AiOutlineHeart size={25} />
      )}

      <img src={image} alt="foto do prato" />
      <div className="foodname">
        <h3 onClick={openDetails}>{name}</h3>
        <RxCaretRight size={20} />
      </div>
      <span>R${price}</span>
      <Amount number={amount} isAdm={isAdm} addMore={addMore} remove={remove} />
      <ButtonBg title={"incluir"} isAdm={isAdm} onClick={addToCart} />
    </Container>
  );
}
