import styled, { keyframes } from "styled-components";

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
  height: auto;
  display: grid;
  grid-template-rows: 10.4rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 1.6rem 0 3.3rem;
  }
`;
export const Content = styled.div`
  animation: ${slide} 0.6s 0.3s backwards;
  overflow-y: auto;
  max-width: 31.6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  > .buttonBack {
    align-self: start;
    height: 3.4rem;
    margin: 2rem 0 1.6rem;
  }

  > img {
    width: 25rem;
    height: 25rem;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 50%;
  }

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 500;
    font-size: 2.7rem;
    color: ${({ theme }) => theme.COLORS.light300};
    margin: 1.6rem 0 2.4rem;
  }
  > p {
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.light300};
    margin-bottom: 2.4rem;
    text-align: justify;
  }

  > .ingredients {
    margin-bottom: 4.8rem;
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  > .quantity-and-finalize {
    display: flex;
    gap: 1.6rem;
    align-items: center;

    > button {
      font-size: 1.4rem;
    }
  }
`;
