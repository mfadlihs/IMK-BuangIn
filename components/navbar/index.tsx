import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "./styles";

export default function Navbar() {
	return (
		<div>
			<Container>
				<Link href={".."} className={"flex items-center gap-2"}>
					<Image
						src={"/assets/icons/logo.svg"}
						width={65}
						height={50}
						alt='icon'
					/>
					<span className=''>Buang-In</span>
				</Link>
				<div className='flex items-center'>
					<Image
						src={"/assets/icons/profile.png"}
						width={52}
						height={52}
						alt='profile'
					/>
				</div>
			</Container>
		</div>
	);
}
