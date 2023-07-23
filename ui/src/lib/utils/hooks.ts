import { theme } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useDarkMode = () => {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	return {
		algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
		toggleTheme,
		isDarkMode,
	};
};

export default useDarkMode;

const usePageTitle = (routes: Array<{ title: string; path: string }>) => {
	const location = useLocation();

	const currentRoute = routes.find(
		(route) => route.path === location.pathname
	);

	return currentRoute ? currentRoute.title : "Default Title";
};

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowWidth;
};

export { usePageTitle, useWindowWidth };
