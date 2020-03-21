import React from 'react'

import { HeaderContainer, SiteTitle } from './styles'
import Nav from '../Nav'
import Search from '../Search'
import Logo from 'assets/logo'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = ({ site }) => (
  <HeaderContainer>
    <SiteTitle to="/" title={site.title} rel="home">
      <Logo alt={site.title} />
    </SiteTitle>
    <Nav />
    <Search collapse indices={searchIndices} />
  </HeaderContainer>
)

export default Header
