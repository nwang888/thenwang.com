import React from "react";
import Head from "next/head";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>N Wang</title>
				{/* <link rel="icon" href="/something.ico" /> */}
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
