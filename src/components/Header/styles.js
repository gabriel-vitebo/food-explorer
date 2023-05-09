import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  grid-area: header;
  width: 100%;
  height: 11.4rem;
  padding: 0 2.8rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.dark700};
  position: relative;

  > svg {
    color: ${({ theme }) => theme.COLORS.light100};
  }

  > .logo {
    display: flex;
    align-items: center;
    cursor: pointer;

    h2 {
      font-size: 2.1rem;
      margin-left: 0.8rem;
      font-weight: 700;
      font-family: ${({ theme }) => theme.FONTS.Roboto};
      color: ${({ theme }) => theme.COLORS.light100};
    }
  }

  > .receipt {
    img {
      position: relative;
    }

    span {
      background-color: ${({ theme }) => theme.COLORS.tomato100};
      font-size: 1.4rem;
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.light100};
      text-align: center;
      border-radius: 50%;
      padding: 0.2rem 0.6rem;
      position: absolute;
      right: 1.8rem;
      top: 3.5rem;
    }
  }

  > .menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.dark700};
    padding: 2.8rem;
    width: 100%;
    > .close-menu {
      height: 11.4rem;
      display: flex;

      a {
        font-size: 2.4rem;
        font-family: ${({ theme }) => theme.FONTS.Roboto};
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.light100};

        svg {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }

    ul {
      list-style: none;

      font-size: 2.4rem;
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.light300};

      margin-top: 4.5rem;

      li {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.dark1000};
        padding: 0 0 1rem 0;
      }
    }
  }
`
