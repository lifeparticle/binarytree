import { useContext } from "react";
import { DarkModeContext } from "utils/context/DarkModeProvider";

const useTheme = () => {
	const { algorithm, isDarkMode } = useContext(DarkModeContext);

	const THEME = {
		algorithm,
		token: {
			colorPrimaryHover: "var(--bt-color-hover)",
			colorPrimaryTextHover: "var(--bt-color-hover)",
			colorLinkHover: "var(--bt-color-hover)",
			fontFamily:
				"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;",
		},

		components: {
			Button: {
				colorPrimary: "#333333",
				algorithm: true,
				colorPrimaryTextHover: "var(--bt-color-hover)",
				colorPrimaryHover: "var(--bt-color-hover)",
			},
			Spin: {
				colorPrimary: isDarkMode ? "#ffffff" : "#333333",
				algorithm: true,
			},
			Menu: {
				colorPrimary: "var(--bt-color-hover)",
			},
			Tabs: {
				colorPrimary: "var(--bt-color-hover)",
			},
			Input: {
				colorPrimary: "var(--bt-color-hover)",
			},
		},
	};

	return THEME;
};

export default useTheme;
