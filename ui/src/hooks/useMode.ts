import { useContext } from "react";
import { DarkModeContext } from "utils/context/DarkModeProvider";

const useMode = () => {
	const { isDarkMode, toggleTheme } = useContext(DarkModeContext);

	return { isDarkMode, toggleTheme };
};

export default useMode;
