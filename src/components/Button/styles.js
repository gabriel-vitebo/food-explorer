import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  background: none;
  border: none;

  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.Poppins};
  line-height: 3.3rem;
  color: ${({ theme }) => theme.COLORS.light300};

  &:disabled {
    opacity: 0.5;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`
