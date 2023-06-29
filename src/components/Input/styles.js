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

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.light400};

  > .input-area {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.dark800};
    color: ${({ theme }) => theme.COLORS.light400};
    border-radius: 0.8rem;

    > svg {
      margin-left: 1.4rem;
    }

    > input {
      height: 4.8rem;
      width: 100%;
      padding: 1.6rem 1.4rem;
      color: ${({ theme }) => theme.COLORS.light400};
      background-color: transparent;
      border: none;
      font-family: ${({ theme }) => theme.FONTS.Roboto};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.light500};

      &::placeholder {
        font-family: ${({ theme }) => theme.FONTS.Roboto};
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.light500};
      }
    }
  }
`;
