import React from "react"
import Layout from "../components/layout"
import * as contactStyles from "./contact.module.scss"

const ThankYouPage = () => (
  <Layout>
    <h2>
      <span className={contactStyles.connect}>Connected</span>.
    </h2>
    <p>Thank you for your submission, I will be in touch shortly.</p>
  </Layout>
)

export default ThankYouPage
