import Home from "@/containers/Home";
import Head from "next/head";

export default function HomeRoutes() {
	// return <Home />;
	return (
		<>
			<Head>
				<title>BuangIn - Landing Page</title>
			</Head>
			<Home />
		</>
	);
}
