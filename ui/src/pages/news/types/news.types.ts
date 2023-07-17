export interface Main {
	status: string;
	totalResults: number;
	articles: Article[];
}

export interface Article {
	source: Source;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: Date;
	content: string;
}

export interface Source {
	id: ID | null;
	name: string;
}

export enum ID {
	BbcNews = "bbc-news",
	BusinessInsider = "business-insider",
	Engadget = "engadget",
	TheVerge = "the-verge",
	Wired = "wired",
}
