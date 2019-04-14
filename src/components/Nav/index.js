import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import { useMediaQuery } from "../../utils/mediaQuery"

import MobileNav from "./Mobile"
import DesktopNav from "./Desktop"
export { navLinkStyle, NavLink } from "./styles"

const Nav = props =>
  useMediaQuery(`maxPhablet`) ? (
    <MobileNav {...props} />
  ) : (
    <DesktopNav {...props} />
  )

const query = graphql`
  {
    nav: contentfulJson(title: { eq: "Nav" }) {
      data {
        nav {
          url
          title
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Nav {...data.nav.data} {...props} role="navigation" />}
  />
)

Nav.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
}
