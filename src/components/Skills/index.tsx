'use client';

import { motion } from 'framer-motion';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import { NodeJs, ReactJs, Typescript } from '../ui/icons';

const Skills = () => {
	return (
		<motion.div className='relative mt-4 w-full'>
			<motion.div
				className='z-10 w-full'
				animate={{ y: [0, -20, 0] }}
				transition={{
					repeat: Infinity,
					duration: 5,
					ease: 'easeInOut',
				}}
			>
				<div className='h-20 w-full overflow-hidden border border-link'>
					<div className='flex h-full w-full flex-col justify-center backdrop-blur-xs'>
						<MouseParallaxContainer
							className='parallax grid w-full grid-cols-3'
							globalFactorX={0.3}
							globalFactorY={0.3}
							resetOnLeave
						>
							<MouseParallaxChild
								factorX={0.5}
								factorY={0.5}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: 'auto',
									height: '100%',
								}}
							>
								<NodeJs className='text-4xl text-white' />
							</MouseParallaxChild>
							<MouseParallaxChild
								factorX={0.7}
								factorY={0.5}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: 'auto',
									height: '100%',
								}}
							>
								<Typescript className='text-4xl text-white' />
							</MouseParallaxChild>
							<MouseParallaxChild
								factorX={0.9}
								factorY={0.5}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: 'auto',
									height: '100%',
								}}
							>
								<ReactJs className='text-4xl text-white' />
							</MouseParallaxChild>
						</MouseParallaxContainer>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Skills;
