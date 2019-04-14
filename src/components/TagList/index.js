import React, { useState } from "react"
import PropTypes from "prop-types"

import { TagGrid, Toggle, Tag, TagsIcon } from "./styles"

export default function TagList({ tags, activeTag, setTag }) {
  const [open, setOpen] = useState(false)
  return (
    <TagGrid open={open}>
      <h2 css="margin: 0;">
        <TagsIcon size="1em" />
        &nbsp; Tags
        <Toggle open={open} onClick={() => setOpen(!open)} />
      </h2>
      {tags.map(({ title, slug, count, icon }) => {
        return (
          <Tag
            open={open}
            key={title}
            active={activeTag === slug}
            onClick={() => setTag(slug)}
          >
            <img src={icon.file.url} alt={icon.title} css="width: 1.3em;" />
            &ensp;{title} ({count})
          </Tag>
        )
      })}
    </TagGrid>
  )
}

TagList.propTypes = {
  activeTag: PropTypes.string.isRequired,
  setTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
}
