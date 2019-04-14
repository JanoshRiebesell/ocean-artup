import { graphql } from "gatsby"

export const query = graphql`
  fragment coverFields on ContentfulAsset {
    title
    description
    fluid(maxWidth: 2000) {
      ...GatsbyContentfulFluid_withWebp
    }
  }
`
