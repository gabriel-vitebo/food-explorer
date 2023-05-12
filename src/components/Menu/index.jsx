import { Container } from "./styles"
import { useAuth } from "../../hooks/auth"

import { Input } from "../Input"

import { AiOutlineSearch } from "react-icons/ai"

export function Menu({ isAdm = false }) {
  const { signOut } = useAuth()
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
            <button>Novo prato</button>
          </li>
        )}
      </ul>
    </Container>
  )
}
