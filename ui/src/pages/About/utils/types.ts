interface DataType {
	key: string;
	name: string;
	description: string;
	link: string;
	library: { name: string; url: string }[];
}

interface ApiInterfaceType {
	name: string;
	key: string;
	api: string;
}

interface LibraryList {
	[key: string]: string;
}

export type { DataType, ApiInterfaceType, LibraryList };
