import { Container } from "./styles"
import { RxCaretLeft } from "react-icons/rx"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
      <Header amount={3} />
      <div>
        <Button icon={RxCaretLeft} title={"voltar"} />
      </div>
    </Container>
  )
}
