import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Page Not Found" />
      <h1>Uh oh. Page not found!</h1>
      <p>
        <Link to="/">Take me home!</Link>
      </p>
    </Layout>
  )
}

export default NotFound
