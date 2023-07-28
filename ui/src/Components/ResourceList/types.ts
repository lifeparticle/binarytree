interface Social {
	url: string;
	name: string;
}

interface ResourceType {
	name: string;
	category: string;
	url: string;
	subCategory: string[];
	socials: Social[];
}

export interface ResourceListProps {
	listData: ResourceType[];
}

export type { ResourceListProps, ResourceType };
