import { Container } from "./styles"

export function FoodImage({ image, foodName }) {
  return (
    <Container>
      <img src={image} alt={`foto do prato ${foodName}`} />
    </Container>
  )
}
