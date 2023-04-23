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
  }
`
