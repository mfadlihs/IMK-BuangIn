import Image from "next/image";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export default function Card() {
	return (
		<div className='bg-primary w-full rounded-xl overflow-hidden'>
			<Image
				src={"/assets/images/card.jpg"}
				className={"h-[190px] w-full"}
				width={364}
				height={190}
				alt='image-card'
			/>
			<div className='py-2 px-4 text-white'>
				<div className='text-xl font-bold mb-1'>Sampah Plastik</div>
				<div className='mb-4'>Rp2.500/kg</div>
				<div className='flex justify-between items-center'>
					<div className='flex gap-1 items-center'>
						<StarOutlineIcon />
						<div>4.5/5.0</div>
					</div>
					<div>SOLD : 4K+</div>
				</div>
			</div>
		</div>
	);
}
