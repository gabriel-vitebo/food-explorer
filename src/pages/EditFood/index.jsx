import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { InputImage } from "../../components/InputImage";
import { Input } from "../../components/Input";
import { DropList } from "../../components/DropList";
import { NewIngredient } from "../../components/NewIngredient";
import { TextArea } from "../../components/TextArea";
import { ButtonBg } from "../../components/ButtonBg";
import { Footer } from "../../components/Footer";

import { RxCaretLeft } from "react-icons/rx";
import { BsUpload } from "react-icons/bs";

export function EditFood() {
  const [food, setFood] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  const [image, setImage] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function backToHome() {
    navigate(-1);
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleUpdate() {
    const formData = new FormData();
    formData.append("name", food.name);
    formData.append("price", food.price);
    formData.append("description", food.description);
    formData.append("image", image);
    formData.append("categoryId", selectedCategory.id);
    formData.append("ingredients", JSON.stringify(ingredients));

    await api.put(`/foods/${params.id}`, formData);

    alert("Prato atualizado com sucesso!");
    navigate(-1);
  }

  async function handleDelete() {
    const confirm = window.confirm("Deseja excluir esse prato?");

    if (confirm) {
      await api.delete(`/foods/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    let foodTmp = null;

    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setFood(response.data.food);
      setIngredients(response.data.ingredients);
      foodTmp = response.data.food;
    }

    async function categoryName() {
      const response = (await api.get("/categories/all")).data;
      const firstCategory = response.find((category) => {
        return category.id === foodTmp.categoryId;
      });
      const sortedCategories = [
        firstCategory,
        ...response.filter((category) => {
          return category.id != firstCategory.id;
        }),
      ];
      setCategories(sortedCategories);
      setSelectedCategory(firstCategory);
    }

    async function execute() {
      await fetchFood();
      await categoryName();
    }

    execute();
  }, []);

  return (
    <Container>
      <Header amount={0} />
      <main>
        <Form>
          <header>
            <Button
              size={22}
              icon={RxCaretLeft}
              title={"voltar"}
              onClick={backToHome}
            />
            <h1>Editar prato</h1>
          </header>
          <Section title={"Imagem do prato"}>
            <InputImage
              icon={BsUpload}
              title={"Selecione imagem para alterá-la"}
              onChange={handleImageChange}
            />
          </Section>
          <Section title={"Nome"}>
            <Input
              title={"Nome"}
              placeholder={"Salada Ceasar"}
              value={food.name || ""}
              onChange={(e) => setFood({ ...food, name: e.target.value })}
            />
          </Section>
          <Section title={"Categoria"}>
            <DropList
              onChange={(e) => setSelectedCategory(JSON.parse(e.target.value))}
            >
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={JSON.stringify(category)}
                  className="option"
                >
                  {category.name}
                </option>
              ))}
            </DropList>
          </Section>
          <Section title={"Ingredientes"}>
            <div className="ingredients-tag">
              {ingredients.map((ingredient, index) => {
                return (
                  <NewIngredient
                    value={ingredient}
                    key={String(index)}
                    onClick={() => {
                      handleRemoveIngredient(ingredient);
                    }}
                  />
                );
              })}
              <NewIngredient
                isNew
                placeholder="adicionar"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
            </div>
          </Section>
          <Section title={"preço"}>
            <Input
              placeholder={"R$ 40,00"}
              value={food.price || ""}
              onChange={(e) => setFood({ ...food, price: e.target.value })}
            />
          </Section>
          <Section title={"Descrição"}>
            <TextArea
              placeholder={
                "A Salada César é uma opção refrescante para o verão."
              }
              value={food.description || ""}
              onChange={(e) =>
                setFood({ ...food, description: e.target.value })
              }
            />
          </Section>
          <div className="buttons">
            <ButtonBg title={"Excluir prato"} onClick={handleDelete} />
            <ButtonBg title={"Salvar alteração"} onClick={handleUpdate} />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
