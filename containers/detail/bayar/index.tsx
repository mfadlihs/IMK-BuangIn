import { Button, ButtonBase } from "@mui/material";
import React, { useState } from "react";
import { CardData } from "@/services/type";

export default function Bayar({ data }: { data: CardData }) {
	const [current, setCurrent] = useState(0);

	return (
		<div className='bg-primary p-3 rounded-lg flex flex-col sm:flex-row gap-2 select-none'>
			<div className='bg-secondary py-4 px-8 basis-[50%]'>
				<div className='flex gap-4 mb-4'>
					<div
						className='text-xl cursor-pointer'
						onClick={() => {
							if (current === 0) return;
							setCurrent(current - 1);
						}}>
						-
					</div>
					<div className='grow bg-primary m-auto text-center text-white text-large py-1 rounded-lg mb-2'>
						{current}
					</div>
					<div
						className='text-xl cursor-pointer'
						onClick={() => {
							setCurrent(current + 1);
						}}>
						+
					</div>
				</div>
				<div className='text-center mb-32'>Jumlah Barang 100</div>
				<Button
					fullWidth
					className='bg-primary text-secondary'
					variant='contained'>
					Barter
				</Button>
			</div>
			<div className='bg-secondary py-4 px-8 basis-[50%]'>
				<div className='mb-4'>Ringkasan Biaya:</div>
				<div className='mb-2'>Harga Barang: {data.harga}</div>
				<div className='mb-4'>Biaya Admin: Rp200</div>
				<div className='mb-12'>Total Biaya: Rp5000</div>
				<Button
					fullWidth
					className='bg-primary text-secondary mb-2'
					variant='contained'>
					E-Money
				</Button>
				<Button
					fullWidth
					className='bg-primary text-secondary'
					variant='contained'>
					COD
				</Button>
			</div>
		</div>
	);
}
