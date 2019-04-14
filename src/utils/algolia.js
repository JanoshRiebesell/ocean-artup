const pageQuery = `{
  pages: allContentfulPage {
    edges {
      node {
        objectID: id
        slug
        title
        body {
          remark: childMarkdownRemark {
            excerpt(pruneLength: 5000)
            headings {
              value
              depth
            }
          }
        }
      }
    }
  }
}`

const postQuery = `{
  posts: allContentfulPost {
    edges {
      node {
        objectID: id
        slug
        title
        date(formatString: "MMM DD, YYYY")
        author {
          name
          email
        }
        tags {
          title
          slug
        }
        body {
          remark: childMarkdownRemark {
            excerpt(pruneLength: 5000)
            headings {
              value
              depth
            }
          }
        }
      }
    }
  }
}`

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) =>
      data.pages.edges.map(({ node: { body, ...rest } }) => ({
        ...body.remark,
        ...rest,
      })),
    indexName: `Pages`,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
  {
    query: postQuery,
    transformer: ({ data }) =>
      data.posts.edges.map(({ node: { body, ...rest } }) => ({
        ...body.remark,
        ...rest,
      })),
    indexName: `Posts`,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
