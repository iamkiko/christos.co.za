import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const github = require("simple-icons/icons/github.svg")
const linkedin = require("simple-icons/icons/linkedin.svg")
const mailto = require("simple-icons/icons/minutemailer.svg")

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.created}>
        {data.site.siteMetadata.author} © 2021
      </div>

      <div className={footerStyles.connect}>
        <a
          href="https://github.com/iamkiko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={footerStyles.svgConnect} alt={github} src={github} />
        </a>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a
          href="https://www.linkedin.com/in/christosc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={footerStyles.svgConnect}
            alt={linkedin}
            src={linkedin}
          />
        </a>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="mailto:hello@christos.co.za">
          <img className={footerStyles.svgConnect} alt={mailto} src={mailto} />
        </a>{" "}
      </div>
    </footer>
  )
}

export default Footer
