import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { useMediaQuery } from 'utils/mediaQuery'

import MobileNav from './Mobile'
import DesktopNav from './Desktop'
export { navLinkStyle, NavLink } from './styles'

export default function Nav(props) {
  const { nav } = useStaticQuery(graphql`
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
  `)
  return useMediaQuery(`maxPhablet`) ? (
    <MobileNav {...props} {...nav.data} />
  ) : (
    <DesktopNav {...props} {...nav.data} />
  )
}
