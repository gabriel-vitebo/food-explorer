import { Container } from "./styles"

export function ButtonBg({
  icon: Icon,
  title,
  price,
  isAdm,
  loading = false,
  ...rest
}) {
  return (
    <Container type="button" disabled={loading} isAdm={isAdm} {...rest}>
      {Icon && <Icon size={21} />}
      {loading ? "carregando..." : title}
      {price ? ` . R$ ${price}` : ""}
    </Container>
  )
}
