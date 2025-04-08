import { CSSProperties } from 'react';

const Skills = ({ style }: { style?: CSSProperties }) => {
	return (
		<div
			className='card mt-4'
			style={style}
		>
			<p className='card-header '>Skills</p>
			<div className='flex gap-4'>
				<p className='w-8 font-bold text-link'>Main:</p>
				<ul className='list-inside list-disc'>
					<li>Proficiency in HTML, CSS, JavaScript, Typescrip, Nextjs</li>
					<li>Responsive Design</li>
					<li>Web Performance Optimization</li>
					<li>Proficient use of source code management tool: GIT</li>
				</ul>
			</div>

			<div className='mt-2 flex gap-4'>
				<p className='w-8 font-bold text-link'>Other:</p>
				<ul className='list-inside list-disc'>
					<li>Springboot, Nestjs</li>
					<li>CI/CD</li>
					<li>Docker</li>
				</ul>
			</div>
		</div>
	);
};

export default Skills;
