import React, { useRef } from "react";
import { Container } from "./styles";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export function Section({ children, title }) {
  const scrollContainerRef = useRef(null);

  function scrollLeft() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -260,
        behavior: "smooth",
      });
    }
  }

  function scrollRight() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 260,
        behavior: "smooth",
      });
    }
  }

  return (
    <Container>
      <h2>{title}</h2>
      <div className="carrousel">
        <div className="left" onClick={scrollLeft}>
          <AiFillCaretLeft size={30} />
        </div>
        <div className="content" ref={scrollContainerRef}>
          {children}
        </div>
        <div className="right" onClick={scrollRight}>
          <AiFillCaretRight size={30} />
        </div>
      </div>
    </Container>
  );
}
