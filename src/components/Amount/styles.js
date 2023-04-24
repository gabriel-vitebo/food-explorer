import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;
  font-family: ${({ theme }) => theme.FONTS.Roboto};
  font-weight: 700;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.COLORS.light300};
`
