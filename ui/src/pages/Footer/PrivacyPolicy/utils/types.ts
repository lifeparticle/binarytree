interface PurposeTableDataType {
	purpose: string;
	legal: string;
}

interface ActivityTableDataType {
	activity: string;
	categories: string[];
}

export type { PurposeTableDataType, ActivityTableDataType };
