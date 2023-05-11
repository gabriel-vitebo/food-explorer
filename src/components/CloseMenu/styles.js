import styled from "styled-components"

export const Container = styled.div`
  > .menu {
    display: flex;
    gap: 1.6rem;
    svg {
      color: ${({ theme }) => theme.COLORS.light100};
    }

    > span {
      font-size: 2.1rem;
      font-weight: 400;
      font-family: ${({ theme }) => theme.FONTS.Roboto};
      color: ${({ theme }) => theme.COLORS.light100};
    }

    text-decoration: none;
    background: none;
    border: none;
  }
`
