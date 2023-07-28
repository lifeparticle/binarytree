import { useEffect, useState } from "react";

const useWindowWidth = (width: number) => {
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
	}, [width]);

	return { windowWidth };
};

export default useWindowWidth;
