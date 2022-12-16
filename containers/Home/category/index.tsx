import React from "react";

export default function Category() {
	return (
		<div className='bg-primary py-4 md:py-6 lg:py-8 md:px-14 sm:px-12 px-5 lg:px-16 mt-20 text-white rounded-xl'>
			<div className='sm:text-2xl text-xl md:text-3xl font-bold mb-4'>
				Search By Category
			</div>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 gap-x-4'>
				<div className=''>
					<img src='/assets/images/besi.png' alt='sampah' className='w-full' />
					<div className='text-xl text-center'>Besi</div>
				</div>
				<div className=''>
					<img src='/assets/images/kaca.png' alt='sampah' className='w-full' />
					<div className='text-xl text-center'>Kaca</div>
				</div>
				<div className=''>
					<img
						src='/assets/images/styrofoam.png'
						alt='sampah'
						className='w-full'
					/>
					<div className='text-xl text-center'>Styrofoam</div>
				</div>
				<div className=''>
					<img
						src='/assets/images/plastik.png'
						alt='sampah'
						className='w-full'
					/>
					<div className='text-xl text-center'>Plastik</div>
				</div>
				<div className=''>
					<img
						src='/assets/images/kertas.png'
						alt='sampah'
						className='w-full'
					/>
					<div className='text-xl text-center'>Kertas</div>
				</div>
			</div>
		</div>
	);
}
