import { Link } from "react-router-dom";
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

export const Container = styled(Link)`
  animation: ${slide} 0.6s 0.3s backwards;
  background: none;
  border: none;

  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.Poppins};
  line-height: 3.3rem;
  color: ${({ theme }) => theme.COLORS.light300};

  &:disabled {
    opacity: 0.5;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
