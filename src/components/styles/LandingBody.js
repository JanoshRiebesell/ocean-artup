import styled from "styled-components"

import about from "./about"
import spotlight from "./spotlight"
import participants from "./participants"

export const LandingBody = styled.article`
  grid-column: 1 / -1;
  text-align: center;
  color: white;
  ${about};
  ${spotlight};
  ${participants};
`
