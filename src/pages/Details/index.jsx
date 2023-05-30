import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Content } from "./styles";
import { RxCaretLeft } from "react-icons/rx";
import { TfiReceipt } from "react-icons/tfi";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Ingredients } from "../../components/Ingredients";
import { Amount } from "../../components/Amount";
import { ButtonBg } from "../../components/ButtonBg";
import { Footer } from "../../components/Footer";

export function Details() {
  const [foodData, setFoodData] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setFoodData(response.data.food);
      setIngredients(response.data.ingredients);

      console.log({ ingredients });
    }

    fetchFood();
  }, []);

  return (
    <Container>
      <Header amount={3} />
      {foodData && (
        <main>
          <Content>
            <div className="buttonBack" onClick={backToHome}>
              <Button icon={RxCaretLeft} title={"voltar"} size={32} />
            </div>
            <img src={foodData.image} alt={`imagem do prato${foodData.name}`} />
            <h1>{foodData.name}</h1>
            <p>{foodData.description}</p>
            <div className="ingredients">
              {ingredients.map((ingredient) => {
                return <Ingredients key={ingredient} name={ingredient} />;
              })}
            </div>
            <div className="quantity-and-finalize">
              <Amount number={"01"} />
              <ButtonBg
                icon={TfiReceipt}
                title={"pedir"}
                price={foodData.price}
              />
            </div>
          </Content>
        </main>
      )}
      <Footer />
    </Container>
  );
}
