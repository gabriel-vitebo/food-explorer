import { Container } from "./styles";

export function Button({
  link,
  title,
  icon: Icon,
  loading = false,
  size,
  backToHome,
}) {
  return (
    <Container to={link} type="button" disabled={loading} onClick={backToHome}>
      {Icon && <Icon size={size} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
