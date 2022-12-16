import Layout from "@/components/layout";
import React from "react";
import { Card } from "./style";

export default function ProfileContainer() {
	return (
		<Layout>
			<Card className='md:flex'>
				<img
					src='/assets/images/profile2.svg'
					className='w-48 m-auto flex justify-center items-center'
				/>
				<div className='grow'>
					<div className='md:text-4xl sm:text-3xl text-2xl lg:text-5xl mb-4 font-bold text-center'>
						Windiandra Maha Kusuma
					</div>
					<div className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-bold mb-10'>
						Banjarmasin, Banten
					</div>
					<div className='lg:text-3xl md:text-2xl sm:text-xl text-lg text-center'>
						BCA 081313084123
					</div>
				</div>
			</Card>
			<Card className='md:text-5xl sm:text-4xl text-3xl lg:text-6xl mt-10 font-bold text-center'>
				Profile Toko User
			</Card>
			<Card className='mt-10 '>
				<div className='font-bold text-center md:text-5xl sm:text-4xl text-3xl lg:text-6xl'>
					Aktivitas
				</div>
				<ul className='lg:text-4xl md:text-3xl sm:text-2xl text-xl pl-6'>
					<li className='mt-1 sm:mt-4 md:mt-6 lg:mt-10'>Riwayat Transaksi</li>
					<li className='mt-1 sm:mt-4 md:mt-6 lg:mt-10'>Wishlist</li>
					<li className='mt-1 sm:mt-4 md:mt-6 lg:mt-10'>Review</li>
					<li className='mt-1 sm:mt-4 md:mt-6 lg:mt-10'>Followed Store</li>
				</ul>
			</Card>
			<Card className='mt-10 '>
				<div className='font-bold text-center md:text-5xl sm:text-4xl text-3xl lg:text-6xl'>
					Kategori
				</div>
				<ul className='lg:text-4xl md:text-3xl sm:text-2xl text-xl pl-6'>
					<li className='mt-1 sm:mt-4 md:mt-6 lg:mt-10'>Plastik</li>
					<li className='mt-1 sm:mt-4 md:mt-6 lg:mt-10'>Kaca</li>
					<li className='mt-1 sm:mt-4 md:mt-6 lg:mt-10'>Styrofoam</li>
					<li className='mt-1 sm:mt-4 md:mt-6 lg:mt-10'>Besi</li>
					<li className='mt-1 sm:mt-4 md:mt-6 lg:mt-10'>Kertas</li>
				</ul>
			</Card>
		</Layout>
	);
}
