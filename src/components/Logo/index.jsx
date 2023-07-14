import { Container } from "./styles";

export function Logo({ isAdm, ...rest }) {
  return (
    <Container {...rest}>
      <div className="logo">
        <img src="/src/assets/logo.svg" alt="logo da food explorer" />
        <h2>food explorer</h2>
      </div>
      <div className="adm">{isAdm && <span>admin</span>}</div>
    </Container>
  );
}
