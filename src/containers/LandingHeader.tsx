import React from "react";
import Image from "next/image";
import Link from "next/link";

import { scrollTo } from "utils/scroll";

const LandingHeader = () => {
	return (
		// <Box as="header" background="#E4E9EE" paddingY={8}>
		<header className="header header-l">
			<div className="container">
				<div className="grid align-items-center">
					<div className="col-sm-12 col-md-3">
						<Link href="/">
							<a>
								<Image alt="Mavrik logo" src="/logo.svg" width={120} height={40} />
							</a>
						</Link>
					</div>
					<div className="col-sm-12 col-md-6">
						<ul className="header-links">
							<li>
								<a onClick={() => scrollTo({ id: "developers" })}>Developers</a>
							</li>
							<li>
								<a onClick={() => scrollTo({ id: "investors" })}>Investors</a>
							</li>
							<li>
								<a onClick={() => scrollTo({ id: "faq" })}>FAQ</a>
							</li>
						</ul>
					</div>

					<div className="col-sm-12 col-md-3 justify-self-end">
						<Link href="/connect">
							<a className="connect-wallet">
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
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default LandingHeader;
