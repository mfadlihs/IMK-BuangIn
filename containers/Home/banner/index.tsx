/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
	return (
		<div className='mb-16 md:mb-20 lg:mb-24'>
			<Swiper slidesPerView={1} spaceBetween={100}>
				<SwiperSlide>
					<img
						src='/assets/images/banner.png'
						className='w-full '
						loading='lazy'
						alt='banner'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='/assets/images/banner.png'
						className='w-full '
						loading='lazy'
						alt='banner'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='/assets/images/banner.png'
						className='w-full '
						loading='lazy'
						alt='banner'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
