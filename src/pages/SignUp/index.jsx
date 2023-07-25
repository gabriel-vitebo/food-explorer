import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { ButtonBg } from "../../components/ButtonBg";
import { Button } from "../../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Todos os campos devem ser preenchidos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <Form>
        <Logo />
        <div className="form">
          <h1 className="toDesktop">Crie sua conta</h1>
          <Input
            title={"Seu nome"}
            type="text"
            placeholder={"Exemplo: Maria da Silva"}
            onChange={(e) => setName(e.target.value)}
          />
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
          <ButtonBg title={"Criar conta"} onClick={handleSignUp} />
          <Button link="/" title={"Já tenho uma conta"} />
        </div>
      </Form>
    </Container>
  );
}
