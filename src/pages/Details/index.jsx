import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

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
  const [quantitiesToInclude, setQuantitiesToInclude] = useState({});

  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const isAdm = user.isAdm;

  function backToHome() {
    navigate("/");
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

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setFoodData(response.data.food);
      setIngredients(response.data.ingredients);
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
              {isAdm ? (
                <ButtonBg
                  title={"Editar Prato"}
                  onClick={() => handleEditFood(params.id)}
                />
              ) : (
                <>
                  <Amount
                    number={quantitiesToInclude[params.id] || 0}
                    addMore={() => addOneMore(params.id)}
                    remove={() => removeOneMore(params.id)}
                  />
                  <ButtonBg
                    icon={TfiReceipt}
                    title={"pedir"}
                    price={foodData.price.toFixed(2)}
                  />
                </>
              )}
            </div>
          </Content>
        </main>
      )}
      <Footer />
    </Container>
  );
}
