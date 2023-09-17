interface MimeTableDataType {
	name: string;
	example: string;
	code: { "content-type": string };
}

interface MimeSearchResultPropsType {
	data: MimeTableDataType[];
	isLoading: boolean;
	isError: boolean;
}

export type { MimeTableDataType, MimeSearchResultPropsType };
