import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > input[type="file"] {
    display: none;
  }

  > label {
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.light100};

    background: ${({ theme }) => theme.COLORS.dark800};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem 0;
    border-radius: 0.8rem;

    svg {
      margin-left: 3.2rem;
    }
  }
`
