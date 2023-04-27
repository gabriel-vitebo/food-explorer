import { Container } from "./styles"

export function Input({ icon: Icon, title, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <label htmlFor="titleInput">{title}</label>
      <input {...rest} />
    </Container>
  )
}
