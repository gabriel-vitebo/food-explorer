import { Container, Content } from "./styles"
import { RxCaretLeft } from "react-icons/rx"
import { TfiReceipt } from "react-icons/tfi"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { FoodImage } from "../../components/FoodImage"
import { Ingredients } from "../../components/Ingredients"
import { Amount } from "../../components/Amount"
import { ButtonBg } from "../../components/ButtonBg"
import { Footer } from "../../components/Footer"

export function Details() {
  return (
    <Container>
      <Header amount={3} />
      <main>
        <Content>
          <div className="buttonBack">
            <Button icon={RxCaretLeft} title={"voltar"} />
          </div>
          <FoodImage image={"/src/assets/Mask group-1.png"} />
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <div className="ingredients">
            <Ingredients name={"alface"} />
            <Ingredients name={"cebola"} />
            <Ingredients name={"pão naan"} />
            <Ingredients name={"pepino"} />
            <Ingredients name={"rabanete"} />
            <Ingredients name={"tomate"} />
          </div>
          <div className="quantity-and-finalize">
            <Amount number={"01"} />
            <ButtonBg icon={TfiReceipt} title={"pedir"} price={"25,00"} />
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}
