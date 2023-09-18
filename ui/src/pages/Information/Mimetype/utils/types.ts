interface MimeTableDataType {
	name: string;
	example: string;
	code: { "content-type": string };
}

interface MimeSearchResultProps {
	data: MimeTableDataType[];
	isLoading: boolean;
	isError: boolean;
}

export type { MimeTableDataType, MimeSearchResultProps };
