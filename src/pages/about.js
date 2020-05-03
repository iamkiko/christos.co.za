import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"
import expressicon from "../svgs/express.svg"
import fso from "../assets/fso.png"
//icons
const babel = require("simple-icons/icons/babel.svg")
const git = require("simple-icons/icons/git.svg")
const npm = require("simple-icons/icons/npm.svg")
const webpack = require("simple-icons/icons/webpack.svg")
const prettier = require("simple-icons/icons/prettier.svg")
const eslint = require("simple-icons/icons/eslint.svg")
const confluence = require("simple-icons/icons/confluence.svg")
const apollo = require("simple-icons/icons/apollographql.svg")
const figma = require("simple-icons/icons/figma.svg")
const trello = require("simple-icons/icons/trello.svg")
const vscode = require("simple-icons/icons/visualstudiocode.svg")
const heroku = require("simple-icons/icons/heroku.svg")
const netlify = require("simple-icons/icons/netlify.svg")
const reacticon = require("simple-icons/icons/react.svg")
const nodeicon = require("simple-icons/icons/node-dot-js.svg")
const reduxicon = require("simple-icons/icons/redux.svg")
const jsicon = require("simple-icons/icons/javascript.svg")
const mongoicon = require("simple-icons/icons/mongodb.svg")
const graphqlicon = require("simple-icons/icons/graphql.svg")
const cssicon = require("simple-icons/icons/css3.svg")
const gatsby = require("simple-icons/icons/gatsby.svg")
const styledComponents = require("simple-icons/icons/styled-components.svg")
const jest = require("simple-icons/icons/jest.svg")
const udemy = require("simple-icons/icons/udemy.svg")
const udacity = require("simple-icons/icons/udacity.svg")
const ycombinator = require("simple-icons/icons/ycombinator.svg")
const goodreads = require("simple-icons/icons/goodreads.svg")

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyles.intro}>
        <h2>
          Who is <span className={aboutStyles.christos}>Christos</span>?
        </h2>
        <h4>
          Grab a copy of my CV{" "}
          <a
            href="https://drive.google.com/file/d/1_G_53ObHXvhCfSQL86JLgbXEMtq23H1C/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>here</strong>
          </a>{" "}
        </h4>
        <h4>
          {" "}
          Find my LinkedIn and other contact information{" "}
          <Link to="/contact">here</Link>.
        </h4>
        <p>
          Originally from Cyprus but born in South Africa, I am a young
          professional and eternal learner. Passionate about breaking, learning
          and building web applications using interesting technologies.
        </p>

        <p>
          I decided to transition into the tech industry after passing the{" "}
          <a
            href="https://www.wethinkcode.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>WeThinkCode</strong>
          </a>{" "}
          entry tests in 2017. I began learning full-stack development in 2018.
          Before that, I was involved in my field of international relations (BA
          Hons) for 6 years.
        </p>
        <p>
          I currently work as a software engineer at{" "}
          <a
            href="https://leadhome.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Leadhome</strong>
          </a>
          . We build innovative tools for the real estate market and I am one of
          their front-end developers working on our internal CRM.
        </p>
        <p>
          In my spare time, I am studying for Google's{" "}
          <a
            href="https://developers.google.com/certification/mobile-web-specialist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Mobile Web Specialist Course.</strong>
          </a>
        </p>
        <p>
          You can find my tech-related courses and certifications below,
          including the{" "}
          <a
            href="https://fullstackopen.com/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Full Stack Open</strong>
          </a>{" "}
          by the University of Helsinki and Y Combinator's{" "}
          <a
            href="https://www.startupschool.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Startup School</strong>
          </a>{" "}
          (2018).
        </p>
        <p>
          An avid public speaker, I am the Treasurer and a Competent
          Communicator for{" "}
          <a
            href="https://grovetoastmasters.co.za"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Grove Toastmasters</strong>
          </a>
          .
        </p>
        <p>I cover my journey into coding, in detail, in my blog post here.</p>
      </div>
      <h3 className={aboutStyles.currentlyWorking}>
        Currently working/learning with:
      </h3>
      <div className={aboutStyles.learningContainer}>
        <div className={aboutStyles.tools}>
          <h4>Tools</h4>
          <ul>
            <li>
              <img className={aboutStyles.svgResize} alt="git" src={git}></img>{" "}
              Git
            </li>
            <li>
              <img className={aboutStyles.svgResize} alt="npm" src={npm}></img>{" "}
              NPM
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="webpack"
                src={webpack}
              ></img>{" "}
              Webpack
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="babel"
                src={babel}
              ></img>{" "}
              Babel
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="heroku"
                src={heroku}
              ></img>{" "}
              Heroku
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="netlify"
                src={netlify}
              ></img>{" "}
              Netlify
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="prettier"
                src={prettier}
              ></img>{" "}
              Prettier
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="eslint"
                src={eslint}
              ></img>{" "}
              ESLint
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="confluence"
                src={confluence}
              ></img>{" "}
              Confluence
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="trello"
                src={trello}
              ></img>{" "}
              Trello
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="figma"
                src={figma}
              ></img>{" "}
              Figma
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="vscode"
                src={vscode}
              ></img>{" "}
              Visual Studio Code
            </li>
          </ul>
        </div>
        <div className={aboutStyles.languages}>
          <h4>Languages, Frameworks & Libraries</h4>
          <ul>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="js"
                src={jsicon}
              ></img>{" "}
              JavaScript with ES6
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="react"
                src={reacticon}
              ></img>{" "}
              React with Hooks
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="redux"
                src={reduxicon}
              ></img>{" "}
              Redux
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="node"
                src={nodeicon}
              ></img>{" "}
              Node.js
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="express"
                src={expressicon}
              ></img>{" "}
              Express
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="mongo"
                src={mongoicon}
              ></img>{" "}
              MongoDB
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="jest"
                src={jest}
              ></img>{" "}
              Jest
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="graphql"
                src={graphqlicon}
              ></img>{" "}
              GraphQL
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="apollo"
                src={apollo}
              ></img>{" "}
              Apollo
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="gatsby"
                src={gatsby}
              ></img>{" "}
              Gatsby.js
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="css"
                src={cssicon}
              ></img>{" "}
              CSS
            </li>
            <li>
              <img
                className={aboutStyles.svgResize}
                alt="styled-components"
                src={styledComponents}
              ></img>{" "}
              Styled Components
            </li>
          </ul>
        </div>
      </div>
      <div className={aboutStyles.courses}>
        <h3> Tech Courses and Certifications</h3>
        <ul>
          <li>
            <a
              href="https://fullstackopen.com/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Full Stack Open</strong>
            </a>{" "}
            by the University of Helsinki (2019) on{" "}
            <img className={aboutStyles.svgResize} alt={fso} src={fso}></img>
          </li>
          <li>
            <a
              href="https://classroom.udacity.com/courses/ud272"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Deploying Web Applications with Heroku</strong>
            </a>{" "}
            (2019) on{" "}
            <img
              className={aboutStyles.svgResize}
              alt={udacity}
              src={udacity}
            ></img>
          </li>
          <li>
            <a
              href="https://classroom.udacity.com/courses/ud123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Version Control with Git</strong>
            </a>{" "}
            (2019) on{" "}
            <img
              className={aboutStyles.svgResize}
              alt={udacity}
              src={udacity}
            ></img>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/understand-javascript/learn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>JavaScript: Understanding the Weird Parts</strong>
            </a>{" "}
            by Anthony Alicea (2019) on{" "}
            <img
              className={aboutStyles.svgResize}
              alt={udemy}
              src={udemy}
            ></img>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>The Complete Web Developer - Zero To Mastery</strong>
            </a>{" "}
            by Andrei Neagoie (2019) on{" "}
            <img
              className={aboutStyles.svgResize}
              alt={udemy}
              src={udemy}
            ></img>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/understand-javascript/learn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>The Web Developer Bootcamp</strong>
            </a>{" "}
            by Colt Steele (2018) on{" "}
            <img
              className={aboutStyles.svgResize}
              alt={udemy}
              src={udemy}
            ></img>
          </li>

          <li className={aboutStyles.currentlyEnrolled}>
            <a
              href="https://classroom.udacity.com/courses/ud989"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>JavaScript Design Patterns</strong>
            </a>{" "}
            (end-2019/early 2020) - currently enrolled on{" "}
            <img
              className={aboutStyles.svgResize}
              alt={udacity}
              src={udacity}
            ></img>
          </li>
          <li>
            <a
              href="https://classroom.udacity.com/courses/ep245"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>How To Build a Startup</strong>
            </a>{" "}
            by Steve Blank (2018) on{" "}
            <img
              className={aboutStyles.svgResize}
              alt={udacity}
              src={udacity}
            ></img>
          </li>
          <li>
            <a
              href="https://www.startupschool.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Startup School</strong>
            </a>{" "}
            by Y Combinator (2018) on{" "}
            <img
              className={aboutStyles.svgResize}
              alt={ycombinator}
              src={ycombinator}
            ></img>
          </li>
        </ul>
      </div>
      <h3 className={aboutStyles.interests}>Personal Interests & Hobbies</h3>
      <div className={aboutStyles.interestsContainer}>
        <div className={aboutStyles.interestsSection1}>
          <ul>
            <li>
              Reading (
              <a
                href="https://www.goodreads.com/user/show/42114921-kiko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={aboutStyles.svgGoodreads}
                  alt={goodreads}
                  src={goodreads}
                />
              </a>{" "}
              profile)
            </li>
            <li>Yoga</li>
            <li>Meditation</li>
            <li>Hiking</li>
            <li>Meditating</li>
            <li>Entrepreneurship</li>
            <li>Volunteering</li>
            <li>Mentoring</li>
          </ul>
        </div>
        <div className={aboutStyles.interestsSection2}>
          <ul>
            <li>
              Public speaking - Treasurer for{" "}
              <a
                href="https://grovetoastmasters.co.za"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grove Toastmasters
              </a>
            </li>
            <li>Football</li>
            <li>Rugby</li>
            <li>Dogs</li>
            <li>Travel</li>
            <li>Cooking</li>
            <li>Cryptocurrencies</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
export default About
