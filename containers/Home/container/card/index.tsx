import Image from "next/image";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Link from "next/link";
import { CardData } from "@/services/type";

export default function Card({ data }: { data: CardData }) {
	return (
		<Link href={`/detail/${data.id}`}>
			<div
				className='bg-primary w-full rounded-xl overflow-hidden'
				style={{ boxShadow: "1px 1px 10px #333" }}>
				<img
					src={data.image}
					className={"h-[190px] w-full object-cover"}
					width={364}
					alt='image-card'
				/>
				<div className='py-2 px-4 text-white'>
					<div className='text-xl font-bold mb-1'>{data.title}</div>
					<div className='mb-4'>{data.harga}/kg</div>
					<div className='flex justify-between items-center'>
						<div className='flex gap-1 items-center'>
							<StarOutlineIcon />
							<div>{data.rating}/5.0</div>
						</div>
						<div>SOLD : 4K+</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
