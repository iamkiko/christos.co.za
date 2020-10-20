import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import projectStyles from "./projects.module.scss"
const github = require("simple-icons/icons/github.svg")

const Work = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <h2>Projects</h2>
      <div className={projectStyles.projectContainer}>
        <div>
          <h3 className={projectStyles.projectTitle}>Blog List</h3>
          <img
            className={projectStyles.image}
            src={require("../assets/bloglist.png")}
            alt="grovetm"
          />
          <a
            href="https://github.com/iamkiko/bloglist-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code with instructions{" "}
            <img
              className={projectStyles.svgResize}
              alt="github"
              src={github}
            ></img>
          </a>
          <br />
          <a
            href="https://bloglist-app-fso.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
          </a>
          <hr></hr>
          <div className={projectStyles.blogLogin}>
            <p>To test, use the following:</p>
            <p>
              <strong>Username:</strong> Guest
            </p>
            <p>
              <strong>Password:</strong> guest
            </p>
          </div>
        </div>
        <div>
          <p className={projectStyles.projectDescription}>
            A full-stack site where users can register, login and use CRUD
            functionality for blog posts.
          </p>
          <ul className={projectStyles.projectInfo}>
            <li>React & Redux front-end in ES6 with Node.js</li>
            <li>
              Implemented Axios for HTTP requests to a RESTful API-based backend
              written in Node.js, ExpressJS (routing) and Mongoose
            </li>
            <li>Redux Thunk for asynchronous action creators in Redux state</li>
            <li>React Router for declarative routing between pages</li>
            <li>Module bundling using Webpack</li>
            <li>Testing with Jest (unit) and Cypress (end-to-end)</li>
            <li>Styling with Material UI</li>
            <li>
              Utilized JSON Web Tokens and Bcrypt to register, authenticate &
              provide hashes
            </li>
            <li>
              Designed database with Mongoose that utilized models / schema on
              MongoDB
            </li>
            <li>Hosted on Heroku</li>
          </ul>
        </div>
        <div>
          <h3 className={projectStyles.projectTitle}>Grove Toastmasters</h3>
          <img
            className={projectStyles.image}
            src={require("../assets/grovetm.png")}
            alt="grovetm"
          />
          <a
            href="https://github.com/iamkiko/Grove-Toastmasters"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code{" "}
            <img
              className={projectStyles.svgResize}
              alt="github"
              src={github}
            ></img>
          </a>
          <br />
          <a
            href="https://grovetoastmasters.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
        <div>
          <p className={projectStyles.projectDescription}>
            A static website for my local Toastmasters group
          </p>
          <ul className={projectStyles.projectInfo}>
            <li>Front-end developed in with Gatsby and React</li>
            <li>Set up a blog using Contentful and GraphQL</li>
            <li>Implemented Google Maps API for location</li>
            <li>Hosted on Netlify using Continuous Integration (CI)</li>
          </ul>
        </div>
        <div>
          <h3 className={projectStyles.projectTitle}>Rent A Mate</h3>
          <img
            className={projectStyles.image}
            src={require("../assets/rent-a-mate.png")}
            alt="rent-a-mate"
          />
          <a
            href="https://github.com/iamkiko/rent-a-mate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code{" "}
            <img
              className={projectStyles.svgResize}
              alt="github"
              src={github}
            ></img>
          </a>
          <br />
          <a
            href="https://rent-a-mate.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed version {"    "}
          </a>
        </div>
        <div>
          <p className={projectStyles.projectDescription}>
            Rent A Mate (Interview project)
          </p>
          <ul className={projectStyles.projectInfo}>
            <li>Built with Next for the UI, utilizing Server Side Rendering</li>
            <li>
              State management using Cookies as the API doesn't cater for
              multiple fetches and dynamic importing without SSR for
              user-specific page
            </li>
            <li>Styled with styled-components</li>
            <li>Deployed to Vercel</li>
          </ul>
        </div>
        <div>
          <h3 className={projectStyles.projectTitle}>Game of Thrones Quiz </h3>
          <img
            className={projectStyles.image}
            src={require("../assets/got-quiz.png")}
            alt="got-quiz"
          />
          <a
            href="https://github.com/iamkiko/GOT-Quiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code{" "}
            <img
              className={projectStyles.svgResize}
              alt="github"
              src={github}
            ></img>
          </a>
          <br />
          <a
            href="https://got-quiz.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed version {"    "}
          </a>
        </div>
        <div>
          <p className={projectStyles.projectDescription}>
            Game of Thrones Season 6 Quiz (Interview project)
          </p>
          <ul className={projectStyles.projectInfo}>
            <li>Built with React for the UI</li>
            <li>State management using Context API</li>
            <li>Styled with styled-components</li>
            <li>Implementation of custom hooks for fetching data from API</li>
            <li>Deployed to Vercel</li>
          </ul>
        </div>
        <div>
          <h3 className={projectStyles.projectTitle}>Countries API </h3>
          <img
            className={projectStyles.image}
            src={require("../assets/countries.png")}
            alt="countriesAPI"
          />
          <a
            href="https://github.com/iamkiko/Countries-API/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code{" "}
            <img
              className={projectStyles.svgResize}
              alt="github"
              src={github}
            ></img>
          </a>
          <br />
          <a
            href="https://iamkiko.github.io/Countries-API/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo {"    "}
          </a>
        </div>
        <div>
          <p className={projectStyles.projectDescription}>
            A light-weight React application that allows users to search for
            information and current weather on countries
          </p>
          <ul className={projectStyles.projectInfo}>
            <li>
              Implemented Axios to make HTTP requests to the Rest Countries API
              and Weatherstack API
            </li>
            <li>
              Lifted state in the application to various child components with
              React hooks
            </li>
            <li>Styled the APP using SCSS modules (basic styling)</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Work
