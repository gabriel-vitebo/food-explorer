import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Category } from "../../components/Category"
export function Home() {
  return (
    <Container>
      <Header amount={3} />
      <div className="brand">
        <img src="/src/assets/brend.png" alt="" />
      </div>
      <Category title={"Refeições"}></Category>
    </Container>
  )
}
