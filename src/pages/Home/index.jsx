import { useState } from "react"
import { Container } from "./styles"
import { useAuth } from "../../hooks/auth"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
export function Home() {
  const { user } = useAuth()
  const [isAdm, setIsAdm] = useState(user.isAdm)

  return (
    <Container>
      <Header amount={3} />
      <div className="brand">
        <img src="/src/assets/brend.png" alt="" />
      </div>
      <Section title={"Refeições"}>
        <Card
          name={"Salada Ravanello"}
          price={"49,97"}
          image={"/src/assets/Mask group-1.png"}
          isAdm={isAdm}
        />
        <Card
          name={"Spaguetti Gambe"}
          price={"79,97"}
          image={"/src/assets/Mask group-2.png"}
          isAdm={isAdm}
        />
        <Card
          name={"Spaguetti Gambe"}
          price={"79,97"}
          image={"/src/assets/Mask group-2.png"}
          isAdm={isAdm}
        />
        <Card
          name={"Spaguetti Gambe"}
          price={"79,97"}
          image={"/src/assets/Mask group-2.png"}
          isAdm={isAdm}
        />
      </Section>

      <Footer />
    </Container>
  )
}
