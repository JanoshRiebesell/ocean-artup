import styled from 'styled-components'
import { Grid } from 'components/styles'
import { mediaQueries } from 'utils/mediaQueries'

export const PostGrid = styled(Grid)`
  height: max-content;
  font-size: 0.8em;
  line-height: 1.6em;
`

export const PostContainer = styled.div`
  ${mediaQueries.maxPhablet} {
    grid-column: 3;
    justify-self: center;
  }
  ${mediaQueries.minPhablet} {
    grid-row: 1;
    grid-column: 2 / -3;
  }
`

export const ListTitle = styled.h2`
  border-bottom: 1px solid black;
  margin: 0 0 1em 0;
  &:not(:first-child) {
    margin: 2em 0 1em 0;
  }
`
