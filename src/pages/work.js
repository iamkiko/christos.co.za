import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import * as workStyles from "./work.module.scss"
const github = require("simple-icons/icons/github.svg")

const Work = () => {
  return (
    <Layout>
      <Head title="Work" />
      <h2>Stuff I've Worked On</h2>
      <div className={workStyles.projectContainer}>

         
      </div>
    </Layout>
  )
}

export default Work
