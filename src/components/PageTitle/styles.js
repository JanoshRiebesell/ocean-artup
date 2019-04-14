import styled, { css } from "styled-components"
import Image from "gatsby-image"

export const TitleDiv = styled.hgroup`
  text-align: center;
  position: relative;
  color: white;
  font-size: calc(1em + 0.5vw);
  height: ${props => props.height || `70vh`};
  display: grid;
  align-content: center;
  justify-content: center;
  overflow: hidden;
`

const backdrop = css`
  > * {
    background: rgba(0, 0, 0, 0.6);
    border-radius: ${props => props.theme.smallBorderRadius};
    justify-self: center;
    padding: 0.1em 0.4em;
  }
`
export const Title = styled.div`
  max-width: 80vw;
  ${props => props.backdrop && backdrop};
`

export const Img = styled(Image)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -1;
`
