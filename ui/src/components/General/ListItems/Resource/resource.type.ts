interface Social {
	name: string;
	url: string;
}

interface ResourceType {
	name: string;
	category: string;
	subCategory: string[];
	socials: Social[];
	url: string;
}

export type { ResourceType };
