import React, { useState, createRef } from "react"
import Recaptcha from "react-google-recaptcha"
import { navigate } from "gatsby-link"

import Layout from "../components/layout"
import Head from "../components/head"
import * as contactStyles from "./contact.module.scss"

import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillMediumSquare } from 'react-icons/ai'
import { IconContext } from "react-icons"

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var ITE_RECAPTCHA_KEY is undefined!
  `)
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({})
  const recaptchaRef = createRef()

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <div className={contactStyles.links}>
          <a
            href="https://github.com/iamkiko"
            target="_blank"
            rel="noopener noreferrer"
          >
           <IconContext.Provider value={{ color: 'black', size: '1.5rem' }}>
            <AiFillGithub className={contactStyles.svgConnect}/>
          </IconContext.Provider>
          </a>{" "}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a
            href="https://www.linkedin.com/in/christosc/"
            target="_blank"
            rel="noopener noreferrer"
          >
           <IconContext.Provider value={{ color: 'black', size: '1.5rem' }}>
            <AiFillLinkedin className={contactStyles.svgConnect}/>
          </IconContext.Provider>
          </a>{" "}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a
            href="https://medium.com/@itschristos"
            target="_blank"
            rel="noopener noreferrer"
          >
           <IconContext.Provider value={{ color: 'black', size: '1.5rem' }}>
            <AiFillMediumSquare className={contactStyles.svgConnect}/>
          </IconContext.Provider>
          </a>{" "}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="mailto:constantinides.ch@gmail.com">
          <IconContext.Provider value={{ color: 'black', size: '1.5rem' }}>
            <AiFillMail className={contactStyles.svgConnect}/>
          </IconContext.Provider>
          </a>{" "}
        </div>
        <p>Click on any of the above icons to visit my profiles.</p>
        <p>Alternatively, fire a message in my direction below!</p>
        <p>
          If forms stress you out, pop me an email at{" "}
          <strong>hello@christos.co.za</strong>
        </p>
        <h3>Say hello!</h3>
        <form
          name="contact-me"
          method="post"
          action="/thank-you/"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={handleSubmit}
          className={contactStyles.form}
        >
          <input type="hidden" name="form-name" value="contact-me" />
          <p>
            <label>
              Name:
              <br />
              <input type="text" name="name" onChange={handleChange} required />
            </label>
          </p>
          <p>
            <label>
              Email:
              <br />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={handleChange} required />
            </label>
          </p>
          <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
          <div className={contactStyles.submit}>
            <button className={contactStyles.button} type="submit">
              Submit
            </button>
          </div>
        </form>
      </Layout>
    </div>
  )
}

export default Contact
