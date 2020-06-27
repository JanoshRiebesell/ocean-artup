import styled from 'styled-components'

import imageRow from './imageRow'
import team from './team'
import { mediaQueries } from 'utils/mediaQueries'

export const PageBody = styled.main`
  display: grid;
  grid-gap: 0 4vw;
  grid-template-columns: 1fr 1fr minmax(auto, ${props => props.theme.maxWidth}) 1fr 1fr;
  min-height: 100vh;
  > * {
    grid-column: 3;
  }
  margin: 9vh 0;
  ${mediaQueries.minPhablet} {
    > p {
      text-align: justify;
    }
  }
  img + em,
  .gatsby-resp-image-wrapper + em {
    display: block;
    font-size: 0.9em;
    text-align: center;
    font-style: italic;
    margin-bottom: 1em;
  }
  ${imageRow};
  ${team};
`
