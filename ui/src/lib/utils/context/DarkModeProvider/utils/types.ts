import { MapToken, SeedToken } from "antd/es/theme/interface";

interface DarkModeContextType {
	isDarkMode: boolean;
	toggleTheme: () => void;
	algorithm: (token: SeedToken) => MapToken;
}

export type { DarkModeContextType };
