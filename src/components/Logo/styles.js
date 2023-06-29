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

export const Container = styled.div`
  animation: ${slide} 0.6s 0.3s backwards;

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

  span {
    font-size: 1.2rem;
    margin-left: 0.8rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FONTS.Roboto};
    color: ${({ theme }) => theme.COLORS.cake200};
  }
`;
