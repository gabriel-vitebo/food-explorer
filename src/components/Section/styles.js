import styled, { keyframes } from "styled-components";

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
`;
