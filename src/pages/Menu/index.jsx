import { Container, Content } from "./styles"
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"

export function Menu() {
  return (
    <Container>
      <header>
        <Button icon={AiOutlineClose} title={"Menu"} size={24} />
      </header>
      <Content>
        <Input
          icon={AiOutlineSearch}
          placeholder={"Busque por pratos ou ingredientes"}
        />
        <button className="button">Sair</button>
      </Content>
      <Footer />
    </Container>
  )
}
