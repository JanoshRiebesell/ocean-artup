import styled from "styled-components"

import { Grid } from "../../components/styles"
import mediaQuery from "../../utils/mediaQuery"

export const PostGrid = styled(Grid)`
  font-size: 0.8em;
  line-height: 1.6em;
  ${mediaQuery.maxPhablet} {
    grid-column: 3;
    justify-self: center;
  }
  ${mediaQuery.minPhablet} {
    grid-row: 1;
    grid-column: 2 / -3;
  }
`
