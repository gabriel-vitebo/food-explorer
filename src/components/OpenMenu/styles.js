import styled, { keyframes } from "styled-components";

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

export const Container = styled.div`
  animation: ${rotate} 0.3s 0.1s backwards;

  > .menu {
    svg {
      color: ${({ theme }) => theme.COLORS.light100};
    }

    text-decoration: none;
    background: none;
    border: none;
  }
`;
