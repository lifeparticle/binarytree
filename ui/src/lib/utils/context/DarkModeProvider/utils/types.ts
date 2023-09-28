import { MapToken, SeedToken } from "antd/es/theme/interface";

interface DarkModeContextType {
	isDarkMode: boolean;
	toggleTheme: () => void;
	algorithm: (token: SeedToken) => MapToken;
	isModalOpen: boolean;
	handleModalOpen: () => void;
}

export type { DarkModeContextType };
