import { ResourceType } from "components/General/ListItems/Resource/utils/types";
import { QUERY_KEY_NEWS } from "pages/Newsfeed/utils/constants";

const getCategories = <T extends ResourceType>(
	items: T[],
	resourceName: string
): string[] => {
	if (resourceName === QUERY_KEY_NEWS) return [];

	return [...new Set(items?.map((item) => item?.category))];
};

export { getCategories };
