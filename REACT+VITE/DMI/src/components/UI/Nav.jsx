/* eslint-disable react/prop-types */

import { flex } from "../../assets/Constants/Displays";

export const Nav = ({ fw, width }) => {
	return (
		<nav
			className={`text-white ${fw ? "w-full" : width} border border-red-500 flex`}>
			<ul className={`w-full border border-blue-500 flex ${flex.setFlex({val1: "JCA"})}`}>
				<li>Home</li>
				<li>Products</li>
				<li>About Us</li>
				<li>Our Branches</li>
			</ul>
		</nav>
	);
};
