import './styles.css';

export const SolarSystemBackground = () => {
	return (
		<div className={'solarSystemBackground-wrapper'}>
			<ol>
				<li className={`solarSystemBackground-sun solarSystemBackground-animating`}></li>
				<li className={`solarSystemBackground-mercury solarSystemBackground-animating`}></li>
				<li className={`solarSystemBackground-venus solarSystemBackground-animating`}></li>
				<li className={`solarSystemBackground-earth solarSystemBackground-animating`}></li>
				<li className={`solarSystemBackground-mars solarSystemBackground-animating`}></li>
				<li className={`solarSystemBackground-jupiter solarSystemBackground-animating`}></li>
				<li className={`solarSystemBackground-saturn solarSystemBackground-animating`}></li>
				<li className={`solarSystemBackground-uranus solarSystemBackground-animating`}></li>
				<li className={`solarSystemBackground-neptune solarSystemBackground-animating`}></li>
			</ol>
		</div>
	);
};
