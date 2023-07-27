interface Social {
	url: string;
	name: string;
}

export interface ResourceType {
	name: string;
	category: string;
	url: string;
	subCategory: string[];
	socials: Social[];
}
