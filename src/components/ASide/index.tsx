import TypeAnimation from '../ui/TypeAnimation';
import Social from './Social';

const ASide = () => {
	return (
		<div className='flex flex-col justify-between sm:h-full'>
			<div>
				<h2 className='text-5xl font-bold text-secondary-900'>Ha Han</h2>
				<TypeAnimation
					sequence={['Frontend Developer', 1000, '', 1200]}
					wrapper='span'
					cursor={true}
					repeat={Infinity}
					className='my-3 text-xl font-bold text-secondary-900'
				/>
				<div className='font-bold text-secondary-900'>
					<p>I build pixel-perfect, engaging, and</p>
					<p>accessible digital experiences.</p>
				</div>
			</div>

			<Social />
		</div>
	);
};

export default ASide;
