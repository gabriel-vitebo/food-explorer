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

export const Container = styled.button`
  animation: ${slide} 0.6s 0.3s backwards;

  visibility: ${({ isAdm }) => (isAdm ? "hidden" : "visible")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  font-family: ${({ theme }) => theme.FONTS.Poppins};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.light100};

  background-color: ${({ theme }) => theme.COLORS.tomato100};
  padding: 1rem 0;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
`;
