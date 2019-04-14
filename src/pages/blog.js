import React, { useState } from "react"
import { graphql } from "gatsby"

import Global from "../components/Global"
import PageTitle from "../components/PageTitle"
import { PageBody } from "../components/styles"
import TagList from "../components/TagList"
import PostList from "../components/PostList"

const filterPostsByTag = (tag, posts) =>
  tag === `all`
    ? posts
    : posts.filter(({ node }) => node.tags.map(tag => tag.slug).includes(tag))

const readActiveTagFromUrl = urlParams =>
  urlParams.replace(/.*tag=([^&]+).*/, `$1`)

export default function BlogPage({ data, location }) {
  let { posts, tags } = data
  tags = tags.edges.map(({ node }) => ({
    ...node,
    count: (node.post && node.post.length) || posts.edges.length,
  }))
  const urlTag = readActiveTagFromUrl(location.search)
  const [tag, setTag] = useState(urlTag || `all`)
  const filteredPosts = filterPostsByTag(tag, posts.edges)

  const handleTagClick = tag => {
    setTag(tag)
    history.replaceState(
      { activeTag: tag },
      `active tag: ${tag}`,
      tag === `all` ? `/blog` : `/blog?tag=${tag}`
    )
  }

  return (
    <Global pageTitle="Blog" path={location.pathname}>
      <PageTitle>
        <h1>Blog</h1>
      </PageTitle>
      <PageBody>
        <TagList tags={tags} activeTag={tag} setTag={handleTagClick} />
        <PostList inBlog posts={filteredPosts} />
      </PageBody>
    </Global>
  )
}

export const query = graphql`
  {
    posts: allContentfulPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          ...postFields
        }
      }
    }
    tags: allContentfulBlogTag(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
          post {
            title
          }
          icon {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`
