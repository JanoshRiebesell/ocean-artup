import styled from "styled-components"
import { Link } from "gatsby"

import { navLinkStyle } from "../Nav/styles"
import mediaQuery from "../../utils/mediaQuery"

export const HeaderContainer = styled.header`
  position: absolute;
  width: fill-available;
  z-index: 3;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3vw;
  align-items: center;
  padding: 1vh calc(0.75em + 1vw);
  grid-template-areas: "nav title search";
  grid-template-columns: auto 1fr auto;
  ${mediaQuery.minTablet} {
    grid-template-areas: "title nav search";
  }
`

export const SiteTitle = styled(Link)`
  grid-area: title;
  width: 5em;
  display: inline-grid;
  ${navLinkStyle};
  justify-self: center;
`
