import { Container } from "./styles";

export function Input({ icon: Icon, toDesktop, ...rest }) {
  return (
    <Container className={toDesktop}>
      <div className="input-area">
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </div>
    </Container>
  );
}
