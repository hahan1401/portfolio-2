'use client';

import { RightArrow } from '../ui/icons';

import Link from 'next/link';
import styles from './styles.module.css';

// interface ButtonPosition {
// 	x: number;
// 	y: number;
// }

const CheckOutResumeButton = () => {
	// const [buttonPosition, setButtonPosition] = useState<ButtonPosition>({ x: 420, y: 0 });

	// const handleDrag = (event: DraggableEvent, ui: DraggableData) => {
	// 	setButtonPosition({ x: ui.x, y: ui.y });
	// };

	return (
		<Link
			href={'/resume'}
			target='_blank'
			className={`group relative flex w-fit items-center justify-center gap-1 rounded-3xl bg-secondary-900 px-2 py-1 font-bold text-primary-0 hover:text-link ${styles.button}`}
		>
			Check out my <span className='underline'>Resume</span>
			<RightArrow className='relative top-[1px] text-primary-0 group-hover:text-link' />
		</Link>
	);
};

export default CheckOutResumeButton;
