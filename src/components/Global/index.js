import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../utils/theme'
import Footer from '../Footer'
import Header from '../Header'
import Scroll from '../Scroll'
import Seo from '../Seo'
import { GlobalStyle } from './styles'

const Global = ({ children, site, ...rest }) => (
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

Global.propTypes = {
  children: PropTypes.node.isRequired,
}

const query = graphql`
  {
    site {
      meta: siteMetadata {
        title
        url
        description
      }
    }
  }
`

export default props => (
  <StaticQuery query={query} render={data => <Global {...data} {...props} />} />
)
