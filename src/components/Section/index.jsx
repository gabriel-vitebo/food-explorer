import { Container } from "./styles";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export function Section({ children, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <div className="blocFlagLeft toDesktop">
          <FaCaretLeft size={40} className="flagLeft" />
        </div>
        {children}
        <div className="blocFlagRight toDesktop">
          <FaCaretRight size={40} className="flagRight" />
        </div>
      </div>
    </Container>
  );
}
