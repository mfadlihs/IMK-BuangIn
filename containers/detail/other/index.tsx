import { CardData } from "@/services/type";
import StarOutline from "@mui/icons-material/StarOutline";
import Link from "next/link";
import React from "react";

export default function Other({ data }: { data: CardData }) {
	return (
		<Link href={`/detail/${data.id}`}>
			<div className='block sm:flex gap-2 mb-8'>
				<div>
					<div className='mb-2'>
						<img
							src={data.image}
							className='w-full aspect-video md:aspect-[unset] md:w-48 '
						/>
					</div>
					<div className='flex gap-1'>
						<img src={data.image} className='w-16 h-12' />
						<img src={data.image} className='w-16 h-12' />
						<img src={data.image} className='w-16 h-12' />
					</div>
				</div>
				<div>
					<div className='flex items-center text-base'>
						<StarOutline /> {data.rating} / 5.0
					</div>
					<div className='font-bold text-2xl'>{data.title}</div>
					<div className='font-semibold text-lg'>
						{data.description.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 300)} ...
					</div>
				</div>
			</div>
		</Link>
	);
}
