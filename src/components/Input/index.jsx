import { Container } from "./styles"

export function Input({ icon: Icon, title, ...rest }) {
  return (
    <Container>
      <label htmlFor="titleInput">{title}</label>
      <div className="input-area">
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </div>
    </Container>
  )
}
