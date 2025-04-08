import FullPageOverlayLoading from '@/components/FullPageOverlayLoading';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<FullPageOverlayLoading />
			{children}
		</>
	);
}
