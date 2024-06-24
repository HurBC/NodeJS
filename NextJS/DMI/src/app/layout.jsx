import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		template: "%s | DMI",
		default: ""
	},
	description: "Official page about Dunder Mifflin Paper Company",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
      <head>
        <link rel="shortcut icon" href="/DUNDER.svg" type="image/x-icon" />
      </head>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
