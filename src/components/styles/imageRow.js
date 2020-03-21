import { css } from 'styled-components'

import mediaQuery from 'utils/mediaQuery'

const imageRow = css`
  div.image-row {
    ${mediaQuery.minTablet} {
      display: grid;
      grid-auto-flow: column;
      grid-gap: calc(0.5em + 1vw);
      grid-auto-columns: 1fr;
      width: 100%;
      p {
        margin: 0;
      }
      img {
        width: 100%;
        object-fit: cover;
        overflow: hidden;
      }
    }
  }
`

export default imageRow
