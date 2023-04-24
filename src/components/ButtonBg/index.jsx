import { Container } from "./styles"

export function ButtonBg({
  icon: Icon,
  title,
  price,
  loading = false,
  ...rest
}) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={21} />}
      {loading ? "carregando..." : title}
      {price ? ` . R$ ${price}` : ""}
    </Container>
  )
}
