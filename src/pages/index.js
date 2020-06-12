import React from 'react'
import { graphql } from 'gatsby'

import Global from 'components/Global'
import PageTitle from 'components/PageTitle'
import Scroll from 'components/Scroll'
import { LandingBody } from 'components/styles'

const IndexPage = ({ data: { page }, location }) => {
  const { title, subtitle, body } = page
  const { excerpt, html } = body && body.remark
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle height="60vh">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: subtitle.remark.html }} />
      </PageTitle>
      <Scroll direction="down" to={1} align="center" position="absolute" />
      {html && <LandingBody dangerouslySetInnerHTML={{ __html: html }} />}
    </Global>
  )
}

export default IndexPage

export const query = graphql`
  {
    page: contentfulPage(slug: { eq: "/" }) {
      ...pageFields
    }
  }
`
