import { graphql } from 'gatsby'
import React, { useState } from 'react'
import Global from '../components/Global'
import PageTitle from '../components/PageTitle'
import PostList, { ListTitle, PostContainer } from '../components/PostList'
import { PageBody } from '../components/styles'
import TagList from '../components/TagList'

const filterPostsByTag = (activeTag, posts) =>
  activeTag === `all`
    ? posts
    : posts.filter(({ node }) => node.tags.map(tag => tag.slug).includes(activeTag))

const readActiveTagFromUrl = urlParams => urlParams.replace(/.*tag=([^&]+).*/, `$1`)

const sortCountTags = (tags, totalCount) => {
  tags = tags.map(({ node }) => ({
    ...node,
    count: (node.post && node.post.length) || 0,
  }))
  // Make All the first tag in the list.
  tags.unshift(tags.splice(tags.findIndex(tag => tag.slug === `all`), 1)[0])
  // Set All count to the total number of posts.
  tags[0].count = totalCount
  return tags
}

export default function BlogPage({ data, location }) {
  let { posts, tags } = data
  tags = sortCountTags(tags.edges, posts.edges.length)
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
  const campaigns = tags.filter(tag => tag.slug.includes(`campaign`)).reverse()
  return (
    <Global pageTitle="Blog" path={location.pathname}>
      <PageTitle>
        <h1>Blog</h1>
      </PageTitle>
      <PageBody>
        <TagList tags={tags} activeTag={tag} setTag={handleTagClick} />
        <PostContainer>
          {campaigns.map(campaign => {
            const campaignPosts = filteredPosts.filter(post =>
              post.node.tags.map(tag => tag.slug).includes(campaign.slug)
            )
            if (!campaignPosts.length) return null
            return (
              <>
                <ListTitle>{campaign.title}</ListTitle>
                <PostList inBlog posts={campaignPosts} />
              </>
            )
          })}
        </PostContainer>
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
