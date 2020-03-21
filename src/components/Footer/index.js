import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Container } from './styles'

export default function Footer() {
  const { footer } = useStaticQuery(graphql`
    {
      footer: contentfulJson(title: { eq: "Footer" }) {
        data {
          copyright
          authorsNote
        }
      }
    }
  `)
  return (
    <Container>
      <span>
        © {new Date().getFullYear()} - {footer.data.copyright}
      </span>
      <span dangerouslySetInnerHTML={{ __html: footer.data.authorsNote }} />
    </Container>
  )
}
