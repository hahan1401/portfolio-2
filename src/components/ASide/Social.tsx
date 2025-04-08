import { SOCIAL } from '@/constants';
import Link from 'next/link';
import { Call, Github, Gmail, Linkedin } from '../ui/icons';

const Social = () => {
	return (
		<div className='mt-2 flex gap-3'>
			<Link
				href={`tel: ${SOCIAL.PHONE}`}
				target='_blank'
				className='group/facebook items-center'
			>
				<Call className='text-secondary-900 text-xl' />
			</Link>
			<Link
				href={`mailto: ${SOCIAL.GMAIL}`}
				target='_blank'
				className='group/facebook items-center'
			>
				<Gmail className='text-secondary-900 text-xl' />
			</Link>
			<Link
				href={SOCIAL.LINKEDIN}
				target='_blank'
				className='group/linkedin items-center'
			>
				<Linkedin className='text-secondary-900 text-xl' />
			</Link>
			<Link
				href={SOCIAL.GITHUB}
				target='_blank'
				className='group/github items-center'
			>
				<Github className='text-secondary-900 text-xl' />
			</Link>
		</div>
	);
};

export default Social;
