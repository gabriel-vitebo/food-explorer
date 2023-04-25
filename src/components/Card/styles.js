import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21rem;
  position: relative;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.dark300};

  > svg {
    width: 100%;
    text-align: end;
    position: absolute;
    left: 7.5rem;
    top: 2rem;
    cursor: pointer;
  }

  > img {
    width: 8.8rem;
    height: auto;
    border-radius: 50%;
    margin-bottom: 1.2rem;
  }

  > .foodname {
    display: flex;
    align-items: center;
    h3 {
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.COLORS.light300};
    }
  }

  > span {
    font-family: ${({ theme }) => theme.FONTS.Roboto};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.cake200};
    margin: 1.2rem 0;
  }

  > button {
    width: 16.2rem;
  }

  > div {
    margin-bottom: 2.4rem;
  }
`
