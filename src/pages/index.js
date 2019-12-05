import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      {/* <h2>Hello.</h2> */}
      <h3>
        Hello. I am <span className={aboutStyles.christos}>Christos</span>.{" "}
      </h3>
      <h4>A self-taught full-stack developer living in beautiful Cape Town.</h4>
      <ul>
        <li>Need a developer?</li>
        <li>Keen to learn public speaking?</li>
        <li>Want to say hello?</li>
        <li>
          <Link to="/contact" className={aboutStyles.homepageLink}>
            Get in touch.
          </Link>{" "}
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
