import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [quantityToInclude, setQuantityToInclude] = useState(0);
  const [quantityInCart, setQuantityInCart] = useState(0);

  const isAdm = user.isAdm;
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleEditFood(id) {
    navigate(`/editfood/${id}`);
  }

  function addOneMore() {
    const result = quantityToInclude + 1;
    setQuantityToInclude(result);
  }

  function removeOneMore() {
    const result = quantityToInclude - 1;
    if (quantityToInclude === 0) {
      return setQuantityToInclude(0);
    }
    setQuantityToInclude(result);
  }

  function addToCart() {
    setQuantityInCart(quantityToInclude);
  }

  useEffect(() => {
    async function showFood() {
      const response = await api.get("/categories?name");
      const uniqueCategories = response.data.filter(
        (category, index, self) =>
          index === self.findIndex((c) => c.name === category.name)
      );

      setCategories(uniqueCategories);
    }
    showFood();
  }, []);

  return (
    <Container>
      <Header amount={quantityInCart} />
      <div className="brand">
        <img src="/src/assets/brend.png" alt="" />
      </div>
      {categories.map((category) => (
        <Section title={category.name} key={category.categoryId}>
          {category.foods.map((food) => (
            <Card
              key={food.foodId}
              name={food.name}
              price={food.price}
              image={food.image}
              amount={quantityToInclude}
              addMore={addOneMore}
              remove={removeOneMore}
              addToCart={addToCart}
              editFood={() => handleEditFood(food.foodId)}
              openDetails={() => handleDetails(food.foodId)}
              isAdm={isAdm}
            />
          ))}
        </Section>
      ))}

      <Footer />
    </Container>
  );
}
