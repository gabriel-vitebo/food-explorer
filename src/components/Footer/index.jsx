import { Container } from "./styles";
import imageLogoFooter from "../../assets/logoDark.svg";

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <img src={imageLogoFooter} alt="logo do food explorer mais escuro" />
        <h3>food explorer</h3>
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
