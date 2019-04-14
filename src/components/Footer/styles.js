import styled from "styled-components"

import mediaQuery from "../../utils/mediaQuery"

export const Container = styled.footer`
  grid-column: 1 / -1;
  background-color: ${props => props.theme.darkGray};
  padding: 5vh 5vw;
  color: white;
  display: grid;
  justify-items: center;
  grid-gap: 4vh 6vw;
  a {
    color: ${props => props.theme.orange};
  }
  ${mediaQuery.minPhone} {
    grid-auto-flow: column;
    justify-content: center;
  }
`
