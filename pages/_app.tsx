import "../styles/globals.css";
import "../styles/grid.css";
import "../styles/fonts.css";
import "../src/components/nft/components.scss";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { UserProvider } from "providers/user";


const colors = {
	fonts: {
		heading: "Greycliff",
		body: "Greycliff",
	},
	brand: {
		500: "#4047FF",
	},
};

const config: ThemeConfig = {
	// useSystemColorMode: true,
	initialColorMode: "light",
};

const theme = extendTheme({ config, colors });

function MyApp({ Component, pageProps }: AppProps) {
	const getLayout = (Component as any).getLayout || ((page: NextPage) => page);
	return getLayout(
		<ChakraProvider theme={theme}>
			<UserProvider user={null}>
				<Component {...pageProps} />
			</UserProvider>
		</ChakraProvider>
	);
}
export default MyApp;
