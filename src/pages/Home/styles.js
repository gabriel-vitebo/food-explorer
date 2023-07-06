import styled, { keyframes } from "styled-components";
import { device } from "../../styles/responsive";

const slide = keyframes`
  0% {
        opacity: 0;
        transform: translatex(-3.3rem);
    }

    100% {
        opacity: 1;
        transform: translatex(0);
    }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;

  > .brand {
    animation: ${slide} 0.6s 0.3s backwards;

    width: 95%;

    img {
      width: 100%;
      margin-bottom: 3.8rem;
    }
  }

  > section {
    h2 {
      margin: 2.4rem 2.4rem;
    }
  }

  @media ${device.desktop} {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;
