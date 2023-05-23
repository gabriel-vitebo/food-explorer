import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"
import { useAuth } from "../../hooks/auth"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
export function Home() {
  const { user } = useAuth()
  const [isAdm, setIsAdm] = useState(user.isAdm)
  const [ foods, setFoods ] = useState([])

  useEffect(() => {
    async function showFood(){
      const response = await api.get("/foods?name&ingredients")
      setFoods(response.data)
      console.log(foods)
    }
    
    showFood()
  }, [])

  return (
    <Container>
      <Header amount={3} />
      <div className="brand">
        <img src="/src/assets/brend.png" alt="" />
      </div>
      <Section title={"Refeições"}>
        {
          foods.map(food => (
            <Card
              name={food.name}
              price={food.price}
              image={food.image}
              isAdm={isAdm}
            />
          ))
        }    
      </Section>

      <Footer />
    </Container>
  )
}
