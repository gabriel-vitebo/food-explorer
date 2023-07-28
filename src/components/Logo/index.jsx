import { Container } from "./styles";
import image from "../../assets/logo.svg";
export function Logo({ isAdm, ...rest }) {
  return (
    <Container {...rest}>
      <div className="logo">
        <img src={image} alt="logo da food explorer" />
        <h2>food explorer</h2>
      </div>
      <div className="adm">{isAdm && <span>admin</span>}</div>
    </Container>
  );
}
