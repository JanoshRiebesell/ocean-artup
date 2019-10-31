const queryTemplate = (type, fields = ``, filter = ``) => `{
  items: allContentful${type}${filter} {
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
        ${fields}
      }
    }
  }
}`

const postFields = `
  date(formatString: "MMM DD, YYYY")
  author {
    name
    email
  }
  tags {
    title
    slug
  }
`

const flatten = arr =>
  arr.map(({ node: { body, ...rest } }) => ({ ...body.remark, ...rest }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    indexName: `Pages`,
    query: queryTemplate(`Page`),
    transformer: ({ data }) => flatten(data.items.edges),
    settings,
  },
  {
    indexName: `Posts`,
    query: queryTemplate(`Post`, postFields),
    transformer: ({ data }) => flatten(data.items.edges),
    settings,
  },
]

module.exports = queries
