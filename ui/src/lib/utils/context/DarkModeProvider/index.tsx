import useDarkMode from "lib/utils/context/DarkModeProvider/utils/hooks/useDarkMode";
import {
	ReactNode,
	createContext,
	useCallback,
	useMemo,
	useState,
} from "react";
import { DarkModeContextType } from "./utils/types";
import { DARK_MODE_STORAGE_KEY } from "./utils/constant";

const DarkModeContext = createContext<DarkModeContextType>(
	{} as DarkModeContextType
);

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { isDarkMode, algorithm, toggleTheme } = useDarkMode(
		DARK_MODE_STORAGE_KEY
	);

	const handleModalOpen = useCallback(() => {
		setIsModalOpen((prev) => !prev);
	}, []);

	const contextValue = useMemo(() => {
		return {
			isDarkMode,
			algorithm,
			toggleTheme,
			isModalOpen,
			handleModalOpen,
		};
	}, [isDarkMode, algorithm, toggleTheme, handleModalOpen, isModalOpen]);

	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	);
};

export { DarkModeContext, DarkModeProvider };
