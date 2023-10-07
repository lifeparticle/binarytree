import useDarkMode from "utils/context/DarkModeProvider/utils/hooks/useDarkMode";
import { ReactNode, createContext, useMemo } from "react";
import { DarkModeContextType } from "./utils/types";
import { DARK_MODE_STORAGE_KEY } from "./utils/constant";

const DarkModeContext = createContext<DarkModeContextType>(
	{} as DarkModeContextType
);

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
	const { isDarkMode, algorithm, toggleTheme } = useDarkMode(
		DARK_MODE_STORAGE_KEY
	);

	const contextValue = useMemo(() => {
		return {
			isDarkMode,
			algorithm,
			toggleTheme,
		};
	}, [isDarkMode, algorithm, toggleTheme]);

	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	);
};

export { DarkModeContext, DarkModeProvider };
