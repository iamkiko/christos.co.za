import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as footerStyles from "./footer.module.scss"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { IconContext } from "react-icons"

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
        {data.site.siteMetadata.author} © 2022
      </div>

      <div className={footerStyles.connect}>
        <a
          href="https://github.com/iamkiko"
          target="_blank"
          rel="noopener noreferrer"
        >
        <IconContext.Provider value={{ color: 'black', size: '1.5rem' }}>
          <AiFillGithub className={footerStyles.svgConnect}/>
        </IconContext.Provider>
        </a>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a
          href="https://www.linkedin.com/in/christosc/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <IconContext.Provider value={{ color: 'black', size: '1.5rem' }}>
          <AiFillLinkedin className={footerStyles.svgConnect}/>
        </IconContext.Provider>
        </a>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="mailto:constantinides.ch@gmail.com">
        <IconContext.Provider value={{ color: 'black', size: '1.5rem' }}>
          <AiFillMail className={footerStyles.svgConnect}/>
        </IconContext.Provider>
        </a>{" "}
        
      </div>
    </footer>
  )
}

export default Footer
