import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { SearchModalContextType } from "./utils/types";

const SearchModalContext = createContext<SearchModalContextType>(
	{} as SearchModalContextType
);

const SearchModalProvider = ({ children }: { children: ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = useCallback(() => {
		setIsModalOpen((prev) => !prev);
	}, []);

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

const useModal = () => {
	return useContext(SearchModalContext);
};

export { useModal, SearchModalProvider };
