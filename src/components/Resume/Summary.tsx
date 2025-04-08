import { CSSProperties } from 'react';

const Summary = ({ style }: { style?: CSSProperties }) => {
	return (
		<div
			className='card'
			style={style}
		>
			<p className='card-header'>Summary</p>
			<p className='text-sm'>
				Motivated and results-oriented Front-End Developer with 2.5+ years of experience crafting user-friendly web
				applications. Strong foundation in HTML, CSS, and JavaScript with strong proficiency in Next.js, React.js and
				familiarity with Angular. Besides, have worked as a backend developer with nodejs and java and knowledge of
				CI/CD, docker. Seeking an opportunity for the fulfillment of my passion for software engineering at a
				well-established organization through an ongoing career and I will do my best for the benefit and development of
				the company.
			</p>
		</div>
	);
};

export default Summary;
