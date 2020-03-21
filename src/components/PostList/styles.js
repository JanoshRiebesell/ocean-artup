import styled from 'styled-components'
import { Grid } from 'components/styles'
import mediaQuery from 'utils/mediaQuery'

export const PostGrid = styled(Grid)`
  height: max-content;
  font-size: 0.8em;
  line-height: 1.6em;
`

export const PostContainer = styled.div`
  ${mediaQuery.maxPhablet} {
    grid-column: 3;
    justify-self: center;
  }
  ${mediaQuery.minPhablet} {
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
