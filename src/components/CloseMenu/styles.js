import styled, { keyframes } from "styled-components";
import { device } from "../../styles/responsive";

const rotate = keyframes`
  0% {
        opacity: 0;
        transform: rotate(0deg);
    }

    100% {
        opacity: 1;
        transform: rotate(360deg);
    }
`;

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
  > .menu {
    display: flex;
    gap: 1.6rem;
    svg {
      color: ${({ theme }) => theme.COLORS.light100};
    }

    > svg {
      animation: ${rotate} 0.3s 0.1s backwards;
    }

    > span {
      font-size: 2.1rem;
      font-weight: 400;
      font-family: ${({ theme }) => theme.FONTS.Roboto};
      color: ${({ theme }) => theme.COLORS.light100};
      animation: ${slide} 0.3s 0.1s backwards;
    }

    text-decoration: none;
    background: none;
    border: none;

    @media ${device.desktop} {
      display: none;
    }
  }
`;
