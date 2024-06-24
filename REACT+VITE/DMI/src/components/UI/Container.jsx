/* eslint-disable react/prop-types */

export const Container = ({ children, S, fw, width, fh, height, bgColor = "bg-stone-100" }) => {
	return (
		<section className={`p-3 ${fw ? "w-full" : width} ${fh ? "h-full" : height} ${S} ${bgColor}`}>
			{children}
		</section>
	);
};
