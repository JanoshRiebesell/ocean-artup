import React from "react"
import { graphql, Link } from "gatsby"

import Global from "../components/Global"
import PageTitle from "../components/PageTitle"

export default ({ data, location }) => (
  <Global pageTitle="Error 404" path={location.pathname}>
    <PageTitle img={data.img} height="100vh">
      <h1>Page not found</h1>
      <h2>
        Return to <Link to="/">landing page</Link>
      </h2>
    </PageTitle>
  </Global>
)

export const query = graphql`
  {
    img: contentfulAsset(title: { eq: "Octopus" }) {
      ...coverFields
    }
  }
`
