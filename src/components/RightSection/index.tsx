import CheckOutResumeButton from '../CheckOutResumeButton';
import Skills from '../Skills';
import Summary from './Summary';

const RightSection = () => {
	return (
		<div>
			<Summary />
			<div className='py-2'>
				<CheckOutResumeButton />
			</div>
			<Skills />
		</div>
	);
};

export default RightSection;
