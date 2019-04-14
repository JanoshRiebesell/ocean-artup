import { css } from "styled-components"

export { PageBody } from "./PageBody"
export { LandingBody } from "./LandingBody"
export { Grid } from "./Grid"

export const fadeInOnHoverParent = parent => css`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  ${parent}:hover & {
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
  }
`
