import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { InputImage } from "../../components/InputImage"
import { Input } from "../../components/Input"
import { DropList } from "../../components/DropList"
import { ButtonBg } from "../../components/ButtonBg"

import { RxCaretLeft } from "react-icons/rx"
import { BsUpload } from "react-icons/bs"

export function NewFood() {
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
            <Input title={"Nome"} placeholder={"Ex.: Salada Ceasar"} />
          </Section>
          <Section title={"Categoria"}>
            <DropList />
          </Section>
          <Section title={"preço"}>
            <Input placeholder={"R$ 00,00"} />
          </Section>
          <ButtonBg title={"Salvar prato"} />
        </Form>
      </main>
    </Container>
  )
}
