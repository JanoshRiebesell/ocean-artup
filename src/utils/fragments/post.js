import { graphql } from "gatsby"

export const query = graphql`
  fragment postFields on ContentfulPost {
    slug
    title
    author {
      name
      email
      photo {
        file {
          url
        }
      }
    }
    tags {
      title
      slug
    }
    date(formatString: "MMM D, YYYY")
    body {
      remark: childMarkdownRemark {
        html
        timeToRead
        excerpt
      }
    }
    cover {
      ...coverFields
    }
  }
`
