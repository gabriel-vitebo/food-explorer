import styled from "styled-components"

export const Container = styled.button`
  font-size: 2.4rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.Poppins};
  line-height: 3.3rem;
  color: ${({ theme }) => theme.COLORS.light300};
  background: none;
  border: none;

  width: 100%;
  align-items: center;
  &:disabled {
    opacity: 0.5;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`
