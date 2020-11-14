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
          I currently work as a software developer at{" "}
          <Link
            to="https://nona.digital/"
            target="_blank"
            className={aboutStyles.homepageLink}
          >
            <strong>NONA</strong>
          </Link>
          .
        </li>
        <li>
          {" "}
          We are a world-class custom software development studio building
          elegant, future-proof and scalable software for funded businesses.
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
