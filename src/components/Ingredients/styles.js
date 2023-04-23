import styled from "styled-components"

export const Container = styled.span`
  font-family: ${({ theme }) => theme.FONTS.Poppins};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.light100};

  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.dark1000};
`
