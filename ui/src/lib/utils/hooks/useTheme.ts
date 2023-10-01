import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";

const useTheme = () => {
	const { algorithm, isDarkMode } = useContext(DarkModeContext);
	const THEME = {
		algorithm,
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
		},
	};

	return THEME;
};

export default useTheme;
