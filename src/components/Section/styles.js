import styled from "styled-components"

export const Container = styled.section`
  > h2 {
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.light300};
  }

  > div {
    display: flex;
    flex-wrap: nowrap;
    gap: 1.6rem;
    overflow-x: scroll;
  }
`
