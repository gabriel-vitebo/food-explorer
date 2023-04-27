import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  width: 31.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  text-align: center;

  > div:nth-child(1) {
    margin-bottom: 7.3rem;
    h2 {
      font-size: 3.2rem;
    }

    img {
      width: 4.2rem;
    }
  }

  > button {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.light100};
    margin-bottom: 3.2rem;
  }
`
