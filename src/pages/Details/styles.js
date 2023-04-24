import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: 10.4rem auto;
  grid-template-areas:
    "header"
    "content";

  > .buttonBack {
    height: 3.4rem;
  }
  > .food-details {
    text-align: center;
    img {
      width: 26.4rem;
    }

    h1 {
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      font-weight: 500;
      font-size: 2.7rem;
      color: ${({ theme }) => theme.COLORS.light300};
    }

    p {
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      font-weight: 400;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.light300};
    }
  }
`
