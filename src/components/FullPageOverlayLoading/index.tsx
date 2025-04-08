'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TypeAnimation from '../ui/TypeAnimation';

const FullPageOverlayLoading = () => {
	const [hidden, setHidden] = useState(false);
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setHidden(false);
	// 	}, 1500);
	// }, []);
	return (
		<div
			className={`fixed bottom-0 ${hidden ? '-left-full' : 'left-0'} top-0 z-99 flex w-full flex-col items-center justify-center bg-black duration-500`}
		>
			<TypeAnimation
				sequence={['Hello, nice to see you...   ^_^', 10]}
				wrapper='span'
				cursor={true}
				repeat={Infinity}
				className='text-secondary-900 my-3 text-xl font-bold'
			/>

			<motion.div
				initial={{ scale: 0 }}
				animate={{ rotate: 360, scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
					delay: 1,
				}}
			>
				<button
					className={`rounded-2xl border border-white px-4 py-2 text-white transition-all duration-200 hover:bg-white hover:text-black `}
					onClick={() => {
						setHidden(!hidden);
					}}
				>
					Click me!
				</button>
			</motion.div>
		</div>
	);
};

export default FullPageOverlayLoading;
