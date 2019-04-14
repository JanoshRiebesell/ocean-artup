import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { TitleDiv, Title, Img } from "./styles"

const PageTitle = ({ children, img, defaultImg, height, backdrop }) => (
  <TitleDiv height={height}>
    <Img fluid={(img || defaultImg).fluid} alt={(img || defaultImg).title} />
    <Title backdrop={backdrop}>{children}</Title>
  </TitleDiv>
)

const query = graphql`
  {
    defaultImg: contentfulAsset(title: { eq: "Background" }) {
      ...coverFields
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <PageTitle {...data} {...props} />}
  />
)
