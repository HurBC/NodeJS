import { tags } from "@/assets/urls";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header
			className={`p-2 w-full h-20 bg-stone-900 text-white flex justify-around items-center`}>
			<Image
				src="/img/DMISmall.png"
				width={70}
				height={70}
				alt="DMI Logo"
			/>
			<nav
				className={`w-5/6 h-full border border-red-600 flex items-end`}>
				<ul
					className={`w-full border border-blue-500 flex justify-around items-center`}>
					{tags.map((t, index) => (
						<Link href={t.url} key={index}>
							<li>{t.title}</li>
						</Link>
					))}
				</ul>
			</nav>
		</header>
	);
}
