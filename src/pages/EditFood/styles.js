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

    a {
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

  > section {
    h2 {
      font-family: ${({ theme }) => theme.FONTS.Roboto};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.light400};

      margin-bottom: 1.6rem;
    }

    .ingredients-tag {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 1.6rem;

      background-color: ${({ theme }) => theme.COLORS.dark800};
      border-radius: 0.8rem;
      height: 100%;
      padding: 0.4rem 0.8rem;
    }
  }

  > .buttons {
    display: flex;
    gap: 3.2rem;

    button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.dark800};
    }
  }
`
