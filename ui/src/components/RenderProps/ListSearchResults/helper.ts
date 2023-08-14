import { NewsType } from "components/General/ListItems/News/news.types";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";

const filteredNews = <T>(searchQuery: string, items: T[]) => {
	if (searchQuery) {
		return items?.filter((item) =>
			(item as NewsType).title
				.toLowerCase()
				.includes(searchQuery.toLowerCase())
		);
	}
	return items;
};

const filteredResource = <T>(
	searchQuery: string,
	categoryQuery: string,
	items: T[]
) => {
	const lowercaseSearchQuery = searchQuery.toLowerCase();
	const lowercaseCategoryQuery = categoryQuery.toLowerCase();

	return items?.filter((item) => {
		const name = (item as ResourceType).name?.toLowerCase();
		const category = (item as ResourceType).category?.toLowerCase();

		if (searchQuery || categoryQuery !== "All") {
			return (
				(searchQuery ? name?.includes(lowercaseSearchQuery) : true) &&
				(categoryQuery !== "All"
					? category?.includes(lowercaseCategoryQuery)
					: true)
			);
		}

		return true;
	});
};

export { filteredNews, filteredResource };
