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

export const Container = styled.footer`
  animation: ${slide} 0.6s 0.3s backwards;

  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 7.7rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.dark600};

  > .logo {
    display: flex;
    gap: 0.7rem;

    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.FONTS.Roboto};
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.light700};
  }

  p {
    font-family: ${({ theme }) => theme.FONTS.Footer};
    font-weight: 700;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.light200};
  }
`;
