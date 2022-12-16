import LoginContainer from "@/containers/Login";
import Login from "@/containers/Login";
import Head from "next/head";

export default function LoginRoute() {
	return (
		<>
			<Head>
				<title>BuangIn - Login</title>
			</Head>
			<LoginContainer />
		</>
	);
}
