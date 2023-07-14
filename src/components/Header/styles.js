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

export const Container = styled.header`
  animation: ${slide} 0.6s 0.3s backwards;

  display: flex;
  grid-area: header;
  width: 100%;
  height: 11.4rem;
  padding: 0 2.8rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.dark700};
  position: relative;

  .inative {
    visibility: hidden;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.light100};
  }

  > .logo {
    display: flex;
    align-items: center;
    cursor: pointer;

    h2 {
      font-size: 2.1rem;
      margin-left: 0.8rem;
      font-weight: 700;
      font-family: ${({ theme }) => theme.FONTS.Roboto};
      color: ${({ theme }) => theme.COLORS.light100};
    }
  }

  .toDesktop {
    display: none;
  }

  @media ${device.desktop} {
    justify-content: center;
    gap: 3.2rem;
    .toDesktop {
      display: flex;
    }

    .input {
      width: 30%;
    }

    .button {
      display: flex;
      width: 20rem;
      justify-content: center;
      font-size: 1.4rem;
      margin-left: 0.8rem;
      font-weight: 500;
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      color: ${({ theme }) => theme.COLORS.light100};
    }

    .buttonAdm {
      width: 21.6rem;
      font-size: 1.4rem;
    }

    .exit:hover {
      transform: scale(1.3);
      cursor: pointer;
    }
  }
`;

export const Receipt = styled.div`
  visibility: ${({ isAdm }) => isAdm && "hidden"};
  img {
    position: relative;
  }

  span {
    background-color: ${({ theme }) => theme.COLORS.tomato100};
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.light100};
    text-align: center;
    border-radius: 50%;
    padding: 0.2rem 0.6rem;
    position: absolute;
    right: 1.8rem;
    top: 3.5rem;
  }

  @media ${device.desktop} {
    display: none;
  }
`;
