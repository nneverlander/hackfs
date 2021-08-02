import React from "react";
import Image from "next/image";
import { Link } from "@chakra-ui/react";

const LandingFooter = () => {
	return (
		// <Box as="header" background="#E4E9EE" paddingY={8}>
		<header className="footer footer-l">
			<div className="container">
				<div className="grid">
					<div className="col-sm-12 col-md-6">
						<Link href="/">
							<Image alt="Mavrik logo" src="/logo.svg" width={120} height={40} />
						</Link>

						<p className="tg-paragraph">
							NFTCompany is a product of Mavrik Labs Inc. Mavrik labs has a grand vision of making crypto
							a part of a billion people’s daily lives.
						</p>
					</div>
					<div className="col-sm-12 col-md-3">
						<div className="tg-desc">Mavrik</div>
						<ul className="footer-links">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">FAQ</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-12 col-md-3">
						<div className="tg-desc">Legal</div>
						<ul className="footer-links">
							<li>
								<a href="#">Terms of Service</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Cookie Policy</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="grid second">
					<div className="col-sm-12 col-md-7">
						<p>Copyright © 2021 Mavrik labs Inc, All rights reserved | mavrik.co</p>
					</div>

					<div className="col-sm-12 col-md-5 justify-self-end socials">
						<a href="#">
							<Image alt="Mavrik logo" src="/fb.svg" width={36} height={36} />
						</a>
						<a href="#">
							<Image alt="Mavrik logo" src="/ln.svg" width={36} height={36} />
						</a>
						<a href="#">
							<Image alt="Mavrik logo" src="/tw.svg" width={36} height={36} />
						</a>
						<a href="#">
							<Image alt="Mavrik logo" src="/ig.svg" width={36} height={36} />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default LandingFooter;
