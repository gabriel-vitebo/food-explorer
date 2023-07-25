import styled from "styled-components";
import { device } from "../../styles/responsive";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media ${device.desktop} {
    width: 100vw;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  width: 31.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 3.2rem;

  text-align: center;

  > div:nth-child(1) {
    margin-bottom: 4.1rem;
    h2 {
      font-size: 3.2rem;
    }

    img {
      width: 4.2rem;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .toDesktop {
    display: none;
  }

  > button {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.light100};
  }

  @media ${device.desktop} {
    width: 80%;
    flex-direction: row;
    gap: 30.6rem;

    .toDesktop {
      display: flex;
    }

    .form {
      width: 38.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.2rem;

      background-color: ${({ theme }) => theme.COLORS.dark700};
      border-radius: 1.6rem;
      padding: 6.4rem;

      h1 {
        font-family: ${({ theme }) => theme.FONTS.Poppins};
        font-size: 3.2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.light100};
      }

      a {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
`;
