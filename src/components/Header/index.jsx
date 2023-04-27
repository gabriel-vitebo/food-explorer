import { Container } from "./styles"
import { TfiReceipt } from "react-icons/tfi"
import { Menu } from "../Menu"
import { Logo } from "../Logo"

export function Header({ amount }) {
  return (
    <Container>
      <Menu />
      <Logo />
      <div className="receipt">
        <TfiReceipt size={26} />
        <span>{amount}</span>
      </div>
    </Container>
  )
}
