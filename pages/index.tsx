/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "containers/layout";
import { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Questions from "components/landing/question";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home page</title>
			</Head>
			<section className={styles.intro}>
				<div className="container container-avg">
					<h1 className={`tg-hero-title text-center ${styles["tg-hero-title"]}`}>Supercharged NFTs.</h1>

					<Image alt="NFT Company" src="/artwork-1.png" width={860} height={480} />

					<p className={`tg-paragraph text-center ${styles["tg-paragraph"]}`}>
						We are excited to bring you a brand new crypto primitive - a programmable NFT. Programmable NFTs
						can represent far more than digital art. They let you invest in DeFi, play games, perform tasks
						on behalf of you and more.
					</p>

					{/* <Link href="/connect">
						<a className="connect-wallet min">
							<svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M13.19.367a14.05 14.05 0 00-6.38 0l-.44.102C3.435 1.153 1.121 3.524.397 6.59c-.53 2.24-.53 4.58 0 6.82.724 3.066 3.038 5.437 5.973 6.12l.44.103c2.101.49 4.279.49 6.38 0l.44-.102c2.935-.684 5.249-3.055 5.973-6.121.53-2.24.53-4.58 0-6.82-.724-3.066-3.038-5.437-5.973-6.12l-.44-.103zm3.066 7.197a5.322 5.322 0 011.197-.077c.438.022.783.382.842.84.143 1.11.143 2.236 0 3.347-.059.457-.404.817-.842.838-.398.02-.8-.005-1.197-.076l-.078-.014c-1.033-.185-1.832-.921-2.102-1.849a2.047 2.047 0 010-1.146c.27-.928 1.069-1.664 2.102-1.849l.078-.014zM5.101 6.641c0-.37.286-.671.639-.671H10c.353 0 .64.3.64.671 0 .371-.287.672-.64.672H5.74c-.353 0-.64-.3-.64-.672z"
									fill="#fff"
								/>
							</svg>
							Connect Wallet
						</a>
					</Link> */}
				</div>
			</section>

			<section className={`${styles.about} section`}>
				<div className="container container-avg">
					<div className="grid">
						<div className="col-sm-12 col-md-6">
							<h3 className="tg-title">
							Automate DeFi with your NFTs. Track all your investments in one place.
								<br />
								<span className={`${styles.tick} brand-color`}>
									Let NFTs do the work.{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M9.05078 11.8701L10.6608 13.4801L14.9608 9.18005"
											stroke="currentColor"
											strokeWidth="2.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M20.5902 7.12006C20.5902 5.89006 19.6502 4.53006 18.5002 4.10006L13.5102 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V11.0301"
											stroke="currentColor"
											strokeWidth="2.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</span>
							</h3>

							<ul>
								<li>Each NFT interfaces with a specific DeFi protocol.</li>
								<li>NFT functions like a smart wallet.</li>
								<li>Assets are secure and segregated in each NFT.</li>
								<li>Only NFT owners can perform DeFi transactions.</li>
								<li>Assets from the NFT can be withdrawn anytime.</li>
							</ul>
						</div>
						<div className="col-sm-12 col-md-6">
							<Image alt="NFT Company" src="/artwork-2.png" width={488} height={488} />
						</div>
					</div>
				</div>
			</section>

			<section id="developers" className={`${styles.world} section`}>
				<div className="container container-avg">
					<div className={`${styles.box}`}>
						<div className="grid">
							<div className="col-sm-12 col-md-5">
								<h2 className="tg-hero-title">
									The world of <span className="brand-color">Crypto</span>
								</h2>
							</div>

							<div className="col-sm-12 col-md-7">
								<p className="tg-paragraph">
									The Crypto world can be accessed in many ways. Exchanges like Coinbase and wallets
									like Metamask are the most used ways to interact with the Crypto world. We believe
									NFTs will become a new major way the Crypto world is accessed. We are help building
									this new "UI" to Crypto, starting with NFTs that interface with DeFi protocols.
								</p>
							</div>
						</div>
						<Image className={styles.cover} alt="NFT Company" src="/artwork-3.png" width={770} height={512} />
					</div>
				</div>
			</section>

			<section id="investors" className={`${styles.investors} section`}>
				<div className="container container-avg">
					<div className="grid">
						<div className="col-sm-12 col-md-6">
							<h3 className="tg-title">Investors</h3>
							<p className="tg-paragraph">
								We are backed by investors that believe in the long term potential of crypto.
							</p>

							<div className="grid">
								<div className="col-sm-6 col-md-3">
									<Image alt="NFT Company" src="/logo-investor.png" width={100} height={100} />
								</div>
								{/* <div className="col-sm-6 col-md-3">
									<Image alt="NFT Company" src="/logo-investor.png" width={100} height={100} />
								</div>
								<div className="col-sm-6 col-md-3">
									<Image alt="NFT Company" src="/logo-investor.png" width={100} height={100} />
								</div>
								<div className="col-sm-6 col-md-3">
									<Image alt="NFT Company" src="/logo-investor.png" width={100} height={100} />
								</div> */}
							</div>
						</div>
						<div className="col-sm-12 col-md-6">
							<Image alt="NFT Company" src="/artwork-4.png" width={488} height={400} />
						</div>
					</div>
				</div>
			</section>

			<section id="faq" className={`${styles.faq} section`}>
				<div className="container container-avg">
					<h2 className="text-center tg-title">FAQs</h2>
					<Questions
						questions={[
							{
								question: "Question 1: Hello, How are you?",
								answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, suscipit eveniet sunt at a accusantium eaque, tempora debitis doloremque deleniti cumque unde itaque, saepe fugit omnis. Laudantium repellat optio animi?",
							},
							{
								question: "Question 2: Hello, How are you?",
								answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, suscipit eveniet sunt at a accusantium eaque, tempora debitis doloremque deleniti cumque unde itaque, saepe fugit omnis. Laudantium repellat optio animi?",
							},
							{
								question: "Question 3: Hello, How are you?",
								answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, suscipit eveniet sunt at a accusantium eaque, tempora debitis doloremque deleniti cumque unde itaque, saepe fugit omnis. Laudantium repellat optio animi?",
							},
							{
								question: "Question 4: Hello, How are you?",
								answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, suscipit eveniet sunt at a accusantium eaque, tempora debitis doloremque deleniti cumque unde itaque, saepe fugit omnis. Laudantium repellat optio animi?",
							},
						]}
					/>
				</div>
			</section>
		</>
	);
}

// eslint-disable-next-line react/display-name
Home.getLayout = (page: NextPage) => <Layout landing>{page}</Layout>;
