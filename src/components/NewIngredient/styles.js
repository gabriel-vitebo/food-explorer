import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.light600};
  background-size: cover;
  background-size: contain;

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.light500}` : "none"};

  border-radius: 0.8rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.light500};
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.light100};
  }

  > input {
    height: 3.2rem;
    width: 11.8rem;
    padding: 1.2rem 0 1.2rem 1.2rem;
    color: ${({ theme }) => theme.COLORS.light100};
    background: transparent;
    border: none;

    font-family: ${({ theme }) => theme.FONTS.Roboto};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.light100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.light500};
    }
  }
`
