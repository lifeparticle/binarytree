import { MapToken, SeedToken } from "antd/es/theme/interface";
import useDarkMode from "lib/utils/hooks/useDarkMode";
import { ReactNode, createContext } from "react";

interface DarkModeContextType {
	isDarkMode: boolean;
	toggleTheme: () => void;
	algorithm: (token: SeedToken) => MapToken;
}

const DarkModeContext = createContext<DarkModeContextType>(
	{} as DarkModeContextType
);

const DARK_MODE_STORAGE_KEY = "darkMode";

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
