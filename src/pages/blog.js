import { graphql } from 'gatsby'
import React, { useState, Fragment } from 'react'
import Global from 'components/Global'
import PageTitle from 'components/PageTitle'
import PostList, { ListTitle, PostContainer } from 'components/PostList'
import { PageBody } from 'components/styles'
import TagList from 'components/TagList'

const filterPostsByTag = (activeTag, posts) =>
  activeTag === `all`
    ? posts
    : posts.filter(post => post.tags.map(tag => tag.slug).includes(activeTag))

const readActiveTagFromUrl = urlParams => urlParams.replace(/.*tag=([^&]+).*/, `$1`)

const sortCountTags = (tags, totalCount) => {
  tags = tags.map(tag => ({
    ...tag,
    count: tag.post?.length || 0,
  }))
  const allTagIndex = tags.findIndex(tag => tag.slug === `/all`)
  // Make All the first tag in the list.
  tags.unshift(tags.splice(allTagIndex, 1)[0])
  // Set All count to the total number of posts.
  tags[0].count = totalCount
  return tags
}

export default function BlogPage({ data, location }) {
  let { posts, tags } = data
  tags = sortCountTags(tags.nodes, posts.nodes.length)
  const urlTag = readActiveTagFromUrl(location.search)
  const [tag, setTag] = useState(urlTag || `all`)
  const filteredPosts = filterPostsByTag(tag, posts.nodes)

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
              post.tags.map(tag => tag.slug).includes(campaign.slug)
            )
            if (!campaignPosts.length) return null
            return (
              <Fragment key={campaign.slug}>
                <ListTitle>{campaign.title}</ListTitle>
                <PostList inBlog posts={campaignPosts} />
              </Fragment>
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
      nodes {
        ...postFields
      }
    }
    tags: allContentfulBlogTag(sort: { fields: [title], order: ASC }) {
      nodes {
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
`
