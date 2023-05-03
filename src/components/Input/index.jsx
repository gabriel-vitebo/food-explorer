import { Container } from "./styles"

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      <div className="input-area">
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </div>
    </Container>
  )
}
