import ProfileContainer from "@/containers/profile";
import Head from "next/head";
import React from "react";

export default function Profile() {
	return (
		<>
			<Head>
				<title>BuangIn - Profile</title>
			</Head>
			<ProfileContainer />
		</>
	);
}
