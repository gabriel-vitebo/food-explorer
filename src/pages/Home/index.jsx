import { Container, Content } from "./styles"

import { Header } from "../../components/Header"
import { Category } from "../../components/Category"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
export function Home() {
  return (
    <Container>
      <Header amount={3} />
      <div className="brand">
        <img src="/src/assets/brend.png" alt="" />
      </div>
      <Content>
        <Category title={"Refeições"}>
          <Card
            name={"Salada Ravanello"}
            price={"49,97"}
            image={"/src/assets/Mask group-1.png"}
          />
          <Card
            name={"Spaguetti Gambe"}
            price={"79,97"}
            image={"/src/assets/Mask group-2.png"}
          />
          <Card
            name={"Spaguetti Gambe"}
            price={"79,97"}
            image={"/src/assets/Mask group-2.png"}
          />
          <Card
            name={"Spaguetti Gambe"}
            price={"79,97"}
            image={"/src/assets/Mask group-2.png"}
          />
        </Category>
        <Category title={"Pratos principais"}>
          <Card
            name={"Prugna Pie"}
            price={"79,97"}
            image={"/src/assets/Mask group-5.png"}
          />
          <Card
            name={"Peachy pastrie"}
            price={"32,97"}
            image={"/src/assets/Mask group-6.png"}
          />
          <Card
            name={"Peachy pastrie"}
            price={"32,97"}
            image={"/src/assets/Mask group-6.png"}
          />
          <Card
            name={"Peachy pastrie"}
            price={"32,97"}
            image={"/src/assets/Mask group-6.png"}
          />
        </Category>
        <Category title={"Bebidas"}>
          <Card
            name={"Prugna Pie"}
            price={"79,97"}
            image={"/src/assets/Mask group-5.png"}
          />
          <Card
            name={"Peachy pastrie"}
            price={"32,97"}
            image={"/src/assets/Mask group-6.png"}
          />
          <Card
            name={"Peachy pastrie"}
            price={"32,97"}
            image={"/src/assets/Mask group-6.png"}
          />
          <Card
            name={"Peachy pastrie"}
            price={"32,97"}
            image={"/src/assets/Mask group-6.png"}
          />
        </Category>
      </Content>
      <Footer />
    </Container>
  )
}
