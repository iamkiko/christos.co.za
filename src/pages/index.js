import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import * as aboutStyles from "./about.module.scss"
import { IconContext } from "react-icons"
import {
  SiApachekafka,
  SiCss3,
  SiDocker,
  SiExpress,
  SiJest,
  SiJunit5,
  SiKotlin,
  SiKubernetes,
  SiMaterialui,
  SiNodedotjs,
  SiPostgresql,
  SiRedux,
  SiSpring,
  SiTypescript,
} from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={aboutStyles.intro}>
        <h2>
          <span className={aboutStyles.christos}>
            <span role="img" aria-label="laptop">
              💻{" "}
            </span>{" "}
            About Me
          </span>{" "}
        </h2>
        <p>
          I am a self taught AWS certified Solutions Architect and Toastmaster
          working at{" "}
          <a
            className={aboutStyles.link}
            href="https://yoco.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Yoco</strong>
          </a>{" "}
          as a Full Stack Engineer.
        </p>
        <p>
          I am a vibrant, confident and meticulous individual with experience of
          problem solving under pressure and taking ownership. I love learning
          and enjoy sharing my knowledge. You can find more information on
          awards, certifications and hobbies on my{" "}
          <a
            className={aboutStyles.link}
            href="https://yoco.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong> LinkedIn</strong>
          </a>
          , as well as on this page.
        </p>
        <p>
          These include my{" "}
          <a
            className={aboutStyles.link}
            href="https://www.credly.com/badges/4e899bc9-c69e-46e2-be81-b96a06b82b17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Solutions Architect (Associate)</strong>
          </a>{" "}
          by Amazon Web Services and my diploma from the{" "}
          <a
            className={aboutStyles.link}
            href="https://studies.cs.helsinki.fi/fullstackopen2019/certificate/en/103b756bb861a30ebafee90328d02730"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Full Stack Open</strong>
          </a>{" "}
          by the University of Helsinki.
        </p>
        <p>
          I am an occasional public speaker and was the Treasurer for{" "}
          <a
            className={aboutStyles.link}
            href="https://www.toastmasters.org/Find-a-Club/9879-the-grove-club"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Grove Toastmasters</strong>
          </a>{" "}
          between 2018 - 2020 as well as their Public Relations officer in 2021
          before stepping down during COVID.
        </p>
        <p>
          On a more personal note, I enjoy lifting heavy things, boxing,
          football, reading non-fiction, trying out new recipes, hiking,
          travelling across borders, cryptocurrencies amongst other things.
        </p>
        <p>
          {" "}
          I hold dual citizenship of Cyprus 🇨🇾 and South Africa 🇿🇦 and I am an
          EU 🇪🇺 citizen.
        </p>
        <p>CV available upon request.</p>
      </div>
      <h3 className={aboutStyles.currentlyWorking}>
        <span role="img" aria-label="toolbox">
          🧰{" "}
        </span>{" "}
        Languages & Frameworks
      </h3>
      <div className={aboutStyles.learningContainer}>
        <div className={aboutStyles.languages}>
          <ul className={aboutStyles.listColumn}>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiTypescript />
              </IconContext.Provider>{" "}
              Typescript
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <FaReact />
              </IconContext.Provider>{" "}
              React
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <TbBrandReactNative />
              </IconContext.Provider>{" "}
              React Native
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <TbBrandNextjs />
              </IconContext.Provider>{" "}
              NextJS
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiRedux />
              </IconContext.Provider>{" "}
              Redux
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiNodedotjs />
              </IconContext.Provider>{" "}
              Node.js
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiExpress />
              </IconContext.Provider>{" "}
              Express
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiApachekafka />
              </IconContext.Provider>{" "}
              Apache Kafka
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiDocker />
              </IconContext.Provider>{" "}
              Docker
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiKotlin />
              </IconContext.Provider>{" "}
              Kotlin
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiSpring />
              </IconContext.Provider>{" "}
              Spring Boot
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiPostgresql />
              </IconContext.Provider>{" "}
              PostgreSQL
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiJunit5 />
              </IconContext.Provider>{" "}
              JUnit
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiJest />
              </IconContext.Provider>{" "}
              Jest
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiKubernetes />
              </IconContext.Provider>{" "}
              Kubernetes
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiCss3 />
              </IconContext.Provider>{" "}
              CSS & Styled Components
            </li>
            <li>
              <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
                <SiMaterialui />
              </IconContext.Provider>{" "}
              Material UI
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
