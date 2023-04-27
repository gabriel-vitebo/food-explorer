import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h2 {
    font-size: 2.1rem;
    margin-left: 0.8rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.FONTS.Roboto};
    color: ${({ theme }) => theme.COLORS.light100};
  }
`
