import styled, { keyframes } from "styled-components";
import { device } from "../../styles/responsive";

const slide = keyframes`
  0% {
        opacity: 0;
        transform: translatex(-3.3rem);
    }

    100% {
        opacity: 1;
        transform: translatex(0);
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-template-areas:
    "header"
    "content";

  @media ${device.desktop} {
    main {
      width: 100vw;
      max-width: 70%;
      margin: 0 auto;
    }
  }
`;

export const Form = styled.form`
  animation: ${slide} 0.6s 0.3s backwards;

  max-width: 36.4rem;
  margin: 0.5rem auto 5.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .lineOne,
  .lineTwo,
  .lineThree {
    > section {
      h2 {
        font-family: ${({ theme }) => theme.FONTS.Roboto};
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.light400};

        margin-bottom: 1.6rem;
      }
    }
  }

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

  @media ${device.desktop} {
    display: flex;
    max-width: 100vw;

    .lineOne {
      display: flex;
      gap: 3.2rem;
      align-items: center;

      > section {
        width: 25%;
        h2 {
          font-family: ${({ theme }) => theme.FONTS.Roboto};
          font-weight: 400;
          font-size: 1.6rem;
          line-height: 1.6rem;
          color: ${({ theme }) => theme.COLORS.light400};

          margin-bottom: 1.6rem;
        }
      }

      section:nth-child(2) {
        width: 50%;
      }
    }

    .lineTwo {
      display: flex;
      align-items: center;
      gap: 3.2rem;
      section {
        width: 20%;
        h2 {
          font-family: ${({ theme }) => theme.FONTS.Roboto};
          font-weight: 400;
          font-size: 1.6rem;
          line-height: 1.6rem;
          color: ${({ theme }) => theme.COLORS.light400};

          margin-bottom: 1.6rem;
        }
      }

      section:nth-child(1) {
        width: 80%;
        div {
          display: flex;
          gap: 1.6rem;
          flex-wrap: wrap;
        }
      }
    }

    .lineThree {
      display: flex;
      section {
        width: 100%;
        max-width: 100%;
        h2 {
          font-family: ${({ theme }) => theme.FONTS.Roboto};
          font-weight: 400;
          font-size: 1.6rem;
          line-height: 1.6rem;
          color: ${({ theme }) => theme.COLORS.light400};

          margin-bottom: 1.6rem;
        }
      }
    }

    > .button {
      display: flex;
      justify-content: flex-end;
      button {
        width: 17.2rem;
      }
    }
  }
`;
