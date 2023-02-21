import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import headlogo from "../assets/c.png"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet
      title={`${title} - ${data.site.siteMetadata.title}`}
      link={[
        { rel: "icon", type: "image/png", sizes: "16x16", href: `${headlogo}` },
      ]}
    />
  )
}

export default Head
