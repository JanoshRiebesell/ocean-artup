import styled from 'styled-components'
import { Link } from 'gatsby'

import mediaQuery from '../../utils/mediaQuery'

export const CategoryIcon = styled.img`
  height: 1.75rem;
  width: 1.75rem;
  margin: 0 1rem 0 0;
  background: ${props => props.theme.lightGray};
  border-radius: ${props => props.theme.mediumBorderRadius};
  padding: 0.2rem;
`

export const CategoryLink = styled(Link)`
  display: flex;
  white-space: nowrap;
  &.${props => props.activeClassName} {
    color: ${props => props.theme.mainOrange};
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;
`

export const ListTitle = styled.h1`
  ${mediaQuery.minPhone} {
    margin-top: 0;
  }
`