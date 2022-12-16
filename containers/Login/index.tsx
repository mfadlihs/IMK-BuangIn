import Link from "next/link";
import React, { FormEventHandler } from "react";
import { Container, TextField } from "./style";

export default function LoginContainer() {
	const handleSubmit: FormEventHandler = e => {
		e.preventDefault();
	};

	return (
		<Container className='login-text'>
			<div className='grow md:basis-[50%] sm:px-12 px-8 md:px-16 py-12 flex flex-col items-center justify-center'>
				<form onSubmit={handleSubmit}>
					<div className='mb-16 flex items-center justify-center'>
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
					<div>Password</div>
					<TextField
						placeholder='password'
						type='password'
						className='text-black mt-2 mb-12 login-text-input'
						required
					/>
					<button
						className='bg-tertiary w-full py-5 rounded-xl font-bold text-3xl border-none cursor-pointer'
						type='submit'>
						Masuk
					</button>
					<div className='mt-8'>
						Belum punya akun?{" "}
						<Link href={"/register"}>
							<span>buat disini</span>
						</Link>
					</div>
				</form>
			</div>
			<div className='basis-[50%] hidden md:block'></div>
		</Container>
	);
}
