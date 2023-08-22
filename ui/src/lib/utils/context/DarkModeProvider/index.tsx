import useDarkMode from "lib/utils/context/DarkModeProvider/utils/hooks/useDarkMode";
import { ReactNode, createContext } from "react";
import { DarkModeContextType } from "./utils/types";
import { DARK_MODE_STORAGE_KEY } from "./utils/constant";

const DarkModeContext = createContext<DarkModeContextType>(
	{} as DarkModeContextType
);

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
	const { isDarkMode, algorithm, toggleTheme } = useDarkMode(
		DARK_MODE_STORAGE_KEY
	);
	return (
		<DarkModeContext.Provider
			value={{ isDarkMode, algorithm, toggleTheme }}
		>
			{children}
		</DarkModeContext.Provider>
	);
};

export { DarkModeContext, DarkModeProvider };
