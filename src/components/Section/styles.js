import styled, { keyframes } from "styled-components";
import { device } from "../../styles/responsive";

const slide = keyframes`
   0% {
        opacity: 0;
        transform: translateY(-3.3rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const dropDown = keyframes`
  0% {
        opacity: 0;
        transform: translatex(-3.3rem);
    }

    100% {
      opacity: 1;
      transform: translatex(0);
    }
    `;

export const Container = styled.section`
  > h2 {
    animation: ${slide} 0.6s 0.3s backwards;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.light300};
  }

  > div {
    animation: ${dropDown} 0.6s 0.3s backwards;
    display: flex;
    flex-wrap: nowrap;
    gap: 1.6rem;
    overflow-x: scroll;
  }

  .toDesktop {
    display: none;
  }

  @media ${device.desktop} {
    .toDesktop {
      display: flex;
    }

    .blocFlagLeft {
      position: absolute;
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 100%),
        rgba(0, 10, 15, 0.27%)
      );
      width: 22.4rem;
      height: 43.1rem;
      flex-shrink: 0;
      z-index: 1;
      left: 0;
      top: 0;
    }

    .flagLeft {
      position: absolute;
      top: 13.5rem;
      z-index: 1;
    }

    .blocFlagRight {
      position: absolute;
      right: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0.27%),
        rgba(0, 10, 15, 100%)
      );
      width: 22.4rem;
      height: 43.1rem;
      flex-shrink: 0;
      z-index: 1;
    }

    .flagRight {
      position: absolute;
      top: 13.5rem;
      right: 0;
      z-index: 1;
    }

    max-width: 90%;
    width: 112rem;

    > h2 {
      font-size: 3.2rem;
    }

    > div {
      max-width: 100%;
      position: relative;

      overflow-x: hidden;
      scroll-behavior: smooth;
    }
  }
`;
