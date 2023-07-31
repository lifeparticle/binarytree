interface Social {
	url: string;
	name: string;
}

interface ListType {
	name: string;
	category: string;
	url: string;
	subCategory: string[];
	socials: Social[];
}

interface ListProps<T> {
	items: T;
	resourceName: string;
	itemComponent: T;
}

export type { ListProps, ListType };
