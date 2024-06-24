import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="py-5 px-3 flex justify-between bg-slate-400 font-bold text-slate-900">
			<Link href={"/"}>Home</Link>
			<ul>
				<li>
					<Link href={"/about"}>About</Link>
				</li>
			</ul>
		</nav>
	);
}
