'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Medal } from '../ui/icons';

const Certificates = ({ style }: { style?: React.CSSProperties }) => {
	return (
		<div
			className='card mt-4'
			style={style}
		>
			<p className='card-header'>Certificates</p>
			<VerticalTimeline
				layout='1-column-left'
				lineColor='rgb(var(--color-link))'
			>
				<VerticalTimelineElement
					visible={true}
					className='vertical-timeline-element--work'
					contentStyle={{ background: 'rgb(var(--color-link))', color: '#fff' }}
					contentArrowStyle={{ borderRight: '8px solid  rgb(var(--color-link))' }}
					date='03/2021'
					iconStyle={{ background: 'rgb(var(--color-link))', color: '#fff' }}
					icon={<Medal />}
				>
					<p className='vertical-timeline-element-title m-0!'>IELTS Score: 5.5</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					visible={true}
					className='vertical-timeline-element--work'
					contentStyle={{ background: 'rgb(var(--color-link))', color: '#fff' }}
					contentArrowStyle={{ borderRight: '8px solid  rgb(var(--color-link))' }}
					date='08/2020'
					iconStyle={{ background: 'rgb(var(--color-link))', color: '#fff' }}
					icon={<Medal />}
				>
					<p className='vertical-timeline-element-title m-0!'>Pasal Pro-Speaking</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default Certificates;
