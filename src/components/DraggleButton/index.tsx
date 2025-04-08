'use client';

import { useEffect } from 'react';
import { RightArrow } from '../ui/icons';
import styles from './styles.module.css';

const DraggableButton = () => {
	useEffect(() => {
		dragElement(document.getElementById('mydiv')!);

		function dragElement(elmnt: HTMLElement) {
			let pos1 = 0,
				pos2 = 0,
				pos3 = 0,
				pos4 = 0;

			elmnt.onmousedown = dragMouseDown;

			let oldPosition: { offsetTop?: number; offsetLeft?: number } = {};

			function dragMouseDown(e: MouseEvent) {
				oldPosition = { offsetTop: elmnt.offsetTop, offsetLeft: elmnt.offsetLeft };
				e = e || window.event;
				e.preventDefault();
				// get the mouse cursor position at startup:
				pos3 = e.clientX;
				pos4 = e.clientY;
				document.onmouseup = closeDragElement;
				// call a function whenever the cursor moves:
				document.onmousemove = elementDrag;
			}

			function elementDrag(e: MouseEvent) {
				e = e || window.event;
				e.preventDefault();
				// calculate the new cursor position:
				pos1 = pos3 - e.clientX;
				pos2 = pos4 - e.clientY;
				pos3 = e.clientX;
				pos4 = e.clientY;
				// set the element's new position:
				elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
				elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
			}

			function closeDragElement() {
				if (oldPosition.offsetTop === elmnt.offsetTop && oldPosition.offsetLeft === elmnt.offsetLeft) {
					window.open('/Han_Viet_Ha-FrontEnd-Resume.pdf');
				}
				// stop moving when mouse button is released:
				document.onmouseup = null;
				document.onmousemove = null;
			}
		}
	}, []);
	return (
		<button
			id='mydiv'
			className={`cursor-pointer absolute left-[65%] top-[45px] z-50 flex h-8 w-28 items-center justify-center gap-1 rounded-3xl bg-link opacity-40 hover:opacity-100 sm:left-[70%] md:left-[50%] md:translate-x-[262px] ${styles.button}`}
		>
			<span className='font-bold text-white'>View PDF </span>
			<RightArrow className='relative top-[1px] font-bold text-white' />
		</button>
	);
};

export default DraggableButton;
