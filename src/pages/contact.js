import React from 'react'
import { graphql } from 'gatsby'

import Global from 'components/Global'
import PageTitle from 'components/PageTitle'
import { PageBody } from 'components/styles'
import Map from 'components/Map'

const mapProps = {
  options: {
    center: { lat: 43, lng: -10 },
    zoom: 3.6,
  },
  onMount: map => {
    new window.google.maps.Marker({
      position: { lat: 54.32791765, lng: 10.179823233482258 },
      map,
      title: `GEOMAR Helmholtz-Zentrum für Ozeanforschung Kiel`,
    })
    new window.google.maps.Marker({
      position: { lat: 27.9924864, lng: -15.3737573 },
      map,
      title: `Research Site: Taliarte, Spain`,
    })
  },
}

export default function ContactPage({ data: { page }, location }) {
  const { title, body, cover } = page
  const { excerpt, html } = body && body.remark
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle img={cover}>
        <h1>{title}</h1>
      </PageTitle>
      {html && (
        <PageBody>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <Map id="contactMap" {...mapProps} />
        </PageBody>
      )}
    </Global>
  )
}

export const query = graphql`
  {
    page: contentfulPage(slug: { eq: "/contact" }) {
      ...pageFields
    }
  }
`
