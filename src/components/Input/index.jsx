import { Container } from "./styles";

export function Input({ icon: Icon, title, toDesktop, ...rest }) {
  return (
    <Container className={toDesktop}>
      <label htmlFor="titleInput">{title}</label>
      <div className="input-area">
        {Icon && <Icon size={24} />}
        <input id="titleInput" {...rest} />
      </div>
    </Container>
  );
}
