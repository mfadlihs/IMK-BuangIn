import Card from "./card";
import data from "@/data/sampah.json";
import { CardData } from "@/services/type";

export default function Container() {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 relative z-100'>
			{data.map((e: CardData) => {
				return <Card data={e} />;
			})}
			{/* <Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card /> */}
		</div>
	);
}
