import { Container, Wrapper } from "./style";

export default function Footer() {
	return (
		<Container>
			<div className='px-5 sm:px-12 md:px-16 gap-10 lg:px-20 py-20 flex flex-col md:flex-row justify-between text-white'>
				<div className='flex justify-around grow'>
					<div className='text-center'>
						<div className='text-3xl lg:text-4xl font-bold mb-2'>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
					</div>
					<div className='text-center'>
						<div className='text-3xl lg:text-4xl font-bold mb-2'>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
					</div>
					<div className='text-center hidden sm:block'>
						<div className='text-3xl lg:text-4xl font-bold mb-2'>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
					</div>

					<div className='text-center hidden lg:block'>
						<div className='text-4xl font-bold mb-2'>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
						<div className='text-2xl '>Buang-in</div>
					</div>
				</div>
				<div className='font-bold sm:text-4xl text-3xl lg:text-5xl text-center'>
					Follow Us
					<br />
					<span className='text-7xl'>. . . .</span>
				</div>
			</div>
			<Wrapper />
		</Container>
	);
}
