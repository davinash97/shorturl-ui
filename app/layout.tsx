import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Shrink URL",
	description: "Shrink your URLs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${openSans.variable}
			flex h-full antialiased w-screen items-center`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
