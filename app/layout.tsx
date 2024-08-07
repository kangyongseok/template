import ReactQueryProviders from "@/hooks/useReactQuery";
import ProviderStore from "@/provider/ProviderStore";

import localFont from "next/font/local";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const pretendard = localFont({
	display: "swap",
	variable: "--font-Pretendard",
	src: [
		{
			path: "../public/fonts/Pretendard-Black.subset.woff2",
			weight: "900",
			style: "bold",
		},
		{
			path: "../public/fonts/Pretendard-ExtraBold.subset.woff2",
			weight: "800",
			style: "bold",
		},
		{
			path: "../public/fonts/Pretendard-Bold.subset.woff2",
			weight: "700",
			style: "bold",
		},
		{
			path: "../public/fonts/Pretendard-Medium.subset.woff2",
			weight: "500",
			style: "bold",
		},
		{
			path: "../public/fonts/Pretendard-Regular.subset.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Pretendard-Light.subset.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/Pretendard-ExtraLight.subset.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "../public/fonts/Pretendard-Thin.subset.woff2",
			weight: "100",
			style: "normal",
		},
	],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className={pretendard.variable}>
				<ReactQueryProviders>
					<ProviderStore>{children}</ProviderStore>
				</ReactQueryProviders>
			</body>
		</html>
	);
}
