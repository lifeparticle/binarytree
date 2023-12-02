import {
	ReactNode,
	createContext,
	useCallback,
	useMemo,
	useState,
} from "react";
import { SearchModalContextType } from "./utils/types";

export const SearchModalContext = createContext<SearchModalContextType>(
	{} as SearchModalContextType
);

export const SearchModalProvider = ({ children }: { children: ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = useCallback(
		(event?: KeyboardEvent) => {
			if (event?.key === "Escape" && !isModalOpen) {
				return;
			}
			setIsModalOpen((prev) => !prev);
		},
		[isModalOpen]
	);

	const contextValue = useMemo(() => {
		return {
			isModalOpen,
			handleModalOpen,
		};
	}, [handleModalOpen, isModalOpen]);

	return (
		<SearchModalContext.Provider value={contextValue}>
			{children}
		</SearchModalContext.Provider>
	);
};
