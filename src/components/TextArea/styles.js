import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  background-color: ${({ theme }) => theme.COLORS.dark800};

  border: none;
  resize: none;
  border-radius: 0.8rem;
  padding: 1.4rem;

  font-family: ${({ theme }) => theme.FONTS.Roboto};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.COLORS.light100};

  &::placeholder {
    font-family: ${({ theme }) => theme.FONTS.Roboto};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.light500};
  }
`
