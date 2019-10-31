import styled from 'styled-components'
import Img from 'gatsby-image'

export const Post = styled.article`
  height: 100%;
  display: grid;
  background: ${props => props.theme.lightestGray};
  border-radius: ${props => props.theme.mediumBorderRadius};
  border: 1px solid ${props => props.theme.lightGray};
  overflow: hidden;
  > main {
    padding: 0.7em 1em;
    display: grid;
    grid-gap: 0.5em;
  }
  a:first-child {
    height: min-content;
  }
`

export const Cover = styled(Img)`
  height: calc(10em + 4vh);
`

export const Title = styled.h3`
  margin: 0;
`

export const Excerpt = styled.p`
  margin: 0;
`
