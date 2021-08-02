import React from "react";
import Header from "./header";
import LandingHeader from "./LandingHeader";
import LandingFooter from "./footer";

interface IProps {
	children: any;
	landing?: boolean;
}

const Layout: React.FC<IProps> = ({ landing, children }: IProps) => {
	return (
		<>
			{(landing && <LandingHeader />) || <Header />}
			<main>{children}</main>
			{landing && <LandingFooter />}
		</>
	);
};

export default Layout;
