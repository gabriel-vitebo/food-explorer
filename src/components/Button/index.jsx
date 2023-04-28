import { Container } from "./styles"

export function Button({ title, icon: Icon, loading = false, size }) {
  return (
    <Container type="button" disabled={loading}>
      {Icon && <Icon size={size} />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
