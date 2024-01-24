export interface MimeTableDataType {
	name: string;
	example: string;
	code: { "content-type": string };
}

export interface MimeSearchResultProps {
	data: MimeTableDataType[];
	isLoading: boolean;
	isError: boolean;
}
