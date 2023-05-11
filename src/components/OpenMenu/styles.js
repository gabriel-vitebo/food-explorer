import styled from "styled-components"

export const Container = styled.div`
  > .menu {
    svg {
      color: ${({ theme }) => theme.COLORS.light100};
    }

    text-decoration: none;
    background: none;
    border: none;
  }
`
