import React from 'react'
import PostExcerpt from 'components/PostExcerpt'
import { PostGrid } from './styles'

export { ListTitle, PostContainer } from './styles'

const PostList = ({ posts }) => (
  <PostGrid minWidth="17em" maxWidth="24em" gap="1.5em">
    {posts.map(post => (
      <PostExcerpt key={post.slug} post={post} />
    ))}
  </PostGrid>
)

export default PostList
