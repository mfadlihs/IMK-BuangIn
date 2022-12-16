import RegisterContainer from "@/containers/register";
import Head from "next/head";
import React from "react";

export default function RegisterRoute() {
	return (
		<>
			<Head>
				<title>Buangin - Register</title>
			</Head>
			<RegisterContainer />
		</>
	);
}
