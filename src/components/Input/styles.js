import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.light400};

  > label {
    font-family: ${({ theme }) => theme.FONTS.Roboto};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.light500};
    width: 100%;
    display: flex;
    justify-self: flex-start;
    margin-bottom: 0.8rem;
  }

  > input {
    height: 4.8rem;
    width: 100%;
    padding: 1.6rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.light400};
    background-color: ${({ theme }) => theme.COLORS.dark900};
    border-radius: 0.8rem;
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

    > svg {
      margin: 0 1.4rem;
    }
  }
`
