import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";
import { ListItemProps } from "components/Hoc/List/types";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";
import { NewsType } from "components/General/ListItems/News/news.types";
import useFetchList from "lib/utils/hooks/useFetchList";

export const URL = `./icons.json`;
export const QUERY_KEY = "icons";

function IconList() {
	const { data, isLoading, isError } = useFetchList(QUERY_KEY, URL);
	return (
		<List
			items={data}
			resourceName="github"
			itemComponent={
				Resource as React.FC<ListItemProps<ResourceType | NewsType>>
			}
			isLoading={isLoading}
			isError={isError}
		/>
	);
}

export default IconList;
