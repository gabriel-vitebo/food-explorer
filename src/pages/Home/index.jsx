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
  const [ image, setImage ] = useState(null)

  
  useEffect(() => {
    async function showFood(){
      const response = await api.get("/foods?name")
      const fileName = response.data.find(image => image)
      const imageUrl = `${api.defaults.baseURL}/files/${fileName.image}`

      setFoods(response.data)
      setImage(imageUrl)

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
              key={food.name}
              name={food.name}
              price={food.price}
              image={image}
              isAdm={isAdm}
            />
          ))
        }    
      </Section>

      <Footer />
    </Container>
  )
}
