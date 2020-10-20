import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h3>
        Hello. I am <span className={aboutStyles.christos}>Christos</span>.{" "}
      </h3>
      <h4>A self-taught front-end developer living in Cape Town.</h4>
      <ul>
        <li>
          I currently work as a software engineer at{" "}
          <a
            href="https://leadhome.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Leadhome</strong>
          </a>
          . We build innovative tools for the real estate market and I am one of
          their front-end engineers.
        </li>
        <li>
          Just passing through? Check out my{" "}
          <Link to="/blog" className={aboutStyles.homepageLink}>
            blog
          </Link>
          .
        </li>
      </ul>{" "}
    </Layout>
  )
}

export default IndexPage
