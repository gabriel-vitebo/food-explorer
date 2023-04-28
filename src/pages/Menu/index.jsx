import { Container, Content } from "./styles"
import { GrClose, GrSearch } from "react-icons/gr"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"

export function Menu() {
  return (
    <Container>
      <header>
        <Button icon={GrClose} title={"Menu"} />
      </header>
      <Content>
        <Input
          icon={GrSearch}
          placeholder={"Busque por pratos ou ingredientes"}
        />
        <button className="button">Sair</button>
      </Content>
      <Footer />
    </Container>
  )
}
