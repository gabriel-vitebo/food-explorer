import { Container } from "./styles.js"

export function InputImage({ icon: Icon, title, ...rest }) {
  return (
    <Container>
      <label htmlFor="file">
        {<Icon size={24} />}
        {title}
      </label>
      <input type="file" name="file" id="file" {...rest} />
    </Container>
  )
}
