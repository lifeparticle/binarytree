import { message, theme } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLocalstorageValue, setLocalstorageValue } from "./helper";

const useDarkMode = (storageKey: string, defaultValue: boolean) => {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return getLocalstorageValue<boolean>(storageKey) ?? defaultValue;
	});

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	useEffect(() => {
		setLocalstorageValue<boolean>(storageKey, isDarkMode);
	}, [isDarkMode]);

	return {
		algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
		toggleTheme,
		isDarkMode,
	};
};

export default useDarkMode;

export const MOBILE_WIDTH = 768;

export const useMenuCollapsed = (storageKey: string) => {
	const { windowWidth } = useWindowWidth(MOBILE_WIDTH);
	const [collapsed, setCollapsed] = useState(() => {
		return (
			getLocalstorageValue<boolean>(storageKey) ??
			windowWidth <= MOBILE_WIDTH
		);
	});

	const toggleCollapse = () => {
		setLocalstorageValue<boolean>(storageKey, !collapsed);
		setCollapsed(!collapsed);
	};

	useEffect(() => {
		const value = windowWidth <= MOBILE_WIDTH;
		if (value) {
			setLocalstorageValue<boolean>(storageKey, value);
			setCollapsed(value);
		}
	}, [windowWidth]);

	return {
		toggleCollapse,
		collapsed,
	};
};

const usePageTitle = (routes: Array<{ title: string; path: string }>) => {
	const location = useLocation();

	const currentRoute = routes.find(
		(route) => route.path === location.pathname
	);

	return currentRoute ? currentRoute.title : "Default Title";
};

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

const useCopyToClipboard = (timeout = 500) => {
	const [copied, setCopied] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();

	const copyToClipboard = useCallback(
		(text: string) => {
			navigator.clipboard.writeText(text);

			messageApi.open({
				type: "success",
				content: `Copied: ${text} 👍`,
			});

			setCopied(true);

			setTimeout(() => {
				setCopied(false);
			}, timeout);
		},
		[messageApi, timeout]
	);

	return { copied, copyToClipboard, ClipboardMessage: contextHolder };
};

export { usePageTitle, useWindowWidth, useCopyToClipboard };
