import { Container } from "./styles.js"

export function InputImage({ icon: Icon, title }) {
  return (
    <Container>
      <span>Imagem do prato</span>
      <label htmlFor="file">
        {<Icon size={24} />}
        {title}
      </label>
      <input type="file" name="file" id="file" />
    </Container>
  )
}
