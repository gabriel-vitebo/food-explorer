import { Container } from "./styles"
import { TfiReceipt } from "react-icons/tfi"
import { Menu } from "../Menu"

export function Header({ amount }) {
  return (
    <Container>
      <Menu />
      <div className="logo">
        <img src="/src/assets/logo.svg" alt="logo da food explorer" />
        <h1>food explorer</h1>
      </div>
      <div className="receipt">
        <TfiReceipt size={26} />
        <span>{amount}</span>
      </div>
    </Container>
  )
}
