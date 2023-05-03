import styled from "styled-components"

export const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border: none;
  width: 100%;

  > select {
    list-style: none;
    width: 100%;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.dark800};
    border: none;
    border-radius: 0.5rem;
    font-family: ${({ theme }) => theme.FONTS.Roboto};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.COLORS.light400};
    padding: 0 1.6rem;

    .option {
      font-family: ${({ theme }) => theme.FONTS.Roboto};
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.4rem;
      color: ${({ theme }) => theme.COLORS.light400};
    }
  }
`
