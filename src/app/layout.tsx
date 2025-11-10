import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
	title: {
		default: "Lux Works - Premium Web Development & Digital Solutions",
		template: "%s | Lux Works",
	},
	description:
		"Lux Works delivers high-end web development, design, and digital solutions for ambitious businesses. Transform your digital presence with our expert team.",
	keywords: [
		"lux works",
		"Izrada sajtova",
		"izrada web sajtova",
		"Izrada web shopova",
		"Izrada prezentacionih sajtova",
		"web development",
		"digital agency",
		"web design",
		"custom software",
		"Subotica",
	], 
	authors: [{ name: "Lux Works" }],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://luxworks.business/", 
		siteName: "Lux Works",
		title: "Lux Works - Premium Web Development & Digital Solutions",
		description:
			"Lux Works delivers high-end web development, design, and digital solutions for ambitious businesses.",
		images: [
			{
				url: "/og-image.jpg", 
				width: 1200,
				height: 630,
				alt: "Lux Works",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Lux Works - Premium Web Development & Digital Solutions",
		description:
			"Lux Works delivers high-end web development, design, and digital solutions.",
		images: ["/og-image.jpg"],
	},
	icons: {
		icon: "/LuxWorksLogo.png",
		apple: "/LuxWorksLogo.png",
	},
	metadataBase: new URL("https://luxworks.business/"), 
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<GoogleAnalytics />
				<Header />
				<main className="min-h-screen max-w-[1200px] mx-auto pt-32 px-4 md:px-6">
					{children}
					<SpeedInsights />
				</main>
				<Footer />
			</body>
		</html>
	);
}
