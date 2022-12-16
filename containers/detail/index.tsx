import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import sampah from "@/data/sampah.json";
import { CardData } from "@/services/type";
import { Image } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarOutline from "@mui/icons-material/StarOutline";
import Bayar from "./bayar";
import Other from "./other";

export default function DetailContainer() {
	const [data, setData] = useState<CardData>();
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		setData(sampah.filter((e: CardData) => e.id == parseInt(id as string))[0]);
	}, [id]);

	useEffect(() => {
		console.log(data);
	}, [data]);

	if (!data) {
		return <></>;
	}

	return (
		<Layout>
			<div className='hidden md:flex gap-6 '>
				<div className='basis-[40%]'>
					<Image src={data?.image} className='mb-2' />
					<div className='w-full py-4 px-6 text-white mb-4 bg-primary flex justify-between'>
						<div className='flex items-center gap-2'>
							<StarOutline /> <div>Keranjang</div>
						</div>
						<div className='flex items-center gap-2'>
							<StarOutline /> <div>Chat Penjual</div>
						</div>
						<div className='flex items-center gap-2'>
							<StarOutline /> <div>Wishlist</div>
						</div>
					</div>
					<Bayar data={data} />
				</div>
				<div className='basis-[60%]'>
					<div className='md:text-5xl sm:text-4xl text-3xl lg:text-6xl mb-4 font-bold'>
						{data?.title}
					</div>
					<div className='flex font-medium text-xl gap-4'>
						<div className='text-primary'>{data?.rating} / 5.0</div>
						<div>SOLD : 4K+</div>
						<div>2K+ Komentar</div>
					</div>
					<div
						className='text-lg mb-6 font-medium'
						dangerouslySetInnerHTML={{ __html: data?.description as string }}
					/>
					<div className='flex justify-end'>
						<div className='w-[60%] py-4 px-6 text-lg bg-primary items-center text-white rounded-xl flex justify-between'>
							<div>Sort By?</div>
							<KeyboardArrowDownIcon fontSize='large' />
						</div>
					</div>
				</div>
			</div>
			<div className='mb-10 block md:hidden'>
				<Image src={data?.image} className='mb-2' />
				<div className='md:text-5xl sm:text-4xl text-3xl lg:text-6xl mb-2 font-bold'>
					{data?.title}
				</div>
				<div className='flex font-medium text-xl gap-4 mb-2'>
					<div className='text-primary'>{data?.rating} / 5.0</div>
					<div>SOLD : 4K+</div>
					<div>2K+ Komentar</div>
				</div>
				<div
					className='text-lg mb-6 font-medium'
					dangerouslySetInnerHTML={{ __html: data?.description as string }}
				/>
				<Bayar data={data} />
			</div>
			<div className='pb-4 mt-12'>
				{sampah.map((e: CardData, index) => {
					if (index > 3) return <></>;
					return <Other data={e} key={e.id} />;
				})}
			</div>
		</Layout>
	);
}
