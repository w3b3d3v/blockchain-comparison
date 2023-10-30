import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Link } from "next/link";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import { useEffect, useState } from "react";

export default function Home({ blockchains }) {
  const yesOrNo = (value) => (value === "yes" ? "✅" : "❌");

  return (
    <>
      <Head>
        <title>Blockchains Technical Comparison</title>
        <meta name="description" content="Blockchains Technical Comparison" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className={styles.github}>
        <a href="https://github.com/w3b3d3v/blockchain-comparison">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Blockchains Technical Comparison</h1>
        <p>
          The most extensive blockchain technical comparison ever
          <br />
          <br />
        </p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Blockchain</th>
                <th>Token</th>
                <th>Type</th>
                <th>Tps</th>
                <th># nodes</th>
                <th>TX fees (USD)</th>
                <th>Block Time</th>
                <th>Block Finalizing</th>
                <th>Wallets</th>
                <th>Consense</th>
                <th>Native Assets</th>
                <th>Smart Contract</th>
                <th>EVM</th>
                <th>WASM</th>
                <th>Language</th>
                <th>Structure</th>
                <th>Model</th>
                <th>TVL M$</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {blockchains.map((blockchain) => (
                <tr key={blockchain.Blockchain}>
                  <td className={blockchain["logoClass"]}>
                    {!(blockchain["logoClass"] === "hide") && (
                      <Image
                        alt={blockchain["Blockchain"]}
                        width={20}
                        height={20}
                        src={
                          "https://raw.githubusercontent.com/w3b3d3v/Cryptocurrency_Logos/mainx/PNG/" +
                          blockchain["Token"].toLowerCase() +
                          ".png"
                        }
                      />
                    )}
                  </td>
                  <td>
                    {blockchain["Source"] !== "" ? (
                      <a href={blockchain["Source"]} target="_blank">
                        {blockchain["Blockchain"]}
                      </a>
                    ) : (
                      blockchain["Blockchain"]
                    )}
                  </td>
                  <td>{blockchain["Token"]}</td>
                  <td>{blockchain["Type"]}</td>
                  <td>{blockchain["Tps"]}</td>
                  <td>{blockchain["# nodes"]}</td>
                  <td>{blockchain["TX fees (USD)"]}</td>
                  <td>{blockchain["Block Time"]}</td>
                  <td>{blockchain["Block Finalizing"]}</td>
                  <td>{blockchain["Wallets"]}</td>
                  <td>{blockchain["Consense"]}</td>
                  <td>{yesOrNo(blockchain["Native Assets"])}</td>
                  <td>{yesOrNo(blockchain["Smart Contract"])}</td>
                  <td>{yesOrNo(blockchain["EVM"])}</td>
                  <td>{yesOrNo(blockchain["WASM"])}</td>
                  <td>{blockchain["Language"]}</td>
                  <td>{blockchain["Structure"]}</td>
                  <td>{blockchain["Model"]}</td>
                  <td>{blockchain["TVL M$"]} </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.footer}>
            <a
              href="https://w3d.community"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with ❤️ by
              <Image
                src="/w3d.svg"
                alt="WEB3DEV Logo"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/blockchains.json`);
  const blockchains = await res.json();

  return {
    props: {
      blockchains,
    },
  };
}
