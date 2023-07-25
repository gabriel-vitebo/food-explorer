import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { ButtonBg } from "../../components/ButtonBg";
import { Button } from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <Logo />
        <div className="form">
          <h1 className="toDesktop">Faça login</h1>
          <Input
            title={"Email"}
            type="email"
            placeholder={"Exemplo: exemplo@exemplo.com.br"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title={"Senha"}
            type="password"
            placeholder={"No mínimo 6 caracteres"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonBg title={"Entrar"} onClick={handleSignIn} />
          <Button link={"/register"} title={"Criar uma conta"} />
        </div>
      </Form>
    </Container>
  );
}
