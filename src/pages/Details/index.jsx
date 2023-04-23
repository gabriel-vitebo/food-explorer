import { Container } from "./styles"
import { RxCaretLeft } from "react-icons/rx"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { FoodImage } from "../../components/FoodImage"

export function Details() {
  return (
    <Container>
      <Header amount={3} />
      <div className="buttonBack">
        <Button icon={RxCaretLeft} title={"voltar"} />
        <FoodImage image={"/src/assets/Mask group-1.png"} />
      </div>
    </Container>
  )
}
