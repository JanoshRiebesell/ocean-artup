import React, { Fragment } from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import { UserEdit } from 'styled-icons/fa-solid/UserEdit'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Tags } from 'styled-icons/fa-solid/Tags'

export const PageHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

export const PostHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={`/blog/` + hit.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <div>
      <UserEdit size="1em" />
      &nbsp;
      <a href={`mailto:` + hit.author.email}>
        <Highlight attribute="author.name" hit={hit} tagName="mark" />
      </a>
      &emsp;
      <Calendar size="1em" />
      &nbsp;
      <Highlight attribute="date" hit={hit} tagName="mark" />
      &emsp;
      <Tags size="1em" />
      &nbsp;
      {hit.tags.map(({ title }, index) => (
        <Fragment key={title}>
          {index > 0 && `, `}
          {title}
        </Fragment>
      ))}
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)
