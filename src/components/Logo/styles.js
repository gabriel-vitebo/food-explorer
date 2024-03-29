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
  animation: ${slide} 0.6s 0.3s backwards;

  display: flex;
  align-items: center;
  cursor: pointer;

  .logo {
    display: flex;
    h2 {
      font-size: 2.1rem;
      margin-left: 0.8rem;
      font-weight: 700;
      font-family: ${({ theme }) => theme.FONTS.Roboto};
      color: ${({ theme }) => theme.COLORS.light100};
    }
  }

  span {
    font-size: 1.2rem;
    margin-left: 0.8rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FONTS.Roboto};
    color: ${({ theme }) => theme.COLORS.cake200};
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .logo {
      display: flex;
      align-items: center;
      h2 {
        font-size: 2.4rem;
      }
    }

    .adm {
      flex-direction: column;
    }
  }
`;
