import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { TitleDiv, Title, Img } from './styles'

export default function PageTitle({ children, height, backdrop }) {
  const { img, defaultImg } = useStaticQuery(graphql`
    {
      defaultImg: contentfulAsset(title: { eq: "Background" }) {
        ...coverFields
      }
    }
  `)
  return (
    <TitleDiv height={height}>
      <Img fluid={(img || defaultImg).fluid} alt={(img || defaultImg).title} />
      <Title backdrop={backdrop}>{children}</Title>
    </TitleDiv>
  )
}
