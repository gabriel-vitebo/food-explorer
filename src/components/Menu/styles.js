import styled, { keyframes } from "styled-components";

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

export const Container = styled.div`
  animation: ${slide} 0.3s 0.1s backwards;

  position: absolute;
  top: 11.4rem;
  left: 0;
  z-index: 1;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.dark700};
  padding: 2.8rem;
  width: 100%;

  ul {
    animation: ${dropDown} 0.6s 0.3s backwards;

    list-style: none;

    margin-top: 4.5rem;

    li {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.dark1000};
      padding: 0 0 1rem 0;
    }

    button {
      border: none;
      background: none;
      font-size: 2.4rem;
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.light300};
    }
  }
`;
