import React, { useState } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { ButtonCategory } from "./style";

export default function Filter() {
	const [category, setCategory] = useState("0");
	const [filter, setFilter] = useState(1);
	const handleChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string);
	};

	return (
		<div className='flex gap-8 mb-10'>
			<div className='flex grow justify-around items-center py-4 bg-primary font-bold text-white text-xl'>
				<ButtonCategory active={filter === 1} onClick={() => setFilter(1)}>
					Promo Panas
				</ButtonCategory>
				<ButtonCategory active={filter === 2} onClick={() => setFilter(2)}>
					High Demand
				</ButtonCategory>
				<ButtonCategory active={filter === 3} onClick={() => setFilter(3)}>
					High Related
				</ButtonCategory>
			</div>
			<div className='hidden md:flex w-[300px] bg-primary px-4 justify-center items-center'>
				<FormControl fullWidth>
					<Select
						placeholder='Select Category'
						className='text-white'
						variant='outlined'>
						<MenuItem value={"1"}>Terlaris</MenuItem>
						<MenuItem value={"2"}>Promo Besar</MenuItem>
						<MenuItem value={"3"}>Rekomendasi</MenuItem>
					</Select>
				</FormControl>
			</div>
		</div>
	);
}
