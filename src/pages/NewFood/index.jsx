import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
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
          <InputImage icon={BsUpload} title={"Selecione imagem"} />
          <Input title={"Nome"} placeholder={"Ex.: Salada Ceasar"} />
          <DropList title={"Categoria"} />
          <Input title={"Preço"} placeholder={"R$ 00,00"} />
          <ButtonBg title={"Salvar prato"} />
        </Form>
      </main>
    </Container>
  )
}
