import { Container } from "./styles"

export function Button({ link, title, icon: Icon, loading = false, size }) {
  return (
    <Container to={link} type="button" disabled={loading}>
      {Icon && <Icon size={size} />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
