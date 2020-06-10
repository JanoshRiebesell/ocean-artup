import styled from 'styled-components'
import mediaQuery from 'utils/mediaQuery'

import about from './about'
import participants from './participants'

export const LandingBody = styled.article`
  grid-column: 1 / -1;
  text-align: center;
  color: white;
  ${about};
  ${participants};
  section.spotlight {
    background: ${props => props.theme.darkGray};
    a {
      color: ${props => props.theme.orange};
      :hover {
        color: ${props => props.theme.lightGreen} !important;
      }
    }
    p:first-child {
      /* contains image */
      overflow: hidden;
      grid-area: img;
      margin: 0;
      > span {
        max-width: none !important;
      }
    }
    h2 {
      align-self: end;
      margin: 1em auto 0;
    }
    p:last-child {
      /* contains text */
      margin: 0 auto;
      padding: 2em 3em;
      align-self: start;
    }
    ${mediaQuery.minTablet} {
      display: grid;
      align-items: center;
      overflow: hidden;
      grid-template-columns: 3fr 2fr;
      grid-template-areas:
        'img heading'
        'img paragraph';
      &:nth-child(odd) {
        background: ${props => props.theme.gray};
        grid-template-columns: 2fr 3fr;
        grid-template-areas:
          'heading img'
          'paragraph img';
      }
    }
  }
`
