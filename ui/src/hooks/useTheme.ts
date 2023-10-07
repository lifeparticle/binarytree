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
			fontFamily: "Inter",
		},

		components: {
			Button: {
				colorPrimary: "#333333",
				algorithm: true,
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
