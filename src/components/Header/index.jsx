import { Container } from "./styles"
import { TfiReceipt } from "react-icons/tfi"
import { MenuButton } from "../MenuButton"
import { Logo } from "../Logo"

export function Header({ amount }) {
  return (
    <Container>
      <MenuButton />
      <Logo />
      <div className="receipt">
        <TfiReceipt size={26} />
        <span>{amount}</span>
      </div>
    </Container>
  )
}
