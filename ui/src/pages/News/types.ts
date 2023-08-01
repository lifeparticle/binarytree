interface APIResponse {
	status: string;
	totalResults: number;
	articles: Article[];
}

interface Article {
	source: Source;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: Date;
	content: string;
}

interface Source {
	id: ID | null;
	name: string;
}

enum ID {
	BbcNews = "bbc-news",
	BusinessInsider = "business-insider",
	Engadget = "engadget",
	TheVerge = "the-verge",
	Wired = "wired",
}

export type { APIResponse, Article, Source, ID };
