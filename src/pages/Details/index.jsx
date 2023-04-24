import { Container } from "./styles"
import { RxCaretLeft } from "react-icons/rx"
import { TfiReceipt } from "react-icons/tfi"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { FoodImage } from "../../components/FoodImage"
import { Ingredients } from "../../components/Ingredients"
import { Amount } from "../../components/Amount"
import { ButtonBg } from "../../components/ButtonBg"

export function Details() {
  return (
    <Container>
      <Header amount={3} />
      <div className="buttonBack">
        <Button icon={RxCaretLeft} title={"voltar"} />
      </div>
      <main className="food-details">
        <FoodImage image={"/src/assets/Mask group-1.png"} />
        <h1>Salada Ravanello</h1>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </p>
        <div className="ingredients">
          <Ingredients name={"alface"} />
          <Ingredients name={"cebola"} />
          <Ingredients name={"pepino"} />
        </div>
        <div className="quantity-and-finalize">
          <Amount number={"01"} />
          <ButtonBg icon={TfiReceipt} title={"pedir"} price={"25,00"} />
        </div>
      </main>
    </Container>
  )
}
