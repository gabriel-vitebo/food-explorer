import { Container, Form } from "./styles"
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { ButtonBg } from "../../components/ButtonBg"
import { Button } from "../../components/Button"

export function SignIn() {
  return (
    <Container>
      <Form>
        <Logo />
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
        <ButtonBg title={"Entrar"} />
        <Button link={"/register"} title={"Criar uma conta"} />
      </Form>
    </Container>
  )
}
