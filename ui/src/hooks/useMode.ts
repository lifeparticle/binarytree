import { useContext } from "react";
import { DarkModeContext } from "utils/context/DarkModeProvider";

export default function useMode() {
	const { isDarkMode, toggleTheme } = useContext(DarkModeContext);

	return { isDarkMode, toggleTheme };
}
