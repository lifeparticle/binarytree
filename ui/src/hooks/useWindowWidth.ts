import { useEffect, useState } from "react";

export default function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			const currentWidth = window.innerWidth;
			setWindowWidth(currentWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { windowWidth };
}
