import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";

import { AiOutlineSearch } from "react-icons/ai";

export function Menu({ isAdm }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  function createFood() {
    navigate("/newfood/:id");
  }

  return (
    <Container>
      <Input
        icon={AiOutlineSearch}
        placeholder={"Busque por pratos ou ingredientes"}
      />
      <ul>
        <li onClick={signOut}>
          <button>Sair</button>
        </li>
        {isAdm && (
          <li>
            <button onClick={createFood}>Novo prato</button>
          </li>
        )}
      </ul>
    </Container>
  );
}
