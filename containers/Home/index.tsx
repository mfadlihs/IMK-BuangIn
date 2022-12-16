/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import Banner from "./banner";
import Category from "./category";
import Container from "./container";
import Filter from "./filter";

export default function Home() {
	return (
		<div className='overflow-x-hidden'>
			<Navbar />
			<div className=' w-screen  relative'>
				<div className='px-5 sm:px-12 md:px-16 lg:px-20 pt-20 relative z-100'>
					<Banner />
					<Filter />
					<Container />
					<Category />
				</div>
				<div className='absolute inset-0 bg-secondary -z-10'></div>
				<img
					src='/assets/images/wave1.svg'
					className='absolute bottom-0 -z-10'
					alt='wave'
				/>
			</div>
			<div className='w-screen h-96 bg-[#FFC875] relative'>
				<img
					src='/assets/images/wave2.svg'
					className='absolute bottom-0'
					alt='wave'
				/>
			</div>
			<Footer />
		</div>
	);
}

/*
#FFE397
#FFC875
#FFB672
*/
