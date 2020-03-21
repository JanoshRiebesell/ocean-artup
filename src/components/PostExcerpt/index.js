import React from 'react'
import { Link } from 'gatsby'

import { Post, Cover, Title, Excerpt } from './styles'
import PostMeta from '../PostMeta'

const PostExcerpt = ({ post, post: { title, slug, body, cover } }) => (
  <Post>
    {cover && (
      <Link to={slug}>
        <Cover fluid={cover.fluid} alt={cover.title} />
      </Link>
    )}
    <main>
      <Title>
        <Link to={slug}>{title}</Link>
      </Title>
      <PostMeta {...post} />
      <Excerpt dangerouslySetInnerHTML={{ __html: body.remark.excerpt }} />
    </main>
  </Post>
)

export default PostExcerpt
