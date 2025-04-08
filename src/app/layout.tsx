import ASide from '@/components/ASide';
import { SolarSystemBackground } from '@/components/SolarSystemBackground';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Hahan',
	description: 'Hahan | Front-end Developer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			// className='bg-[url("/background.jpg")] bg-cover'
		>
			<body className={`${inter.className} `}>
				<div className='absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-black'>
					<SolarSystemBackground />
				</div>
				<div className='m-auto max-w-[1024px] px-2 py-10 sm:flex sm:px-4 md:px-10'>
					<aside className='flex-1 sm:h-full'>
						<ASide />
					</aside>
					<div className='sm-mt-0 mt-4 flex-1 sm:h-full'>{children}</div>
				</div>
			</body>
		</html>
	);
}
