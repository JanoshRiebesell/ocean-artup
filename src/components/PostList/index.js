import React from "react"

import PostExcerpt from "../../components/PostExcerpt"

import { PostGrid } from "./styles"

const PostList = ({ posts }) => (
  <PostGrid minWidth="17em" maxWidth="24em" gap="1.5em">
    {posts.map(({ node }) => (
      <PostExcerpt key={node.slug} post={node} />
    ))}
  </PostGrid>
)

export default PostList
