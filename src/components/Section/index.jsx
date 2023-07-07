import { Container } from "./styles";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useRef } from "react";

export function Section({ children, title }) {
  const carouselRef = useRef(null);

  function handleScrollLeft() {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  }

  function handleScrollRight() {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <h2>{title}</h2>
      <div ref={carouselRef}>
        <div className="blocFlagLeft toDesktop">
          <FaCaretLeft
            size={40}
            className="flagLeft"
            onClick={() => handleScrollLeft()}
          />
        </div>
        {children}
        <div className="blocFlagRight toDesktop">
          <FaCaretRight
            size={40}
            className="flagRight"
            onClick={() => handleScrollRight()}
          />
        </div>
      </div>
    </Container>
  );
}
