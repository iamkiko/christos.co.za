import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import * as workStyles from "./work.module.scss"

const Work = () => {
  return (
    <Layout>
      <Head title="Work" />
      <h1>Production Work</h1>
      <div className={workStyles.projectContainer}>
        <h2>NONA Digital (ZA 🇿🇦) - Studio/Agency</h2>
        <div className={workStyles.projectInfo}>
          <h3 className={workStyles.projectTitle}>Amasa (AUS 🇦🇺)</h3>
          <p>
            Web3 dApp on Polygon that allows metaverse gamers to automatically
            invest in the Web3 ecosystem on platforms such as Enzyme Finance
            etc.
          </p>
          <li>
            My role: Lead the front-end on their upcoming dApp as a team of 4;
            had to handover as we got acquired by Yoco.
          </li>
          <li>Tech Stack: React/TS/ethers.js/web3react/Solidity</li>
          <li>
            More info with screenshots{" "}
            <a href="https://amasa.medium.com/amasa-product-development-update-5-september-2022-297d916706ce">
              here
            </a>
            .
          </li>
          <li>
            <a
              href="https://amasa.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </li>
        </div>
        <div className={workStyles.projectInfo}>
          <h3 className={workStyles.projectTitle}>Gembridge (AUS 🇦🇺)</h3>
          <p>
            Gem and precious stones ecommerce marketplace with KYC allowing
            users to purchase rare gems safely.
          </p>
          <li>
            My role: Involved in all UI work, from landing pages to marketplace
            search as a team of 4.
          </li>
          <li>Tech Stack: React/TS/PHP</li>
          <li>
            <a
              href="https://gembridge.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </li>
        </div>
        <div className={workStyles.projectInfo}>
          <h3 className={workStyles.projectTitle}> 2U - GetSmarter (USA 🇺🇸)</h3>
          <p>Edtech company that provides university courses online.</p>
          <li>
            My role: Helped built their corporate B2B offering as a team of 3.
          </li>
          <li>Tech Stack: React/TS/Ruby</li>
          <li>
            <a
              href="https://www.getsmarter.com/corporate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </li>
        </div>
        <h2>Leadhome (ZA 🇿🇦) - Company</h2>
        <div className={workStyles.projectInfo}>
          <p>
            Proptech startup using technology to provide a data rich experience
            for property buyers and sellers
          </p>
          <li>
            My role: Worked on all landing pages as well as{" "}
            <a
              href="https://www.youtube.com/watch?v=-Vw_YwvAXEw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Osmosis
            </a>
            , an internal CRM. Team of varying sizes (4 - 12) depending on
            product division.
          </li>
          <li>Tech Stack: React/TS/GraphQL</li>
          <li>
            <a
              href="  https://www.leadhome.co.za/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </li>
        </div>
      </div>
    </Layout>
  )
}

export default Work
