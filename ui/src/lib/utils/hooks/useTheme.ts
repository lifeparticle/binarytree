import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";

const useTheme = () => {
	const { algorithm, isDarkMode, toggleTheme } = useContext(DarkModeContext);

	const THEME = {
		algorithm,
		toggleTheme,
		isDarkMode,
		token: {
			colorPrimaryHover: "var(--bt-color-hover)",
			colorPrimaryTextHover: "var(--bt-color-hover)",
			colorLinkHover: "var(--bt-color-hover)",
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
