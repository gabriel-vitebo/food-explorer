import { Container, Content } from "./styles"
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { Button } from "../Button"
import { Input } from "../Input"
import { Footer } from "../Footer"

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
