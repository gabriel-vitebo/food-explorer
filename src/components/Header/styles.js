import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  height: 10.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  align-items: center;
`

export const Logo = styled.div`
  display: flex;

  > img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.8rem;
  }
  > h1 {
    font-size: 2.1rem;
    font-family: ${({ theme }) => theme.FONTS.Roboto};
    font-weight: 700;
  }
`
