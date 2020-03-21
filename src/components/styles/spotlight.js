import { css } from 'styled-components'

import mediaQuery from 'utils/mediaQuery'

const spotlight = css`
  section.spotlight {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    a {
      color: ${props => props.theme.orange};
      :hover {
        color: ${props => props.theme.yellow} !important;
      }
    }
    > p {
      margin: 0;
    }
    background: ${props => props.theme.darkGray};
    .text {
      padding: calc(1em + 3vh) calc(1em + 3vw);
      p {
        max-width: 25em;
        margin: auto;
      }
    }
    h2 {
      margin-top: 0;
    }
    ${mediaQuery.minTablet} {
      display: flex;
      text-align: left;
      height: 25em;
      .text {
        display: grid;
        margin-left: 0;
        max-width: ${props => props.theme.maxWidth};
        align-content: center;
      }
      img {
        max-width: 55vw;
      }
      &:nth-child(2n + 1) {
        text-align: right;
        flex-direction: row-reverse;
        background: ${props => props.theme.gray};
        .text {
          margin-right: 0;
        }
      }
    }
  }
`

export default spotlight
