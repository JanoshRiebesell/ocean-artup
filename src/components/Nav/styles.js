import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavLink = styled(Link).attrs({
  activeClassName: `active`,
  partiallyActive: true,
})`
  color: white;
  transition: ${props => props.theme.shortTrans};
  &.active {
    color: ${props => props.theme.orange};
  }
  :hover {
    color: ${props => props.theme.lightBlue};
  }
`
