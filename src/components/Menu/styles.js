import styled from "styled-components"

export const Container = styled.div`
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
`
