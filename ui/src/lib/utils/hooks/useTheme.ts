import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";

const useTheme = () => {
	const { algorithm, isDarkMode } = useContext(DarkModeContext);
	const THEME = {
		algorithm,
		components: {
			Button: {
				colorPrimary: "#333333",
				algorithm: true,
			},
			Spin: {
				colorPrimary: isDarkMode ? "#fff" : "#333333",
				algorithm: true,
			},
		},
	};

	return THEME;
};

export default useTheme;
