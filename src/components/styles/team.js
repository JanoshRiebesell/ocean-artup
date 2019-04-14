import { css } from "styled-components"

const team = css`
  section.team {
    display: grid;
    grid-gap: calc(0.5em + 4vmin);
    grid-template-columns: repeat(auto-fit, minmax(8em, 1fr));
    p:first-child,
    h1 {
      grid-column: 1 / -1;
      text-align: center;
    }
    .gatsby-resp-image-wrapper {
      border-radius: 50% !important;
      overflow: hidden;
      max-width: 10em !important;
    }
    p {
      text-align: center;
      margin: 0;
      em {
        display: block;
        font-weight: lighter;
        font-style: normal;
        font-size: 0.9em;
      }
      em + em {
        font-size: 0.8em;
      }
    }
  }
`

export default team
