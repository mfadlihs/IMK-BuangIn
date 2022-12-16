/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import React from "react";
import Banner from "./banner";
import Category from "./category";
import Container from "./container";
import Filter from "./filter";

export default function Home() {
	return (
		<Layout>
			<Banner />
			<Filter />
			<Container />
			<Category />
		</Layout>
	);
}
