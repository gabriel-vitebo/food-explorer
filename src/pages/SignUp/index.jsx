import { Container, Form } from "./styles"
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { ButtonBg } from "../../components/ButtonBg"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <Form>
        <Logo />
        <Input
          title={"Seu nome"}
          type="text"
          placeholder={"Exemplo: Maria da Silva"}
        />
        <Input
          title={"Email"}
          type="email"
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
        />
        <Input
          title={"Senha"}
          type="password"
          placeholder={"No mínimo 6 caracteres"}
        />
        <ButtonBg title={"Criar conta"} />
        <Button link="/" title={"Já tenho uma conta"} />
      </Form>
    </Container>
  )
}
