import { Container } from "./styles"

export function Button({ title, icon: Icon, loading = false }) {
  return (
    <Container type="button" disabled={loading}>
      {Icon && <Icon size={32} />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
