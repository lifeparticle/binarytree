import { QUERY_KEY_NEWS } from "pages/News";
import { ResourceType } from "../ListItems/Resource/resource.type";

const getCategories = <T extends ResourceType>(
	items: T[],
	resourceName: string
): string[] => {
	if (resourceName === QUERY_KEY_NEWS) return [];

	return [...new Set(items?.map((item) => item?.category))];
};

export { getCategories };
