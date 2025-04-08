import { SOCIAL } from '@/constants';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { Call, Github, Gmail, Linkedin } from '../ui/icons';

const BasicInformation = ({ style }: { style?: CSSProperties }) => {
	return (
		<div
			className='card text-center'
			style={style}
		>
			<p className='text-2xl font-bold'>Ha Han</p>
			<span className='rounded-2xl bg-yellow-400 px-2 py-[2px] text-sm font-bold'>Front-end Developer</span>
			<div className='mt-2 flex flex-wrap justify-center gap-3 px-4'>
				<Link
					href={`tel: ${SOCIAL.PHONE}`}
					target='_blank'
					className='group/facebook flex flex-1 items-center gap-1'
				>
					<Call className='text-xl' />
					<span className='group-hover/facebook:text-link text-sm group-hover/facebook:underline'>{SOCIAL.PHONE}</span>
				</Link>
				<Link
					href={`mailto: ${SOCIAL.GMAIL}`}
					target='_blank'
					className='group/facebook flex flex-1 items-center gap-1'
				>
					<Gmail className='text-xl' />
					<span className='group-hover/facebook:text-link text-sm group-hover/facebook:underline'>{SOCIAL.GMAIL}</span>
				</Link>
				<Link
					href={SOCIAL.LINKEDIN}
					target='_blank'
					className='group/linkedin flex flex-1 items-center gap-1'
				>
					<Linkedin className='text-xl' />
					<span className='group-hover/linkedin:text-link text-nowrap text-sm group-hover/linkedin:underline'>
						{SOCIAL.LINKEDIN.split('/').at(-1)}
					</span>
				</Link>
				<Link
					href={SOCIAL.GITHUB}
					target='_blank'
					className='group/github flex flex-1 items-center gap-1'
				>
					<Github className='text-xl' />
					<span className='group-hover/github:text-link text-sm group-hover/github:underline'>
						{SOCIAL.GITHUB.split('/').at(-1)}
					</span>
				</Link>
			</div>
		</div>
	);
};

export default BasicInformation;
