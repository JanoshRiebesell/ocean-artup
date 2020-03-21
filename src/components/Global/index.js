import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Footer from '../Footer'
import Header from '../Header'
import Scroll from '../Scroll'
import Seo from '../Seo'
import { GlobalStyle } from './styles'

export default function Global({ children, ...rest }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        meta: siteMetadata {
          title
          url
          description
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={theme}>
      <>
        <Seo site={site.meta} {...rest} />
        <GlobalStyle />
        <Header site={site.meta} />
        {children}
        <Footer />
        <Scroll showBelow={1500} css="position: fixed; right: 1em;" />
      </>
    </ThemeProvider>
  )
}
