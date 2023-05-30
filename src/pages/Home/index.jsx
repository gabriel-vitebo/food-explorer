import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

export function Home() {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const isAdm = user.isAdm;

  useEffect(() => {
    async function showFood() {
      const response = await api.get("/categories?name");
      const uniqueCategories = response.data.filter(
        (category, index, self) =>
          index === self.findIndex((c) => c.name === category.name)
      );

      setCategories(uniqueCategories);
      console.log({ categories });
    }
    showFood();
  }, []);

  return (
    <Container>
      <Header amount={3} />
      <div className="brand">
        <img src="/src/assets/brend.png" alt="" />
      </div>
      {categories.map((category) => (
        <Section title={category.name}>
          {category.foods.map((food) => (
            <Card
              name={food.name}
              price={food.price}
              image={food.image}
              isAdm={isAdm}
            />
          ))}
        </Section>
      ))}

      <Footer />
    </Container>
  );
}
