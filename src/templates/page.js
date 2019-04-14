import React from "react"
import { graphql } from "gatsby"

import Global from "../components/Global"
import PageTitle from "../components/PageTitle"
import { PageBody } from "../components/styles"

const PageTemplate = ({ data: { page }, location }) => {
  const { title, subtitle, cover, body } = page
  const { excerpt, html } = body && body.remark
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle img={cover}>
        <h1>{title}</h1>
        {subtitle && (
          <p dangerouslySetInnerHTML={{ __html: subtitle.remark.html }} />
        )}
      </PageTitle>
      {html && <PageBody dangerouslySetInnerHTML={{ __html: html }} />}
    </Global>
  )
}

export default PageTemplate

export const query = graphql`
  query($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      ...pageFields
    }
  }
`
