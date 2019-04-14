import { graphql } from "gatsby"

export const query = graphql`
  fragment pageFields on ContentfulPage {
    title
    subtitle {
      remark: childMarkdownRemark {
        html
      }
    }
    cover {
      ...coverFields
    }
    body {
      remark: childMarkdownRemark {
        excerpt
        html
      }
    }
    updatedAt(formatString: "MMM DD, YYYY")
  }
`
