import { queries } from "@testing-library/react";

interface ListItemProps<T> {
	resource: T;
	handleOnClick: (url: string) => void;
}

interface ListProps<T> {
	items: T[];
	resourceName: string;
	itemComponent: React.FC<ListItemProps<T>>;
	isLoading: boolean;
	isError: boolean;
}

const filteredData = <T>(
	searchQuery: string,
	items: T[],
	property: keyof T
) => {
	return searchQuery
		? items.filter((item: T) => {
				if (property in item) {
					if (typeof item[property] === "string") {
						return item[property]
							.toLowerCase()
							.includes(searchQuery.toLowerCase());
					} else if (Array.isArray(item[property])) {
						return item[property].some(
							(subItem) =>
								typeof subItem === "string" &&
								subItem
									.toLowerCase()
									.includes(searchQuery.toLowerCase())
						);
					}
				}
				return false;
		  })
		: items;
};

export type { ListProps, ListItemProps };
