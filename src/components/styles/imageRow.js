import { css } from 'styled-components'

import { mediaQueries } from 'utils/mediaQueries'

const imageRow = css`
  div.image-row {
    ${mediaQueries.minTablet} {
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
