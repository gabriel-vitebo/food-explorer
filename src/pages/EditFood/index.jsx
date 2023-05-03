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

export function EditFood() {
  return (
    <Container>
      <Header amount={0} />
      <main>
        <Form>
          <header>
            <Button size={22} icon={RxCaretLeft} title={"voltar"} />
            <h1>Editar prato</h1>
          </header>
          <Section title={"Imagem do prato"}>
            <InputImage
              icon={BsUpload}
              title={"Selecione imagem para alterá-la"}
            />
          </Section>
          <Section title={"Nome"}>
            <Input title={"Nome"} placeholder={"Salada Ceasar"} />
          </Section>
          <Section title={"Categoria"}>
            <DropList />
          </Section>
          <Section title={"Ingredientes"}>
            <div className="ingredients-tag">
              <NewIngredient value="Pão Naan" />
              <NewIngredient isNew placeholder="adicionar" />
            </div>
          </Section>
          <Section title={"preço"}>
            <Input placeholder={"R$ 40,00"} />
          </Section>
          <Section title={"Descrição"}>
            <TextArea
              placeholder={
                "A Salada César é uma opção refrescante para o verão."
              }
            />
          </Section>
          <div className="buttons">
            <ButtonBg title={"Excluir prato"} />
            <ButtonBg title={"Salvar alteração"} />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
