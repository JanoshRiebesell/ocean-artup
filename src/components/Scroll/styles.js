import styled from 'styled-components'
import { ArrowDownCircle as Down, ArrowUpCircle as Up } from 'styled-icons/feather'

export const Arrow = styled(Down).attrs(({ direction, size }) => ({
  as: direction === `up` && Up,
  size,
}))`
  ${({ theme, show, size }) => `
  z-index: 2;
  background: ${theme.lightGreen};
  color: white;
  border-radius: 50%;
  transition: ${theme.shortTrans};
  position: absolute;
  bottom: 1em;
  opacity: ${show ? 1 : 0};
  visibility: ${show ? `visible` : `hidden`};
  :hover {
    transform: scale(1.15);
    background: ${theme.orange};
  }
  right: calc(50vw - ${size} / 2);`}
`
