import useDarkMode from "utils/context/DarkModeProvider/useDarkMode";
import { ReactNode, createContext, useMemo } from "react";
import { MapToken, SeedToken } from "antd/es/theme/interface";

interface DarkModeContextType {
	isDarkMode: boolean;
	toggleTheme: () => void;
	algorithm: (token: SeedToken) => MapToken;
}

export const DarkModeContext = createContext<DarkModeContextType>(
	{} as DarkModeContextType
);

const DARK_MODE_STORAGE_KEY = "darkMode";

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
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
