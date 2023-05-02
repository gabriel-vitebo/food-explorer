import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-template-areas:
    "header"
    "content";
`

export const Form = styled.form`
  max-width: 36.4rem;
  margin: 0.5rem auto 5.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    button {
      font-size: 1.6rem;
      line-height: 2.3rem;
      justify-content: flex-start;
    }

    h1 {
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 4.4rem;
      color: ${({ theme }) => theme.COLORS.light300};

      margin: 2.4rem 0 0 0;
    }
  }
`
