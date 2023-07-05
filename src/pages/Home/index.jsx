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
  const [quantitiesToInclude, setQuantitiesToInclude] = useState({});
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [favoriteFoods, setFavoriteFoods] = useState([]);

  const isAdm = user.isAdm;
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleEditFood(id) {
    navigate(`/editfood/${id}`);
  }

  function addOneMore(id) {
    setQuantitiesToInclude((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  }

  function removeOneMore(id) {
    if (!quantitiesToInclude[id]) {
      return;
    }
    setQuantitiesToInclude((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] - 1,
    }));
  }

  function addToCart(id) {
    setQuantityInCart(
      (prevQuantity) => prevQuantity + (quantitiesToInclude[id] || 0)
    );
    setQuantitiesToInclude((prevQuantities) => ({
      ...prevQuantities,
      [id]: 0,
    }));
  }

  async function handleFavorite(id) {
    try {
      const isFavorite = favoriteFoods.includes(id);
      console.log({ isFavorite });
      if (isFavorite) {
        await api.delete(`/favorites/${id}`);
        setFavoriteFoods((prevFavoriteFoods) =>
          prevFavoriteFoods.filter((foodId) => foodId !== id)
        );
      } else {
        await api.post("/favorites", { food_id: id });
        setFavoriteFoods((prevFavoriteFoods) => [...prevFavoriteFoods, id]);
      }
    } catch (error) {
      console.log("Erro ao manipular prato favorito:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/categories");
        const uniqueCategories = response.data.filter(
          (category, index, self) =>
            index === self.findIndex((c) => c.name === category.name)
        );
        setCategories(uniqueCategories);
        console.log({ categories });

        const favoritesResponse = await api.get(`/favorites`);
        const favoriteFoods = favoritesResponse.data.foodIds || [];
        const favoriteFoodString = favoriteFoods.map((food) => {
          return food.food_id;
        });
        setFavoriteFoods(favoriteFoodString);
      } catch (error) {
        console.log("Erro ao buscar dados dos favoritos", error);
      }
    }

    fetchData();
  }, [user.id]);

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
              description={food.description}
              handleFavorite={() => handleFavorite(food.foodId)}
              isFavorite={favoriteFoods.includes(food.foodId)}
              price={food.price.toFixed(2)}
              image={food.image}
              amount={quantitiesToInclude[food.foodId] || 0}
              addMore={() => addOneMore(food.foodId)}
              remove={() => removeOneMore(food.foodId)}
              addToCart={() => addToCart(food.foodId)}
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
