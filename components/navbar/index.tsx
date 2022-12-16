import { AppContext } from "@/pages/_app";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import { Container, Sidebar } from "./styles";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useClickOutside } from "@/hooks/useClickOutside";
import CloseIcon from "@mui/icons-material/Close";
import useContainerDimensions from "@/hooks/useContainerDimension";

export default function Navbar() {
	const [hidup, setHidup] = useState(false);
	const sidebar = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useClickOutside(sidebar, () => {
		setHidup(false);
	});

	const { height } = useContainerDimensions<HTMLDivElement>(containerRef);

	const {
		user: { isUser },
	} = useContext(AppContext);

	return (
		<>
			<div>
				<Container
					ref={containerRef}
					className='py-6 md:py-8 px-8 md:px-12 lg:px-16'>
					<Link href={".."} className={"flex items-center gap-2"}>
						<Image
							src={"/assets/icons/logo.svg"}
							width={65}
							height={40}
							alt='icon'
						/>
						<span className='text-2xl lg:text-3xl'>Buang-In</span>
					</Link>
					<div className='hidden md:flex items-center gap-4 '>
						<div className='py-1 px-4 flex bg-white rounded-2xl'>
							<input className='outline-none border-none text-lg' />
							<span>
								<Image
									src={"/assets/icons/search.svg"}
									width={30}
									height={30}
									alt='search'
								/>
							</span>
						</div>
						{isUser ? (
							<Image
								src={"/assets/icons/profile.png"}
								width={52}
								height={52}
								alt='profile'
							/>
						) : (
							<Link href='/login'>
								<Button className='bg-secondary text-black' variant='contained'>
									Login
								</Button>
							</Link>
						)}
					</div>
					<div
						className='md:hidden cursor-pointer'
						onClick={() => setHidup(true)}>
						<MenuIcon fontSize='large' />
					</div>
				</Container>
				<div style={{ height }}></div>
			</div>

			<Sidebar
				ref={sidebar}
				className={`${hidup ? "right-0" : "right-[-300px]"} p-4`}>
				<div className='flex justify-end' onClick={() => setHidup(false)}>
					<CloseIcon fontSize='large' className='text-white' />
				</div>
				{isUser ? (
					<div className='flex text-2xl text-white mt-4 gap-4 items-center'>
						<img src='/assets/icons/profile.png' />
						Profile
					</div>
				) : (
					<Link href='/login'>
						<Button
							className='bg-secondary text-xl py-2 px-4 text-black mx-auto'
							variant='contained'>
							Login
						</Button>
					</Link>
				)}
			</Sidebar>
		</>
	);
}
