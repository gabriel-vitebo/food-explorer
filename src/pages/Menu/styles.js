import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  > header {
    height: 11.4rem;
    background-color: ${({ theme }) => theme.COLORS.dark700};
    margin-bottom: 3.5rem;
    display: flex;

    button {
      justify-content: flex-start;
      margin: 0 2.8rem;
      gap: 1.6rem;
      font-family: ${({ theme }) => theme.FONTS.Roboto};
      line-height: 2.4rem;
      font-weight: 400;
      font-size: 2.1rem;
      color: ${({ theme }) => theme.COLORS.light100};
    }
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  height: 100vh;

  > .button {
    display: flex;
    justify-content: flex-start;
    padding: 1rem;

    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 400;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.light300};
    border: none;
    background: none;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.dark1000};
  }
`
