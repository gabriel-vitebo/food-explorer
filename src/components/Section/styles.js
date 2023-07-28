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

  .content {
    overflow-x: scroll;
    animation: ${dropDown} 0.6s 0.3s backwards;
    display: flex;
    flex-wrap: nowrap;
    gap: 1.6rem;
  }

  .toDesktop {
    display: none;
  }

  @media ${device.desktop} {
    .toDesktop {
      display: flex;
    }

    max-width: 90%;
    width: 112rem;

    > h2 {
      font-size: 3.2rem;
    }

    .carrousel {
      display: flex;
      align-items: center;
      position: relative;
      animation: ${slide} 0.6s 0.3s backwards;
    }

    .left {
      width: 22.4rem;
      height: 43.1rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: absolute;
      z-index: 1;

      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 100%),
        rgba(0, 10, 15, 0.27%)
      );
    }

    .right {
      width: 22.4rem;
      height: 43.1rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: absolute;
      right: 0;
      z-index: 1;
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0.27%),
        rgba(0, 10, 15, 100%)
      );
    }

    .content {
      overflow: hidden;
      max-width: 100%;
      position: relative;

      scroll-behavior: smooth;
    }
  }
`;
