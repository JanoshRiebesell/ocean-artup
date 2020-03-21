import { css } from 'styled-components'

import mediaQuery from 'utils/mediaQuery'

const participants = css`
  section.participants {
    padding: 15vh 10vw 10vh;
    display: grid;
    grid-template-rows: auto auto 1fr auto 1fr auto 1fr;
    grid-gap: 1em 2em;
    align-items: center;
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    h2 {
      background: ${props => props.theme.lightGreen};
      border-radius: ${props => props.theme.mediumBorderRadius};
      margin: 0;
    }
    p {
      margin: 0;
    }
    p:first-child {
      grid-column: 1/-1;
      img {
        max-width: 15em;
      }
    }
    img {
      width: 100%;
      max-height: 10em;
    }
    grid-template-columns: auto auto;
    ${mediaQuery.maxPhablet} {
      h2 {
        grid-column: 1/-1;
      }
    }
    ${mediaQuery.minPhablet} {
      grid-template-columns: repeat(3, minmax(10em, 15em));
      grid-template-rows: repeat(4, auto);
      grid-auto-flow: column;
      h2 {
        grid-row: 2;
      }
    }
  }
`

export default participants
