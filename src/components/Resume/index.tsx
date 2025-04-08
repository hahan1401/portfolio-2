import DraggableButton from '@/components/DraggleButton';
import BasicInformation from './BasicInformation';
import Certificates from './Certificates';
import Exprerience from './Exprerience';
import Projects from './Projects';
import Skills from './Skills';
import Summary from './Summary';

const Resume = () => {
	return (
		<>
			<div className={`fixed right-0 top-0 h-full w-full bg-white`}>
				<div className={`background-grid fixed top-0 z-50 h-full w-full overflow-auto`}>
					<div className='mx-auto max-w-[800px] px-2 py-10 sm:px-4'>
						<BasicInformation style={{ animation: 'fade-up 0.7s ease-out' }} />
						<div className='mt-4 gap-4 sm:flex'>
							<div className='flex-1'>
								<Exprerience style={{ animation: 'fade-in-left 0.7s ease-out' }} />
								<Projects style={{ animation: 'fade-in-left 1s ease-out' }} />
							</div>
							<div className='flex-1 pt-4 sm:pt-0'>
								<Summary style={{ animation: 'fade-in-right 0.7s ease-out' }} />
								<Skills style={{ animation: 'fade-in-right 1s ease-out' }} />
								<Certificates style={{ animation: 'fade-in-right 1.3s ease-out' }} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<DraggableButton />
		</>
	);
};

export default Resume;
