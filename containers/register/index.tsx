/* eslint-disable @next/next/no-img-element */
import { AppContext } from "@/pages/_app";
import { useRouter } from "next/router";
import React, { FormEventHandler, useContext } from "react";
import { Container, TextField } from "../Login/style";

export default function RegisterContainer() {
	const {
		user: { setIsUser },
	} = useContext(AppContext);

	const router = useRouter();
	const handleSubmit: FormEventHandler = e => {
		e.preventDefault();
		setIsUser(true);
		router.push("/");
	};

	return (
		<Container className='login-text lg:h-fit'>
			<div className='grow md:basis-[50%] sm:px-12 px-8 md:px-16 py-12 flex flex-col items-center justify-center'>
				<form onSubmit={handleSubmit}>
					<div className='mb-12 flex items-center justify-center'>
						<img
							src='/assets/icons/logo-text.png'
							className='m-auto w-[50%]'
							alt='logo buangin'
						/>
					</div>
					<div>Enter your E-mail address</div>
					<TextField
						className='text-black font-normal mt-2 mb-8 login-text-input'
						placeholder='Email'
						type='email'
						required
					/>
					<div>Enter your Username</div>
					<TextField
						className='text-black font-normal mt-2 mb-8 login-text-input'
						placeholder='Username'
						required
					/>
					<div>Password</div>
					<TextField
						placeholder='password'
						type='password'
						className='text-black mt-2 mb-8 login-text-input'
						required
					/>
					<div className='mb-3 md:text-center'>Terms and Service</div>
					<button
						className='bg-tertiary w-full py-2 md:py-5 rounded-xl font-bold text-2xl md:text-3xl border-none cursor-pointer'
						type='submit'>
						Daftar
					</button>
				</form>
			</div>
			<div className='basis-[50%] hidden lg:block'></div>
		</Container>
	);
}
