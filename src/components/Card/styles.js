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
  animation: ${slide} 0.6s 0.3s backwards;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21rem;
  position: relative;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.dark300};
  text-align: center;

  > svg {
    width: 100%;
    text-align: end;
    position: absolute;
    left: 7.5rem;
    top: 2rem;
    cursor: pointer;
    color: ${({ theme, favorite }) =>
      favorite ? theme.COLORS.tomato100 : theme.COLORS.light300};
  }

  > img {
    width: 8.8rem;
    height: 8.8rem;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1.2rem;
  }

  > .foodname {
    display: flex;
    align-items: center;
    h3 {
      height: 2.4rem;
      line-height: 2.4rem;
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.COLORS.light300};
    }
  }

  .toDesktop {
    display: none;
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

  .finishBuy {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 16.2rem;
    align-items: center;
  }

  @media ${device.desktop} {
    .toDesktop {
      display: flex;
    }

    width: 25.6rem;

    > img {
      width: 13rem;
      height: 13rem;
    }

    > .foodname {
      h3 {
        font-weight: 700;
        font-size: 2.4rem;
      }
    }

    > p {
      font-family: ${({ theme }) => theme.FONTS.Roboto};
      height: 3.4rem;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.light400};
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 1.5rem 0;
    }

    > span {
      font-size: 3.2rem;
      margin: 1.5rem 0;
    }

    .finishBuy {
      flex-direction: row;
      width: 20.8rem;
      margin-top: 1.5rem;
    }
  }
`;
