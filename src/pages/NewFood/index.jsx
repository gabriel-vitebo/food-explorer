import { useState, useEffect } from "react"
import { api } from "../../services/api"

import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { InputImage } from "../../components/InputImage"
import { Input } from "../../components/Input"
import { DropList } from "../../components/DropList"
import { NewIngredient } from "../../components/NewIngredient"
import { TextArea } from "../../components/TextArea"
import { ButtonBg } from "../../components/ButtonBg"
import { Footer } from "../../components/Footer"

import { RxCaretLeft } from "react-icons/rx"
import { BsUpload } from "react-icons/bs"

export function NewFood() {
  const [foodName, setFoodName] = useState("")

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")

  const [categories, setCategories] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState("")

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  async function handleNewFood() {
    const params = {
      name: foodName,
      description: description,
      price: price,
      ingredients: ingredients,
      categoryId: selectedCategoryId,
    }
    console.log(params)
    await api.post("/foods", params)
  }

  useEffect(() => {
    async function categoryName() {
      const response = (await api.get("/categories/all")).data
      const firstCategory = response[0]
      setCategories(response)
      setSelectedCategoryId(firstCategory)
    }
    categoryName()
  }, [])

  return (
    <Container>
      <Header amount={0} />
      <main>
        <Form>
          <header>
            <Button size={22} icon={RxCaretLeft} title={"voltar"} />
            <h1>Novo prato</h1>
          </header>
          <Section title={"Imagem do prato"}>
            <InputImage icon={BsUpload} title={"Selecione imagem"} />
          </Section>
          <Section title={"Nome"}>
            <Input
              title={"Nome"}
              placeholder={"Ex.: Salada Ceasar"}
              onChange={(e) => setFoodName(e.target.value)}
            />
          </Section>
          <Section title={"Categoria"}>
            <DropList onChange={(e) => setSelectedCategoryId(e.target.value)}>
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                  className="option"
                >
                  {category.name}
                </option>
              ))}
            </DropList>
          </Section>
          <Section title={"Ingredientes"}>
            <div className="ingredients-tag">
              {ingredients.map((ingredient, index) => (
                <NewIngredient
                  key={String(index)}
                  value={ingredient}
                  onClick={() => {
                    handleRemoveIngredient(ingredient)
                  }}
                />
              ))}
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
              placeholder={"R$ 00,00"}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Section>
          <Section title={"Descrição"}>
            <TextArea
              placeholder={
                "Fale brevemente sobre o prato, seus ingredientes e composição"
              }
              onChange={(e) => setDescription(e.target.value)}
            />
          </Section>
          <ButtonBg title={"Salvar prato"} onClick={handleNewFood} />
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
