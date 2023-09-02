interface Feature {
	key: string;
	name: string;
	description: string;
	link: string;
	library: { name: string; url: string }[];
}

interface Api {
	key: string;
	name: string;
	api: string;
}

interface Other {
	key: string;
	name: string;
	url: string;
}

interface LibraryList {
	[key: string]: string;
}

export type { Feature, Api, LibraryList, Other };
