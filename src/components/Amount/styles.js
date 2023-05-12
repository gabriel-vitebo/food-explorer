import styled from "styled-components"

export const Container = styled.div`
  visibility: ${({ isAdm }) => (isAdm ? "hidden" : "visible")};

  display: flex;
  gap: 1.6rem;
  font-family: ${({ theme }) => theme.FONTS.Roboto};
  font-weight: 700;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.COLORS.light300};
  cursor: pointer;
`
